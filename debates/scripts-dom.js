'use strict';

$(document).ready(function() {
    // Calculate adjusted score for all teams
    var members = [];
    _.each(datas, function(data) {
        var average = (data.teams.proposition.score.original + data.teams.opposition.score.original) / 2;

        data.teams.proposition.score.adjusted = (data.teams.proposition.score.original / average) * 100;
        _.each(data.teams.proposition.members, function(name) {
            var member = _.find(members, function(member) {
                return name === member.name;
            });
            if (_.isUndefined(member)) {
                member = {
                    name: name,
                    score: {
                        total: {
                            original: data.teams.proposition.score.adjusted
                        },
                        proposition: {
                            original: data.teams.proposition.score.adjusted
                        },
                        opposition: {
                            original: 0
                        }
                    }
                };
                members.push(member);
            } else {
                member.score.total.original += data.teams.proposition.score.adjusted;
                member.score.proposition.original += data.teams.proposition.score.adjusted;
            }
        });

        data.teams.opposition.score.adjusted = (data.teams.opposition.score.original / average) * 100;
        _.each(data.teams.opposition.members, function(name) {
            var member = _.find(members, function(member) {
                return name === member.name;
            });
            if (_.isUndefined(member)) {
                member = {
                    name: name,
                    score: {
                        total: {
                            original: data.teams.opposition.score.adjusted
                        },
                        proposition: {
                            original: 0
                        },
                        opposition: {
                            original: data.teams.opposition.score.adjusted
                        }
                    }
                };
                members.push(member);
            } else {
                member.score.total.original += data.teams.opposition.score.adjusted;
                member.score.opposition.original += data.teams.opposition.score.adjusted;
            }
        });
    });
    _.each(members, function(member) {
        member.score.total.formatted = numeral(member.score.total.original).format('0');
        member.score.proposition.formatted = numeral(member.score.proposition.original).format('0');
        member.score.opposition.formatted = numeral(member.score.opposition.original).format('0');
    });
    $('#ranking').html(Handlebars.compile($('#ranking-template').html())({
        members: _.sortBy(members, function (member) {
            return -1 * member.score.total.original;
        })
    }));

    var events = [];
    _.each(datas, function(data) {
        events.push(Handlebars.compile($('#australasia-event-template').html())({
            teams: data.teams
        }));
        // events.push(Handlebars.compile($('#british-parliamentary-event-template').html())({}));
    });
    $('#events').html(events);
});
