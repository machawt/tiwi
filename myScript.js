let syl="no";cnt=-1
let etext="document.getElementById('echo')"
let  re= "document.getElementById('read')"
let txt=["Pika_kalikali_kapi_makatinga.","Pulangumwaka_papi_jiyimi_kapi_makatinga.","Ninkiyi,_pika_kalikali_jiyimi_kapi_yawurlama."]
let i1=["pika.jpg","pulangumwaka.jpg","pulangumwaka.jpg","yawurlama.jpg"]
let i2=["makatinga.jpg","",""]
let k1=["ka","ma","nga"]
let k2=["li","pi","Pi","ti"]
let k3=["_",".",","];

function keys(){
line1=document.getElementById("key1");
for (let loop1= 0; loop1< k1.length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = k1[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');etext.innerHTML = etext.innerHTML+ k1[loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}

line1=document.getElementById("key2");
for (let loop1= 0; loop1< k2.length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = k2[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');etext.innerHTML = etext.innerHTML+ k2[loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}


line1=document.getElementById("key3");
for (let loop1= 0; loop1< k3.length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = k3[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');etext.innerHTML = etext.innerHTML+ k3[loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}
}
function next1() {var test=document.getElementById("echo");re= document.getElementById("read");if(test.innerText===re.innerText){cnt=cnt+1;
re.innerText=txt[cnt];
document.getElementById("im1").src=i1[cnt];
document.getElementById("im2").src=i2[cnt]}
keys();}
function back1() {var re= document.getElementById("read");cnt=cnt-1;
re.innerText=txt[cnt];
document.getElementById("im1").src=i1[cnt];document.getElementById("im2").src=i2[cnt]
}

//function ReplacingImage(){ document.getElementById("i1").src="image2.png" 
//} 
