// const { default: axios } = require("axios");

let tent1 = document.getElementById('tent1');
let tent2 = document.getElementById('tent2');
let put = document.getElementById('put');
let car = document.getElementById('car');
let showMe = document.getElementById('show');
let login = document.getElementById('login');
let homie = document.getElementById('homie');
let forms = document.getElementById('forms');
let increase = document.getElementById('increase');
let showElect = document.getElementById('showElect');
let electronics = document.getElementById('electronics');
let refreigerator = document.getElementById('refridgerator');
let freezo = document.getElementById('freezo');
let cartel = document.getElementById('cartel');
let ordered = document.getElementById('ordered');
let total = document.getElementById('total');
let im = document.getElementById('im');
let mpty = document.getElementById('mpty');
let tester = document.getElementById('tester');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let smallie1 = document.getElementById('smallie1');
let smallie2 = document.getElementById('smallie2');
let smallie3 = document.getElementById('smallie3');
let smallie4 = document.getElementById('smallie4');
let smallie5 = document.getElementById('smallie5');
let collect = document.getElementById('collect');
let content = document.getElementById('content');
let container = document.getElementById('container');
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
let showError = document.getElementById('showError');
let showSuccess = document.getElementById('showSuccess');
let names1 = document.getElementById('names1');
let names2 = document.getElementById('names2');
let names3 = document.getElementById('names3');
let names4 = document.getElementById('names4');
let done = document.getElementById('done');
let done2 = document.getElementById('done2');
let acc = document.getElementById('acc');
let imageobj;
let electron;
let showElectron;
let seeFreezer;
let findFreezer;
let findTv;
let sect = [];
let index = 0;
let crease = 0;
let ammount = 0
let every = 0
let tota;
let disp;
let currentId;
let freezerObj;
let cartArray = [];
let findItem;
let submitted = false;
let feedBack;
let errorMessage
let successMessage;




let orders = [
   {
      name: 'home theater',
      price: '$500',
      img: "./images/electronics_220x220.png"
   },
   {
      name: 'power',
      price: '$550',
      img: "./images/Power..webp"
   },
   {
      name: 'Television',
      price: '$700',
      img: "./images/Television.jpg"
   },
   {
      name: 'Iphone13',
      price: '$2000',
      img: "./images/iphone.png"
   },

];

let items = [
   {
      name: 'Electronics',
      img: "./images/Electronics.jpg_Tv.jpg"
   },
   {
      name: 'Refridgerator',
      img: "./images/refreigerator.jpg"
   },
   {
      name: 'Computing',
      img: "./images/Computing.webp"
   },
   {
      name: 'Mobile phones',
      img: "./images/Phones.jpg_H1qEjInyn.webp"
   },
   {
      name: 'Groceries',
      img: "./images/Groceries.jpg_SJiNs8hkh.jpg"
   },
   {
      name: 'Home & Kitchen',
      img: "./images/Kitchen.jpg_HJtVsL3y3.webp"
   },

]
function show() {
   orders.forEach(el => {
      tent1.innerHTML += `<button id="ment">
<div id="imaging"><img class="mage" src="${el.img}" alt="">
<div id="name">${el.name}</div>
<div id="price">${el.price}</div>
</div>


</button>

`
   })
}
show()

function see() {
   items.forEach(el => {
      tent2.innerHTML += `<button onclick="findImage('${el.name}')" id="ment1">
<div id="imaging1"><img class="mage1" src="${el.img}" alt="">
</div>
<div id="name1">${el.name}</div>
</button>
`
   })
}
see()
function findImage(nameOfImage) {
   console.log(nameOfImage);
   showElectron = items.find(el => {
      return el.name == nameOfImage
   })
   if (showElectron.name == 'Electronics') {
      electronics.style.display = 'block'
      content.style.display = 'none'
   }
   if (showElectron.name == 'Refridgerator') {
      freezo.style.display = 'block'
      content.style.display = 'none'
   }
}

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


