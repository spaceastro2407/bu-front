$(document).ready(function(){

  $(".resource-container").on('click', function() {
    console.log($(this).data('opportunity-id'));
  });
});