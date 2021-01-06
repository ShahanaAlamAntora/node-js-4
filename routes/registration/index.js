const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var registrationmodel=sequelize.models.registration;

route.get("/",function(req,res)
{
 registrationmodel.findAll().then( function(registration)
 {
res.send(registration);
 }).catch(function(err)
 {
 res.send(err)})
})

route.delete("/:id", function(req,res)
{
    registrationmodel.destroy(

    {where:{registration_id: req.params.id}}).then(function(result)

    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })

})




exports = module.exports =route;