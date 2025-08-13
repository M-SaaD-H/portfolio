"use client";

import { IconLoader2 } from '@tabler/icons-react';
import { motion } from "motion/react";
import React, { useEffect, useState } from 'react';
import ActivityCalendar from 'react-activity-calendar';
import { childVariant } from './ui/animation-wrapper';

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const GithubGraph = () => {
  const [data, setData] = useState<ContributionDay[] | null>(null);
  const [loading, setLoading] = useState(true);

  const getLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count < 5) return 1;
    if (count < 10) return 2;
    if (count < 20) return 3;
    return 4;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/contributions');
        const json: { date: string; count: number }[] = await res.json();

        const formatted: ContributionDay[] = json.map((day) => ({
          date: day.date,
          count: day.count,
          level: getLevel(day.count),
        }));

        setData(formatted);
      } catch (err) {
        console.error('Failed to load contributions:', err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div variants={childVariant} className='flex flex-col font-sans'>
      <h3 className='text-3xl md:text-4xl font-bold tracking-tight my-4 mx-2'>Github</h3>
      {
        loading ? (
          <div className='w-full min-h-20 flex justify-center items-center'>
            <IconLoader2 className='animate-spin' />
          </div>
        ) : !data || data.length === 0 ? (
          <p className='my-8 text-muted-foreground'>No GitHub contribution data available.</p>
        ) : (
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE 10+
            }}
          >
            <style>
              {`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <ActivityCalendar data={data} />
          </div>
        )
      }
    </motion.div>
  );
};

export default GithubGraph;
