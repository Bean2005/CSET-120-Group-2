function goToMenu(id){
    if(document.getElementById(id).parentElement.children[1].lastElementChild.value.length > 0 && document.getElementById(id).parentElement.children[2].lastElementChild.value.length > 0)
    {
        window.location.replace("./menu.html");
    }else{
        alert("Please fill out both fields");
    }
}