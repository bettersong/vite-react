# vite-react

基于vite构建的react多项目应用
项目结构
```
apps
├── jisu(极速)
│   ├── activity(活动)
│   │   ├── test(活动项目)
│   │   │   ├── App.css
│   │   │   ├── App.jsx
│   │   │   ├── index.html
│   │   │   └── main.jsx
│   │   └── test2(活动项目)
│   └── hybrid（native）
└── main(主版)
    ├── activity
    │   ├── testmain
    │   │   ├── App.css
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   ├── index.html
    │   │   └── main.jsx
    │   └── testmain2
    │       ├── App.css
    │       ├── App.jsx
    │       ├── index.css
    │       ├── index.html
    │       └── main.jsx
    └── hybrid
```
每一个project对应一个独立的项目，单独构建，单独打包，在同一个项目中维护，适用于ToC端的应用

###### 主要构建脚本在build文件夹下
##### 启动命令
``` npm start [appName] [project] [projectName]
eg: npm start jisu activity test
这样就是启动了极速下面的活动的test项目
```
##### 打包命令
待更新

