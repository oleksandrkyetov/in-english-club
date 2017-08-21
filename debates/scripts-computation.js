'use strict';

var creators = {
    score: {
        create: function () {
            return {
                total: {
                    original: 0
                },
                proposition: {
                    original: 0
                },
                opposition: {
                    original: 0
                }
            }
        }
    }
};

var computations = {
    ranking: {
        australasia: {
            compute: function (datas, ranking) {
                _.each(datas, function (data) {
                    var average = (data.teams.proposition.score.original + data.teams.opposition.score.original) / 2;

                    data.teams.proposition.score.adjusted = data.teams.proposition.score.original / average;
                    _.each(data.teams.proposition.members, function (name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.score.create();
                        }

                        ranking[name].total.original += data.teams.proposition.score.adjusted;
                        ranking[name].proposition.original += data.teams.proposition.score.adjusted;
                    });

                    data.teams.opposition.score.adjusted = data.teams.opposition.score.original / average;
                    _.each(data.teams.opposition.members, function (name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.score.create();
                        }

                        ranking[name].total.original += data.teams.opposition.score.adjusted;
                        ranking[name].opposition.original += data.teams.opposition.score.adjusted;
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
                            ranking[name] = creators.score.create();
                        }

                        ranking[name].total.original += data.teams.proposition.opening.score.adjusted;
                        ranking[name].proposition.original += data.teams.proposition.opening.score.adjusted;
                    });

                    data.teams.proposition.closing.score.adjusted = data.teams.proposition.closing.score.original / average;
                    _.each(data.teams.proposition.closing.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.score.create();
                        }

                        ranking[name].total.original += data.teams.proposition.closing.score.adjusted;
                        ranking[name].proposition.original += data.teams.proposition.closing.score.adjusted;
                    });

                    data.teams.opposition.opening.score.adjusted = data.teams.opposition.opening.score.original / average;
                    _.each(data.teams.opposition.opening.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.score.create();
                        }

                        ranking[name].total.original += data.teams.opposition.opening.score.adjusted;
                        ranking[name].opposition.original += data.teams.opposition.opening.score.adjusted;
                    });

                    data.teams.opposition.closing.score.adjusted = data.teams.opposition.closing.score.original / average;
                    _.each(data.teams.opposition.closing.members, function(name) {
                        if (_.isUndefined(ranking[name])) {
                            ranking[name] = creators.score.create();
                        }

                        ranking[name].total.original += data.teams.opposition.closing.score.adjusted;
                        ranking[name].opposition.original += data.teams.opposition.closing.score.adjusted;
                    });
                });
            }
        }
    }
};
