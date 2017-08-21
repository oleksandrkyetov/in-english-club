'use strict';

var computations = {
    ranking: {
        for: function(style) {
            this.styles = {
                australasia: {
                    compute: function(datas) {
                        var members = [];
                        _.each(datas, function(data) {
                            var average = (data.teams.proposition.score.original + data.teams.opposition.score.original) / 2;

                            data.teams.proposition.score.adjusted = data.teams.proposition.score.original / average;
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

                            data.teams.opposition.score.adjusted = data.teams.opposition.score.original / average;
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

                        return members;
                    }
                },
                british: {
                    compute: function(datas) {
                        var members = [];

                        _.each(datas, function(data) {
                            var average = (data.teams.proposition.opening.score.original + data.teams.proposition.closing.score.original
                                + data.teams.opposition.opening.score.original + data.teams.opposition.closing.score.original) / 4;

                            data.teams.proposition.opening.score.adjusted = data.teams.proposition.opening.score.original / average;
                            _.each(data.teams.proposition.opening.members, function(name) {
                                var member = _.find(members, function(member) {
                                    return name === member.name;
                                });
                                if (_.isUndefined(member)) {
                                    member = {
                                        name: name,
                                        score: {
                                            total: {
                                                original: data.teams.proposition.opening.score.adjusted
                                            },
                                            proposition: {
                                                original: data.teams.proposition.opening.score.adjusted
                                            },
                                            opposition: {
                                                original: 0
                                            }
                                        }
                                    };
                                    members.push(member);
                                } else {
                                    member.score.total.original += data.teams.proposition.opening.score.adjusted;
                                    member.score.proposition.original += data.teams.proposition.opening.score.adjusted;
                                }
                            });

                            data.teams.proposition.closing.score.adjusted = data.teams.proposition.closing.score.original / average;
                            _.each(data.teams.proposition.closing.members, function(name) {
                                var member = _.find(members, function(member) {
                                    return name === member.name;
                                });
                                if (_.isUndefined(member)) {
                                    member = {
                                        name: name,
                                        score: {
                                            total: {
                                                original: data.teams.proposition.closing.score.adjusted
                                            },
                                            proposition: {
                                                original: data.teams.proposition.closing.score.adjusted
                                            },
                                            opposition: {
                                                original: 0
                                            }
                                        }
                                    };
                                    members.push(member);
                                } else {
                                    member.score.total.original += data.teams.proposition.closing.score.adjusted;
                                    member.score.proposition.original += data.teams.proposition.closing.score.adjusted;
                                }
                            });

                            data.teams.opposition.opening.score.adjusted = data.teams.opposition.opening.score.original / average;
                            _.each(data.teams.opposition.opening.members, function(name) {
                                var member = _.find(members, function(member) {
                                    return name === member.name;
                                });
                                if (_.isUndefined(member)) {
                                    member = {
                                        name: name,
                                        score: {
                                            total: {
                                                original: data.teams.opposition.opening.score.adjusted
                                            },
                                            proposition: {
                                                original: 0
                                            },
                                            opposition: {
                                                original: data.teams.opposition.opening.score.adjusted
                                            }
                                        }
                                    };
                                    members.push(member);
                                } else {
                                    member.score.total.original += data.teams.opposition.opening.score.adjusted;
                                    member.score.opposition.original += data.teams.opposition.opening.score.adjusted;
                                }
                            });

                            data.teams.opposition.closing.score.adjusted = data.teams.opposition.closing.score.original / average;
                            _.each(data.teams.opposition.closing.members, function(name) {
                                var member = _.find(members, function(member) {
                                    return name === member.name;
                                });
                                if (_.isUndefined(member)) {
                                    member = {
                                        name: name,
                                        score: {
                                            total: {
                                                original: data.teams.opposition.closing.score.adjusted
                                            },
                                            proposition: {
                                                original: 0
                                            },
                                            opposition: {
                                                original: data.teams.opposition.closing.score.adjusted
                                            }
                                        }
                                    };
                                    members.push(member);
                                } else {
                                    member.score.total.original += data.teams.opposition.closing.score.adjusted;
                                    member.score.opposition.original += data.teams.opposition.closing.score.adjusted;
                                }
                            });
                        });

                        return members;
                    }
                }
            };

            return this.styles[style];
        },
        combine: function(rankings) {
            var ranking = [];

            _.each(rankings.australasia, function(australasia) {
                ranking.push({
                    name: australasia.name,
                    score: {
                        total: {
                            original: australasia.score.total.original
                        },
                        proposition: {
                            original: australasia.score.proposition.original
                        },
                        opposition: {
                            original: australasia.score.opposition.original
                        }
                    }
                });
            });

            return ranking;
        }
    }
};
