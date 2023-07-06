/**
 * Quiz Questions
 * Questions will be accessed from script.js
 */

// Easy Mode/ 10 questions in Easy mode

const easyQuestions = [{
    question: 'What are the four nations that make the UK?',
    answers: [{
            text: 'England, Wales, Northern Ireland and Sweden.',
            correct: false
        },
        {
            text: 'Wales, Northern Ireland, Scotland and Italy.',
            correct: false
        },
        {
            text: 'England, Scotland, Wales and Northern Ireland.',
            correct: true
        },
        {
            text: 'Spain, France, England and Wales.',
            correct: false
        }
    ]
}, {
    question: 'What year was European Union founded?',
    answers: [{
            text: '1975',
            correct: false
        },
        {
            text: '1998',
            correct: false
        },
        {
            text: '1993',
            correct: true
        },
        {
            text: '2000',
            correct: false
        }
    ]
}, {
    question: 'What is the oldest treaty in world?',
    answers: [{
            text: 'Treaty of Heiligen',
            correct: false
        },
        {
            text: 'Treaty of Verdum',
            correct: false
        },
        {
            text: 'Treaty of Tempe',
            correct: false
        },
        {
            text: 'Treaty of Windsor',
            correct: true
        }
    ]
}, {
    question: 'What type of boats did the Vikings use when exploring and raiding?',
    answers: [{
            text: 'Caravel',
            correct: false
        },
        {
            text: 'longships',
            correct: true
        },
        {
            text: 'Yacht',
            correct: false
        },
        {
            text: 'Balinger Ship',
            correct: false
        }
    ]
}, {
    question: 'Where did the industrial revolution started?',
    answers: [{
            text: 'Italy',
            correct: false
        },
        {
            text: 'Colombia',
            correct: false
        },
        {
            text: 'Great Britain',
            correct: true
        },
        {
            text: 'Antarctica',
            correct: false
        }
    ]
}, {
    question: 'What was the first country to be invaded by Germany in WW2?',
    answers: [{
            text: 'Iceland',
            correct: false
        },
        {
            text: 'Portugal',
            correct: false
        },
        {
            text: 'Australia',
            correct: false
        },
        {
            text: 'Poland',
            correct: true
        }
    ]
}, {
    question: 'When did the French Revolution began?',
    answers: [{
            text: '5 May 1789',
            correct: true
        },
        {
            text: '25 April 1974',
            correct: false
        },
        {
            text: '10 June 1856',
            correct: false
        },
        {
            text: '15 September 1639',
            correct: false
        }
    ]
}, {
    question: 'What year did industrial revolution started?',
    answers: [{
            text: '1975',
            correct: false
        },
        {
            text: '1800',
            correct: false
        },
        {
            text: '1760',
            correct: true
        },
        {
            text: '2000',
            correct: false
        }
    ]
}, {
    question: 'Which US president abolished slavery?',
    answers: [{
            text: 'George w. Bush',
            correct: false
        },
        {
            text: 'Richard Nixon',
            correct: false
        },
        {
            text: 'Abraham Lincoln',
            correct: true
        },
        {
            text: 'Donald Trump',
            correct: false
        }
    ]
}, {
    question: 'What year did the Berlin wall fall?',
    answers: [{
            text: '1975',
            correct: false
        },
        {
            text: '1998',
            correct: false
        },
        {
            text: '1993',
            correct: false
        },
        {
            text: '1989',
            correct: true
        }
    ]
}];


// Medium Mode/ 10 questions in Medium mode

