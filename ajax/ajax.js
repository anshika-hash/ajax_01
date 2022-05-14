console.log('Ajax Request');

////////////////////////// Fatch The Data /////////////////////
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);
 
function buttonClickHandler(){
    console.log('You Have Clicked The Fatch Btn');
    const xhr  = new XMLHttpRequest();
    xhr.open('GET','ajaxData.txt',true);
    xhr.onprogress  = function(){
        console.log('On Progress');
    }

    xhr.onreadystatechange  = function(){
        console.log('ready state',xhr.readyState);
    }

    xhr.onload  = function(){
        if(this.status == 200){
            let data = this.response;
            console.log(data);
            let fetchData = document.getElementById('fetchData');
            
        }else{
            console.log('Error Occured');
        }
    }
xhr.send();
}

////////////////////////// Send The Data /////////////////////

let backupbtn = document.getElementById('backupbtn');
backupbtn.addEventListener('click',backupbtnClickHandler);
 
function backupbtnClickHandler(){
    console.log('You Have Clicked The Fatch Btn');
    const xhr1  = new XMLHttpRequest();
    xhr1.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr1.getAllResponseHeaders('Content-type','application/json');
    xhr1.onprogress  = function(){
        console.log('On Progress');
    }

    xhr1.onreadystatechange  = function(){
        console.log('ready state',xhr1.readyState);
    }

    xhr1.onload  = function(){
        if(this.status == 200){
            let data = this.response;
            console.log(data);
           
            
        }else{
            console.log('Error Occured');
        }
    }
    params  = `{"name":"testiajd","salary":"283478932","age":"23"}`;
xhr1.send(params);
}

/////////////////////////////////////Get The Data ////////////

let empbtn = document.getElementById('empbtn');
empbtn.addEventListener('click',empbtnClickHandler);
 
function empbtnClickHandler(){
    console.log('You Have Clicked The Fatch Btn');
    const xhr3  = new XMLHttpRequest();
    xhr3.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    xhr3.onprogress  = function(){
        console.log('On Progress');
    }

    xhr3.onreadystatechange  = function(){
        console.log('ready state',xhr3.readyState);
    }

    xhr3.onload  = function(){
        if(this.status == 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }else{
            console.log('Error Occured');
        }
    }
xhr3.send();
}
