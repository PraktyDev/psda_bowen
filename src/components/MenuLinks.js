import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { usePathname } from 'next/navigation'
import Link from "next/link"
  
  export function MenuLinks({ targetId }) {
    const pathname = usePathname();

    const handleClick = () => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
            <div className={`link ${pathname === '/about' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2 text-nowrap`}>
                About
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>
              About
            </MenubarItem>
            <MenubarItem inset>
              Gallery
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <div className={`link ${pathname === '/leadership' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2`}>
                Leadership
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>
                Current Executives
            </MenubarItem>
            <MenubarItem inset>
                Past Executives
            </MenubarItem>
            <MenubarItem inset>
              Stakeholders
            </MenubarItem>
            <MenubarItem inset>
              Staff Adviser
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <div className={`link ${pathname === '/news' ? 'bg-red-600 text-slate-100 font-bold' : 'text-red-600 font-semibold hover:bg-red-100'} text-md rounded-md px-4 py-2`}>
                News
            </div> 
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem inset>
                Events
            </MenubarItem>
            <MenubarItem inset>
                New
            </MenubarItem>
          </MenubarContent>
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
  