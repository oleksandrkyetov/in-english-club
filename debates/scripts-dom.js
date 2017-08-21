'use strict';

$(document).ready(function() {
    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        // ranking: computations.ranking.combine({
        //     australasia: computations.ranking.for('australasia')
        //         .compute(_.filter(datas, function(data) {
        //             return data.style === 'Australasia'
        //         })),
        //     british: computations.ranking.for('british')
        //         .compute(_.filter(datas, function(data) {
        //             return data.style === 'British Parliamentary'
        //         }))
        // })
        ranking: computations.ranking.for('australasia')
            .compute(_.filter(datas, function(data) {
                return data.style === 'Australasia'
            }))
    }));

    // var events = [];
    // _.each(datas, function(data) {
    //     events.push(Handlebars.compile($('#australasia-event-template').html())({
    //         teams: data.teams
    //     }));
    //     events.push(Handlebars.compile($('#british-parliamentary-event-template').html())({}));
    // });
    // $('#events').html(events);
});
