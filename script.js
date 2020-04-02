 var visi=0;
        function visible()
        { 
          if( visi == 0 )
          {
            document.getElementById('mymenu').style.display='block';
            document.getElementById('loginpage').style.display='none';
            visi=1;
          }
          else
          {
            document.getElementById('mymenu').style.display='none';
            visi=0;
          }
        }
var visi2=0;
function visible2()
{       
    visi=0;
    if( visi2 == 0 )
          {
            document.getElementById('loginpage').style.display='block';
            document.getElementById('mymenu').style.display='none';
            visi2=1;
          }
          else
          {
            document.getElementById('loginpage').style.display='none';
            visi2=0;
          }
}        
 var count=0;
        function drop()
        { 
        if( count == 0)
        {
        document.getElementById('drop1').style.display="block";
        count=1;
        }
        else
        {
        document.getElementById('drop1').style.display="none";
        count=0;
        }
        }

var xx= document.getElementById("checkmale");
        var y=document.getElementById('checkfemale');
        function checkX()
        {
          xx.checked=false;
        }
        function checkY()
        {
          y.checked=false;
        } 

var x=0;
showbanner();
function showbanner()
{ 
        var i = document.getElementsByClassName("banner");
    if(x>2){
        x=0;
    }
    for (var j = 0; j<i.length; j++) {
        i[j].style.display="none";
    }
    i[x].style.display="block";
     x++;
     setTimeout(showbanner,4000);
 }

var xx= document.getElementById("checkmale");
var y=document.getElementById('checkfemale');
        function checkX()
        {
          xx.checked=false;
        }
        
        function checkY()
        {
          y.checked=false;
        }