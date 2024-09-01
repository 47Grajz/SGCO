
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import axios from "axios"
import { useEffect, useState } from "react"
import { getCookie } from "../../utils/utils"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useCurrentDate } from "@/src/hooks/hooks";
import { getPatients } from "@/src/services/patients.Service";
import { Avaliableappointments,createAppointment } from "@/src/services/appointment.Service";



function CalendarAdd({ events }) {
  const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(true)
  const [treatments, setTreatments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, SetAppointments] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [procedure, setProcedure] = useState(null);
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [consultationType, setConsultationType] = useState(null);
  const [open3, setOpen3] = useState(false)
  const date = useCurrentDate();



  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await getPatients();
      setPatients(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };




  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const token = getCookie("token")
        const response = await axios.get(`https://adso-shinydesk.onrender.com/api/v1/consultation_types`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setTreatments(response.data.data);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchTreatments();
  }, []);



  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await Avaliableappointments(selectedDate,selectedDuration);
        if (response) { // Asegúrate de que response no es null antes de intentar acceder a sus propiedades
          SetAppointments(response);
          setIsDisabled(false)
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    if (selectedDuration && selectedDate) {
      getAppointments();
    }
  }, [selectedDuration, selectedDate]);


  const startRegister = async () => {

    setValue(null)
    setValue2(null)
    setSelectedDuration(null)
    setSelectedDate(null)

    let dataAuth = {
      notes: procedure,
      request_date: "2023-04-10",
      appointment_date_hour: value2.split(' - ')[0],
      modality: "Presencial",
      status: "Programada",
      dentistId: 1,
      patientId: selectedPatientId,
      secretaryId: 1,
      consultationId: consultationType,
      supplies: []
    };


    try {
      const response = await createAppointment(dataAuth);

      if (response.status == 200) {
        
        events(true)
        toast({
          title: "Cita agendada",
          description: "Tu cita fue agendada correctamente",
        });
      } else {
        setErrors(response.data.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "No se puede agendar la cita",
      });
      console.error("Error creating user:", error);
    }
  };


  return (
    <div>


      <Dialog >
        <DialogTrigger className='bg-principalBlue text-white m-2 p-2 rounded'>
          Agendar Cita
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Añadir Cita</DialogTitle>
            <DialogDescription className="flex flex-col gap-5 p-2">
              <div>
                <p>Escriba el procedimiento</p>
                <Input
                  isClearable
                  type="text"
                  variant="bordered"
                  placeholder="Retiro de cordales"
                  onChange={(e) => setProcedure(e.target.value)}
                  onClear={() => {
                    setSelectedDate(null);
                  }}
                  className=""
                />
              </div>

              <div>
                <p>Seleccione el tipo de cita </p>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[100%] justify-between"
                    >
                      {value
                        ? treatments.find((treatment) => treatment.duration === value)?.name
                        : "Select treatment..."}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] p-0">
                    <Command>
                      <CommandInput placeholder="Search treatment..." className="h-9" />
                      <CommandEmpty>No treatment found.</CommandEmpty>
                      <CommandGroup>
                        {treatments.map((treatment) => (
                          <CommandItem
                            key={treatment.duration}
                            value={treatment.duration}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue);
                              setSelectedDuration(currentValue === value ? null : currentValue);
                              setOpen(false);
                              setConsultationType(treatment.id);
                            }}
                          >
                            {treatment.name}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                value === treatment.duration ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <p>Seleccione el dia</p>
                <Input
                  isClearable
                  type="date"
                  min={date}
                  variant="bordered"
                  placeholder="Enter your email"
                  defaultValue="junior@nextui.org"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  onClear={() => {
                    setSelectedDate(null);
                  }}
                  className=""
                />
              </div>

              <div>
                <p>Seleccione la hora de la cita</p>
                <Popover open={open2} onOpenChange={setOpen2}>
                  <PopoverTrigger asChild>
                    <Button
                      disabled={isDisabled}
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[100%] justify-between"
                    >
                      {value2
                        ? (() => {
                          const appointment = appointments.find(
                            (appointment) => new Date(appointment.start_time).getTime() === new Date(value2.split(' - ')[0]).getTime() && new Date(appointment.end_time).getTime() === new Date(value2.split(' - ')[1]).getTime()
                          );
                          return appointment
                            ? `${new Date(appointment.start_time).getUTCHours().toString().padStart(2, '0')}:${new Date(appointment.start_time).getUTCMinutes().toString().padStart(2, '0')} - ${new Date(appointment.end_time).getUTCHours().toString().padStart(2, '0')}:${new Date(appointment.end_time).getUTCMinutes().toString().padStart(2, '0')}`
                            : `${new Date(value2.split(' - ')[0]).getUTCHours().toString().padStart(2, '0')}:${new Date(value2.split(' - ')[0]).getUTCMinutes().toString().padStart(2, '0')} - ${new Date(value2.split(' - ')[1]).getUTCHours().toString().padStart(2, '0')}:${new Date(value2.split(' - ')[1]).getUTCMinutes().toString().padStart(2, '0')}`;
                        })()
                        : "Select appointment..."}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] h-[300px] overflow-y-auto p-0" placement="bottom">
                    <Command>
                      <CommandInput placeholder="Search appointment..." className="h-9" />
                      <CommandEmpty>No appointment found.</CommandEmpty>
                      <CommandGroup className="overflow-y-scroll">
                        {appointments.map((appointment) => {
                          const timeRange = `${new Date(appointment.start_time).getUTCHours().toString().padStart(2, '0')}:${new Date(appointment.start_time).getUTCMinutes().toString().padStart(2, '0')} - ${new Date(appointment.end_time).getUTCHours().toString().padStart(2, '0')}:${new Date(appointment.end_time).getUTCMinutes().toString().padStart(2, '0')}`;
                          return (
                            <CommandItem
                              key={timeRange}
                              value={`${appointment.start_time} - ${appointment.end_time}`}
                              onSelect={(currentValue) => {
                                setValue2(currentValue);
                                setOpen2(false);
                              }}
                            >
                              {timeRange}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  value2 === `${appointment.start_time} - ${appointment.end_time}` ? "opacity-100" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <p>Seleccione el Paciente</p>
                <Popover open={open3} onOpenChange={setOpen3}>
                  <PopoverTrigger asChild>
                    <Button
                      disabled={isDisabled}
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[100%] justify-between"
                    >
                      {value3 || "Select patient..."}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] h-[200px] overflow-y-auto p-0" placement="bottom">
                    <Command>
                      <CommandInput placeholder="Search patient..." className="h-9" />
                      <CommandEmpty>No patient found.</CommandEmpty>
                      <CommandGroup className="overflow-y-scroll">
                        {patients.map((patient) => {
                          return (
                            <CommandItem
                              key={patient.id}
                              value={`${patient.name} ${patient.last_name} ${patient.second_last_name}`} // Asume que los pacientes tienen un campo 'name'
                              onSelect={(currentValue) => {
                                setValue3(currentValue);
                                setSelectedPatientId(patient.id);
                                setOpen3(false);
                              }}
                            >
                              {patient.name} {patient.last_name} {patient.second_last_name}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  value3 === patient.name ? "opacity-100" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          );
                        })}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex gap-10">

                <DialogClose asChild>
                  <button onClick={startRegister} className="bg-principalBlue text-white p-2 rounded">
                    Registrar Cita</button>
                </DialogClose>
                
                <DialogClose asChild>
                  <button onClick={()=>{
                        setValue(null)
                        setValue2(null)
                        setSelectedDuration(null)
                        setSelectedDate(null)
                        setIsDisabled(true)
                        SetAppointments([]);


                  }} className="text-principalBlue bg-white p-2  border-1 rounded border-principalBlue">
                    Cancelar</button>
                </DialogClose>
              </div>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CalendarAdd