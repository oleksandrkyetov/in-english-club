'use strict';

$(document).ready(function() {
    var ranking = {};
    computations.ranking.australasia.compute(_.filter(datas, function(data) {
        return data.style === 'Australasia'
    }), ranking);
    computations.ranking.bp.compute(_.filter(datas, function(data) {
        return data.style === 'British Parliamentary'
    }), ranking);

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: _.sortBy(_.map(ranking, function(value, key) {
            return {
                name: key,
                score: {
                    total: {
                        original: value.total.original,
                        formatted: numeral(value.total.original * 100).format('0.0')
                    },
                    proposition: {
                        original: value.proposition.original,
                        formatted: numeral(value.proposition.original * 100).format('0.0')
                    },
                    opposition: {
                        original: value.opposition.original,
                        formatted: numeral(value.opposition.original * 100).format('0.0')
                    }
                }
            }
        }), function(value) {
            return -1 * value.score.total.original
        })
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
