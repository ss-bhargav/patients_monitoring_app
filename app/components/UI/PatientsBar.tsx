import { PatientsList } from "@/app/data";
import { myLoader } from "@/app/data/api";
import { PatientType } from "@/app/data/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

interface ChildProps {
    patientData: PatientType[];
    onPatientClick: (patient: PatientType) => void;
}

const PatientsBar = ({ patientData, onPatientClick }: ChildProps) => {
    const [active, setActive] = useState<PatientType | null>();

    const handlePatientClick = (patient: PatientType) => {
        setActive(patient);
        onPatientClick(patient);
    };

    useEffect(() => {
        setActive(patientData[0]);
    }, [patientData]);

    return (
        <div className="col-span-2 row-span-8 bg-white p-3  rounded-xl overflow-y-auto scrollbar">
            <div className="flex justify-between items-center h-8 mx-6">
                <h2 className="font-bold text-xl ">Patients</h2>
                <button className="font-bold text-2xl">
                    <FaSearch />
                </button>
            </div>
            <div className="flex flex-col  justify-center items-center mx-2">
                {patientData.map((patient, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex justify-between items-center w-full p-3 ${
                                active?.name === patient.name &&
                                active?.date_of_birth === patient.date_of_birth &&
                                "bg-[#D8FCF7]"
                            }`}
                        >
                            <button onClick={() => handlePatientClick(patient)}>
                                <div className="flex justify-center items-center">
                                    {patient.profile_picture && (
                                        <Image
                                            loader={() => myLoader(patient.profile_picture!)}
                                            alt={patient.name!}
                                            src={patient.profile_picture}
                                            height={50}
                                            width={50}
                                        />
                                    )}

                                    <div className="px-4 text-left">
                                        <p className="font-bold text-sm">{patient.name}</p>
                                        <p className="font-light text-sm">
                                            {patient.gender},<span>{patient.age}</span>
                                        </p>
                                    </div>
                                </div>
                            </button>
                            <div>
                                <button>
                                    <HiDotsVertical />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PatientsBar;
