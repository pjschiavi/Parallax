document.addEventListener('wheel', function (event) {
        if(event.deltaY >= 0) {
            $('html, body').animate({ scrollTop: $('#slide4').offset().top }, 500);
        } else {
            $('html, body').animate({ scrollTop: $('#slide1').offset().top }, 500);
        }
    });

$(document).ready(function () {
    $('a[href*=#]').each(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname
            && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function () {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({ scrollTop: targetOffset }, 500);
                    return false;
                });
            }
        }
    });
});