
var graph=[];
var finder=document.getElementById("row1");
var mapper = document.getElementById("mapelements");
var nodes= [];
for (var i = 0; i <=1500; i++) {
    nodes[i] = [];
}
nodeconnection();
console.log(nodes)
create();
function create(){
    var cellno=1;
    for(i=1;i<=25;i++){
        for(j=1;j<=60;j++){
            rowidentity="row"+i;
            var finder=document.getElementById(rowidentity);
            var div = document.createElement("td");
            div.id= cellno;
            div.style.width = 0.9 +"vw"; 
            div.style.height = 1.5+"vw";
            div.style.backgroundColor="white"
            div.setAttribute("draggable","true;");
            div.setAttribute("onclick","clicky('"+cellno+"');");
            div.setAttribute("ondragover","clicky('"+cellno+"');");
            div.setAttribute("ondragstart","clicky('"+cellno+"');");
            div.setAttribute("ondragenter","clicky('"+cellno+"');");
            finder.appendChild(div);      
            cellno++;
            }
    }
}
array=[]
var temp;
function clicky(x){    
    var cell=document.getElementById(x);   
    if(temp==x){
       return;
    }
    switch(cell.style.backgroundColor) {        
        case "white":
            cell.style.backgroundColor="rgb(47, 49, 128)";
            for(let i=1;i<=1500;i++){                
                    nodes[i][x]=0;
                    nodes[x][i]=0;
            }
            temp=x;
          break;

          case "rgb(47, 49, 128)":
            cell.style.backgroundColor="white"
            for(let i=1;i<=1500;i++){
                    nodes[i][x]=1;
                    nodes[x][i]=1;
                
            temp=x;
          break;
      }
}
return;
}

function clearvisualizer(){
    for(let i=1;i<=1500;i++){            
            var finder=document.getElementById(i);
            finder.style.backgroundColor="white";             
              nodeconnection();
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function maze(){
    clearvisualizer();
    for(let i=1;i<=1500;i++){  
    if(i<=60 || i%60==0 || i>=1440){
        if(i!=1 && i%60!=0){
        clicky(i-1);  
        }        
        else if(i!=1 && i%60==0 && i<1440){
            clicky(i+1);  
            }
            await sleep(10);
       clicky(i);
         
    }   
    }
    console.log(nodes)
}

function nodeconnection(){
for(i=1;i<=1500;i++){
    for(j=1;j<=1500;j++){

if(i+1 == j || i-1 ==j || i-j ==10|| j-i==10|| i==j){
  nodes[i][j]=1;
}
else{
    nodes[i][j]=0;
}
}
}
}

async function visualizer(y){

}
