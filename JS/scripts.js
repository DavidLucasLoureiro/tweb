let name = document.querySelector("#name");
let amount = document.querySelector("#amount");
let donate = document.querySelector("#donate");
let message = "";
let monthly = document.querySelector("#monthly");

donate.addEventListner('click', function(){
    donate();
})

function donate(){
    let meals = Math.floor(amount.value/1.5);
    let daily_meals = Math.floor(meals/2);
    if(monthly.checked==false)
        if(amount.value>=40){
            message = "O seu donativo permitirá fornecer aproximadamente "+ meals +" refeições";
        }
        else {
            message = "O seu donativo permitirá alimentar diariamente "+ daily_meals +" pessoas";
        }
    else{
        if(amount.value>=90){
            message = "O seu donativo permitirá alimentar "+ Math.floor(daily_meals/30) +" pessoas durante este mês"
        }
        else{
            message = "O seu donativo permitirá alimentar uma pessoa durante "+ daily_meals +" dias";
        }
    }

    return message;
}