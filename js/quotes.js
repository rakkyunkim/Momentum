const quotes=[
    {   quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", 
        author: "Mother Teresa"
    },
    {   quote: "When you reach the end of your rope, tie a knot in it and hang on." ,
        author: "Franklin D. Roosevelt"
    },
    {   quote: "Always remember that you are absolutely unique. Just like everyone else." ,
        author: "Margaret Mead"
    },
    {   quote: "Don't judge each day by the harvest you reap but by the seeds that you plant." ,
        author: "Robert Louis Stevenson"
    },
    {   quote: "The future belongs to those who believe in the beauty of their dreams." ,
        author: "Eleanor Roosevelt"
    },
    {   quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn." ,
        author: "Benjamin Franklin"
    },
    {   quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." ,
        author: "Helen Keller"
    },
    {   quote: "It is during our darkest moments that we must focus to see the light." ,
        author: "Aristotle"
    },
    {   quote: "Whoever is happy will make others happy too." ,
        author: "Anne Frank"
    },
    {   quote: "Do not go where the path may lead, go instead where there is no path and leave a trail." ,
        author: "Ralph Waldo Emerson"
    },
    {   quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {   quote: "Setting goals is the first step in turning the invisible into visible." ,
        author: "Tony Robbins"
    },
    {   quote: "If a mind thinks with a believing attitude, one can do amazing things.",
        author: "Norman Vincent Peale"
    },
    {   quote: "Your goal should be just out of reach. But not out of sight.",
        author: "Remi Witt"
    },
    {   quote: "If you are not where you want to be, do not quit, Instead reinvent yourself and change your habits.",
        author:"Eric Thomas" 
    },
    {   quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {   quote: "You must want to be a butterfly so badly, you are willing to give up being a caterpillar. ",
        author:"Trina Paulus"
    },
    {   quote: "Not knowing you can’t do something is sometimes all it takes to do it.",
        author:"Ally Carter" 
    },
    {   quote: "We are what we repeatedly do. Excellence, therefore, is not an act. But a habit.",
        author: "Aristotle" 
    },
    {   quote: "Quality means doing it right when no one is looking." ,
        author:"Henry Ford"
    }
]

const quote = document.querySelector("#quote span:first-child");
//const author = document.querySelector("#quote span:last-child");
const author = document.querySelector("#quote p");

const todaysquote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `"${todaysquote.quote}" `;
author.innerText = ` - ${todaysquote.author}`;