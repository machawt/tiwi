let cnt=-1;

/* const dictionary = [  
    {"tiwi":"Pi*ka*_*ka*li*ka*li*_*ka*pi*_*ma*ka*ti*nga*.",                             "english":"horse runs to stream",                       "pic":"1.jpg"},
    {"tiwi":"Ma*rri*_*pi*ka*.",                                                         "english":"Kamunga kalikali jiyimi kapi makatinga?",    "pic":"1.jpg"},           
    {"tiwi":"Ka*pi*_*ma*ka*ti*nga*.",                                                    "english":"Pika maka kalikali jiyimi?",   "pic":"1.jpg"},         
    {"tiwi":"Ti*rri*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ta*ka*.",                     "english":"green tree snake ran she did to tree/plant."}, pic":"2.jpg"},
     {"tiwi":"Ma*rri*_*ti*rri*ka*.",                                                     "english":"Kamunga kalikali jiyimi kapi taka?",        "pic":"2.jpg"},           
    {"tiwi":"Ka*pi*_*ta*ka*.",                                                          "english":"Tirrara maka kalikali jiyimi?",              "pic":"2.jpg"},        
    {"tiwi":"Mu*wa*ni*_*ka*li*ka*li*_*yi*mi*_*ka*pi*_*ti*ngi*wi*ni*.",                  "english":"goanna (kawarri) he ran to the (black) man." "pic":"3.jpg"},
    {"tiwi":"Ma*rri*_*mu*wa*ni*.",                                                       "english":"Kamunga kalikali jiyimi kapi tingiwini?",    "pic":"3.jpg"},           
    {"tiwi":"Ka*pi*_*ti*nig*wi*ni*.",                                                     "english":"Muwani maka kalikali jiyimi?",             "pic":"3.jpg"}
    {"tiwi":"Tin*nga*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_nga*rra*-*rri*nga*ni*.",         "english":"the woman ran she did to his? father."},
    {"tiwi":"Pu*la*ngum*wa*ka*_*pa*pi*_*ji*yi*mi*_*ka*pi*_*ma*ka*ti*nga*.",             "english":"dog arrived she did at stream"},
    {"tiwi":"Nin*ki*yi*,*_*pi*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ya*wu*rla*ma*.",    "english":"then horse run she did to bush"}

let txt=["Pi*ka*_*ka*li*ka*li*_*ka*pi*_*ma*ka*ti*nga*.","Ti*rri*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ta*ka*.","mu*wa*ni*_*ka*li*ka*li*_*yi*mi*_*ka*pi*_*ti*ngi*wi*ni*.",
         "Tin*nga*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*nga*rra*-*rri*nga*ni*.",
         "Pu*la*ngum*wa*ka*_*pa*pi*_*ji*yi*mi*_*ka*pi*_*ma*ka*ti*nga*.","Nin*ki*yi*,*_*pi*ka*_*ka*li*ka*li*_*ji*yi*mi*_*ka*pi*_*ya*wu*rla*ma*.",
        "Ngi*ya*_*ngi*-*yi*wu*ni*_*yi*wa*pa*_*mu*wa*ni*.", 
         "Wu*ta*-*yi*pu*nga*_*wa*ya*_*pi*rri*nga*wi*ni*.","Ta*mi*li*_*yi*mi*_*Pa*li*ki*la*_*ka*nga*ta*wa*_*ki*ta*rri*nga*ni*.*"]
         let engs=["horse runs to stream","green tree snake ran she did to tree/plant.","goanna (kawarri) he ran to the (black) man.","the woman ran she did to his? father.",
          "dog  arrived she did at stream","then horse run she did to bush ",
          "My younger brother ate goanna","their older sister has already gone to sleep.","Tamili called Palikila to his female dog."
         ];
*/
function next1(){
let test=document.getElementById("echo");
re= document.getElementById("read");
if(test.innerText===re.innerText){cnt=cnt+1;
    if (cnt>txt.length){cnt=cnt-1;}};
 update();}
                                  
function update(){                                  
clean=txt[cnt].replaceAll('*','');
re.innerText=clean;
let test=document.getElementById("echo");
test.innerText="";
engdiv=document.getElementById("english");
engdiv.innerText=engs[cnt];
keys();}

function keys(){
line1=document.getElementById("key1");
line1.innerHTML="";
myArray = txt[cnt].split("*");
butset = new Set(myArray);
let butArray = Array.from(butset);
butArray.sort();
for (let loop1= 0; loop1< butArray.length; loop1++) 
{ let btn = document.createElement("button");
btn.innerHTML = butArray[loop1];
btn.onclick = function write() {let etext=document.getElementById('echo');
etext.innerHTML = etext.innerHTML+ butArray[loop1];};
btn.classList.add("b");
line1.appendChild(btn);}
};


function fd(){cnt=cnt+1;if (cnt>txt.length){cnt=cnt-1};
update();}
    
function bk1(){ cnt=cnt-1;if (cnt<0){cnt=0};
    update(); }

function hd() {if (re.style.visibility==="visible"){re.style.visibility="hidden";}
else{re.style.visibility="visible";}}

function engvis() {if (engdiv.style.visibility==="visible"){engdiv.style.visibility="hidden";}
else{engdiv.style.visibility="visible";}}

function clr(){let str=document.getElementById("echo");
del= str.innerText.slice(0, -1);
str.innerText=del;}
