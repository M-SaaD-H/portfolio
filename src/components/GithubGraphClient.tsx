"use client"

import { motion } from "motion/react"
import ActivityCalendar, { type Activity } from 'react-activity-calendar'
import { childVariant } from './ui/animation-wrapper'

interface GithubGraphClientProps {
  data: Activity[] | null
}

export function GithubGraphClient({ data }: GithubGraphClientProps) {
  return (
    <div className='flex flex-col font-sans'>
      <motion.h3 
        variants={{
          initial: {
            opacity: 0,
            y: 10,
            filter: 'blur(8px)',
            transition: {
              type: 'tween',
              duration: 0.4
            }
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              type: 'tween',
              duration: 0.4,
              delay: 0.1
            }
          }
        }} 
        className='text-2xl font-bold tracking-tight mb-4 ml-2'
      >
        Github
      </motion.h3>
      <motion.div variants={{
        initial: {
          opacity: 0,
          y: 10,
          filter: 'blur(8px)',
          transition: {
            type: 'tween',
            duration: 0.4
          }
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            type: 'tween',
            duration: 0.4,
            delay: 0.2
          }
        }
      }}>
        {!data || data.length === 0 ? (
          <p className='my-8 text-muted-foreground'>
            No GitHub contribution data available.
          </p>
        ) : (
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>
              {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
            </style>
            <ActivityCalendar 
              data={data} 
              blockSize={9.5} 
              blockMargin={2} 
              fontSize={12} 
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}