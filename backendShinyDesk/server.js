const express = require('express')
const cors = require('cors');
const app = express()// intencia 
const bodyParser = require('body-parser')
const morgan = require('morgan');//informacion de la peticiones
const cookieParser = require('cookie-parser');

//Validamos que noestemos en ambiente de production
if (process.env.NODE_ENV != 'development') {
    //Se carga la configuración archivo .env al process.env
    require('dotenv').config()
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // replace '*' with your domain
    next();
});

app.use(cors({
    origin: ['http://localhost:3000', 'https://frontendshinydesk.vercel.app'],
}));


app.set('port', process.env.PORT || 4000)

//Middlewares 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))



app.use('/api/v1/users', require('./api/v1/router/users.routes'));// 
app.use("/api/v1/treatments", require('./api/v1/router/treatments.routes'));//
app.use("/api/v1/tooth_surfaces", require('./api/v1/router/tooth_surfaces.routes'));
app.use('/api/v1/teeth', require('./api/v1/router/teeth.routes'));//
app.use('/api/v1/supplies', require('./api/v1/router/supplies.routes'));//
app.use('/api/v1/secretaries', require('./api/v1/router/secretaries.routes'));//
app.use('/api/v1/medical_histories', require('./api/v1/router/medical_histories.routes'));
app.use('/api/v1/family_histories', require('./api/v1/router/family_histories.routes'));//
app.use('/api/v1/documents', require('./api/v1/router/documents.routes'));//
app.use('/api/v1/diagnoses', require('./api/v1/router/diagnoses.routes'));
app.use('/api/v1/dentists', require('./api/v1/router/dentists.routes'));//
app.use('/api/v1/conventions', require('./api/v1/router/conventions.routes'));//
app.use('/api/v1/consultation_types', require('./api/v1/router/consultation_types.routes'));//
app.use('/api/v1/appointments', require('./api/v1/router/appointments.routes'));
app.use('/api/v1/patients', require('./api/v1/router/patients.routes'));
app.use('/api/v1/odontograms', require('./api/v1/router/odontogram.routes'));
app.use('/api/v1/upload', require('./api/v1/router/upload.routes'));
app.use('/api/v1/emails', require('./api/v1/router/email.routes'));
app.use('/api/v1/settings', require('./api/v1/router/settings.routes'));
app.use('/api/v1/auth', require('./api/v1/router/auth.routes'));


app.listen(app.get('port'), () => { // correr el servidor
    console.log(`Server running on http://localhost:${app.get('port')}/api/v1`);
})
