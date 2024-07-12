"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { ChartData } from "@/app/data";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import { DiagnosisHistoryType, GraphData } from "@/app/data/types";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type DiagnosisHistoryProps = {
    diagnosisHistory: DiagnosisHistoryType[];
};

type SideComponentProps = {
    label: "Systolic" | "Diagnostic";
    value: number;
    levels: string;
    color: "pink" | "purple";
};
type BottomComponent = {
    imgSrc: string;
    label: "Respiratory Rate" | "Temperature" | "Heart Rate";
    value: string;
    levels: string;
    color: "pink" | "blue" | "red";
};
const SideComponent = ({ label, value, levels, color }: SideComponentProps) => {
    return (
        <div className="w-full flex justify-start items-start flex-col ">
            <div className="flex justify-center items-center">
                <div className={`w-3 h-3 rounded-full ${color === "purple" ? "bg-purple-500" : "bg-pink-400"}`}></div>
                <p className="px-1 text-sm font-bold">{label}</p>
            </div>
            <p className="font-bold text-xl py-2">{value}</p>
            <div className="flex justify-start items-start">
                <IoMdArrowDropup className="" />
                <p className="text-xs">{levels}</p>
            </div>
        </div>
    );
};

const BottomComponent = ({ imgSrc, label, value, levels, color }: BottomComponent) => {
    return (
        <div className={`col-span-1 row-span-2 w-52 h-52 bg-${color}-100 p-5 rounded-xl`}>
            <div className="">
                <Image width={80} height={80} alt="Respiratory Rate" src={imgSrc} />
            </div>
            <p className="text-sm pt-2">{label}</p>
            <p className="font-bold text-xl">{value}</p>
            <p className="text-xs py-2">{levels}</p>
        </div>
    );
};

const DiagnosisHistory2 = ({ diagnosisHistory }: DiagnosisHistoryProps) => {
    const [selectedMonths, setSelectedMonths] = useState<Number>();
    const [data, setData] = useState<GraphData>({
        labels: [],
        datasets: [
            {
                label: "systolic",
                data: [],
                borderColor: "#f472b6 ",
            },
            {
                label: "diastolic",
                data: [],
                borderColor: "#a855f7 ",
            },
        ],
    });

    const options = {};
    let temData: GraphData = {
        labels: [],
        datasets: [
            {
                label: "systolic",
                data: [],
                borderColor: "#f472b6 ",
            },
            {
                label: "diastolic",
                data: [],
                borderColor: "#a855f7 ",
            },
        ],
    };

    const monthsHandler = (months: number) => {
        diagnosisHistory.map((history) => {
            if (months !== 0 && temData.labels.length < months) {
                temData.labels.unshift(`${history.month}, ${history.year}`);
                temData.datasets[0].data.unshift(history.blood_pressure.systolic.value);
                temData.datasets[1].data.unshift(history.blood_pressure.diastolic.value);
            } else if (months === 0) {
                temData.labels.unshift(`${history.month}, ${history.year}`);
                temData.datasets[0].data.unshift(history.blood_pressure.systolic.value);
                temData.datasets[1].data.unshift(history.blood_pressure.diastolic.value);
            }
        });
        setData(temData);
    };

    useEffect(() => {
        diagnosisHistory.map((history) => {
            temData.labels.unshift(`${history.month}, ${history.year}`);
            temData.datasets[0].data.unshift(history.blood_pressure.systolic.value);
            temData.datasets[1].data.unshift(history.blood_pressure.diastolic.value);
        });
        setData(temData);
        setSelectedMonths(temData.labels.length);
    }, [diagnosisHistory]);

    return (
        <div className="col-span-4 row-span-5 bg-white overflow-scroll scrollbar">
            <div className="px-5 py-2">
                <h2 className="font-bold">Diagnosis Histroy</h2>
            </div>
            <div className="grid grid-cols-3 grid-rows-5 gap-5 m-3">
                <div className="col-span-3 row-span-3 flex justify-center items-center bg-purple-100 rounded-xl py-2 px-1 mx-2">
                    <div className="h-full w-3/4 bg-[#F4F0FE ]">
                        <div className="flex justify-between items-center">
                            <p className="font-bold p-3">Blood Pressure</p>
                            <select
                                onChange={(event) => monthsHandler(Number(event.target.value))}
                                className="bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 active:border-transparent"
                            >
                                <option selected value={0}>
                                    All
                                </option>
                                <option selected value={6}>
                                    Last 6 Months
                                </option>
                                <option value={5}>Last 5 Months</option>
                                <option value={4}>Last 4 Months</option>
                                <option value={3}>Last 3 Months</option>
                                <option value={2}>Last 2 Months</option>
                            </select>
                        </div>
                        <Line options={options} data={data} />
                    </div>
                    <div className=" flex justify-center items-center gap-8 flex-col">
                        <SideComponent
                            label="Systolic"
                            value={diagnosisHistory[0]?.blood_pressure?.systolic?.value || 0}
                            levels={diagnosisHistory[0]?.blood_pressure?.systolic?.levels || "No Data"}
                            color="pink"
                        />
                        <SideComponent
                            label="Diagnostic"
                            value={diagnosisHistory[0]?.blood_pressure?.diastolic?.value || 0}
                            levels={diagnosisHistory[0]?.blood_pressure?.diastolic?.levels || "No Data"}
                            color="purple"
                        />
                    </div>
                </div>
                <BottomComponent
                    imgSrc="/respiratory_rate.svg"
                    label="Respiratory Rate"
                    value={`${diagnosisHistory[0]?.respiratory_rate?.value || 0} bpm`}
                    levels={`${diagnosisHistory[0]?.respiratory_rate?.levels || "No Data"}`}
                    color="blue"
                />
                <BottomComponent
                    imgSrc="/temperature.svg"
                    label="Temperature"
                    value={`${diagnosisHistory[0]?.temperature?.value || 0} °F`}
                    levels={`${diagnosisHistory[0]?.temperature?.levels || "No Data"}`}
                    color="red"
                />
                <BottomComponent
                    imgSrc="/heart_bpm.svg"
                    label="Heart Rate"
                    value={`${diagnosisHistory[0]?.heart_rate?.value || 0} bpm`}
                    levels={`${diagnosisHistory[0]?.heart_rate?.levels || "No Data"}`}
                    color="pink"
                />
            </div>
        </div>
    );
};

export default DiagnosisHistory2;

{
    /* <div className=" flex justify-start items-start flex-col ">
<div className="flex justify-center items-center">
    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
    <p className="px-1 text-sm font-bold">Systolic</p>
</div>
<p className="font-bold text-xl py-2">
    {diagnosisHistory[0]?.blood_pressure?.systolic?.value || 0}
</p>
<div className="flex">
    <IoMdArrowDropup className="" />
    <p className="text-xs">
        {diagnosisHistory[0]?.blood_pressure?.systolic?.levels || "No Data"}
    </p>
</div>
</div>
<div className=" flex justify-start items-start flex-col">
<div className="flex justify-center items-center">
    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
    <p className="px-1 text-sm font-bold">Diastolic</p>
</div>
<p className="font-bold text-xl py-2">
    {diagnosisHistory[0]?.blood_pressure?.diastolic?.value || 0}
</p>
<div className="flex">
    <IoMdArrowDropdown className="" />
    <p className="text-xs">
        {diagnosisHistory[0]?.blood_pressure?.diastolic?.levels || "No Data"}
    </p>
</div>
</div> */
}
