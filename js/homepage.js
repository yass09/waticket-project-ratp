$(document).ready(function(){
  $('#question1').hide();
  $('#question3').hide();
  $('#question4').hide();
  $('#result').hide(); 

  $('.avatar').click(function(){
    $('#login').fadeOut('fast');
    $('#head').slideUp('slow');
    $('#head').removeClass('load');
    $('#head').addClass('header');
    $('#head').slideDown('fast');
    $('#homepage').fadeOut('fast');
    $('#question1').show();
  });

  $('#q1').click(function(){
    $('#question1').fadeOut('fast');
    $('#question3').show().fadeIn('fast');
  });

  $('#q3').click(function(){
    $('#question3').fadeOut('fast');
    $('#question4').show().fadeIn('fast');
  });
  $('#q4').click(function(){
    $('#question4').fadeOut('fast');
    $('#result').show().fadeIn('fast');
  });
});
