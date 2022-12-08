$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      // jQuery's animate() method
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

// Submit form
$(document).ready(function() {
  $(document).on('submit', '#my-form', function() {
    var name = $("[name='name']").val();
    $('#placeholder').html(`Thank you <b>${name}</b> for your submission!`);
    return false;
  });
});