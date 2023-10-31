$(document).ready(function(){
    $('.signUp').toggle();  
    
    $('#signUpBTN').click(function(){
      $('.loginPage').toggle();
      $('.signUp').toggle(); 
    });
    
  });
  
  $(function() {
    
    //click the eye icon w/class reveal 
    $(".reveal").on('click',function() {
      let $pwd = $("#oldpwd");
      
      if ($pwd.attr('type') === 'password') {
          $pwd.attr('type', 'text');
         $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
      } else {
          $pwd.attr('type', 'password');
       $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
      }
  });
    
  });
  