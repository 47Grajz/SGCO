
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
import { Avaliableappointments, ReprogramAppointment } from "@/src/services/appointment.Service";
import { useCurrentDate } from "@/src/hooks/hooks";



function Reprogram({ appointmentinfo, events, timeText, appointmentId,disabled }) {
  const { toast } = useToast();
  const [isDisabled, setIsDisabled] = useState(true)
  const [treatments, setTreatments] = useState([]);
  const [appointments, SetAppointments] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(appointmentinfo.Patient.id);
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(appointmentinfo.Consultation_Type.duration);
  const [selectedDate, setSelectedDate] = useState(appointmentinfo.appointment_date_hour.split('T')[0]);
  const [procedure, setProcedure] = useState(appointmentinfo.notes);
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [consultationType, setConsultationType] = useState(appointmentinfo.Consultation_Type.id);
  const date = useCurrentDate()
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
        const response = await Avaliableappointments(selectedDate, selectedDuration);
        SetAppointments(response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (selectedDuration && selectedDate) {
      getAppointments();
    }
  }, [selectedDate, selectedDuration]);

  const startRegister = async () => {
    setValue(null)
    setValue2(null)
    setSelectedDuration(null)
    setSelectedDate(null)

    try {
      const response = await ReprogramAppointment(appointmentId, procedure, value2, selectedPatientId, consultationType);
      if (response.status == 200) {
        events(true)
        toast({
          title: "Cita Reprogramada",
          description: "Cita reprogramada correctamente",
        });
      } else {
        setErrors(response.data.error);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "No se puede reprogrmar la cita, intente de nuevo.",
      });
      console.error("Error Reprogramming appointment:", error);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger >
        <Button className='className="bg-white p-2 bg-white rounded border-1 text-orange-500 border-orange-300 hover:bg-white'>Reprogramar</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reprogramación de cita</DialogTitle>
            <DialogDescription className="flex flex-col gap-5 p-2">
              <div>
                <p>Cambiar Procedimiento (opcional)</p>
                <Input
                  isClearable
                  type="text"
                  variant="bordered"
                  defaultValue={procedure}
                  onChange={(e) => setProcedure(e.target.value)}
                  onClear={() => {
                    setSelectedDate(null);
                  }}
                  className=""
                />
              </div>

              <div>
                <p>Cambiar tipo de cita (opcional)</p>
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
                        : `${appointmentinfo?.Consultation_Type?.name || "Seleccionar Tratamiento"}`}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] p-0">
                    <Command>
                      <CommandInput placeholder="Buscar Tratamiento..." className="h-9" />
                      <CommandEmpty>No se encontro tratamiento.</CommandEmpty>
                      <CommandGroup>
                        {treatments.map((treatment) => (
                          <CommandItem
                            key={treatment.duration}
                            value={treatment.duration}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue);
                              setSelectedDuration(currentValue === value ? null : currentValue);
                              setConsultationType(treatment.id);
                              setOpen(false);

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
                <p>Seleccionar nuevo dia (opcional)</p>
                <Input
                  isClearable
                  type="date"
                  variant="bordered"
                  min={date}
                  defaultValue={appointmentinfo?.appointment_date_hour?.split('T')[0]}
                  // defaultValue={appointmentInfo.appointment_date_hour}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  onClear={() => {
                    setSelectedDate(null);
                  }}
                  className=""
                />
              </div>

              <div>
                <p>Seleccione la nueva hora</p>
                <Popover open={open2} onOpenChange={setOpen2}>
                  <PopoverTrigger asChild>
                    <Button
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
                        : `${timeText}`}
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
                                setIsDisabled(false);

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

              <div className="flex gap-10">
                <DialogClose asChild>
                  <Button disabled={isDisabled} onClick={startRegister} className="bg-principalBlue text-white p-2 rounded">
                    Reprogramar Cita</Button>
                </DialogClose>

                <DialogClose asChild>
                  <button onClick={() => {
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

export default Reprogram