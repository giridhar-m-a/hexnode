"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { review } from "../__constants/reviews";
import Autoplay from "embla-carousel-autoplay";

const ReviewSlider: React.FC<{ items: review[] }> = ({ items }) => {
  return (
    <div>
      <Carousel
        className="py-14 w-full lg:w-[74%] lg:left-[12%]"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ align: "center", loop: false }}
      >
        <CarouselContent style={{ height: "320px" }}>
          {items.map((item: review, i) => (
            <CarouselItem key={i}>
              <div
                aria-hidden="true"
                style={{ outline: "none", width: "960px" }}
              >
                <div>
                  <div className="flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group ">
                    <div className="max-h-[400px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[unset] md:h-[unset] lg:w-[320px] lg:h-[320px] relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden ">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="object-cover align-middle"
                      />
                    </div>
                    <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow">
                      <div className="md:min-h-[135px] md:max-h-[135px] md:overflow-scroll px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px] cusreviewslider_hide-scrollbar__lQqUC">
                        <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                          {item.review}
                        </h4>
                      </div>
                      <div className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5">
                        <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold ">
                          {item.name}
                        </p>
                        <small className="text-center md:text-left w-full mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                          {item.designation}
                        </small>
                        <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">
                          {item.company}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute leading-[0px]  w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] cursor-not-allowed group translate-x-[-62px] lg:translate-x-[-50%] lg:translate-y-[50%] " />
        <CarouselNext
          className=" cursor-pointer absolute leading-[0px] lg:top-[0%]] w-[56px] h-[56px] rounded-[12px] bg-[#F7F7F7] group translate-x-[8px] lg:translate-x-[50%] lg:translate-y-[50%] 
        "
        />
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
