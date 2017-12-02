'use strict';

var events = [
    {
        date: '2017-02-18',
        style: 'British Parliamentary',
        topic: 'This House claims\nthat home education\nis better than ordinary\nschool education',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 16,
                    point: undefined,
                    members: ['Josefina Herrera', 'Hannah Hubbard']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 17,
                    point: undefined,
                    members: ['Enrique Houston', 'Krista Poole']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 18,
                    point: undefined,
                    members: ['Ramon Willis', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 17,
                    point: undefined,
                    members: ['Cory Salazar', 'April Aguilar']
                }
            }
        }
    },
    {
        date: '2017-02-25',
        style: 'Australasia',
        topic: 'This House believes\nthat one night stand\nis unethical',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 34,
                point: undefined,
                members: ['Josefina Herrera', 'Julia Castro', 'Ramon Willis']
            },
            opposition: {
                name: 'Opposition',
                score: 21,
                point: undefined,
                members: ['Sharon Fitzgerald', 'Benjamin Wheeler', 'Preston Logan']
            }
        }
    },
    {
        date: '2017-03-04',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat tipping should\nbe discouraged',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 21,
                    point: undefined,
                    members: ['Josefina Herrera', 'Ramon Willis']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 18,
                    point: undefined,
                    members: ['Jeannie Brown', 'Benjamin Wheeler']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 19,
                    point: undefined,
                    members: ['Cory Salazar', 'Enrique Houston']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 23,
                    point: undefined,
                    members: ['Sharon Terry', 'Tommy Welch']
                }
            }
        }
    },
    {
        date: '2017-03-11',
        style: 'Australasia',
        topic: 'This House believes\nthat prostitution should\nbe legalised',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 44,
                point: undefined,
                members: ['Benjamin Wheeler', 'Ramon Willis', 'Myra Johnston']
            },
            opposition: {
                name: 'Opposition',
                score: 43,
                point: undefined,
                members: ['Jeannie Brown', 'Krista Poole', 'Cory Salazar']
            }
        }
    },
    {
        date: '2017-03-18',
        style: 'British Parliamentary',
        topic: 'This House\nbelieves that money\ndefines success',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 22,
                    point: undefined,
                    members: ['Ramon Willis', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 24,
                    point: undefined,
                    members: ['Jeannie Brown', 'Austin Bates']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 16,
                    point: undefined,
                    members: ['Enrique Houston', 'Ramona Moss']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 21,
                    point: undefined,
                    members: ['Josefina Herrera', 'Lorene Moody']
                }
            }
        }
    },
    {
        date: '2017-03-25',
        style: 'Australasia',
        topic: 'This House claims\nthat being a woman\nis more expensive',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 33,
                point: undefined,
                members: ['Jeannie Brown', 'Krista Poole', 'Kristine Quinn']
            },
            opposition: {
                name: 'Opposition',
                score: 37,
                point: undefined,
                members: ['Tommy Welch', 'Enrique Houston', 'Justin Ford']
            }
        }
    },
    {
        date: '2017-04-01',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat April Fools Day is\nthe worst holiday ever',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 24,
                    point: undefined,
                    members: ['Cory Salazar', 'Genevieve Simon']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 18,
                    point: undefined,
                    members: ['Austin Bates', 'Jeannie Brown']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 22,
                    point: undefined,
                    members: ['Enrique Houston', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 22,
                    point: undefined,
                    members: ['Ramona Moss', 'Sharon Terry']
                }
            }
        }
    },
    {
        date: '2017-04-08',
        style: 'Australasia',
        topic: 'This House believes\nthat men and women\ncan be just friends',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 35,
                point: undefined,
                members: ['Ramon Willis', 'Genevieve Simon', 'Krista Poole']
            },
            opposition: {
                name: 'Opposition',
                score: 35,
                point: undefined,
                members: ['Jeannie Brown', 'Hannah Hubbard', 'Maurice Castro']
            }
        }
    },
    {
        date: '2017-04-15',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat we need to bring\ndemocracy to such\ntotalitarian countries\nlike North Korea',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 35,
                    point: undefined,
                    members: ['Tommy Welch', 'Jeannie Brown']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 25,
                    point: undefined,
                    members: ['Krista Poole', 'Hannah Hubbard']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 33,
                    point: undefined,
                    members: ['Enrique Houston', 'Josefina Herrera']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 38,
                    point: undefined,
                    members: ['Cory Salazar', 'Benjamin Wheeler']
                }
            }
        }
    },
    {
        date: '2017-04-22',
        style: 'Australasia',
        topic: 'This House believes\nthat marriage is an\noutdated institution',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 54,
                point: undefined,
                members: ['Ramon Willis', 'Cory Salazar', 'Jeannie Brown']
            },
            opposition: {
                name: 'Opposition',
                score: 46,
                point: undefined,
                members: ['Genevieve Simon', 'Krista Poole', 'Enrique Houston']
            }
        }
    },
    {
        date: '2017-04-29',
        style: 'Australasia',
        topic: 'This House believes\nthat humanity has to stop\nfurther development of\nartificial intelligence',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 59,
                point: undefined,
                members: ['Enrique Houston', 'Maurice Castro', 'Josefina Herrera']
            },
            opposition: {
                name: 'Opposition',
                score: 66,
                point: undefined,
                members: ['Krista Poole', 'Jeannie Brown', 'Sharon Terry']
            }
        }
    },
    {
        date: '2017-05-06',
        style: 'Australasia',
        topic: 'This House believes\nthat a person can force\nanother individual to change',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 55,
                point: undefined,
                members: ['Ramon Willis', 'Julia Castro', 'Tommy Welch']
            },
            opposition: {
                name: 'Opposition',
                score: 42,
                point: undefined,
                members: ['Jeannie Brown', 'Krista Poole', 'Sidney Cross']
            }
        }
    },
    {
        date: '2017-05-27',
        style: 'Australasia',
        topic: 'This House claims\nthat nowadays childhood\nis not as nice as it\nused to be',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 52,
                point: undefined,
                members: ['Josefina Herrera', 'Enrique Houston', 'Ervin Peters']
            },
            opposition: {
                name: 'Opposition',
                score: 64,
                point: undefined,
                members: ['Jeannie Brown', 'Krista Poole', 'April Aguilar']
            }
        }
    },
    {
        date: '2017-06-03',
        style: 'Australasia',
        topic: 'This House claims\nthat working remotely\nis better than working\nin the office',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 57,
                point: undefined,
                members: ['Sharon Fitzgerald', 'Josefina Herrera', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: 73,
                point: undefined,
                members: ['Jeannie Brown', 'Enrique Houston', 'Cory Salazar']
            }
        }
    },
    {
        date: '2017-06-24',
        style: 'Australasia',
        topic: 'This House believes\nthat life with children\nis much better',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 30,
                point: undefined,
                members: ['Russell Fields', 'Paul Barton', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: 36,
                point: undefined,
                members: ['Ramon Willis', 'Tommy Welch', 'Cory Salazar']
            }
        }
    },
    {
        date: '2017-07-08',
        style: 'Australasia',
        topic: 'This House claims\nthat being single\nis better than being\nin a relationship',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 45,
                point: undefined,
                members: ['Benjamin Wheeler', 'Ramon Willis', 'Enrique Houston']
            },
            opposition: {
                name: 'Opposition',
                score: 49,
                point: undefined,
                members: ['Jeannie Brown', 'Krista Poole', 'Paul Barton']
            }
        }
    },
    {
        date: '2017-07-15',
        style: 'Australasia',
        topic: 'This House claims\nthat we need to maintain\nlocal traditions instead of\naccepting global culture',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 42,
                point: undefined,
                members: ['Benjamin Wheeler', 'Hannah Hubbard', 'Paul Barton']
            },
            opposition: {
                name: 'Opposition',
                score: 48,
                point: undefined,
                members: ['Conrad Norman', 'Enrique Houston', 'Jeannie Brown']
            }
        }
    },
    {
        date: '2017-07-22',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat online self-education\nis better than traditional\nuniversity degree',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 22,
                    point: undefined,
                    members: ['Conrad Norman', 'Paul Barton']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 26,
                    point: undefined,
                    members: ['Enrique Houston', 'Juan Holmes']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 29,
                    point: undefined,
                    members: ['April Aguilar', 'Cory Salazar']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 27,
                    point: undefined,
                    members: ['Tommy Welch', 'Claudia Frazier']
                }
            }
        }
    },
    {
        date: '2017-07-29',
        style: 'Australasia',
        topic: 'This House claims\nthat living in the city\nis much better than\noutside the city',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 34,
                point: undefined,
                members: ['Conrad Norman', 'Ramon Willis', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: 31,
                point: undefined,
                members: ['Paul Barton', 'Enrique Houston', 'Sheryl Jimenez']
            }
        }
    },
    {
        date: '2017-08-05',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat voluntary euthanasia\nshould be legalized',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 11,
                    point: undefined,
                    members: ['April Aguilar', 'Pearl May']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 18,
                    point: undefined,
                    members: ['Ramon Willis', 'Sheryl Jimenez']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 24,
                    point: undefined,
                    members: ['Jeannie Brown', 'Enrique Houston']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 30,
                    point: undefined,
                    members: ['Tommy Welch', 'Josefina Herrera']
                }
            }
        }
    },
    {
        date: '2017-08-12',
        style: 'Australasia',
        topic: 'This House believes\nthat humanity needs\nto stop exploration\nof the universe',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 24,
                point: undefined,
                members: ['Enrique Houston', 'Justin Ford', 'Paul Barton']
            },
            opposition: {
                name: 'Opposition',
                score: 24,
                point: undefined,
                members: ['Conrad Norman', 'Benjamin Wheeler', 'Jane Doe']
            }
        }
    },
    {
        date: '2017-08-19',
        style: 'Australasia',
        topic: 'This House believes that\ndiversity at companies\nshould be maintained\nat any cost',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 18,
                point: undefined,
                members: ['Paul Barton', 'James Doe', 'John Doe']
            },
            opposition: {
                name: 'Opposition',
                score: 16,
                point: undefined,
                members: ['Jeannie Brown', 'Conrad Norman', 'Jane Doe']
            }
        }
    },
    {
        date: '2017-08-26',
        style: 'Australasia',
        topic: 'This House believes that\nromantic relationships\nat work should be\nprohibited',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 27,
                point: undefined,
                members: ['Maurice Castro', 'Katrina Phillips', 'April Aguilar']
            },
            opposition: {
                name: 'Opposition',
                score: 23,
                point: undefined,
                members: ['Conrad Norman', 'Enrique Houston', 'Justin Ford']
            }
        }
    },
    {
        date: '2017-09-02',
        style: 'British Parliamentary',
        topic: 'This House would\nban animal testing',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 18,
                    point: undefined,
                    members: ['Josefina Herrera', 'Enrique Houston']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 16,
                    point: undefined,
                    members: ['Ramon Willis', 'Della Ferguson']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 19,
                    point: undefined,
                    members: ['Cory Salazar', 'Bryant Allen']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 20,
                    point: undefined,
                    members: ['Jeannie Brown', 'Paul Barton']
                }
            }
        }
    },
    {
        date: '2017-09-09',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat fashion is hurting\nthe society',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 24,
                    point: undefined,
                    members: ['Ramon Willis', 'Benjamin Wheeler']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 18,
                    point: undefined,
                    members: ['Hannah Hubbard', 'Enrique Houston']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 25,
                    point: undefined,
                    members: ['Krista Poole', 'Josefina Herrera']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 22,
                    point: undefined,
                    members: ['Paul Barton', 'Kelly Marshall']
                }
            }
        }
    },
    {
        date: '2017-09-16',
        style: 'Australasia',
        topic: 'This House believes\nthat capital punishment\nshould be allowed',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 23,
                point: undefined,
                members: ['Clay Mccarthy', 'Helen Reese', 'Kelly Marshall']
            },
            opposition: {
                name: 'Opposition',
                score: 26,
                point: undefined,
                members: ['Tommy Welch', 'Enrique Houston', 'Loren Quinn']
            }
        }
    },
    {
        date: '2017-09-23',
        style: 'Australasia',
        topic: 'This House believes\nthat world would have been\nbetter without borders',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 31,
                point: undefined,
                members: ['Conrad Norman', 'Clay Mccarthy', 'Ramon Willis']
            },
            opposition: {
                name: 'Opposition',
                score: 28,
                point: undefined,
                members: ['Enrique Houston', 'Jeannie Brown', 'Lindsey Ray']
            }
        }
    },
    {
        date: '2017-09-30',
        style: 'Australasia',
        topic: 'This House believes that\ntech companies like Uber and Airbnb\nshould be banned as they hurt\neconomy of the cities',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 34,
                point: undefined,
                members: ['Conrad Norman', 'Benjamin Wheeler', 'Kelly Marshall']
            },
            opposition: {
                name: 'Opposition',
                score: 31,
                point: undefined,
                members: ['Clay Mccarthy', 'Enrique Houston', 'Paul Barton']
            }
        }
    },
    {
        date: '2017-10-07',
        style: 'British Parliamentary',
        topic: 'This House believes\nthat cryptocurrencies are\na viable replacement for the\nconventional currencies',
        teams: {
            proposition: {
                opening: {
                    name: 'Opening\nProposition',
                    score: 15,
                    point: undefined,
                    members: ['Enrique Houston', 'John Doe']
                },
                closing: {
                    name: 'Closing\nProposition',
                    score: 19,
                    point: undefined,
                    members: ['Ramon Willis', 'Helen Reese']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening\nOpposition',
                    score: 26,
                    point: undefined,
                    members: ['Cory Salazar', 'Tommy Welch']
                },
                closing: {
                    name: 'Closing\nOpposition',
                    score: 19,
                    point: undefined,
                    members: ['Julia Casey', 'Paul Barton']
                }
            }
        }
    },
    {
        date: '2017-10-14',
        style: 'Australasia',
        topic: 'This House claims that\nevery ethnic group deserves\nits own nation-state',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 29,
                point: undefined,
                members: ['Cory Salazar', 'Enrique Houston', 'John Doe']
            },
            opposition: {
                name: 'Opposition',
                score: 36,
                point: undefined,
                members: ['Jeannie Brown', 'Benjamin Wheeler', 'Maurice Castro']
            }
        }
    },
    {
        date: '2017-10-21',
        style: 'Australasia',
        topic: 'This House would\npromote the gender-neutral\nway to raise children',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 61,
                point: undefined,
                members: ['Maurice Castro', 'Sharon Terry', 'Benjamin Wheeler']
            },
            opposition: {
                name: 'Opposition',
                score: 59,
                point: undefined,
                members: ['Ramon Willis', 'Enrique Houston', 'Anthony Chandler']
            }
        }
    },
    {
        date: '2017-10-28',
        style: 'Australasia',
        topic: 'This House believes\nthat sexual harassment\nis inevitable',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 30,
                point: undefined,
                members: ['Ramon Willis', 'Lula Pittman', 'Julia Casey']
            },
            opposition: {
                name: 'Opposition',
                score: 30,
                point: undefined,
                members: ['Paul Barton', 'Enrique Houston', 'Jeannie Brown']
            }
        }
    },
    {
        date: '2017-11-04',
        style: 'Australasia',
        topic: 'This House believes that\nartificially intelligent robots\nshould have the same rights\nas humans',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 18,
                point: undefined,
                members: ['Enrique Houston', 'Benjamin Wheeler', 'John Doe']
            },
            opposition: {
                name: 'Opposition',
                score: 2,
                point: undefined,
                members: ['Justin Ford', 'Ramon Willis', 'Jane Doe']
            }
        }
    },
    {
        date: '2017-11-11',
        style: 'Australasia',
        topic: 'This House believes that\nSocial Credit System is the way\nto a trustworthy nation',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 35,
                point: undefined,
                members: ['Helen Reese', 'Enrique Houston', 'Conrad Norman']
            },
            opposition: {
                name: 'Opposition',
                score: 39,
                point: undefined,
                members: ['Jeannie Brown', 'Sharon Terry', 'Benjamin Wheeler']
            }
        }
    },
    {
        date: '2017-11-18',
        style: 'Australasia',
        topic: 'This House believes\nthat renting is better\nthan buying',
        teams: {
            proposition: {
                name: 'Proposition',
                score: 34,
                point: undefined,
                members: ['Josefina Herrera', 'Benjamin Wheeler', 'Sharon Fitzgerald']
            },
            opposition: {
                name: 'Opposition',
                score: 28,
                point: undefined,
                members: ['Cory Salazar', 'Enrique Houston', 'John Doe']
            }
        }
    }
];
