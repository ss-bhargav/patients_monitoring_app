"use client";

import React, { useCallback, useEffect, useState } from "react";
import DiagnosisHistory from "./UI/DiagnosisHistory";
import DiagnosticList from "./UI/DiagnosticList";
import LabResults from "./UI/LabResults";
import PatientProfile from "./UI/PatientProfile";
import PatientsBar from "./UI/PatientsBar";
import { PatientDetails, PatientInitialValue } from "../data";
import DiagnosisHistory2 from "./UI/DiagnosisHistory2";
import { GetPatientsDetails } from "../data/api";
import { PatientType } from "../data/types";

const MainGrid = () => {
    const [patientData, setPatientData] = useState<PatientType[]>([]);
    const [selectedPatients, setSelectedPatients] = useState<PatientType>(PatientInitialValue);

    useEffect(() => {
        GetPatientsDetails().then((details) => {
            console.log(details);
            setPatientData(details);
            setSelectedPatients(details.length > 0 && details[0]);
        });
    }, []);

    const handlePatientClick = (patient: PatientType) => {
        console.log(patient);
        setSelectedPatients(patient);
    };

    return (
        <div className=" grid grid-cols-8 grid-rows-8 gap-3 h-[85vh] w-full p-2 ">
            <PatientsBar patientData={patientData} onPatientClick={handlePatientClick} />
            {/* <DiagnosisHistory /> */}
            <DiagnosisHistory2 diagnosisHistory={selectedPatients.diagnosis_history } />
            <PatientProfile patientDetails={selectedPatients} />
            <DiagnosticList diagnosticList={selectedPatients.diagnostic_list} />
            <LabResults reports={selectedPatients.lab_results} />
        </div>
    );
};

export default MainGrid;
