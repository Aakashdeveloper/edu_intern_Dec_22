let fs = require('fs');

//write file
// fs.writeFile('myText.txt',"My Test File",function(){
//     console.log("File Created")
// })

// add in file
// fs.appendFile('myCode.txt',"My Test File 1 \n",function(){
//     console.log("File Created")
// })

//readfile
// fs.readFile('myCode.txt','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })

// // Rename
// fs.rename('myCode1.txt','myCode2.txt',function(err){
//     if(err) throw err;
//     console.log('File renamed')
// })

// Delete file
fs.unlink('myCode1.txt',function(err){
    if(err) throw err;
    console.log('File Deleted')
})