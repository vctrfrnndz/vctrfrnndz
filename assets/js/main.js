var Vic = {
    init: function() {
        this.lessThanIE8();
        this.defaultNav();
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
        }
    },

    lessThanIE8: function() {
        var isLtIE8 = $('html.lt-ie8');

            if(isLtIE8.length > 0) {
                $('body').css('display', 'none');
                $('html')
                    .css({
                        'background': 'black',
                        'padding': '2em',
                        'font-size': '3em',
                        'text-align': 'center',
                        'color': 'white',
                        'font-family': 'sans-serif'
                    })
                    .text('Please do yourself a favor. Update your browser.');
            }
    },

    entryLayout: function() {
        var $entryTemplate = $('.all.entry');

        if($entryTemplate) {
            Vic.helpers.humanDate($('time'));
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
            $menu.on('click', '.item a', setSection);
            $(window).on('hashchange', setSection);

            setSection();
        }
    }

}

$(document).ready(function() {
    Vic.init();
});