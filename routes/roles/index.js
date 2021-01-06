const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var rolesmodel=sequelize.models.roles;

route.get("/",function(req,res)
{
 rolesmodel.findAll().then( function(roles)
 {
res.send(roles);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id",function(req,res)
{
rolesmodel.findOne(
 {where :{role_id : req.params.id}}).then(function(result)
{
res.send(result);
}).catch(function(err)
{
console.log(err);
})
})

route.post("/",function(req,res)
{
payload={};
payload['role_name']=req.body.role_name;
payload['role_description']=req.body.role_description;

 rolesmodel.create(payload).then(function(result)
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
    rolesmodel.destroy(

    {where:{role_id : req.params.id}}).then(function(result)

    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })

})


exports = module.exports =route;