import { useState, useEffect } from "react";

import type { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SkillList, type SkillType } from "@/utils/IconMap";

export const ScrollingSkills = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        opts={{ loop: true }}
        autoplayOpts={{
          stopOnInteraction: false,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          startDelay: 300,
        }}
        style={{ userSelect: "none" }} // Add this style to disable text selection
      >
        <CarouselContent>
          {SkillList.map((skill: SkillType, index) => (
            <CarouselItem
              className="basis-1/6 flex px-4 py-2 border border-slate-100 rounded-xl ml-12"
              key={index}
            >
              <div>
                <div className="flex flex-col">
                  <h3 className="text-md">{skill.name}</h3>
                  <p className="text-xs">{skill.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <br />
      <Carousel
        autoPlay={true}
        opts={{ loop: true }}
        autoplayOpts={{
          stopOnInteraction: false,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          startDelay: 300,
          direction: "backward",
        }}
        style={{ userSelect: "none" }} // Add this style to disable text selection
      >
        <CarouselContent>
          {SkillList.map((skill: SkillType, index) => (
            <CarouselItem
              className="basis-1/6 flex px-4 py-2 border border-slate-100 rounded-xl ml-12"
              key={index}
            >
              <div>
                <div className="flex flex-col">
                  <h3 className="text-md">{skill.name}</h3>
                  <p className="text-xs">{skill.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