let gadgets = [
   {
      image: "./images/tv1.jpg",
      name: 'HD LED Tv',
      price: 300,
      cart: 'Add To Cart',
      id: '1'
   },
   {
      image: "./images/tv2.jpg",
      name: 'HD LED Tv',
      price: 500,
      cart: 'Add To Cart',
      id: '2'
   },
   {
      image: "./images/tv3.jpg",
      name: 'HD LED Tv',
      price: 350,
      cart: 'Add To Cart',
      id: '3'
   },
   {
      image: "./images/tv4.jpg",
      name: 'HD LED Tv',
      price: 300,
      cart: 'Add To Cart',
      id: '4'
   },
   {
      image: "./images/tv10.jpg",
      name: 'HD LED Tv',
      price: 600,
      cart: 'Add To Cart',
      id: '5'
   },
   {
      image: "./images/tv5.jpg",
      name: 'HD LED Tv',
      price: 400,
      cart: 'Add To Cart',
      id: '6'
   },
   {
      image: "./images/tv6.jpg",
      name: 'HD LED Tv',
      price: 450,
      cart: 'Add To Cart',
      id: '7'
   },
   {
      image: "./images/tv7.jpg",
      name: 'HD LED Tv',
      price: 550,
      cart: 'Add To Cart',
      id: '8'
   },
   {
      image: "./images/tv8.jpg",
      name: 'HD LED Tv',
      price: 700,
      cart: 'Add To Cart',
      id: '9'
   },
   {
      image: "./images/tv9.jpg",
      name: 'HD LED Tv',
      price: 800,
      cart: 'Add To Cart',
      id: '10'
   },
   {
      image: "./images/tv11.jpg",
      name: 'HD LED Tv',
      price: 820,
      cart: 'Add To Cart',
      id: '11'
   },
   {
      image: "./images/tv12.jpg",
      name: 'HD LED Tv',
      price: 840,
      cart: 'Add To Cart',
      id: '12'
   },
]

function showTv() {
   electron = gadgets.forEach(el => {
      showElect.innerHTML += `<button onclick="findElectronics('${el.image}')" id="mentor">
<div id="elect1"><img class="elect2" src="${el.image}" alt="">
</div>
<div id="names">${el.name}</div>
<div id="prices"> $${el.price}</div>
<div id="carts" onclick="carty('${el.image}')">${el.cart}</div>
</button>
`
   })

}
showTv()
function findElectronics(nameOfTv) {
   findTv = gadgets.find((el) => {
      return el.image == nameOfTv
   })
   console.log(findTv);

}



function home() {
   content.style.display = 'block';
   electronics.style.display = 'none';
   freezo.style.display = 'none'
   ordered.style.display = 'none'
   mpty.style.display = 'none'
}



function carty(nameOfTv) {
   findTv = gadgets.find((el) => {
      return el.image == nameOfTv
   })
   console.log(findTv);
   // cartel.innerHTML+=` <button id="freeze">
   // <div id="alls">
   //  <div><img id="pic" src="${findTv.image}" alt=""></div>
   //  <div id="type">${findTv.name}</div>
   //  <div id="money">$${findTv.price}</div>
   // </div>
   // </button>
   // <button id="remove" onclick="dell('${currentId}')"> Remove</button>
   // <br>
   // `
   cartel.innerHTML = ''
   pushing()
   ammount += findTv.price
   total.innerHTML = `$${ammount}`
   // console.log(el.price);
   crease = crease + 1
   increase.innerHTML = crease
   increase.style.display = 'inherit';

}

function showCarty() {
   for (let i = 0; i < cartArray.length; i++) {
      cartel.innerHTML += ` <button id="freeze">
<div id="alls">
 <div><img id="pic" src="${cartArray[i].image}" alt=""></div>
 <div id="type">${cartArray[i].name}</div>
 <div id="money">$${cartArray[i].price}</div>
</div>
</button>
<button id="remove" onclick="del('${i}')"> Remove</button>
<br>
`


   }
}
function pushing() {
   let image = findTv.image
   let name = findTv.name
   let price = findTv.price
   cartArray.push({ name: name, image: image, price: price })
   showCarty()
}


