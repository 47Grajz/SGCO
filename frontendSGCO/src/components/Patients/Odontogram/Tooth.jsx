import React, { useState, useEffect } from "react";
import imagen from "@/assets/signoigual.png";
import { conventions } from "@/src/utils/data";
import Image from "next/image";
function Tooth({ id, reset, setReset, sendToothData, Toothname,parentState }) {
  const [selectedButtonName, setSelectedButtonName] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [masksrc, setMasksrc] = useState(imagen);
  const initialState = [
    {
      toothID: `${id}`,
      id: 1,
      color: "initial",
      name: "Vestibular",
      className: "circle-button",
      value: "",
    },
    {
      toothID: `${id}`,
      id: 2,
      color: "initial",
      name: "Mesial",
      className: "circle-button",
      value: "",
    },
    {
      toothID: `${id}`,
      id: 3,
      color: "initial",
      name: `${Toothname}`,
      className: "circle-button",
      value: "",
    },
    {
      toothID: `${id}`,
      id: 4,
      color: "initial",
      name: "Distal",
      className: "circle-button",
      value: "",
    },
    {
      toothID: `${id}`,
      id: 5,
      color: "initial",
      name: "Oclusal",
      className: "quarter-circle-button center",
      value: "",
    },
  ];

  useEffect(() => {
    if (id) {
      setButtons(initialState);
    }
  }, [id]);

  useEffect(() => {
    if (reset) {
      setButtons(initialState);
      setReset(false);
    }
  }, [initialState]);

  useEffect(() => {
    sendToothData(buttons);
  }, [sendToothData, buttons]);
  const resetCompleteTooth = () => {
    setButtons(
      buttons.map((button) => ({
        ...button,
        color: "initial",
        value: "",
      }))
    );
    onOpenChange(false);
  };

  const paintAll = (color) => {
    setButtons((prevButtons) => {
      return prevButtons.map((button) => {
        return { ...button, color: color };
      });
    });
    onOpenChange(false);
  };

  const resetColor = () => {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[selectedButtonIndex].color = "initial";
      return newButtons;
    });
    onOpenChange(false);
  };

  const selectColor = (color, value) => {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[selectedButtonIndex].color = color;
      newButtons[selectedButtonIndex].value = value;
      return newButtons;
    });
    onOpenChange(false);
  };

  return (
    <>
     {/* <div className="parent">
   
    <di className="parent-image_cont">
    <Image
            src={masksrc}
            alt="mask"
            width={50}
            height={50} 
            className="mask"
          /> 
    </di>

     <div id={id} className="tooth-cont">
        <p className="index">{id}</p>
        <div className="tooth"> 
          {buttons.map((button, index) => (
            <input
              key={button.id}
              style={
                button.color === "initial"
                  ? { backgroundColor: "white" }
                  : { backgroundColor: button.color }
              }
              className={`${button.className}`}
              onClick={() => {
                setSelectedButtonIndex(index);
                setSelectedButtonName(button.name);
                onOpen();
              }}
            ></input>
          ))}
        </div>
      </div>
     </div>
      <ModalModal
        isOpen={isOpen}
        backdrop="transparent"
        placement="bottom-center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedButtonName} {id}
              </ModalHeader>
              <ModalBody>
          
                        <div>
                          {parentState === "toothFace" ? (
                            <div className="flex flex-col gap-2">
                              {conventions.map((convention) => (
                                <button
                                  key={convention.id}
                                  className="flex gap-2 items-center border-1 rounded-md p-2"
                                  onClick={() =>
                                    selectColor(
                                      `${convention.color}`,
                                      `${convention.value}`
                                    )
                                  }
                                >
                                  <Chip
                                    style={
                                      convention.color === "initial"
                                        ? { backgroundColor: "white" }
                                        : { backgroundColor: convention.color }
                                    }
                                  ></Chip>{" "}
                                  <p>{convention.label}</p>
                                </button>
                              ))}
                              <button
                                className="flex gap-2 text-center items-center border-1 rounded-md p-2"
                                onClick={resetColor}
                              >
                                Valor Inicial
                              </button>
                            </div>
                          ) : (
                            <div>
                              {" "}
                              <div className="flex flex-col gap-2">
                                <Button onClick={() => paintAll("red")}>
                                  Fisurado
                                </Button>
                                <Button onClick={() => paintAll("gray")}>
                                  No existe
                                </Button>
                                <Button onClick={() => paintAll("yellow")}>
                                  Caries
                                </Button>
                                <Button onClick={resetCompleteTooth}>
                                  Valor inicial
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
}

export default Tooth;
