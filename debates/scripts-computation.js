'use strict';

var creators = {
    rank: {
        create: function () {
            return {
                total: {
                    count: 0,
                    score: {
                        original: 0
                    }
                },
                proposition: {
                    count: 0,
                    score: {
                        original: 0
                    }
                },
                opposition: {
                    count: 0,
                    score: {
                        original: 0
                    }
                }
            }
        }
    }
};

var computations = {
    ranking: {
        compute: function(datas) {
            var ranking = {};

            computations.ranking.australasia.compute(_.filter(datas, function(data) {
                return data.style === 'Australasia'
            }), ranking);

            computations.ranking.bp.compute(_.filter(datas, function(data) {
                return data.style === 'British Parliamentary'
            }), ranking);

            return ranking;
        },
        australasia: {
            compute: function (datas, ranking) {
                _.each(datas, function (data) {
                    var average = (data.teams.proposition.score.original + data.teams.opposition.score.original) / 2;

                    data.teams.proposition.score.adjusted = data.teams.proposition.score.original / average;
                    _.each(data.teams.proposition.members, function (name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.rank.create();
                        }

                        ranking[name].total.count += 1;
                        ranking[name].proposition.count += 1;
                        ranking[name].total.score.original += data.teams.proposition.score.adjusted;
                        ranking[name].proposition.score.original += data.teams.proposition.score.adjusted;
                    });

                    data.teams.opposition.score.adjusted = data.teams.opposition.score.original / average;
                    _.each(data.teams.opposition.members, function (name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.rank.create();
                        }

                        ranking[name].total.count += 1;
                        ranking[name].opposition.count += 1;
                        ranking[name].total.score.original += data.teams.opposition.score.adjusted;
                        ranking[name].opposition.score.original += data.teams.opposition.score.adjusted;
                    });
                });
            }
        },
        bp: {
            compute: function (datas, ranking) {
                _.each(datas, function(data) {
                    var average = (data.teams.proposition.opening.score.original + data.teams.proposition.closing.score.original
                        + data.teams.opposition.opening.score.original + data.teams.opposition.closing.score.original) / 4;

                    data.teams.proposition.opening.score.adjusted = data.teams.proposition.opening.score.original / average;
                    _.each(data.teams.proposition.opening.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.rank.create();
                        }

                        ranking[name].total.count += 1;
                        ranking[name].proposition.count += 1;
                        ranking[name].total.score.original += data.teams.proposition.opening.score.adjusted;
                        ranking[name].proposition.score.original += data.teams.proposition.opening.score.adjusted;
                    });

                    data.teams.proposition.closing.score.adjusted = data.teams.proposition.closing.score.original / average;
                    _.each(data.teams.proposition.closing.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.rank.create();
                        }

                        ranking[name].total.count += 1;
                        ranking[name].proposition.count += 1;
                        ranking[name].total.score.original += data.teams.proposition.closing.score.adjusted;
                        ranking[name].proposition.score.original += data.teams.proposition.closing.score.adjusted;
                    });

                    data.teams.opposition.opening.score.adjusted = data.teams.opposition.opening.score.original / average;
                    _.each(data.teams.opposition.opening.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.rank.create();
                        }

                        ranking[name].total.count += 1;
                        ranking[name].opposition.count += 1;
                        ranking[name].total.score.original += data.teams.opposition.opening.score.adjusted;
                        ranking[name].opposition.score.original += data.teams.opposition.opening.score.adjusted;
                    });

                    data.teams.opposition.closing.score.adjusted = data.teams.opposition.closing.score.original / average;
                    _.each(data.teams.opposition.closing.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.rank.create();
                        }

                        ranking[name].total.count += 1;
                        ranking[name].opposition.count += 1;
                        ranking[name].total.score.original += data.teams.opposition.closing.score.adjusted;
                        ranking[name].opposition.score.original += data.teams.opposition.closing.score.adjusted;
                    });
                });
            }
        }
    }
};
