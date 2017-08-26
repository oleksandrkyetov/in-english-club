'use strict';

$(document).ready(function() {
    preparators.events.points.prepare(events);

    var ranking = {
        current: {
            members: computations.events.to.members.compute(events)
        },
        previous: {
            members: computations.events.to.members.compute(_.slice(events, 0, events.length - 1))
        }
    };

    ranking.current.in = _.sortBy(_.filter(ranking.current.members, function(m) {
        return m.rank.total.point.values.length >= constants.participations.threshold;
    }), function(m) {
        return -1 * m.rank.total.point.average;
    });

    ranking.previous.in = _.sortBy(_.filter(ranking.previous.members, function(m) {
        return m.rank.total.point.values.length >= constants.participations.threshold;
    }), function(m) {
        return -1 * m.rank.total.point.average;
    });

    _.each(ranking.current.in, function(itemCurrent, indexCurrent) {
        var indexPrevious = _.findIndex(ranking.previous.in, function(itemPrevious) {
            return itemPrevious.name === itemCurrent.name;
        });

        itemCurrent.rank.total.performance.class = computations.performance.classify({
            current: indexCurrent,
            previous: indexPrevious
        });
    });

    ranking.current.out = _.sortBy(_.filter(ranking.current.members, function(m) {
        return m.rank.total.point.values.length < constants.participations.threshold;
    }), function(m) {
        return -1 * m.rank.total.point.average;
    });

    ranking.previous.out = _.sortBy(_.filter(ranking.previous.members, function(m) {
        return m.rank.total.point.values.length < constants.participations.threshold;
    }), function(m) {
        return -1 * m.rank.total.point.average;
    });

    _.each(ranking.current.out, function(itemCurrent, indexCurrent) {
        var indexPrevious = _.findIndex(ranking.previous.out, function(itemPrevious) {
            return itemPrevious.name === itemCurrent.name;
        });

        itemCurrent.rank.total.performance.class = computations.performance.classify({
            current: indexCurrent,
            previous: indexPrevious
        });
    });

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: ranking.current
    }));
});
