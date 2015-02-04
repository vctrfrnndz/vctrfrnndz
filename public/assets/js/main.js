var Vic = {
    init: function() {
        this.lessThanIE8();
        this.defaultNav();
        this.randomHeader();
        this.entryLayout();
        this.getMediumPosts();
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
                'star-wars',
                'dusty-sky'
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

    getMediumPosts: function() {
        var FEED_URL = 'https://medium.com/feed/@vctrfrnndz';
        var $target = $('.js-medium-feed');
        var feedLength;

        $.ajax({
          url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
          dataType : 'json',
          success  : function (data) {
            if (data.responseData.feed && data.responseData.feed.entries) {
                feedLength = data.responseData.feed.entries.length;    

                $.each(data.responseData.feed.entries, function (i, e) {
                    if(i < 5) {
                        var $entry = $('<li class="entry"><span class="icon icon-pencil"></span> <a href class="title explicit-link"></a><span class="date"></span><span class="description"></span></li>');
                        var date = moment(e.publishedDate).fromNow();

                        $entry.find('.title').text(e.title);
                        $entry.find('.title').attr('title', 'Read "' + e.title + '" on Medium');
                        $entry.find('.title').attr('href', e.link);
                        $entry.find('.date').text(date);
                        $entry.find('.description').text(e.contentSnippet);

                        $target.find('ul').append($entry);
                    }
                });

                if(feedLength > 0) {
                    $target.removeClass('hidden');
                }
            }
          }
        });
    },

    entryLayout: function() {
        var $entryTemplate = $('.all.entry');

        if($entryTemplate) {
            Vic.helpers.humanDate($('time'));
        }
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
            initialSection = '#latest';

        function setSection() {
                var target = location.hash || initialSection,
                    $menuItem = $menu.find('a[href="' + target + '"]');

                $menu.find('.item').removeClass('active');
                $menuItem.parents('.item').addClass('active');
                $sections.hide().siblings(target).show();

                $(window).get(0).scrollTo(0,0);
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