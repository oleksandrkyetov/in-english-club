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
                        original: 0,
                        adjusted: undefined
                    },
                    members: ['Alona Malashyna', 'Julia Turkevich']
                }
            }
        }
    }
];