let freezer = [
   {
      image: "./images/fridge1.jpg",
      name: 'Nexus Refrigerator - Silver',
      price: 200,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge2.jpg",
      name: 'Nexus Refrigerator - Silver',
      price: 300,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge3.jpg",
      name: 'Bruhm Refrigerator- Silver',
      price: 350,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge4.jpg",
      name: 'Skyrun  Fridge ',
      price: 600,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge5.jpg",
      name: 'Nexus Refrigerator - Silver',
      price: 340,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge6.jpg",
      name: 'Nexus Refrigerator - Silver',
      price: 500,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge13.jpg",
      name: 'Skyrun  Fridge ',
      price: 550,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge8.jpg",
      name: 'Skyrun  Fridge ',
      price: 400,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge9.jpg",
      name: 'Skyrun  Fridge ',
      price: 650,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge10.jpg",
      name: 'Skyrun  Fridge ',
      price: 710,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge11.jpg",
      name: 'Nexus Refrigerator - Silver',
      price: 200,
      cart: 'Add To Cart'
   },
   {
      image: "./images/fridge12.jpg",
      name: 'Nexus Refrigerator - Silver',
      price: 270,
      cart: 'Add To Cart'
   },
]


function showFridge() {
   seeFreezer = freezer.forEach((el) => {
      refreigerator.innerHTML += `<button onclick="findFridge('${el.image}')" id="mentor">
<div id="addition"><div id="elect1"><img class="elect2" src="${el.image}" alt="">
</div>
<div id="names">${el.name}</div>
<div id="prices">$${el.price}</div>
<div id="carts" onclick="carting('${el.image}')">${el.cart}</div>
</div>
</button>
`
   })

}
showFridge()

function findFridge(nameOfFridge) {
   freezerObj = freezer.find((el) => {
      return el.image == nameOfFridge
   })
   console.log(freezerObj);

}

function carting(nameOfFridge) {
   findTv = freezer.find((el) => {
      return el.image == nameOfFridge
   })
   console.log(findTv);
   // cartel.innerHTML+=` <button id="freeze">
   // <div id="alls">
   //  <div><img id="pic" src="${findFreezer.image}" alt=""></div>
   //  <div id="type">${findFreezer.name}</div>
   //  <div id="money">$${findFreezer.price}</div>
   // </div>
   // </button>
   // <button id="remove" onclick="del('${currentId}')"> Remove</button>
   // <br>
   // `
   cartel.innerHTML = ''
   ammount += findTv.price
   total.innerHTML = ammount
   increase.style.display = 'inherit';
   pusher();
   crease = crease + 1
   increase.innerHTML = crease
   increase.style.display = 'inherit';
}


function showCart() {
   for (let dex = 0; dex < cartArray.length; dex++) {
      cartel.innerHTML += ` <button id="freeze">
<div id="alls">
 <div><img id="pic" src="${cartArray[dex].image}" alt=""></div>
 <div id="type">${cartArray[dex].name}</div>
 <div id="money">$${cartArray[dex].price}</div>
</div>
</button>
<button id="remove" onclick="del('${dex}')"> Remove</button>
<br>
`

   }
}
function pusher() {
   let image = findTv.image
   let name = findTv.name
   let price = findTv.price
   cartArray.push({ image: image, price: price, name: name })
   showCart()
}


function added() {
   if (cartel.innerHTML == '') {
      ordered.style.display = 'none'
      cartel.style.display = 'none'
      mpty.style.display = 'block'
      container.style.display = 'none'
      electronics.style.display = 'none';
      freezo.style.display = 'none'
   } else {
      ordered.style.display = 'block'
      cartel.style.display = 'block'
      content.style.display = 'none'
      electronics.style.display = 'none';
      freezo.style.display = 'none'
   }

}

