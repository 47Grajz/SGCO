"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useParams } from 'next/navigation';
import InfoPatientView from '@/src/components/Patients/InfoPatientView';
import { getPatient, deleteCache } from "@/src/services/patients.Service";
import axios from 'axios';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ClinicHistories from "@/src/components/Patients/ClinicHistories";
function Page() {
  const router = useRouter()
  const params = useParams();
  const [user, setUser] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [edit, setEdit] = useState(true);

  const loadImage = async (id) => {
    try {
      const response = await axios.get(`https://adso-shinydesk.onrender.com/api/v1/users/${id}/profile-picture`);
      if (response.status === 200) {
        setImageUrl(response.data.data[0].file_path); // Suponiendo que tienes un estado llamado 'imageUrl' para almacenar la URL de la imagen
      } else {
        console.error('Error al obtener la imagen:', response);
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      try {

        const response = await getPatient(params.id);
        setUser(response);
        if (response)
          loadImage(response.UserId)

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className='mt-2'>


      <div className="w-full items-center flex justify-between px-4 border-b-1 p-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href="/ShinyDesk/patients">Pacientes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Información de
                {user && (user.name || user.last_name || user.second_last_name)
                  ? ` ${user.name} ${user.last_name} ${user.second_last_name}`
                  : " Paciente"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          {edit ? <Button className="bg-principalBlue text-white" auto onClick={() => setEdit(false)}>Editar</Button> :
            <div className="flex gap-2">
              <Button className="bg-principalBlue text-white" auto onClick={() => setEdit(true)}>Guardar</Button>
              <Button className="bg-transparent border-1 border-red-300 text-red-300" auto onClick={() => setEdit(true)}>cancelar</Button>
            </div>}
        </div>
      </div>
      {/* <ClinicHistories></ClinicHistories> */}
      <Tabs defaultValue="PatientInfo" className="w-full mt-6">
        <TabsList className="w-full bg-transparent">
          <TabsTrigger className="w-1/3 hover:text-principalBlue" value="PatientInfo">Informacion del paciente</TabsTrigger>
          <TabsTrigger className="w-1/3 hover:text-principalBlue" value="ClinicHistories">Historias Clinicas</TabsTrigger>
          <TabsTrigger className="w-1/3 hover:text-principalBlue" value="Files">Documentos</TabsTrigger>
        </TabsList>
        <TabsContent value="PatientInfo"><InfoPatientView user={user} edit={edit} imageUrl={imageUrl}></InfoPatientView></TabsContent>
        <TabsContent value="ClinicHistories"><ClinicHistories></ClinicHistories></TabsContent>
        <TabsContent value="Files">.</TabsContent>
      </Tabs>
    </div>
  )
}

export default Page



