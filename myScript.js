var syl="no";

function cma(syl) {var etext=document.getElementById("echo");
etext.innerHTML = etext.innerHTML+syl;}

function next() {var test=document.getElementById("echo");re= document.getElementById("read");
if(test.innerText===re.innerText){window.location.href = "p2.html";}}



