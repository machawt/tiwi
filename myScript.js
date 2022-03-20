var syl="no";cnt=-1
let txt=["Pika kalikali kapi makatinga.","Kamunga kalikali jiyima kapi makatinga? Marri Pika.","Pika maka kalikali jiyima? Kapi makatinga.",
         "Pulangumwaka papi jiyimi kapi makatinga.","Ninkiyi, pika kalikali jiyimi kapi yawurlama.",
         "Pulangumwaka kalikali jiyimi kapi yawurlama.","Ninkiyi, Palikila papi yimi kapi makatinga."
,"Maka jiyimi pulangawaka? yimi Palikila.","Ninkiyi, Mikirrami papi yimi kapi makatinga.",
         "Maka jiyimi pulangawaka? yimi Mikirrami.","Arrimi kapi yawurlama, yimi Palikila.",
         "Ninkiyi, Mikirrami kali yimi kapi yawurlama.",
        ]
let i1=["pika.jpg","pika.jpg",,"makatinga.jpg","pulangumwaka.jpg","pulangumwaka.jpg","yawurlama.jpg","yawurlama.jpg"
       "pali.jpg","pali.jpg","miki.jpg","miki.jpg","pali.jpg","yawrulama.jpg"]
let i2=["makatinga.jpg","","","","","","","","","","",""]
function cma(syl) {var etext=document.getElementById("echo");
etext.innerHTML = etext.innerHTML+syl;}
function clr()  {var etext=document.getElementById("echo");
etext.innerHTML = "";}
//function hd() {var re= document.getElementById("read");if(re.hidden===True){re.hidden=False;};
//else{re.hidden=True;}}


function next1() {var test=document.getElementById("echo");re= document.getElementById("read");if(test.innerText===re.innerText){cnt=cnt+1;
re.innerText=txt[cnt];
document.getElementById("im1").src=i1[cnt];
document.getElementById("im2").src=i2[cnt]}}

function back1() {var re= document.getElementById("read");cnt=cnt-1;
re.innerText=txt[cnt];
document.getElementById("im1").src=i1[cnt];document.getElementById("im2").src=i2[cnt]}


//function ReplacingImage(){ document.getElementById("i1").src="image2.png" 
//} 
