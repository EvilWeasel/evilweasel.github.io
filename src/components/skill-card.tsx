import type { SkillType } from "@/utils/IconMap";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Icon } from "@iconify/react";

export const SkillCard = ({ skill }: { skill: SkillType }) => {
  return (
    <Card
      className="h-full flex max-w-[300px] border-2"
      id={skill.name}
    >
      <div className="p-4 lg:text-5xl text-4xl flex flex-col justify-center">
        <Icon icon={skill.icon} />
      </div>
      <div>
        <CardHeader className="pt-4 pb-1 pl-2">
          <CardTitle className="text-lg mb-0">{skill.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm pl-2 text-wrap">
          <p className="mb-0">{skill.description}</p>
        </CardContent>
      </div>
    </Card>
  );
};
