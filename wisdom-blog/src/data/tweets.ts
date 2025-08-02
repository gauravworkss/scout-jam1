export interface Tweet {
  id: string;
  author: {
    name: string;
    handle: string;
    bio: string;
  };
  content: string;
  date: string;
  url: string;
  likes: number;
  retweets: number;
  category: Category;
  tags: string[];
}

export type Category = 
  | "Investment Strategy & Analysis"
  | "Psychology & Behavioral Finance"
  | "Entrepreneurship & Business"
  | "Personal Development & Mastery"
  | "Writing & Communication"
  | "Risk & Decision Making";

export const authors = {
  "Sanjay__Bakshi": {
    name: "Sanjay Bakshi",
    handle: "Sanjay__Bakshi",
    bio: "Professor, Value Investor & Distinguished Adjunct Professor at FLAME University"
  },
  "alixpasquet": {
    name: "Alix Pasquet",
    handle: "alixpasquet", 
    bio: "Portfolio Manager & Investment Strategist"
  },
  "morganhousel": {
    name: "Morgan Housel",
    handle: "morganhousel",
    bio: "Author of The Psychology of Money & Partner at Collaborative Fund"
  },
  "FoundersPodcast": {
    name: "David Senra",
    handle: "FoundersPodcast",
    bio: "Host of Founders Podcast - Stories of History's Greatest Entrepreneurs"
  },
  "RobertGreene": {
    name: "Robert Greene",
    handle: "RobertGreene",
    bio: "Author of The 48 Laws of Power, Mastery, and The Laws of Human Nature"
  },
  "mjmauboussin": {
    name: "Michael Mauboussin",
    handle: "mjmauboussin",
    bio: "Head of Consilient Research at Counterpoint Global & Author"
  },
  "ShaneAParrish": {
    name: "Shane Parrish",
    handle: "ShaneAParrish",
    bio: "Founder of Farnam Street, Author of Clear Thinking & Host of The Knowledge Project"
  }
};

