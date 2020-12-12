var createError = require('http-errors');
var express = require('express');
var path = require('path');
const env = require('dotenv').config();
var Model = require("./models");
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appointmentRouter = require('./routes/appointment');
var serviceRouter = require('./routes/service');
var staffsRouter = require('./routes/doctor');
var patientsRouter = require('./routes/patient');


var app = express();
app.use(cors());
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

Model.sequelize.sync();
app.use('/', indexRouter);
app.use('/User', usersRouter);
app.use('/Patient', patientsRouter);
app.use('/Doctor', staffsRouter);
app.use('/Appointment', appointmentRouter);
app.use('/Service', serviceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
module.exports = app;