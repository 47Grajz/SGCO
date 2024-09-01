"use client"

import { ColumnDef } from "@tanstack/react-table"
import { FaHospitalUser } from "react-icons/fa6";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import AlertDialogDemo from "../../AlertDialogDemo"
import React, { useContext } from 'react';
import { FetchDataContext } from "./contex";
import { QuestionMarkCircledIcon , StopwatchIcon ,CheckCircledIcon} from "@radix-ui/react-icons"


const ActionCell = ({ row }) => {
  const fetchData = useContext(FetchDataContext);
  const router = useRouter();
  const user = row.original;

  return (
    <div className="flex gap-2">
      <Button size="sm" variant="outline" className="text-blue-500" onClick={() => router.push(`/ShinyDesk/patients/${user.id}`)}>
        <FaHospitalUser />Ver
      </Button>
      <AlertDialogDemo variant="outline" name={user.name} last_name={user.last_name} userId={user.User.id}></AlertDialogDemo>
    </div>
  );
};



export const columns = [
  {
    accessorKey: "name",
    id: "Nombre",
    header: () => <div className="text-right">Nombre</div>,
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p>{user.name} {user.last_name} {user.second_last_name}</p>
            <p className="text-xs color text-slate-400">{user.User.email}</p>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: "User.status",
    id: "Estado",
    header: () => <div className="text-right">Estado</div>,
    cell: ({ row }) => {
      const user = row.original;
      let statusText;
      let statusIcon;
      let statusColor;
  
      switch(user.User.status) {
        case 'Active':
          statusColor = 'green';
          statusText = 'Activo';
          statusIcon = <CheckCircledIcon name="programed" />;
          break;
        case 'uncompleted':
          statusColor = 'orange';
          statusText = 'Incompleto';
          statusIcon = <StopwatchIcon name="rescheduled" />;
          break;

        default:
          statusColor = 'blue';
          statusText = 'Estado desconocido';
          statusIcon = <QuestionMarkCircledIcon name="unknown" />;
      }
  
      return (
        <div className="flex gap-2 items-center">
          <span >{statusIcon}</span>
          <span className={`text-${statusColor}-500`}>{statusText}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "identification_card_number",
    header: "Documento",
    id: "Documento",
  },
  {
    accessorKey: "phone_number",
    header: "Teléfono",
    id: "Teléfono",
  },
  {
    accessorKey: "eps",
    header: "Eps",
  },
  {
    id: "Dirección",
    accessorKey: "usual_residence",
    header: "Dirección",
  },

  {
    accessorKey: "actions",
    id: "Acciones",
    header: () => <div className="text-right">Acciones</div>,
    cell: ({ row }) => <ActionCell row={row} />,
  },
]
