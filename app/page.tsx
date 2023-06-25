import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Join from '@/components/Join'
import Plans from '@/components/Plans'
import Programs from '@/components/Programs'
import Reasons from '@/components/Reasons'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join/>
      <Footer />
    </div>
  )
}

