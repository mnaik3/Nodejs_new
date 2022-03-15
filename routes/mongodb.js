
var express = require('express');

var mongodb = require('mongodb');

var router = express.Router();



/* GET home page.

router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });

});

*/

module.exports = router;





//**************************************************************************

//***** mongodb get all of the Routes in Routes collection where frequence>=1

//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs

router.get('/', function (request, response) {



    // mongodb.MongoClient.connect('mongodb+srv://manish:Qwertyuiop1@cluster0.wlhxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(err, client) {
    mongodb.MongoClient.connect('mongodb+srv://mmn_12345:owz9ctv1rZaSfngY@cluster0.jpovp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(err, client) {

        // mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, db) {  // works with mongodb v2 but not v3

        if(err) throw err;

        //get collection of routes

        var db = client.db('Node_js_exp');  // in v3 we need to get the db from the client
        
        var Routes = db.collection('Test');

        //get all Routes with frequency >=1

        Routes.find({ year : { $gte: 10 } }).sort({ year: 1 }).toArray(function (err, docs) {

            if(err) throw err;



            response.render('mongodb', {results: docs});



        });



        //close connection when your app is terminating.

        // db.close(function (err) {

        client.close(function (err) {

            if(err) throw err;

        });

    });//end of connect

});//end app.get