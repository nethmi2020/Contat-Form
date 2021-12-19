const form=document.querySelector("form");
statustext=form.querySelector('.msgtext')

// form.onsubmit=(e)=>{
//     e.preventDefault();
// }
form.onsubmit=function(e){
    e.preventDefault();
    statustext.style.color="red";
    statustext.style.display="inline-block";


let xhr=new XMLHttpRequest();     //create new xmlobject
xhr.open("POST","message.php", true);   //sending post request to message.php file
xhr.onload=()=>{ //once ajax loaded
    if(xhr.readyState == 4 && xhr.status == 200) // if xhr ready state 4 and response state is 200 there is no error
        {
            let response=xhr.response; //store aja response in a response variabe
            //response is an error sattus text change in red
            if(response.indexOf("email and message is required ")!=-1 || response.indexOf("Enter a Valid Email address")||  response.indexOf("Sorry fail to send your message")){
                statustext.style.color="red";
            }
            else{
                form.reset();
                setTimeout(() =>{
                    statustext.style.display="none";
                }, 3000);
            }
            console.log(response);
            statustext.innerText=response;
        }
    }

    let formData = new FormData(form); // create new formobject data  
    // console.log('hiR7');
      xhr.send(formData); //sending form data
 
}