Meteor.startup(function () {
    if (Games.find().count() == 0) {
        
        var games = [
            {
                'name': 'Some game',
                'img': 'batman.png',
                'released': new Date("28/01/2016"),
                'console': 'one'
            },
            {
                'name': 'Some other game',
                'img': 'ff.png',
                'released': new Date("02/02/2016"),
                'console': 'xbox'
            }
        ];
        
        Games.insert(games[0]);
        Games.insert(games[1]);
    }
});
