import React from 'react'
import ThemeSwitcher from './theme-switcher'
import Link from 'next/link'
import { buttonVariants } from '../../components/ui/button'
import { HomePath } from '../constants/path'

const NavLinks = () => {
  
  return ( 
    <div  className='flex align-items-center gap-x-2'>
        <ThemeSwitcher />
        <Link href={HomePath()} className={buttonVariants({variant: 'outline'})}>
          Tickets
        </Link>
    </div>
  )
}

export default NavLinks