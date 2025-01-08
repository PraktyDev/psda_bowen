'use client'
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
    SheetFooter,
    SheetTitle,
} from "@/components/ui/sheet"  
import { MenuLinks } from "./MenuLinks"
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className='z-50 flex justify-between items-center pr-4 pl-2 laptop:px-5 py-2 w-full sticky top-0 bg-[#FFFEFE] shadow-md'>
      <div className="flex items-center justify-center gap-0 laptop:gap-5">
        <Image src={'/bowen-logo.png'} width={100} height={100} alt='junapril logo' className="z-50 object-fill laptop:object-cover w-full h-12 laptop:w-16 laptop:h-16" />
        <Image src={'/PDSA-logo.png'} width={100} height={100} alt='junapril logo' className="z-50 object-fill laptop:object-cover w-full h-16 laptop:w-20 laptop:h-20" />
      </div>

      <div className='hidden laptop:block'>
        <MenuLinks targetId="next" />
      </div>

      <div className="hidden laptop:block">
        <Link className='text-base rounded-full px-4 py-2 bg-red-500 hover:bg-red-400 text-slate-100 font-semibold' target="blank" href={'https:/bowenstudent.bowen.edu.ng/'}>
          Portal
        </Link> 
      </div>

      <div className='block laptop:hidden'>
        <Sheet>
          <SheetTrigger className='flex items-center'>
              <Menu className='h-8 w-8 text-red-600 hover:text-red-500' />
          </SheetTrigger>
          <SheetContent className=" flex flex-col items-center justify-center w-[300px]">
              <SheetHeader>
              <SheetTitle className='hidden'>Nav Links</SheetTitle>
              <SheetDescription className='flex flex-col gap-10'>
                <Link className={`link ${pathname === '/' ? 'text-red-500' : 'text-black font-medium hover:text-red-400'} text-2xl tablet:text-3xl`} href={'/'}>
                    Home
                </Link> 
                <Link className={`link ${pathname === '/about' ? 'text-red-500' : 'text-black font-medium hover:text-red-400'} text-2xl tablet:text-3xl`} href={'/about'}>
                    About
                </Link> 
                <Link className={`link ${pathname === '/leadership' ? 'text-red-500' : 'text-black font-medium hover:text-red-400'} text-2xl tablet:text-3xl text-nowrap`} href={'/leadership'}>
                    Leadership
                </Link> 
                <Link className={`link ${pathname === '/news' ? 'text-red-500' : 'text-black font-medium hover:text-red-400'} text-2xl tablet:text-3xl`} href={'/news'}>
                    News
                </Link> 
                <Link className='text-base rounded-full px-4 py-2 bg-red-500 hover:bg-red-400 text-slate-100 font-semibold' target="blank" href={'https:/bowenstudent.bowen.edu.ng/'}>
                    Portal
                </Link>
              </SheetDescription>
              </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default NavBar