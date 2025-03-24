import MenuBar from "@/components/MenuBar";
import { SubscribersTable } from "./SubscribersTable";
import { FetchData } from "../../../../../services/apiService";


export default async function page() {
  const subscribersData = await FetchData("GET", "/subscribers");

  const subscribers = subscribersData.subscribers


  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-2">
        <MenuBar />
        <h2 className="text-xl tablet:text-3xl text-[#1F0954] font-bold tracking-tight">
          Email Subscribers
        </h2>
      </div>
      </div>
      <SubscribersTable subscribers={subscribers}/>
    </div>
  )
}

