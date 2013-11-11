---
title: On doing great at work and loving it
date: 2000-11-11
slug: my-example-post
layout: post
---

- a
- list

<div class="extra">
{% highlight javascript %}
function formatDates() {
    $('time.date').each(function() {
        var date = $(this),
            dateString = date.text(),
            dateFormat;

        dateFormat = moment(dateString).fromNow();
        date.text('About ' + dateFormat).addClass('rendered');
    });
};
{% endhighlight %}
</div>

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

[Link to Google](https://www.google.com)