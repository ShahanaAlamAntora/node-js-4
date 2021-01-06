const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var adminnewmodel=sequelize.models.adminnew;

route.get("/",function(req,res)
{
 adminnewmodel.findAll().then( function(adminnew)
 {
res.send(adminnew);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id", function(req,res)
{
    adminnewmodel.findOne(

    {where:{admin_id: req.params.id}}).then(function(result)
    {
    res.send(result);
    }).catch(function(err)
    {
    console.log(err);

    })
 })

route.post("/", function(req,res)
{

payload = {};
payload['admin_name'] = req.body.admin_name;
payload['admin_login_name'] = req.body.admin_login_name;
payload['admin_password'] = req.body.admin_password;

adminnewmodel.create(payload).then(function(result)
{
res.send(result);
}).catch(function(err)
{

console.error(err);
res.send(err);
})
})



exports = module.exports =route;