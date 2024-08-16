import type { SkillType } from "@/utils/IconMap";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { AnimatedIcon } from "./animated-icon.tsx";
import { useRef } from "react";

export const SkillCard = ({ skill }: { skill: SkillType }) => {
  const iconRef = useRef(null) as React.MutableRefObject<any>;
  const triggerAnimation = (reverse = false) => {
    if (reverse) {
      //@ts-ignore
      iconRef.current.reverseAnim();
    } else {
      //@ts-ignore
      iconRef.current.forwardAnim();
    }
  };
  return (
    <Card
      className="h-full flex"
      onMouseEnter={() => triggerAnimation()}
      onMouseLeave={() => triggerAnimation(false)}
      id={skill.name}
    >
      <div className="p-2 lg:text-5xl text-4xl flex flex-col justify-center">
        <AnimatedIcon ref={iconRef} direction="forward" effectId={skill.name}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <mask id="lineMdBeerAltFilledLoop0">
              <g transform="translate(0 16)">
                <g>
                  <path
                    stroke="#fff"
                    stroke-width="2"
                    d="M18 7C16 7 15 9 13 9C11 9 10 7 8 7C6 7 5 9 3 9C1 9 0 7 -2 7C-4 7 -5 9 -7 9"
                  />
                  <path
                    fill="#fff"
                    d="M18 7C16 7 15 9 13 9C11 9 10 7 8 7C6 7 5 9 3 9C1 9 0 7 -2 7C-4 7 -5 9 -7 9V24H18z"
                  />
                  <animateMotion
                    calcMode="linear"
                    dur="3s"
                    path="M0 0h10"
                    repeatCount="indefinite"
                  />
                </g>
                <animateMotion
                  fill="freeze"
                  begin="0.6s"
                  calcMode="linear"
                  dur="0.6s"
                  path="M0 0v-16"
                />
              </g>
            </mask>
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="60"
              stroke-dashoffset="60"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 3L16 21H7L5 3z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="60;0"
              />
            </path>
            <path
              fill="currentColor"
              d="M18 3L16 21H7L5 3z"
              mask="url(#lineMdBeerAltFilledLoop0)"
            />
          </svg>
        </AnimatedIcon>
      </div>
      <div>
        <CardHeader className="pb-2 pl-2">
          <CardTitle className="text-lg mb-0">{skill.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-xs pl-2">
          <p className="mb-0">{skill.description}</p>
        </CardContent>
      </div>
    </Card>
  );
};
