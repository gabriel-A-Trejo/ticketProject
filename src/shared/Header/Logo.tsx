import Link from 'next/link'
import {LucideKanban } from 'lucide-react';


const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2'>
        <LucideKanban className='size-8'/>
        <h1 className='text-2xl font-bold'>Ticket Bounty</h1>
    </Link>
)
}

export default Logo