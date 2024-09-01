const db = require("../models");
const { Op, QueryTypes } = require("sequelize");
const cron = require('node-cron');
const { sendReminderEmail } = require('../utils/email');

const checkAppointmentExists = async (appointment_date_hour) => {
  const existingAppointment = await db.Appointment.findOne({
    where: { appointment_date_hour }
  });

  if (existingAppointment && existingAppointment.status.toLowerCase() != 'cancelada')
    return existingAppointment;
}

const changeAppointmentStatus = async () => {
  let status = ''
  console.log('changing status');
  try {
    const appointments = await db.Appointment.findAll(
      {
        where: {
          appointment_date_hour: {
            [Op.gt]: new Date()
          }
        }
      }
    );
    appointments.forEach(async appointment => {
      if (appointment.status != 'Realizada') {
        console.log('cambiando estado a inasistida');
        status = 'Inasistida';
        await db.Appointment.update({ status: status }, { where: { id: appointment.id } });
      }
    });
  } catch (error) {
    console.log(error);
  }
}
// Ejecuta changeAppointmentStatus cada 12 horas (a las 00:00 y a las 12:00)
cron.schedule('0 */12 * * *', changeAppointmentStatus);

// Ejecuta checkNextAppointments cada día a las 7:00 am para enviar recordatorios de citas
const checkNextAppointments = async () => {
  try {
    console.log('checking next appointments...');
    const appointments = await db.Appointment.findAll({
      where: {
        appointment_date_hour: {
          [Op.between]: [new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000)]
        }
      },
      include: [db.Consultation_Type]
    });
    appointments.forEach(async appointment => {
      let patient = await db.Patient.findByPk(appointment.PatientId, { include: [db.User] });
      let dentist = await db.Patient.findByPk(appointment.DentistId, { include: [db.User] });
      // let pUser = await db.User.findByPk(patient.UserId);
      // let dUser = await db.User.findByPk(dentist.UserId);
      // patient.User = pUser;
      // dentist.User = dUser;
      sendReminderEmail(patient, dentist, appointment.appointment_date_hour, appointment.Consultation_Type);
    });

  } catch (error) {
    console.log(error);
  }
}
cron.schedule('0 7 * * *', checkNextAppointments);

const create = async (
  notes,
  request_date,
  appointment_date_hour,
  modality,
  status,
  visible,
  DentistId,
  PatientId,
  SecretaryId,
  supplies,
  ConsultationTypeId
) => {
  try {
    if (appointment_date_hour) {
      // verificar que no exista una cita en la misma hora
      const existingAppointment = await checkAppointmentExists(appointment_date_hour);
      if (existingAppointment) {
        throw new Error('Ya existe una cita en la misma hora');
      }
    }


    const newAppointment = await db.Appointment.create({
      notes,
      request_date,
      appointment_date_hour,
      modality,
      status,
      visible,
      DentistId,
      PatientId,
      SecretaryId,
      supplies,
      ConsultationTypeId
    });
    if (supplies) {
      await newAppointment.setSupplies(supplies);
    }
    return newAppointment;
  } catch (error) {
    throw error;
  }
};
const getByPatient = async (patientId) => {
  try {
    const appointments = await db.Appointment.findAll({
      where: { PatientId: patientId },
      include: [{
        model: db.Patient,
        required: false,
        as: "Patient",
        attributes: ["id", "name", "identification_card_number", "last_name"],
      }, {
        model: db.Consultation_Type,
        required: false,
        as: "Consultation_Type",
        attributes: ["id", "name", "duration", "price", "previous_appointment"],
      }, {
        model: db.Dentist,
        required: true,
        as: "Dentist",
        attributes: ["id", "name", "last_name"],
      }]
    });
    return appointments;
  } catch (error) {
    throw error;
  }
};
const getByDentist = async (dentistId) => {
  try {
    const appointments = await db.Appointment.findAll({
      where: { DentistId: dentistId },
      include: [{
        model: db.Patient,
        required: false,
        as: "Patient",
        attributes: ["id", "name", "identification_card_number", "last_name"],
      }, {
        model: db.Consultation_Type,
        required: false,
        as: "Consultation_Type",
        attributes: ["id", "name", "duration", "price", "previous_appointment"],
      }, {
        model: db.Dentist,
        required: true,
        as: "Dentist",
        attributes: ["id", "name", "last_name"],
      }]
    });
    return appointments;
  } catch (error) {
    throw error;
  }
};
const getAll = async () => {
  // Obtener la fecha actual
  const currentDate = new Date();

  // Calcular la fecha 15 días antes
  const fifteenDaysBefore = new Date(currentDate.getTime());
  fifteenDaysBefore.setDate(currentDate.getDate() - 15);

  // Calcular la fecha 1 mes después
  const oneMonthAfter = new Date(currentDate.getTime());
  oneMonthAfter.setMonth(currentDate.getMonth() + 1);

  try {
    const appointments = await db.Appointment.findAll({
      where: {
        appointment_date_hour: {
          [Op.between]: [fifteenDaysBefore, oneMonthAfter]
        }
      },
      include: [{
        model: db.Patient,
        required: false,
        as: "Patient",
        attributes: ["id", "name", "identification_card_number", "last_name"],
      }, {
        model: db.Consultation_Type,
        required: false,
        as: "Consultation_Type",
        attributes: ["id", "name", "duration", "price", "previous_appointment"],
      }, {
        model: db.Dentist,
        required: true,
        as: "Dentist",
        attributes: ["id", "name", "last_name"],
      }]
    });
    return appointments;
  } catch (error) {
    throw error;
  }
};

