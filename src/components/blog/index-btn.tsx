import Link from 'next/link'
import { cn } from '@/lib/utils'
import { IconArrowBackUp } from '@tabler/icons-react'

export const IndexBtn = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/writing"
      className={cn(
        "font-instrument-serif italic lg:text-lg transition-colors duration-200 flex items-center gap-1 w-max",
        className
      )}
    >
      <IconArrowBackUp className="size-4 lg:size-5 mb-1" />
      index
    </Link>
  )
}
