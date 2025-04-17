"use client"
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function Slider() {
  const excos = [
    {
      src: "/eniola-falade-sharon.png",
      name: "Eniola Falade Sharon",
      post: "Social Director"
    },
    {
      src: "/oluwalusin-ayomikale-esther.png",
      name: "Oluwalusin Ayomikale Esther",
      post: "Welfare Director"
    },
    {
      src: "/oyedele-anita-ilerioluwa.png",
      name: "Oyedele Anita Ilerioluwa",
      post: "Academic director (IRD)"
    },
    {
      src: "/laval-gold-mariam.png",
      name: "Lawal Gold Mariam",
      post: "Assistant Social Director"
    },
    {
      src: "/dahwa-faith.png",
      name: "Dawha Faith",
      post: "General Secretary"
    },
    {
      src: "/laoye-praise-ifeoluwa.png",
      name: "Laoye Praise Ifeoluwa",
      post: "Academic Director (PAL)"
    },
    {
      src: "/akinbode-tosin.png",
      name: "Akinbode Tosin",
      post: "Asst. Sports Director"
    },
    {
      src: "/adeyemi-atanda.png",
      name: "Adeyemi Atanda",
      post: "Academic Director (Political Science)"
    },
    {
      src: "/ayodeji-olurakinyo.png",
      name: "Ayodeji Olurakinyo",
      post: "Chief Whip"
    },
    {
      src: "/lekan-oluponna-oluwakiibati.png",
      name: "Lekan-Oluponna Oluwakiibati",
      post: "Asst. General Secretary"
    },
    {
      src: "/osomah-abigail.png",
      name: "Oshomah Abigail. A",
      post: "Public Relations Officer (PRO) for International Relations and Political Science"
    },
    {
      src: "/amusan-maxwell.png",
      name: "Amusan Maxwell",
      post: "PRO, Politics and Law"
    },
    {
      src: "/afolalu-mosopeoluwa.png",
      name: "Afolalu mosopefoluwa",
      post: "Sports director"
    },
    {
      src: "/adebayo-boluwatife-victoria.png",
      name: "Adebayo Boluwatife Victoria",
      post: "PDSA financial secretary"
    },
    {
      src: "/arowotosona-inioluwa-esther.png",
      name: "Arowotosuna inioluwa Esther",
      post: "Asst. Welfare director"
    },
    {
      src: "/treasurer.jpg",
      name: "Augustine Precious",
      post: "Treasurer"
    },
  ]  

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full container my-6 relative"
    >
      <CarouselContent className="">
        {excos.map((exco, index) => (
          <CarouselItem
            key={index}
            className="pl-2 tablet:pl-4 tablet:basis-1/2 laptop:basis-1/3"
          >
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image src={exco.src} alt='exco image' width={1000} height={1000} className="object-cover" />
                  <div className="absolute bottom-6 bg-black bg-opacity-70 px-7 mb-2 rounded-md flex flex-col gap-1 items-center justify-center">
                    <span className=" text-base text-center text-wrap text-white font-semibold">{exco.name}</span>
                    <span className=" text-sm text-center text-wrap text-white font-light">{exco.post}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden absolute -bottom-4 mx-auto justify-center items-center w-full max-w-xl">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
