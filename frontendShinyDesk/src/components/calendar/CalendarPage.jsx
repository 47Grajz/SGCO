"use client";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState, useEffect, useRef } from "react";
import { Spinner } from "@/components/ui/spinner";
import esLocale from "@fullcalendar/core/locales/es";
import "@/src/styles/calendar.css";
import CalendarAdd from "./CalendarAdd";
import AppointMentInfo from "./AppointMentInfo";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { getAppointments } from "@/src/services/appointment.Service";
import { Checkbox } from "@/components/ui/checkbox"
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";
const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [loadevents, setLoadEvents] = useState(true);
  const [selectedStatuses, setSelectedStatuses] = useState([
    EnumAppointmentStatus.PROGRAMED,EnumAppointmentStatus.RESCHEDULED
  ]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const calendarRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (calendarRef.current) {
          const calendarApi = calendarRef.current.getApi();
          calendarApi.changeView(windowWidth > 768 ? 'timeGridWeek' : 'listWeek');
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth]);

  const handleCheckboxChange = (status) => {
    setSelectedStatuses(prevStatuses => {
      if (prevStatuses.includes(status)) {
        return prevStatuses.filter(selectedStatus => selectedStatus !== status);
      } else {
        return [...prevStatuses, status];
      }
    });

  };

  const fetchEvents = async (restoreCache) => {
    try {
      const appointments = await getAppointments(restoreCache);
      setLoadEvents(false);
      let mappedEvents = appointments.map((event) => {
        const startDate = new Date(event.appointment_date_hour);
        const endDate = new Date(event.appointment_date_hour);
        const minutes = Number(event.Consultation_Type.duration.split(':')[1]);
        endDate.setMinutes(startDate.getMinutes() + minutes);

        return {
          title: event.notes,
          start: event.appointment_date_hour,
          end: endDate.toISOString(),
          id: event.id,
          name: event.Patient.name,
          last_name: event.Patient.last_name,
          patientId: event.Patient.id,
          status: event.status,
          document: event.Patient.identification_card_number,
        };
      });

      const statusesToFilterBy = selectedStatuses
      mappedEvents = mappedEvents.filter(event => statusesToFilterBy.includes(event.status));
      setEvents(mappedEvents);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedStatuses]);

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


  const renderEventContent = (eventInfo) => {
    return (
      <div className={`p-2 h-full border-0 border-t-4 ${getBorderColor(eventInfo.event.extendedProps.status)} flex justify-between shadow-inner bg-slate-50 flex-col text-black max-md:justify-center`}>
        <div className="justify-between">
          <div className="hidden 2xl:flex justify-between flex-wrap">
            <p className="flex gap-2 items-center"><FaRegUser /> {eventInfo.event.extendedProps.name}</p>
            <p className="flex gap-2 items-center"><HiOutlineIdentification />{eventInfo.event.extendedProps.document}</p>
          </div>
        </div>
        <div className="justify-between">
          <div className="hidden md:flex justify-between flex-wrap">
            <p className="flex gap-2 items-center"><IoInformationCircleOutline /> {eventInfo.event.title}</p>
            <b className="flex gap-2 items-center" style={{ color: "gray" }}><CiClock2 /> {eventInfo.timeText}</b>
          </div>
        </div>
        <AppointMentInfo events={fetchEvents} appointmentinfo={eventInfo}></AppointMentInfo>
      </div>
    );
  };


  return (
    <div className="w-full">
      <div className="w-full flex justify-between sticky top-[-2px] z-10 bg-BackgroundColor overflow-hidden my-6 max-md:flex">
        {!loadevents ? (
          <div className="flex items-center gap-4 bg-BackgroundColor max-md:flex-col max-md:items-start">
            <div className="flex items-center gap-2"><Checkbox  className="data-[state=checked]:bg-green-500" defaultChecked  onClick={() => handleCheckboxChange( EnumAppointmentStatus.PROGRAMED)}></Checkbox><p>Programada</p></div>
            <div className="flex items-center gap-2"><Checkbox  className="data-[state=checked]:bg-orange-500"  defaultChecked onClick={() => handleCheckboxChange( EnumAppointmentStatus.RESCHEDULED)}></Checkbox><p>Reprogramada</p></div>
            <div className="flex items-center gap-2"><Checkbox  className="data-[state=checked]:bg-red-500" onClick={() => handleCheckboxChange( EnumAppointmentStatus.CANCELLED)}></Checkbox><p>Cancelada</p></div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <Spinner />Cargando Citas
          </div>
        )}
        <div>

        </div>
        <div className="flex justify-between items-center gap-2 mb-4">
        </div>
        <CalendarAdd events={fetchEvents}></CalendarAdd>
      </div>
      <FullCalendar
        innerRef={calendarRef}
        views={{
          dayGridMonth: {
            titleFormat: {
              month: "numeric",
              day: "numeric",
              weekday: "short",
              omitCommas: true,
            },
          },
        }}
        slotLabelFormat={[
          {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            meridiem: "short",
          },
        ]}
        initialView={windowWidth > 768 ? 'timeGridWeek' : 'listWeek'}
        plugins={[timeGridPlugin, interactionPlugin, listPlugin, dayGridPlugin]}
        events={events}
        contentHeight={"auto"}
        allDaySlot={false}
        selectable={false}
        editable={false}
        dayHeaderFormat={{ day: "numeric", weekday: "short" }}
        hiddenDays={[0]}
        slotDuration="00:15:00"
        slotMinTime="09:00"
        slotMaxTime="18:00"
        locale={esLocale}
        timeZone="UTC"
        selectConstraint="businessHours"
        businessHours={[
          {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: "09:00",
            endTime: "18:00",
          },
          {
            daysOfWeek: [6],
            startTime: "09:00",
            endTime: "13:00",
          },
        ]}
        eventContent={renderEventContent}
        headerToolbar={{
          left: "prev,today,next,title",
          center: "",
          right: "timeGridWeek,timeGridDay,listWeek",
        }}
      />
    </div>
  );
};

export default Calendar;
