import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import { Button } from "../../components/ui/button";
import { RiDeleteBinLine } from "react-icons/ri";
import { useToast } from "@/components/ui/use-toast";
import { getCookie } from "../utils/utils";
import axios from "axios";
import { deleteCacheArray } from "../services/patients.Service";
import React, { useContext, useEffect } from 'react';
import { FetchDataContext } from "./Patients/PatientsTable/contex";

  export default function AlertDialogDemo({name,last_name,userId }) {
    const fetchData = useContext(FetchDataContext);
    const { toast } = useToast();
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline" className="p-2 text-red-500">
          <RiDeleteBinLine></RiDeleteBinLine>Eliminar
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Estas completamente Seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta accion eliminara permanentemente a <b>{name} {last_name}</b>&nbsp;
              de tu base de datos y no podra ser revertida.{userId}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-200" onClick={async ()=>{
              try {
                const token = getCookie("token");
                deleteCacheArray("patients");
                const response = await axios.delete(
                  `https://adso-shinydesk.onrender.com/api/v1/users/${userId}`,
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                console.log(response);
                if (response.status === 200) {
                  toast({
                    description: "Paciente eliminado con exito.",
                  })
                    fetchData();
                } else {
                  toast({
                    variant: "destructive",
                    description: "Algo Salio mal.",
                  })
                }
              } catch (error) {
                console.error("Error:", error);
              }

            }}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  