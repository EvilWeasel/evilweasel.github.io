import { useRef } from "react";
import type { SVGProps } from "react";

export function ExternalLink(props: SVGProps<SVGSVGElement>) {
  const animateRefs = useRef<SVGAnimateElement[]>([]);

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

  return (
    <ul>
      <li
        className="my-5 mx-0 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-800"
        onMouseEnter={() => triggerAnimation(true)}
        onMouseLeave={() => triggerAnimation(false)}
      >
        <a
          href="https://evilweasel.github.io/docs"
          className="p-4 inline-block w-full h-full mx-auto my-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meine Dokumente
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
            className="inline ml-2 text-lg relative top-[-0.8em]"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path
                strokeDasharray={42}
                strokeDashoffset={42}
                d="M11 5H5V19H19V13"
              >
                <animate
                  id="anim-first"
                  ref={(el) =>
                    (animateRefs.current[0] = el as SVGAnimateElement)
                  }
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  begin={"indefinite"}
                  values="0;42"
                ></animate>
              </path>
              <path strokeDasharray={12} strokeDashoffset={12} d="M13 11L20 4">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin={"indefinite"}
                  dur="0.3s"
                  values="0;12"
                  ref={(el) =>
                    (animateRefs.current[1] = el as SVGAnimateElement)
                  }
                ></animate>
              </path>
              <path
                strokeDasharray={8}
                strokeDashoffset={8}
                d="M21 3H15M21 3V9"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin={"indefinite"}
                  dur="0.2s"
                  values="0;8"
                  ref={(el) =>
                    (animateRefs.current[2] = el as SVGAnimateElement)
                  }
                ></animate>
              </path>
            </g>
          </svg>
        </a>
      </li>
    </ul>
  );
}
