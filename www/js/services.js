angular.module('chat.services', ['firebase']);

angular.module('chat.services').factory('ChatManager', ['$firebaseArray', '$q', function ($firebaseArray) {
    var APIUrl = "https://ionic-ngconf.firebaseio.com/v0",
        ref = new Firebase(APIUrl),
        postsRef = ref.child('posts');
    return {
        posts: function () {
            return $firebaseArray(postsRef.limitToLast(50));
        }
    };
}]);

angular.module('chat.services').factory('FakeCamera', [function () {
    return {
        getPicture: function () {
            return "data:image/png;base64,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";
        }
    }
}]);

angular.module('chat.services').factory('Drifters', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var drifters = [
        {
            id: 0,
            name: 'Ben Sparrow',
            notes: 'Enjoys drawing things',
            face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            notes: 'Odd obsession with everything',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
            id: 2,
            name: 'Andrew Jostlen',
            notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
            id: 3,
            name: 'Adam Bradleyson',
            notes: 'I think he needs to buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 4,
            name: 'Perry Governor',
            notes: 'Just the nicest guy',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }, {
            id: 5,
            name: 'Mike Harrington',
            notes: 'Wicked good cahnference tawlker',
            face: 'https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png'
        }
    ];

    return {
        all: function () {
            return drifters;
        },
        get: function (drifterId) {
            // Simple index lookup
            return drifters[drifterId];
        }
    }
});

