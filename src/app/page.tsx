import Header from '@/shared/components/custom/Header';
import React from 'react'

const HomePage = () => {
  return (
    <section className='flex-1 flex flex-col gap-y-8'>
      <Header title='All Tickets' description='Tickets by everyone at one place' />
    </section>
  )
}

export default HomePage;