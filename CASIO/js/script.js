//ヘッダーナビゲーションの表示切り替え
$(function () {
    $('.header_navi a').click(function () {
        $('body').toggleClass('header_navi_open');
        $('.header_navi_container').fadeToggle(200);
        $('.header_navi .fas').fadeToggle();
        return false;
    });
});

// 言語選択切り替え
$(function () {
    $('.navigation').click(function () {
        $(this).toggleClass('open');
        $('.navigation_lang_list').fadeToggle(100);
        $('.fa-caret-up').toggle();
        $('.fa-caret-down').toggle();
        return false;
    });
});

// トップに戻るボタン
$(function() {
    var topBtn = $('.page_top_button');
    topBtn.css('top', '130vh')  
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.css('top', '80vh');
            topBtn.fadeIn();
        } else {
            topBtn.css('top', '130vh')  
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// SP画面時のフッターナビゲーションの開閉
$(function () {
    $('.footer_navi_title').click(function () {
        $(this).siblings('ul').slideToggle(100);
        $(this).children('i').toggle();
        $('.footer_navi_item .fa-chevron-right').toggle();
    });
});