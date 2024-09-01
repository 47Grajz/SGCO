import React, { useState, useEffect } from 'react';
import { DataTable } from "@/src/components/Patients/PatientsTable/DataTable"
import { getPatients } from "@/src/services/patients.Service"
import { Payment, columns } from "@/src/components/Patients/PatientsTable/Columns"
import { FetchDataContext } from './contex';
import {
  TooltipProvider,
} from "@/components/ui/tooltip"


function  PatientTable() {
  const [data, setData] = useState([]); 
  const [emptyPlaceHolder, SetemptyPlaceHolder] = useState("Paciente no encontrado");
  // Inicializa data como un array vacío



const setPatients = async () => {
    try {
      const response = await getPatients();
      console.log(response)
      setData(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };


  useEffect(() => {
    setPatients();
  }, []); 
  
  return (
    <FetchDataContext.Provider value={setPatients}>
      <TooltipProvider>
    <div className="py-10">
      <DataTable columns={columns} emptyPlaceHolder={emptyPlaceHolder} data={data} />
    </div>
    </TooltipProvider>
    </FetchDataContext.Provider>
  );
}

export default PatientTable;
