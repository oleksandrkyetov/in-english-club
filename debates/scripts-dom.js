'use strict';

$(document).ready(function() {
    var members = computations.events.to.members.compute(events);

    var ranking = {
        current: {
            in: _.sortBy(_.filter(members, function(m) {
                return m.score.total.raw.current.length >= constants.participations.threshold;
            }), function(m) {
                return -1 * m.score.total.calculated.average.current;
            }),
            out: _.sortBy(_.filter(members, function(m) {
                return m.score.total.raw.current.length < constants.participations.threshold;
            }), function(m) {
                return -1 * m.score.total.calculated.average.current;
            })
        },
        previous: {
            in: _.sortBy(_.filter(members, function(m) {
                return m.score.total.raw.previous.length >= constants.participations.threshold;
            }), function(m) {
                return -1 * m.score.total.calculated.average.previous;
            }),
            out: _.sortBy(_.filter(members, function(m) {
                return m.score.total.raw.previous.length < constants.participations.threshold;
            }), function(m) {
                return -1 * m.score.total.calculated.average.previous;
            })
        }
    };

    _.each(ranking.current.in, function(m, i) {
        members[m.name].rank.current.in = i;
    });

    _.each(ranking.current.out, function(m, i) {
        members[m.name].rank.current.out = i;
    });

    _.each(ranking.previous.in, function(m, i) {
        members[m.name].rank.previous.in = i;
    });

    _.each(ranking.previous.out, function(m, i) {
        members[m.name].rank.previous.out = i;
    });

    _.each(members, function (m) {
        m.rank.performance.in.class = computations.performance.classify({
            current: m.rank.current.in,
            previous: m.rank.previous.in
        });

        m.rank.performance.out.class = computations.performance.classify({
            current: m.rank.current.out,
            previous: m.rank.previous.out
        });
    });

    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        ranking: ranking.current
    }));
});
