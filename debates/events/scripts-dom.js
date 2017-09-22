'use strict';

$(document).ready(function() {
    var html = [];
    _.each(_.filter(events, function(event) {
        return event.style === 'Australasia';
    }), function(event) {
        html.push(Handlebars.compile($('#australasia-event-template').html())({
            event: event
        }));
    });

    _.each(events, function(event) {
        if (event.style === 'Australasia') {
            html.push(Handlebars.compile($('#australasia-event-template').html())({
                event: event
            }));
        }

        if (event.style === 'British Parliamentary') {
            html.push(Handlebars.compile($('#british-parliamentary-event-template').html())({
                event: event
            }));
        }
    });

    $('#events').html(html);
});
