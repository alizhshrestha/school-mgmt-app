export interface AddressInfo {
    province: string;
    district: string;
    municipality: string;
    wardNo: number;
}

export interface ParentInfo {
    name: string;
    contactNumber: string;
    address: string;
    email: string;
    occupation: string;
}

export interface GuardianInfo {
    name: string;
    contactNumber: string;
    address: string;
    email: string;
    occupation: string;
    relation: string;
}

export interface Student {
    id: number;
    profileUrl: string;
    fullName: string;
    dob: string;
    contactNumber: string;
    permanentAddress: string;
    gender: 'Male' | 'Female' | 'Other';
    joinedDate: string;
    emisId: string;
    rollNumber: string;
    symbolNumber: string;
    registrationNumber: string;
    feeCategory: string;
    schoolHouse: string;
    email: string;
    temporaryAddress: string;
    bloodGroup: string;
    nationality: string;
    religion: string;
    ethnicGroup: string;
    motherTongue: string;
    familiarWithSmartphone: boolean;
    father: ParentInfo;
    mother: ParentInfo;
    localGuardian: GuardianInfo;
    contactPerson: ParentInfo;
    previousSchoolName: string;
    isSameAddress: boolean;
    permanentAddressInfo: AddressInfo;
    temporaryAddressInfo: AddressInfo;
    shift: string;
    referredBy: string;
    remarks: string;
}

export const students: Student[] = [
    {
        id: 1,
        profileUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
        fullName: 'Ayush Sinha',
        dob: '2010-06-17',
        contactNumber: '08161-10492',
        permanentAddress: 'Kathmandu, Nepal',
        gender: 'Male',
        joinedDate: '2020-04-10',
        emisId: 'EMIS-0001',
        rollNumber: 'ROLL-001',
        symbolNumber: 'SYM-001',
        registrationNumber: 'REG-001',
        feeCategory: 'General',
        schoolHouse: 'Blue',
        email: 'ayush@example.com',
        temporaryAddress: 'Bhaktapur, Nepal',
        bloodGroup: 'A+',
        nationality: 'Nepali',
        religion: 'Hindu',
        ethnicGroup: 'Madhesi',
        motherTongue: 'Nepali',
        familiarWithSmartphone: true,
        father: {
            name: 'Ramesh Sinha',
            contactNumber: '9841000001',
            address: 'Kathmandu, Nepal',
            email: 'ramesh@example.com',
            occupation: 'Engineer',
        },
        mother: {
            name: 'Sita Sinha',
            contactNumber: '9841000002',
            address: 'Kathmandu, Nepal',
            email: 'sita@example.com',
            occupation: 'Teacher',
        },
        localGuardian: {
            name: 'Kiran Sinha',
            contactNumber: '9841000003',
            address: 'Kathmandu, Nepal',
            email: 'kiran@example.com',
            occupation: 'Businessman',
            relation: 'Uncle',
        },
        contactPerson: {
            name: 'Ramesh Sinha',
            contactNumber: '9841000001',
            address: 'Kathmandu, Nepal',
            email: 'ramesh@example.com',
            occupation: 'Engineer',
        },
        previousSchoolName: 'Shree Saraswati School',
        isSameAddress: false,
        permanentAddressInfo: {
            province: 'Bagmati',
            district: 'Kathmandu',
            municipality: 'Kathmandu Metropolitan',
            wardNo: 5,
        },
        temporaryAddressInfo: {
            province: 'Bagmati',
            district: 'Bhaktapur',
            municipality: 'Bhaktapur Municipality',
            wardNo: 2,
        },
        shift: 'Morning',
        referredBy: 'Friend',
        remarks: 'None',
    },
    // 24 more students like above
];