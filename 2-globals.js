//Global - No Window!!!(so no access to browser api like, DOM and many other)


//__dirname  - path to current directory. If we console.log(__dirname)--> o/p : C:\Users\DELL\Desktop\Node Js\Practice1;
//__filename - file name
//require    - function to use modules(common JS)
//module     - info about the current module
//process    - info about env where the program is being executed

console.log(__dirname);

setInterval(()=>{
    console.log("Hello")
},1000)     