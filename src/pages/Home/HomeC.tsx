import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const HomeC = () => {
  return (
    <div className='flex flex-col justify-between p-10 px-5 lg:px-20 pb-0 min-h-scree'>
      <Header />

      <div className="mt-10">
        <div className="flex flex-col gap-3 lg:w-1/3">
          <p className="text-3xl max-md:text-2xl">Welcome to <span className="font-clash_semibold">Bloc</span>Health.</p>
          <p className="max-md:text-sm">Create your hospital profile on BlocHealth or Request to Join a hospital</p>
        </div>

        <div className="max-md:mt-10 mb-10 flex max-md:flex-col items-center gap-10">
          <div className="flex flex-col gap-8 max-md:gap-6">
            <div className="flex items-start gap-2">
              <img src="/images/hospital.png" alt="hospital" />
              <div>
                <div className="flex flex-col gap-4">
                  <p className="lg:text-xl font-clash_medium">Add Hospital to <span className="font-clash_semibold">Bloc</span>Health</p>
                  <p className="max-md:text-sm">Add your hospital to the list of innovation driven clients using <span className="font-clash_medium">Bloc</span>Health today.</p>
                  <Link to="/onboard"><Button size="lg" className="w-fit bg-[#2924A6] hover:bg-blue-800 font-clash_medium">Onboard Hospital</Button></Link>
                </div>
              </div>
            </div>
            <hr className="opacity-15" />
            <div className="flex items-start gap-2">
              <img src="/images/staff.png" alt="staff" />
              <div>
                <div className="flex flex-col gap-4">
                  <p className="lg:text-xl font-clash_medium">Staff Join Request</p>
                  <p className="max-md:text-sm">Send a request to your hospital admin to add you up as a staff of the hospital you work at.</p>
                  <Button size="lg" className="w-fit bg-[#2924A6] hover:bg-blue-800 font-clash_medium">Request to Join</Button>
                </div>
              </div>
            </div>
          </div>

          <img src="/images/doctors.png" alt="doctors" />
        </div>
      </div>
    </div>
  )
}

export default HomeC