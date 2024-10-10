import Header from '@/components/Header'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const About = () => {
  return (
    <div className='p-10 px-5 lg:px-20 lg:h-screen'>
      <Header />

      <div className='flex max-md:flex-col max-md:gap-2 items-center justify-between mt-10'>
        <p className='text-2xl w-full'>Welcome! <span className='font-clash_semibold ml-1'>Dr. John Leo</span></p>
        <Input type="text" placeholder="Search patient records" />
      </div>

      <div className='mt-10 flex max-md:flex-col justify-between gap-10 max-md:gap-5'>
        <Card className='bg-[#D9D9D91A] flex flex-col gap-5 py-10 items-center w-full'>
          <div><img src="/images/inpatient.png" alt="" className='w-16' /></div>
          <p className='text-6xl font-clash_semibold'>120</p>
          <p>Patient records</p>
        </Card>
        <Card className='bg-[#7CED0B61] flex flex-col gap-5 py-10 items-center w-full'>
          <div><img src="/images/icon-park.png" alt="" className='w-16' /></div>
          <p className='text-6xl font-clash_semibold'>120</p>
          <p>Appointments</p>
        </Card>
        <Card className='bg-[#0BEDED61] flex flex-col gap-5 py-10 items-center w-full'>
          <div><img src="/images/doc-chart.png" alt="" className='w-16' /></div>
          <p className='text-6xl font-clash_semibold'>120</p>
          <p>Pending records</p>
        </Card>
        <Card className='bg-[#B92BFC61] flex flex-col gap-5 py-10 items-center w-full'>
          <div><img src="/images/arrow-up.png" alt="" className='w-16' /></div>
          <p className='text-6xl font-clash_semibold'>120</p>
          <p>Shared records</p>
        </Card>
      </div>

      <Card className='mt-10 px-10 py-5'>
        <p className='text-lg font-clash_medium'>Latest Health News</p>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur. Faucibus at tincidunt ac turpis euismod.Lorem ipsum dolor sit amet consectetur. Faucibus at tincidunt ac turpis euismod.Lorem ipsum dolor sit amet consectetur. Faucibus at tincidunt ac turpis euismod.</p>
      </Card>
    </div>
  )
}

export default About