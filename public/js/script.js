$(document).ready(function () {
  $('#form form').submit(function (event) {
    event.preventDefault()
    var formData = $(this).serialize(),
        url = $(this).attr('action'),
        lang = $(this).attr('data-lang')

    $(this).find('span').show()
    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          $('#form input').val('');
          if (lang == 'uz')
            $('#form button').text('Yuborilgan').removeClass('btn-warning').addClass('btn-success')
          else
            $('#form button').text('Отправлено').removeClass('btn-warning').addClass('btn-success')
        } else {
          alert(data)
        }
    })
  })
  jQuery(function ($) {
    $('#phone').mask('+999 99 999 99 99')
  })

})
$(document).mouseup(function (e) {
  var container = $('.burgerMenu')
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide()
  }
})

function switchMenu () {
  $('.burgerMenu').toggle()
}
function showLang(){
  $('.languages').toggle()
  $('.lang svg').toggleClass('rotate')
}