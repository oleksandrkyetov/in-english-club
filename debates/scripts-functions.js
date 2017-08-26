'use strict';

var constants = {
    participations: {
        threshold: 5
    },
    points: {
        win: 3,
        draw: 2,
        lose: 1
    }
};

var creators = {
    member: {
        getOrCreate: function(member) {
            if (_.isUndefined(member)) {
                return creators.member.create();
            }

            return member;
        },
        create: function() {
            return {
                name: '',
                rank: {
                    total: {
                        score: {
                            values: [],
                            sum: undefined,
                            average: undefined
                        },
                        point: {
                            values: [],
                            sum: undefined,
                            average: undefined
                        },
                        performance: {
                            class: undefined
                        }
                    },
                    proposition: {
                        score: {
                            values: [],
                            sum: undefined,
                            average: undefined
                        },
                        point: {
                            values: [],
                            sum: undefined,
                            average: undefined
                        }
                    },
                    opposition: {
                        score: {
                            values: [],
                            sum: undefined,
                            average: undefined
                        },
                        point: {
                            values: [],
                            sum: undefined,
                            average: undefined
                        }
                    }
                }
            };
        }
    }
};

var mappers = {
    event: {
        to: {
            teams: {
                mapper: {
                    for: function(style) {
                        return {
                            'Australasia': mappers.event.to.teams.australasia,
                            'British Parliamentary': mappers.event.to.teams.bp
                        }[style];
                    }
                },
                australasia: {
                    map: function(event) {
                        return [event.teams.proposition, event.teams.opposition];
                    }
                },
                bp: {
                    map: function(event) {
                        return [event.teams.proposition.opening, event.teams.proposition.closing,
                            event.teams.opposition.opening, event.teams.opposition.closing];
                    }
                }
            }
        }
    }
};

var preparators = {
    events: {
        points: {
            prepare: function(events) {
                _.each(events, function(e) {
                    preparators.event.points.prepare(e);
                });
            }
        }
    },
    event: {
        points: {
            prepare: function(event) {
                var teams = mappers.event.to.teams.mapper.for(event.style).map(event);

                var max = _.maxBy(teams, function(t) {
                    return t.score;
                }).score;

                var winners = _.filter(teams, function(t) {
                    return t.score === max;
                });
                var point = constants.points.win;
                if (winners.length > 1) {
                    point = constants.points.draw;
                }
                _.each(winners, function(w) {
                    w.point = point;
                });

                var losers = _.filter(teams, function(t) {
                    return t.score < max;
                });
                _.each(losers, function(l) {
                    l.point = constants.points.lose;
                });

                return event;
            }
        }
    }
};

var computations = {
    events: {
        to: {
            members: {
                resolver: {
                    for: function(style) {
                        return {
                            'Australasia': computations.events.to.members.australasia,
                            'British Parliamentary': computations.events.to.members.bp
                        }[style];
                    }
                },
                compute: function(events) {
                    var members = {};

                    _.each(events, function(e) {
                        computations.events.to.members.resolver.for(e.style).compute(members, e);
                    });

                    _.each(members, function(m) {
                        m.rank.total.score.sum = _.sum(m.rank.total.score.values);
                        m.rank.total.score.average = m.rank.total.score.sum / m.rank.total.score.values.length;
                        m.rank.total.point.sum = _.sum(m.rank.total.point.values);
                        m.rank.total.point.average = m.rank.total.point.sum / m.rank.total.point.values.length;

                        m.rank.proposition.score.sum = _.sum(m.rank.proposition.score.values);
                        m.rank.proposition.score.average = m.rank.proposition.score.sum / m.rank.proposition.score.values.length;
                        m.rank.proposition.point.sum = _.sum(m.rank.proposition.point.values);
                        m.rank.proposition.point.average = m.rank.proposition.point.sum / m.rank.proposition.point.values.length;

                        m.rank.opposition.score.sum = _.sum(m.rank.opposition.score.values);
                        m.rank.opposition.score.average = m.rank.opposition.score.sum / m.rank.opposition.score.values.length;
                        m.rank.opposition.point.sum = _.sum(m.rank.opposition.point.values);
                        m.rank.opposition.point.average = m.rank.opposition.point.sum / m.rank.opposition.point.values.length;
                    });

                    return members;
                },
                australasia: {
                    compute: function(members, event) {
                        _.each(event.teams.proposition.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            members[m].rank.total.score.values.push(event.teams.proposition.score);
                            members[m].rank.total.point.values.push(event.teams.proposition.point);
                            members[m].rank.proposition.score.values.push(event.teams.proposition.score);
                            members[m].rank.proposition.point.values.push(event.teams.proposition.point);
                        });

                        _.each(event.teams.opposition.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            members[m].rank.total.score.values.push(event.teams.opposition.score);
                            members[m].rank.total.point.values.push(event.teams.opposition.point);
                            members[m].rank.opposition.score.values.push(event.teams.opposition.score);
                            members[m].rank.opposition.point.values.push(event.teams.opposition.point);
                        });
                    }
                },
                bp: {
                    compute: function(members, event) {
                        _.each(event.teams.proposition.opening.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            members[m].rank.total.score.values.push(event.teams.proposition.opening.score);
                            members[m].rank.total.point.values.push(event.teams.proposition.opening.point);
                            members[m].rank.proposition.score.values.push(event.teams.proposition.opening.score);
                            members[m].rank.proposition.point.values.push(event.teams.proposition.opening.point);
                        });

                        _.each(event.teams.proposition.closing.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            members[m].rank.total.score.values.push(event.teams.proposition.closing.score);
                            members[m].rank.total.point.values.push(event.teams.proposition.closing.point);
                            members[m].rank.proposition.score.values.push(event.teams.proposition.closing.score);
                            members[m].rank.proposition.point.values.push(event.teams.proposition.closing.point);
                        });

                        _.each(event.teams.opposition.opening.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            members[m].rank.total.score.values.push(event.teams.opposition.opening.score);
                            members[m].rank.total.point.values.push(event.teams.opposition.opening.point);
                            members[m].rank.opposition.score.values.push(event.teams.opposition.opening.score);
                            members[m].rank.opposition.point.values.push(event.teams.opposition.opening.point);
                        });

                        _.each(event.teams.opposition.closing.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            members[m].rank.total.score.values.push(event.teams.opposition.closing.score);
                            members[m].rank.total.point.values.push(event.teams.opposition.closing.point);
                            members[m].rank.opposition.score.values.push(event.teams.opposition.closing.score);
                            members[m].rank.opposition.point.values.push(event.teams.opposition.closing.point);
                        });
                    }
                }
            }
        }
    },
    performance: {
        classify: function(index) {
            if (index.previous === -1) {
                return 'plus';
            }

            if (index.previous - index.current > 0) {
                return 'chevron-up';
            }

            if (index.previous- index.current < 0) {
                return 'chevron-down';
            }

            return 'minus';
        }
    }
};
