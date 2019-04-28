const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const javascriptBarcodeReader = require('javascript-barcode-reader')
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/book";

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))

var fs = require('fs');
var busboy = require('connect-busboy');
//...
app.use(busboy()); 
//...

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}



app.post('/fileupload', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        // console.log("Uploading: " + filename); 
        fstream = fs.createWriteStream(__dirname + '/files/' + 'temp.jpg');
        file.pipe(fstream);
        fstream.on('close', function () {
            var img = base64_encode(__dirname + '/files/' + 'temp.jpg')
            // console.log(img)
            res.send(img)
        });
    });
    res.status(200)
});

app.post('/barcode', function(req, res) {
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
       console.log("Uploading: " + filename); 
      fstream = fs.createWriteStream(__dirname + '/files/' + 'code.jpg');
      file.pipe(fstream);
      fstream.on('close', function () {
        javascriptBarcodeReader(
          __dirname + '/files/' + 'code.jpg' /* Image file Path || {data: pixelArray, width, height} || HTML5 Canvas ImageData */,
          {
            barcode: 'EAN-13',
            type: 'industrial', //optional type
          }
        )
          .then(code => {
            // console.log(code)
            var n = '9'+code.toString();
            // console.log(n)
            res.send(n)

          })
          .catch(err => {
            console.log(err)
          })  
          // console.log(img)
      });
  });
  res.status(200)
});

app.post('/test', (req, res) => {
    console.log('test')
    console.log(req)
    res.send('ok')
})

app.get('/users', (req,res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("amibook");
        dbo.collection("users").find({}).toArray(function(err, result) {
          if (err) throw err;
        //   console.log(result);
        console.log('getUser')
          res.send(result)
          db.close();
        });
      });
})

app.post('/save',(req,res) => {
    // console.log(req.body)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("amibook");
        dbo.collection("book").insertOne(req.body, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });

    res.send('ok')
})

app.post('/search',(req,res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("amibook");
        dbo.collection("book").find({}).toArray(function(err, result) {
          if (err) throw err;
          dbo.collection("group").find({}).toArray(function(err, result2) {
            if (err) throw err;
              // console.log(result)
              // console.log(result2)
              var list = []
              for(var i=0; i<result.length; i++){
                if(result[i]['getCode'] == req.body.code && result[i]['id'] == req.body.id){
                  console.log(result[i])
                  list.push(result[i])
                  console.log(list)
                }
              }
              var book = result.filter(x => x.getCode === req.body.code)
              if(book.length > 0){
                var mygroup = result2.filter(x => x.id === req.body.id)
                for(var i=0; i<book.length; i++){
                    var bookgroup = result2.filter(x => x.id === book[i].id)
                    var check = false
                    for(var j=0; j<mygroup.length;j++){
                      for(var k=0; k<bookgroup.length;k++){
                        if(mygroup[j].group==bookgroup[k].group && bookgroup[k].id!= req.body.id){
                          book[i].group = mygroup[j].group
                          check = true
                          break
                        }
                      }
                    }
                    if(check == true){
                      list.push(book[i])
                    }
                }
              }
              console.log(".................")
              console.log(list)
            res.send(list)
            db.close();
          });
        db.close();
        });
    });
})

app.post('/contact',(req,res) => {
  console.log(req.body)
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("amibook");
      dbo.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
      // console.log(req.body)
      lst=[]
      for(var i=0; i<result.length; i++){
          if(result[i]['id'] == req.body){
            // console.log(result[i])
            lst.push(result[i])
            console.log(lst)
          }
      }
      res.send(lst)
      db.close();
      });
  });
})

app.post('/addg',(req,res) => {
  console.log(req.body)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("amibook");
    dbo.collection("group").insertOne(req.body, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
res.send('ok')
})

app.post('/getg',(req,res) => {
  console.log(req.body.id)
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("amibook");
      dbo.collection("group").find({}).toArray(function(err, result) {
        if (err) throw err;
      console.log(result[0])
      lst=[]
      for(var i=0; i<result.length; i++){
          if(result[i]['id'] == req.body.id){
            // console.log(result[i])
            lst.push(result[i])
            console.log(lst)
          }
      }
      res.send(lst)
      db.close();
      });
  });
})

app.post('/removeg',(req,res) => {
  console.log(req.body.id)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("amibook");
    var myquery = { id:req.body.id, group:req.body.group };
    dbo.collection("group").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  }); 
});

app.post('/yourbook',(req,res) => {
  console.log(req.body.id)
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("amibook");
      dbo.collection("book").find({}).toArray(function(err, result) {
          if (err) throw err;  
        // console.log(req.body)
        lst=[]
        for(var i=0; i<result.length; i++){
            if(result[i]['id'] == req.body.id){
              // console.log(result[i])
              lst.push(result[i])
              console.log(lst)
            }
        }
        res.send(lst)
        db.close();
      });
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))