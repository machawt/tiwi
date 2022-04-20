let syl="no";cnt=-1;
let etext=document.getElementById('echo');
let  re= document.getElementById('read');
let test=document.getElementById("echo");
let engdiv=document.getElementById("english");

let txt=["Pi*ka*_*ka*li*ka*li*_*ka*pi*_*ma*ka*ti*nga*.","Ti*rri*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ta*ka*.","Pu*la*ngum*wa*ka*_*pa*pi*_*ji*yi*mi*_*ka*pi*_*ma*ka*ti*nga*.","Nin*ki*yi*,*_*pi*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ya*wu*rla*ma*."];
let engs=["horse runs to stream","snake ran she did on branch?","dog  arrived she did at stream","then horse run she did to bush "];

function next1(){
//let test=document.getElementById("echo");
//re= document.getElementById("read");
if(test.innerText===re.innerText){cnt=cnt+1;
    if (cnt>txt.length){cnt=cnt-1;}};
 update();}
                                  
function update(){                                  
clean=txt[cnt].replaceAll('*','');
re.innerText=clean;
test.innerText="";
//engdiv=document.getElementById("english");
//engdiv.innerText=engs[cnt];
keys();
}


function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
myArray = txt[cnt].split("*");
butset = new Set(myArray);
let butArray = Array.from(butset);
butArray.sort();
for (let loop1= 0; loop1< butArray.length; loop1++) 
{ 
let btn = document.createElement("button");
btn.innerHTML = butArray[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');
etext.innerHTML = etext.innerHTML+ butArray[loop1];};
btn.classList.add("b");
line1.appendChild(btn);
}};


function fd(){ 
   // test=document.getElementById("echo");
    //re= document.getElementById("read");
    cnt=cnt+1;if (cnt>txt.length){cnt=cnt-1};
    //clean=txt[cnt].replaceAll('*','');
    //re.innerText=clean;
    //test.innerText="";
    //engdiv=document.getElementById("english")
    //engdiv.innerText=engs[cnt];
update();
    //keys();
    }
    
function bk1(){ 
   // test=document.getElementById("echo");
   // re= document.getElementById("read");
    cnt=cnt-1;if (cnt<0){cnt=0};
   // clean=txt[cnt].replaceAll('*','');
    //re.innerText=clean;
   // test.innerText="";
    //engdiv=document.getElementById("english")
    //engdiv.innerText=engs[cnt];
   // keys();
    update();
    }

function hd() {if (re.style.visibility==="visible"){re.style.visibility="hidden";}
else{re.style.visibility="visible";}}

function engvis() {if (engdiv.style.visibility==="visible"){engdiv.style.visibility="hidden";}
else{engdiv.style.visibility="visible";}}


function clr(){
let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;
}
