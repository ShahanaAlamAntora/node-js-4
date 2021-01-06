const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var usermodel=sequelize.models.user;

route.get("/",function(req,res)
{
 usermodel.findAll().then( function(user)
 {
res.send(user);
 }).catch(function(err)
 {
 res.send(err)})
})

exports = module.exports =route;