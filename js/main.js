var kx = {
  init: function () {
    var self = this;
    self.bindEvent();
  },
  bindEvent: function () {
    var self = this;
    var $guangbo = $('.guangbo');
    $('.rate_hover').on('mouseover', function () {
      var hasRate = $('.rate_list').hasClass('hasrate');
      if(hasRate){
        return
      }
      var idx = Number($(this).attr('id').split('_')[1]);
      for (var i = 0; i < idx + 1; i++) {
        $('#rate_' + i).find('img').attr('src','../img/star_onmouseover.png');
      }
    });
    $('.rate_hover').on('mouseout', function () {
      var hasRate = $('.rate_list').hasClass('hasrate');
      if(hasRate){
        return
      }
      for (var i = 0; i < 6; i++) {
        $('#rate_' + i).find('img').attr('src','../img/star_hover.png');
      }
    });
    $('.rate_hover').on('click', function () {
      var idx = Number($(this).attr('id').split('_')[1]);
      $('.rate_list').addClass('hasrate');
      for (var i = 0; i < idx + 1; i++) {
        $('#rate_' + i).find('img').attr('src','../img/star_onmouseover.png');
      }
    });
    $guangbo.on('click', '.menu_title', function () {
      var $item = $(this).closest('.list_menu_item');
      var index = $item.index();
      $('.menu_drop').addClass('hidden');
      $('.title_icon').removeClass('up').addClass('down')
      $item.find('.menu_drop').removeClass('hidden');
      $item.find('.title_icon').removeClass('down').addClass('up');

    })
  }
};
kx.init();