angular.module('chat.services').factory('Sessions', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var sessions = [
        {
            "day": "Wednesday",
            "items": [
                {
                    "time": "10:00 AM - 5:00 PM",
                    "title": "Angular 2 Workshop",
                    "extra": true
                }, {
                    "time": "12:00 PM - 1:00 PM",
                    "title": "Lunch for Workshops",
                    "extra": true
                }, {
                    "time": "1:00 PM - 4:00 PM",
                    "title": "Ionic Workshop",
                    "extra": true
                }, {
                    "time": "7:00 PM - 10:00 PM",
                    "title": "Hack Night"
                }
            ]
        },
        {
            "day": "Thursday",
            "items": [
                {
                    "time": "7:00 AM",
                    "title": "Breakfast"
                }, {
                    "time": "9:00 AM",
                    "title": "Welcome",
                    "author": "Brad Green & Igor Minar"
                }, {
                    "time": "9:50 AM",
                    "title": "State of 1.x",
                    "author": "Pawel Kozlowski & Lucas Galfaso"
                }, {
                    "time": "10:15 AM",
                    "title": "The New Router",
                    "author": "Brian Ford"
                }, {
                    "time": "10:40 AM",
                    "title": "Prototyping with Angular? YES!!",
                    "author": "Kelly Knight & Dirk Ginader"
                }, {
                    "time": "11:05 AM",
                    "title": "Reactive all the things",
                    "author": "Ben Lesh & Martin Gontovnikas"
                }, {
                    "time": "11:30 AM",
                    "title": "Creating Container Components with Web Components and Angular",
                    "author": "Kara Erickson & Rachael L Moore"
                }, {
                    "time": "11:50 AM",
                    "title": "Lunch"
                }, {
                    "time": "1:20 PM",
                    "title": "ngTasty",
                    "author": "Leonardo Zizzamia"
                }, {
                    "time": "1:45 PM",
                    "title": "TypeScript and ES6",
                    "author": "Dan Wahlin & Andrew Connell"
                }, {
                    "time": "2:10 PM",
                    "title": "Community Building How-To: Make More Angular Devs Now",
                    "author": "Judy Tuan"
                }, {
                    "time": "2:35 PM",
                    "title": "ng-wat?",
                    "author": "Shai Reznik"
                }, {
                    "time": "2:50 PM",
                    "title": "Accessibility Design Made Easy",
                    "author": "Julie Ralph"
                }, {
                    "time": "3:00 PM",
                    "title": "Snack Break"
                }, {
                    "time": "3:30 PM",
                    "title": "Why Realtime Matters",
                    "author": "James Tamplin"
                }, {
                    "time": "3:55 PM",
                    "title": "ngModelOptions in 5 minutes",
                    "author": "Kent C. Dodds"
                }, {
                    "time": "4:03 PM",
                    "title": "How to Teach Angular to your Kids",
                    "author": "Katya Eames"
                }, {
                    "time": "4:11 PM",
                    "title": "Run digest cycle in web worker",
                    "author": "Dr. Gleb Bahmutov PhD."
                }, {
                    "time": "4:20 PM",
                    "title": "$asqwatch is real",
                    "author": "William Scott Moss"
                }, {
                    "time": "4:45 PM",
                    "title": "Ionic + Angular: Superpowers for Mobile App Development",
                    "author": "Adam Bradley"
                }, {
                    "time": "5:10 PM",
                    "title": "(Super)Power Management",
                    "author": "Igor Minar"
                }, {
                    "time": "5:30 PM",
                    "title": "Dinner"
                }, {
                    "time": "8:00 PM",
                    "title": "Amazing Party You Won't Want To Miss"
                }
            ]
        },
        {
            "day": "Friday",
            "items": [
                {
                    "time": "7:00 AM",
                    "title": "Breakfast"
                }, {
                    "time": "9:00 AM",
                    "title": "Keynote",
                    "author": "Miško Hevery & Rado Kirov"
                }, {
                    "time": "9:55 AM",
                    "title": "Binding to the Cloud with Falcor",
                    "author": "Jafar Husain"
                }, {
                    "time": "10:20 AM",
                    "title": "TypeScript and Angular 2.0",
                    "author": "Jonathan Turner"
                }, {
                    "time": "10:45 AM",
                    "title": "What's new in ngAnimate",
                    "author": "Matias Niemelä"
                }, {
                    "time": "11:05 AM",
                    "title": "Building Platforms with Angular",
                    "author": "Jen Bourey"
                }, {
                    "time": "11:30 AM",
                    "title": "Fast from the Start",
                    "author": "Jeff Cross"
                }, {
                    "time": "11:50 AM",
                    "title": "Lunch"
                }, {
                    "time": "1:20 PM",
                    "title": "Angular 1.3 meets Angular 2.0",
                    "author": "Michał Gołębiowski"
                }, {
                    "time": "1:45 PM",
                    "title": "Digging into Angular Style Guide Decisions",
                    "author": "John Papa"
                }, {
                    "time": "2:10 PM",
                    "title": "Better i18n for your Angular apps",
                    "author": "Chirayu Krishnappa & Pascal Precht"
                }, {
                    "time": "2:35 PM",
                    "title": "Badges? We don't need no stinkin' badges!",
                    "author": "Lukas Ruebbelke & Geoff Goodman"
                }, {
                    "time": "3:00 PM",
                    "title": "Snack Break"
                }, {
                    "time": "3:30 PM",
                    "title": "Build an Angular Material App",
                    "author": "Thomas Burleson & Naomi Black"
                }, {
                    "time": "3:55 PM",
                    "title": "Angular + React = Speed",
                    "author": "Dave Smith"
                }, {
                    "time": "4:20 PM",
                    "title": "Angular Behind The Scenes",
                    "author": "Rodric Haddad"
                }, {
                    "time": "4:45 PM",
                    "title": "Change Detection Reinvented",
                    "author": "Victor Savkin"
                }, {
                    "time": "5:10 PM",
                    "title": "Angular Team Panel/QA",
                    "author": "Googlers"
                }, {
                    "time": "5:55 PM",
                    "title": "Parting Words",
                    "author": "Organizers & Angular Team"
                }, {
                    "time": "7:00 PM",
                    "title": "Game Night"
                }, {
                    "time": "10:00 PM",
                    "title": "Game Night Ends"
                }
            ]
        }
    ];

    return {
        all: function () {
            return sessions;
        },
        get: function (dayIndex, sessionId) {
            // Simple index lookup
            return sessions[dayIndex][sessionId];
        }
    }
});

