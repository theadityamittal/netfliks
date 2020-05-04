var tabitems = document.getElementsByClassName('tab-item');
var tabcontent = document.getElementsByClassName('tab-content-item');

function currenttab(element){
    for(i=0; i<tabitems.length; i++){
        if(tabitems[i].id == element.id)
        {
            tabitems[i].style.borderBottom = "#e50915 solid 5px";
            tabcontent[i].style.display = "unset";
            if(i!=0){
                document.getElementById("tab-1").style.borderBottom = "none";
            }
        }
        else{
            tabitems[i].style.border = "";
            tabcontent[i].style.display = "none";
        }
    } 
}