import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const headingLinks = [
    {
        title: "Overview",
        icons: <IoHomeOutline />,
        link: "/",
    },
    {
        title: "Patients",
        icons: <MdOutlinePeopleAlt />,
        link: "/",
    },
    {
        title: "Schedule",
        icons: <CiCalendar />,
        link: "/",
    },
    {
        title: "Message",
        icons: <FiMessageSquare />,
        link: "/",
    },
    {
        title: "Transactions",
        icons: <MdCreditCard />,
        link: "/",
    },
];

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full h-16 bg-white px-5 rounded-[70px]">
            <div className="">
                <Image src={"/TestLogo.svg"} alt="" width="200" height="50" />
            </div>
            <div className="flex justify-center items-center">
                {headingLinks.map((link, index) => {
                    return (
                        <div key={link.title} className={`flex gap-2 leading-4 mx-5 ${index === 1 && "bg-[#01F0D0] block p-5 rounded-[45px]"}`}>
                            {link.icons}
                            <p>{link.title}</p>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center items-center">
                <div className="px-2">
                    <Image src={"/headerDoctor.png"} alt="" width="44" height="44" />
                </div>
                <div className="">
                    <p className="text-xs font-bold">Dr. Jose Simmons</p>
                    <p className="text-xs">General Practitioner</p>
                </div>
                <div className="flex justify-center items-center px-2 ">
                    <button className="h-8 w-4"><IoSettingsOutline/></button>
                    <button><HiDotsVertical /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;
