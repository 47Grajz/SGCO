"use client";
import React, { useState, useEffect } from "react";
import "@/src/styles/InfoPatient.css";
import SkeletonInfo from "@/src/components/Patients/SkeletonInfo";
import { EnumPatientStatus } from "../enums/PatientEnums";

function InfopatientView({ user, imageUrl,edit }) {


  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    
    age--;
  }

    return age;
  };




  return (
    <div className="w-full h-full">
      <div className="containerPI p-10">
        <div className="contPI">
          <div className="left-infoPI">
            <div className="img-contPI">
              {imageUrl && <img src={imageUrl} alt="Imagen del paciente" className="h-full w-full rounded-full" />}
            </div>
            <p className="m-2"
              size="sm"
              color={user && user.User && user.User.status === EnumPatientStatus.ACTIVE ? 'success' : user && user.User && user.User.status === EnumPatientStatus.UNCOMPLETED ? 'warning' : 'default'}
              classNames="text-white"
            >
              {user && user.User && user.User.status}
            </p>
            <div className="middle-numbersPI">
              <div className="numberPI number-leftPI">
                <p>8</p>
                <p>visitas</p>
              </div>
              <div className="numberPI number-rightPI">
                <p>6</p>
                <p>pendientes</p>
              </div>
            </div>

          </div>

          {user && Object.keys(user).length > 0 ? (
            <>
              <div className="right-infoPI">
                <div className="input-containerPI">
                  <input type="text" id="input" defaultValue={user.name}   readOnly={edit} />
                  <label htmlFor="input" className="label">
                    Nombres
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={`${user.last_name} ${user.second_last_name}`}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Apellidos
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.phone_number}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Teléfono
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.usual_residence}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Direccion
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input type="text" id="input" defaultValue={user.User.email} readOnly={edit} />
                  <label htmlFor="input" className="label">
                    Email
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.usual_residence}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Ciudad
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.identification_card_number}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Documento
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={`${new Date(user.birthday).toLocaleDateString("es-ES")}     (${calculateAge(user.birthday)} años)`}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Fecha de nacimiento
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={`${user.eps}`}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    EPS
                  </label>
                  <div className="underline"></div>
                </div>
              </div>
            </>
          ) : (
            <SkeletonInfo />
          )}
        </div>

        <div className="optionsPI">
          {user && Object.keys(user).length > 0 ? (
            <>
              <div className="right-infoPI">
                <div className="input-containerPI">
                  <input type="text" id="input" defaultValue={user.gender} readOnly={edit} />
                  <label htmlFor="input" className="label">
                    Genero
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={`${user.occupation || "(Pendiente)"}`}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Ocupaccion
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.birth_place}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Ciudad de Nacimiento
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.enrollment_date}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Fecha de registro
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input type="text" id="input" defaultValue={user.responsible_person_name} readOnly={edit} />
                  <label htmlFor="input" className="label">
                    Responsable del paciente
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.responsible_phone_number}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Numero del responsable
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={user.identification_card_number}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Documento
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={`${new Date(user.birthday).toLocaleDateString("es-ES")}     (${calculateAge(user.birthday)} años)`}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Fecha de nacimiento
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-containerPI">
                  <input
                    type="text"
                    id="input"
                    defaultValue={`${user.eps} años)`}
                    readOnly={edit}
                  />
                  <label htmlFor="input" className="label">
                    Fecha de nacimiento
                  </label>
                  <div className="underline"></div>
                </div>
              </div>
            </>
          ) : (
            <SkeletonInfo />
          )}
        </div>
      </div>
    </div>
  );
}

export default InfopatientView;