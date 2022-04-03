// @ts-check

//import * as lib from '/libs/lib.js';
const colors = {"red":"#ff0000", "green":"#00ff00", "blue":"#0088ff", "yellow":"#ffee80"};
//https://www.w3schools.com/charsets/ref_utf_symbols.asp
//https://www.w3schools.com/charsets/ref_utf_arrows.asp
//https://www.w3schools.com/charsets/ref_emoji.asp
let keys_space = [".?123", "space", "&#8592;", "&#8594;"];
let keyboard = [ 
            {"index": "0", "id":"", "low":"q", "cap":"Q", "pun":"0"}, 
            {"index":"1", "id":"", "low":"w", "cap":"W", "pun":"1"},
            {"index":"2", "id":"", "low":"e", "cap":"E", "pun":"2"},
            {"index":"3", "id":"", "low":"r", "cap":"R", "pun":"3"},
            {"index":"4", "id":"", "low":"t", "cap":"T", "pun":"4"},
            {"index":"5", "id":"", "low":"y", "cap":"Y", "pun":"5"},
            {"index":"6", "id":"", "low":"u", "cap":"U", "pun":"6"},
            {"index":"7", "id":"", "low":"i", "cap":"I", "pun":"7"},
            {"index":"8", "id":"", "low":"o", "cap":"O", "pun":"8"},
            {"index":"9", "id":"", "low":"p", "cap":"P", "pun":"9"},
            {"index":"10", "id":"bs", "low":"&#8678;", "cap":"&#8678;", "pun":"&#8678;"},
            {"index":"11", "id":"", "low":"a", "cap":"A", "pun":"@"},
            {"index":"12", "id":"", "low":"s", "cap":"S", "pun":"%"},
            {"index":"13", "id":"", "low":"d", "cap":"D", "pun":"$"},
            {"index":"14", "id":"", "low":"f", "cap":"F", "pun":"/"},
            {"index":"15", "id":"", "low":"g", "cap":"G", "pun":"*"},
            {"index":"16", "id":"", "low":"h", "cap":"H", "pun":"("},
            {"index":"17", "id":"", "low":"j", "cap":"J", "pun":")"},
            {"index":"18", "id":"", "low":"k", "cap":"K", "pun":"'"},
            {"index":"19", "id":"", "low":"l", "cap":"L", "pun":'"'},
            {"index":"20", "id":"go", "low":"go", "cap":"go", "pun":"go"},
            {"index":"21", "id":"1^", "low":"&#8679;", "cap":"&#8679;", "pun":"-"},
            {"index":"22", "id":"", "low":"z", "cap":"Z", "pun":"+"},
            {"index":"23", "id":"", "low":"x", "cap":"X", "pun":"="},
            {"index":"24", "id":"", "low":"c", "cap":"C", "pun":";"},
            {"index":"25", "id":"", "low":"v", "cap":"V", "pun":":"},
            {"index":"26", "id":"", "low":"b", "cap":"B", "pun":","},
            {"index":"27", "id":"", "low":"n", "cap":"N", "pun":"."},
            {"index":"28", "id":"", "low":"m", "cap":"M", "pun":"!"},
            {"index":"29", "id":"2^", "low":"&#8679;", "cap":"&#8679;", "pun":"?"}
        ]
 

function theChild(_elem, _id, _classes ){
    const ch = document.createElement(_elem)
    ch.setAttribute('id', _id);

    if(Array.isArray(_classes)){
         _classes.forEach(cl => {
            ch.classList.add(cl); 
        });
    }else{
        ch.classList.add(_classes);
    }
       
    return ch;
}

export function createLayout(){
    document.getElementById("kb_wrapper").appendChild(theChild("div", "kb_text", "kb-text"));

    let txara = document.createElement("textarea");
    txara.setAttribute("id", "ta");
    txara.setAttribute("name", "ta");
    txara.setAttribute("cols", "30");
    txara.setAttribute("rows", "5");
    txara.classList.add("kb-textarea");

    document.getElementById("kb_text").appendChild(txara);
    document.getElementById("kb_wrapper").appendChild(theChild("div", "kb_shell", "kb-shell"));
    document.getElementById("kb_shell").appendChild(theChild("div", "kb_top", "kb-top"));
    document.getElementById("kb_shell").appendChild(theChild("div", "kb_middle", "kb-middle"));
    document.getElementById("kb_shell").appendChild(theChild("div", "kb_bottom", "kb-bottom"));
    document.getElementById("kb_shell").appendChild(theChild("div", "kb_space", "kb-space")); 

    keyboardLower();
    addEvents();
}



