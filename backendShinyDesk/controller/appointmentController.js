const appointmentServices = require('../services/AppointmentService')
const consultationService = require('../services/ConsultationTypeService')
const patientService = require('../services/PatientService')
const dentistService = require('../services/DentistService')
const userService = require('../services/PatientService');
const resend = require('../utils/resend')
const { sendAppointmentEmails } = require('../utils/email')


const filter = async (req, res) => {
    const { status, date } = req.query;

    try {
        let appointments;

        if (status) {
            appointments = await appointmentServices.filterByStatus(status);
        } else if (date) {
            appointments = await appointmentServices.filterByDate(date);
        } else {
            throw new Error('No valid filter provided');
        }

        res.status(200).send({ status: 200, data: appointments });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message });
    }
}
const getAll = async (req, res) => {
    const { dentistId } = req.query;
    const { patientId } = req.query;
    if (patientId) {
        try {
            const appointments = await appointmentServices.getByPatient(patientId)
            res.status(200).send({ status: 200, data: appointments })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
    else if (dentistId) {
        try {
            const appointments = await appointmentServices.getByDentist(dentistId)
            res.status(200).send({ status: 200, data: appointments })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
    else {
        try {
            const getAll = await appointmentServices.getAll()
            res.status(200).send({ status: 200, data: getAll })
        } catch (error) {
            res.status(error.status || 500).send({ status: "FAILED", data: error.message })
        }
    }
}
const getAvailable = async (req, res) => {
    const { startTime, endTime } = req.query;
    try {
        const appointments = await appointmentServices.appointmentsByInterval(startTime, endTime)
        res.status(200).send({ status: 200, data: appointments })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }

}
const getAppoinmentAvailable = async (req, res) => {
    const { startTime, endTime, duration } = req.query
    try {
        const appointments = await appointmentServices.appoinmentsAvaible(startTime, endTime, duration)
        res.status(200).send({ status: 200, data: appointments })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const get = async (req, res) => {
    let id = req.params.appointmentId
    try {
        const get = await appointmentServices.get(id)
        res.status(200).send({ status: 200, data: get })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const create = async (req, res) => {
    const { body } = req
    let emailsSent = false;
    try {
        const appointmentDate = new Date(body.appointment_date_hour);
        if (isNaN(appointmentDate)) {
            throw new Error('Invalid date');
        }

        const appointment = await appointmentServices.create(body.notes, body.request_date, appointmentDate.toISOString(), body.modality, body.status, body.visible, body.dentistId, body.patientId, body.secretaryId, body.supplies, body.consultationId)

        if (appointment) {
            const patient = await patientService.get(body.patientId)
            const dentist = await dentistService.get(body.dentistId)
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const formattedDate = appointmentDate.toLocaleString('es-CO', options);
            const consultationType = await consultationService.get(appointment.ConsultationTypeId);
            //send emails to patient and dentist
            if (patient.User.email_verified && dentist.User.email_verified) {
                await sendAppointmentEmails(patient, dentist, formattedDate, consultationType);
                emailsSent = true;
            }
            else {
                emailsSent = false;
                console.log('Emails not sent');
            }
            const emails = emailsSent ? 'Correos enviados' : 'No se pudo enviar los correos';
            res.status(200).json({ message: 'Cita creada con éxito', appointment, emailsMessage: emails });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la cita', error: error.message });
    }
};

const update = async (req, res) => {
    const id = req.params.appointmentId
    try {
        const { body } = req
        const update = await appointmentServices.update(id, body.notes, body.request_date, body.appointment_date_hour, body.modality, body.status, body.visible, body.dentistId, body.patientId, body.secretaryId)

        res.status(200).send({ status: 200, data: update })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

const destroy = async (req, res) => {
    const id = req.params.appointmentId

    try {
        const destroy = await appointmentServices.destroy(id)

        res.status(200).send({ status: 200, data: destroy })

    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    filter,
    destroy,
    getAvailable,
    getAppoinmentAvailable
}