// Scroll bar

// let progress = document.getElementById('progressbar');
// let totalHeight = document.body.scrollHeight - window.innerHeight;
// window.onscroll = function () {
//   let progressHeight = (window.pageYOffset / totalHeight) * 100;
//   progress.style.height = progressHeight + "%";
// }

// const submitBtn = document.getElementById("submitBtn");

$(document).on('click',function(){
  $('.collapse').collapse('hide');
})

// click submit button
  $(function() {
    $('#submitBtn').click(function() {
        console.log("submitted!")
    });
});


// Parallax background
// document.addEventListener("mousemove" , parallax);
// function parallax(e){
//   this.querySelectorAll('.layer').forEach(layer => {
//     const speed = layer.getAttribute('data-speed')
//     const x = (window.innerwidth - e.pageX*speed)
//     const x = (window.innerwidth - e.pageY*speed)

//     layer.style.transform = 'translateX(${x}px) translateY(${y}px)'
//   })
// }

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

// rotator
// const text = document.getElementById('text');
// const word = text.getElementsByTagName('span');

// const i = 0;

// function rotator() {
//   word[i].style.display = 'none';
//   i = (i + 1) % word.length;
//   word[i].style.display = 'initial';
// }
// setInterval(rotator, 800);


