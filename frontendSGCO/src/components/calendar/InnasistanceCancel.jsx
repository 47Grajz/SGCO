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
  import { Button } from "@/components/ui/button";
  import { useToast } from "@/components/ui/use-toast"; 
  import { CancelAppointment } from "@/src/services/appointment.Service";
import axios from "axios";
import { useEffect,useState } from "react";
export default function InnasistanceCancel({events,appointmentId,usersGet,disabled }) {
const { toast } = useToast();
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button className="bg-white p-2 rounded border-1 text-red-500 border-red-500">
          Cancelar
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancelación de Cita {appointmentId}</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de que deseas cancelar esta cita?
              <br></br>
             <b> Se le notificara al paciente que su cita fue cancelada</b>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Volver</AlertDialogCancel>
            <AlertDialogAction className="bg-red-400" onClick={async ()=>{
              try {
                const response = await CancelAppointment(appointmentId);
                if (response.status === 200) {
                  toast({
                    description: "La Cita fue Cancelada.",
                  })
                  events(true);
                } else {
                  toast({
                    variant: "destructive", 
                    description: "Algo Salio mal.",
                  })
                }
              } catch (error) {
                console.error("Error:", error);
              }

            }}>Aceptar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  