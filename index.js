var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/',require('./routes').route);


//var usermodel=sequelize.models.user;
//
//var loginmodel=sequelize.models.login;
//
//var rolesmodel=sequelize.models.roles;
//
//var permissionmodel=sequelize.models.permission;
//
//var studentmodel=sequelize.models.student;
//
//var coursemodel=sequelize.models.course;
//
//var registrationmodel=sequelize.models.registration;
//
//var schoolmodel=sequelize.models.school;
//
//
//
//
//app.get("/",function(req,res)
//{
// usermodel.findAll().then( function(user)
// {
//res.send(user);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/login",function(req,res)
//{
// loginmodel.findAll().then( function(login)
// {
//res.send(login);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/roles",function(req,res)
//{
// rolesmodel.findAll().then( function(roles)
// {
//res.send(roles);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/permission",function(req,res)
//{
// permissionmodel.findAll().then( function(permission)
// {
//res.send(permission);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/student",function(req,res)
//{
// studentmodel.findAll().then( function(student)
// {
//res.send(student);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/course",function(req,res)
//{
// coursemodel.findAll().then( function(course)
// {
//res.send(course);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/registration",function(req,res)
//{
// registrationmodel.findAll().then( function(registration)
// {
//res.send(registration);
// }).catch(function(err)
// {
// res.send(err)})
//})
//
//
//app.get("/school",function(req,res)
//{
// schoolmodel.findAll().then( function(school)
// {
//res.send(school);
// }).catch(function(err)
// {
// res.send(err)})
//})




app.listen(3000);
