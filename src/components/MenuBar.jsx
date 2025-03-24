import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import AdminSidebar from "@/components/AdminSidebar";
import { Menu } from "lucide-react";
  

const MenuBar = () => {
  return (
    <Sheet>
    <SheetTrigger>
    <div className="tablet:hidden flex items-center justify-center">
      <Menu size={20} />
    </div>
    </SheetTrigger>
    <SheetContent side="left" className="w-[101px]">
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetDescription>
        </SheetDescription>
      </SheetHeader>
      <AdminSidebar />
    </SheetContent>
  </Sheet>
  )
}

export default MenuBar