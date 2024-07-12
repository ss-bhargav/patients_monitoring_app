import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IconType } from "react-icons";
import { BsGenderFemale } from "react-icons/bs";
import { MdOutlineCall, MdOutlineAddIcCall } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PatientType } from "@/app/data/types";
import { myLoader } from "@/app/data/api";

type PatientProfileProps = {
    patientDetails: PatientType;
};

type DetailsBarProps = {
    label: string;
    text: string;
    icon: IconType;
};

const DetailsBar = ({ label, text, icon: Icon }: DetailsBarProps) => {
    return (
        <div className="flex justify-start items-center w-full px-5">
            <div className="font-bold text-xl p-2 rounded-full bg-gray-100">
                <Icon />
            </div>
            <div className="text-xs ">
                <p>{label}</p>
                <p className="font-bold">{text}</p>
            </div>
        </div>
    );
};

const PatientProfile = ({ patientDetails }: PatientProfileProps) => {
    return (
        <div className="col-span-2 row-span-6 bg-white p-1">
            <div className="flex justify-center items-center flex-col gap-3">
                <div className="flex justify-center items-center">
                    <Image
                        loader={() => myLoader(patientDetails.profile_picture!)}
                        alt={patientDetails.name}
                        src={patientDetails.profile_picture}
                        width={100}
                        height={100}
                    />
                </div>
                <div className="text-center">
                    <h2 className="font-bold text-center">{patientDetails.name}</h2>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                    <DetailsBar label="Date of Birth" text={patientDetails.date_of_birth} icon={CiCalendar} />
                    <DetailsBar label="Gender" text={patientDetails.gender} icon={BsGenderFemale} />
                    <DetailsBar label="Contact Info." text={patientDetails.phone_number} icon={MdOutlineCall} />
                    <DetailsBar
                        label="Emergency Contacts"
                        text={patientDetails.emergency_contact}
                        icon={MdOutlineAddIcCall}
                    />
                    <DetailsBar
                        label="Insurance Provider"
                        text={patientDetails.insurance_type}
                        icon={AiOutlineSafetyCertificate}
                    />
                </div>
                <div className="flex justify-center items-center bg-[#01F0D0] rounded-3xl px-5 py-2">
                    <button className="font-bold text-sm">Show All Information</button>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;
