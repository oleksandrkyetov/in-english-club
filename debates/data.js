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
                    members: ['Anastasiya Ivanova', 'Olga Konyakhyna']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 17,
                        adjusted: undefined
                    },
                    members: ['Pavel Karnaukhov', 'Marina Yukhymets']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Alexander Moshurovskiy', 'Dmytro Petryk']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 17,
                        adjusted: undefined
                    },
                    members: ['Dmitry Golivets', 'Anastacia Sooltanova']
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
                members: ['Anastasiya Ivanova', 'Kateryna Zhurkina', 'Alexander Moshurovskiy']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 21,
                    adjusted: undefined
                },
                members: ['Oxana Ilyashenko', 'Станіслав Шитий', 'Yuriy Prus']
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
                    members: ['Anastasiya Ivanova', 'Alexander Moshurovskiy']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Oksana Nechiporenko', 'Станіслав Шитий']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 19,
                        adjusted: undefined
                    },
                    members: ['Dmitry Golivets', 'Pavel Karnaukhov']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 23,
                        adjusted: undefined
                    },
                    members: ['Julia Turkevich', 'Dmytro Petryk']
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
                members: ['Станіслав Шитий', 'Alexander Moshurovskiy', 'Alina Sergeevna']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 43,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Marina Yukhymets', 'Dmitry Golivets']
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
                    members: ['Alexander Moshurovskiy', 'Dmytro Petryk']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 24,
                        adjusted: undefined
                    },
                    members: ['Oksana Nechiporenko', 'Oleksii Malashyna']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 16,
                        adjusted: undefined
                    },
                    members: ['Pavel Karnaukhov', 'Alona Malashyna']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 21,
                        adjusted: undefined
                    },
                    members: ['Anastasiya Ivanova', 'Liliya Dmitrieva']
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
                members: ['Oksana Nechiporenko', 'Marina Yukhymets', 'Евгения Шиндер']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 37,
                    adjusted: undefined
                },
                members: ['Dmytro Petryk', 'Pavel Karnaukhov', 'Oleksandr Kyetov']
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
                    members: ['Dmitry Golivets', 'Viktoriia Krykhno']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Oleksii Malashyna', 'Oksana Nechiporenko']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 22,
                        adjusted: undefined
                    },
                    members: ['Pavel Karnaukhov', 'Dmytro Petryk']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 22,
                        adjusted: undefined
                    },
                    members: ['Alona Malashyna', 'Julia Turkevich']
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
                members: ['Alexander Moshurovskiy', 'Viktoriia Krykhno', 'Marina Yukhymets']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 35,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Olga Konyakhyna', 'Volodymyr Walduk']
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
                    members: ['Dmytro Petryk', 'Oksana Nechiporenko']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 25,
                        adjusted: undefined
                    },
                    members: ['Marina Yukhymets', 'Olga Konyakhyna']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 33,
                        adjusted: undefined
                    },
                    members: ['Pavel Karnaukhov', 'Anastasiya Ivanova']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 38,
                        adjusted: undefined
                    },
                    members: ['Dmitry Golivets', 'Станіслав Шитий']
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
                members: ['Alexander Moshurovskiy', 'Dmitry Golivets', 'Oksana Nechiporenko']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 46,
                    adjusted: undefined
                },
                members: ['Viktoriia Krykhno', 'Marina Yukhymets', 'Pavel Karnaukhov']
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
                members: ['Pavel Karnaukhov', 'Volodymyr Walduk', 'Anastasiya Ivanova']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 66,
                    adjusted: undefined
                },
                members: ['Marina Yukhymets', 'Oksana Nechiporenko', 'Julia Turkevich']
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
                members: ['Alexander Moshurovskiy', 'Kateryna Zhurkina', 'Dmytro Petryk']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 42,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Marina Yukhymets', 'Sergey Kochergan']
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
                members: ['Anastasiya Ivanova', 'Pavel Karnaukhov', 'Oleksandr Voitsekhovskyi']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 64,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Marina Yukhymets', 'Anastacia Sooltanova']
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
                members: ['Oxana Ilyashenko', 'Anastasiya Ivanova', 'Станіслав Шитий']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 73,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Pavel Karnaukhov', 'Dmitry Golivets']
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
                    members: ['Rob Godin', 'Sergey Kondratyuk', 'Станіслав Шитий']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 36,
                    adjusted: undefined
                },
                members: ['Alexander Moshurovskiy', 'Dmytro Petryk', 'Dmitry Golivets']
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
                members: ['Станіслав Шитий', 'Alexander Moshurovskiy', 'Pavel Karnaukhov']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 49,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Marina Yukhymets', 'Sergey Kondratyuk']
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
                members: ['Станіслав Шитий', 'Olga Konyakhyna', 'Sergey Kondratyuk']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 48,
                    adjusted: undefined
                },
                members: ['Фирас Бурзан', 'Pavel Karnaukhov', 'Oksana Nechiporenko']
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
                    members: ['Фирас Бурзан', 'Sergey Kondratyuk']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 26,
                        adjusted: undefined
                    },
                    members: ['Pavel Karnaukhov', 'Sasha Leshchenko']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 29,
                        adjusted: undefined
                    },
                    members: ['Anastacia Sooltanova', 'Dmitry Golivets']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 27,
                        adjusted: undefined
                    },
                    members: ['Dmytro Petryk', 'Mariia Korotkova']
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
                members: ['Фирас Бурзан', 'Alexander Moshurovskiy', 'Станіслав Шитий']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 31,
                    adjusted: undefined
                },
                members: ['Sergey Kondratyuk', 'Pavel Karnaukhov', 'Katya Kirey']
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
                    members: ['Anastacia Sooltanova', 'Natalia Kornaeva']
                },
                closing: {
                    name: 'Closing Proposition',
                    score: {
                        original: 18,
                        adjusted: undefined
                    },
                    members: ['Alexander Moshurovskiy', 'Katya Kirey']
                }
            },
            opposition: {
                opening: {
                    name: 'Opening Opposition',
                    score: {
                        original: 24,
                        adjusted: undefined
                    },
                    members: ['Oksana Nechiporenko', 'Pavel Karnaukhov']
                },
                closing: {
                    name: 'Closing Opposition',
                    score: {
                        original: 30,
                        adjusted: undefined
                    },
                    members: ['Dmytro Petryk', 'Anastasiya Ivanova']
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
                members: ['Pavel Karnaukhov', 'Oleksandr Kyetov', 'Sergey Kondratyuk']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 24,
                    adjusted: undefined
                },
                members: ['Фирас Бурзан', 'Станіслав Шитий', 'Jane Doe']
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
                members: ['Sergey Kondratyuk', 'James Doe', 'John Doe']
            },
            opposition: {
                name: 'Opposition',
                score: {
                    original: 16,
                    adjusted: undefined
                },
                members: ['Oksana Nechiporenko', 'Фирас Бурзан', 'Jane Doe']
            }
        }
    }
];
