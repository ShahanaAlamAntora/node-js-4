const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var studentmodel=sequelize.models.student;

route.get("/",function(req,res)
{
 studentmodel.findAll().then( function(student)
 {
res.send(student);
 }).catch(function(err)
 {
 res.send(err)})
})
route.get("/:id",function(req,res)
{
studentmodel.findOne(
 {where :{stu_id : req.params.id}}).then(function(result)
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
payload['stu_name']=req.body.stu_name;
payload['stu_mobile']=req.body.stu_mobile;
payload['stu_address']=req.body.stu_address;
payload['stu_email']=req.body.stu_email;
payload['stu_pass']=req.body.stu_pass;
 studentmodel.create(payload).then(function(result)
{
res.send(result);

}).catch(function(err)
{
console.error(err);
res.send(err);
})

})
route.get("/email/:email",function(req,res)
{
studentmodel.findAll({
where:{ stu_email:req.params.email }}).then(function(result)
{
res.send(result);
}).catch(function(err)
{
console.log(err);
})
})

exports = module.exports =route;