// function updateCard(){

//    var studentName = document.getElementById("studentName").value;

//    var schoolName = document.getElementById("schoolName").value;

//    var mobilenumber = document.getElementById("mobilenumber").value;

//    var birth = document.getElementById("birth").value;

//    var className = document.getElementById("className").value;

   

//    console.log(studentName);
//    console.log(schoolName);
//    console.log(mobilenumber);
//    console.log(className);
//    console.log(birth);

// }


function updateCard(){


    document.getElementById("studentnameval").innerText = 
    document.getElementById("studentName").value;

    document.getElementById("schoolnameval").innerText = 
    document.getElementById("schoolName").value;

    document.getElementById("mobileval").innerText = 
    document.getElementById("mobilenumber").value;

    document.getElementById("birthval").innerText = 
    document.getElementById("birth").value;

    document.getElementById("classnameval").innerText = 
    document.getElementById("className").value;


}

function printidcard(){

window.print();


}