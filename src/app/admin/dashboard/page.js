import { Users, Calendar, Newspaper, LogOut, Plus } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventForm } from "@/components/EventForm";
import { NewsForm } from "@/components/NewsForm";
import MenuBar from "@/components/MenuBar";
import { FetchData } from "../../../../services/apiService";
import Logout from "@/components/Logout";

export default async function page() {
  const eventsData = FetchData("GET", "/events");
  const newsData = FetchData("GET", "/news");
  const subscribersData = await FetchData("GET", "/subscribers");

  const [events, news, subscribers] = await Promise.all([eventsData, newsData, subscribersData]);

  function getDaysSincePosted(dateString) {
    const postedDate = new Date(dateString);

    if (isNaN(postedDate.getTime())) {
      throw new Error("Invalid date format provided");
    }

    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postedDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  function getItemsCreatedLastMonth(items) {
    // Get the current date
    const currentDate = new Date();

    // Calculate the date 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(currentDate.getDate() - 30);

    // Filter items created within the last 30 days
    const recentItems = items.filter((item) => {
      // Parse the item's creation date
      const creationDate = new Date(item.createdAt || item.subscribedAt);

      // Check if the date is valid
      if (isNaN(creationDate.getTime())) {
        console.warn(`Invalid date format for item: ${JSON.stringify(item)}`);
        return false;
      }

      // Check if the creation date is after the date 30 days ago
      return creationDate >= thirtyDaysAgo;
    });

    // Return the count of recent items
    return recentItems.length;
  }


  return (
    <div className="relative flex-1 space-y-4 p-4 tablet:p-8 pt-6">
      <Logout />
      <div className="flex items-center justify-start gap-2">
        <MenuBar />
        <h2 className="text-xl tablet:text-3xl text-[#1F0954] font-bold tracking-tight">
          Dashboard
        </h2>
      </div>

      <div className="grid gap-4 tablet:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.events.length}</div>
            <p className="text-xs text-muted-foreground">
              +{getItemsCreatedLastMonth(events.events)} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{news.news.length}</div>
            <p className="text-xs text-muted-foreground">
              +{getItemsCreatedLastMonth(news.news)} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.subscribers.length}</div>
            <p className="text-xs text-muted-foreground">+{getItemsCreatedLastMonth(subscribers.subscribers)} from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle>Recent News</CardTitle>
              <CardDescription>
                You have published {news.news.length} news article(s).
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger className="flex gap-1 items-center justify-center rounded-md text-sm text-white py-1.5 px-4 bg-[#1F0954] hover:bg-[#1f0954dc]">
                <Plus size={14} />
                Add News
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <NewsForm />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.news
                .sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .splice(0, 7)
                .map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-14 h-14 rounded-md overflow-hidden mr-4">
                      <img
                        src={item.image}
                        alt={`News ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-4 tablet:col-span-3">
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle>Recent Events</CardTitle>
              <CardDescription>
                You have published {events.events.length} event(s).
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger className="flex gap-1 items-center justify-center rounded-md text-sm text-white py-1.5 px-4 bg-[#1F0954] hover:bg-[#1f0954dc]">
                <Plus size={14} />
                Add Events
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <EventForm />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.events
                .sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .splice(0, 7)
                .map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-14 h-14 rounded-md overflow-hidden mr-4">
                      <img
                        src={item.image}
                        alt={`Events ${item.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Published {getDaysSincePosted(item.createdAt)} day(s)
                        ago
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
