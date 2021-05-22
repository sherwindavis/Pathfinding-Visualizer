
var finder=document.getElementById("row1");
var mapper = document.getElementById("mapelements");
create();
function create(){
    for(i=1;i<=25;i++){
        for(j=0;j<=60;j++){
            rowidentity="row"+i;
            var finder=document.getElementById(rowidentity);
            var div = document.createElement("td");
            var idofrow=i+"-"+j;
            div.id= idofrow;
            div.style.width = 0.9 +"vw";
            div.style.height = 1.5+"vw";
            div.setAttribute("draggable","true;");
            div.setAttribute("onclick","clicky('"+idofrow+"');");
            div.setAttribute("ondragover","clicky('"+idofrow+"');");
            finder.appendChild(div);            
            }
    }
}
var temp;
function clicky(x){
    var cell=document.getElementById(x);   
    if(temp==x){
        return;
    }

    if(cell.style.backgroundColor=="blue")
    {
        cell.style.backgroundColor="white";
    }
    else  {
    cell.style.backgroundColor="blue";
    }
    temp=x;
}
function clearvisualizer(){
    for(i=1;i<=25;i++){
        for(j=0;j<=60;j++){
            var idofrow=i+"-"+j;
            var finder=document.getElementById(idofrow);
            finder.style.backgroundColor="white"
            }
    }
}

async function maze1(){
    clearvisualizer()
    for(i=1;i<=25;i++){
        for(j=0;j<=60;j++){
            var idofrow=i+"-"+j;
            var finder=document.getElementById(idofrow);
            finder.style.backgroundColor="white"
            }
    }
}