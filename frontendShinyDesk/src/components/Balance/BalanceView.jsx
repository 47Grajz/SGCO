"use client"
import React from "react";
import BalanceTable from "./BalanceTable";
import AdminGraphic from "./AdminGraphic";
import TreatmentTable from "./TreatmentTable";
import InfoGraphic from "./InfoGraphic";
function BalanceView() {
  return (
    <div className="w-full h-auto p-10">
<div className='flex flex-col gap-10 lg:flex-col-reverse xl:flex-row 2xl:flex-row'>
        <div className="w-2/3 h-80 flex flex-col gap-10 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
          <h6>Pagos Recientes</h6>
          <div>
            <BalanceTable></BalanceTable>
          </div>
        </div>
        <div className="w-1/3 border rounded h-80 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
        <InfoGraphic></InfoGraphic>
        </div>
      </div>
      <div className="flex w-full h-auto gap-10 justify-between mt-10 sm:flex-col md:flex-col lg:flex-col-reverse xl:flex-row 2xl:flex-row">
        <div className="w-2/3 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
          <h5>Tratamientos Recientes</h5>
          <TreatmentTable></TreatmentTable>
        </div>
        <div className="w-1/3 flex h-auto gap-5 p-3 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
          <div className="w-1/2 border rounded p-5 flex flex-col justify-between ">
            <h5 className="text-xl">Pacientes Totales</h5>
            <p className="text-4xl">72</p>
            <p>Este mes</p>
          </div>

          <div className="w-1/2 border rounded p-5 flex flex-col justify-between">
            <h5 className="text-xl">Ganancia Total</h5>
            <p className="text-4xl">3000000</p>
            <p>Generada Este mes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceView;
