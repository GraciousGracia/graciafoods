const about = document.getElementById('aboutbtn');
const signup = document.getElementById('signupbtn');
const signin = document.getElementById('signinbtn');
const service = document.getElementById('servicebtn');
const menu = document.getElementById('menubtn');
const contact = document.getElementById('contactbtn');
var intro = document.getElementById('intro');

function abtfunction(){
    intro.scrollIntoView()
}
about.addEventListener('click',abtfunction)
function signtojoin (){
    let url = 'Graciauser signup.html'
    window.open(url)
}
signup.addEventListener('click',signtojoin)
signin.addEventListener('click',function(){
    const link = 'Graciauser signin.html'
    window.open(link);
});
let serve = document.getElementById('offers');
service.addEventListener('click',function(){
    serve.scrollIntoView();
})
let currentmeal = document.getElementById('menu');
menu.addEventListener('click',function(){
    currentmeal.scrollIntoView();
});
let conclusion = document.getElementById('footer');
contact.addEventListener('click',function(){
    conclusion.scrollIntoView();
});

document.getElementById('fast').addEventListener('click',(ev)=>{
    var fasturl = 'Gracia fastfood.html';
    window.open(fasturl)
})
document.getElementById('bakes').addEventListener('click',(ev)=>{
    var bakeurl = 'Gracia bakery.html';
    window.open(bakeurl)
})
let btn13 = document.getElementById('btndine1').addEventListener('click',function(){
        viewform(foods[12].mealname)
})
let btn14 = document.getElementById('btndine2').addEventListener('click',function(){
        viewform(foods[13].mealname)
})
let btn15 = document.getElementById('btndine3').addEventListener('click',function(){
        viewform(foods[14].mealname)
})
let btn16 = document.getElementById('btndine4').addEventListener('click',function(){
        viewform(foods[15].mealname)
})
let btn17 = document.getElementById('btndine5').addEventListener('click',function(){
        viewform(foods[16].mealname)
})
let btn18 = document.getElementById('btndine6').addEventListener('click',function(){
        viewform(foods[17].mealname)
})

document.getElementById('paste').addEventListener('click',(ev)=>{
    var pasteurl = 'Gracia pastry.html';
    window.open(pasteurl)
})
document.getElementById('drink').addEventListener('click',(ev)=>{
    var drinkurl = 'Gracia drinks.html';
    window.open(drinkurl)
})
let btn7 = document.getElementById('btnlunch1').addEventListener('click',function(){
        viewform(foods[6].mealname)
})
let btn8 = document.getElementById('btnlunch2').addEventListener('click',function(){
        viewform(foods[7].mealname)
})
let btn9 = document.getElementById('btnlunch3').addEventListener('click',function(){
        viewform(foods[8].mealname)
})
let btn10 = document.getElementById('btnlunch4').addEventListener('click',function(){
        viewform(foods[9].mealname)
})
let btn11 = document.getElementById('btnlunch5').addEventListener('click',function(){
        viewform(foods[10].mealname)
})
let btn12 = document.getElementById('btnlunch6').addEventListener('click',function(){
        viewform(foods[11].mealname)
})
let buyform = document.getElementById('orderform')
const buyername = document.getElementById('name')
var bemail = document.getElementById('email')
const bnumber = document.getElementById('number')
var size = document.getElementById('quantity')

buyform.addEventListener('submit',(e)=>{
    e.preventDefault();
    mainval()
});
function errorvalidate (tag,info){
    let mainelement = tag.parentElement;
    var wrongtag = mainelement.querySelector('.fake');

    wrongtag.innerHTML = info
    mainelement.classList.add('invalid');
    mainelement.classList.remove('valid');
    
}
let correctvalidate = (tag)=>{
    let mainelement = tag.parentElement;
    var wrongtag = mainelement.querySelector('.fake');

    wrongtag.innerHTML = ''
    mainelement.classList.add('valid');
    mainelement.classList.remove('invalid');
}
function validatemail (mailing){
    let codes = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return codes.test(String(mailing).toLowerCase())
}

