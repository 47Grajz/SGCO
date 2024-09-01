const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_TOKEN);

// (async function () {
//     try {
//         const data = await resend.emails.send({
//             from: 'Acme <onboarding@resend.dev>',
//             to: ['delivered@resend.dev'],
//             subject: 'Hello World',
//             html: '<strong>It works!</strong>',
//         });
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// })();
module.exports = resend;

