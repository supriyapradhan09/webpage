$(document).ready(function(){
    $('.enqform').on('submit',function(e){
        e.preventDefault();
        
        var phone=$('.phoneno').val();
        var name=$('.nameval').val();

      if(phone.length!=10){
        
        $('.erroemessagephone').show();
      }
      else(
        $('.errormessagephone').hide()
      )
    
    })
});