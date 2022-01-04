import {execSync} from 'child_process';

let script = [
    {
        "dir": "react-app",
        "command": "yarn build"
    },
    {
        "dir": "angular-app",
        "command": "ng build"
    }        
];

let cwd = process.cwd();
script.forEach((example) => {
    process.chdir(example.dir);
    let result = execSync(example.command);
    console.log(result.toString());
    process.chdir(cwd);
}); 
