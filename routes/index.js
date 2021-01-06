const route=require('express').Router();

route.use('/course',require('./course'));

route.use('/user',require('./user'));

route.use('/student',require('./student'));

route.use('/school',require('./school'));

route.use('/roles',require('./roles'));

route.use('/registration',require('./registration'));
route.use('/permission',require('./permission'));
route.use('/login',require('./login'));

route.use('/adminnew',require('./adminnew'));
route.use('/librarynew',require('./librarynew'));






exports=module.exports={route}


