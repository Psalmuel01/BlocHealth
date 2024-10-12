const abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "patientAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "doctorAddress",
          type: "address",
        },
      ],
      name: "DoctorAuthorized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "patientAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "doctorAddress",
          type: "address",
        },
      ],
      name: "DoctorDeauthorized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "patientAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "patientId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "ipfsImageLink",
          type: "string",
        },
      ],
      name: "IPFSImageUpdated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "patientAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "patientId",
          type: "uint256",
        },
      ],
      name: "PatientAdded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "patientAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "patientId",
          type: "uint256",
        },
      ],
      name: "PatientUpdated",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "_allergy",
          type: "string",
        },
      ],
      name: "addAllergy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_doctorAddress",
          type: "address",
        },
      ],
      name: "addDoctor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "_medication",
          type: "string",
        },
      ],
      name: "addMedication",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_dateOfBirth",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_bloodType",
          type: "string",
        },
        {
          internalType: "string",
          name: "_ipfsImageLink",
          type: "string",
        },
      ],
      name: "addPatient",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_doctorAddress",
          type: "address",
        },
      ],
      name: "authorizeDoctor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_doctorAddress",
          type: "address",
        },
      ],
      name: "deauthorizeDoctor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "doctors",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_patientId",
          type: "uint256",
        },
      ],
      name: "getPatientByID",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
      ],
      name: "getPatientInfo",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "_doctorAddress",
          type: "address",
        },
      ],
      name: "isAuthorizedDoctor",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_doctorAddress",
          type: "address",
        },
      ],
      name: "removeDoctor",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "_ipfsImageLink",
          type: "string",
        },
      ],
      name: "updateIPFSImageLink",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_patientAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_dateOfBirth",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_bloodType",
          type: "string",
        },
      ],
      name: "updatePatient",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  
  export default abi;
  