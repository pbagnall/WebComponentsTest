import {execSync} from 'child_process';

let script = [
    {
        "dir": "react-app",
        "command": "npm run build"
    },
    {
        "dir": "../angular-app",
        "command": "ng build"
    }        
];

script.forEach((example) => {
    process.chdir(example.dir);
    let result = execSync(example.command);
    console.log(result.toString());
}); 
