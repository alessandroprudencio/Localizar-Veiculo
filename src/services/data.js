const categories = [
    {
        id: 1,
        name: "Plantas",
        tags: ["products", "inspirations"],
        count: 2,
        image: require('../../assets/images/plants.png')
    },
    {
        id: 2,
        name: "Sementes",
        tags: ["products", "shop"],
        count: 3,
        image: require('../../assets/images/seeds.png')

    },
    {
        id: 3,
        name: "Flores",
        tags: ["products", "inspirations"],
        count: 1,
        image: require('../../assets/images/flowers.png')

    },
    {
        id: 4,
        name: "Pulverizadores",
        tags: ["products", "shop"],
        count: 6,
        image: require('../../assets/images/sprayers.png')

    },
    {
        id: 5,
        name: "Vasos",
        tags: ["products", "inspirations", "shop"],
        count: 147,
        image: require('../../assets/images/pots.png')
    },
    {
        id: 6,
        name: "Fertilizantes",
        tags: ["products", "shop"],
        count: 147,
        image: require('../../assets/images/fertilizerss.png')
    }
]


const products = [
    {
        id: 1,
        name: "16 melhores plantas que prosperam no seu quarto",
        description: "Os quartos merecem ser decorados com uma vegetação luxuriantecomo qualquer outro cômodo da casa - mas pode ser difícil encontrar uma plantaque prospera aqui. Pouca luz, alta umidade e temperaturas quentes significam apenascertas plantas de casa florescerão",
        tags: ['Interior', '27m', 'Ideas'],
        gallery: [
            require('../../assets/images/plants_1.png'),
            require('../../assets/images/plants_2.png'),
            require('../../assets/images/plants_3.png'),
            require('../../assets/images/plants_1.png'),
            require('../../assets/images/plants_2.png'),
            require('../../assets/images/plants_3.png'),
        ]

    }
]

const explore = [
    require('../../../../assets/images/explore_1.png'),
    require('../../../../assets/images/explore_2.png'),
    require('../../../../assets/images/explore_3.png'),
    require('../../../../assets/images/explore_4.png'),
    require('../../../../assets/images/explore_5.png'),
    require('../../../../assets/images/explore_6.png')
]

const profile = [
    {
        username: "Alessandro",
        location: "Brasil",
        email: "alessandroconectado@gmail.com",
        avatar: require('../../assets/images/avatar.png'),
        budget: 1000,
        monthly_cap: 5000,
        notifications: true,
        newsletter: true
    }
]

export { categories, products, explore, profile }