function del(k) {
   console.log(k);
   cartel.innerHTML = cartArray.splice(k, 1)
   cartel.innerHTML = ''
   increase.innerHTML = ''
   crease = crease - 1
   increase.innerHTML = crease
   // console.log(cartArray.indexOf(findTv.price));

   if (increase.innerHTML == 0) {
      increase.innerHTML = '';
      ordered.style.display = 'none'
      mpty.style.display = 'block'
      container.style.display = 'none'
   }
   if (findTv) {
      ammount -= findTv.price
      total.innerHTML = `$${ammount}`
   } else {
      ammount = ammount - findTv.price
      total.innerHTML = `$${ammount}`
   }
   if (k == 0) {
      ammount = 0
      // if (findTv.price==0) {
      //    ammount=0
      //    total.innerHTML=0
      // } else {

      // }
      total.innerHTML = ammount

      console.log(findTv.price);
   }

   showCart()
}

// function calc(){

// }
let namee;
let value;
let form = [];
let newForm;
let regex = /^[a-z]+@[a-z]+(.)com$/
let rege = /^[\+](234)+[7-9][0-1][0-9]{8}$/
let reg = /^[0][7-9][0-1][0-9]{8}$/

function handleChange(e) {
   // let regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+(.)+[a-zA-Z]$/
   // console.log(e);

   let input1 = document.getElementById('input1');
   let input2 = document.getElementById('input2');
   let input3 = document.getElementById('input3');
   let input4 = document.getElementById('input4');
   let input5 = document.getElementById('input5');
   for (let index = 0; index < form.length; index++) {
      let tobi = {
         firstName: form[index].firstName,
         lastName: form[index].lastName,
         email: form[index].email,
         mobileNum: form[index].phoneNumber,
         password: form[index].password
      }
      console.log(
         // tobi
      )

   }
   form.push(
      {
         firstName: input1.value,
         lastName: input2.value,
         email: input3.value,
         mobileNum: input4.value,
         password: input5.value,
      }
   )


   // console.log(timo);

   //  namee = e.target.name
   // value = e.target.value
   // smallie.innerHTML=e.target.value
   // newForm={...form,[namee]:value}
   // console.log(newForm);


   // console.log(regex.test(mail));



}

function handleChanger() {
   if (reg.test(input4.value)) {
      smallie4.innerHTML = 'Mobile Number Is Valid'
      smallie4.style.color = 'green'
   } else {
      smallie4.innerHTML = 'Mobile Number Not Valid'
      smallie4.style.color = 'red'
   }
   handleChange()
}
function handleChanges() {

   if (regex.test(input3.value)) {

      smallie3.innerHTML = "Email is Valid"
      smallie3.style.color = 'green'
   } else {
      smallie3.innerHTML = "Email is not Correct"
      smallie3.style.color = 'red'
   }
   handleChange()
}


