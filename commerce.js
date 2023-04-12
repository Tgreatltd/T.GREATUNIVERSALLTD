let tent1 = document.getElementById('tent1');
let tent2 = document.getElementById('tent2');
let put = document.getElementById('put');
let car = document.getElementById('car');
let showMe = document.getElementById('show');
let homie = document.getElementById('homie');
let increase = document.getElementById('increase');
let showElect = document.getElementById('showElect');
let electronics = document.getElementById('electronics');
let imageobj;
let electron;
let showElectron;
let crease=1;
let orders= [
{
name:'home theater',
price:'$500',
img:"./images/electronics_220x220.png"
},
{
name:'refrigerator',
price:'$550',
img:"./images/refreigerator.jpg"
},
{
name:'Television',
price:'$700',
img:"./images/Television.jpg" 
},
{
name:'Iphone13',
price:'$2000',
img:"./images/iphone.png"
},

];

let items= [
{
name:'Computing',
img:"./images/Computing.webp"
},
{
name:'Electronics',
img:"./images/Electronics.jpg_Tv.jpg"
},
{
name:'Power',
price:'$700',
img:"./images/Power..webp"
},
{
name:'Mobile phones',
img:"./images/Phones.jpg_H1qEjInyn.webp"
},
{
name:'Groceries',
img:"./images/Groceries.jpg_SJiNs8hkh.jpg"
},
{
name:'Home & Kitchen',
img:"./images/Kitchen.jpg_HJtVsL3y3.webp"
},
    
]
function show(){
orders.forEach (el=>{
tent1.innerHTML+=`<button id="ment">
<div id="imaging"><img class="mage" src="${el.img}" alt="">
<div id="name">${el.name}</div>
<div id="price">${el.price}</div>
</div>


</button>

`
})
}
show()

function see(){
items.forEach(el=>{
tent2.innerHTML+=`<button onclick="findImage('${el.name}')" id="ment1">
<div id="imaging1"><img class="mage1" src="${el.img}" alt="">
</div>
<div id="name1">${el.name}</div>
</button>
`
})
}
see()

// function findImage(nameOfImage){
// console.log(nameOfImage);
// imageobj=items.find((el)=>{
// return el.img==nameOfImage
// })

// console.log(imageobj);
// showMe.innerHTML+=`<button ${nameOfImage} id="ment1">
// <div id="imaging1"><img class="mage1" src="${imageobj.img}" alt="">
// </div>
// <div id="name1">${imageobj.name}</div>
// </button>
// `
// }

let mail = 'olamoyegunoluwagreat888@gmail.com'
// let regex = /^[a-z]+@[a-z]+(.)com$/
let reg = /^[a-zA-Z0-9]+@[a-z]+(.)com$/
console.log(reg.test(mail));

let reggae= document.getElementById('reggae')

function inside(){
mailing = put.value
let regex=/^[a-z]+@[a-z]+(.)com$/
 put.value=regex.test(put.value) 

 if (put.value==false) {
    reggae.innerHTML='the email is not correct'
 } else {
    reggae.innerHTML='Successful'
 }

}

let gadgets= [
{
 image:"./images/tv1.jpg",
 name:'HD LED Tv',
 price:'$300',
 cart:'Add To Cart'
},
{
 image:"./images/tv2.jpg",
 name:'HD LED Tv',
 price:'$500',
 cart:'Add To Cart'
},
{
 image:"./images/tv3.jpg",
 name:'HD LED Tv',
 price:'$350',
 cart:'Add To Cart'
},
{
 image:"./images/tv4.jpg",
 name:'HD LED Tv',
 price:'$300',
 cart:'Add To Cart'
},
{
 image:"./images/tv10.jpg",
 name:'HD LED Tv',
 price:'$600',
 cart:'Add To Cart'
},
{
 image:"./images/tv5.jpg",
 name:'HD LED Tv',
 price:'$400',
 cart:'Add To Cart'
},
{
 image:"./images/tv6.jpg",
 name:'HD LED Tv',
 price:'$450',
 cart:'Add To Cart'
},
{
 image:"./images/tv7.jpg",
 name:'HD LED Tv',
 price:'$550',
 cart:'Add To Cart'
},
{
 image:"./images/tv8.jpg",
 name:'HD LED Tv',
 price:'$700',
 cart:'Add To Cart'
},
{
 image:"./images/tv9.jpg",
 name:'HD LED Tv',
 price:'$800',
 cart:'Add To Cart'
},
{
 image:"./images/tv11.jpg",
 name:'HD LED Tv',
 price:'$820',
 cart:'Add To Cart'
},
{
 image:"./images/tv12.jpg",
 name:'HD LED Tv',
 price:'$840',
 cart:'Add To Cart'
},
]

function showTv(){
electron= gadgets.forEach(el=>{
showElect.innerHTML+=`<button onclick="findElectronics('${el.image}')" id="mentor">
<div id="elect1"><img class="elect2" src="${el.image}" alt="">
</div>
<div id="names">${el.name}</div>
<div id="prices">${el.price}</div>
<div id="carts" onclick="carting()">${el.cart}</div>
</button>
`
})
}
showTv()

function findImage(nameOfImage){
console.log(nameOfImage);
showElectron= items.find(el=>{
return el.name==nameOfImage
})
if (showElectron.name=='Electronics') {
electronics.style.display='block'
content.style.display='none' 
} else {

}
}

function home(){
content.style.display='block';
electronics.style.display='none';
}
function carting(){
increase.style.display='inherit'
increase.innerHTML=crease++
}
