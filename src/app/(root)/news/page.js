import { MarqueeEvent } from "@/components/EventCard";
import { Card, CardContent } from "@/components/ui/card";
import { FetchData } from "../../../../services/apiService";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const page = async () => {
  const newsData = await FetchData("GET", "/news");

  const news = newsData.news;

  const formatDate = (dateString) => {
    const postedDate = new Date(dateString);
    return postedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="flex flex-col mb-10">
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="text-2xl laptop:text-4xl my-4 py-2 px-8 bg-red-600 bg-opacity-30 text-red-600 font-semibold rounded-lg">
          Events
        </div>
        <MarqueeEvent />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center container mx-auto px-4">
        <div className="text-2xl laptop:text-4xl my-4 py-2 px-8 bg-red-600 bg-opacity-30 text-red-600 font-semibold rounded-lg">
          News
        </div>
        <div className="w-full grid grid-cols-1 laptop:grid-cols-2 gap-2">
          {news
            .sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map((item) => (
              <Link href={`/news/${item.id}`}>
                <Card
                  key={item.id}
                  className="rounded-md  group cursor-pointer border border-[#e6aaaa] bg-white transition-all hover:border-red-400 hover:shadow-lg"
                >
                  <CardContent className="p-2 flex gap-4">
                    <Image
                      src={item.image}
                      alt={`${item.title} news picture`}
                      className={`object-cover rounded-md shadow-md h-20 w-20`}
                      height={1000}
                      width={1000}
                    />
                    <div className="flex flex-col gap-1 justify-center w-full">
                      <h2 className="text-xl font-medium">{item.title}</h2>
                      <p className="text-sm text-gray-600 font-light truncate">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-600 font-light">
                        Posted: {formatDate(item.createdAt)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              // <Link key={item.id} href={`/news/${item.id}`} className="group">
              //   <article className="overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent/50">
              //     <div className="relative w-full overflow-hidden">
              //       <Image
              //         src={item.image}
              //         alt={`${item.title} news picture`}
              //         fill
              //         className="object-cover transition-transform duration-300 group-hover:scale-105"
              //         priority={false}
              //       />
              //     </div>
              //     <div className="p-4">
              //       <time className="text-sm text-muted-foreground">
              //         Posted: {formatDate(item.createdAt)}
              //       </time>
              //       <h2 className="mt-2 text-xl font-semibold tracking-tight">
              //         {item.title}
              //       </h2>
              //       <p className="mt-2 line-clamp-3 truncate text-muted-foreground">
              //         {item.description}
              //       </p>
              //       <div className="mt-4 flex gap-1 items-center text-sm font-medium text-primary">
              //         Read more 
              //         <ArrowRight size={14} />
              //       </div>
              //     </div>
              //   </article>
              // </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default page;
