"use client";
import React from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Odontograma from './Odontograma';
import { getCookie } from '../../utils/utils';
import { useCallback } from 'react';
import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import axios from 'axios';
import "@/src/styles/ClinicHistory.css"
function ClinicHistoryContent() {


    const pathnamet = usePathname()
    const splitedId = pathnamet.split("/")[3];
    const [user, setUser] = useState([]);
    const getUsers = useCallback(async () => {
        try {
            const token = getCookie("token");
            const response = await axios.get(
                `https://adso-shinydesk.onrender.com/api/v1/patients/${splitedId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const usersFetched = await response.data.data;
            setUser(usersFetched);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }, []);

    React.useEffect(() => {
        getUsers();
    }, [getUsers]);

    const router = useRouter()
    return (
        <div>
            <div className='w-full border-b-1 flex items-center justify-between'>

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link href="/components">Components</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className='flex items-center gap-10 pr-5'>
                    <button></button>
                    <Odontograma userId={splitedId}></Odontograma>
                    <button>Nueva Historia</button>
                    <button>Historias Clinicas</button>

                </div>
            </div>
            <div className='w-full h-screen flex justify-center'>
                <div className="containerCH">

                    <div className="firs-info">
                        <h4>ANAMNESIS</h4>
                        <div className="firs-info_div">
                            <div className="input-group">
                                <label className="label">Motivo de consulta</label>
                                <input autocomplete="off" name="Email" id="Email" className="input" type="text" />
                                <div></div></div>

                            <div className="input-group">
                                <label className="label">Ultima visita al odontologo</label>
                                <input autocomplete="off" name="Email" id="Email" className="input" type="date" />
                                <div></div></div>
                        </div>
                    </div>


                    <div className="radio_buttons">
                        <h3>Antecedentes personales</h3>
                        <div className="radio-buttons_div">
                            <div className="buttons_rightCH">


                                <div className="button-radio">
                                    <p></p>
                                    <div className="radios">
                                        <p>Si</p>
                                        <p>No</p>
                                    </div>

                                </div>

                                <div className="button-radio">
                                    <p>1.Tratamiento Medico</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>2.Ingestion de medicamentos</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>3.Reacciones alergicas</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>4.Hemorragias</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>5.Arradiaciones</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>6.Hipertension Arterial</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>7.Sinusitis</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>8.Enfermedades respiratorias</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="buttons_rightCH">


                                <div className="button-radio">
                                    <p></p>
                                    <div className="radios">
                                        <p>Si</p>
                                        <p>No</p>
                                    </div>

                                </div>

                                <div className="button-radio">
                                    <p>9.Cardiopatias</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>10. Diabetes</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>11.Fiebre Reumatica</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>12.Hepatitis</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>13.Otras Enfermedades</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className="button-radio">
                                    <p>14.Otras enfermedades</p>
                                    <div className="radios">
                                        <div className="selects">
                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>

                                            <label className="cyberpunk-checkbox-label">
                                                <input type="checkbox" className="cyberpunk-checkbox" />
                                            </label>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <p>Antecedentes familiares</p>
                        <textarea className="area-section" name="Antecedentes" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="section">
                        <p>Observaciones</p>
                        <textarea className="area-section" name="Antecedentes" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="section">
                        <p>Observaciones</p>
                        <div className="area-info">

                            <div className="section-info">
                                <h2>1. Exploracion por cuadrantes</h2>
                                <p><span>Codigo 4</span> Produndidad de sondaje igual o mayor a 6mm Con hemorragia y/o exudado corpulento</p>
                                <p><span>Codigo 3,4 o 5m.m</span>  bolsa patogia y/o exudado purulento en molar o no molar</p>
                                <p><span>Codigo 2</span> Calculo supra o subgingival, empates desbordanes o coronas con defecos de imagen</p>
                                <p><span>Codigo 1</span>Sangrado y/o exudado purulanto tras un sondaje correcto</p>
                                <p><span>Codigo 0</span>Tejidos periodontales sanos</p>
                            </div>

                            <div className="section-info_2">

                                <h2>2. Encias</h2>
                                <div className="input_2">
                                    <label htmlFor="">1.Color</label><input className="input-2_item" type="text" />
                                </div>
                                <div className="input_2">
                                    <label htmlFor="">2.Aspecto</label><input className="input-2_item" type="text" />
                                </div>
                                <div className="input_2">
                                    <label htmlFor="">1.Consistencia</label><input className="input-2_item" type="text" />
                                </div>

                                <div className="input_2">
                                    <label htmlFor="">1.Otros</label><input className="input-2_item" type="text" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicHistoryContent