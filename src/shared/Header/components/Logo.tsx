import Link from 'next/link'
import {LucideKanban } from 'lucide-react';


const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-2'>
        <LucideKanban className='size-5'/>
        <h1 className='text-lg font-bold'>Ticket Bounty</h1>
    </Link>
)
}

export default Logo