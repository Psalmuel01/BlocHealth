import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2Icon } from "@radix-ui/react-icons";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Publish } from "./Publish";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Gender,
  IContactInfo,
  IEmergencyContact,
  IMedicalInfo,
  IRecords,
} from "@/utils/interfaces";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "react-hot-toast";
import { useAccount } from "wagmi";

const epochToDateString = (epochTimestamp) => {
  const date = new Date(epochTimestamp * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const shortenFileName = (fileName) => {
  if (fileName.length > 20) {
    const extension = fileName.split('.').pop();
    const baseName = fileName.slice(0, 20 - extension.length - 3);
    return `${baseName}...${extension}`;
  }
  return fileName;
};

const NewsRecord = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const [basicInfo, setBasicInfo] = useState<
    Omit<
      IRecords,
      "_contactInfo" | "_emergencyContacts" | "_medicalInfo" | "_isPublished"
    >
  >({
    _patientAddress: "",
    _fullName: "",
    _gender: null,
    _dateOfBirth: 0,
  });

  const [medicalInfo, setMedicalInfo] = useState<IMedicalInfo>({
    currentMedications: "",
    allergies: "",
    diagnosis: "",
    treatmentPlan: "",
    medicalHistoryFile: "",
  });

  const [contactInfo, setContactInfo] = useState<IContactInfo>({
    phoneNumber: "",
    residentialAddress: "",
    emailAddress: "",
    nextOfKin: "",
    nextOfKinPhoneNumber: "",
    nextOfKinResidentialAddress: "",
    healthInsured: null,
  });

  const [emergencyContacts, setEmergencyContacts] = useState<
    IEmergencyContact[]
  >([
    {
      name: "",
      phoneNumber: "",
      residentialAddress: "",
    },
    {
      name: "",
      phoneNumber: "",
      residentialAddress: "",
    },
  ]);

  const combinedInfo = useMemo<IRecords>(() => {
    return {
      ...basicInfo,
      _contactInfo: contactInfo,
      _medicalInfo: medicalInfo,
      _isPublished: false,
      _emergencyContacts: emergencyContacts,
    };
  }, [basicInfo, contactInfo, emergencyContacts, medicalInfo]);

  const validateInputs = () => {
    const isBasicInfoValid =
      basicInfo._fullName.trim() !== "" &&
      basicInfo._patientAddress.trim() !== "" &&
      basicInfo._gender !== null &&
      basicInfo._dateOfBirth !== 0;

    const isMedicalInfoValid =
      medicalInfo.currentMedications.trim() !== "" &&
      medicalInfo.diagnosis.trim() !== "" &&
      medicalInfo.treatmentPlan.trim() !== "";

    const isContactInfoValid =
      contactInfo.phoneNumber.trim() !== "" &&
      contactInfo.emailAddress.trim() !== "" &&
      contactInfo.residentialAddress.trim() !== "" &&
      contactInfo.nextOfKin.trim() !== "" &&
      contactInfo.nextOfKinPhoneNumber.trim() !== "" &&
      contactInfo.nextOfKinResidentialAddress.trim() !== ""
    contactInfo.healthInsured !== null;

    const areEmergencyContactsValid = emergencyContacts.every(
      (contact) =>
        contact.name.trim() !== "" &&
        contact.phoneNumber.trim() !== "" &&
        contact.residentialAddress.trim() !== ""
    );

    return (
      isBasicInfoValid && isMedicalInfoValid && isContactInfoValid && areEmergencyContactsValid
    );
  };


  useEffect(() => {
    const savedRecord = localStorage.getItem("patientRecord");

    if (savedRecord) {
      const parsedRecord: IRecords = JSON.parse(savedRecord);

      setBasicInfo({
        _patientAddress: parsedRecord._patientAddress,
        _fullName: parsedRecord._fullName,
        _gender: parsedRecord._gender,
        _dateOfBirth: parsedRecord._dateOfBirth,
      });

      setMedicalInfo(parsedRecord._medicalInfo);
      setContactInfo(parsedRecord._contactInfo);
      setEmergencyContacts(parsedRecord._emergencyContacts);

    }
  }, [combinedInfo._medicalInfo.medicalHistoryFile]);

  if (!isConnected) {
    return (
      <div className="p-10 px-5 lg:px-20 lg:min-h-screen">
        <Header />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <p className="text-3xl max-md:text-xl">Please connect your wallet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-10 px-5 lg:px-20 pb-0 min-h-screen">
      <Header />

      <div className="flex justify-between items-center mt-5">
        <div>
          <p className="text-2xl font-clash_semibold">New Record</p>
          <p className="font-clash_light">Create new patient record</p>
        </div>
        <Cross1Icon className="cursor-pointer" onClick={() => navigate(-1)} />
      </div>

      <div className="mt-5">
        <p className="font-clash_medium">Patient's Personal Details:</p>
        <div className="mt-3 flex flex-col gap-4">
          <div className="flex gap-3">
            <Input
              id="name"
              type="text"
              placeholder="Full Name"
              value={basicInfo._fullName}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, _fullName: e.target.value })
              }
            />
            <Input
              id="address_id"
              type="text"
              placeholder="Address ID"
              value={basicInfo._patientAddress}
              onChange={(e) =>
                setBasicInfo({ ...basicInfo, _patientAddress: e.target.value })
              }
            />
            <Input
              id="medications"
              type="text"
              placeholder="Current medications"
              value={medicalInfo.currentMedications}
              onChange={(e) =>
                setMedicalInfo({
                  ...medicalInfo,
                  currentMedications: e.target.value,
                })
              }
            />
            <RadioGroup className="flex" value={basicInfo._gender} onValueChange={(value) => setBasicInfo({ ...basicInfo, _gender: value as unknown as Gender })}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-[#2924A6]/80 text-blue-300" value={Gender.Male} id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-[#2924A6]/80 text-blue-300" value={Gender.Female} id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="border-[#2924A6]/80 text-blue-300" value={Gender.Other} id="r3" />
                <Label htmlFor="r3">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex gap-3">
            <div className="relative grid w-full max-w-sm items-center gap-1.5">
              {/* <div className="relative"> */}
              <Input
                id="picture"
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 z-10 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setMedicalInfo({
                      ...medicalInfo,
                      medicalHistoryFile: file.name,
                    })
                    console.log("sam here", file.name);
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImageSrc(reader.result as string);
                    };

                    reader.readAsDataURL(file)
                  }
                }}
              />
              <div className="flex items-center justify-start px-3 w-full h-full border border-gradient border-gray-300 rounded-md">
                {medicalInfo.medicalHistoryFile == ""
                  ?
                  <span className="text-gray-500 text-sm w-full flex items-center justify-between">
                    Upload medical history
                    <Link2Icon />
                  </span>
                  :
                  <div className="flex max-md:flex-col gap-2">
                    <img src={imageSrc} className="w-5 object-contain" alt="Uploaded Medical File Preview" />
                    <p className="max-md:text-xs">Uploaded {shortenFileName(medicalInfo.medicalHistoryFile)}</p>
                  </div>}

              </div>
              {/* </div> */}
            </div>
            {/* <Input id="picture" type="file" placeholder="Upload medical history" /> */}
            <Input
              id="date"
              type="date"
              placeholder="Date of Birth (dd/mm/yyyy)"
              value={
                basicInfo._dateOfBirth > 0
                  ? epochToDateString(basicInfo._dateOfBirth)
                  : ""
              }
              onChange={(e) => {
                const date = new Date(e.target.value);
                const epochTimestamp = date.getTime() / 1000;

                setBasicInfo({ ...basicInfo, _dateOfBirth: epochTimestamp });
              }}
            />
            <Input
              id="allergies"
              type="text"
              placeholder="Allergies"
              value={medicalInfo.allergies}
              onChange={(e) => setMedicalInfo({ ...medicalInfo, allergies: e.target.value })} />
          </div>
          <div className="flex gap-3">
            <Input
              id="diagnosis"
              type="text"
              placeholder="Diagnosis"
              value={medicalInfo.diagnosis}
              onChange={(e) =>
                setMedicalInfo({ ...medicalInfo, diagnosis: e.target.value })
              }
            />
            <Input
              id="treatment"
              type="text"
              placeholder="Treatment plan"
              value={medicalInfo.treatmentPlan}
              onChange={(e) =>
                setMedicalInfo({
                  ...medicalInfo,
                  treatmentPlan: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-clash_medium">Contact Info:</p>
        <div className="mt-3 flex flex-col gap-4">
          <div className="flex gap-3">
            <Input
              id="phone"
              type="number"
              placeholder="Phone number"
              value={contactInfo.phoneNumber}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, phoneNumber: e.target.value })
              }
            />
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              value={contactInfo.emailAddress}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, emailAddress: e.target.value })
              }
            />
            <Input
              id="address"
              type="text"
              placeholder="Residential address"
              value={contactInfo.residentialAddress}
              onChange={(e) =>
                setContactInfo({
                  ...contactInfo,
                  residentialAddress: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-3">
            <Input
              id="kin"
              type="text"
              placeholder="Next of kin"
              value={contactInfo.nextOfKin}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, nextOfKin: e.target.value })
              }
            />
            <Input
              id="kin_phone"
              type="number"
              placeholder="Next of kin phone number"
              value={contactInfo.nextOfKinPhoneNumber}
              onChange={(e) =>
                setContactInfo({
                  ...contactInfo,
                  nextOfKinPhoneNumber: e.target.value,
                })
              }
            />
            <Input
              id="kin_address"
              type="text"
              placeholder="Next of kin residential address"
              value={contactInfo.nextOfKinResidentialAddress}
              onChange={(e) =>
                setContactInfo({
                  ...contactInfo,
                  nextOfKinResidentialAddress: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex gap-5 items-center">
        <p className="font-clash_medium">Health Insurance:</p>
        <RadioGroup className="flex" value={contactInfo.healthInsured} onValueChange={(value) => setContactInfo({ ...contactInfo, healthInsured: value as unknown as boolean })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="border-[#2924A6]/80 text-blue-300" value={true} id="r1" />
            <Label htmlFor="r1">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="border-[#2924A6]/80 text-blue-300" value={false} id="r2" />
            <Label htmlFor="r2">No</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="mt-5">
        <p className="font-clash_medium">Emergency Contacts:</p>
        <div className="mt-3 flex flex-col gap-4">
          {emergencyContacts.map((contact, index) => (
            <div className="flex gap-3" key={index}>
              <Input
                id={`emg_name${index + 1}`}
                type="text"
                placeholder="Contact name"
                value={contact.name}
                onChange={(e) => {
                  const newContacts = [...emergencyContacts];
                  newContacts[index].name = e.target.value;
                  setEmergencyContacts(newContacts);
                }}
              />
              <Input
                id={`emg_phone${index + 1}`}
                type="number"
                placeholder="Phone number"
                value={contact.phoneNumber}
                onChange={(e) => {
                  const newContacts = [...emergencyContacts];
                  newContacts[index].phoneNumber = e.target.value;
                  setEmergencyContacts(newContacts);
                }}
              />
              <Input
                id="emg_address1"
                type="text"
                placeholder="Residential address"
                value={contact.residentialAddress}
                onChange={(e) => {
                  const newContacts = [...emergencyContacts];
                  newContacts[index].residentialAddress = e.target.value;
                  setEmergencyContacts(newContacts);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 mb-10 flex items-end justify-between">
        <div className="flex max-md:flex-col gap-5 max-md:gap-3">
          <Button size="lg" className="bg-[#2924A6]" onClick={() => {
            localStorage.setItem('patientRecord', JSON.stringify(combinedInfo));
          }}>
            Save
          </Button>
          {/* <Button size="lg" className="bg-[#2924A6]" onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}>
            Clear
          </Button> */}
        </div>
        {/* <Button size='lg' className='bg-[#2924A6]'>Publish record</Button> */}
        <div onClick={() => {
          if (validateInputs()) {
            localStorage.clear();
          } else {
            toast.error('Please fill in all required fields');
          }
        }
        }>
          <Publish isValidated={validateInputs()} info={combinedInfo} />
        </div>
      </div>
    </div>
  );
};

export default NewsRecord;
