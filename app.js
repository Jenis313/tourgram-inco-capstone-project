const express = require('express');
const path = require('path')
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');

// DB connection 
require('./db_init');

// loade routes
// const mainRoute = require('./routes/index');

// Dev Tool
var logger = require('morgan');
app.use(logger('dev'));

// view engine setup
app.set('view engine', 'ejs');

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// user cookie parser 
app.use(cookieParser());

//serve static files
app.use(express.static('public'));

// Routes
// app.use('/', mainRoute);
app.use('/', (req, res, next) => {
    res.json({
        msg: 'Hi there'
    })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next({
    msg: 'Page not found',
    status: 404
  });
});
// error handler middleware
app.use(function(err, req, res, next) {
  console.log('ERROR Handling middleware in execution!!! --> ', err);

  res.status(err.status || 500);
  // res.json({
  //   msg: err.msg || err,
  //   status: err.status || 404
  // })

  // render the error page
  res.render('./pages/error', {
    msg: err.msg || err,
    status: err.status,
    currentUser: req.currentUser
  });
});

app.listen(PORT, (err) => {
    if(err){
        console.log('Error in LISTEN');
        return
    }
console.log(`App is listening at http://localhost:${PORT}`);
})