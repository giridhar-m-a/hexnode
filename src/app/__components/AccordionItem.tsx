"use client";

import Link from "next/link";
import { useState } from "react";
import { PLATFORM_IMAGES } from "../__constants/platform.images";
import Image from "next/image";

type Props = {
  index: number;
  title: string;
  description: string;
  setIndex: (index: number | null) => void;
  selectedIndex: number | null;
  setImageIndex: (value: number) => void;
};

const AccordionItem: React.FC<Props> = ({
  index,
  title,
  description,
  setIndex,
  selectedIndex,
  setImageIndex,
}) => {
  const isSelected = selectedIndex === index;

  const onSelect = () => {
    setIndex(isSelected ? null : index); // Close if already selected, otherwise open
    setImageIndex(index);
  };

  return (
    <div
      className={
        isSelected
          ? "relative group active bg-[#fff] border border-[#D7D7D7] rounded-[15px] px-[30px]"
          : "relative group mx-[30px] border-b border-[#D7D7D7]"
      }
    >
      <h3
        onClick={onSelect}
        className={
          isSelected
            ? "text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left transition-[padding] duration-300 ease-in-out pt-[30px]"
            : "text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left transition-[padding] duration-300 ease-in-out py-[20px]"
        }
      >
        {title}
      </h3>
      <div
        className="block relative h-0 overflow-hidden transition-all duration-300 ease-out"
        style={{ height: isSelected ? "172px" : "0px" }}
      >
        <div className="pb-[30px]">
          <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
            {description}
          </p>
          <Link
            rel="noreferrer"
            className={`text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold ${
              !isSelected && "hidden"
            } md:inline-block mt-[20px]`}
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
          >
            Try Hexnode on your endpoints
          </Link>
        </div>
      </div>
    </div>
  );
};

type AccordionProps = {
  items: { title: string; description: string }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [index, setIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex items-start flex-col lg:flex-row justify-between md:pt-[50px]">
      <div
        className="shrink-0 md:w-[46%] md:max-w-[600px] h-full max-h-[565px] relative overflow-hidden"
        style={{ position: "sticky", top: "74px" }}
      >
        <Image
          src={PLATFORM_IMAGES[imageIndex]}
          alt="platforms"
          height={565}
          width={600}
        />
        <div
          className="slick-slider tabSlider slick-vertical slick-initialized"
          dir="ltr"
        >
          <div className="slick-list" style={{ height: "571px" }}>
            <div
              className="rounded-[20px] overflow-hidden transition-all duration-300 ease-out !opacity-0"
              style={{ width: "100%", display: "inline-block" }}
            >
              <Image
                src={PLATFORM_IMAGES[imageIndex]}
                alt="platforms"
                height={565}
                width={600}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[54%] md:max-w-[700px] shrink-0 w-full relative pl-[40px]">
        {items.map((item, i) => (
          <>
            <AccordionItem
              index={i}
              key={i}
              selectedIndex={index}
              setIndex={setIndex}
              title={item.title}
              description={item.description}
              setImageIndex={setImageIndex}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
