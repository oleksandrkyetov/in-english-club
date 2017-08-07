$(document).ready(function() {

    var events = [];

    data.forEach(function(data) {
        events.push(Handlebars.compile($('#australasia-event-template').html())({
            teams: data.teams,
            members: data.members
        }));
    });

    $('#events').html(events);
});
