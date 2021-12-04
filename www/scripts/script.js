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


  $('.filter-link').on('click', function (e) {
    e.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-item').show();
      return;
    }

    $('.portfolio-item').each(function () {
      let portfolioType = $(this).data('type');

      if (linkType === portfolioType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });

  $('.filter-other').on('click', function (e) {
    e.preventDefault();
    $('.filter-show').show();
    $(this).hide();
  });

  $('.filter-all').on('click', function (e) {
    e.preventDefault();
    $('.filter-other').show();
    $('.filter-show').hide();
  });



  // Аккордеон
  let prevIndex;

  $('.faq-button').on('click', function () {
    let currentIndex = $(this).index('.faq-button');

    if (currentIndex === prevIndex) {
      $(this).next().slideToggle();
      $(this).toggleClass('open');
      return;
    }

    $(this).next().slideDown();
    $(this).addClass('open');
    $('.faq-button').eq(prevIndex).next().slideUp();
    $('.faq-button').eq(prevIndex).removeClass('open');
    prevIndex = currentIndex;
  });


  //slider
  if ($('.review-list').length) {
    $('.review-list').slick();
  }


  //form alert
  $('.form-btn').on('click', function (e) {
    e.preventDefault();
    let inputText = document.getElementById("name").value;
    alert(`Спасибо, ${inputText}! Совсем скоро мы свяжемся с вами.`);
  });

});


