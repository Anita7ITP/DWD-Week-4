
$(document).ready(function(){
 $('a').on('click', function(e){  
    e.preventDefault( );
    var pageRef = $(this).attr('href');
  
    callPage(pageRef)

});

function callPage(){
  $.ajax({
    url:"Number of ITP Students on the floor every hour.html",
    type: "GET",
    dataType: "text",
    
    success: function (response) {
      console.log("page loaded", response);
      $('.content').html(response);
    },
    
    error: function (error) {
      console.log("page NOT loaded", error);
    },
    complete: function (xhr, status) {
      console.log("Request Complete!");
    }
  });
}