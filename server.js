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


const formRoutes = require('./src/routes/form.routes')

// using as middleware
app.use('/api/v1/settings', settingRoutes)
app.use('/api/v1/settings/position', positionRoutes)

app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/user', userRoutes)

app.use('/api/v1/welcome', welcomeRoutes)
app.use('/api/v1/form', formRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});