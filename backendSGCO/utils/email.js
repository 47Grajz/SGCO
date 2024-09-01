const jwt = require('jsonwebtoken');
const { Resend } = require('resend');
const { downloadImage } = require('./download');
const resend = new Resend('re_ifLitjo8_5Q2P77LGi6J5USkD1mPq3dxJ');
const generateVerificationLink = (userId) => {
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
    const link = `https://www.odontologialaurav.com/verify-email?token=${token}`;
    return link;
};

const sendVerificationEmail = async (user) => {
    const verificationLink = generateVerificationLink(user.id);
    console.log('sending verification email to', user.email)
    try {
        const data = await sendEmail(
            ['shinydeskmanager@gmail.com', user.email],
            'Verifica tu correo electrónico',
            `<strong>Verifica tu correo electrónico</strong><p>Haz clic en el siguiente enlace para verificar tu correo electrónico:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`
        )
        // const data = await resend.emails.send({
        //     from: 'Acme <onboarding@resend.dev>',
        //     to: ['shinydeskmanager@gmail.com'],
        //     subject: 'Verifica tu correo electrónico',
        //     html: `<strong>Verifica tu correo electrónico</strong><p>Haz clic en el siguiente enlace para verificar tu correo electrónico:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
        // });
        console.log(data);
    } catch (error) {
        throw error;
    }

};
const sendEmail = async (to, subject, html) => {
    try {
        await resend.emails.send({
            from: 'notificaciones@odontologialaurav.com',
            to: to,
            subject: subject,
            html: html
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email', error);
    }
};

// Uso de la función
const sendAppointmentEmails = async (patient, dentist, appointmentDate, consultation) => {
    // const imageBuffer = await downloadImage('https://res.cloudinary.com/dbrrddrfm/image/upload/f_auto,q_auto/ffjf19zsyqhkobvaaofs');

    // const attachments = [
    //     {
    //         filename: 'Odontología Laura V.png',
    //         content: imageBuffer,
    //     },
    // ]
    // Enviar correo al paciente
    await sendEmail(
        ['shinydeskmanager@gmail.com', patient.User.email],
        'Cita agendada',
        `<div style="display: flex; justify-content: center; align-items: center; height: 100%">
          <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); padding: 20px; margin: 10px; text-align: center; border-radius: 5px;">
            <h1 style="color: #444; font-size: 28px;">Cita agendada</h1>
            <h3 style="font-size: 24px;">Estimado paciente ${patient.name} ${patient.last_name}:</h3>
            <p style="font-size: 18px;">Se ha agendado una cita para ti.</p>
            <p style="font-size: 18px;">Hora y fecha: <strong>${appointmentDate}</strong></p>
            <p style="font-size: 18px;">Tipo de consulta: <strong>${consultation.name}</strong></p>
            <p style="font-size: 18px;">Duración estimada: <strong>${consultation.duration}</strong></p>
            <p style="font-size: 18px;">Odontólogo: <strong>${dentist.name} ${dentist.last_name}</strong></p>
            <img src="https://res.cloudinary.com/dbrrddrfm/image/upload/f_auto,q_auto/ffjf19zsyqhkobvaaofs" alt="Odontología Laura V" style="width: 100%; max-width: 600px; height: auto;">
          </div>
        </div>`,
    );

    // Enviar correo al odontólogo
    await sendEmail(
        ['shinydeskmanager@gmail.com', dentist.User.email],
        'Nueva cita',
        `<div style="display: flex; justify-content: center; align-items: center; height: 100%">
          <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); padding: 20px; margin: 10px; text-align: center; border-radius: 5px;">
            <h1 style="color: #444; font-size: 28px;">Nueva cita</h1>
            <h3 style="font-size: 24px;">Estimado odontólogo ${dentist.name} ${dentist.last_name}:</h3>
            <p style="font-size: 18px;">Se ha agendado una nueva cita para ti.</p> <p style="font-size: 18px;">Hora y fecha: <strong>${appointmentDate}</strong></p>
            <p style="font-size: 18px;">Tipo de consulta: <strong>${consultation.name}</strong></p>
            <p style="font-size: 18px;">Duración estimada: <strong>${consultation.duration}</strong></p>
            <p style="font-size: 18px;">Paciente: <strong>${patient.name} ${patient.last_name}</strong></p>
            <img src="https://res.cloudinary.com/dbrrddrfm/image/upload/f_auto,q_auto/ffjf19zsyqhkobvaaofs" alt="Odontología Laura V" style="width: 100%; max-width: 600px; height: auto;">
          </div>
        </div>`,
    );

};

const sendReminderEmail = async (patient, dentist, appointmentDate, consultation) => {
    //format date to local date(colombia)
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = appointmentDate.toLocaleString('es-CO', options);
    // Enviar correo al odontólogo
    await sendEmail(['shinydeskmanager@gmail.com', dentist.User.email], 'Recordatorio de cita', `
    <div style="display: flex; justify-content: center; align-items: center; height: 100%">
        <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); padding: 20px; margin: 10px; text-align: center; border-radius: 5px;">
            <h1 style="color: #444; font-size: 28px;">Nueva cita</h1>
            <h3 style="font-size: 24px;">Estimado odontólogo ${dentist.name} ${dentist.last_name}:</h3>
            <p style="font-size: 18px;">Tiene una cita médica pendiente para mañana</p>
            <p style="font-size: 18px;">Hora y fecha: <strong>${formattedDate}</strong></p>
            <p style="font-size: 18px;">Tipo de consulta: <strong>${consultation.name}</strong></p>
            <p style="font-size: 18px;">Duración estimada: <strong>${consultation.duration}</strong></p>
            <p style="font-size: 18px;">Paciente: <strong>${patient.name} ${patient.last_name}</strong></p>
            <img src="https://res.cloudinary.com/dbrrddrfm/image/upload/f_auto,q_auto/ffjf19zsyqhkobvaaofs" alt="Odontología Laura V" style="width: 100%; max-width: 600px; height: auto;">
        </div>
    </div>`);
    // Enviar correo al paciente
    await sendEmail(
        ['shinydeskmanager@gmail.com', patient.User.email],
        'Recordatorio de cita',
        `<div style="display: flex; justify-content: center; align-items: center; height: 100%">
          <div style="font-family: Arial, sans-serif; border: 1px solid #ccc; box-shadow: 2px 2px 5px rgba(0,0,0,0.1); padding: 20px; margin: 10px; text-align: center; border-radius: 5px;">
            <h1 style="color: #444; font-size: 28px;">Cita agendada</h1>
            <h3 style="font-size: 24px;">Estimado paciente ${patient.name} ${patient.last_name}:</h3>
            <p style="font-size: 18px;">Recuerde asistir a su cita.</p>
            <p style="font-size: 18px;">Hora y fecha: <strong>${formattedDate}</strong></p>
            <p style="font-size: 18px;">Tipo de consulta: <strong>${consultation.name}</strong></p>
            <p style="font-size: 18px;">Duración estimada: <strong>${consultation.duration}</strong></p>
            <p style="font-size: 18px;">Odontólogo: <strong>${dentist.name} ${dentist.last_name}</strong></p>
            <img src="https://res.cloudinary.com/dbrrddrfm/image/upload/f_auto,q_auto/ffjf19zsyqhkobvaaofs" alt="Odontología Laura V" style="width: 100%; max-width: 600px; height: auto;">
          </div>
        </div>`,
    );
}

module.exports = { sendVerificationEmail, generateVerificationLink, sendAppointmentEmails, sendEmail, sendReminderEmail };