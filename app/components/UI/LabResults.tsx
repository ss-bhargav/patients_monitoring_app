import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const LabResults = ({ reports }: { reports: string[] }) => {
    return (
        <div className="col-span-2 row-span-2 bg-white overflow-auto scrollbar">
            <div className="px-5 py-2">
                <h2 className="font-bold">Lab Results</h2>
            </div>
            <div className="w-full">
                {reports?.map((report, index) => (
                    <div key={index} className="flex justify-between items-center p-2 mx-5">
                        <p className=" text-sm">{report}</p>
                        <MdOutlineFileDownload />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LabResults;
