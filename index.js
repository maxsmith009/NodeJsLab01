const fs = require('fs');

const createFile = (content) => {
    try {
        fs.writeFile('Lab1-Var9-Zalutski-May5-ne-proveriay-mne-strashno.txt', content.join(' '), (err) => {
            console.log('successfull creation of file');
        });
    }
    catch (err){
        console.log(err);
    }
}

const readFile = ([path, ...args]) => {
    try {
        fs.readFile(path, 'utf8', (err, content) => {
            console.log(content);
        });
    }
    catch (err){
        console.log(err);
    }   
}

const deleteFiles = (files) => {
    try {
        files.forEach((path)=>{
            fs.unlink(path, (err) => {
                console.log('successfull deletion of files');
            });
        });
    }
    catch (err){
        console.log(err);
    }
}

const writeFile = ([path, ...content]) =>{
    try {
        fs.appendFileSync(path, `\n${content.join(' ')}`);
    }
    catch (err){
        console.log(err);
    }
}

if (process.argv.length > 2){
    let [p1, p2, action, ...args] =  process.argv;
    switch (action) {
        case 'create' :
            createFile(args)
            break;
        case "delete":
            deleteFiles(args);
            break;
        case "write":
            writeFile(args)
            break;
        case "read":
            readFile(args)
            break;
        default :
            return;
    }
}