import Link from 'next/link'
import { FaSquareXTwitter } from "react-icons/fa6"
import { RiInstagramFill} from "react-icons/ri"
import { FaFacebookSquare } from "react-icons/fa"
import { AiFillTikTok } from "react-icons/ai"
import Image from 'next/image'
import Subscription from './Subscription'


const Footer = () => {
  return (
    <div id="next" className='flex flex-col justify-center w-full py-6 overflow-x-hidden bg-red-600 bg-opacity-30'>
        <div className="flex flex-col laptop:flex-row gap-5 justify-between px-2 laptop:px-5 pt-3 pb-2">
            <div className="flex flex-col gap-2 items-center laptop:items-start laptop:basis-1/3">
                <div className='flex gap-2 items-center justify-center'>
                    <Link href={'/'} >
                        <Image src={'/PDSA-logo.png'} width={100} height={100} alt='pdsa bowen logo' className="z-50 object-cover w-16 h-16" />
                    </Link>
                    <h1 className='text-2xl font-semibold text-red-600'>PDSA_Bowen</h1>
                </div>
                <p className='w-auto laptop:w-[487px] text-base text-center laptop:text-left'>
                    Political Science and Diplomatic Student Association <br /> Bowen Chapter
                </p>
                <div className='flex gap-4 laptop:mr-20'>
                    <Link target="blank" href={'https://x.com/'} className='hover:opacity-85'>
                        <FaSquareXTwitter size={30} />
                    </Link>

                    <Link target="blank" href={'https://www.facebook.com/'} className='hover:opacity-85'>
                        <FaFacebookSquare className='text-blue-700' size={30} />
                    </Link>

                    <Link target="blank" href={'https://www.instagram.com/'} className='hover:opacity-85'>
                        <RiInstagramFill className='text-pink-900' size={30} />
                    </Link>

                    <Link target="blank" href={'https://www.tiktok.com/'} className='hover:opacity-85'>
                        <AiFillTikTok size={30} />
                    </Link>
                </div>
            </div>

            <div className='flex justify-between w-full gap-14 laptop:basis-1/3'>
                <div className='text-lg flex flex-col gap-4 grow items-center'>
                    <h1 className='font-bold text-nowrap text-red-600'>Quick Links</h1>
                    <div className='flex laptop:flex-col gap-5 text-base'>
                        <Link href={'/'} >
                            <p className='hover:opacity-80'>Home</p>
                        </Link>
                        <Link href={'/about'} >
                            <p className='hover:opacity-80'>About Us</p>
                        </Link>
                        <Link href={'/leadership'} >
                            <p className='hover:opacity-80'>Leadership</p>
                        </Link>
                        <Link href={'/news'} >
                            <p className='hover:opacity-80'>News</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 laptop:basis-1/3'>
                <h1 className='text-lg font-semibold text-center laptop:text-left text-red-600'>Newsletter</h1>
                <div className='flex flex-col gap-3 items-center laptop:items-start'>
                    <Subscription />
                    <p className='text-base'>Sign up for our latest news & articles. We won't send you spam mails</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer