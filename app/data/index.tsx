export const PatientsList = [
    {
        id: 1,
        name: "Rayn Johnson",
        age: 45,
        gender: "Male",
        pic: "/patient_1.png",
    },
    {
        id: 2,
        name: "Jessica Taylor",
        age: 28,
        gender: "Female",
        pic: "/patient_2.png",
    },
    {
        id: 3,
        name: "Brandon Mitchell",
        age: 36,
        gender: "Male",
        pic: "/patient_3.png",
    },
    {
        id: 4,
        name: "Kevin Anderson",
        age: 30,
        gender: "Male",
        pic: "/patient_4.png",
    },
    {
        id: 5,
        name: "Dylan Thompson",
        age: 36,
        gender: "Male",
        pic: "/patient_5.png",
    },
    {
        id: 6,
        name: "Samantha Johnson",
        age: 56,
        gender: "Female",
        pic: "/patient_6.png",
    },
    {
        id: 7,
        name: "Nathan Evans",
        age: 58,
        gender: "Male",
        pic: "/patient_7.png",
    },
    {
        id: 8,
        name: "Emily Williams",
        age: 18,
        gender: "Female",
        pic: "/patient_8.png",
    },
    {
        id: 9,
        name: "Tyler Davis",
        age: 19,
        gender: "Male",
        pic: "/patient_9.png",
    },
    {
        id: 10,
        name: "Olivia Brown",
        age: 32,
        gender: "Female",
        pic: "/patient_10.png",
    },
    {
        id: 11,
        name: "Tyler Davis",
        age: 19,
        gender: "Male",
        pic: "/patient_9.png",
    },
    {
        id: 12,
        name: "Ashley Martinez",
        age: 54,
        gender: "Female",
        pic: "/patient_12.png",
    },
];

export const PatientDetails = [
    {
        name: "Jessica Taylor",
        gender: "Female",
        age: 28,
        profile_picture: "https://fedskillstest.ct.digital/4.png",
        date_of_birth: "1996-08-23",
        phone_number: "(415) 555-1234",
        emergency_contact: "(415) 555-5678",
        insurance_type: "Sunrise Health Assurance",
        diagnosis_history: [
            {
                month: "March",
                year: 2024,
                blood_pressure: {
                    systolic: {
                        value: 160,
                        levels: "Higher than Average",
                    },
                    diastolic: {
                        value: 78,
                        levels: "Lower than Average",
                    },
                },
                heart_rate: {
                    value: 78,
                    levels: "Lower than Average",
                },
                respiratory_rate: {
                    value: 20,
                    levels: "Normal",
                },
                temperature: {
                    value: 98.6,
                    levels: "Normal",
                },
            },
            // Additional months of diagnostic history
        ],
        diagnostic_list: [
            {
                name: "Hypertension",
                description: "Chronic high blood pressure",
                status: "Under Observation",
            },
            {
                name: "Type 2 Diabetes",
                description: "Insulin resistance and elevated blood sugar",
                status: "Cured",
            },
            {
                name: "Asthma",
                description: "Recurrent episodes of bronchial constriction",
                status: "Inactive",
            },
            {
                name: "Osteoarthritis",
                description: "Degenerative joint disease",
                status: "Untreated",
            },
            // Additional diagnostics
        ],
        lab_results: [
            "Blood Tests",
            "CT Scans",
            "Radiology Reports",
            "X-Rays",
            "Urine Test",
            // More lab results
        ],
    },
];

export const ChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
        {
            label: "Steps",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "#f472b6 ",
        },
        {
            label: "up Steps",
            data: [2000, 3000, 5000, 8000, 9000, 6500, 8000],
            borderColor: "#a855f7 ",
        },
    ],
};

export const PatientInitialValue = {
    name: "",
    gender: "",
    age: 0,
    profile_picture: "",
    date_of_birth: "",
    phone_number: "",
    emergency_contact: "",
    insurance_type: "",
    diagnosis_history: [
        {
            month: "",
            year: 0,
            blood_pressure: {
                systolic: {
                    value: 0,
                    levels: "",
                },
                diastolic: {
                    value: 0,
                    levels: "",
                },
            },
            heart_rate: {
                value: 0,
                levels: "",
            },
            respiratory_rate: {
                value: 0,
                levels: "",
            },
            temperature: {
                value: 0,
                levels: "",
            },
        },
    ],
    diagnostic_list: [
        {
            name: "",
            description: "",
            status: "",
        },
    ],
    lab_results: [],
};
