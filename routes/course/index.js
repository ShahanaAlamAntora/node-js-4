const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var coursemodel=sequelize.models.course;

route.get("/",function(req,res)
{
 coursemodel.findAll().then( function(course)
 {
res.send(course);
 }).catch(function(err)
 {
 res.send(err)})
})

route.get("/:id", function(req,res)
{
    coursemodel.findOne(

    {where:{course_id: req.params.id}}).then(function(result)
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
payload['course_name'] = req.body.course_name;
payload['course_student_id'] = req.body.course_student_id;
payload['course_type'] = req.body.course_type;
payload['course_description'] = req.body.course_description;

coursemodel.create(payload).then(function(result)
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
    coursemodel.destroy(

    {where:{course_id: req.params.id}}).then(function(result)
    {
    res.sendStatus(301);

    }).catch(function(err)
    {
    console.log(err);

    })
 })



exports = module.exports =route;