const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var permissionmodel=sequelize.models.permission;

route.get("/",function(req,res)
{
 permissionmodel.findAll().then( function(permission)
 {
res.send(permission);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id", function(req,res)
{
    permissionmodel.findOne(

    {where:{permission_id: req.params.id}}).then(function(result)
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
payload['per_role_id'] = req.body.per_role_id;
payload['per_module'] = req.body.per_module;
payload['per_name'] = req.body.per_name;


permissionmodel.create(payload).then(function(result)
{
res.send(result);
}).catch(function(err)
{

console.error(err);
res.send(err);
})
})



route.delete("/:id", function(req,res)
{
    permissionmodel.destroy(

    {where:{permission_id: req.params.id}}).then(function(result)

    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })

})



exports = module.exports =route;