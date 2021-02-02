const fs=require("fs");
fs.writeFileSync("read.txt","hello friends");
fs.appendFileSync("read.txt","hello friend welcome");

const buf_data=fs.readFileSync("read.txt");


console.log(buf_data.toString());

// asynchronously creating folder and file--------------

// fs.mkdirSync("nfolder");
// fs.writeFile("nfolder/newfile.txt","hey brother",(err)=>{
//     console.log("file created");

// });

fs.renameSync("updatedread.txt","read.txt");
