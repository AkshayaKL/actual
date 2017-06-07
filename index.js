var ans;
var addnote = document.querySelector('.add');
var  actualnote=[];
var count=0;
var a;
var buttonnode;
addnote.onclick=function()
{ var note=document.getElementById("fielddd").value; 
  
 actualnote.push(note);
 count++;
 
}
var deletenote=document.querySelector('.delete') ;
deletenote.onclick=function()
{
var deleteval= (prompt("which one?")-1);
   actualnote.splice(deleteval,1);
  count--;
  
 document.getElementById(deleteval+1).className='hidden';

 document.getElementById(count+1).innerHTML=" ";
  
 seez(); 
  
}
var see=document.querySelector('.see');
see.onclick=function(){seez();}
function seez()
{
  
  
 for(var t=0;t<count;t++)
 { 
     if(t>5)
    {
      var newnote=document.createElement("li");
       newnote.id=t+1;
          newnote.className="hidden";
           document.getElementById("notes").appendChild(newnote);
         }

    
   document.getElementById(t+1).innerHTML="<br>"+"<br>"+actualnote[t];
   document.getElementById(t+1).className='unhidden';
 
 

   
  
 }

 

  }
var editz;
var ok; 
var input;
var ednot=document.querySelector('.edit');
ednot.onclick=function()
{seez();
  ans=prompt("which one");
    input=document.createElement("input");
         input.type="text";
           input.id="notepastez";
               input.value=actualnote[ans-1];
                    
                        document.getElementById(ans).appendChild(input);
                                buttonz=document.createElement("button");
                                 buttonz.onclick=function(){ok();}

                                  buttonz.id="but"
                                  
                                  document.getElementById(ans).textContent=" ";  
                                 document.getElementById(ans).appendChild(input);  
                                 document.getElementById(ans).appendChild(buttonz); 
                                 buttonz.innerHTML="ok?";                                                      
  
  
  


}
function ok()
{
document.getElementById(ans).innerHTML="<br />"+"<br />"+input.value;
actualnote[ans-1]=input.value; 
}
