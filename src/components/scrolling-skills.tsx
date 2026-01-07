import { useState, useEffect } from "react";

import type { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SkillList, SkillList2, type SkillType } from "@/utils/IconMap";
import { SkillCard } from "./skill-card";

export const ScrollingSkills = () => {
  const carouselClnsAlt = "basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ml-6";
  const carouselClns = "basis-auto shrink-0 gap-3";
  return (
    <div className="flex flex-col gap-y-6 max-w-[100%]">
      <Carousel
        autoPlay={true}
        opts={{ loop: true }}
        autoplayOpts={{
          stopOnInteraction: false,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          playOnInit: true,
          startDelay: 300,
        }}
        style={{ userSelect: "none" }}
      >
        <CarouselContent>
          {[...SkillList, ...SkillList].map((skill: SkillType, index) => (
            <CarouselItem className={carouselClns} key={index}>
              <SkillCard skill={skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        autoPlay={true}
        opts={{ loop: true }}
        autoplayOpts={{
          stopOnInteraction: false,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          playOnInit: true,
          startDelay: 300,
          direction: "backward",
        }}
        style={{ userSelect: "none" }}
      >
        <CarouselContent>
          {SkillList2.map((skill: SkillType, index) => (
            <CarouselItem className={carouselClns} key={index}>
              <SkillCard skill={skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
