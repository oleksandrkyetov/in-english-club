'use strict';

var mappings = [
    {
        name: 'Anastasiya Ivanova',
        facebook: 'https://www.facebook.com/profile.php?id=100009763771785',
        aliases: {
            debates: 'Josefina Herrera'
        }
    },
    {
        name: 'Kateryna Zhurkina',
        facebook: 'https://www.facebook.com/kateryna.zhurkina',
        aliases: {
            debates: 'Julia Castro'
        }
    },
    {
        name: 'Alexander Moshurovskiy',
        facebook: 'https://www.facebook.com/alexander.moshurovskiy',
        aliases: {
            debates: 'Ramon Willis'
        }
    },
    {
        name: 'Oxana Ilyashenko',
        facebook: 'https://www.facebook.com/oxana.ilyashenko.5',
        aliases: {
            debates: 'Sharon Fitzgerald'
        }
    },
    {
        name: 'Станіслав Шитий',
        facebook: 'https://www.facebook.com/profile.php?id=100001407672566',
        aliases: {
            debates: 'Benjamin Wheeler'
        }
    },
    {
        name: 'Yuriy Prus',
        facebook: 'https://www.facebook.com/profile.php?id=100009667143236',
        aliases: {
            debates: 'Preston Logan'
        }
    },
    {
        name: 'Alina Sergeevna',
        facebook: 'https://www.facebook.com/kojiudr',
        aliases: {
            debates: 'Myra Johnston'
        }
    },
    {
        name: 'Oksana Nechiporenko',
        facebook: 'https://www.facebook.com/profile.php?id=100007935664711',
        aliases: {
            debates: 'Jeannie Brown',
            dixit: 'Jeannie Brown'
        }
    },
    {
        name: 'Marina Yukhymets',
        facebook: 'https://www.facebook.com/marina.yukhymets.5',
        aliases: {
            debates: 'Krista Poole'
        }
    },
    {
        name: 'Dmitry Golivets',
        facebook: 'https://www.facebook.com/dmitry.golivets',
        aliases: {
            debates: 'Cory Salazar'
        }
    },
    {
        name: 'Евгения Шиндер',
        facebook: 'https://www.facebook.com/profile.php?id=100012452536549',
        aliases: {
            debates: 'Kristine Quinn'
        }
    },
    {
        name: 'Dmytro Petryk',
        facebook: 'https://www.facebook.com/dmytro.petryk',
        aliases: {
            debates: 'Tommy Welch'
        }
    },
    {
        name: 'Pavel Karnaukhov',
        facebook: 'https://www.facebook.com/pavel.karnaukhov.7',
        aliases: {
            debates: 'Enrique Houston'
        }
    },
    {
        name: 'Oleksandr Kyetov',
        facebook: 'https://www.facebook.com/oleksandr.kyetov',
        aliases: {
            debates: 'Justin Ford'
        }
    },
    {
        name: 'Viktoriia Krykhno',
        facebook: 'https://www.facebook.com/Krykhno',
        aliases: {
            debates: 'Genevieve Simon'
        }
    },
    {
        name: 'Olga Konyakhyna',
        facebook: 'https://www.facebook.com/profile.php?id=100001760152990',
        aliases: {
            debates: 'Hannah Hubbard'
        }
    },
    {
        name: 'Volodymyr Walduk',
        facebook: 'https://www.facebook.com/profile.php?id=100011405103774',
        aliases: {
            debates: 'Maurice Castro'
        }
    },
    {
        name: 'Julia Turkevich',
        facebook: 'https://www.facebook.com/julia.turkevich.7',
        aliases: {
            debates: 'Sharon Terry'
        }
    },
    {
        name: 'Sergey Kochergan',
        facebook: 'https://www.facebook.com/sergey.kochergan',
        aliases: {
            debates: 'Sidney Cross'
        }
    },
    {
        name: 'Oleksandr Voitsekhovskyi',
        facebook: 'https://www.facebook.com/AVoits',
        aliases: {
            debates: 'Ervin Peters'
        }
    },
    {
        name: 'Anastacia Sooltanova',
        facebook: 'https://www.facebook.com/naska.sooltanova',
        aliases: {
            debates: 'April Aguilar'
        }
    },
    {
        name: 'Rob Godin',
        facebook: 'https://www.facebook.com/rob.godin.3',
        aliases: {
            debates: 'Russell Fields'
        }
    },
    {
        name: 'Sergey Kondratyuk',
        facebook: 'https://www.facebook.com/sergey.kondratyuk.98',
        aliases: {
            debates: 'Ellis Kelly'
        }
    },
    {
        name: 'Фирас Бурзан',
        facebook: 'https://www.facebook.com/profile.php?id=100005372852025',
        aliases: {
            debates: 'Conrad Norman'
        }
    },
    {
        name: 'Katya Kirey',
        facebook: 'https://www.facebook.com/katya.kirey.9',
        aliases: {
            debates: 'Sheryl Jimenez'
        }
    },
    {
        name: 'Jane Doe',
        facebook: undefined,
        aliases: {
            debates: 'Jane Doe'
        }
    },
    {
        name: 'James Doe',
        facebook: undefined,
        aliases: {
            debates: 'James Doe'
        }
    },
    {
        name: 'John Doe',
        facebook: undefined,
        aliases: {
            debates: 'John Doe'
        }
    },
    {
        name: 'Oleksii Malashyna',
        facebook: 'https://www.facebook.com/malashyna',
        aliases: {
            debates: 'Austin Bates'
        }
    },
    {
        name: 'Alona Malashyna',
        facebook: 'https://www.facebook.com/alona.mordiuk',
        aliases: {
            debates: 'Ramona Moss'
        }
    },
    {
        name: 'Liliya Dmitrieva',
        facebook: 'https://www.facebook.com/liliya.dmitrieva',
        aliases: {
            debates: 'Lorene Moody'
        }
    },
    {
        name: 'Sasha Leshchenko',
        facebook: 'https://www.facebook.com/olexle',
        aliases: {
            debates: 'Juan Holmes'
        }
    },
    {
        name: 'Mariia Korotkova',
        facebook: 'https://www.facebook.com/maria.korotkova.984',
        aliases: {
            debates: 'Claudia Frazier'
        }
    },
    {
        name: 'Natalia Kornaeva',
        facebook: 'https://www.facebook.com/natalia.kornaeva',
        aliases: {
            debates: 'Pearl May'
        }
    },
    {
        name: 'Iryna Kraichyk',
        facebook: 'https://www.facebook.com/profile.php?id=100006877245919',
        aliases: {
            debates: 'Katrina Phillips'
        }
    }
];
