"use client"
import React from 'react'
import settings from "@/src/styles/settings.css"
import { useState } from 'react'
import { Button } from '@/components/ui/button'

function SettingsView() {
    const [disable, setDisable] = useState(true);
  return (
    <div className="contSE">
    <div className="section">
            <h5>Calendario</h5>
            <div className="setting">
                <p>Hora Inicio</p>
                <input type="time" className='timeInput' />
                <div className="buttonsSE">
                </div>
            </div>
            <div className="setting">
                <p>Hora Fin</p>
                <input type="time" className='timeInput' />
                <div className="buttonsSE">
                </div>
            </div>
            <div className="setting">
                <p>Hora Fin Semana</p>
                <input type="time" className='timeInput' />
                <div className="buttonsSE">

                </div>
            </div>
    </div>

    <div className="section">
        <h5>Citas</h5>
        <div className="setting">
            <p>Notificaciones</p>
            <p className="bolder">Enviar recordatorio al correo</p>
            <div className="buttons">
                <label className="switch">
                    <input isDisabled={disable} type="checkbox"/>
                    <span className="slider"></span>
                  </label>
            </div>
        </div>

        <div className="setting">
            <p></p>
            <p className="bolder">Notificar si una cita fue agendada</p>
            <div className="buttonsSE">
                <label className="switch">
                    <input isDisabled={disable} type="checkbox"/>
                    <span className="slider"></span>
                  </label>
            </div>
        </div>
</div>

<div className="section">
    <h5>Tratamientos</h5>
    <div className="setting">
        <p>Gestionar tratamientos</p>
        <p className="bolder">Añadir y/o eliminar tratamientos</p>
        <div className="buttonsSE">
        </div>
    </div>
</div>


<div className="section">
<h5>Documentos</h5>
<div className="setting">
    <p>Consentimientos Informados   </p>
    <p className="bolder">Añadir y/o eliminar consentimientos</p>
    <div className="buttonsSE">
        <Button isDisabled={disable} className="buttonSE purple">Editar</Button>
        <Button isDisabled={disable} className="buttonSE gray">Ver</Button>
    </div>
</div>

<div className="setting">
    <p>Formato historias clinicas   </p>
    <p className="bolder">Añadir y/o eliminar historia</p>
    <div className="buttonsSE">
        <Button isDisabled={disable} className="buttonSE purple">Editar</Button>
        <Button isDisabled={disable} className="buttonSE gray">Ver</Button>
    </div>
</div>
</div>
</div>
  )
}

export default SettingsView