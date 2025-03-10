'use client'

import CardUpTo from '@/components/CardUpTo'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  '/bg1.jpg',
  '/bg2.jpg',
  '/bg3.jpg',
]

export default function page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <section className="relative min-w-screen h-screen overflow-hidden mb-5">
      <div className='absolute bg-red-600 opacity-30 w-screen h-screen z-10'></div>
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute flex flex-col gap-10 laptop:gap-7 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 drop-shadow-lg">
        <div className="relative group">
          <Image
            src="/PDSA-logo.png"
            width={1000}
            height={1000}
            alt="PDSA logo"
            className="object-cover w-52 h-52 tablet:w-64 tablet:h-64 laptop:w-72 laptop:h-72 rounded-full border-4 border-red-600 transition-all duration-700 ease-in-out group-hover:border-transparent"
          />
          <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/bowen-logo.png"
              width={1000}
              height={1000}
              alt="bowen logo"
              className="object-cover w-36 h-36 tablet:w-44 tablet:h-44 laptop:w-52 laptop:h-52 opacity-0 transform scale-75 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
            />
          </div>
        </div>
        
        <div className='font-bold text-white text-center flex flex-col gap-4 items-center'>
          <h1 className='text-5xl tablet:text-6xl laptop:text-[100px] text-red-50'>PDSA_BOWEN</h1>
          <h5 className='text-2xl tablet:text-3xl laptop:text-4xl text-red-50'>Political Science and Diplomatic Student Association</h5>
          <Separator className='bg-red-400 h-3 rounded-full w-32 laptop:w-52 -mt-2' />
        </div>
      </div>
    </section>

    <section className='flex flex-col gap-4 laptop:flex-row justify-between items-center mx-auto px-5 py-10 laptop:py-0 container laptop:max-w-6xl border border-red-200 shadow-sm rounded-none tablet:rounded-md bg-red-50'>
      <Image
        src="/oluwatimileyin-akinnirun.png"
        width={1000}
        height={1000}
        alt="PDSA logo"
        className="object-cover w-1/2 h-1/2 laptop:py-4"
      />
      <div className='flex flex-col gap-12'>
        <h2 className='font-bold text-xl laptop:text-2xl text-center'>Words from Our Association President</h2>
        <p className='text-justify -mt-10'>Welcome to the official website of the Political Science and Diplomatic Students Association (PDSA)!<br /><br />As president, it is both an honor and a privilege to lead this vibrant community of students passionate about politics, diplomacy, and global affairs. PDSA is an association of three departments, Political Science, International Relations, and Politics and Law. We are dedicated to fostering leadership, collaboration, and professional growth through events, discussions, and networking opportunities that bridge the gap between theory and practice.<br />This website is your gateway to all we do—whether you’re a student, alum, or professional, we invite you to explore, connect, and join us in shaping a better future.<br /><br />Warm regards,</p>
        <div className='flex flex-col items-center laptop:items-start'>
          <p className='text-lg font-semibold'>Oluwatimileyin Akinnirun</p>
          <p className=''>President, PDSA</p>
        </div>
      </div>
    </section>

    <section className='container mx-auto grid grid-cols-2 laptop:grid-cols-4 gap-4 my-5 px-2'>
      <CardUpTo endNumber="150" text="Past Leaders" />
      <CardUpTo endNumber="50" text="Current Leaders" />
      <CardUpTo endNumber="20" text="Staff Advisers" />
      <CardUpTo endNumber="2000" duration="1000" text="Total Members" />
    </section>
    </>
  )
}

