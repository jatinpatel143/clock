function time (){
    let datetime = new Date();
    let hrs = datetime.getHours();
    let min  =datetime.getMinutes();
    let sec = datetime.getSeconds();
   let section =document.getElementById("section")
 
    if (hrs>=12) {
        section.innerHTML="PM";  
    } else {
        section.innerHTML="AM"
    }
    document.getElementById("hour").innerHTML =hrs;
    document.getElementById("min").innerHTML =min;
    document.getElementById("sec").innerHTML =sec;
}
setInterval(time,10)