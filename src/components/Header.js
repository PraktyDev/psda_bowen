"use client"
import { MapPin, Mail, PhoneCall, CheckCheck } from 'lucide-react'
import { Copy } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from 'react'


const Header = () => {
    const [icon, setIcon] = useState(<Copy />)

    const handleCopy = async () =>{
        const email = 'info@pdsabowen.com.ng'
        await navigator.clipboard.writeText(email)
        setIcon(<CheckCheck />)
        setTimeout(()=> {
            setIcon(<Copy />)
        }, 3000)
    }


  return (
    <div className='flex justify-center items-center py-2 gap-2'>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><MapPin color="red" /></Button>
            </DialogTrigger>
            <DialogContent className="tablet:max-w-md">
                <DialogHeader>
                <DialogTitle className="text-red-600">Our Location</DialogTitle>
                <DialogDescription>
                    Find us here
                </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center text-center font-semibold text-red-600">
                    Iwo, Osun State, Nigeria; 7°37′25″N 4°11′20″E﻿ / ﻿7.6236297°N 4.1889662°E
                </div>
            </DialogContent>
        </Dialog>

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><Mail color="red" /></Button>
            </DialogTrigger>
            <DialogContent className="tablet:max-w-md">
                <DialogHeader>
                <DialogTitle className="text-red-600">Our Email</DialogTitle>
                <DialogDescription>
                    Write to us through our email address
                </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input
                        id="link"
                        defaultValue="info@pdsabowen.com.ng"
                        readOnly
                        />
                    </div>
                    <Button onClick={handleCopy} size="sm" className="px-3 bg-red-600 hover:bg-red-500">
                        <span className="sr-only">Copy</span>
                        {icon}
                    </Button>
                </div>
                <DialogFooter className="tablet:justify-start">
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                    Close
                    </Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><PhoneCall color="red" /></Button>
            </DialogTrigger>
            <DialogContent className="tablet:max-w-md">
                <DialogHeader>
                <DialogTitle className="text-red-600">Our Phone</DialogTitle>
                <DialogDescription>
                    Talk to someone via our phone line
                </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="flex items-center space-x-2 text-2xl tablet:text-4xl font-semibold text-red-600">
                        +2348101082573
                    </h1>
                    <p className='text-sm text-slate-600 uppercase'>Association President</p>
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Header