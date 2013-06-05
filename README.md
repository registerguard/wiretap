wiretap
=======

A small jQuery plugin for Google Analytics event tracking

### In the wild:

>How do I track clicks to a TPS report, when the TPS report isn’t a webpage I can put analytics code on?  
>    &mdash; Bill Lumbergh via [doteduguru](http://doteduguru.com/id7229-idiots-guide-to-event-tracking.html)

```html
<a href="this-form.pdf" onclick="_gaq.push(['_trackEvent', 'PDF Downloads', 'Download', 'TPS Report']);">TPS Report</a></p>
```

--

"How do I track every click everywhere?"

```html
<a href="this-form.pdf" onclick="_gaq.push(['_trackEvent', 'Category', 'Action', 'Label']);">TPS Report</a></p>
```
