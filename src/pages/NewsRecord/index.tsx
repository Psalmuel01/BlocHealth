import Header from '@/components/Header'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link2Icon } from '@radix-ui/react-icons';
// import { Cross1Icon } from '@radix-ui/react-icons';
import { Publish } from './Publish';


const NewsRecord = () => {
  return (
    <div className='pt-10 px-5 lg:px-20 pb-0 min-h-screen'>
      <Header />

      <div className='flex justify-between mt-5'>
        <div>
          <p className='text-2xl font-clash_semibold'>New Record</p>
          <p className='font-clash_light'>Create new patient record</p>
        </div>
        {/* <Cross1Icon /> */}
      </div>

      <div className='mt-5'>
        <p className='font-clash_medium'>Patient's Personal Details:</p>
        <div className='mt-3 flex flex-col gap-4'>
          <div className='flex gap-3'>
            <Input id="name" type="text" placeholder="Full Name" />
            <Input id="medications" type="text" placeholder="Current medications" />
            <div className="flex items-center space-x-2">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Male
              </Label>
              <Checkbox id="male" />
            </div>
            <div className="flex items-center space-x-2">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Female
              </Label>
              <Checkbox id="female" />
            </div>
          </div>
          <div className='flex gap-3'>
            <div className="relative grid w-full max-w-sm items-center gap-1.5">
              {/* <div className="relative"> */}
              <Input
                id="picture"
                type="file"
                className="absolute inset-0 opacity-0 z-10 cursor-pointer"
              />
              <div className="flex items-center justify-start px-3 w-full h-full border border-gradient border-gray-300 rounded-md">
                <span className="text-gray-500 text-sm w-full flex items-center justify-between">Upload medical history<Link2Icon /></span>
              </div>
              {/* </div> */}
            </div>
            {/* <Input id="picture" type="file" placeholder="Upload medical history" /> */}
            <Input id='date' type="text" placeholder="Date of Birth (dd/mm/yyyy)" />
            <Input id='allergies' type="text" placeholder="Allergies" />
          </div>
          <div className='flex gap-3'>
            <Input id='diagnosis' type="text" placeholder="Diagnosis" />
            <Input id='treatment' type="text" placeholder="Treatment plan" />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <p className='font-clash_medium'>Contact Info:</p>
        <div className='mt-3 flex flex-col gap-4'>
          <div className='flex gap-3'>
            <Input id="phone" type="number" placeholder="Phone number" />
            <Input id="email" type="email" placeholder="Email address" />
            <Input id="address" type="text" placeholder="Residential address" />
          </div>
          <div className='flex gap-3'>
            <Input id="kin" type="text" placeholder="Next of kin" />
            <Input id="kin_phone" type="text" placeholder="Next of kin phone number" />
            <Input id="kin_address" type="text" placeholder="Next of kin residential address" />
          </div>
        </div>
      </div>

      <div className='mt-5 flex gap-5 items-center'>
        <p className='font-clash_medium'>Health Insurance:</p>
        <div className="flex items-center space-x-2">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Yes
          </Label>
          <Checkbox id="yes" />
        </div>
        <div className="flex items-center space-x-2">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            No
          </Label>
          <Checkbox id="no" />
        </div>
      </div>

      <div className='mt-5'>
        <p className='font-clash_medium'>Emergency Contacts:</p>
        <div className='mt-3 flex flex-col gap-4'>
          <div className='flex gap-3'>
            <Input id="emg_name1" type="text" placeholder="Contact name" />
            <Input id="emg_phone1" type="number" placeholder="Phone number" />
            <Input id="emg_address1" type="text" placeholder="Residential address" />
          </div>
          <div className='flex gap-3'>
            <Input id="emg_name1" type="text" placeholder="Contact name" />
            <Input id="emg_phone1" type="number" placeholder="Phone number" />
            <Input id="emg_address1" type="text" placeholder="Residential address" />
          </div>
        </div>
      </div>

      <div className='mt-14 mb-10 flex items-end justify-between'>
        <div className='flex max-md:flex-col gap-5 max-md:gap-3'>
          <Button size='lg' className='bg-[#2924A6]'>Save & Exit</Button>
          <Button size='lg' className='bg-[#2924A6]'>Save & Continue</Button>
        </div>
        {/* <Button size='lg' className='bg-[#2924A6]'>Publish record</Button> */}
        <Publish />
      </div>
    </div >
  )
}

export default NewsRecord