'use strict';

$(document).ready(function() {
    var ranking = {};

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: ranking
    }));
});
