import api from "./api";


export async function getPatients() {
    try {

        let patientsCache = localStorage.getItem("patients");
        if (patientsCache) {
            return JSON.parse(patientsCache);
        }
        else{
            const response = await api.get("/patients");
            localStorage.setItem("patients", JSON.stringify(response.data.data));
            return response.data.data;
        }
    } catch (error) {
        console.error("Error trayendo pacientes:", error);
    }
}

export async function getPatient(id) {
    try {

        let userCache = localStorage.getItem(`patient-${id}`);
        if (userCache) {
            return JSON.parse(userCache);
        }
        else{
            const response = await api.get(`/patients/${id}`);
            localStorage.setItem(`patient-${id}`, JSON.stringify(response.data.data));
            return response.data.data;
        }

    } catch (error) {
        console.error("Error trayendo paciente:", error);
    }


}


export async function createPatient(patient) {
    try {
        const response = await api.post("/patients", patient);
        deleteCacheArray("patients")
        return response.data.data;

        
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }

}


export async function deleteCache(id) {
    try {
        localStorage.removeItem(`patient-${id}`);
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}


export async function deleteCacheArray(param) {
    try {
        localStorage.removeItem(param);
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

