const i1=document.getElementById("input-box");
const l1=document.getElementById("List");
function addTask()
{
    if(i1.value==='')
    alert("write something");
    else{
        let li=document.createElement("li");
        li.innerHTML=i1.value;
        l1.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    i1.value='';
}
l1.addEventListener("click",function(e){
    if(e.target.tagNamee==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false);