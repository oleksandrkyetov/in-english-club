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
                    performance: {
                        total: {
                            class: undefined
                        }
                    }
                },
                score: {
                    total: {
                        raw: [],
                        calculated: {
                            adjusted: undefined,
                            average: undefined
                        }
                    },
                    proposition: {
                        raw: [],
                        calculated: {
                            adjusted: undefined,
                            average: undefined
                        }
                    },
                    opposition: {
                        raw: [],
                        calculated: {
                            adjusted: undefined,
                            average: undefined
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
                        m.score.total.calculated.adjusted = _.sum(m.score.total.raw);
                        m.score.total.calculated.average = m.score.total.calculated.adjusted / m.score.total.raw.length;

                        m.score.proposition.calculated.adjusted = _.sum(m.score.proposition.raw);
                        m.score.proposition.calculated.average = m.score.proposition.calculated.adjusted / m.score.proposition.raw.length;

                        m.score.opposition.calculated.adjusted = _.sum(m.score.opposition.raw);
                        m.score.opposition.calculated.average = m.score.opposition.calculated.adjusted / m.score.opposition.raw.length;
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
                            members[m].score.total.raw.push(adjusted);
                            members[m].score.proposition.raw.push(adjusted);
                        });

                        _.each(event.teams.opposition.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.opposition.score / average;
                            members[m].score.total.raw.push(adjusted);
                            members[m].score.opposition.raw.push(adjusted);
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
                            members[m].score.total.raw.push(adjusted);
                            members[m].score.proposition.raw.push(adjusted);
                        });

                        _.each(event.teams.proposition.closing.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.proposition.closing.score / average;
                            members[m].score.total.raw.push(adjusted);
                            members[m].score.proposition.raw.push(adjusted);
                        });

                        _.each(event.teams.opposition.opening.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.opposition.opening.score / average;
                            members[m].score.total.raw.push(adjusted);
                            members[m].score.opposition.raw.push(adjusted);
                        });

                        _.each(event.teams.opposition.closing.members, function(m) {
                            members[m] = creators.member.getOrCreate(members[m]);
                            members[m].name = m;

                            var adjusted = event.teams.opposition.closing.score / average;
                            members[m].score.total.raw.push(adjusted);
                            members[m].score.opposition.raw.push(adjusted);
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
                return 'arrow-up';
            }

            if (index.previous- index.current < 0) {
                return 'arrow-down';
            }

            return 'minus';
        }
    }
};
