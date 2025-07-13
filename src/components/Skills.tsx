import Image from 'next/image';
import React from 'react'
import { AnimationWrapper, childVariant } from './ui/animation-wrapper';
import * as motion from 'motion/react-client';

type Skill = {
  name: string;
  icon: string
}

const languages: Skill[] = [
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Java", icon: "/skills/java.svg" }
];

const frameworks: Skill[] = [
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Express.js", icon: "/skills/expressjs.svg" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
  { name: "Framer Motion", icon: "/skills/framermotion.svg" },
  { name: "TanStack Query", icon: "/skills/tanstackquery.svg" },
  { name: "Zustand", icon: "/skills/zustand.svg" }
];


const Skills = () => {
  return (
    <div className='my-8'>
      <motion.h1 variants={childVariant} className='text-3xl md:text-4xl font-sans font-bold tracking-tight'>Skills</motion.h1>
      <motion.div variants={childVariant} className='my-4'>
        <h3 className='font-sans tracking-tight my-2'>Languages</h3>
        <AnimationWrapper className='flex flex-wrap gap-2'>
          {
            languages.map(l => (
              <motion.div variants={childVariant} key={l.name}>
                <Tag tag={l} />
              </motion.div>
            ))
          }
        </AnimationWrapper>
      </motion.div>
      <motion.div variants={childVariant} className='my-4'>
        <h3 className='font-sans tracking-tight my-2'>Frameworks/Libraries</h3>
        <AnimationWrapper className='flex flex-wrap gap-2'>
          {
            frameworks.map(f => (
              <motion.div variants={childVariant} key={f.name}>
                <Tag tag={f} />
              </motion.div>
            ))
          }
        </AnimationWrapper>
      </motion.div>
    </div>
  )
}

const Tag = ({ tag }: { tag: Skill }) => (
  <div className='flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-1 transition-colors duration-200 hover:border-foreground/70 select-none'>
    <Image
      src={tag.icon}
      height={18}
      width={18}
      alt={tag.name}
    />
    <span className='text-sm'>{tag.name}</span>
  </div>
)

export default Skills
