'use strict';

var constants = {
    participations: {
        threshold: 5
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
                    current: {
                        in: undefined,
                        out: undefined
                    },
                    previous: {
                        in: undefined,
                        out: undefined
                    },
                    performance: {
                        in: {
                            class: undefined
                        },
                        out: {
                            class: undefined
                        }
                    }
                },
                score: {
                    total: {
                        raw: {
                            current: [],
                            previous: []
                        },
                        calculated: {
                            adjusted: {
                                current: undefined,
                                previous: undefined
                            },
                            average: {
                                current: undefined,
                                previous: undefined
                            }
                        }
                    },
                    proposition: {
                        raw: {
                            current: [],
                            previous: []
                        },
                        calculated: {
                            adjusted: {
                                current: undefined,
                                previous: undefined
                            },
                            average: {
                                current: undefined,
                                previous: undefined
                            }
                        }
                    },
                    opposition: {
                        raw: {
                            current: [],
                            previous: []
                        },
                        calculated: {
                            adjusted: {
                                current: undefined,
                                previous: undefined
                            },
                            average: {
                                current: undefined,
                                previous: undefined
                            }
                        }
                    }
                }
            };
        }
    }
};

var computations = {
    resolver: {
        for: function(style) {
            if (style === 'Australasia') {
                return computations.events.to.members.australasia;
            }

            return computations.events.to.members.bp;
        }
    },
    events: {
        to: {
            members: {
                compute: function(events) {
                    var members = {};

                    _.each(events, function(e) {
                        computations.resolver.for(e.style).compute(members, e);
                    });

                    _.each(members, function(m) {
                        m.score.total.raw.previous = _.slice(m.score.total.raw.current, 0, m.score.total.raw.current.length - 1);
                        m.score.total.calculated.adjusted.current = _.sum(m.score.total.raw.current);
                        m.score.total.calculated.average.current = m.score.total.calculated.adjusted.current / m.score.total.raw.current.length;
                        m.score.total.calculated.adjusted.previous = _.sum(m.score.total.raw.previous);
                        m.score.total.calculated.average.previous = m.score.total.calculated.adjusted.previous / m.score.total.raw.previous.length;

                        m.score.proposition.raw.previous = _.slice(m.score.proposition.raw.current, 0, m.score.proposition.raw.current.length - 1);
                        m.score.proposition.calculated.adjusted.current = _.sum(m.score.proposition.raw.current);
                        m.score.proposition.calculated.average.current = m.score.proposition.calculated.adjusted.current / m.score.proposition.raw.current.length;
                        m.score.proposition.calculated.adjusted.previous = _.sum(m.score.proposition.raw.previous);
                        m.score.proposition.calculated.average.previous = m.score.proposition.calculated.adjusted.previous / m.score.proposition.raw.previous.length;

                        m.score.opposition.raw.previous = _.slice(m.score.opposition.raw.current, 0, m.score.opposition.raw.current.length - 1);
                        m.score.opposition.calculated.adjusted.current = _.sum(m.score.opposition.raw.current);
                        m.score.opposition.calculated.average.current = m.score.opposition.calculated.adjusted.current / m.score.opposition.raw.current.length;
                        m.score.opposition.calculated.adjusted.previous = _.sum(m.score.opposition.raw.previous);
                        m.score.opposition.calculated.average.previous = m.score.opposition.calculated.adjusted.previous / m.score.opposition.raw.previous.length;
                    });

                    return members;
                },
                australasia: {
                    compute: function(members, event) {
                        var average = (event.teams.proposition.score + event.teams.opposition.score) / 2;

                        _.each(event.teams.proposition.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.proposition.score / average;
                            members[m].score.total.raw.current.push(adjusted);
                            members[m].score.proposition.raw.current.push(adjusted);
                        });

                        _.each(event.teams.opposition.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.opposition.score / average;
                            members[m].score.total.raw.current.push(adjusted);
                            members[m].score.opposition.raw.current.push(adjusted);
                        });
                    }
                },
                bp: {
                    compute: function(members, event) {
                        var average = (event.teams.proposition.opening.score + event.teams.proposition.closing.score
                            + event.teams.opposition.opening.score + event.teams.opposition.closing.score) / 4;

                        _.each(event.teams.proposition.opening.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.proposition.opening.score / average;
                            members[m].score.total.raw.current.push(adjusted);
                            members[m].score.proposition.raw.current.push(adjusted);
                        });

                        _.each(event.teams.proposition.closing.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.proposition.closing.score / average;
                            members[m].score.total.raw.current.push(adjusted);
                            members[m].score.proposition.raw.current.push(adjusted);
                        });

                        _.each(event.teams.opposition.opening.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.opposition.opening.score / average;
                            members[m].score.total.raw.current.push(adjusted);
                            members[m].score.opposition.raw.current.push(adjusted);
                        });

                        _.each(event.teams.opposition.closing.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.opposition.closing.score / average;
                            members[m].score.total.raw.current.push(adjusted);
                            members[m].score.opposition.raw.current.push(adjusted);
                        });
                    }
                }
            }
        }
    },
    performance: {
        classify: function(index) {
            if (_.isUndefined(index.previous)) {
                return 'plus';
            }

            if (index.previous - index.current > 0) {
                return 'arrow-up';
            }

            if (index.previous- index.current < 0) {
                return 'arrow-down';
            }

            return 'minus';
        }
    }
};
