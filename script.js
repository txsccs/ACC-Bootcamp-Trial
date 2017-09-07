// Code goes here

/*Toggle list items as done*/
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

/*Remove list items from list*/
$('ul').on('click', 'span', function(event) {
  $(this).parent().remove();
});

/*Add new list items*/
$('input').keypress(function(event) {
    if (event.which === 13) {
      var todoItem = $(this).val();

      $('ul').append(
        "<li>" + 
          "<span>" +
            "x" +
          "</span>" +
           todoItem + 
        "</li>"
      );
    }
});

/*clear input box after enter*/
$('input:text').keyup(function(reset){
  if (event.which == 13) {
        $(this).val('');
  }
    });