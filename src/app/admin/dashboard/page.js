import { Users, Calendar, Newspaper } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function page() {
  return (
    <div className="flex-1 space-y-4 p-4 tablet:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <div className="grid gap-4 tablet:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News Articles</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+18 from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
            <CardDescription>You have 12 events scheduled for the upcoming months.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-14 h-14 rounded-md overflow-hidden mr-4">
                    <img
                      src={`/placeholder.svg?height=56&width=56&text=Event${i}`}
                      alt={`Event ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Tech Conference {i}</p>
                    <p className="text-sm text-muted-foreground">March {10 + i}, 2025 • San Francisco, CA</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>


        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent News</CardTitle>
            <CardDescription>You have published 24 news articles.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-14 h-14 rounded-md overflow-hidden mr-4">
                    <img
                      src={`/placeholder.svg?height=56&width=56&text=News${i}`}
                      alt={`News ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Industry Update {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Published {i} day{i > 1 ? "s" : ""} ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}