// keyboardLower();
// addEvents();

export function keyboardLower(){
    keyboard.forEach((k, index) =>{
    let key = document.createElement("div");
        key.setAttribute("id", k.id)
        key.setAttribute("index", k.index);
        key.classList.add("kb-key", "dyn");
        key.setAttribute("low", k.low);
        key.setAttribute("cap", k.cap);
        key.setAttribute("pun", k.pun);
        key.innerHTML = k.low;
    if(index < 11){
        document.getElementById("kb_top").appendChild(key);
        
    }else if(index >= 11 && index < 21){
        
        
        document.getElementById("kb_middle").appendChild(key);
    }else{
        if(index == 21 || index === 29){
            key.classList.add("shift", "lower");
            key.addEventListener("click", pressShift);
        }
        document.getElementById("kb_bottom").appendChild(key);
    }
})

keys_space.forEach(k=>{
    let key = document.createElement("div");
    key.setAttribute("id", k);
        if(k === "space"){
            key.classList.add("kb-key-space", "space");
        }else if(k === ".?123"){
           key.classList.add("kb-key-num");
           key.addEventListener("click", showNumbers)
        }else if(k === "&#8592;" || k === "&#8594;"){
            key.classList.add("arrow", "kb-key");
        }else{
             key.classList.add("kb-key");
        }
    
        key.innerHTML = k;
    document.getElementById("kb_space").appendChild(key);
})
}

export function addEvents(){
    const res = document.getElementById("ta");//text area   
    
    document.querySelectorAll(".dyn").forEach((dy, index) =>{
        if(index == 10){
            dy.addEventListener("click", ()=>{
                if(res instanceof HTMLTextAreaElement){
                    res.value = res.value.substring(0, res.value.length - 1);
                    console.log("back space = ", res.value);
                }
            
            })
        }else{
            if(dy.id != "bs" && dy.innerHTML != "⇧" && dy.innerHTML !== "go"){
                dy.addEventListener("click", () => {
                    if(res instanceof HTMLTextAreaElement){
                        res.value += dy.innerHTML;
                        //res.value += dy.innerHTML.toLowerCase();
                        // res.focus();
                        //var res = str1.concat(str2);
                        console.log("litera = ", res.value);
                    }
                });
            }
        }

    })

    document.getElementById("space").addEventListener("click", () =>{
        if(res instanceof HTMLTextAreaElement){
            res.value += " ";
                //     res.focus();
            console.log("space = ", res.value);
        }

    })
}

function pressShift(e){
    if(e.target.classList.contains("lower")){
    document.querySelectorAll(".dyn").forEach(dy =>{
        dy.innerHTML = dy.getAttribute("cap")
    })
    document.querySelectorAll(".dyn").forEach(kb => {
        if(kb.getAttribute("index") === "21" || kb.getAttribute("index") === "29"){
            kb.classList.remove("lower");
        }
    })

    }else{
    document.querySelectorAll(".dyn").forEach(dy =>{
        dy.innerHTML = dy.getAttribute("low");
    })
    document.querySelectorAll(".dyn").forEach(kb => {
        if(kb.getAttribute("index") === "21" || kb.getAttribute("index") === "29"){
            kb.classList.add("lower");
        }
    })
    }
}

function addEventToShift(e){
    const res = document.getElementById("ta");//text area   
    if(res instanceof HTMLTextAreaElement){
        res.value += e.target.innerHTML.toLowerCase();
    // res.focus();
    //console.log("litera = ", res.value);
    }
}  

function showNumbers(e){
    console.log("showing numbers", e.target.innerHTML);

    if(e.target.innerHTML === ".?123"){
        //console.log(e.target.innerHTML);
        e.target.innerHTML = "ABC";

        document.querySelectorAll(".dyn").forEach(dy =>{
            dy.innerHTML = dy.getAttribute("pun");
            if(dy.classList.contains("shift")){
                dy.removeEventListener("click", pressShift);
                dy.addEventListener("click", addEventToShift);
            }
        })

    }else if(e.target.innerHTML === "ABC"){
        //console.log(e.target.innerHTML);
        e.target.innerHTML = ".?123";
        document.querySelectorAll(".dyn").forEach(dy =>{
            dy.innerHTML = dy.getAttribute("low");
            if(dy.classList.contains("shift")){
                dy.classList.add("lower");
                dy.addEventListener("click", pressShift);
                dy.removeEventListener("click", addEventToShift);
            }
        })
    }

}
