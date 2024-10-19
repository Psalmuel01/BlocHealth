import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetAllPatients, useHospital } from "@/contexts/hooks";
import useContractInteractions from "@/pages/Dashboard/useContractInteractions";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

const Dashboard = () => {
  const { isConnected } = useAccount();
  const {
    hospitalCount
  } = useContractInteractions();

  const allPatientsInfo = useGetAllPatients();
  const hospital = useHospital("12345"); 
  console.log({hospital});
  const patientCount = allPatientsInfo?.length;
  // const patientCount = hospital && hospital[5];
  console.log(patientCount);


  if (!isConnected) {
    return (
      <div className="p-10 px-5 lg:px-20 lg:min-h-screen">
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <p className="text-3xl max-md:text-xl">Please connect your wallet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-md:mt-5 mb-10">
      <div className="bg-[#18166133] sticky flex max-md:flex-col max-md:gap-3 justify-between items-center py-8 px-14">
        <p className="font-clash_semibold text-2xl">Admin Dashboard</p>
        <Input placeholder="Search patients records" className="max-md:w-full rounded-xl w-1/2" />
      </div>
      <div className="max-md:p-10 px-5 lg:px-14 lg:h-screen">

        <div className="flex flex-col gap-1 justify-between lg:mt-10">
          <p className="text-2xl w-full">
            Welcome!{" "}
            <span className="font-clash_semibold ml-1">Dr. John Leo</span>
          </p>
          <p className="font-clash_extralight">University of Benin Teaching Hospital</p>
        </div>

        <div className="mt-10 flex flex-wrap max-md:flex-col justify-between gap-10 max-md:gap-5">
          <Card className="bg-[#D9D9D91A] py-10 w-[30%] max-md:w-full">
            <Link to={"patients"} className="flex flex-col gap-5 items-center">
              <div>
                <img src="/images/inpatient.png" alt="" className="w-16" />
              </div>
              <p className="text-6xl font-clash_semibold">{patientCount}</p>
              <p>Patient records</p>
            </Link>
          </Card>
          <Card className="bg-[#7CED0B61] py-10 w-[30%] max-md:w-full">
            <Link
              to={"appointments"}
              className="flex flex-col gap-5 items-center"
            >
              <div>
                <img src="/images/icon-park.png" alt="" className="w-16" />
              </div>
              <p className="text-6xl font-clash_semibold">{hospitalCount}</p>
              <p>Appointments</p>
            </Link>
          </Card>
          <Card className="bg-[#0BEDED61] py-10 w-[30%] max-md:w-full">
            <Link to={"pending"} className="flex flex-col gap-5 items-center">
              <div>
                <img src="/images/doc-chart.png" alt="" className="w-16" />
              </div>
              <p className="text-6xl font-clash_semibold">
                {allPatientsInfo?.length}
              </p>
              <p>Pending records</p>
            </Link>
          </Card>
          <Card className="bg-[#B92BFC61] py-10 w-[30%] max-md:w-full">
            <Link to={"shared"} className="flex flex-col gap-5 items-center">
              <div>
                <img src="/images/arrow-up.png" alt="" className="w-16" />
              </div>
              <p className="text-6xl font-clash_semibold">
                {allPatientsInfo?.length}
              </p>
              <p>Shared records</p>
            </Link>
          </Card>
          <Card className="bg-[#0BEDED61] py-10 w-[30%] max-md:w-full">
            <Link to={"pending"} className="flex flex-col gap-5 items-center">
              <div>
                <img src="/images/doc-chart.png" alt="" className="w-16" />
              </div>
              <p className="text-6xl font-clash_semibold">
                {allPatientsInfo?.length}
              </p>
              <p>Pending records</p>
            </Link>
          </Card>
          <Card className="bg-[#B92BFC61] py-10 w-[30%] max-md:w-full">
            <Link to={"shared"} className="flex flex-col gap-5 items-center">
              <div>
                <img src="/images/arrow-up.png" alt="" className="w-16" />
              </div>
              <p className="text-6xl font-clash_semibold">
                {allPatientsInfo?.length}
              </p>
              <p>Shared records</p>
            </Link>
          </Card>
        </div>
        {/* 
        <Card className="mt-10 px-10 py-5">
          <p className="text-lg font-clash_medium">Latest Health News</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur. Faucibus at tincidunt ac
            turpis euismod.Lorem ipsum dolor sit amet consectetur. Faucibus at
            tincidunt ac turpis euismod.Lorem ipsum dolor sit amet consectetur.
            Faucibus at tincidunt ac turpis euismod.
          </p>
        </Card> */}
      </div>
    </div>
  );
};

export default Dashboard;
