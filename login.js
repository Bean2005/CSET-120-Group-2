function goToMenu(id){
    if(document.getElementById(id).parentElement.children[1].lastElementChild.value.length > 0 && document.getElementById(id).parentElement.children[2].lastElementChild.value.length > 0)
    {
        window.location.replace("./menu.html");
    }else{
        alert("Please fill out both fields");
    }
}

function deleteAcc(){
    alert("Account successfully deleted");
}

function gMenu(){
    window.location.replace("./gMenu.html");
}

function login(id){
    if(document.getElementById(id).parentElement.children[1].lastElementChild.value.length > 0 && document.getElementById(id).parentElement.children[2].lastElementChild.value.length > 0)
    {
        if(document.getElementById(id).parentElement.children[1].lastElementChild.value == "admin" && document.getElementById(id).parentElement.children[2].lastElementChild.value == "1234")
        {
            window.location.replace("./gMenu.html");
        }else{
            window.location.replace("./menu.html");
        }
    }else{
        alert("Please fill out both fields");
    }
}