// chrome://extensions/


let myLeads =[];
let oldLeads =[];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");

const ulEl =document.getElementById("ul-el");

let deleteBTN =document.getElementById("delete-btn")


const leadsfromstorage =JSON.parse(localStorage.getItem("myLeads"))
 
let tabBtn =document.getElementById("saveel")



 if (leadsfromstorage){
    myLeads =leadsfromstorage;
    render(myLeads)
}

saveel.addEventListener("click",function(){
  
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads" ,JSON.stringify(myLeads));
        render(myLeads);
       

   })


});

function render(Leads){
    let listItems = "";

    for (let i=0;i< Leads.length   ;i++){
        listItems +=
         `<li>
         <a target ='_blank' href ='${Leads[i]}'> 
         ${Leads[i]}
         </a>
         </li >`
    }
    ulEl.innerHTML=listItems;
}
 
deleteBTN.addEventListener("dblclick",function(){
   localStorage.clear();
   myLeads=[];
   render(myLeads);
})


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value =" ";
   
    localStorage.setItem("myLeads" ,JSON.stringify(myLeads));
    


    render( myLeads)
    console.log(localStorage.getItem("myLeads"))
})
