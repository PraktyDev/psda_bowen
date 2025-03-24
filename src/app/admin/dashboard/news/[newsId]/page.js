import { NewsForm } from "@/components/NewsForm"
import { FetchData } from "../../../../../../services/apiService";

// In a real app, you would fetch the news data here
export default async function EditNewsPage({ params }) {
    const { newsId } = await params
    const newsIdData = await FetchData("GET", `/news/${newsId}`);
    
    const news = newsIdData.news

  return (
    <div className="flex-1 space-y-4 p-4 tablet:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl tablet:text-3xl font-bold tracking-tight text-[#1F0954]">Edit News Article</h2>
      </div>
      <NewsForm defaultValues={news} />
    </div>
  )
}
