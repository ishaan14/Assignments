const imp=document.querySelector(".todo-input");
const btn=document.querySelector(".todo-button");
const list=document.querySelector(".todo-list");
let work=[];
let count=0;
let flag=false;

btn.addEventListener("click",f1);
list.appendChild("click",f2);

function f1(e){
    e.preventDefault();

    const div=document.createElement("div");
    div.classList.add("todo");
    const listt=document.createElement('li');
    listt.innerText=imp.value;

    div.appendChild(listt);

    const dbtn=document.createElement('button');
    dbtn.innerHTML = "<i class='bi bi-check2-all' id='b1'></i>";
    dbtn.classList.add("complete-btn");
    div.appendChild(dbtn);


    const tbtn=document.createElement('button');
    tbtn.innerHTML="<i class='bi bi-trash' id='b2'></i>";
    tbtn.classList.add("trash-btn");
    div.appendChild(tbtn);

    const ebtn=document.createElement('button');
    ebtn.innerHTML='<i class="bi bi-pencil" id="b3"></i>';
    ebtn.classList.add("trash-btn");
    div.appendChild(ebtn);

    const mbtn=document.createElement('button');
    mbtn.innerHTML='<i class="bi bi-arrow-up" id="b4"></i>';
    mbtn.classList.add("trash-btn");
    div.appendChild(mbtn);

    const mdbtn=document.createElement('button');
    mdbtn.innerHTML='<i class="bi bi-arrow-down" id="b5"></i>';
    mdbtn.classList.add("trash-btn");
    div.appendChild(mdbtn);


    dbtn.addEventListener("click",(e)=>{
        listt.classList.add("d-btn")

    })


    tbtn.addEventListener("click",(e)=>{
        div.remove();
    })

    ebtn.addEventListener("click",(e)=>{
        listt.contentEditable = true;
        listt.classList.add("e-btn")
        listt.focus();
    })

    mbtn.addEventListener("click",(e)=>{

        items = list.getElementsByTagName('div'),
        i=items.length;
        while (i--){
   div.after(items[i]);
        }

        i=items.length;
        while (i--){
   div.after(items[i]);
        }
        
    })

    mdbtn.addEventListener("click",(e)=>{

       
        items = list.getElementsByTagName('div'),
        i=items.length;
        while (i--){
   div.before(items[i]);
        }

        i=items.length;
        while (i--){
   div.before(items[i]);
        }
    })



    list.appendChild(div);
    imp.value=" ";
}