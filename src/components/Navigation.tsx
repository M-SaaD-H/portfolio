'use client'

import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { DarkModeToggle } from './ui/theme-toggle';

const items = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Writing',
    link: '/writing',
  },
  {
    name: 'Socials',
    link: '/socials',
  }
]

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);

}
export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-2'>
        {
          items.map((item, idx) => {
            const active = isActivePath(pathname, item.link);
            return (
              <div key={idx}>
                <Link
                  href={item.link}
                  className={cn(
                    'text-sm text-muted-foreground hover:text-primary transition-colors',
                    active && 'text-primary font-medium'
                  )}
                >
                  {item.name}
                </Link>
              </div>
            )
          })
        }
      </div>
      <DarkModeToggle />
    </div>
  );
};
