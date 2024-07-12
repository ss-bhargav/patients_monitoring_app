"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const DiagnosisHistory = () => {
    return (
        <div className="col-span-4 row-span-5 bg-white">
            <div className="px-5 py-2">
                <h2 className="font-bold">Diagnosis Histroy</h2>
            </div>
            <div className="w-full h-full bg-[#F4F0FE ]">
                <div className="w-full h-full bg-[#F4F0FE ]">
                    <ResponsiveContainer width="80%" height="60%">
                        <LineChart
                            width={300}
                            height={150}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="">
                    <div>
                        <p>Systolic</p>
                    </div>
                    <div>
                        <p>160</p>
                    </div>
                    <div>
                        <p>Higher than Average</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiagnosisHistory;

// export default class DiagnosisHistory extends PureComponent {
//     render() {
//         return (
//             <div className="col-span-4 row-span-5 bg-white">
//                 <div className="px-5 py-2">
//                     <h2 className="font-bold">Diagnosis Histroy</h2>
//                 </div>
//                 <div>
//                     <ResponsiveContainer width="100%" height="100%">
//                         <LineChart
//                             width={500}
//                             height={300}
//                             data={data}
//                             margin={{
//                                 top: 5,
//                                 right: 30,
//                                 left: 20,
//                                 bottom: 5,
//                             }}
//                         >
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Legend />
//                             <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                             <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                         </LineChart>
//                     </ResponsiveContainer>
//                 </div>
//             </div>
//         );
//     }
// }
