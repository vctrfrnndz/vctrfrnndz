var Vic = {
    init: function() {
        this.lessThanIE8();
        this.defaultNav();
        this.randomHeader();
        this.entryLayout();
    },

    helpers: {
        breakpoint: function(screenSize) {
            var breakpoints = {
                'small': 0,
                'medium': 768,
                'large': 1200
            };

            return breakpoints[screenSize];
        },
        viewport: function(dimesion) {
            var size = {
                    width: $(window).width(),
                    height: $(window).height()
                }

            return size[dimension];
        },
        humanDate: function($target) {
            $target.each(function() {
                var $dateElement = $(this),
                    dateString = $dateElement.text(),
                    dateFormat;
                
                dateFormat = moment(dateString).fromNow();
                $dateElement.text('About ' + dateFormat).addClass('rendered');
            });
        },
        getTheme: function() {
            var themes = [
                'forest',
                'star-wars'
            ];

            return themes[Math.floor(Math.random() * themes.length)];
        }
    },

    lessThanIE8: function() {
        var isLtIE8 = $('html.lt-ie8');

            if(isLtIE8.length > 0) {
                $('body').css('display', 'none');
                $('html').text('Please do yourself a favor. Update your browser.');
            }
    },

    entryLayout: function() {
        var $entryTemplate = $('.all.entry');

        if($entryTemplate) {
            Vic.helpers.humanDate($('time'));
        }

        Vic.setBgHeight();

        $(window).on('resize', function() {
            Vic.setBgHeight();
        });
    },

    setBgHeight: function() {
        var windowHeight = $(window).outerHeight(),
            $header = $('.header');

        $header.css('min-height', (windowHeight / 3));       
    },

    randomHeader: function() {
        var $header = $('.header'),
            theme = Vic.helpers.getTheme();

        if(!$header.hasClass('custom-bg')) {
            $header.find('.background').addClass(theme);
        }
    },

    defaultNav: function() {
        var $defaultTemplate = $('.all.default'),
            $sections = $defaultTemplate.find('.content-area section'),
            $menu = $defaultTemplate.find('.header .menu'),
            initialSection = '#about-me';

        function setSection() {
                var target = location.hash || initialSection,
                    $menuItem = $menu.find('a[href="' + target + '"]');

                $menu.find('.item').removeClass('active');
                $menuItem.parents('.item').addClass('active');
                $sections.hide().siblings(target).show();
        }

        if($defaultTemplate) {
            $menu.on('click touchstart', '.item a', setSection);
            $(window).on('hashchange', setSection);

            setSection();
        }
    }

}

$(function() {
    FastClick.attach(document.body);
    Vic.init();
});