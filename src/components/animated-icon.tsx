import { useEffect, useRef, type ReactNode } from "react";
import type { SVGProps } from "react";

interface AnimatedIconProps {
  children: ReactNode;
  playAnimation: boolean;
  reverseAnimation: boolean;
}

export function AnimatedIcon(
  props: AnimatedIconProps & SVGProps<SVGSVGElement>
) {
  const animateRefs = useRef<SVGAnimateElement[]>([]);

  // on component mount, store the animate elements in the ref dynamically
  // to be able to trigger the animation
  // This is necessary because this component is used for any svg icon passed in as child
  // and the animate elements are different for each icon
  useEffect(() => {
    animateRefs.current = Array.from(
      document.querySelectorAll("animate")
    ) as SVGAnimateElement[];
  }, []); // run only once

  useEffect(() => {
    if (props.playAnimation) {
      triggerAnimation();
    } else if (props.reverseAnimation) {
      triggerAnimation(true);
    }
  }, [props.playAnimation, props.reverseAnimation]);

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
