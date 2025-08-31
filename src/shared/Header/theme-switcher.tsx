'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from '../components/ui/button'
import { MoonIcon as LucideMoonIcon, SunIcon as LucideSunIcon } from 'lucide-react'

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()

    
  return (
    <Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <LucideSunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"  /> : <LucideMoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeSwitcher