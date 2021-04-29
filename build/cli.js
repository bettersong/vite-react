const shell = require("shelljs");
const path = require("path");
// const { fstat } = require("fs");
const fs = require("fs");

const arg = process.argv.slice(2);
const action = arg[0];
const appName = arg[1];
const projectName = arg[2];
(async () => {
  console.log(arg)
  if(!appName) throw new Error("APP_NAME 不能缺少⚠️")
  // 启动
  if (action === 'start') {
    runTask(appName,projectName)
  }
  
})();
function getProject(path){
  return new Promise((res,rej)=>{
    fs.stat(path,(err,status)=>{
      if(err){
        res(err)
      }else{
        res(status)
      }
    })
  })
}
// 检测项目
// async function checkTask(path){
//   const res = await getProject(path)
//   console.log('[res]',res)
//   if(res.errno<0){
//     throw new Error("没有找到启动的项目😭")
//   }
// }
//启动项目
async function runTask(appName,projectName){
  const cmds = []
  // console.log(appName,path.resolve(__dirname,`../apps/${appName}/${projectName}`));
  const runProPath = path.resolve(__dirname,`../apps/${appName}/${projectName}`)
  // 检测项目是否存在
  const res = await getProject(runProPath);
  if(res.errno<0){
    throw new Error("没有找到可启动的项目😭")
  }else{
    //
    cmds.push(`vite serve ${runProPath}/test`)
  }
  const cmd = cmds.join(" && ");
  const { code } = shell.exec(cmd);
  return code;
}
