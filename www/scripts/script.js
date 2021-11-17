$(document).ready(function () {

  $('.burger').on('click', function () {

    $('.nav-menu').slideToggle();
  });


  //переключение в контактах
  $('.contacts-list-link').on('click', function (event) {
    event.preventDefault();

    $('.contacts-list-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.contacts-list-link');

    $('.contact-info').removeClass('active');
    $('.contact-info').eq(index).addClass('active');
  });



});
