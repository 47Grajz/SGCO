"use client";
import "@/src/styles/admin.css";
import { useEffect, useState } from "react";
import AdminGraphic from "./Balance/AdminGraphic";
import { LiaCloudSunSolid } from "react-icons/lia";
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunFoggyFill } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { getCookie } from "../utils/utils";
function AdminView() {
  const router = useRouter();
  const [greeting, setGreeting] = useState("");
  const [ReadyAppointmens, setReadyAppointmens] = useState(
    <Spinner size="sm" />
  );
  const [DoneAppointments, setDoneAppointmens] = useState(
    <Spinner size="sm" />
  );
  const [TodayAppointmets, setTodayAppointmets] = useState([]);
  const [PatienstMonth, setPatienstMonth] = useState();
  const [Patients, setPatients] = useState([]);
  const user = decodeURIComponent(getCookie("user"));
  const userObj = JSON.parse(user);


  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 6 && currentTime < 12) {
      setGreeting(
        <>
          <RiSunFoggyFill />
          &nbsp;<span>Buenos Dias&nbsp;</span>
        </>
      );
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting(
        <>
          <LiaCloudSunSolid />
          &nbsp;<span>Buenas Tardes&nbsp;</span>
        </>
      );
    } else {
      setGreeting(
        <>
          <BsFillMoonFill />
          &nbsp;<span>Buenas Noches&nbsp;</span>
        </>
      );
    }
  }, []);

  useEffect(() => {
    const ReadyAppointments = async () => {
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `https://adso-shinydesk.onrender.com/api/v1/appointments/filter?status=Programada`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setReadyAppointmens(response.data.data.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    ReadyAppointments();
  }, []);

  useEffect(() => {
    const AppointmetsDone = async () => {
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `https://adso-shinydesk.onrender.com/api/v1/appointments/filter?status=Realizada`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setDoneAppointmens(response.data.data.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    AppointmetsDone();
  }, []);

  useEffect(() => {
    const AppointmentsToday = async () => {
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `https://adso-shinydesk.onrender.com/api/v1/appointments/filter?date=today`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setTodayAppointmets(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    AppointmentsToday();
  }, []);
  useEffect(() => {
    const PatientsToday = async () => {
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `https://adso-shinydesk.onrender.com/api/v1/patients/patientsByMonth`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setPatienstMonth(response.data.data.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    PatientsToday();
  }, []);

  useEffect(() => {
    const PatientsTotal = async () => {
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `https://adso-shinydesk.onrender.com/api/v1/patients`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        setPatients(response.data.data.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    PatientsTotal();
  }, []);

  return (
    <div className="contAdmin">
      <div className="contAdmin-info">
        <div className="contAdmin-left bg-LightprincipalBlue">
          <h4 className="flex items-center">
            {greeting} ,<span>&nbsp;{userObj && userObj.name}</span>
          </h4>

          <div className="buttons-cont">
            <p>Estadisticas de la cita</p>
            <div className="buttons">
              <div className="radio-input">
                <label>
                  <input
                    type="radio"
                    id="value-1"
                    name="value-radio"
                    value="value-1"
                  />
                  <span>Semanal</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="value-2"
                    name="value-radio"
                    value="value-2"
                  />
                  <span>Mensual</span>
                </label>
                <label>
                  <input
                    type="radio"
                    id="value-3"
                    name="value-radio"
                    value="value-3"
                  />
                  <span>+ 3O Dias</span>
                </label>
                <span className="selection"></span>
              </div>
            </div>
          </div>

          <div className="chart overflow-auto">
            <AdminGraphic></AdminGraphic>
          </div>
        </div>
        <div className="contAdmin-right">
          <div className="right-info">
            <div className="info-box bx1">
              <p className="appointmentTittle">Citas Realizadas</p>
              <p className="Number">{DoneAppointments}</p>
              <p className="label">Asistidas</p>
              <div>
                <button
                  onClick={() => {
                    router.push("/ShinyDesk/calendar");
                  }}
                  className="button"
                >
                  Mas
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="info-box bx2">
              <p className="appointmentTittle">Citas Programadas</p>
              <p className="Number">{ReadyAppointmens}</p>
              <p className="label">Programadas</p>

              <div>
                <button
                  onClick={() => {
                    router.push("/ShinyDesk/calendar");
                  }}
                  className="button"
                >
                  Mas
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="info-cons">
            <h6>Informacion Consultorio</h6>
            <div className="info-line">Cra 11b 47b 48</div>
            <div className="info-line">888 888 888 88 </div>

            <div>
              <button
                onClick={() => {
                  router.push("/ShinyDesk/calendar");
                }}
                className="button"
              >
                Mas
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contAdmin-info-bottom">
        <div className="info-bottom b1">
          <h5>Citas para hoy</h5>
          {TodayAppointmets && TodayAppointmets.length > 0 ? (
            <div className="b1-main">
              <p className="b1-Number">{TodayAppointmets.length}</p>
              <div className="daily-citas">
                {TodayAppointmets.map((appointment, index) => (
                  <div key={index} className="cita">
                    <div className="cita-info">
                      <p>Cita</p>
                      <h3>{appointment.notes}</h3>
                    </div>
                    <p className="hora">{`${new Date(
                      appointment.appointment_date_hour
                    )
                      .getUTCHours()
                      .toString()
                      .padStart(2, "0")}:${new Date(
                      appointment.appointment_date_hour
                    )
                      .getUTCMinutes()
                      .toString()
                      .padStart(2, "0")}`}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              No hay citas para hoy
            </div>
          )}

          <div>
            <button
              onClick={() => {
                router.push("/ShinyDesk/calendar");
              }}
              className="button"
            >
              Mas
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="info-bottom b2">
          <h5>Tratamientos concurridos</h5>
          <div className="tratamientos">
            <p>1.Valoracion</p>
            <p>2.ContAdminrol</p>
            <p>3.cirugia</p>
            <p>4.Periodoncia</p>
          </div>
          <div>
            <button
              onClick={() => {
                router.push("/ShinyDesk/calendar");
              }}
              className="button"
            >
              Mas
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="info-bottom b3">
          <h5>Total pacientes este mes</h5>
          <h3>{PatienstMonth}</h3>
          <h5>Total pacientes</h5>
          <h3>{Patients}</h3>

          <div>
            <button
              onClick={() => {
                router.push("/ShinyDesk/calendar");
              }}
              className="button"
            >
              Mas
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="info-bottom b4">
          <h5>Balance economico</h5>
          <h3>2000000</h3>
          <p>Este mes</p>
          <h3>30000000</h3>
          <p>Mes pasado</p>

          <div>
            <button
              onClick={() => {
                router.push("/ShinyDesk/calendar");
              }}
              className="button"
            >
              Mas
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView;
