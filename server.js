const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
// create express app
const app = express();

app.use(cors())
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require setting routes
const settingRoutes = require('./src/routes/setting.routes')
const adminRoutes = require('./src/routes/admin.routes')
const positionRoutes = require('./src/routes/position.routes')

const userRoutes = require('./src/routes/user.routes')

const welcomeRoutes = require('./src/routes/welcome.routes')
const contactRoutes = require('./src/routes/contact.routes')
const employmentRoutes = require('./src/routes/employment.routes')

const medicalRoutes = require('./src/routes/medical.routes')

const formRoutes = require('./src/routes/form.routes')

const signatureRoutes = require('./src/routes/signature.routes')
const depositRoutes = require('./src/routes/deposit.routes')

const criminalRoutes = require('./src/routes/criminal.routes')

const drugAndAlcoholRoutes = require('./src/routes/drug.routes')

const citizenshipRoutes = require('./src/routes/citizenship.routes')

const drivingExperienceRoute = require('./src/routes/driving.routes')

const licenseRoutes = require('./src/routes/license.routes')

const accidentRoutes = require('./src/routes/accident.routes')
const accidentRoutes2 = require('./src/routes/accident2.routes')

const certificationRoutes = require('./src/routes/certification.routes')

const licenseRoutes2 = require('./src/routes/license2.routes')

// using as middleware
app.use('/api/v1/settings', settingRoutes)
app.use('/api/v1/settings/position', positionRoutes)

app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/user', userRoutes)

app.use('/api/v1/welcome', welcomeRoutes)
app.use('/api/v1/contact', contactRoutes)
app.use('/api/v1/employment', employmentRoutes)

app.use('/api/v1/medical', medicalRoutes)
app.use('/api/v1/signature', signatureRoutes)
app.use('/api/v1/deposit', depositRoutes)

app.use('/api/v1/criminal-background', criminalRoutes)
app.use('/api/v1/drug-and-alcohol', drugAndAlcoholRoutes)

app.use('/api/v1/citizenship', citizenshipRoutes)

app.use('/api/v1/driving-experience', drivingExperienceRoute)

app.use('/api/v1/license', licenseRoutes)
app.use('/api/v1/accident', accidentRoutes)
app.use('/api/v1/accident2', accidentRoutes2)

app.use('/api/v1/license2', licenseRoutes2)

app.use('/api/v1/certification', certificationRoutes)


app.use('/api/v1/form', formRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});