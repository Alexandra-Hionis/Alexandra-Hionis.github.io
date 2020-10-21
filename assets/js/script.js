// const submitBtn = document.getElementById("submitBtn");

// click submit button
  $(function() {
    $('#submitBtn').click(function() {
        console.log("submitted!")
    });
});



// // Name and Email validation Function.
// function validation(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
//     if( name ==='' || email ===''){
//     alert("Please fill all fields...!!!!!!");
//     return false;
//     }else if(!(email).match(emailReg)){
//     alert("Invalid Email...!!!!!!");
//     return false;
//     }else{
//     return true;
//     }
//     }