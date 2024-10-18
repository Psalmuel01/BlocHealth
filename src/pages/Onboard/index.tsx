import Header from "@/components/Header"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

const Onboard = () => {
    return (
        <div className='flex flex-col justify-between p-10 px-5 lg:px-20 pb-0 min-h-scree'>
            <Header />

            <div className="mt-5 flex max-md:flex-col items-center lg:mx-16 lg:gap-40">
                <div className="flex flex-col gap-3">
                    <p className="text-4xl max-md:text-2xl">Add your Hospital to <span className="font-clash_semibold">Bloc</span>Health.</p>
                    <p className="max-md:text-sm lg:w-5/6">Create your hospital profile on BlocHealth and explore endless possibilities and innovation.</p>
                </div>
                <img src="/images/doctors.png" alt="doctors" className="w-2/5" />
            </div>

            <div className="flex justify-between items-center mt-10">
                <div>
                    <p className="text-2xl max-md:text-xl font-clash_semibold">Onboard your Hospital</p>
                    <p className="font-clash_light">Create new hospital record</p>
                </div>
                {/* <Cross1Icon className="cursor-pointer"/> */}
            </div>

            <div className="mt-5">
                <p className="font-clash_medium">Hospital Details:</p>
                <div className="mt-3 flex flex-col gap-4">
                    <div className="flex max-md:flex-wrap items-center gap-3">
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Hospital Name"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Hospital Address"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                    </div>
                    <div className="flex max-md:flex-wrap items-center gap-3">
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Hospital registration number"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Date of establishment"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Number of staffs"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <p className="font-clash_medium">Add Staff Members</p>
                <div className="mt-3 flex flex-col gap-4">
                    <div className="flex max-md:flex-wrap items-center gap-3">
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Full name"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Wallet address/basename"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                    </div>
                    <div className="flex max-md:flex-wrap items-center gap-3">
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Full name"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                        <div className="w-full">
                            <Input
                                id="name"
                                type="text"
                                placeholder="Wallet address/basename"
                            />
                            {/* {errors.fullName && <p className="mt-2 text-red-500 text-xs">{errors.fullName}</p>} */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14 mb-10 flex items-end justify-between">
                <div className="flex max-md:flex-col gap-5 max-md:gap-3">
                    <Button variant="outline" size="lg" className="bg-transparent hover:bg-[#2924A6] hover:text-white">
                        Cancel
                    </Button>
                </div>
                <div>
                    <Button size='lg' className='bg-[#2924A6] hover:bg-blue-800'>Publish record</Button>
                    {/* <Publish isValidated={validated} info={combinedInfo} /> */}
                </div>
            </div>
        </div>
    )
}

export default Onboard