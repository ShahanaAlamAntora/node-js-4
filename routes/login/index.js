const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var loginmodel=sequelize.models.login;

route.get("/",function(req,res)
{
 loginmodel.findAll().then( function(login)
 {
res.send(login);
 }).catch(function(err)
 {
 res.send(err)})
})



route.get("/:id", function(req,res)
{
    loginmodel.findOne(

    {where:{login_id: req.params.id}}).then(function(result)
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
payload['login_role_id'] = req.body.login_role_id;
payload['login_username'] = req.body.login_username;
payload['user_password'] = req.body.user_password;

loginmodel.create(payload).then(function(result)
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
    loginmodel.destroy(

    {where:{login_id: req.params.id}}).then(function(result)

    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })

})


exports = module.exports =route;