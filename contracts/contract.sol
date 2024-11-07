/**
 *Submitted for verification at sepolia.basescan.org on 2024-10-18
*/

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <=0.9.0;

contract BlocHealth {

    enum AccessRoles { Doctor, Staff, Nurse, Admin }
    enum Gender { Male, Female, Other }

    struct Hospital {
        string name;
        string location;
        uint256 DOE;
        uint256 hospitalRegNo;
        uint256 staffCount;
        uint256 patientCount;
        address owner;
        mapping (address => Staff) roles;
        address[] patientAddresses;
        mapping (address => Patient) patients;
    }

    struct Staff {
        string name;
        AccessRoles role;
        string email;
        string phone;
    }

    struct Patient {
        string name;
        uint256 DOB;
        Gender gender;
        ContactInfo contactInfo;
        MedicalInfo medicalInfo;
        uint128 appointmentCount;
        uint256[] appointmentDates;
        mapping (uint256 => Appointment) appointments;
        EmergencyContact[] emergencyContacts;
    }

    struct PatientReturnInfo {
        string name;
        uint256 DOB;
        Gender gender;
        ContactInfo contactInfo;
        MedicalInfo medicalInfo;
    }


    struct ContactInfo {
        string phone;
        string email;
        string residentialAddress;
        string nextOfKin;
        string nextOfKinPhoneNumber;
        string nextOfKinResidentialAddress;
        bool healthInsured;
    }

    struct MedicalInfo {
        string currentMedications;
        string allergies;
        string medicalHistoryFile;
    }

    struct EmergencyContact {
        string name;
        string phone;
        string residentialAddress;
    }

    struct Appointment {
        string currentMedications;
        string diagnosis;
        string treatmentPlan;
        uint256 date;
        string reason;
    }

    mapping (string => Hospital) public hospitals;
    uint248 public hospitalCount;
    address public owner;

    event HospitalCreated (string name, string hospitalId, address owner);
    event HospitalStaffRoleUpdated (string hospitalId, address _address, AccessRoles role);
    event PatientCreated (string name, address patient, uint256 DOB);
    event VisitRecordCreated (string name, address patient, uint256 date);

    error IsNotValidAddressError (address _address);
    error HospitalDoesNotExistError (string hospitalId);
    error NotHospitalOwnerError(address sender);
    error HospitalStaffDoesNotExistsError(address _address);
    error NotAuthorizedForHospitalError(address sender);
    error PatientDoesNotExistsError(address patient);

    constructor() {
        owner = msg.sender;
    }

    function _isValidAddress(address _address) private pure 
    {
        if (_address == address(0)) {
            revert IsNotValidAddressError({ _address: _address });
        }
    }

    modifier isValidAddress (address _address) {
        _isValidAddress(_address);
        _;
    }

    function _hospitalExists(string memory _hospitalId) private view
    {
        if(hospitals[_hospitalId].owner == address(0)) {
            revert HospitalDoesNotExistError({ hospitalId: _hospitalId });
        }
    }

    modifier hospitalExists (string memory _hospitalId) {
        _hospitalExists(_hospitalId);
        _;
    }

    function _onlyHospitalOwner (string memory _hospitalId) private view 
    {
        if (msg.sender != hospitals[_hospitalId].owner) {
            revert NotHospitalOwnerError({ sender: msg.sender });
        }
    }

    modifier onlyHospitalOwner (string memory _hospitalId) {
        _onlyHospitalOwner(_hospitalId);
        _;
    }

    function _hospitalStaffExists (
        string memory _hospitalId, 
        address _address
    ) private view {
        Hospital storage hospital = hospitals[_hospitalId];
        if (
            hospital.roles[_address].role != AccessRoles.Admin &&
            hospital.roles[_address].role != AccessRoles.Doctor &&
            hospital.roles[_address].role != AccessRoles.Nurse &&
            hospital.roles[_address].role != AccessRoles.Staff
        ) {
            revert HospitalStaffDoesNotExistsError({ _address: _address });
        }

    }

    modifier hospitalStaffExists (
        string memory _hospitalId, 
        address _address
    ) {
        _hospitalStaffExists(_hospitalId, _address);
        _;
    }

    function _patientExists (
        string memory _hospitalId, 
        address _patient
    ) private view {
        Hospital storage hospital = hospitals[_hospitalId];
        if (hospital.patients[_patient].DOB == 0) {
            revert PatientDoesNotExistsError({ patient: _patient });
        }
    }

    modifier patientExists (
        string memory _hospitalId, 
        address _patient
    ) {
        _patientExists(_hospitalId, _patient);
        _;
    }

    function _isAuthorizedRole (string memory _hospitalId) private view {
        Hospital storage hospital = hospitals[_hospitalId];
    
        if (
            msg.sender != hospital.owner &&
            hospital.roles[msg.sender].role != AccessRoles.Admin &&
            hospital.roles[msg.sender].role != AccessRoles.Doctor &&
            hospital.roles[msg.sender].role != AccessRoles.Nurse
        ) {
            revert NotAuthorizedForHospitalError({ sender: msg.sender });
        }
    }

    modifier isAuthorizedRole (string memory _hospitalId) {
        _isAuthorizedRole(_hospitalId);
        _;
    }

    function _isAuthorizedToRetrieve(string memory _hospitalId) private view {
        Hospital storage hospital = hospitals[_hospitalId];
        
        if (
            msg.sender != hospital.owner &&
            hospital.roles[msg.sender].role != AccessRoles.Admin &&
            hospital.roles[msg.sender].role != AccessRoles.Doctor &&
            hospital.roles[msg.sender].role != AccessRoles.Nurse &&
            hospital.roles[msg.sender].role != AccessRoles.Staff
        ) {
            revert NotAuthorizedForHospitalError({ sender: msg.sender });
        }
    }

    modifier isAuthorizedToRetrieve (string memory _hospitalId) {
        _isAuthorizedToRetrieve(_hospitalId);
        _;
    }

    function _isAuthorizedToRetrieveIncludingPatient(
        string memory _hospitalId, 
        address _patient
    ) private view {
        Hospital storage hospital = hospitals[_hospitalId];
        
        if (
            msg.sender != _patient &&
            msg.sender != hospital.owner &&
            hospital.roles[msg.sender].role != AccessRoles.Admin &&
            hospital.roles[msg.sender].role != AccessRoles.Doctor &&
            hospital.roles[msg.sender].role != AccessRoles.Nurse &&
            hospital.roles[msg.sender].role != AccessRoles.Staff
        ) {
            revert NotAuthorizedForHospitalError({ sender: msg.sender });
        }
    }

    modifier isAuthorizedToRetrieveIncludingPatient (
        string memory _hospitalId, 
        address _patient
    ) {
        _isAuthorizedToRetrieveIncludingPatient(_hospitalId, _patient);
        _;
    }

    function addHospital (
        string memory _hospitalId, 
        string memory _name, 
        string memory _location, 
        uint256 _DOE, 
        uint256 _hospitalRegNo
    ) external {

        Hospital storage hospital = hospitals[_hospitalId];

        if (hospital.DOE == 0) {
            hospitalCount++;
        }

        hospital.name = _name;
        hospital.location = _location;
        hospital.hospitalRegNo = _hospitalRegNo;
        hospital.DOE = _DOE;
        hospital.owner = msg.sender;

        emit HospitalCreated(_name, _hospitalId, msg.sender);
    }

    function changeHospitalOwner (
        string calldata _hospitalId, 
        address _newOwner
    ) hospitalExists(_hospitalId) isValidAddress(_newOwner) onlyHospitalOwner(_hospitalId) external {

        hospitals[_hospitalId].owner = _newOwner;
    }

    function updateHospitalStaffRoles (
        string memory _hospitalId, 
        address _address, 
        string memory _name, 
        AccessRoles _role, 
        string memory _email, 
        string memory _phone
    ) onlyHospitalOwner(_hospitalId) isValidAddress(_address) hospitalExists(_hospitalId) external {

        Hospital storage hospital = hospitals[_hospitalId];

        if (
            hospital.roles[_address].role != AccessRoles.Admin &&
            hospital.roles[_address].role != AccessRoles.Doctor && 
            hospital.roles[_address].role != AccessRoles.Nurse &&
            hospital.roles[_address].role != AccessRoles.Staff
        ) {
            hospital.staffCount++;
        }

        hospital.roles[_address].name = _name;
        hospital.roles[_address].role = _role;
        hospital.roles[_address].email = _email;
        hospital.roles[_address].phone = _phone;

        emit HospitalStaffRoleUpdated(_hospitalId, _address, _role);
    }

    function isHospitalStaff (string memory _hospitalId) hospitalExists(_hospitalId) hospitalStaffExists(_hospitalId, msg.sender) external view returns (bool) {
        return true;
    }

    function deleteHospital (string memory _hospitalId) onlyHospitalOwner(_hospitalId) hospitalExists(_hospitalId) external {
        delete hospitals[_hospitalId];
        hospitalCount--;
    }

    function deleteHospitalStaff (
        string memory _hospitalId, 
        address _address
    ) onlyHospitalOwner(_hospitalId) hospitalExists(_hospitalId) isValidAddress(_address) hospitalStaffExists(_hospitalId, _address) external {

        delete hospitals[_hospitalId].roles[_address];
        hospitals[_hospitalId].staffCount--;
    }

    function createPatientRecord (
        string memory _hospitalId, 
        address _patient, 
        string memory _name, 
        Gender _gender, 
        uint256 _DOB, 
        ContactInfo calldata _contactInfo,
        MedicalInfo calldata _medicalInfo, 
        EmergencyContact[] memory _emergencyContacts
    ) isAuthorizedRole(_hospitalId) isValidAddress(_patient) external {
            
        Patient storage patient = hospitals[_hospitalId].patients[_patient];

        if (patient.DOB == 0) {
            hospitals[_hospitalId].patientCount++;
            hospitals[_hospitalId].patientAddresses.push(_patient);
        }

        patient.name = _name;
        patient.DOB = _DOB;
        patient.gender = _gender;

        patient.contactInfo = _contactInfo;
        patient.medicalInfo = _medicalInfo;

        for (uint256 i = 0; i < _emergencyContacts.length; i++) {
            patient.emergencyContacts.push(_emergencyContacts[i]);
        }

        emit PatientCreated(_name, _patient, _DOB);
    }

    function getAllPatients(string calldata _hospitalId) isAuthorizedToRetrieve(_hospitalId) external view returns (PatientReturnInfo[] memory) {
        Hospital storage hospital = hospitals[_hospitalId];
        PatientReturnInfo[] memory allPatients = new PatientReturnInfo[](hospital.patientCount);
        
        for (uint256 i = 0; i < hospital.patientCount; i++) {
            address patientAddress = hospital.patientAddresses[i];
            Patient storage patient = hospital.patients[patientAddress];

            allPatients[i] = PatientReturnInfo({
                name: patient.name,
                DOB: patient.DOB,
                gender: patient.gender,
                contactInfo: patient.contactInfo,
                medicalInfo: patient.medicalInfo
            });
        }
        return allPatients;
    }

    function getPatientRecord (
        string calldata _hospitalId,
        address _patient
    ) isAuthorizedToRetrieveIncludingPatient(_hospitalId, _patient) external view returns (PatientReturnInfo memory, EmergencyContact[] memory) {

        Patient storage patient = hospitals[_hospitalId].patients[_patient];

        PatientReturnInfo memory returnPatient = PatientReturnInfo({
            name: patient.name,
            DOB: patient.DOB,
            gender: patient.gender,
            contactInfo: patient.contactInfo,
            medicalInfo: patient.medicalInfo
        });

        return (returnPatient, patient.emergencyContacts);
    }

    function deletePatientRecord (
        string memory _hospitalId, 
        address _patient
    ) isAuthorizedRole(_hospitalId) patientExists(_hospitalId, _patient) external {

        for (uint256 i = 0; i < hospitals[_hospitalId].patientCount; i++) {
            if (hospitals[_hospitalId].patientAddresses[i] == _patient) {
                hospitals[_hospitalId].patientAddresses[i] = hospitals[_hospitalId].patientAddresses[hospitals[_hospitalId].patientCount - 1];
                hospitals[_hospitalId].patientAddresses.pop();
                break;
            }
        }

        delete hospitals[_hospitalId].patients[_patient];
        hospitals[_hospitalId].patientCount--;
    }

    function uploadAppointment (
        string memory _hospitalId, 
        address _patient, 
        uint256 _date,
        Appointment calldata _appointment
    ) isAuthorizedRole(_hospitalId) patientExists(_hospitalId, _patient) external {

        if (hospitals[_hospitalId].patients[_patient].appointments[_date].date == 0) {
            hospitals[_hospitalId].patients[_patient].appointmentCount++;
            hospitals[_hospitalId].patients[_patient].appointmentDates.push(_date);
        }
        
        hospitals[_hospitalId].patients[_patient].appointments[_date] = _appointment;

        emit VisitRecordCreated(hospitals[_hospitalId].patients[_patient].name, _patient, _date);
    }


    function getPatientAppointments (
        string memory _hospitalId, 
        address _patient
    ) hospitalExists(_hospitalId) isAuthorizedToRetrieveIncludingPatient(_hospitalId, _patient) external view returns(Appointment[] memory) {
        Patient storage patient = hospitals[_hospitalId].patients[_patient];

        Appointment[] memory appointments = new Appointment[](patient.appointmentCount);
        
        for (uint256 i = 0; i < patient.appointmentCount; i++) {
            appointments[i] = patient.appointments[patient.appointmentDates[i]];
        }

        return appointments;
    }
}