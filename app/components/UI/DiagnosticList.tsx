import React from "react";

type DiagnosticListType = {
    diagnosticList: {
        name: string;
        description: string;
        status: string;
    }[];
};

const DiagnosticList = ({ diagnosticList }: DiagnosticListType) => {
    return (
        <div className="col-span-4 row-span-3 bg-white overflow-y-auto scrollbar">
            <div className="p-3 ">
                <h2 className="font-bold">Diagnosis List</h2>
            </div>
            <div className="flex justify-between items-center px-5">
                <table className="table-auto text-xs text-left w-full ">
                    <thead className="h-8 bg-gray-100 rounded-3xl">
                        <tr>
                            <th>Diagnosis</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diagnosticList?.map((list, index) => (
                            <tr className="h-11" key={index}>
                                <td>{list.name}</td>
                                <td>{list.description}</td>
                                <td>{list.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DiagnosticList;
