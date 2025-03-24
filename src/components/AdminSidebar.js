'use client'
import { Calendar, Home, Newspaper, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const AdminSidebar = () => {

    const pathname = usePathname()


  return (
    <div className="fixed left-0 top-0 h-full w-[100px] tablet:w-[110px] laptop:w-[120px] bg-[#1F0954] flex flex-col items-center py-9 gap-10">
        <div className="flex flex-col gap-5 justify-center items-center">
            <Image
                src="/PDSA-logo.png"
                alt="Logo"
                width={1000}
                height={1000}
                priority={true}
                className="object-cover size-20 block"
            />
        </div>


        <div className="mt-10 flex flex-col gap-7 justify-center items-center">
            <Link href={'/admin/dashboard'} className={`link ${pathname === '/admin/dashboard' ? 'bg-white text-[#1F0954] rounded-lg py-3 px-6' : 'text-white'}`}>
                <Home />
            </Link>
            <Link href={'/admin/dashboard/events'} className={`link ${pathname === '/admin/dashboard/events' ? 'bg-white text-[#1F0954] rounded-lg py-3 px-6' : 'text-white'}`}>
                <Calendar />
            </Link>
            <Link href={'/admin/dashboard/news'} className={`link ${pathname === '/admin/dashboard/news' ? 'bg-white text-[#1F0954] rounded-lg py-3 px-6' : 'text-white'}`}>
                <Newspaper />
            </Link>
            <Link href={'/admin/dashboard/subscribers'} className={`link ${pathname === '/admin/dashboard/subscribers' ? 'bg-white text-[#1F0954] rounded-lg py-3 px-6' : 'text-white'}`}>
                <Users />
            </Link>
        </div>
  </div>
  )
}

export default AdminSidebar