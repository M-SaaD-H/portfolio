import { IconBrandFramerMotion, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react"
import Image from "next/image"

export type Project = {
  title: string,
  description: string,
  image: string,
  liveLink: string,
  sourceLink: string,
  content: React.ReactNode,
  demoLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

export type UpcomingProject = {
  title: string,
  description: string,
  image?: string,
  liveLink?: string,
  sourceLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}

const ReactTech = {
  name: 'React',
  logo: <IconBrandReact size={18} />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}

const Motion = {
  name: 'Motion',
  logo: <IconBrandFramerMotion size={18} />
}

const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs size={18} />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript size={18} />
}

const MongoDB = {
  name: 'MongoDB',
  logo: <IconBrandMongodb size={18} />
}

const Java = {
  name: 'Java',
  logo: <Image src={"/skills/java.svg"} height={20} width={20} alt='Java Icon' style={{ filter: 'brightness(1000%) saturate(0)', WebkitFilter: 'brightness(1000%) saturate(0)' }} />
}

export const projects: Project[] = [
  {
    title: 'Vynk',
    description: "CLI tool for ready-to-use UI components and blocks to speed up your web development.",
    image: '/projects/vynk.png',
    liveLink: 'https://vynk.live',
    sourceLink: 'https://github.com/M-SaaD-H/vynk',
    content:
      <>
        <p>
          Vynk is a UI component library and CLI tool that helps developers quickly add ready-to-use components and layout blocks to their projects.
        </p>
        <ul className='list-disc ml-5 mt-2'>
          <li>Custom CLI for instant injection of components and backend snippets.</li>
          <li>Production-ready UI blocks and templates.</li>
          <li>Pro marketplace with premium landing pages and animated heroes.</li>
        </ul>
      </>,
    demoLink: "https://res.cloudinary.com/sputifyy/video/upload/v1766151214/vynk-demo_xdpfa3.mp4",
    tags: [
      NextJS,
      Motion,
      { name: 'ShadCN' },
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Anton',
    description: "A SQL-like Java database, built from scratch, for learning database internals.",
    image: '/projects/anton.png',
    liveLink: 'https://github.com/M-SaaD-H/Anton',
    sourceLink: 'https://github.com/M-SaaD-H/Anton',
    content:
      <>
        <p>
          Anton is a lightweight SQL-like database in Java, built from scratch to learn database internals.
        </p>
        <ul className='list-disc ml-5 mt-2'>
          <li>Create tables with columns and types.</li>
          <li>Insert, select, update, and delete data.</li>
          <li>SQL-like query parsing and execution.</li>
          <li>B+ Tree indexing for faster lookups.</li>
        </ul>
      </>,
    demoLink: "https://res.cloudinary.com/sputifyy/video/upload/v1766165438/anton-demo_wvcfek.mp4",
    tags: [
      Java
    ]
  },
  {
    title: 'Autotone',
    description: "Browser extension to automatically balance and keep tab audio volume steady.",
    image: '/projects/autotone.png',
    liveLink: 'https://github.com/M-SaaD-H/autotone',
    sourceLink: 'https://github.com/M-SaaD-H/autotone',
    content:
      <>
        <p>
          AutoTone is a simple browser extension that keeps tab audio levels steady and comfortable, automatically.
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>Keeps audio balanced across all tabs.</li>
          <li>Detects playing tabs and adjusts sound in real time.</li>
          <li>Restores normal volume automatically when other audio stops.</li>
        </ul>
        <p className="mt-2">
          For example, if you're listening to Spotify and start playing a YouTube video, AutoTone will lower or stop Spotify&apos;s volume and restore it when the video stops, no manual adjustments.
        </p>
      </>,
    tags: [
      JavaScript
    ]
  },
  {
    title: '2D Game',
    description: "Simple 2D adventure game built in Java, featuring exploration and basic obstacles and power-ups.",
    image: '/projects/game.png',
    liveLink: 'https://github.com/M-SaaD-H/2D-Adventure-Game',
    sourceLink: 'https://github.com/M-SaaD-H/2D-Adventure-Game',
    content:
      <>
        <p>
          This is a simple 2D adventure game I built just for fun. It&apos;s not a fully-fledged game, more like a prototype or an early concept of what a game could be.
        </p>
        <ol className='list-disc ml-5'>
          <li>Basic player movement and collision detection.</li>
          <li>Simple map tiles.</li>
          <li>Basic interaction system.</li>
        </ol>
      </>,
    demoLink: "https://res.cloudinary.com/sputifyy/video/upload/v1766151967/2d-game-demo_skkrw6.mp4",
    tags: [
      Java
    ]
  },
  {
    title: 'VidChat',
    description: "Peer-to-peer browser video chat app using WebRTC and Socket.io for real-time calls.",
    image: '/projects/vidchat.png',
    liveLink: 'https://vid-chat-peach.vercel.app',
    sourceLink: 'https://github.com/M-SaaD-H/VidChat',
    content:
      <>
        <p>VidChat lets you make quick, hassle-free video calls in your browser.</p>
        <ul className="list-disc ml-5 mt-1">
          <li>Real-time video and audio with WebRTC.</li>
          <li>Instant room creation and joining.</li>
          <li>Low-latency signaling with Socket.io.</li>
          <li>Simple UI with React + TypeScript.</li>
        </ul>
      </>,
    tags: [
      NextJS,
      TypeScript,
      { name: 'Socket.io' },
      { name: 'WebRTC' },
      Tailwind
    ]
  },
  {
    title: 'FinTrack',
    description: "A student-focused finance tracker app to manage and monitor expenses with ease.",
    image: '/projects/fintrack.png',
    liveLink: 'https://fintrack-flax-beta.vercel.app',
    sourceLink: 'https://github.com/M-SaaD-H/fintrack',
    content:
      <>
        <p>FinTrack helps students track expenses and savings by semester.</p>
        <ul className="list-disc ml-5 mt-1">
          <li>Semester-based finance tracking.</li>
          <li>Quick overview of spending and savings.</li>
          <li>Designed for college budgeting.</li>
        </ul>
      </>,
    tags: [
      NextJS,
      TypeScript,
      { name: 'ShadCN' },
      { name: 'Aceternity UI' },
      Tailwind
    ]
  },
  {
    title: 'Sputify',
    description: "Spotify-like web music streaming clone. Features playlists, playback, and more.",
    image: '/projects/sputify.png',
    liveLink: 'https://github.com/M-SaaD-H/Sputify',
    sourceLink: 'https://github.com/M-SaaD-H/Sputify',
    content:
      <>
        <p>Sputify is a Spotify-inspired web music streaming platform built from scratch.</p>
        <ul className="list-disc ml-5 mt-1">
          <li>Browse, search, and play tracks in real time.</li>
          <li>Custom playlists and queue management.</li>
          <li>Sleek UI inspired by Spotify using ShadCN & Tailwind.</li>
          <li>Login system and personal music libraries.</li>
        </ul>
      </>,
    tags: [
      ReactTech,
      NodeJS,
      { name: 'ShadCN' },
      JavaScript,
      Tailwind
    ]
  },
  {
    title: 'Zootube',
    description: "YouTube-style backend with secure uploads, authentication, and cloud media management.",
    image: '/projects/zootube.png',
    liveLink: 'https://github.com/M-SaaD-H/Zootube',
    sourceLink: 'https://github.com/M-SaaD-H/Zootube',
    content:
      <>
        <p>Zootube powers a video streaming service backend, much like YouTube.</p>
        <ul className="list-disc ml-5 mt-1">
          <li>REST API handles video and media uploads securely.</li>
          <li>User authentication and JWT-based session management.</li>
          <li>Uploads managed efficiently with Cloudinary.</li>
          <li>Built with Node.js and Express for scalability.</li>
        </ul>
      </>,
    tags: [
      NodeJS,
      MongoDB,
      { name: 'Cloudinary' },
      JavaScript
    ]
  }
]

export const upcomingProjects: UpcomingProject[] = [
  {
    title: 'AlgoBud',
    description: "An AI-powered DSA platform with a personal tutor that spots your mistakes, explains patterns, and helps you level up smarter than brute force.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  },
  {
    title: 'Zuno',
    description: "An AI agent that keeps track of your personal life, so you can focus on getting work done without missing anything important.",
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind
    ]
  }
]
