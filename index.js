var addnote = document.querySelector('.add');
var  actualnote=[];
var count=0;
var a;
var buttonnode;
addnote.onclick=function()
{ var note=document.getElementById("fielddd").value; 
 alert(note);
 actualnote.push(note);
 count++;
}
var deletenote=document.querySelector('.delete') ;
deletenote.onclick=function()
{
var deleteval= (prompt("which one?")-1);
   actualnote.splice(deleteval,1);
  count--;
  alert(actualnote);
 document.getElementById(deleteval+1).className='hidden';
   
  
}
var see=document.querySelector('.see');
see.onclick=function()
{
  
  
 for(var t=0;t<count;t++)
 { 
   
    
   document.getElementById(t+1).innerHTML="<br>"+"<br>"+(actualnote[t]);
   document.getElementById(t+1).className='unhidden';
 



   
  
 }

 document.getElementById(t+1).innerHTML=" ";


  }
 

var ednot=document.querySelector('.edit');
ednot.onclick=function()
{
var ans=prompt("Which note?");
document.getElementById(ans).innerHTML="<br>"+"<br>"+prompt("Type in your new note");
}
