const fs = require('fs');

    if (process.argv.length > 2){
        const [p1, p2, path] =  process.argv;

        fs.readdir(path, (err, files)=>{
            if (err) throw err;

            const fileCount = files.length;

            let fileArray = files
                .map((path)=>{
                    let { birthtime } = fs.statSync(path);
                    return {
                        path,
                        birthtime
                    }
                })
                .sort((el1,el2)=>{
                    return el1.birthtime.getTime() - el1.birthtime.getTime();
                });

            const content = `Number of files = ${fileCount} \n${fileArray.map((el) => {return el.path;}).join('\n')}`;

            fs.writeFile(`${path}stats.txt`, content, (err) => {
                if (err) throw err;
            });
        })
    }