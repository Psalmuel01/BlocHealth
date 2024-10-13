/**
 * Submitted for verification at sepolia.basescan.org on 2024-10-12
 */

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract BlocHealth {
    address public admin;
    mapping(address => bool) public registeredPatients;
    mapping(address => uint256) public patientAddresses;
    mapping(uint256 => address) public patientIds;

    struct EmergencyContact {
        string name;
        string phoneNumber;
        string residentialAddress;
    }

    struct ContactInfo {
        string phoneNumber;
        string emailAddress;
        string residentialAddress;
        string nextOfKin;
        string nextOfKinPhoneNumber;
        string nextOfKinResidentialAddress;
        bool healthInsured;
    }

    struct MedicalInfo {
        string currentMedications;
        string allergies;
        string diagnosis;
        string treatmentPlan;
        string medicalHistoryFile;
    }

    enum Gender {
        Male,
        Female,
        Other
    }

    struct Patient {
        string fullName;
        Gender gender;
        uint256 dateOfBirth;
        ContactInfo contactInfo;
        MedicalInfo medicalInfo;
        bool isPublished;
        bool isActive;
        EmergencyContact[] emergencyContacts;
    }

    struct Appointment {
        string name;
        uint256 date;
        string reason;
    }

    uint256 public patientIdCounter = 1;
    uint256 public appointmentIdCounter = 1;

    mapping(uint256 => Patient) private patients;
    mapping(uint256 => Appointment) private appointments;
    mapping(uint256 => uint256[]) private patientAppointments;

    event PatientAdded(uint256 patientId, string fullName, bool isPublished);
    event AppointmentBooked(uint256 appointmentId, uint256 patientId, string name);
    event AdminAdded(address newAdmin);
    event AdminRemoved(address admin);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action.");
        _;
    }

    modifier onlyRegisteredPatient() {
        require(registeredPatients[msg.sender], "You must be a registered patient to perform this action.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Admin adds a new patient
    function addPatient(
        address _patientAddress,
        string memory _fullName,
        Gender _gender,
        uint256 _dateOfBirth,
        ContactInfo memory _contactInfo,
        MedicalInfo memory _medicalInfo,
        bool _isPublished,
        EmergencyContact[] memory _emergencyContacts
    ) public onlyAdmin {
        require(_patientAddress != address(0), "Invalid address.");
        require(patientAddresses[_patientAddress] == 0, "Address is already associated with a patient.");

        uint256 currentPatientId = patientIdCounter;

        Patient storage newPatient = patients[currentPatientId];
        newPatient.fullName = _fullName;
        newPatient.gender = _gender;
        newPatient.dateOfBirth = _dateOfBirth;
        newPatient.contactInfo = _contactInfo;
        newPatient.medicalInfo = _medicalInfo;
        newPatient.isPublished = _isPublished;
        newPatient.isActive = true;

        for (uint256 i = 0; i < _emergencyContacts.length; i++) {
            newPatient.emergencyContacts.push(_emergencyContacts[i]);
        }

        registeredPatients[_patientAddress] = true;
        patientAddresses[_patientAddress] = currentPatientId;
        patientIds[currentPatientId] = _patientAddress;

        emit PatientAdded(currentPatientId, _fullName, _isPublished);
        patientIdCounter++;
    }

    // Registered patients book their own appointments
    function bookAppointment(uint256 _patientId, string memory _name, uint256 _date, string memory _reason)
        public
        onlyRegisteredPatient
    {
        require(_patientId > 0 && _patientId < patientIdCounter, "Invalid patient ID.");

        uint256 currentAppointmentId = appointmentIdCounter;
        appointments[currentAppointmentId] = Appointment({name: _name, date: _date, reason: _reason});

        patientAppointments[_patientId].push(currentAppointmentId);

        emit AppointmentBooked(currentAppointmentId, _patientId, _name);
        appointmentIdCounter++;
    }

    // Get all appointments for a specific patient
    function getAppointmentsByPatient(uint256 _patientId) public view returns (Appointment[] memory) {
        require(_patientId > 0 && _patientId < patientIdCounter, "Patient does not exist.");

        uint256[] storage appointmentIds = patientAppointments[_patientId];
        Appointment[] memory result = new Appointment[](appointmentIds.length);

        for (uint256 i = 0; i < appointmentIds.length; i++) {
            result[i] = appointments[appointmentIds[i]];
        }

        return result;
    }

    function getAllPatients() public view returns (Patient[] memory) {
        Patient[] memory allPatients = new Patient[](patientIdCounter - 1);
        for (uint256 i = 1; i < patientIdCounter; i++) {
            allPatients[i - 1] = patients[i];
        }
        return allPatients;
    }

    function getPublishedPatients() public view returns (Patient[] memory) {
        uint256 publishedCount = 0;
        for (uint256 i = 1; i < patientIdCounter; i++) {
            if (patients[i].isPublished) {
                publishedCount++;
            }
        }

        Patient[] memory publishedPatients = new Patient[](publishedCount);
        uint256 index = 0;
        for (uint256 i = 1; i < patientIdCounter; i++) {
            if (patients[i].isPublished) {
                publishedPatients[index] = patients[i];
                index++;
            }
        }

        return publishedPatients;
    }

    function getUnpublishedPatients() public view returns (Patient[] memory) {
        uint256 unpublishedCount = 0;
        for (uint256 i = 1; i < patientIdCounter; i++) {
            if (!patients[i].isPublished) {
                unpublishedCount++;
            }
        }

        Patient[] memory unpublishedPatients = new Patient[](unpublishedCount);
        uint256 index = 0;
        for (uint256 i = 1; i < patientIdCounter; i++) {
            if (!patients[i].isPublished) {
                unpublishedPatients[index] = patients[i];
                index++;
            }
        }

        return unpublishedPatients;
    }

    function getAllAppointments() public view returns (Appointment[] memory) {
        Appointment[] memory allAppointments = new Appointment[](appointmentIdCounter - 1);
        for (uint256 i = 1; i < appointmentIdCounter; i++) {
            allAppointments[i - 1] = appointments[i];
        }
        return allAppointments;
    }

    function getPatientInfoByAddress(address _patientAddress) public view returns (Patient memory) {
        require(patientAddresses[_patientAddress] != 0, "Patient does not exist.");
        uint256 patientId = patientAddresses[_patientAddress];
        return patients[patientId];
    }

    function getPatientByID(uint256 _patientId) public view returns (address) {
        address patientAddress = patientIds[_patientId];
        require(patients[_patientId].isActive, "Patient does not exist");
        return patientAddress;
    }
}
