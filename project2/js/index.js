

 p1.addEventListener('click',Function1)
 p2.addEventListener('click',Function2)
 p3.addEventListener('click',Function3)
 p4.addEventListener('click',Function4)
 p5.addEventListener('click',Function5)
 p6.addEventListener('click',Function6)
 p7.addEventListener('click',Function7)

function Function1(){
  document.getElementById("p1").style.color='red';
  alert("NUMBER 1");
} 

function Function2(){
 let date = new Date();
    let newdate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      document.getElementById("h1").innerHTML = newdate;
  alert("NUMBER 2");
}

function Function3(){
  document.getElementById("p3").classList.add("fn-active");
  alert("NUMBER 3");
} 

function Function4(){
 document.getElementById("p4").parentNode.removeChild(p8);
    alert("NUMBER: 4");
} 

function Function5(){
 window.open("https://www.taobao.com/");
    alert("NUMBER: 5");
} 

function Function6(){
  let para = document.createElement('li');
    let node = document.createTextNode('p9');
    para.appendChild(node);
    para.classList.add('m-item');
    document.getElementById("p6").parentNode.appendChild(para);
    alert("NUMBER: 6");
} 

function Function7(){
  document.getElementById("box").style.width=window.innerWidth;
    alert("NUMBER: 7");
} 