let syl="no";cnt=-1
let etext="document.getElementById('echo')"
let  re= "document.getElementById('read')"
let txt=["Pika_kalikali_kapi_makatinga.","Pulangumwaka_papi_jiyimi_kapi_makatinga.","Ninkiyi,_pika_kalikali_jiyimi_kapi_yawurlama."]
let i1=["pika.jpg","pulangumwaka.jpg","pulangumwaka.jpg","yawurlama.jpg"]
let i2=["makatinga.jpg","",""]
let k1=[["ka","ma","nga"],["ka","la","ma","nga","pa","wa"],["ka","rla","ma","nga","pa","wa"]]
let k2=[["li","pi","Pi","ti"], ["ji","mi","pi","ti","yi"],["Nin", "ki","ji","mi","pi","ti","yi"]]
let k3=[["_",".",","],["ngu","Pu","_",".",","],["wu","_",".",","]]

function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
for (let loop1= 0; loop1< k1[cnt].length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = k1[cnt][loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');etext.innerHTML = etext.innerHTML+ k1[cnt][loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}

line1=document.getElementById("key2");
line1.innerHTML="";
for (let loop1= 0; loop1< k2[cnt].length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = k2[cnt][loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');etext.innerHTML = etext.innerHTML+ k2[cnt][loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}


line1=document.getElementById("key3");
line1.innerHTML="";
for (let loop1= 0; loop1< k3[cnt].length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = k3[cnt][loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');etext.innerHTML = etext.innerHTML+ k3[cnt][loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}
}
function next1() {var test=document.getElementById("echo");re= document.getElementById("read");if(test.innerText===re.innerText){cnt=cnt+1;
re.innerText=txt[cnt];
test.innerText="";
document.getElementById("im1").src=i1[cnt];
document.getElementById("im2").src=i2[cnt]}
keys();
}
function back1() {var re= document.getElementById("read");cnt=cnt-1;
if (cnt<0){cnt=0;}
keys();
re.innerText=txt[cnt];
document.getElementById("im1").src=i1[cnt];document.getElementById("im2").src=i2[cnt]
}
//function hde (){re= document.getElementById("read");if(re.style.visibility==='hidden'){re.style.visibility='visible';}
//else{re.style.visibility="hidden";}
function clr(){
let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;
}
//function ReplacingImage(){ document.getElementById("i1").src="image2.png" 
//} 
