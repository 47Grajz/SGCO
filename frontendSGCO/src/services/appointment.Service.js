import api from "./api";

export async function getAppointments(selectedCache){
    try{
        let appointmentsCache = localStorage.getItem("appointments");

        if (appointmentsCache && selectedCache === false || selectedCache === undefined) {
            const parsedAppointments = JSON.parse(appointmentsCache);
            if (parsedAppointments !== null) {
                return parsedAppointments;
            }
        }

        const response = await api.get("/appointments");
        if (response.data.data !== null) {
            localStorage.setItem("appointments", JSON.stringify(response.data.data));
            return response.data.data;
        } else {
            console.error("Error: la API devolvió datos nulos");
        }
    } catch (error) {
        console.error("Error trayendo citas:", error); 
    }
}


export async function getAppointment(id){
    try{
        const response = await api.get(`/appointments/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error trayendo cita:", error);
    }
}  


export async function Avaliableappointments(selectedDate,selectedDuration){ 
    try{
        const response = await api.get(`/appointments/getAppointmentAvailable?startTime=${selectedDate}T08:00:00.000Z&endTime=${selectedDate}T18:00:00.000Z&duration=${selectedDuration}`);
        return response.data.data;
    } catch (error) {
        console.error("Error trayendo citas disponibles:", error);
    }
}



export async function getUserAppointments(id){
    try{
        const response = await api.get(`/appointments?patientId=${id}`);
        return response.data.data;
    } catch (error) {
        console.error("Error trayendo citas por usuario:", error);
    }
}


export async function createAppointment(appointment){
    try {
        const response = await api.post("/appointments", appointment);

        return response;
    } catch (error) {
        console.error("Error creating appointment:", error);
        throw error;
    }

}




export async function ReprogramAppointment(appointmentId, procedure, value2, selectedPatientId, consultationType) {
    let dataAuth = {
        notes: procedure,
        request_date: new Date().toISOString(),
        appointment_date_hour: value2.split(' - ')[0],
        modality: "Presencial",
        status: "Reprogramada",
        dentistId: 1,
        patientId: selectedPatientId,
        secretaryId: 1,
        consultationId: consultationType,
        supplies: []
    };

    try {
        const response = await api.put(`/appointments/${appointmentId}`, dataAuth);
        return response;
    } catch (error) {
        console.error("Error reprogramming appointment:", error);
        throw error;
    }


}


export async function CancelAppointment(appointmentId) {
    let dataAuth = {
        status: "Cancelada",
    };
    try {
        const response = await api.put(`/appointments/${appointmentId}`, dataAuth);
        return response;
    } catch (error) {
        console.error("Error reprogramming appointment:", error);
        throw error;
    }


    
}


