// $(document).ready(function(){
// $('.dropdown-toggle').dropdown();
// });  
$(function() {
$(document).ready(function(){
    // Show dropdown on click of "Show" button
    $("#portfolioLink").onClick(function(){
    	$('.dropdown-toggle').dropdown('show');
    });

    }); 
});