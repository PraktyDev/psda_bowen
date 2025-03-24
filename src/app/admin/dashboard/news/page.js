import { Plus } from "lucide-react";
import { NewsTable } from "./NewsTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewsForm } from "@/components/NewsForm";
import MenuBar from "@/components/MenuBar";
import { FetchData } from "../../../../../services/apiService";

export default async function page() {
      const newsData = await FetchData("GET", "/news");
    
      const news = newsData.news



  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-2">
        <MenuBar />
        <h2 className="text-xl tablet:text-3xl text-[#1F0954] font-bold tracking-tight">
          News
        </h2>
      </div>
        <Dialog>
          <DialogTrigger className="flex gap-2 items-center justify-center rounded-md text-sm text-white py-1.5 px-4 bg-[#1F0954] hover:bg-[#1f0954dc]">
            <Plus size={15} />
            Add News
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription>
              </DialogDescription>
            </DialogHeader>
            <NewsForm />
          </DialogContent>
        </Dialog>
      </div>
      <NewsTable news={news} />
    </div>
  );
}
