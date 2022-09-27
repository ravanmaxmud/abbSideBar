var menu = document.getElementById('axtaris');
var sidebar =document.getElementById('side-searchh')
menu.addEventListener('click',function(){
    sidebar.classList.add('aktiv');

})
var close = document.getElementById('close');
close.addEventListener('click',function(){
    sidebar.classList.remove('aktiv')
})

var az =document.getElementById('az')
var icon =document.getElementById('row')
var sideb = document.getElementById('side-bbr')
az.addEventListener('click',function(){
    if(icon.style.transform === 'rotate(0deg)'){
        icon.style.transform ='rotate(180deg)'
        sideb.classList.add('passiv')
    }
    else{
        icon.style.transform = 'rotate(0deg)'
        sideb.classList.remove('passiv')
    }
})
var bar = document.getElementById('bar')
var respon =document.getElementById('respon')
bar.addEventListener('click',function(){
   
   if(bar.className === 'fa-solid fa-bars'){
       respon.classList.add('respon-ak')
       bar.className = 'fa-solid fa-xmark'
   }
   else{
    respon.classList.remove('respon-ak')
    bar.className = 'fa-solid fa-bars'
   }
})
// reclose.addEventListener('click',function(){
// })
