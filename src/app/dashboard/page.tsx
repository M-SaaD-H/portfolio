'use client'

import React, { useEffect, useState } from 'react'

type GitHubData = {
  public_repos: number,
  followers: number,
  following: number,
  [key: string]: unknown
}

function page() {
  const [data, setData] = useState<GitHubData>();

  useEffect(() => {
    fetch('https://api.github.com/users/M-SaaD-H')
      .then(res => res.json())
      .then(data => setData(data));
  }, [setData]);

  return (
    <div className='max-md:p-8 md:mt-18'>
      <h1 className='text-4xl md:text-5xl font-sans mt-5 font-bold tracking-tight my-2'>Dashboard</h1>
      <div className='grid md:grid-cols-2 gap-4 my-8'>
        <div className='flex flex-col justify-between gap-2 p-6 rounded-lg border dark:border-neutral-700 border-neutral-300 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
          <h3 className='text-lg font-semibold font-sans'>GitHub Repositories</h3>
          {
            data ? (
              <h1 className='text-4xl font-bold font-sans'>{data.public_repos}</h1>
            ) : (
              '-'
            )
          }
        </div>
        <div className='flex flex-col justify-between gap-2 p-6 rounded-lg border dark:border-neutral-700 border-neutral-300 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
          <h3 className='text-lg font-semibold font-sans'>GitHub Followers</h3>
          {
            data ? (
              <h1 className='text-4xl font-bold font-sans'>{data.followers}</h1>
            ) : (
              '-'
            )
          }
        </div>
        <div className='flex flex-col justify-between gap-2 p-6 rounded-lg border dark:border-neutral-700 border-neutral-300 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
          <h3 className='text-lg font-semibold font-sans'>GitHub Followings</h3>
          {
            data ? (
              <h1 className='text-4xl font-bold font-sans'>{data.following}</h1>
            ) : (
              '-'
            )
          }
        </div>
      </div>
    </div>
  )
}

export default page
