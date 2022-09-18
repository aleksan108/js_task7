function setAction(){
    const buttonID = document.getElementById('submit');
    buttonID.addEventListener('click',validateFields);
}

function validateFields(){
    const radiotitleID = document.querySelectorAll('.sradio');
    const inputIDs = document.getElementsByTagName("input");
    const qty = inputIDs.length;
    const today = new Date();
    let error =[];
    const datecheck = inputIDs[2].value.split("-");

    let check_pass = true;
    let check_age = true;
    let i;
    let j = 0;
    for (i = 0; i<=inputIDs.length - 3; i++){
        if (inputIDs[i].type=='text'){
            if (!inputIDs[i].value){
                check_pass = false;
                inputIDs[i].style.borderColor="red";
                switch (i) {
                    case 0: error[j] = "имя";
                    j++;
                    break;
                    case 1: error[j] = "фамилию";
                    j++;
                    break;
                    case 3: error[j] = "email";
                    j++;
                    break;
                }
            }
        } else if (inputIDs[i].type=='date'){
            if (!inputIDs[i].value){
                check_pass = false;
                inputIDs[i].style.borderColor="red";
                error[j] = "дату рождения";
                j++;
            } else if (today.getFullYear()-datecheck[0] < 16){
                check_age = false;
                alert("Регистрация доступна только с 16 лет");
            }
        } else if (inputIDs[i].type=='radio') {
            if (!(inputIDs[i].checked || inputIDs[i+1].checked)){
                check_pass = false;
                radiotitleID[0].style.color = "red";
                radiotitleID[1].style.color = "red";
                error[j] = "пол";
                j++;
            }        
        }
    }
    
    let fullError = error[0]; 
    console.log(error);   
    if (!check_pass){
        if (j>1){
            for (i = 1; i < j-1; i++){
                fullError = fullError + ', ' + error[i];
            }
            fullError = fullError + ', '+ error[j-1] + '.';
        }
        alert(`Укажите ${fullError}`);
    } else if (check_pass && check_age){
        alert(`Добро пожаловать, ${inputIDs[0].value} ${inputIDs[1].value}!`);
        radiotitleID[0].style.color = "white";
        radiotitleID[1].style.color = "white";
        for (i = 0; i<=inputIDs.length - 4; i++){
            inputIDs[i].style.borderColor="white";
        }
    }

}