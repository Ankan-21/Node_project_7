const express=require('express')

const Route=express.Router()
const PopulateController=require('../controller/PopulateController')

Route.post('/author',PopulateController.create)
Route.get('/author/all',PopulateController.alldata)

//*******post route */
Route.post('/post',PopulateController.store)
Route.get('/post/all',PopulateController.allpost)


//******get both collection data using pupulate . and you can use lookup */

Route.get('/all',PopulateController.all)



module.exports=Route















