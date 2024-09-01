"use client";
import React from "react";
import "@/src/styles/Odontogram.css";
import Tooth from "./Odontogram/Tooth";
import { useState } from "react";
import Conventions from "@/src/components/Patients/Odontogram/conventions";
import { PiToothLight } from "react-icons/pi";
import { PiToothFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { RiToolsFill } from "react-icons/ri";

function OdontogramaContent() {
  const router = useRouter();
  const [reset, setReset] = useState(false);
  const [toolState, setToolState] = useState("toothFace");
  const resetInputs = () => {
    setReset(true);
  };
  const handleToothData = (toothData) => {
    console.log(toothData);
  };


  const cursorStyle = {
    cursor: toolState === 'toothFace' ? `url(@/assets/ICONS/brushFace.png), auto` : 'default',
  };

  function renderToothComponents(start, end, name) {
    const toothComponents = [];
    for (let i = start; i <= end; i++) {
      toothComponents.push(
        <Tooth
          parentState={toolState}
          key={i}
          id={i}
          Toothname={name}
          reset={reset}
          setReset={setReset}
          sendToothData={handleToothData}
        />
      );
    }
    return toothComponents;
  }
  return (
    <div className="w-full h-screen">
      <div className="flex py-2 items-center justify-between">
        <div></div>
        <div className="flex items-center gap-10 pr-5">
          <p>Aqui irian las convenciones</p>
          <button onClick={resetInputs}>Resetear</button>
        </div>
      </div>
      <div  style={cursorStyle} className="w-full h-screen grid grid-cols-2 grid-rows-2 p-5 border-2 rounded border-slate-200 overflow-x-scroll">
        <div className="flex justify-center pr-20  flex-col  border-r-1 border-b-1 border-inherit">
          <div className="flex gap-10  flex-row-reverse ">
            {renderToothComponents(11, 18, "Palatino")}
          </div>
          <div className="flex gap-10  flex-row-reverse">
            {renderToothComponents(51, 55, "Palatino")}
          </div>
        </div>
        <div className="flex justify-center pl-20  flex-col  border-b-1 border-inherit">
          <div className="flex gap-10   ">
            {renderToothComponents(21, 28, "Palatino")}
          </div>
          <div className="flex gap-10  ">
            {renderToothComponents(61, 65, "Palatino")}
          </div>
        </div>
        <div className="flex justify-center pr-20  flex-col  border-r-1  border-inherit">
          <div className="flex gap-10 flex-row-reverse">
            {renderToothComponents(81, 85, "Lingual")}
          </div>
          <div className="flex gap-10 flex-row-reverse">
            {renderToothComponents(41, 48, "Lingual")}
          </div>
        </div>
        <div className="flex justify-center pl-20  flex-col  border-inherit">
          <div className="flex gap-10  ">
            {renderToothComponents(71, 75, "Lingual")}
          </div>
          <div className="flex gap-10 ">
            {renderToothComponents(31, 38, "Lingual")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OdontogramaContent;
