$(document).ready(function () {




  //переключение в контактах
  $('.contacts-list-link').on('click', function (event) {
    event.preventDefault();
    $('.contacts-list-link').removeClass('active');
    $(this).addClass('active');
  });

});
