$(function(){
  var px;
  $("#blue").click(function(){
    px = $('#rectangle').height();
    if(px == 100){
      $('#rectangle').css('height','30px');
    }
    else{
    px += 10;
    $('#rectangle').css('height',px);
    }
  });

  $('#green').click(function(){
    $('#rectangle').css('background-color','green');
  });

  $('#red').click(function(){
    $('#rectangle').css('background-color','brown');
  });

  $('#yellow').click(function(){
    $('#rectangle').addClass('visibility');
    $('.visibility').hide();
  });

  $('#orange').click(function(){
    $('#rectangle').show();
  });

});
