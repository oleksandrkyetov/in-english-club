'use strict';

$(document).ready(function() {
    var ranking = {
        combined: _.map(computations.ranking.compute(datas), function (value, key) {
            return {
                name: key,
                rank: {
                    total: {
                        count: value.total.count,
                        score: {
                            original: {
                                raw: value.total.score.original,
                                formatted: numeral(value.total.score.original * 100).format('0.00')
                            },
                            average: {
                                raw: value.total.score.original / value.total.count,
                                formatted: numeral(value.total.score.original / value.total.count * 100).format('0.00')
                            }
                        }
                    },
                    proposition: {
                        count: value.proposition.count,
                        score: {
                            original: {
                                raw: value.proposition.score.original,
                                formatted: numeral(value.proposition.score.original * 100).format('0.00')
                            },
                            average: {
                                raw: value.proposition.score.original / value.total.count,
                                formatted: numeral(value.proposition.score.original / value.total.count * 100).format('0.00')
                            }
                        }
                    },
                    opposition: {
                        count: value.opposition.count,
                        score: {
                            original: {
                                raw: value.opposition.score.original,
                                formatted: numeral(value.opposition.score.original * 100).format('0.00')
                            },
                            average: {
                                raw: value.opposition.score.original / value.total.count,
                                formatted: numeral(value.opposition.score.original / value.total.count * 100).format('0.00')
                            }
                        }
                    }
                }
            }
        })
    };

    ranking.in = _.sortBy(_.filter(ranking.combined, function(item) {
        return item.rank.total.count >= 5
    }), function(item) {
        return -1 * item.rank.total.score.average.raw;
    });

    ranking.out = _.sortBy(_.filter(ranking.combined, function(item) {
        return item.rank.total.count < 5
    }), function(item) {
        return -1 * item.rank.total.score.average.raw;
    });

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: ranking
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
