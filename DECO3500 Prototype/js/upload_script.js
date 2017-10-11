$(document).ready(function(){
  
  //var filename = document.getElementById("fileUpload").nodeValue;
  
  
  $("#upload_click").click(function() {
    var file = $('#fileUpload')[0].files[0]
    $('.commentsection').append('<div class="cloud"><div class="container"><div class="row"><div class="col-lg-4"><p>The file name is: '+file.name+'</p></div></div></div></div>');
    
    if (file){
  console.log(file.name);
}
    return false;
  });
});