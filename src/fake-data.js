export default {
    golfers: [
        {
            name: 'fake name',
            position: 1,
            to_par: 0,
            r1: 72,
            r2: 72,
            r3: 72,
            r4: 72,
            total: 288,
            tee_time: '1:00PM'
        },
        {
            name: 'fake news',
            position: 2,
            to_par: 1,
            r1: 73,
            r2: 72,
            r3: null,
            r4: null,
            total: 288,
            tee_time: '3:00PM'
        },
        {
            name: 'fake guy',
            position: 3,
            to_par: 2,
            r1: 72,
            r2: 72,
            r3: null,
            r4: null,
            total: 288,
            tee_time: '2:00PM'
        }
    ],
    pools: {
        1: {
            entrants: [
                {
                    name: 'Ryan Quinn',
                    position: 1,
                    raw_score: 10,
                    adjusted_score: 11,
                    birdies: 15,
                    golfers: [
                        {
                            name: 'fake name'
                        },
                        {
                            name: 'fake news'
                        },
                        {
                            name: 'fake guy'
                        }
                    ]
                },
                {
                    name: 'Ryan Blah',
                    position: 2,
                    raw_score: 10,
                    birdies: 20,
                    adjusted_score: 11,
                    golfers: [
                        {
                            name: 'fake name'
                        },
                        {
                            name: 'fake news'
                        },
                        {
                            name: 'fake guy'
                        }
                    ]
                },
                {
                    name: 'Ryan Dude',
                    position: 3,
                    birdies: 10,
                    raw_score: 10,
                    adjusted_score: 11,
                    golfers: [
                        {
                            name: 'fake name'
                        },
                        {
                            name: 'fake news'
                        },
                        {
                            name: 'fake guy'
                        }
                    ]
                }
            ]

        }
    }
}