const get = async (id) => {
  try {
    const appointment = await db.Appointment.findByPk(id, {
      include: [{
        model: db.Patient,
        required: false,
        as: "Patient",
        attributes: ["id", "name", "identification_card_number", "last_name"],
      }, {
        model: db.Consultation_Type,
        required: false,
        as: "Consultation_Type",
        attributes: ["id", "name", "duration", "price", "previous_appointment"],
      }, {
        model: db.Dentist,
        required: true,
        as: "Dentist",
        attributes: ["id", "name", "last_name"],
      }]
    });
    return appointment;
  } catch (error) {
    throw error;
  }
};
const filterByStatus = async (status) => {
  try {
    if (status) {
      const appointment = await db.Appointment.findAll({
        where: {
          status: status,
        }
      });
      console.log(appointment);
      return appointment;
    }
  } catch (error) {
    throw error;
  }
}
const filterByDate = async (date) => {
  try {

    if (date == 'today') {
      const appointments = await db.Appointment.findAll({
        where: {
          status: 'Programada'
        }
      });
      const today = new Date();
      today.setHours(0, 0, 0, 0); // set time to 00:00:00.000
      const todayApp = appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.appointment_date_hour);
        appointmentDate.setHours(0, 0, 0, 0); // set time to 00:00:00.000
        return appointmentDate.getTime() === today.getTime();
      });
      return todayApp
    }

  } catch (error) {
    throw error;
  }
}

const update = async (
  id,
  notes,
  request_date,
  appointment_date_hour,
  modality,
  status,
  visible,
  DentistId,
  PatientId,
  SecretaryId
) => {
  try {
    //verificar que no exista una cita en la misma hora
    if (appointment_date_hour) {
      const existingAppointment = await checkAppointmentExists(appointment_date_hour);
      if (existingAppointment) throw new Error('Ya existe una cita en la misma hora');
    }

    const appointment = await db.Appointment.update(
      {
        notes,
        request_date,
        appointment_date_hour,
        modality,
        status: status,
        visible,
        DentistId,
        PatientId,
        SecretaryId,
      },
      { where: { id } }
    );
    return appointment;
  } catch (error) {
    throw error;
  }
};

const destroy = async (id) => {
  try {
    const appointment = await db.Appointment.destroy({ where: { id } });
    return appointment;
  } catch (error) {
    throw error;
  }
};

//Obtener citas por intervalo de tiempo
// Ejemplo de uso
//appointmentsByInterval('2023-12-17', '2023-12-17')
const appointmentsByInterval = async (startTime, endTime) => {
  try {
    // Convertir a formato ISO 8601 y agregar 'Z' para indicar UTC
    const startTimeUTC = new Date(startTime).toISOString();

    // Convertir endTime a un objeto Date
    const endTimeDate = new Date(`${endTime}T23:59:59Z`);

    const endTimeUTC = endTimeDate.toISOString();

    const cita = await db.sequelize.query(`select a.id as cita_id ,ct.duration , a.appointment_date_hour as fecha_inicial, 
    a.appointment_date_hour + ct.duration as fechas, a.status,
    p."name", p.second_last_name  as fullName,
    p.identification_card_number
    from "Appointments" a
    inner join "Consultation_Types" ct 
    on a."ConsultationTypeId" = ct.id  
    inner join "Patients" p 
    on a."PatientId" = p.id 
    where a.appointment_date_hour BETWEEN '${startTimeUTC}'  AND '${endTimeUTC}'`, { type: QueryTypes.SELECT })
    return cita
  } catch (error) {
    throw error;
  }
}
// Ejemplo de uso
//appoinmentsAvaible('2023-12-17 08:00:00', '2023-12-17 18:00:00', '08:00:00');
const appoinmentsAvaible = async (startTime, endTime, duration) => {
  try {
    const cita = await db.sequelize.query(`
      WITH TimeSlots AS (
        SELECT generate_series(
          '${startTime}'::timestamptz, 
          '${endTime}'::timestamptz, 
          '30 minutes'::interval
        ) AS time_slot
      ),
      ExistingAppointments AS (
        SELECT
          a.appointment_date_hour AS start_time,
          (a.appointment_date_hour + (ct.duration || ' minutes')::interval) AS end_time
        FROM "Appointments" a
        JOIN "Consultation_Types" ct ON ct.id = a."ConsultationTypeId"
        WHERE a.status not in ('cancelada', 'Cancelada')
      )
      SELECT 
        ts.time_slot AS start_time,
        (ts.time_slot + '${duration}'::interval) AS end_time
      FROM TimeSlots ts
      WHERE NOT EXISTS (
        SELECT 1
        FROM ExistingAppointments ea
        WHERE (ts.time_slot, ts.time_slot + '${duration}'::interval) 
              OVERLAPS (ea.start_time, ea.end_time)
      )
      AND ts.time_slot + '${duration}'::interval <= '${endTime}'::timestamptz
      AND ts.time_slot >= '${startTime}'::timestamptz;`, { type: QueryTypes.SELECT });
    return cita;
  } catch (error) {
    throw error;
  }
};



module.exports = { create, get, getAll, getByPatient, getByDentist, update, destroy, appointmentsByInterval, appoinmentsAvaible, filterByStatus, filterByDate };
