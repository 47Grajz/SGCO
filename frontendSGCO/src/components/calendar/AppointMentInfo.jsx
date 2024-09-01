import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useState, useEffect } from 'react';
import {Button } from "@/components/ui/button";
import { GiDuration } from "react-icons/gi";
import { LuClock7 } from "react-icons/lu";
import { BiAdjust } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import InnasistanceCancel from "./InnasistanceCancel";
import { getAppointment, getUserAppointments } from "@/src/services/appointment.Service";
import Reprogram from "./Reprogram";
function AppointMentInfo({ appointmentinfo, events }) {

    const [data, setData] = useState([]);
    const [userAppointments, setUserAppointments] = useState([]);
    const [disabled, isDisabled] = useState(false);




    useEffect(() => {
        const fetchUserAppointments = async () => {
            const appointments = await getUserAppointments(appointmentinfo.event.extendedProps.patientId);
            setUserAppointments(appointments);
        };
        fetchUserAppointments();
    }, [appointmentinfo.event.id]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAppointment(appointmentinfo.event.id);
            if (data) {
                setData(data);
                if (data.data.status === "Cancelada") {
                    isDisabled(true);
                }
            }
        };

        fetchData();
    }, [appointmentinfo.event.id]);

    const getBorderColor = (status) => {
        switch (status) {
            case 'Programada':
                return 'border-green-700';
            case 'Cancelada':
                return 'border-red-700';
            case 'Reprogramada':
                return 'border-orange-500';
            default:
                return 'border-gray-700';
        }
    }
    return (
        <Sheet>
            <SheetTrigger><p className="hover:text-blue-600">Información</p></SheetTrigger>
            <SheetContent className="min-w-[30%] max-w-[100%] w-[100%]">
                <SheetHeader>
                    <SheetTitle>Información de la cita</SheetTitle>
                    <SheetDescription>
                        <div className="flex flex-wrap justify-center gap-8 mt-5 items-cente max-xl:flex-col">
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                                <div>
                                    <p>{appointmentinfo.event.extendedProps.name} {appointmentinfo.event.extendedProps.last_name}</p>
                                    <p className="text-xs color text-slate-400">{appointmentinfo.event.extendedProps.document}</p>
                                </div>
                            </div>

                            {!disabled && (
                                <div className="flex gap-4 justify-center">
                                    <Button isDisabled={disabled} className="bg-white p-2 rounded border-1 text-green-500 border-green-500">Comenzar</Button>
                                    <Reprogram appointmentId={appointmentinfo.event.id} timeText={appointmentinfo.timeText} appointmentinfo={data.data} events={events}></Reprogram>
                                    <InnasistanceCancel disabled={disabled} appointmentId={appointmentinfo.event.id} events={events}></InnasistanceCancel>
                                </div>
                            )}
                        </div>
                        <Tabs defaultValue="account" className="w-full h-full mt-16">
                            <TabsList className="w-full">
                                <TabsTrigger className="w-full" value="account">Información cita</TabsTrigger>
                                <TabsTrigger className="w-full" value="password">Historial de visitas</TabsTrigger>
                            </TabsList>
                            <TabsContent className=" mt-5 p-1" value="account">
                                {data && data.data && data.data.Consultation_Type ? (
                                    <div>
                                        <h5 className="text-2xl text-principalBlue mb-5">{appointmentinfo.event.title}</h5>
                                        <div className="flex text-xl gap-2 flex-col">
                                            <p className="flex items-center gap-2"><LuClock7 /> <b>Hora</b>: {appointmentinfo.timeText}</p>
                                            <p className="flex items-center gap-2"><GiDuration /> <b>Duracion</b>: {data.data.Consultation_Type.duration}</p>
                                            <p className="flex items-center gap-2"><FaHandHoldingHeart /> <b>Tratamiento</b>: {data.data.Consultation_Type.name}</p>
                                            <p className="flex items-center gap-2"><BiAdjust /> <b>Estado:</b> {data.data.status}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div>Loading...</div>
                                )}
                            </TabsContent>
                            <TabsContent className="h-full h-{500px}" value="password">
                                <div className="flex h-full flex-col sm:py-4 ">
                                    <ul className="list-none overflow-scroll w-full p-2 h-full">

                                        {userAppointments.map((appointment) => (
                                            <li className="rounded-lg group cursor-pointer" key={appointment.id}>
                                                <div className="flex flex-row pr-2">
                                                    <div className="items-center flex flex-col justify-around">
                                                        <div className="border-l-2 h-full border-gray-400"></div>
                                                        <div className="bg-principalBlue rounded-full h-[62px] w-[25px] flex flex-grow justify-around">
                                                        </div>
                                                        <div className="border-l-2 h-full border-gray-400"></div>
                                                    </div>
                                                    <div className="flex w-full flex-col transition-all duration-100 ease-in-out group-hover:bg-slate-200 ml-4 p-2 pr-6 rounded-xl">
                                                        <div className="ml-4 text-xl font-medium">{appointment.notes}</div>
                                                        <div className="ml-4 mb-2 text-xs">{appointment.appointment_date_hour}</div>
                                                        <div className="ml-4 text-sm">{appointment.Consultation_Type.name}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}


                                    </ul>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default AppointMentInfo



