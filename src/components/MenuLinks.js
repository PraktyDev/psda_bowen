import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link"
  
  export function MenuLinks({ targetId, currentId, pastId }) {
    const pathname = usePathname();
    const router = useRouter()

    const handleClick = () => {
      const target = document.getElementById(targetId)

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }


    const handleCurrentClick = () =>{
      router.push('/leadership')
      const current = document.getElementById(currentId)

      if (current) {
        current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const handlePastClick = () =>{
      router.push('/leadership')
      const past = document.getElementById(pastId)

      if (past) {
        past.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link className={`link ${pathname === '/' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2`} href={'/'}>
                Home
            </Link> 
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <Link href={'/about'} className={`link ${pathname === '/about' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2 text-nowrap`}>
                About
            </Link>
          </MenubarTrigger>
          {/* <MenubarContent>
            <MenubarItem inset>
              About
            </MenubarItem>
            <MenubarItem inset>
              Gallery
            </MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <Link href={'/leadership'} className={`link ${pathname === '/leadership' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2`}>
                Leadership
            </Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset onClick={handleCurrentClick}>
                Current Executives
            </MenubarItem>
            <MenubarItem inset onClick={handlePastClick}>
                Past Executives
            </MenubarItem>
            {/* <MenubarItem inset>
              Stakeholders
            </MenubarItem>
            <MenubarItem inset>
              Staff Adviser
            </MenubarItem> */}
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <Link href={'/news'} className={`link ${pathname === '/news' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2`}>
                News
            </Link> 
          </MenubarTrigger>
          {/* <MenubarContent>
            <MenubarItem inset>
                Events
            </MenubarItem>
            <MenubarItem inset>
                New
            </MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <div onClick={handleClick} className={`link ${pathname === '/contact' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2`}>
                Contact
            </div> 
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
  }
  