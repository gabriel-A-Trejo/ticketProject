import React from 'react'
import { Separator } from '../ui/separator';


type headerProps = 
{
    title: string;
    description: string
}

const Header = ({title, description}: headerProps) => {
  return (
    <> 
    <section >
        <h2 className='text-2x; font-bold tracking-tight'>{title}</h2>
        <p className='text-sm text-muted-foreground'>{description}</p>
    </section>
    <Separator />
    </>
  )
}

export default Header