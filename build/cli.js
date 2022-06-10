const shell = require("shelljs");
const path = require("path");
// const { fstat } = require("fs");
const fs = require("fs");


// console.log(process.argv,'sss')
const action = process.argv[2];
const arg = process.argv.slice(3);
const appName = arg[0];
const startPath = arg.join("/");

(async () => {
  if(!appName) throw new Error("APP_NAME 不能缺少⚠️")
  // 启动
  if (action === 'start') {
    runTask(appName)
  }
  
})();

function getProject(path){
  return new Promise((resolve,rej)=>{
    fs.stat(path,(err,status)=>{
      if(err){
        resolve(err)
      }else{
        resolve(status)
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
async function runTask(appName){
  const cmds = []
  console.log( `【启动项目】${appName}`);
  

  const runProPath = path.resolve(__dirname,`../apps/${startPath}`)
  // 检测项目是否存在,项目下必须包含index.html入口文件
  const res = await getProject(runProPath+'/index.html');
  if(res.errno < 0){
    throw new Error("没有找到可启动的项目😭")
  }else{
    //
    cmds.push(`vite serve ${runProPath}`)
  }
  const cmd = cmds.join(" && ");
  console.log(cmd,'1234')
  const { code } = shell.exec(cmd);
  return code;
}
