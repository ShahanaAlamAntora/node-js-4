const route=require('express').Router();
var DB = require("../../models/index");
var sequelize=DB.sequelize;
var librarymodel=sequelize.models.library;

route.get("/",function(req,res)
{
 librarymodel.findAll().then( function(library)
 {
res.send(library);
 }).catch(function(err)
 {
 res.send(err)})
})



route.get("/:id", function(req,res)
{
    librarymodel.findOne(

    {where:{library_id: req.params.id}}).then(function(result)
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
payload[' library_user_id'] = req.body. library_user_id;
payload['library_user_department_semester'] = req.body.library_user_department_semestere;
payload['library_user_mobile'] = req.body.library_user_mobile;

librarymodel.create(payload).then(function(result)
{
res.send(result);
}).catch(function(err)
{

console.error(err);
res.send(err);
})
})


exports = module.exports =route;