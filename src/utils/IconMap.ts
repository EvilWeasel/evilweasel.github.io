export interface Skill {
  name: string;
  icon: string;
  description: string;
}

// Using devicons and mdi from iconify
export const IconMap = {
  arch: "devicon-plain:archlinux",
  csharp: "devicon-plain:csharp",
  bash: "devicon-plain:bash",
  git: "devicon-plain:git",
  markdown: "mdi:language-markdown",
  mysql: "devicon-plain:mysql-wordmark",
  nodejs: "devicon-plain:nodejs-wordmark",
  powershell: "devicon-plain:powershell",
  react: "mdi:react",
  astro: "devicon-plain:astro",
};

// skill map skill: { name: string, icon: string, description: string }
export const SkillList: Array<Skill> = [
  {
    name: "Arch Linux",
    icon: IconMap.arch,
    description: "I use Arch Linux as my daily driver.",
  },
  {
    name: "C#",
    icon: IconMap.csharp,
    description: "I have experience with C# and Dotnet.",
  },
  {
    name: "Bash",
    icon: IconMap.bash,
    description: "I have limited experience with Bash scripting.",
  },
  {
    name: "Git",
    icon: IconMap.git,
    description: "I use Git and GitHub almost daily.",
  },
  {
    name: "Markdown",
    icon: IconMap.markdown,
    description: "The content on my Website is written in MDX.",
  },
  {
    name: "MySQL",
    icon: IconMap.mysql,
    description: "I have experience with MySQL.",
  },
  {
    name: "Node.js",
    icon: IconMap.nodejs,
    description: "I have experience with Node.js.",
  },
  {
    name: "PowerShell",
    icon: IconMap.powershell,
    description: "I have some experience with PowerShell.",
  },
  {
    name: "React",
    icon: IconMap.react,
    description: "I have experience with Frontend-Frameworks like React.",
  },
  {
    name: "Astro",
    icon: IconMap.astro,
    description: "This Website is built with Astro.",
  },
];
