# BlocHealth

BlocHealth is a decentralized platform designed to revolutionize the management and storage of patient health records. By leveraging blockchain technology, BlocHealth ensures secure, efficient, and transparent access to patient information, minimizing human error and resource waste. The platform empowers healthcare providers to manage records, appointments, and staff with ease while providing patients with better, more accurate care.

## Key Features

### 1. **Authentication**
   BlocHealth employs robust authentication mechanisms to ensure that only authorized personnel can access sensitive patient records. Each healthcare provider is verified, and their access rights are strictly managed, protecting patient privacy and ensuring compliance with data protection regulations.

### 2. **Dashboard**
   A comprehensive, user-friendly dashboard that gives healthcare providers an overview of patient records, appointments, and other key activities. This high-level view helps providers stay organized, ensuring quick access to critical information when needed.

### 3. **Create & Manage Patient Records**
   Healthcare providers can easily create new patient records, ensuring all patient data is up-to-date. This includes patient demographics, medical history, prescriptions, treatments, and more. BlocHealth enables seamless record updates, keeping healthcare data both accurate and accessible.

### 4. **Profile Management**
   Providers can view and manage individual patient profiles, which include detailed medical history, contact information, and any other relevant health data. This consolidated view allows healthcare workers to make informed decisions and provide better care.

### 5. **Appointment Scheduling**
   Efficiently manage patient appointments with BlocHealth's integrated scheduling system. This feature enables providers to book, modify, or cancel appointments while sending reminders to patients to minimize no-shows. It simplifies the process of tracking patient visits and planned treatments.

### 6. **Record Sharing**
   BlocHealth allows for secure, blockchain-based sharing of patient records between healthcare providers and patients. With the patient’s consent, records can be shared between hospitals, specialists, or directly with the patient, improving communication and coordination in the delivery of care.

### 7. **Staff Management**
   Administrators can add and manage healthcare staff on the platform. Each staff member is assigned specific access rights based on their role, ensuring proper data governance and access control across the institution.

### 8. **Privacy and Security**
   BlocHealth ensures privacy through its decentralized nature, where patient records are securely stored using advanced encryption and can only be accessed by authorized personnel. Blockchain technology ensures that records are immutable and tamper-proof, significantly improving data security.

<!-- ### 9. **Zero-Knowledge Proofs for Data Privacy**
   To enhance privacy, BlocHealth incorporates zero-knowledge proofs, allowing sensitive patient information to remain confidential while still enabling data verification. This ensures that providers can verify patient identities or medical histories without directly exposing sensitive information. -->

## Technology Stack

- **Blockchain**: Ethereum (or another blockchain) for decentralized storage and management of patient records.
- **Smart Contracts**: Solidity-based contracts to manage hospital records, appointments, and staff roles.
<!-- - **Zero-Knowledge Proofs (zk-SNARKs)**: Used for private verifications, especially in patient authentication and record sharing. -->
- **Frontend**: React.js for a dynamic and responsive user interface.
- **Database**: IPFS and The Graph for decentralized data storage and querying.
- **Smart Contract Interactions**: WAGMI and ethers.js for seamless blockchain interactions.

## Future Roadmap

1. **Mobile Access**:
   Development of a mobile application to allow healthcare providers and patients to access records and manage appointments on the go, enhancing flexibility and accessibility.

2. **Data Analytics**:
   Integration of data analytics tools to help healthcare providers gain insights into patient data, leading to more informed decisions, trends analysis, and better overall patient care.

3. **Patient Portal**:
   A dedicated portal for patients to access their own health records, appointments, prescriptions, and more, giving them more control over their healthcare journey.

4. **Patient Health Reminders**:
   Automating reminders for patients to take medications, attend follow-up appointments, or undergo tests, improving adherence to treatment plans and reducing healthcare lapses.

5. **Multi-Language Support**:
   Making the platform accessible to a wider audience by introducing support for multiple languages, allowing healthcare providers and patients from different regions to use the platform effectively.

6. **Interoperability with Other Healthcare Systems**:
   BlocHealth plans to integrate with existing Electronic Health Record (EHR) systems, allowing healthcare institutions to transition smoothly without disrupting their current workflows.

## Getting Started

### Prerequisites

To set up the project locally, ensure you have the following installed:
- Node.js (version 16+)
- npm or yarn
- Ethereum wallet (MetaMask or similar) for development and testing

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/psalmuel01/blochealth.git
   cd blochealth
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env` file at the root of the project and add the following:

   ```bash
   VITE_ONCHAINKIT_API_KEY=your_onchainkit_api_key
   ```

4. Start the application:

   ```bash
   npm start
   # or
   yarn dev
   ```

5. Compile smart contracts and deploy them to the blockchain (ensure you're connected to an Ethereum test network like baseSepolia):

   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network baseSepolia
   ```

## Contributing

We welcome contributions! If you'd like to help, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

BlocHealth is open-source and licensed under the MIT License.