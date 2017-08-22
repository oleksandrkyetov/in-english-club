'use strict';

var datas = [
    {
        date: '2017-02-18',
        style: 'British Parliamentary',
        topic: 'This House claims that home education is better than ordinary school education',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 16,
                        adjusted: undefined
                    },
                    members: ['Josefina Herrera', 'Hannah Hubbard']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 17,
                        adjusted: undefined
                    },
                    members: ['Enrique Houston', 'Krista Poole']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Ramon Willis', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 17,
                        adjusted: undefined
                    },
                    members: ['Cory Salazar', 'April Aguilar']
                }
            }
        }
    },
    {
        date: '2017-02-25',
        style: 'Australasia',
        topic: 'This House believes that one night stand is unethical',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 34,
                    adjusted: undefined
                },
                members: ['Josefina Herrera', 'Julia Castro', 'Ramon Willis']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 21,
                    adjusted: undefined
                },
                members: ['Sharon Fitzgerald', 'Benjamin Wheeler', 'Preston Logan']
            }
        }
    },
    {
        date: '2017-03-04',
        style: 'British Parliamentary',
        topic: 'This House believes that tipping should be discouraged',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 21,
                        adjusted: undefined
                    },
                    members: ['Josefina Herrera', 'Ramon Willis']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Jeannie Brown', 'Benjamin Wheeler']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 19,
                        adjusted: undefined
                    },
                    members: ['Cory Salazar', 'Enrique Houston']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 23,
                        adjusted: undefined
                    },
                    members: ['Sharon Terry', 'Tommy Welch']
                }
            }
        }
    },
    {
        date: '2017-03-11',
        style: 'Australasia',
        topic: 'This House believes that prostitution should be legalised',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 44,
                    adjusted: undefined
                },
                members: ['Benjamin Wheeler', 'Ramon Willis', 'Myra Johnston']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 43,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Krista Poole', 'Cory Salazar']
            }
        }
    },
    {
        date: '2017-03-18',
        style: 'British Parliamentary',
        topic: 'This House believes that money defines success',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 22,
                        adjusted: undefined
                    },
                    members: ['Ramon Willis', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 24,
                        adjusted: undefined
                    },
                    members: ['Jeannie Brown', 'Austin Bates']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 16,
                        adjusted: undefined
                    },
                    members: ['Enrique Houston', 'Ramona Moss']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 21,
                        adjusted: undefined
                    },
                    members: ['Josefina Herrera', 'Lorene Moody']
                }
            }
        }
    },
    {
        date: '2017-03-25',
        style: 'Australasia',
        topic: 'This House claims that being a woman is more expensive',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 33,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Krista Poole', 'Kristine Quinn']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 37,
                    adjusted: undefined
                },
                members: ['Tommy Welch', 'Enrique Houston', 'Justin Ford']
            }
        }
    },
    {
        date: '2017-04-01',
        style: 'British Parliamentary',
        topic: 'This House believes that April Fools Day is the worst holiday ever',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 24,
                        adjusted: undefined
                    },
                    members: ['Cory Salazar', 'Genevieve Simon']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Austin Bates', 'Jeannie Brown']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 22,
                        adjusted: undefined
                    },
                    members: ['Enrique Houston', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 22,
                        adjusted: undefined
                    },
                    members: ['Ramona Moss', 'Sharon Terry']
                }
            }
        }
    },
    {
        date: '2017-04-08',
        style: 'Australasia',
        topic: 'This House believes that men and women can be just friends',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 35,
                    adjusted: undefined
                },
                members: ['Ramon Willis', 'Genevieve Simon', 'Krista Poole']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 35,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Hannah Hubbard', 'Maurice Castro']
            }
        }
    },
    {
        date: '2017-04-15',
        style: 'British Parliamentary',
        topic: 'This House believes that we have to bring democracy to such totalitarian countries like North Korea',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 35,
                        adjusted: undefined
                    },
                    members: ['Tommy Welch', 'Jeannie Brown']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 25,
                        adjusted: undefined
                    },
                    members: ['Krista Poole', 'Hannah Hubbard']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 33,
                        adjusted: undefined
                    },
                    members: ['Enrique Houston', 'Josefina Herrera']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 38,
                        adjusted: undefined
                    },
                    members: ['Cory Salazar', 'Benjamin Wheeler']
                }
            }
        }
    },
    {
        date: '2017-04-22',
        style: 'Australasia',
        topic: 'This House believes that marriage is an outdated institution',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 54,
                    adjusted: undefined
                },
                members: ['Ramon Willis', 'Cory Salazar', 'Jeannie Brown']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 46,
                    adjusted: undefined
                },
                members: ['Genevieve Simon', 'Krista Poole', 'Enrique Houston']
            }
        }
    },
    {
        date: '2017-04-29',
        style: 'Australasia',
        topic: 'This House believes that humanity has to stop further development of artificial intelligence',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 59,
                    adjusted: undefined
                },
                members: ['Enrique Houston', 'Maurice Castro', 'Josefina Herrera']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 66,
                    adjusted: undefined
                },
                members: ['Krista Poole', 'Jeannie Brown', 'Sharon Terry']
            }
        }
    },
    {
        date: '2017-05-06',
        style: 'Australasia',
        topic: 'This House believes that a person can force another individual to change',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 55,
                    adjusted: undefined
                },
                members: ['Ramon Willis', 'Julia Castro', 'Tommy Welch']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 42,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Krista Poole', 'Sidney Cross']
            }
        }
    },
    {
        date: '2017-05-27',
        style: 'Australasia',
        topic: 'This House claims that nowadays childhood is not as nice as it used to be',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 52,
                    adjusted: undefined
                },
                members: ['Josefina Herrera', 'Enrique Houston', 'Ervin Peters']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 64,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Krista Poole', 'April Aguilar']
            }
        }
    },
    {
        date: '2017-06-03',
        style: 'Australasia',
        topic: 'This House claims that working remotely is better than working in the office',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 57,
                    adjusted: undefined
                },
                members: ['Sharon Fitzgerald', 'Josefina Herrera', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 73,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Enrique Houston', 'Cory Salazar']
            }
        }
    },
    {
        date: '2017-06-24',
        style: 'Australasia',
        topic: 'This House believes that life with children is much better',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 30,
                    adjusted: undefined
                },
                    members: ['Russell Fields', 'Ellis Kelly', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 36,
                    adjusted: undefined
                },
                members: ['Ramon Willis', 'Tommy Welch', 'Cory Salazar']
            }
        }
    },
    {
        date: '2017-07-08',
        style: 'Australasia',
        topic: 'This House claims that being single is better than being in a relationship',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 45,
                    adjusted: undefined
                },
                members: ['Benjamin Wheeler', 'Ramon Willis', 'Enrique Houston']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 49,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Krista Poole', 'Ellis Kelly']
            }
        }
    },
    {
        date: '2017-07-15',
        style: 'Australasia',
        topic: 'This House claims that we need to maintain local traditions instead of accepting global culture',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 42,
                    adjusted: undefined
                },
                members: ['Benjamin Wheeler', 'Hannah Hubbard', 'Ellis Kelly']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 48,
                    adjusted: undefined
                },
                members: ['Conrad Norman', 'Enrique Houston', 'Jeannie Brown']
            }
        }
    },
    {
        date: '2017-07-22',
        style: 'British Parliamentary',
        topic: 'This House believes that online self-education is better than traditional university degree',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 22,
                        adjusted: undefined
                    },
                    members: ['Conrad Norman', 'Ellis Kelly']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 26,
                        adjusted: undefined
                    },
                    members: ['Enrique Houston', 'Juan Holmes']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 29,
                        adjusted: undefined
                    },
                    members: ['April Aguilar', 'Cory Salazar']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 27,
                        adjusted: undefined
                    },
                    members: ['Tommy Welch', 'Claudia Frazier']
                }
            }
        }
    },
    {
        date: '2017-07-29',
        style: 'Australasia',
        topic: 'This House claims that living in the city is much better than outside the city',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 34,
                    adjusted: undefined
                },
                members: ['Conrad Norman', 'Ramon Willis', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 31,
                    adjusted: undefined
                },
                members: ['Ellis Kelly', 'Enrique Houston', 'Sheryl Jimenez']
            }
        }
    },
    {
        date: '2017-08-05',
        style: 'British Parliamentary',
        topic: 'This House believes that voluntary euthanasia should be legalized',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening Proposition',
                    score: {
                        original: 11,
                        adjusted: undefined
                    },
                    members: ['April Aguilar', 'Pearl May']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Ramon Willis', 'Sheryl Jimenez']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 24,
                        adjusted: undefined
                    },
                    members: ['Jeannie Brown', 'Enrique Houston']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 30,
                        adjusted: undefined
                    },
                    members: ['Tommy Welch', 'Josefina Herrera']
                }
            }
        }
    },
    {
        date: '2017-08-12',
        style: 'Australasia',
        topic: 'This House believes that humanity needs to stop exploration of the universe',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 24,
                    adjusted: undefined
                },
                members: ['Enrique Houston', 'Justin Ford', 'Ellis Kelly']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 24,
                    adjusted: undefined
                },
                members: ['Conrad Norman', 'Benjamin Wheeler', 'Jane Doe']
            }
        }
    },
    {
        date: '2017-08-09',
        style: 'Australasia',
        topic: 'This House believes that diversity at comapnies should be maintained at any cost',
        teams: {
            proposition: {
                name: 'Proposition',
                score: {
                    original: 18,
                    adjusted: undefined
                },
                members: ['Ellis Kelly', 'James Doe', 'John Doe']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 16,
                    adjusted: undefined
                },
                members: ['Jeannie Brown', 'Conrad Norman', 'Jane Doe']
            }
        }
    }
];
