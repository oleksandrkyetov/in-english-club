'use strict';

var constants = {
    participations: {
        threshold: 5
    }
};

var creators = {};

var computations = {
    resolver: {
        for: function(type) {
            return {
                'Dixit': computations.events.to.members.dixit,
                'Dixit Odyssey': computations.events.to.members.dixit.odyssey
            }[type];
        }
    },
    events: {
        to: {
            members: {
                compute: function (events) {
                    var members = {};

                    _.each(events, function (e) {
                        computations.resolver.for(e.type).compute(members, e);
                    });

                    // _.each(members, function (m) {
                    //     m.score.total.calculated.adjusted = _.sum(m.score.total.raw);
                    //     m.score.total.calculated.average = m.score.total.calculated.adjusted / m.score.total.raw.length;
                    //
                    //     m.score.proposition.calculated.adjusted = _.sum(m.score.proposition.raw);
                    //     m.score.proposition.calculated.average = m.score.proposition.calculated.adjusted / m.score.proposition.raw.length;
                    //
                    //     m.score.opposition.calculated.adjusted = _.sum(m.score.opposition.raw);
                    //     m.score.opposition.calculated.average = m.score.opposition.calculated.adjusted / m.score.opposition.raw.length;
                    // });

                    return members;
                },
                dixit: {
                    compute: function(events) {
                        console.log('dixit');
                    },
                    odyssey: {
                        compute: function(events) {
                            console.log('dixit.odyssey');
                        }
                    }
                }
            }
        }
    }
};
