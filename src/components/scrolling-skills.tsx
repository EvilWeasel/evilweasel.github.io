import { useState, useEffect } from "react";

import type { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SkillList, SkillList2, type SkillType } from "@/utils/IconMap";
import { SkillCard } from "./skill-card";

export const ScrollingSkills = () => {
  return (
    <div className="flex flex-col gap-y-6">
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
          {SkillList.map((skill: SkillType, index) => (
            <CarouselItem className="basis-1/4 ml-12" key={index}>
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
            <CarouselItem className="basis-1/4 ml-12" key={index}>
              <SkillCard skill={skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
