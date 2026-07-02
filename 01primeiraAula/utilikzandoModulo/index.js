const fs = require ("fs"); //filesystem

 fs.readFile("texto.txt", "utf-8", (error, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);

 });