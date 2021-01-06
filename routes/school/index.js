const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var schoolmodel=sequelize.models.school;

route.get("/",function(req,res)
{
 schoolmodel.findAll().then( function(school)
 {
res.send(school);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id", function(req,res)
{
    schoolmodel.findOne(

    {where:{school_id: req.params.id}}).then(function(result)
    {
    res.send(result);
    }).catch(function(error)
    {
    console.log(err);

    })
 })

route.post("/", function(req,res)
{

payload = {};
payload['school_name'] = req.body.school_name;
payload['school_type'] = req.body.school_type;
payload['school_description'] = req.body.school_description;
payload['school_address'] = req.body.school_address;

schoolmodel.create(payload).then(function(result)
{
res.send(result);
}).catch(function(err)
{

console.error(err);
res.send(err);
})
})


exports = module.exports =route;