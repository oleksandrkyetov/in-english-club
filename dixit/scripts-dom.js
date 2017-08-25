'use strict';

$(document).ready(function() {
    var ranking = {
        members: computations.events.to.members.compute(events)
    };

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: ranking
    }));
});
