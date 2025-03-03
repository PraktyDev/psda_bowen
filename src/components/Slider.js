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
      src: "/presentExcos/eniola-falade-sharon.jpg",
      name: "Eniola Falade Sharon",
      post: "Social Director"
    },
    {
      src: "/presentExcos/oluwalusin-ayomikale-esther.jpg",
      name: "Oluwalusin Ayomikale Esther",
      post: "Welfare Director"
    },
    {
      src: "/presentExcos/oyedele-anita-ilerioluwa.jpg",
      name: "Oyedele Anita Ilerioluwa",
      post: "Academic director (IRD)"
    },
    {
      src: "/presentExcos/laval-gold-mariam.jpg",
      name: "Lawal Gold Mariam",
      post: "Assistant Social Director"
    },
    {
      src: "/presentExcos/dahwa-faith.jpg",
      name: "Dawha Faith",
      post: "General Secretary"
    },
    {
      src: "/presentExcos/laoye-praise-ifeoluwa.jpg",
      name: "Laoye Praise Ifeoluwa",
      post: "Academic Director (PAL)"
    },
    {
      src: "/presentExcos/akinbode-tosin.jpg",
      name: "Akinbode Tosin",
      post: "Asst. Sports Director"
    },
    {
      src: "/presentExcos/adeyemi-atanda.jpg",
      name: "Adeyemi Atanda",
      post: "Academic Director (Political Science)"
    },
    {
      src: "/presentExcos/ayodeji-olurakinyo.jpg",
      name: "Ayodeji Olurakinyo",
      post: "Chief Whip"
    },
    {
      src: "/presentExcos/lekan-oluponna-oluwakiibati.jpg",
      name: "Lekan-Oluponna Oluwakiibati",
      post: "Asst. General Secretary"
    },
    {
      src: "/presentExcos/osomah-abigail.jpg",
      name: "Oshomah Abigail. A",
      post: "Public Relations Officer (PRO) for International Relations and Political Science"
    },
    {
      src: "/presentExcos/amusan-maxwell.jpg",
      name: "Amusan Maxwell",
      post: "PRO, Politics and Law"
    },
    {
      src: "/presentExcos/afolalu-mosopeoluwa.jpg",
      name: "Afolalu mosopefoluwa",
      post: "Sports director"
    },
    {
      src: "/presentExcos/adebayo-boluwatife-victoria.jpg",
      name: "Adebayo Boluwatife Victoria",
      post: "PDSA financial secretary"
    },
    {
      src: "/presentExcos/arowotosona-inioluwa-esther.jpg",
      name: "Arowotosuna inioluwa Esther",
      post: "Asst. Welfare director"
    },
  ]  

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-6xl my-6 relative"
    >
      <CarouselContent className="px-4 -ml-2 tablet:-ml-4">
        {excos.map((exco, index) => (
          <CarouselItem
            key={index}
            className="pl-2 tablet:pl-4 tablet:basis-1/2 laptop:basis-1/3"
          >
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image src={exco.src} alt='exco image' width={1000} height={1000} className="object-cover h-96" />
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
