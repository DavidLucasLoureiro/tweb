window.onload = function () {
    init();
};

var form = document.querySelector('form');
// Evento para que o submit não submeta qualquer dados
form.addEventListener('submit', function (event) {
    event.preventDefault();
});

let Name = document.querySelector('#Name');
let Amount = document.querySelector('#Amount');
let btnDonate = document.querySelector('#btnDonate');
let Monthly = document.querySelector('#Monthly');
let msg = document.querySelector('#msg');
let situacao = document.querySelector('#situacao');
let Message = "";

function init() {
    Name.value = '';
    Amount.value = '0';
    Message='';
}

btnDonate.addEventListener('click', function () {
 
    checkForm();
})

function checkName(fld) {
    var letters = /^[A-zÀ-ú]+$/;
    if (fld.value.trim().match(letters))
        return true;
    return false;
}

function checkForm() {
    if (form.checkValidity()) {
        if(!checkName(Name)){
            Name.setCustomValidity('Nome Inválido!');
            return;
        }
        debugger
       let a = parseFloat(Amount.value);
       if(a<=0){
        setCustomValidity('Montante deve ser maior que zero');
            return;
       }

       donate(a);
    }
    else {
        form.querySelectorAll(':invalid')[0].focus();
    }
}

function donate(m){
    console.log("m: "+m);
    let meals = Math.floor(m/1.5);
    console.log("meals: "+meals);
    let daily_meals = Math.floor(meals/2);
    console.log("dailymeals: "+daily_meals);
    let monthly_meals = Math.floor(daily_meals/30);
    console.log("monthlymeals: "+monthly_meals);
    if(Monthly.checked == true)
        if(m>=40){
            if(meals==1){
                Message = "O seu donativo permitirá fornecer aproximadamente "+ meals +" refeição";
            } else{
                Message = "O seu donativo permitirá fornecer aproximadamente "+ meals +" refeições";
            }
        }
        else {
            if(daily_meals==1){
                Message = "O seu donativo permitirá alimentar diariamente "+ daily_meals +" pessoa";
            }else{
                Message = "O seu donativo permitirá alimentar diariamente "+ daily_meals +" pessoas";
            }
            
        }
    else{
        if(Amount.value>=90){
            if(monthly_meals==1){
                Message = "O seu donativo permitirá alimentar "+ monthly_meals +" pessoa durante este mês";
            }else{
                Message = "O seu donativo permitirá alimentar "+ monthly_meals +" pessoas durante este mês";
            }
        }
        else{
            if(daily_meals==1){
                Message = "O seu donativo permitirá alimentar uma pessoa durante "+ daily_meals +" dia";
            }else{
                Message = "O seu donativo permitirá alimentar uma pessoa durante "+ daily_meals +" dias";
            }
        }
    }
    console.log(Message, Monthly.checked);
    msg.textContent=Message;
}