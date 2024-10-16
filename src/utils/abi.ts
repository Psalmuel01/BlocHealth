import type { Abi } from "abitype";
const CONTRACT_ABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "AdminRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "appointmentId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "patientId",
                type: "uint256",
            },
            { indexed: false, internalType: "string", name: "name", type: "string" },
        ],
        name: "AppointmentBooked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "patientId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "fullName",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isPublished",
                type: "bool",
            },
        ],
        name: "PatientAdded",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "_patientAddress", type: "address" },
            { internalType: "string", name: "_fullName", type: "string" },
            {
                internalType: "enum BlocHealth.Gender",
                name: "_gender",
                type: "uint8",
            },
            { internalType: "uint256", name: "_dateOfBirth", type: "uint256" },
            {
                components: [
                    { internalType: "string", name: "phoneNumber", type: "string" },
                    { internalType: "string", name: "emailAddress", type: "string" },
                    {
                        internalType: "string",
                        name: "residentialAddress",
                        type: "string",
                    },
                    { internalType: "string", name: "nextOfKin", type: "string" },
                    {
                        internalType: "string",
                        name: "nextOfKinPhoneNumber",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "nextOfKinResidentialAddress",
                        type: "string",
                    },
                    { internalType: "bool", name: "healthInsured", type: "bool" },
                ],
                internalType: "struct BlocHealth.ContactInfo",
                name: "_contactInfo",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "string",
                        name: "currentMedications",
                        type: "string",
                    },
                    { internalType: "string", name: "allergies", type: "string" },
                    { internalType: "string", name: "diagnosis", type: "string" },
                    { internalType: "string", name: "treatmentPlan", type: "string" },
                    {
                        internalType: "string",
                        name: "medicalHistoryFile",
                        type: "string",
                    },
                ],
                internalType: "struct BlocHealth.MedicalInfo",
                name: "_medicalInfo",
                type: "tuple",
            },
            { internalType: "bool", name: "_isPublished", type: "bool" },
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "phoneNumber", type: "string" },
                    {
                        internalType: "string",
                        name: "residentialAddress",
                        type: "string",
                    },
                ],
                internalType: "struct BlocHealth.EmergencyContact[]",
                name: "_emergencyContacts",
                type: "tuple[]",
            },
        ],
        name: "addPatient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "admin",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "appointmentIdCounter",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_patientId", type: "uint256" },
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "uint256", name: "_date", type: "uint256" },
            { internalType: "string", name: "_reason", type: "string" },
        ],
        name: "bookAppointment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllAppointments",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "uint256", name: "date", type: "uint256" },
                    { internalType: "string", name: "reason", type: "string" },
                ],
                internalType: "struct BlocHealth.Appointment[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllPatients",
        outputs: [
            {
                components: [
                    { internalType: "uint256", name: "id", type: "uint256" },
                    { internalType: "string", name: "fullName", type: "string" },
                    {
                        internalType: "enum BlocHealth.Gender",
                        name: "gender",
                        type: "uint8",
                    },
                    { internalType: "uint256", name: "dateOfBirth", type: "uint256" },
                    {
                        components: [
                            { internalType: "string", name: "phoneNumber", type: "string" },
                            { internalType: "string", name: "emailAddress", type: "string" },
                            {
                                internalType: "string",
                                name: "residentialAddress",
                                type: "string",
                            },
                            { internalType: "string", name: "nextOfKin", type: "string" },
                            {
                                internalType: "string",
                                name: "nextOfKinPhoneNumber",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "nextOfKinResidentialAddress",
                                type: "string",
                            },
                            { internalType: "bool", name: "healthInsured", type: "bool" },
                        ],
                        internalType: "struct BlocHealth.ContactInfo",
                        name: "contactInfo",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "currentMedications",
                                type: "string",
                            },
                            { internalType: "string", name: "allergies", type: "string" },
                            { internalType: "string", name: "diagnosis", type: "string" },
                            { internalType: "string", name: "treatmentPlan", type: "string" },
                            {
                                internalType: "string",
                                name: "medicalHistoryFile",
                                type: "string",
                            },
                        ],
                        internalType: "struct BlocHealth.MedicalInfo",
                        name: "medicalInfo",
                        type: "tuple",
                    },
                    { internalType: "bool", name: "isPublished", type: "bool" },
                    { internalType: "bool", name: "isActive", type: "bool" },
                    {
                        components: [
                            { internalType: "string", name: "name", type: "string" },
                            { internalType: "string", name: "phoneNumber", type: "string" },
                            {
                                internalType: "string",
                                name: "residentialAddress",
                                type: "string",
                            },
                        ],
                        internalType: "struct BlocHealth.EmergencyContact[]",
                        name: "emergencyContacts",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct BlocHealth.Patient[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_patientId", type: "uint256" }],
        name: "getAppointmentsByPatient",
        outputs: [
            {
                components: [
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "uint256", name: "date", type: "uint256" },
                    { internalType: "string", name: "reason", type: "string" },
                ],
                internalType: "struct BlocHealth.Appointment[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_patientId", type: "uint256" }],
        name: "getPatientByID",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_patientAddress", type: "address" },
        ],
        name: "getPatientInfoByAddress",
        outputs: [
            {
                components: [
                    { internalType: "uint256", name: "id", type: "uint256" },
                    { internalType: "string", name: "fullName", type: "string" },
                    {
                        internalType: "enum BlocHealth.Gender",
                        name: "gender",
                        type: "uint8",
                    },
                    { internalType: "uint256", name: "dateOfBirth", type: "uint256" },
                    {
                        components: [
                            { internalType: "string", name: "phoneNumber", type: "string" },
                            { internalType: "string", name: "emailAddress", type: "string" },
                            {
                                internalType: "string",
                                name: "residentialAddress",
                                type: "string",
                            },
                            { internalType: "string", name: "nextOfKin", type: "string" },
                            {
                                internalType: "string",
                                name: "nextOfKinPhoneNumber",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "nextOfKinResidentialAddress",
                                type: "string",
                            },
                            { internalType: "bool", name: "healthInsured", type: "bool" },
                        ],
                        internalType: "struct BlocHealth.ContactInfo",
                        name: "contactInfo",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "currentMedications",
                                type: "string",
                            },
                            { internalType: "string", name: "allergies", type: "string" },
                            { internalType: "string", name: "diagnosis", type: "string" },
                            { internalType: "string", name: "treatmentPlan", type: "string" },
                            {
                                internalType: "string",
                                name: "medicalHistoryFile",
                                type: "string",
                            },
                        ],
                        internalType: "struct BlocHealth.MedicalInfo",
                        name: "medicalInfo",
                        type: "tuple",
                    },
                    { internalType: "bool", name: "isPublished", type: "bool" },
                    { internalType: "bool", name: "isActive", type: "bool" },
                    {
                        components: [
                            { internalType: "string", name: "name", type: "string" },
                            { internalType: "string", name: "phoneNumber", type: "string" },
                            {
                                internalType: "string",
                                name: "residentialAddress",
                                type: "string",
                            },
                        ],
                        internalType: "struct BlocHealth.EmergencyContact[]",
                        name: "emergencyContacts",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct BlocHealth.Patient",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "patientIdCounter",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "registeredPatients",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
] as unknown as Abi;

export default CONTRACT_ABI;
