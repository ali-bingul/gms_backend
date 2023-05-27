const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const bodyParser = require("body-parser");

const app = express();
app.disable("x-powered-by");

const db = require('./db/databasepg');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');
const projectRouter = require('./routes/projectRouter');
const projectSectionRouter = require('./routes/projectSectionRouter');
const projectDocumentRouter = require('./routes/projectDocumentRouter');
const lessonRouter = require('./routes/lessonRouter');

// database connection
try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// middleware
app.use(cors());
app.use(express.static('./public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/project', projectRouter);
app.use('/projectSection', projectSectionRouter);
app.use('/projectDocument', projectDocumentRouter);
app.use('/lesson', lessonRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
