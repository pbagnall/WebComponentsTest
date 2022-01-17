import {execSync} from 'child_process';
import fsextra from 'fs-extra';

// clean up
fsextra.removeSync("public");
let cwd = process.cwd();

// copy web-component version into public
process.chdir("web-component");
fsextra.copySync("./", "../public/webcomponent");
process.chdir(cwd);
fsextra.copySync("index.html", "public/index.html");

// build react version and deploy into public
{
   process.chdir("react-app");
   execSync("yarn install");
   let result = execSync("yarn build");
   fsextra.moveSync("build", "../public/react");
   console.log(result.toString());
   process.chdir(cwd);
}

// build react version and deploy into public
{
   process.chdir("angular-app");
   execSync("npm ci");
   let result = execSync("ng build");
   fsextra.moveSync("build", "../public/angular");
   console.log(result.toString());
   process.chdir(cwd);
}