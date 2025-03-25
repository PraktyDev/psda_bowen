import { formatDate } from "date-fns";
import Link from "next/link";
import { FetchData } from "../../../../../services/apiService";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const page = async ({params}) => {
      const { newsId } = await params
      const newsIdData = await FetchData("GET", `/news/${newsId}`);
      
      const news = newsIdData.news


      const formatDate = (dateString)=>{
        const postedDate = new Date(dateString);
        return postedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      }


  return (
    <div className="container mx-auto px-4 py-8 mb-10">
      <Link
        href="/news"
        className="inline-flex items-center text-sm font-medium text-primary mb-6"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to all news
      </Link>

      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <time className="text-sm text-muted-foreground">
            {formatDate(news.createdAt)}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight tablet:text-4xl laptop:text-5xl">
            {news.title}
          </h1>
        </header>

        <div className="relative mb-8 w-full overflow-hidden rounded-lg h-[550px]">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="prose prose-lg max-w-none dark:prose-invert"
        >{news.description}</div>
      </article>
    </div>
  );
};

export default page;