angular.module('chat.services').factory('Speakers', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var speakers = [
        {
            id: 0,
            name: 'Scott Moss',
            twitter: 'scotups',
            notes: 'Teacher, Open Source contributor, full-stack engineer @hackreactor',
            face: 'https://pbs.twimg.com/profile_images/548581283954032641/LXzCSlIr.jpeg'
        }, {
            id: 1,
            name: 'James Tamplin',
            twitter: 'JamesTamplin',
            notes: 'Helping developers create extraordinary experiences (co-founder) @Firebase. Perpetual Optimist.',
            face: 'https://pbs.twimg.com/profile_images/1776567091/ProfilePic3.png'
        }, {
            id: 2,
            name: 'Julie Ralph',
            twitter: 'SomeJulie',
            notes: 'Protractor for AngularJS, works at Google',
            face: 'http://www.ng-conf.org/submissions/a11y-easy/profile.jpg'
        }, {
            id: 3,
            name: 'Rodric Haddad',
            twitter: 'rodyhaddad',
            notes: 'Front-End Software Engineer. Student. Contributor and previous intern on the @angularjs team at @google. Also a close-up magician and hockey goalie.',
            face: 'https://pbs.twimg.com/profile_images/530515659189276672/RKBk6rDa.jpeg'
        }, {
            id: 4,
            name: 'Dave Smith',
            twitter: 'djsmith42',
            notes: null,
            face: 'https://pbs.twimg.com/profile_images/564112641082159106/njligNos.jpeg'
        }, {
            id: 5,
            name: 'Lukas Ruebbelke',
            twitter: 'simpulton',
            notes: 'Developer. Hacker. Community backer. Author and blogger. Console logger. Author of AngularJS in Action for Manning Publications.',
            face: 'https://pbs.twimg.com/profile_images/505753644004687872/_5-AcJkD.jpeg'
        }, {
            id: 6,
            name: 'Geoff Goodman',
            twitter: 'g_goodman',
            notes: 'Hacker extraordinaire operating under deep cover as a financial analyst. Creator of http://plnkr.co ',
            face: 'https://pbs.twimg.com/profile_images/1414611721/P1020400_400x400.JPG'
        }, {
            id: 7,
            name: 'Chirayu',
            twitter: 'chirayuk',
            notes: 'AngularDart & AngularJS @ Google',
            face: 'http://www.ng-conf.org/submissions/better-i18n-for-your-angular-apps/profile.jpg'
        }, {
            id: 8,
            name: 'Pascal Precht',
            twitter: 'PascalPrecht',
            notes: 'Developer Advocate, Father of angular-translate, also into @Web_Components and @Polymer. Vimthusiast that runs @thoughtram.',
            face: 'https://pbs.twimg.com/profile_images/557638914194681856/AzdFKOj8.jpeg'
        }, {
            id: 9,
            name: 'Jen Bourey',
            twitter: 'jbourey',
            notes: 'Loves UIs, testing, and shiny code. Currently works at Google. Companion to a Siberian Husky.',
            face: 'https://pbs.twimg.com/profile_images/1467837108/headshot.jpg'
        }, {
            id: 10,
            name: 'Victor Savkin',
            twitter: 'victorsavkin',
            notes: 'Work on Angular at Google',
            face: 'https://pbs.twimg.com/profile_images/2879794111/880ed2af4e2b5cd6db5050206345d8c2.jpeg'
        }, {
            id: 11,
            name: 'judytuna',
            twitter: 'judytuna',
            notes: 'starcraft2! na\'vi! openkinect! a cappella! ruby on rails! @indiegogo! ribbons! @womenwhocode! ouya! minecraft! muse! i love all the things.',
            face: 'https://pbs.twimg.com/profile_images/1329979983/judy_snorkeling_in_hawaii.jpg'
        }, {
            id: 12,
            name: 'Gleb Bahmutov',
            twitter: 'bahmutov',
            notes: 'JavaScript ninja, image processing expert, software quality fanatic',
            face: 'https://pbs.twimg.com/profile_images/3401539796/1b8d5804ea9089e4d292331ef8fe759b.jpeg'
        }, {
            id: 13,
            name: 'Jeff Cross',
            twitter: 'jeffbcross',
            notes: 'You may think you know me from Angular, Google, or Deployd. I am categorized as ENTP.',
            face: 'https://pbs.twimg.com/profile_images/1897415835/hart_20110927_7384.small.jpg'
        }, {
            id: 14,
            name: 'Tobias Bosch',
            twitter: 'tbosch1009',
            notes: 'Developer. Learner. Javascript and java hacker. Angular team member at Google Inc.',
            face: 'https://pbs.twimg.com/profile_images/378800000667900915/bf1efcdb2b67f25bcffa38023f5a717e.png'
        }, {
            id: 15,
            name: 'Katya Eames',
            twitter: 'KoshkaEames',
            notes: 'Fanfic author, web developer in training, blogger, Russian spy',
            face: 'https://pbs.twimg.com/profile_images/559154782988808192/MnNUzhB5.jpeg'
        }, {
            id: 16,
            name: 'Adam Bradley',
            twitter: 'adamdbradley',
            notes: 'Co-creator and lead developer of @IonicFramework. Proud dad, husband, veteran & dogs best friend.',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
            id: 17,
            name: 'Brad Green',
            twitter: 'bradlygreen',
            notes: 'I work at Google where I manage AngularJS and Google\'s internal sales productivity applications. I\'m a dad.',
            face: 'https://pbs.twimg.com/profile_images/2344189796/o5u8bz6cep1bfkasvsm1.jpeg'
        }, {
            id: 18,
            name: 'Igor Minar',
            twitter: 'IgorMinar',
            notes: 'Software geek changing the web with http://angularjs.org/ ',
            face: 'https://pbs.twimg.com/profile_images/1115035412/OnDaBeach-square.png'
        }, {
            id: 19,
            name: 'Misko Hevery',
            twitter: 'mhevery',
            notes: 'Father of AngularJS',
            face: 'https://pbs.twimg.com/profile_images/2614358219/0ixx2n6n059uf5gdwaxl.jpeg'
        }, {
            id: 20,
            name: 'Rado Kirov',
            twitter: 'radokirov',
            notes: null,
            face: 'https://pbs.twimg.com/profile_images/86563948/radosmall.jpg'
        }, {
            id: 21,
            name: 'Thomas Burleson',
            twitter: 'ThomasBurleson',
            notes: 'Online Solutions Architect Building AngularJS, Flex & HTML5 UX applications using Creator of Quizzler, Jasmine-As-Promised, BabelFx, Swiz-Extensions, & more...',
            face: 'https://pbs.twimg.com/profile_images/3785668340/2f4d7addf0020a80f14f7059c836e19b.jpeg'
        }, {
            id: 22,
            name: 'Kara Erickson',
            twitter: 'karaforthewin',
            notes: null,
            face: 'https://pbs.twimg.com/profile_images/563896377810251776/10MpnH42.jpeg'
        }, {
            id: 23,
            name: 'Rachael L Moore',
            twitter: 'morewry',
            notes: 'An image of a beautiful sunset makes me think about HTTP requests and image compression...and long walks on the beach.',
            face: 'https://pbs.twimg.com/profile_images/378800000324770945/f68da0fffde3deaa7ba09209ba87e6f4.jpeg'
        }, {
            id: 24,
            name: 'Michał Gołębiowski',
            twitter: 'm_gol',
            notes: 'web developer at Laboratorium EE; member of the jQuery core team & the Angular Working Group',
            face: 'https://pbs.twimg.com/profile_images/543039428155805696/228vJxib.jpeg'
        }, {
            id: 25,
            name: 'Kent C. Dodds',
            twitter: 'kentcdodds',
            notes: 'I love being a husband, father, mormon, and JavaScripter https://medium.com/@kentcdodds  #AngularJS #ReactJS #JavaScript @Alianza_Inc @egghead @AngularAir',
            face: 'https://pbs.twimg.com/profile_images/568536479643619329/EKlQXV6h.png'
        }, {
            id: 26,
            name: 'Leonardo Zizzamia',
            twitter: 'Zizzamia',
            notes: 'Software Engineer @Twitter, when I\'m not coding you can find me at the @TwitterLodge. Creator of @Opentaste and #ngTasty. AngularJS ♥ Cooking.',
            face: 'https://pbs.twimg.com/profile_images/455960725656059905/UhxENS0I.jpeg'
        }, {
            id: 27,
            name: 'Shai Reznik',
            twitter: 'shai_reznik',
            notes: 'Founder of HiRez.io, & AngularJS Consultant for Enterprise Companies, Lean Startup Entrepreneur, Runs 2 meetup groups - #jsisrael #talkinglean, Improv performer',
            face: 'https://pbs.twimg.com/profile_images/555710736110858242/nTNCtr2C.jpeg'
        }, {
            id: 28,
            name: 'Kelly Knight',
            twitter: null,
            notes: null,
            face: 'http://www.ng-conf.org/submissions/prototyping-yes/profile.jpg'
        }, {
            id: 29,
            name: 'Dirk Ginader',
            twitter: 'ginader',
            notes: 'New Daddy | New at Google | Webdev | Accessibility | Javascript | floating Head | Photography Newbie | happy chap | lover of lunch breaks :-)',
            face: 'https://pbs.twimg.com/profile_images/2932456336/b5d4615735aa0bef8c6128697c2d3ce9.png'
        }, {
            id: 30,
            name: 'Ben Lesh',
            twitter: 'BenLesh',
            notes: 'Coder-ista-ist of webs, minivan chauffeur, thinks the word `foody` just means `likes to eat things`, Senior UI Engineer @Netflix - Views are my own',
            face: 'https://pbs.twimg.com/profile_images/497633471691382784/9gEn4uj3.jpeg'
        }, {
            id: 31,
            name: 'Martin Gonto',
            twitter: 'mgonto',
            notes: 'Leader of the Free Development World. I make stuff happen. Developer Advocate at @auth0',
            face: 'https://pbs.twimg.com/profile_images/552685789616668672/G8JijA_S.jpeg'
        }, {
            id: 32,
            name: 'John Papa',
            twitter: 'John_Papa',
            notes: 'Husband, father, and Catholic enjoying every minute with my family. Disney fanatic, evangelist, HTML/CSS/JavaScript dev, speaker, and Pluralsight author.',
            face: 'https://pbs.twimg.com/profile_images/2513304786/ududkrhfpysseeidseo9.png'
        }, {
            id: 33,
            name: 'Dan Wahlin',
            twitter: 'DanWahlin',
            notes: 'Founder & CEO of Wahlin Consulting. Consulting & training on AngularJS, jQuery, HTML5, Node.js, ASP_NET, C#. Author for Pluralsight http://ow.ly/jBYAy ',
            face: 'https://pbs.twimg.com/profile_images/1885570179/DanHeadShot2012Larger.jpg'
        }, {
            id: 34,
            name: 'Andrew Connell',
            twitter: 'andrewconnell',
            notes: 'Developer, entrepreneur, founder & ten-time recipient of Microsoft’s MVP award (\'05-\'14) for SharePoint. @mscloudshow co-host podcast & @kerrbapp co-founder.',
            face: 'https://pbs.twimg.com/profile_images/555108696301113344/dit1grCn.png'
        }, {
            id: 35,
            name: 'Jafar Husain',
            twitter: 'jhusain',
            notes: null,
            face: 'https://pbs.twimg.com/profile_images/491609678539792384/YskBOQeH.jpeg'
        }, {
            id: 36,
            name: 'Brian Ford',
            twitter: 'briantford',
            notes: '@angularjs at @google ✨ javascript mystic ✨ the most millennial person in the room ✨ took a vow to never sleep',
            face: 'https://pbs.twimg.com/profile_images/561959487872200705/Do-3xJ0U.jpeg'
        }, {
            id: 37,
            name: 'Jonathan Turner',
            twitter: 'jntrnr',
            notes: 'Programming language geek working at Microsoft on TypeScript. Previously worked on Clang/LLVM at Apple and Chapel at Cray.',
            face: 'https://pbs.twimg.com/profile_images/506169613483134976/30f-cIer.jpeg'
        }, {
        id: 38,
            name: 'Matias Niemela',
            twitter: 'yearofmoo',
            notes: 'World-class material and high quality articles, guides and code perfect for your web and software development needs.',
            face: 'http://www.ng-conf.org/submissions/whats-new-with-nganimate-in-1.4/profile.jpg'
        }
    ];

    return {
        all: function () {
            return speakers;
        },
        get: function (speakerId) {
            // Simple index lookup
            return speakers[speakerId];
        }
    }
});