let mainval = ()=> {
    let uname = buyername.value.trim()
    var mail = bemail.value.trim()
    const mobile = bnumber.value.trim()
    let qty = size.value.trim();

    if(uname === ''){
        errorvalidate(buyername,'This field is required to order a meal')
    }else if(uname.length < 5){
        errorvalidate(buyername,'Enter a valid name')
    }else {
        correctvalidate(buyername)
    }

    if(mail === ''){
        errorvalidate(bemail,'An email-address is required to order a meal')
    }else if(!validatemail(mail)){
        errorvalidate(bemail,'Email-address entered is invalid')
    }else {
        correctvalidate(bemail)
    }

    if(mobile === ''){
        errorvalidate(bnumber,'A mobile number is needed to order a meal')
    }else if(mobile.length < 10){
        errorvalidate(bnumber,'Enter a valid mobile number')
    }else {
        correctvalidate(bnumber)
    }

    if(qty === ''){
        errorvalidate(size,'Please enter portion of meal to order')
    }else if(qty > 5){
        errorvalidate(size,'Portion of meal should be at most 5')
    }else {
        correctvalidate(size)
    }
}
function recover (){
    breakbtn.style.display = 'block'
    lunchbtn.style.display = 'block'
    dinnerbtn.style.display = 'block'
    fill.style.display = 'none'
    
    breakact()
    
}
var out = document.getElementById('takeout').addEventListener('click',recover)
let breakbtn = document.getElementById('break')
var lunchbtn = document.getElementById('lunch')
const dinnerbtn = document.getElementById('dine')
let breakdiv = document.getElementById('breakdiv')
var lunchdiv = document.getElementById('lunchdiv')
const dindiv = document.getElementById('dinnerdiv')

function breakact (){
    breakdiv.style.display = 'block';
    breakbtn.style.border = '2px solid black'
    lunchdiv.style.display = 'none'
    dindiv.style.display = 'none'
    lunchbtn.style.border = 'none'
    dinnerbtn.style.border = 'none'
}
function lunchact (){
    breakdiv.style.display = 'none';
    breakbtn.style.border = 'none'
    lunchdiv.style.display = 'block'
    dindiv.style.display = 'none'
    lunchbtn.style.border = '2px solid black'
    dinnerbtn.style.border = 'none'
}
function dinneract (){
    breakdiv.style.display = 'none';
    breakbtn.style.border = 'none'
    lunchdiv.style.display = 'none'
    dindiv.style.display = 'block'
    lunchbtn.style.border = 'none'
    dinnerbtn.style.border = '2px solid black'
}
breakbtn.addEventListener('click',breakact);
lunchbtn.addEventListener('click',lunchact);
dinnerbtn.addEventListener('click',dinneract);


const foods = [{
    mealname:"coffee",
    price:"$2.00"
},{
    mealname:"Bread and milk shake",
    price:"$7.50"
},{
    mealname:"walfer",
    price:"$2.00"
},{
    mealname:"Banana pancake",
    price:"$5.10"
},{
    mealname:"Noodles",
    price:"$6.00"
},{
    mealname:"Omellette",
    price:"$4.00"
},{
    mealname:"Paster",
    price:"$7.020"
},{
    mealname:"Fried rice and chicken",
    price:"$8.00"
},{
    mealname:"Roasted potatoe",
    price:"$6.00"
},{
    mealname:"Noodles",
    price:"$8.00"
},{
    mealname:"Porridge",
    price:"$10.00"
},{
    mealname:"Boiled rice and sauce",
    price:"$10.00"
},{
    mealname:"Boiled yam and egg",
    price:"$5.00"
},{
    mealname:"Baked beans",
    price:"$2.00"
},{
    mealname:"Cube fruits",
    price:"$12.00"
},{
    mealname:"Snacks",
    price:"$6.00"
},{
    mealname:"Bread rows",
    price:"$4.00"
},{
    mealname:"Pancakes and egg",
    price:"$8.00"
}]
const fill = document.getElementById('orderdiv');
let viewform = (optionmeal)=>{
    breakbtn.style.display = 'none'
    lunchbtn.style.display = 'none'
    dinnerbtn.style.display = 'none'

    breakdiv.style.display = "none"
    lunchdiv.style.display = "none"
    dindiv.style.display = "none"

    fill.style.display = 'block'
    let enter = document.getElementById('mealer');
    enter.value = optionmeal
}
let btn1 = document.getElementById('btnbreak1').addEventListener('click',function(){
        viewform(foods[0].mealname);
})
let btn2 = document.getElementById('btnbreak2').addEventListener('click',function(){
        viewform(foods[1].mealname)
})
let btn3 = document.getElementById('btnbreak3').addEventListener('click',function(){
        viewform(foods[2].mealname)
})
let btn4 = document.getElementById('btnbreak4').addEventListener('click',function(){
        viewform(foods[3].mealname)
})
let btn5 = document.getElementById('btnbreak5').addEventListener('click',function(){
        viewform(foods[4].mealname)
})
let btn6 = document.getElementById('btnbreak6').addEventListener('click',function(){
    viewform(foods[5].mealname)
})
let done = document.getElementById('remain');
const backask = document.getElementById('keep')
var absence = document.getElementById('back');
let mainreserve = document.getElementById('reserve')
done.addEventListener('click',function(){
    backask.style.display = 'block'
    mainreserve.style.height= '170vh'
})
absence.addEventListener('click', (e)=>{
    backask.style.display = 'none'
    done.disabled = false
    mainreserve.style.height = '65vh'
    e.preventDefault()
})
let keepname = document.getElementById('eatname')
var keepmail = document.getElementById('eatmail')
const keepnum = document.getElementById('eatnum');
let optres = document.getElementById('resmeal')
var port = document.getElementById('portion')
document.getElementById('experience').addEventListener('click',function(){
    window.open('Graciauser signup.html')
})
backask.addEventListener('submit', (e)=> {
    e.preventDefault()
    validatereserve();
})

