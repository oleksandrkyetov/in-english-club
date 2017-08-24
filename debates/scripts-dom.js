'use strict';

$(document).ready(function() {
    var ranking = {
        current: {
            all: _.map(computations.ranking.compute(datas), mappers.for.ranking)
        },
        previous: {
            all: _.map(computations.ranking.compute(_.slice(datas, 0, datas.length - 1)), mappers.for.ranking)
        }
    };

    ranking.current.in = _.sortBy(_.filter(ranking.current.all, function(item) {
        return item.rank.total.count >= constants.participations.threshold;
    }), function(item) {
        return -1 * item.rank.total.score.average.raw;
    });

    ranking.previous.in = _.sortBy(_.filter(ranking.previous.all, function(item) {
        return item.rank.total.count >= constants.participations.threshold
    }), function(item) {
        return -1 * item.rank.total.score.average.raw;
    });

    _.each(ranking.current.in, function(itemCurrent, indexCurrent) {
        var indexPrevious = _.findIndex(ranking.previous.in, function(itemPrevious) {
            return itemPrevious.name === itemCurrent.name;
        });

        itemCurrent.rank.total.performance = {
            class: computations.performance.classify({
                current: indexCurrent,
                previous: indexPrevious
            })
        };
    });

    ranking.current.out = _.sortBy(_.filter(ranking.current.all, function(item) {
        return item.rank.total.count < constants.participations.threshold
    }), function(item) {
        return -1 * item.rank.total.score.average.raw;
    });

    ranking.previous.out = _.sortBy(_.filter(ranking.previous.all, function(item) {
        return item.rank.total.count < constants.participations.threshold
    }), function(item) {
        return -1 * item.rank.total.score.average.raw;
    });

    _.each(ranking.current.out, function(itemCurrent, indexCurrent) {
        var indexPrevious = _.findIndex(ranking.previous.out, function(itemPrevious) {
            return itemPrevious.name === itemCurrent.name;
        });

        itemCurrent.rank.total.performance = {
            class: computations.performance.classify({
                current: indexCurrent,
                previous: indexPrevious
            })
        };
    });

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: ranking.current
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
