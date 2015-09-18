'use strict';
var fs = require('fs');
var superString = require("./superString");



var arr = [];
process.argv.forEach(function(val, index, array) {
    //console.log(index + ': ' + val);
    arr[index] = val;
});


//fs.open(path, flags, [mode], callback)
//flag : r,r+,w,w+,a,a+


//fs.open('demo.html','r', function (err, fd) {
//    if(err) {
//       return console.log(err);
//    }
//    fs.close(fd);
//});

//fs.read(fd, buffer, offset, length, position, callback)

//fs.readFile(path, [options], callback)

//fs.createReadStream(path, [options])

//fs.readFile('demo.html', function (err,result) {
//    if(err) {
//        return console.log(err);
//    }
//    console.log(result);
//});

 // data

//var data = {
//    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
//    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
//};


var arrlocalKey = [];

function countKey(key, text){
   // console.log(text);
    var item1  = text.indexOf(key);
  //  console.log(item1);
    return "nhan dc data "+ key;
}

fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
    if(err) {
        return console.log(err);
    }
    var analyzeText = result;
    var key = arr[2];
    // lấy ra vị trí của tất cả các key word trong file
    var arrLocalKey = superString.checkWordLocal(analyzeText,key);

    console.log(superString.replaceWord(analyzeText,"Node",23,"toi thay doi "));


  //  var test = countKey(arr[2],analyzeText);

   // console.log(test ," ++++");
   // console.log(arr[2],"====   " + arr[3] );

    // ghi kết quả ra ngoài
    //fs.writeFile('demo2.html',analyzeText, function (err) {
    //    if(err){
    //        return console.log(err);
    //    }
    //    console.log('done');
    //});
});

//fs.write(fd, buffer, offset, length, position, callback)

//fs.writeFile(path, data, [options], callback)

//fs.appendFile(path, data, [options], callback)

//fs.createWriteStream(path, [options])

//fs.writeFile('demo2.html',data, function (err) {
//    if(err){
//            return console.log(err);
//        }
//        console.log('done');
//});



//
//fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
//    if(err) {
//        return console.log(err);
//    }
//    fs.writeFile('demo2.html',result, function (err) {
//        if(err){
//            return console.log(err);
//        }
//        console.log('done');
//    })
//});
