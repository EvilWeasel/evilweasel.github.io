export interface SkillType {
  name: string;
  icon: string;
  description: string;
}

// Using devicons and mdi from iconify
export const IconMap = {
  nixos: "devicon-plain:nixos",
  arch: "devicon-plain:archlinux",
  csharp: "devicon-plain:csharp",
  bash: "devicon-plain:bash",
  git: "devicon-plain:git",
  markdown: "mdi:language-markdown",
  mysql: "devicon-plain:mysql-wordmark",
  nodejs: "devicon-plain:nodejs-wordmark",
  bun: "devicon-plain:bun",
  powershell: "devicon-plain:powershell",
  react: "mdi:react",
  astro: "devicon-plain:astro",
  nextjs: "devicon-plain:nextjs",
};

export const SkillList: Array<SkillType> = [
  {
    name: "Arch Linux",
    icon: IconMap.arch,
    description:
      "Über zehn Jahre mein tägliches Betriebssystem. Ich arbeite gerne nah am System und verstehe lieber, wie Dinge funktionieren.",
  },
  {
    name: "NixOS",
    icon: IconMap.nixos,
    description:
      "Aktuell mein Daily OS auf allen Geräten. Deklarative Konfiguration passt perfekt zu meinem Anspruch an reproduzierbare Systeme.",
  },
  {
    name: "Git",
    icon: IconMap.git,
    description:
      "Fester Bestandteil meines Alltags in Entwicklung und Unterricht. Mir sind saubere Historien und nachvollziehbare, signierte Commits wichtig.",
  },
  {
    name: "Markdown / MDX",
    icon: IconMap.markdown,
    description:
      "Mein bevorzugtes Format für Dokumentation und Lernmaterialien. Klar strukturierte Inhalte und Ease-of-Use stehen für mich im Vordergrund.",
  },
  {
    name: "Bash",
    icon: IconMap.bash,
    description:
      "Eingesetzt für kleine Automatisierungen und Helfer-Skripte. Ich kenne die Grenzen und nutze es dort, wo es sinnvoll ist.",
  },
];

export const SkillList2: Array<SkillType> = [
  {
    name: "C# / Dotnet",
    icon: IconMap.csharp,
    description:
      "Einsatz vor allem von MAUI und ASP im Unterricht. Fokus auf OOP, saubere Strukturen und verständlichen Code.",
  },
  {
    name: "MySQL",
    icon: IconMap.mysql,
    description:
      "Praxisnahe Erfahrung mit relationalem Datenbankdesign und SQL in Projekten und Lehre.",
  },
  {
    name: "Node.js",
    icon: IconMap.nodejs,
    description:
      "Genutzt als Laufzeitumgebung für Backend-Services und kleinere Webprojekte.",
  },
  {
    name: "Bun.sh",
    icon: IconMap.bun,
    description:
      "Meine präferierte alternative Laufzeitumgebung für JavaScript Projekte.",
  },
  {
    name: "PowerShell",
    icon: IconMap.powershell,
    description:
      "Vor allem im Trainingskontext sowie für Automatisierung und systemnahe Aufgaben.",
  },
  {
    name: "React",
    icon: IconMap.react,
    description:
      "Erfahrung im Aufbau interaktiver Benutzeroberflächen mit komponentenbasiertem Ansatz.",
  },
  {
    name: "Next.js",
    icon: IconMap.nextjs,
    description:
      "Verwendet für Fullstack-Webanwendungen mit klarer Trennung von Frontend und Backend.",
  },
  {
    name: "Astro",
    icon: IconMap.astro,
    description:
      "Mein bevorzugtes Tool für Content-lastige Websites, unter anderem dieses Portfolio und EvilDocs.",
  },
];