async function submitToServer() {
   // console.log(form[form.length-1]);

   try {
      axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";
      let response = await axios.post("http://127.0.0.1:4000/logon", form[form.length - 1])
      // console.log(response);
      console.log(response.data.message);
      showSuccess.innerHTML = response.data.message
      // showSuccess.style.display='block'
      // showError.style.display='none'

      // if (response.data.message) {
      //    showSuccess.style.display='block'
      // showError.style.display='none'
      // } else {
      //    showSuccess.style.display='none'
      //    showError.style.display='none'
      // }

      if (response.data.message) {
         done2.style.display = 'block'
         showError.style.display = 'none'
         done.style.display = 'block'
         login.style.display = 'none'
         acc.innerHTML = response.data.message
      } else {
         showSuccess.style.display = 'none'
         showError.style.display = 'none'

      }
      // container.style.display='block'
      // content.style.display='block'
      // login.style.display='none'

   } catch (error) {
      console.log(error);
      // console.log(error.response);
      console.log(error.response.data.message);
      showError.innerHTML = error.response.data.message
      // showError.style.display='block'
      // showSuccess.style.display='none'

      if (error.response.data.message) {
         showError.style.display = 'block'
         showSuccess.style.display = 'none'
      } else {
         showSuccess.style.display = 'none'
         showError.style.display = 'none'
      }

      if (error.response.data.error == "firstName must be at least 2 characters") {
         names1.innerHTML = error.response.data.error
         names1.style.color = 'red'
      } else {
         names1.innerHTML = ''
      }

      if (error.response.data.error == "lastName must be at least 2 characters") {
         names2.innerHTML = error.response.data.error
         names2.style.color = 'red'
      } else {
         names2.innerHTML = ''
      }

   }

}
async function create(e) {
   e.preventDefault()
   console.log(form[form.length - 1]);
   console.log(form);
   submitToServer()
   // const formsData= new FormData(forms)
   // console.log([...formsData]);



   if (regex.test(input3.value)
      && input1.value !== '' &&
      input2.value !== '' &&
      input5.value !== '' && reg.test(input4.value)
   ) {
      // container.style.display='block'
      // content.style.display='block'
      // login.style.display='none'
   }

   if (input1.value == '') {
      smallie1.innerHTML = 'First Name is Required'
      smallie1.style.color = 'red'
      names2.style.display = 'none'
   } else {
      smallie1.innerHTML = ''
   }

   if (input2.value == '') {
      smallie2.innerHTML = 'Last Name is Required'
      smallie2.style.color = 'red'
      names2.style.display = 'none'

   } else {
      smallie2.innerHTML = ''
   }


   if (input3.value == '') {
      smallie3.innerHTML = 'Email is Required'
      smallie3.style.color = 'red'
      names2.style.display = 'none'
   } else {
      smallie3.innerHTML = ''
   }

   if (input4.value == '') {
      smallie4.innerHTML = 'Mobile Number is Required'
      smallie4.style.color = 'red'
      names2.style.display = 'none'
   } else {
      smallie4.innerHTML = ''
   }


   if (input5.value == '') {
      smallie5.innerHTML = 'Password is Required'
      smallie5.style.color = 'red'
      names2.style.display = 'none'
   } else {
      smallie5.innerHTML = ''
   }

   if (reg.test(input4.value)) {
      smallie4.innerHTML = ''
      names2.style.display = 'none'
   } else {
      smallie4.innerHTML = 'Mobile Number is not valid'
      smallie4.style.color = 'red'
   }
   if (reg.test(input3.value)) {
      smallie3.innerHTML = ''
      names2.style.display = 'none'
   } else {
      // smallie3.innerHTML='Email is not valid' 
      smallie3.style.color = 'red'
   }

   // form.forEach(el=>{
   // collect.innerHTML='';
   // collect.innerHTML+=`<div>
   // <div>${el.firstName}</div>
   // <div>${el.lastName}</div>
   // <div>${el.email}</div>
   // <div>${el.phoneNumber}</div>
   // <div>${el.password}</div>
   // </div>
   // `
   // })

}
function signUp() {
   login.style.display = 'flex'
   container.style.display = 'none'
   input1.value = ''
   input2.value = ''
   input3.value = ''
   input4.value = ''
   input5.value = ''
   smallie3.innerHTML = ''
   smallie4.innerHTML = ''
   names2.innerHTML = ''
}
function logger(e) {
   e.preventDefault()
   container.style.display = 'block'
   content.style.display = 'block'
   login.style.display = 'none'

}
function shopping() {
   container.style.display = 'block'
   content.style.display = 'block'
   mpty.style.display = 'none'
}

function continueToPage() {
   container.style.display = 'block'
   content.style.display = 'block'
   done.style.display = 'none'
}


