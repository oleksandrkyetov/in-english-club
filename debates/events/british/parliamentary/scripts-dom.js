'use strict';

$(document).ready(function() {
    var html = [];
    _.each(_.filter(events, function(event) {
        return event.style === 'British Parliamentary';
    }), function(event) {
        html.push(Handlebars.compile($('#british-parliamentary-event-template').html())({
            event: event
        }));
    });

    $('#events').html(html);
});