export const tweets: Tweet[] = [
  // Sanjay Bakshi - Investment Strategy & Analysis
  {
    id: "1",
    author: authors["Sanjay__Bakshi"],
    content: "A few years ago, I was at Buddh Circuit—India's only F1 track—and I saw a beautiful GT2RS. Out of curiosity, I used an app to find out who the owner was. It turned out the car was owned by a listed Indian company. Subsequently, I found that the company owns several such cars.",
    date: "2024-07-04",
    url: "https://x.com/Sanjay__Bakshi/status/1808701624098984326",
    likes: 927,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["corporate-governance", "red-flags", "due-diligence"]
  },
  {
    id: "2", 
    author: authors["Sanjay__Bakshi"],
    content: "Another source of float money is vendor financing of receivables and inventory. This happens in well-run retail operations, but back in 2011, when I was doing working on a presentation on float, I took a look at Amazon and was astonished to find this:",
    date: "2024-07-04",
    url: "https://x.com/Sanjay__Bakshi/status/1808701671826202830", 
    likes: 45,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["float", "amazon", "working-capital"]
  },
  {
    id: "3",
    author: authors["Sanjay__Bakshi"],
    content: "When Tobin's Q (the market value of a firm divided by the replacement cost of its assets) is 4X, it indicates that assets that could be created for $100 million are valued in the stock market at $400 million. In industries with low entry barriers, Tobin's Q is expected to revert",
    date: "2025-03-20",
    url: "https://x.com/Sanjay__Bakshi/status/1902612061873373313",
    likes: 233,
    retweets: 0,
    category: "Investment Strategy & Analysis", 
    tags: ["valuation", "tobins-q", "mean-reversion"]
  },
  {
    id: "4",
    author: authors["Sanjay__Bakshi"],
    content: "Cardio is like getting paid by the hour: you only make money while you're working. Lifting weights is like owning a rental property: it keeps paying you even while you sleep.",
    date: "2025-06-23",
    url: "https://x.com/Sanjay__Bakshi/status/1937074470415401266",
    likes: 469,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["compounding", "passive-income", "analogy"]
  },

  // Alix Pasquet - Investment Strategy
  {
    id: "5",
    author: authors["alixpasquet"],
    content: "High quality assets (and people) will surprise you to the upside, in ways that don't fit into a spreadsheet. Same of the inverse.",
    date: "2025-07-31",
    url: "https://x.com/alixpasquet/status/1950992331466830168",
    likes: 29,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["quality", "qualitative-analysis", "spreadsheets"]
  },
  {
    id: "6",
    author: authors["alixpasquet"],
    content: "Portfolio Management: The Regime Change. About a decade ago I was at the world backgammon championships in Denmark. Was there for learning purposes. I use games as a personal laboratory to test things I learn. For example, applying \"Art of War\" principles to Poker can be",
    date: "2025-01-11", 
    url: "https://x.com/alixpasquet/status/1878155103385116900",
    likes: 160,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["portfolio-management", "game-theory", "learning"]
  },
  {
    id: "7",
    author: authors["alixpasquet"],
    content: "A few thoughts on my mind as I prepare for the coming week. - The goal isn't to beat the S&P. The goal is to beat, exploit, or take advantage of the market participants who think they can beat the S&P. - You gotta love this game to be great at it. - Analysts have 5 skills",
    date: "2025-06-08",
    url: "https://x.com/alixpasquet/status/1931779161024020766",
    likes: 368,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["market-participants", "competition", "skills"]
  },
  {
    id: "8",
    author: authors["alixpasquet"],
    content: "You are not Warren Buffett. It is helpful to remember that when learning from the Big Guy. Many try to replicate his investment style but lack even a modicum of his capabilities. For example, when the market goes down a lot, WeB has operating businesses and access to both equity",
    date: "2025-03-18",
    url: "https://x.com/alixpasquet/status/1902044095163338891",
    likes: 147,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["warren-buffett", "competitive-advantage", "self-awareness"]
  },

  // Morgan Housel - Psychology & Money
  {
    id: "9",
    author: authors["morganhousel"],
    content: "I wrote a new book: The Art of Spending Money. Out October 7th.",
    date: "2025-04-28",
    url: "https://x.com/morganhousel/status/1916850746407952598",
    likes: 8229,
    retweets: 0,
    category: "Writing & Communication",
    tags: ["book", "spending", "announcement"]
  },
  {
    id: "10",
    author: authors["morganhousel"],
    content: "A few questions everyone should ask: Which of my current views would I disagree with if I were born in a different country or generation? What do I desperately want to be true, so much that I think it's true when it's clearly not? Who has the right answers but I ignore",
    date: "2024-12-16",
    url: "https://x.com/morganhousel/status/1868778295707549983",
    likes: 824,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["self-reflection", "bias", "critical-thinking"]
  },
  {
    id: "11",
    author: authors["morganhousel"],
    content: "I think for most people the process of getting rich is more enjoyable than being rich.",
    date: "2025-06-11",
    url: "https://x.com/morganhousel/status/1932847128927514926",
    likes: 3981,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["wealth", "journey", "satisfaction"]
  },
  {
    id: "12",
    author: authors["morganhousel"],
    content: "The majority of investing mistakes come from trying to cram long-term returns into shorter periods of time. Just be more patient. It's not more complicated than that.",
    date: "2025-02-14",
    url: "https://x.com/morganhousel/status/1890463115885654380",
    likes: 2101,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["patience", "long-term", "mistakes"]
  },

  // David Senra (Founders Podcast) - Entrepreneurship
  {
    id: "13",
    author: authors["FoundersPodcast"],
    content: "Podcast with my friend @ChrisWillx on 15 recurring traits of history's greatest founders: 1. Excellence is the capacity to take pain. 2. Problems are just opportunities in work clothes. 3. There are ideas worth billions in a $30",
    date: "2024-12-30",
    url: "https://x.com/FoundersPodcast/status/1873742881535459645",
    likes: 507,
    retweets: 0,
    category: "Entrepreneurship & Business",
    tags: ["founders", "excellence", "opportunities"]
  },
  {
    id: "14",
    author: authors["FoundersPodcast"],
    content: "Steve's most important concern was making things easier for the customer. Less versions to choose from, less prices to consider. Turn it on and it just works. No hassle. If he found a hassle he'd eliminate it.",
    date: "2025-04-16",
    url: "https://x.com/FoundersPodcast/status/1912333535966282189",
    likes: 327,
    retweets: 0,
    category: "Entrepreneurship & Business",
    tags: ["steve-jobs", "customer-experience", "simplicity"]
  },
  {
    id: "15",
    author: authors["FoundersPodcast"],
    content: "My biggest stressor is me. I'm always trying to figure out how I can do better. How I can be better. I might be demanding of the people that work for me, but I'm no less demanding of myself.",
    date: "2025-04-06",
    url: "https://x.com/FoundersPodcast/status/1908889582201905289",
    likes: 189,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["self-improvement", "standards", "leadership"]
  },
  {
    id: "16",
    author: authors["FoundersPodcast"],
    content: "The founder is the guardian of the company's soul. —Sidney Harman",
    date: "2024-07-25",
    url: "https://x.com/FoundersPodcast/status/1816265916864409769",
    likes: 284,
    retweets: 0,
    category: "Entrepreneurship & Business",
    tags: ["founders", "culture", "leadership"]
  },

  // Robert Greene - Personal Development & Human Nature
  {
    id: "17",
    author: authors["RobertGreene"],
    content: "The power of gratitude in life. This clip is from my conversation with @piersmorgan",
    date: "2025-07-31",
    url: "https://x.com/RobertGreene/status/1950949725580190003",
    likes: 440,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["gratitude", "mindset", "life-lessons"]
  },
  {
    id: "18",
    author: authors["RobertGreene"],
    content: "Look deep inside to figure out what makes you unique. This clip is from my conversation with @TomBilyeu",
    date: "2025-05-25",
    url: "https://x.com/RobertGreene/status/1926624462704697404",
    likes: 563,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["uniqueness", "self-knowledge", "authenticity"]
  },
  {
    id: "19",
    author: authors["RobertGreene"],
    content: "Don't be a victim. This is a clip from my conversation with @piersmorgan",
    date: "2025-07-30",
    url: "https://x.com/RobertGreene/status/1950587323365970200",
    likes: 566,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["responsibility", "mindset", "empowerment"]
  },
  {
    id: "20",
    author: authors["RobertGreene"],
    content: "Your attitude is destiny. This is a clip from my conversation with @StevenBartlett",
    date: "2025-03-06",
    url: "https://x.com/RobertGreene/status/1897693932005605622",
    likes: 785,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["attitude", "destiny", "mindset"]
  },
  {
    id: "21",
    author: authors["RobertGreene"],
    content: "Don't be afraid of being different. The clip is from my conversation with @ChrisWillx",
    date: "2025-02-21",
    url: "https://x.com/RobertGreene/status/1892998015302148565",
    likes: 1812,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["authenticity", "courage", "individuality"]
  },

  // Michael Mauboussin - Behavioral Finance & Analysis
  {
    id: "22",
    author: authors["mjmauboussin"],
    content: "Super fun. Every year I do the jellybean jar experiment, where students are to guess independently the # of beans in the jar with a prize for the best response. This year the individual guesses were off by 50%, on average, but the average of the group was within 0.1% (essentially",
    date: "2025-02-01",
    url: "https://x.com/mjmauboussin/status/1885772320276398407",
    likes: 468,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["wisdom-of-crowds", "collective-intelligence", "forecasting"]
  },
  {
    id: "23",
    author: authors["mjmauboussin"],
    content: "Some thoughts on recent results in the stock market. If you are an investor (as opposed to a speculator) remember that you are buying partial stakes in *businesses.* Would you be comfortable owning the business for years to come if there were no stock price?",
    date: "2022-05-07",
    url: "https://x.com/mjmauboussin/status/1522957781610999810",
    likes: 1296,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["investing", "business-ownership", "long-term"]
  },
  {
    id: "24",
    author: authors["mjmauboussin"],
    content: "Your annual reminder that what the stock market does this year tells you essentially nothing about what the stock market will do next year.",
    date: "2021-12-13",
    url: "https://x.com/mjmauboussin/status/1470367837428584449",
    likes: 830,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["forecasting", "randomness", "market-timing"]
  },
  {
    id: "25",
    author: authors["mjmauboussin"],
    content: "I had a buddy who used to say: \"Potential is a great thing to have but a bad thing to keep.\"",
    date: "2025-07-18",
    url: "https://x.com/mjmauboussin/status/1946184467850170463",
    likes: 324,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["potential", "execution", "action"]
  },

  // Additional Sanjay Bakshi tweets
  {
    id: "26",
    author: authors["Sanjay__Bakshi"],
    content: "Zara is a wonderful business model which combines economics and psychology. Preparing a case on it in my upcoming course on behavioral economics @FLAMEUniversity. Wife thinks it's foolish to shop there. Daughters disagree. I just make case studies.",
    date: "2022-07-22",
    url: "https://twitter.com/sanjay__bakshi/status/1550486050002255873",
    likes: 227,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["business-model", "psychology", "consumer-behavior"]
  },
  {
    id: "27",
    author: authors["Sanjay__Bakshi"],
    content: "Looking forward to doing this program at Flame Investment Lab in Feb...",
    date: "2024-12-26",
    url: "https://x.com/Sanjay__Bakshi/status/1872132188592037965",
    likes: 52,
    retweets: 0,
    category: "Writing & Communication",
    tags: ["education", "teaching", "investment-lab"]
  },

  // Additional Alix Pasquet tweets
  {
    id: "28",
    author: authors["alixpasquet"],
    content: "One of the conditions hurting modern investment partnerships is that their cost structures are too bloated. Great investors are often legendary in their frugality.",
    date: "2025-07-19",
    url: "https://x.com/alixpasquet/status/1946542733406974002",
    likes: 165,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["cost-structure", "frugality", "partnerships"]
  },
  {
    id: "29",
    author: authors["alixpasquet"],
    content: "It's interesting that most PMs are good at looking at a stock and applying competitive strategy or value principles to analyze it, but are terrible at doing the same for their own business.",
    date: "2025-02-22",
    url: "https://x.com/alixpasquet/status/1893311181953134617",
    likes: 69,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["self-analysis", "competitive-strategy", "blind-spots"]
  },
  {
    id: "30",
    author: authors["alixpasquet"],
    content: "The height of having a behavioral advantage is using yourself as a contra indicator. That requires self-awareness, acceptance, and a \"humble asf\" ethos.",
    date: "2025-04-13",
    url: "https://x.com/alixpasquet/status/1911466742829977994",
    likes: 26,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["behavioral-advantage", "self-awareness", "contrarian"]
  },

  // Additional Morgan Housel tweets
  {
    id: "31",
    author: authors["morganhousel"],
    content: "Little Ways The World Works. If you find something that is true in more than one field, you've probably uncovered something particularly important. The more fields it shows up in, the more likely it is to be a fundamental driver of how the world works.",
    date: "2025-07-12",
    url: "https://x.com/morganhousel/status/1944068266286363034",
    likes: 565,
    retweets: 0,
    category: "Writing & Communication",
    tags: ["mental-models", "interdisciplinary", "fundamental-principles"]
  },
  {
    id: "32",
    author: authors["morganhousel"],
    content: "Play Your Own Game. Someone asked how my investment views have changed. I said I'm less judgemental about how other people invest than I used to be. At least half the people doing things with money you disagree with are playing a different game than you.",
    date: "2021-05-14",
    url: "https://twitter.com/morganhousel/status/1393195695113261061",
    likes: 893,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["investing-philosophy", "judgment", "perspective"]
  },
  {
    id: "33",
    author: authors["morganhousel"],
    content: "Rich and Anonymous. My theory is that the more money people have, the more social debt they tend to be burdened with.",
    date: "2023-07-20",
    url: "https://x.com/morganhousel/status/1682035554781917187",
    likes: 673,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["wealth", "social-pressure", "anonymity"]
  },

  // Additional David Senra tweets
  {
    id: "34",
    author: authors["FoundersPodcast"],
    content: "We have a lack of founders in big businesses. Founders care about their people, they care about their customers, they care, care, care.",
    date: "2025-03-28",
    url: "https://x.com/FoundersPodcast/status/1905615035181007048",
    likes: 206,
    retweets: 0,
    category: "Entrepreneurship & Business",
    tags: ["founders", "caring", "leadership"]
  },
  {
    id: "35",
    author: authors["FoundersPodcast"],
    content: "One of my favorite quotes from the episode: \"Victory in our industry is spelled survival.\" — Steve Jobs",
    date: "2024-03-19",
    url: "https://x.com/FoundersPodcast/status/1770187970449899566",
    likes: 183,
    retweets: 0,
    category: "Entrepreneurship & Business",
    tags: ["steve-jobs", "survival", "persistence"]
  },
  {
    id: "36",
    author: authors["FoundersPodcast"],
    content: "The mind is a powerful place; what you feed it affects you in a powerful way.",
    date: "2024-01-05",
    url: "https://twitter.com/FoundersPodcast/status/1743062305254858947",
    likes: 68,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["mindset", "mental-diet", "influence"]
  },

  // Additional Robert Greene tweets
  {
    id: "37",
    author: authors["RobertGreene"],
    content: "The power of journaling and writing down your thoughts.",
    date: "2024-05-30",
    url: "https://x.com/RobertGreene/status/1796210253350216051",
    likes: 2007,
    retweets: 0,
    category: "Writing & Communication",
    tags: ["journaling", "reflection", "self-knowledge"]
  },
  {
    id: "38",
    author: authors["RobertGreene"],
    content: "Stay away from toxic people.",
    date: "2025-02-20",
    url: "https://x.com/RobertGreene/status/1892635495156613295",
    likes: 1778,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["toxic-people", "boundaries", "relationships"]
  },
  {
    id: "39",
    author: authors["RobertGreene"],
    content: "Everything in life can be taken away from you and generally will be at some point. Your wealth vanishes, the latest gadgetry suddenly becomes passé, your allies desert you. But if your mind is armed with the art of war, there is no power that can take that away.",
    date: "2025-04-22",
    url: "https://x.com/RobertGreene/status/1914786291075653659",
    likes: 1971,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["mental-strength", "resilience", "preparedness"]
  },
  {
    id: "40",
    author: authors["RobertGreene"],
    content: "The Process of Becoming a Master. This is a clip from my appearance on Finding Mastery with @michaelgervais",
    date: "2025-04-11",
    url: "https://x.com/RobertGreene/status/1910720854880669759",
    likes: 558,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["mastery", "process", "development"]
  },

  // Additional Michael Mauboussin tweets
  {
    id: "41",
    author: authors["mjmauboussin"],
    content: "Stephen Greenspan literally wrote the book on gullibility and yet lost money with Madoff (the scheme was revealed within days of the book's publication). I applaud Greenspan for writing a piece about the lessons: Why We Keep Falling for Financial Scams",
    date: "2018-12-10",
    url: "https://twitter.com/mjmauboussin/status/1072194880632320000",
    likes: 94,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["gullibility", "financial-scams", "self-awareness"]
  },
  {
    id: "42",
    author: authors["mjmauboussin"],
    content: "A very happy (93rd) birthday to Al Rappaport. His book published in 1986, Creating Shareholder Value, changed my life. He is a great scholar, teacher, collaborator, and friend.",
    date: "2025-05-07",
    url: "https://x.com/mjmauboussin/status/1920113141280575567",
    likes: 495,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["mentorship", "shareholder-value", "influence"]
  },
  {
    id: "43",
    author: authors["mjmauboussin"],
    content: "Great piece by @Scott_E_Page. I can't wait for the full book. Why \"Many-Model Thinkers\" Make Better Decisions",
    date: "2018-11-21",
    url: "https://twitter.com/mjmauboussin/status/1065231518203822080",
    likes: 200,
    retweets: 0,
    category: "Risk & Decision Making",
    tags: ["mental-models", "decision-making", "thinking"]
  },

  // Cross-category insights
  {
    id: "44",
    author: authors["alixpasquet"],
    content: "Portfolio Management: The Expectational Spectrum. Where do you invest in the expectational spectrum? Imagine a spectrum where on the left are stocks with very low bombed-out expectations. In the middle are stocks with consensus expectations and then on the right are those with",
    date: "2025-06-06",
    url: "https://x.com/alixpasquet/status/1930998872651759920",
    likes: 131,
    retweets: 0,
    category: "Investment Strategy & Analysis",
    tags: ["expectations", "portfolio-management", "positioning"]
  },
  {
    id: "45",
    author: authors["morganhousel"],
    content: "Beautiful vs. Practical Advice",
    date: "2025-03-18",
    url: "https://x.com/morganhousel/status/1902070746299728295",
    likes: 355,
    retweets: 0,
    category: "Writing & Communication",
    tags: ["advice", "practicality", "communication"]
  },
  {
    id: "46",
    author: authors["RobertGreene"],
    content: "Look at people's actions, not their words.",
    date: "2024-08-23",
    url: "https://x.com/RobertGreene/status/1827013451035898343",
    likes: 319,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["actions", "words", "character-judgment"]
  },
  {
    id: "47",
    author: authors["FoundersPodcast"],
    content: "Founder mentality:",
    date: "2025-03-01",
    url: "https://x.com/FoundersPodcast/status/1895815524606755167",
    likes: 388,
    retweets: 0,
    category: "Entrepreneurship & Business",
    tags: ["founder-mentality", "mindset", "ownership"]
  },

  // Shane Parrish tweets
  {
    id: "49",
    author: authors["ShaneAParrish"],
    content: "One mark of a smart person is the ability to learn from people they don't like.",
    date: "2021-08-19",
    url: "https://x.com/ShaneAParrish/status/1428388474843975691",
    likes: 6005,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["learning", "wisdom", "open-mindedness"]
  },
  {
    id: "50",
    author: authors["ShaneAParrish"],
    content: "progress only comes from changing how you see the world",
    date: "2025-07-30",
    url: "https://x.com/ShaneAParrish/status/1950643972856262721",
    likes: 326,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["perspective", "growth", "mindset"]
  },
  {
    id: "51",
    author: authors["ShaneAParrish"],
    content: "What separates good work from great isn't talent but persistence.",
    date: "2025-05-03",
    url: "https://x.com/ShaneAParrish/status/1918631955475599456",
    likes: 630,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["persistence", "excellence", "work-ethic"]
  },
  {
    id: "52",
    author: authors["ShaneAParrish"],
    content: "Most mistakes come from a lack of patience.",
    date: "2023-09-19",
    url: "https://x.com/ShaneAParrish/status/1704130196297990526",
    likes: 1238,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["patience", "mistakes", "decision-making"]
  },
  {
    id: "53",
    author: authors["ShaneAParrish"],
    content: "Nine sources of advantage: 1. Raw talent/intelligence - Some people are just naturally better and smarter. 2. Hard work - Some people work harder. 3. Different - Seeing the world differently. Doing something different. Reading different books. Interpreting the same information",
    date: "2023-08-24",
    url: "https://x.com/ShaneAParrish/status/1694672537983099249",
    likes: 2605,
    retweets: 0,
    category: "Risk & Decision Making",
    tags: ["competitive-advantage", "strategy", "differentiation"]
  },
  {
    id: "54",
    author: authors["ShaneAParrish"],
    content: "A simple question that changes behavior: Does what I'm about to do move me closer or further away from the most important thing?",
    date: "2022-08-18",
    url: "https://x.com/ShaneAParrish/status/1560268321756684290",
    likes: 1376,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["focus", "priorities", "decision-framework"]
  },
  {
    id: "55",
    author: authors["ShaneAParrish"],
    content: "So much advantage in life comes from being willing to look like an idiot in the short term.",
    date: "2021-02-08",
    url: "https://x.com/ShaneAParrish/status/1358883281157189634",
    likes: 4349,
    retweets: 0,
    category: "Psychology & Behavioral Finance",
    tags: ["courage", "short-term-thinking", "vulnerability"]
  },
  {
    id: "56",
    author: authors["ShaneAParrish"],
    content: "Insight doesn't come from success or failure but rather from reflection.",
    date: "2019-03-18",
    url: "https://twitter.com/ShaneAParrish/status/1107496358720593920",
    likes: 1303,
    retweets: 0,
    category: "Personal Development & Mastery",
    tags: ["reflection", "learning", "insight"]
  },
  {
    id: "57",
    author: authors["ShaneAParrish"],
    content: "You can outperform most people by avoiding unforced errors. Most unforced errors come from a lack of patience. A lack of patience changes the outcome.",
    date: "2023-01-10",
    url: "https://x.com/ShaneAParrish/status/1612832104928186368",
    likes: 879,
    retweets: 0,
    category: "Risk & Decision Making",
    tags: ["patience", "errors", "performance"]
  },
  {
    id: "58",
    author: authors["ShaneAParrish"],
    content: "She was kind but not always nice,\" one colleague observed. Nice people soften rejection with false hope. Kind people say no and let you move on. While competitors drowned in diplomatic doublespeak, Anna Wintour spoke clearly. You might hate the answer, but you never had to",
    date: "2025-06-19",
    url: "https://x.com/ShaneAParrish/status/1935698261278347459",
    likes: 108,
    retweets: 0,
    category: "Writing & Communication",
    tags: ["communication", "clarity", "leadership"]
  }
];

export const categories: Category[] = [
  "Investment Strategy & Analysis",
  "Psychology & Behavioral Finance", 
  "Entrepreneurship & Business",
  "Personal Development & Mastery",
  "Writing & Communication",
  "Risk & Decision Making"
];

export const allTags = Array.from(new Set(tweets.flatMap(tweet => tweet.tags))).sort();

export const categoryDescriptions: Record<Category, string> = {
  "Investment Strategy & Analysis": "Deep insights into valuation, portfolio management, and market analysis from experienced investors and academics.",
  "Psychology & Behavioral Finance": "Understanding how human psychology affects financial decisions, cognitive biases, and market behavior.",
  "Entrepreneurship & Business": "Lessons from successful founders, business strategy, and the principles that drive exceptional companies.",
  "Personal Development & Mastery": "Timeless wisdom on achieving mastery, building character, and developing yourself personally and professionally.",
  "Writing & Communication": "The art of clear thinking and communication, storytelling techniques, and sharing ideas effectively.",
  "Risk & Decision Making": "Frameworks for making better decisions under uncertainty, managing risk, and thinking probabilistically."
};