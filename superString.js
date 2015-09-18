
"use strick";

module.exports.invert = function(data){
    var itemIvert = "";
    for (i in data) {
        itemIvert = data[i] + itemIvert;
    }

    console.log(itemIvert);
};

module.exports.camelCase = function(data){
    var itemcamelCase = "";
    var check = true;

    for (i in data) {

        if(check && data[i] != " ") {
            itemcamelCase =  itemcamelCase + data[i].toUpperCase();
            check = false;
        } else {
            itemcamelCase = itemcamelCase + data[i];
        }

        if(data[i] == " "){
            check = true;
        }
    }
    console.log(itemcamelCase);
};



module.exports.longestWord = function(data){
    var itemWord = "";
    var itemLongestWord = "";
    data = data + " ";
    for (i in data ) {
        //console.log(i);
        if(data[i] == " "){
            if(itemWord.length >= itemLongestWord.length){
                itemLongestWord = itemWord;
            }
            itemWord = "";
        }else {
            itemWord = itemWord + data[i];
        }
    }
    console.log(itemLongestWord);
};


module.exports.checkWordLocal = function(data,key){
    var arrLocalWord = [];
    var itemWord = "";
    data = data + " ";
    for (i in data ) {
        //console.log(i);
        if(data[i] == " "){
            if(itemWord == key){
                arrLocalWord.push({local:i});
            }
            itemWord = "";
        }else {
            itemWord = itemWord + data[i];
        }
    }
   return arrLocalWord;
};

module.exports.replaceWord = function(data,key,localKey,keyReplace){
    var fakeData = "";
    for (var i = 0; i <= localKey - key.length - 1; i++){
        fakeData = fakeData + data[i];
    }
    fakeData = fakeData + keyReplace;
    for (var j = localKey; j < data.length; j++){
        fakeData = fakeData + data[j];
    }
    return fakeData;
};