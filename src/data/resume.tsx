import { Icons } from "@/components/icons";

export const DATA = {
  name: "Tyrail Leverett",
  initials: "TL",
  url: "https://tlev.dev",
  location: "Houston, TX",
  locationLink: "https://www.google.com/maps/place/houston",
  description:
    "Full-stack Software Engineer that specializes in building and scaling SaaS products utilizing Laravel, Next.js, and AWS.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Javascript/Typescript",
    "Node.js",
    "HTML/CSS",
    "PHP",
    "Laravel",
    "Python",
    "Flask",
    "SQL",
    "Git",
    "AWS",
    "Jest",
    "Docker",
    "CI/CD",
  ],
  navbar: [],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tyrailleverett",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tyrailleverett/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tyrailleverett",
        icon: Icons.x,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Medicus IT",
      href: "https://medicusit.com/",
      badges: [],
      location: "Longwood, FL",
      title: "IT Tech Support Specialist",
      logoUrl: "/medicus.png",
      start: "February 2018",
      end: "December 2020",
      description:
        "Assisted clients with the installation, configuration, and ongoing usability of desktop computers, mobile devices, peripheral equipment, and software, ensuring seamless integration and functionality. Collaborated with vendor representatives to troubleshoot and resolve software and hardware issues efficiently. Managed the installation of software, patches, and updates on desktops, laptops, and servers, maintaining up-to-date system performance. Reviewed and recommended changes to security parameters. Configured and installed firewalls, switches, and other network equipment to adhere to best practice standards. Conducted emergency and scheduled repairs of on-site technical systems, performed routine maintenance.",
    },
    {
      company: "Spectrum",
      href: "https://www.spectrum.com/",
      badges: [],
      location: "Clearwater, FL",
      title: "Technical Support Representative",
      logoUrl: "/spectrum.jpg",
      start: "June 2015",
      end: "February 2018",
      description:
        "Demonstrated exceptional customer service skills by handling a high volume of technical support inquiries related to internet, phone, and TV services. Successfully met performance metrics by achieving an average call handling time of 4 minutes while maintaining a 95% resolution rate. Proactively identified and resolved customer issues through the use of diagnostic tools and systems. Collaborated effectively with cross-functional teams to enhance customer experience and drive process improvements.",
    },
    {
      company: "Monroe 2-Orleans BOCES",
      href: "https://www.monroe2boces.org/",
      badges: [],
      location: "Rochester, NY",
      title: "IT Support Specialist",
      logoUrl: "/boces.png",
      start: "May 2014",
      end: "June 2015",
      description:
        "Provided technical support for computer hardware and software, including installation, troubleshooting, and maintenance of county systems. I maintained accurate inventory records, scheduled routine maintenance, and trained users on the use of the computers, printers, and software. Additionally, I managed helpdesk tickets, ensuring timely resolution of technical issues.",
    },
  ],
  education: [
    {
      school: "Rochester Institute of Technology",
      href: "https://rit.edu",
      degree: "B.S. in Information Technology",
      logoUrl: "/rit.png",
      start: "2009",
      end: "2014",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ]
} as const;
