function openNavhello() {
    document.getElementById("mySidenavhello").style.height = "100%";
   }

   function closeNavhello() {
    document.getElementById("mySidenavhello").style.height = "0";
   }

   let nos = document.getElementsByClassName("nos");
   let nn1=0,nn2=0,nn3=0;


   let id1 = setInterval(displaynum1,1);
   let id2 = setInterval(displaynum2,);
   let id3 = setInterval(displaynum3,1);

   function displaynum1() {
       nos[0].innerHTML = `${nn1}`;
       nn1 = nn1+1;
       if (nn1 == 278) {
           clearInterval(id1);
       }
   }
   function displaynum2() {
       nos[1].innerHTML = `${nn2}`;
       nn2 = nn2+1;
       if (nn2 == 906) {
           clearInterval(id2);
       }
   }
   function displaynum3() {
       nos[2].innerHTML = `${nn3}`;
       nn3 = nn3 + 1;
       if (nn3 == 6) {
           clearInterval(id3);
       }
   }


   let a = document.getElementsByClassName("inner");
     let name = "Collection of NFT";
     let arr = Array.from(name),arr2;
     let write = document.getElementsByClassName("content");
     let i=0,flag=0;
     let temp=arr[0],temp2;

     // setInterval(fun, 500);
     setInterval(funa,200);

     function fun() {
         a[0].classList.toggle("line");     
     }

     function funa() {
         
         if (flag==0) {
             
             write[0].innerHTML = `${temp}`;
             i++;
             temp= temp+arr[i];
             if (i==arr.length) {
                 flag=1;
                 arr2=Array.from(name);
                 temp2 = name;
             }
         }

         if (flag==1) {
             write[0].innerHTML = `${temp2}`;
             arr2.pop();
             let pass="";
             for (let k=0; k<arr2.length; k++) {
                 pass=pass+arr2[k];
             }
             temp2 = pass;
             i--;
             if (i==-1) {
                 flag=0;
                 i=0;
                 temp=arr[0];
             }
         }
        

     }