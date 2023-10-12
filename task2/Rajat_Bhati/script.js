let a = document.getElementsByClassName("inner");
let name = " Hey! Myself Rajat Bhati ,I have created a TYPEWRITER ";
let arr = Array.from(name),arr2;
let write = document.getElementsByClassName("content");
let i=0,flag=0;
let temp=arr[0],temp2;

// setInterval(fun, 500);
setInterval(funa,50);

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