const mediumQuestions = [{
    question: 'In Ancient Rome, what was a thermae?',
    answers: [{
            text: 'Restaurant',
            correct: false
        },
        {
            text: 'Public sports',
            correct: false
        },
        {
            text: 'Public baths',
            correct: true
        },
        {
            text: 'Swimming Pool',
            correct: false
        }
    ]
}, {
    question: 'What was the final battle of the Napoleonic wars?',
    answers: [{
            text: 'The Battle of Waterloo',
            correct: true
        },
        {
            text: 'The Battle for England',
            correct: false
        },
        {
            text: 'The Battle of Antioch',
            correct: false
        },
        {
            text: 'THe Medieval Battle of Unity Spain',
            correct: false
        }
    ]
}, {
    question: 'What name is given to the deep ditch filled with water that often surrounded castles?',
    answers: [{
            text: 'Lake',
            correct: false
        },
        {
            text: 'Dam',
            correct: false
        },
        {
            text: 'Pond',
            correct: false
        },
        {
            text: 'Moat',
            correct: true
        }
    ]
}, {
    question: 'What was the name of Nazi Germany\'s official secret police?',
    answers: [{
            text: 'Gendarmerie',
            correct: false
        },
        {
            text: 'Polizei',
            correct: false
        },
        {
            text: 'Gestapo',
            correct: true
        },
        {
            text: 'Carabinieri',
            correct: false
        }
    ]
}, {
    question: 'Who was the first European to reach India via The Atlantic Ocean?',
    answers: [{
            text: 'Vasco da Gama',
            correct: true
        },
        {
            text: 'Napoleon',
            correct: false
        },
        {
            text: 'Julius Caeser',
            correct: false
        },
        {
            text: 'Christopher Columbus',
            correct: false
        }
    ]
}, {
    question: 'When was America discovered?',
    answers: [{
            text: '1257',
            correct: false
        },
        {
            text: '1760',
            correct: false
        },
        {
            text: '1689',
            correct: false
        },
        {
            text: '1492',
            correct: true
        }
    ]
}, {
    question: 'Which US state was an independent country from 1777 to 1791?',
    answers: [{
            text: 'Vermont',
            correct: true
        },
        {
            text: 'Texas',
            correct: false
        },
        {
            text: 'California',
            correct: false
        },
        {
            text: 'Florida',
            correct: false
        }
    ]
}, {
    question: 'What language was spoken in Acient Rome?',
    answers: [{
            text: 'Italian',
            correct: false
        },
        {
            text: 'Chinese',
            correct: false
        },
        {
            text: 'Latin',
            correct: true
        },
        {
            text: 'French',
            correct: false
        }
    ]
}, {
    question: 'Francisco Franco ruled which European country from 1939 to 1975?',
    answers: [{
            text: 'Portugal',
            correct: false
        },
        {
            text: 'Monaco',
            correct: false
        },
        {
            text: 'Spain',
            correct: true
        },
        {
            text: 'Italy',
            correct: false
        }
    ]
}, {
    question: 'What year did the Pakistan gain independence from the UK?',
    answers: [{
            text: '1975',
            correct: false
        },
        {
            text: '1998',
            correct: false
        },
        {
            text: '1945',
            correct: false
        },
        {
            text: '1947',
            correct: true
        }
    ]
}];


// Hard Mode/ 10 questions in Hard mode

const hardQuestions = [{
    question: 'Which 3 countries made up the Triple Entente in World War 1?',
    answers: [{
            text: 'Portugal, Spain and Italy',
            correct: false
        },
        {
            text: 'Greece, Albania and Romenia',
            correct: false
        },
        {
            text: 'Great Britain, France and Russia',
            correct: true
        },
        {
            text: 'Germany Australia and USA',
            correct: false
        }
    ]
}, {
    question: 'Which English king was defeated at the Battle of Hastings?',
    answers: [{
            text: 'King Harold II',
            correct: true
        },
        {
            text: 'King Charles I',
            correct: false
        },
        {
            text: 'King Henry V',
            correct: false
        },
        {
            text: 'King James II',
            correct: false
        }
    ]
}, {
    question: 'In which French city was Joan of Arc burnt at the stake?',
    answers: [{
            text: 'Paris',
            correct: false
        },
        {
            text: 'Rouen',
            correct: true
        },
        {
            text: 'Bordeaux',
            correct: false
        },
        {
            text: 'Clermont-Ferrand',
            correct: false
        }
    ]
}, {
    question: 'Which Europeans were the first to arrive in Japan?',
    answers: [{
            text: 'Spanish',
            correct: false
        },
        {
            text: 'English',
            correct: false
        },
        {
            text: 'Portuguese',
            correct: true
        },
        {
            text: 'French',
            correct: false
        }
    ]
}, {
    question: 'Who discovered America first?',
    answers: [{
            text: 'Vasco da Gama',
            correct: false
        },
        {
            text: 'Napoleon',
            correct: false
        },
        {
            text: 'Julius Caeser',
            correct: false
        },
        {
            text: 'Christopher Columbus',
            correct: true
        }
    ]
}, {
    question: 'Who was the first President of the United States?',
    answers: [{
            text: 'Herbert Hoover',
            correct: false
        },
        {
            text: 'George W. Bush',
            correct: false
        },
        {
            text: 'James Monroe',
            correct: false
        },
        {
            text: 'George Washington',
            correct: true
        }
    ]
}, {
    question: 'How many years did the 100 years war last?',
    answers: [{
            text: '116',
            correct: true
        },
        {
            text: '100',
            correct: false
        },
        {
            text: '101',
            correct: false
        },
        {
            text: '97',
            correct: false
        }
    ]
}, {
    question: 'How many US presidents have been assassinated?',
    answers: [{
            text: '1',
            correct: false
        },
        {
            text: '6',
            correct: false
        },
        {
            text: '4',
            correct: true
        },
        {
            text: '3',
            correct: false
        }
    ]
}, {
    question: 'Who invented the very first car?',
    answers: [{
            text: 'Henry Ford',
            correct: false
        },
        {
            text: 'Andre Citroen',
            correct: false
        },
        {
            text: 'Carl Benz',
            correct: true
        },
        {
            text: 'Enzo Ferrari',
            correct: false
        }
    ]
}, {
    question: 'What year did the Great Fire of London happened?',
    answers: [{
            text: '1975',
            correct: false
        },
        {
            text: '1766',
            correct: false
        },
        {
            text: '1810',
            correct: false
        },
        {
            text: '1666',
            correct: true
        }
    ]
}];