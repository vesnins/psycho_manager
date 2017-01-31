$(document).ready(function() {

    // add active class to header
    $('a.nav-toggle-btn').click(function() {
        $(this).parents('#header').toggleClass("active");
        return false;
    });

    // hover animation on article list elements
    var articleListItem = $('.article-list li'),
        banner = $('.banner');
    articleListItem.hover(function() {
        if( $(this).hasClass('element-item')) $(this).addClass("hover-el").animate({"marginTop": "-10px"}, "500");
        else $(this).addClass("hover-el").animate({"top": "-10px"}, "500");
    },function() {
        if( $(this).hasClass('element-item')) $(this).removeClass("hover-el").animate({"marginTop": "0"}, "500");
        else $(this).removeClass("hover-el").animate({"top": "0"}, "500");
    });
    banner.hover(function() {
        $(this).addClass("hover").animate({"top": "-10px"}, "500");
    }, function() {
        $(this).removeClass("hover").animate({"top": "0"}, "500");
    });

    // user-form validation
    $('#submit-user-form').click(function() {
        var formValid = true;
        $('#user-form input').each(function() {
            var formRow = $(this).parents('.form-row');
            if (this.checkValidity()) {
                formRow.addClass('has-success').removeClass('has-error');
            } else {
                formRow.addClass('has-error').removeClass('has-success');
                formValid = false;
            }
        });
        if (formValid) {
            $('#user-form form').addClass('hidden');
            $('#sucess-alert').removeClass('hidden');
        }
    });

    // submit-reg-form validation
    $('#submit-reg-form').click(function() {
        var formValid = true;
        $('#reg-form input').each(function() {
            var formRow = $(this).parents('.form-row');
            if (this.checkValidity()) {
                formRow.addClass('has-success').removeClass('has-error');
            } else {
                formRow.addClass('has-error').removeClass('has-success');
                formValid = false;
            }
        });
        if (formValid) {
            $('#reg-form form').addClass('hidden');
            $('#reg-sucess-alert').removeClass('hidden');
            $('.recall-box-holder .date-big, .recall-box-holder .teacher-info, .recall-box > h3').hide();
        }
    });

    // submit-popup-form validation
    $('#submit-popup-form').click(function() {
        var formValid = true;
        $('#popup-form input').each(function() {
            var formRow = $(this).parents('.form-row');
            if (this.checkValidity()) {
                formRow.addClass('has-success').removeClass('has-error');
            } else {
                formRow.addClass('has-error').removeClass('has-success');
                formValid = false;
            }
        });
        if (formValid) {
            $('#popup-form-holder').addClass('hidden');
            $('#sucess-alert-popup').removeClass('hidden');
        }
    });

    // script for popup
    var overlay = $('#overlay');
    var open_modal = $('.open-modal');
    var close = $('.modal-close, #overlay');
    var modal = $('.modal-div');

    open_modal.click( function(event){
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400, function(){
            $(div).css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
        });
    });
    close.click(function(){
        modal.animate({opacity: 0, top: '45%'}, 200,
            function(){$(this).css('display', 'none');
                overlay.fadeOut(400);
            }
        );
    });

    // script for hide header
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('#header').addClass('hidden')
        } else {
            $('#header').removeClass('hidden')
        }
        lastScrollTop = st;
    });

    // script for content animation on library page
    if($("div").is(".library-content")) {
        var librCont = $('.library-content'),
            posStart = 200;
            librAnim = librCont.find('.l-1200');
        window.onscroll= function() {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop,
                posScroll = -(posStart - scrolled);
            librAnim.css('top', posScroll);
            if (posScroll > 0) librAnim.css('top', 0);
        };
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.main-page-video video').hide();
    }

 });

