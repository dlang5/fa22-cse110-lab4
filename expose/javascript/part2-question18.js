function newFunc() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(newFunc,1000);
