// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

abstract contract BlocHealth {
    address public owner;
    uint256 private patientIdCounter;

    struct Patient {
        uint256 id;
        string name;
        uint256 dateOfBirth;
        string bloodType;
        string[] allergies;
        string[] medications;
        address[] authorizedDoctors;
        string ipfsImageLink;
        bool isActive;
    }

    event DoctorAuthorized(address indexed patientAddress, address indexed doctorAddress);
    event DoctorDeauthorized(address indexed patientAddress, address indexed doctorAddress);
    event IPFSImageUpdated(address indexed patientAddress, uint256 indexed patientId, string ipfsImageLink);
    event PatientAdded(address indexed patientAddress, uint256 indexed patientId);
    event PatientUpdated(address indexed patientAddress, uint256 indexed patientId);

    mapping(address => Patient) private patients;
    mapping(uint256 => address) private patientIds;
    mapping(address => bool) public doctors;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyAuthorized(address _patientAddress) {
        require(
            msg.sender == owner || msg.sender == _patientAddress || isAuthorizedDoctor(_patientAddress, msg.sender),
            "Not authorized to access this patient's information"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
        patientIdCounter = 0;
    }

    function addDoctor(address _doctorAddress) public onlyOwner {
        doctors[_doctorAddress] = true;
    }

    function removeDoctor(address _doctorAddress) public onlyOwner {
        doctors[_doctorAddress] = false;
    }

    function addPatient(
        address _patientAddress,
        string memory _name,
        uint256 _dateOfBirth,
        string memory _bloodType,
        string memory _ipfsImageLink
    ) public onlyOwner {
        require(!patients[_patientAddress].isActive, "Patient already exists");

        patientIdCounter++;
        uint256 newPatientId = patientIdCounter;

        patients[_patientAddress] = Patient({
            id: newPatientId,
            name: _name,
            dateOfBirth: _dateOfBirth,
            bloodType: _bloodType,
            allergies: new string[](0),
            medications: new string[](0),
            authorizedDoctors: new address[](0),
            ipfsImageLink: _ipfsImageLink,
            isActive: true
        });

        patientIds[newPatientId] = _patientAddress;

        emit PatientAdded(_patientAddress, newPatientId);
    }

    function updatePatient(address _patientAddress, string memory _name, uint256 _dateOfBirth, string memory _bloodType)
        public
        onlyAuthorized(_patientAddress)
    {
        require(patients[_patientAddress].isActive, "Patient does not exist");

        Patient storage patient = patients[_patientAddress];
        patient.name = _name;
        patient.dateOfBirth = _dateOfBirth;
        patient.bloodType = _bloodType;

        emit PatientUpdated(_patientAddress, patient.id);
    }

    function updateIPFSImageLink(address _patientAddress, string memory _ipfsImageLink)
        public
        onlyAuthorized(_patientAddress)
    {
        require(patients[_patientAddress].isActive, "Patient does not exist");

        Patient storage patient = patients[_patientAddress];
        patient.ipfsImageLink = _ipfsImageLink;

        emit IPFSImageUpdated(_patientAddress, patient.id, _ipfsImageLink);
    }

    function addAllergy(address _patientAddress, string memory _allergy) public onlyAuthorized(_patientAddress) {
        require(patients[_patientAddress].isActive, "Patient does not exist");
        patients[_patientAddress].allergies.push(_allergy);
        emit PatientUpdated(_patientAddress, patients[_patientAddress].id);
    }

    function addMedication(address _patientAddress, string memory _medication) public onlyAuthorized(_patientAddress) {
        require(patients[_patientAddress].isActive, "Patient does not exist");
        patients[_patientAddress].medications.push(_medication);
        emit PatientUpdated(_patientAddress, patients[_patientAddress].id);
    }

    function authorizeDoctor(address _doctorAddress) public {
        require(patients[msg.sender].isActive, "Patient does not exist");
        require(doctors[_doctorAddress], "Not a registered doctor");
        patients[msg.sender].authorizedDoctors.push(_doctorAddress);
        emit DoctorAuthorized(msg.sender, _doctorAddress);
    }

    function deauthorizeDoctor(address _doctorAddress) public {
        require(patients[msg.sender].isActive, "Patient does not exist");
        Patient storage patient = patients[msg.sender];
        for (uint256 i = 0; i < patient.authorizedDoctors.length; i++) {
            if (patient.authorizedDoctors[i] == _doctorAddress) {
                patient.authorizedDoctors[i] = patient.authorizedDoctors[patient.authorizedDoctors.length - 1];
                patient.authorizedDoctors.pop();
                emit DoctorDeauthorized(msg.sender, _doctorAddress);
                break;
            }
        }
    }

    function getAllPatients() public view returns (Patient[] memory _patients) {
        _patients = new Patient[](patientIdCounter);

        for (uint256 i = 0; i < patientIdCounter; i++) {
            _patients[i] = patients[patientIds[i + 1]];
        }
    }

    function getPatientInfo(address _patientAddress)
        public
        view
        onlyAuthorized(_patientAddress)
        returns (uint256, string memory, uint256, string memory, string[] memory, string[] memory, string memory)
    {
        require(patients[_patientAddress].isActive, "Patient does not exist");
        Patient memory patient = patients[_patientAddress];
        return (
            patient.id,
            patient.name,
            patient.dateOfBirth,
            patient.bloodType,
            patient.allergies,
            patient.medications,
            patient.ipfsImageLink
        );
    }

    function getPatientByID(uint256 _patientId) public view returns (address) {
        address patientAddress = patientIds[_patientId];
        require(patients[patientAddress].isActive, "Patient does not exist");
        return patientAddress;
    }

    function isAuthorizedDoctor(address _patientAddress, address _doctorAddress) public view returns (bool) {
        Patient storage patient = patients[_patientAddress];
        for (uint256 i = 0; i < patient.authorizedDoctors.length; i++) {
            if (patient.authorizedDoctors[i] == _doctorAddress) {
                return true;
            }
        }
        return false;
    }
}
