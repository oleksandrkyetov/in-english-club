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
                rank: {
                    total: {
                        count: value.total.count,
                        score: {
                            original: value.total.score.original,
                            average: value.total.score.original / value.total.count
                        }
                    },
                    proposition: {
                        count: value.proposition.count,
                        score: {
                            original: value.proposition.score.original,
                            average: value.proposition.score.original / value.total.count
                        }
                    },
                    opposition: {
                        count: value.opposition.count,
                        score: {
                            original: value.opposition.score.original,
                            average: value.opposition.score.original / value.total.count
                        }
                    }
                }
            }
        }), function(value) {
            return -1 * value.rank.total.score.average;
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
