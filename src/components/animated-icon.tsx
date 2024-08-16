import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type ReactNode,
} from "react";
import type { SVGProps } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  direction: "forward" | "reverse";
  effectId: string;
}

export const AnimatedIcon = forwardRef(
  (props: AnimatedIconProps & SVGProps<SVGSVGElement>, ref) => {
    const animateRefs = useRef<SVGAnimateElement[]>([]);

    useImperativeHandle(ref, () => ({
      forwardAnim: () => triggerAnimation(),
      reverseAnim: () => triggerAnimation(true),
    }));

    useEffect(() => {
      const effectIdElement = document.getElementById(props.effectId);
      let possibleAnimateRefs: NodeListOf<SVGAnimateElement> | null;
      if (!effectIdElement) {
        possibleAnimateRefs = document.querySelectorAll(
          `#${props.effectId} animate`
        );
      } else {
        possibleAnimateRefs = effectIdElement.querySelectorAll("animate");
      }
      animateRefs.current = Array.from(
        possibleAnimateRefs!
      ) as SVGAnimateElement[];
    }, []); // run only once

    useEffect(() => {
      if (props.direction) {
        triggerAnimation();
      } else {
        triggerAnimation(true);
      }
    }, [props.direction]);

    const triggerAnimation = (reverse = false) => {
      animateRefs.current.forEach((animate) => {
        if (reverse) {
          // Reverse the animation
          const values = animate.getAttribute("values");
          if (values) {
            const reversedValues = values.split(";").reverse().join(";");
            animate.setAttribute("values", reversedValues);
          }
        } else {
          // Reset to normal animation
          const values = animate.getAttribute("values");
          if (values) {
            const reversedValues = values.split(";").reverse().join(";");
            animate.setAttribute("values", reversedValues);
          }
        }
        animate.beginElement();
      });
    };

    return <div>{props.children}</div>;
  }
);
