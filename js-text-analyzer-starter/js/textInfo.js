let te=document.querySelector("#text");

let text =null;
let data={
    senetnces:0,
    // words:0,
    
    // vowel:0,
    // consonent:0,
    // digit:0,
    // spaces:0
};
const textArea=()=>{

text=textareaelement.value;


if(text != null){
    data.senetnces=text.match(/\056/gi).length;
    



}

localStorage.setItem("data",JSON.stringify(data));
window.location="info.html";

};