function errorreserve (element,message){
    let valparent = element.parentElement;
    var errment = valparent.querySelector('.leftover');

    errment.innerHTML = message;
    valparent.classList.add('invalid')
    valparent.classList.remove('valid')

}
function coreserve (element){
    let valparent = element.parentElement;
    var errment = valparent.querySelector('.leftover');

    errment.innerHTML = ''
    valparent.classList.add('valid')
    valparent.classList.remove('invalid')
}
function validatemailes (mailes){
    let coder = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return coder.test(String(mailes).toLowerCase())
}
let validatereserve = ()=>{
    var namerkeep = keepname.value.trim()
    let mailerkeep = keepmail.value.trim()
    const numerkeep = keepnum.value.trim()
    let optkeep = optres.value.trim()
    const portkeep = port.value.trim()

    if(namerkeep === ''){
        errorreserve(keepname,'This field is required for a meal reserve')
    }else if(namerkeep.length < 5){
        errorreserve(keepname,'Enter a valid name')
    }else {
        coreserve(keepname)
    }

    if(mailerkeep === ''){
        errorreserve(keepmail,'An email-address is required for a meal reserve')
    }else if(!validatemailes(mailerkeep)){
        errorreserve(keepmail,'Email-address entered is invalid')
    }else {
        coreserve(keepmail);
    }

    if(numerkeep === ''){
        errorreserve(keepnum,'A mobile number is required for a meal reserve')
    }else if(numerkeep.length < 10){
        errorreserve(keepnum,'Enter a valid mobile number')
    }else {
        coreserve(keepnum)
    }

    if(optkeep === ''){
        errorreserve(optres,'A meal name is required for a reserve')
    }else {
        coreserve(optres)
    }

    if(portkeep === ''){
        errorreserve(port,'Portion of meal is required')
    }else if(portkeep > 5){
        errorreserve(port,'The number of meal to reserve should be atmost 5')
    }else {
        coreserve(port)
    }
}
let mfoodname = document.getElementById('fastname')
const view1 = document.getElementById('view1')
const view2 = document.getElementById('view2')
var view3 = document.getElementById('view3')


let pizzasobj = [{
    pname:"Chicken pizza",
    pimage:"",
    pcost:"$300"
},{
   pname:"",
   pimage:"",
   pcost:""
},{
    pname:"",
    pimage:"",
    pcost:""
}
]
let item1 = document.getElementById('itemname1')
var item2 = document.getElementById('itemname2')
const item3 = document.getElementById('itemname3')
const Burgerssobj = [{
    pname:"",
    pimage:"",
    pcost:""
},{
   pname:"",
   pimage:"",
   pcost:""
},{
    pname:"",
    pimage:"",
    pcost:""
}
]

let cost1 = document.getElementById('cost1')
var cost2 = document.getElementById('cost2')
var cost3 = document.getElementById('cost3')
var sharwamsobj = [{
    pname:"",
    pimage:"",
    pcost:""
},{
   pname:"",
   pimage:"",
   pcost:""
},{
    pname:"",
    pimage:"",
    pcost:""
}
]

let pancakesobj = [{
    pname:"",
    pimage:"",
    pcost:""
},{
   pname:"",
   pimage:"",
   pcost:""
},{
    pname:"",
    pimage:"",
    pcost:""
}
]