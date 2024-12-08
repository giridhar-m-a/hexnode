"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import { PARTENERS } from "../__constants/Partener.images";

const PartenerCarousal = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {PARTENERS.map((partener: StaticImageData, i) => (
          <CarouselItem key={i} className="basis-1/3 lg:basis-[14.2857143%]">
            <Image src={partener} alt="parteners" height={95} width={260} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PartenerCarousal;
