/* ====================================================================
   SITE DATA — EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ====================================================================
   Everything you need to change lives here:
     1. TEAM_INFO    — team name, season, tagline, contact email
     2. SOCIAL       — your social media links
     3. PLAYERS      — full roster with stats & bios
     4. COACHES      — coaching/staff section
     5. NEWS         — news posts (add new ones at the top)
     6. SCHEDULE     — games: dates, locations, opponent logos, results
   ==================================================================== */

/* ------------------------------------------------------------------
   1. TEAM INFO — basic site-wide settings
   ------------------------------------------------------------------ */
const TEAM_INFO = {
  name: "Ball State Club Basketball",
  shortName: "BSU Club Hoops",
  season: "2026–27",
  tagline: "Student-run. Cardinal pride. Built different.",
  contactEmail: "bsuclubhoops@bsu.edu",
  location: "Worthen Arena & RecCenter, Muncie, IN",
  practiceDays: "Tuesdays & Thursdays, 7:00 – 9:00 PM",
  practiceLocation: "Ball State RecCenter Gym A",
  clubDuesInfo: "$100/semester (includes jersey + tournament fees)",
  joinFormLink: "#",    // replace with Google Form URL
  instagramHandle: "@bsuhoops",
  logo: "",   // optional: our team logo, e.g. "images/logos/bsu.png" (blank = cardinal BSU badge)
};

/* ------------------------------------------------------------------
   2. SOCIAL MEDIA — paste your actual profile URLs
   ------------------------------------------------------------------ */
const SOCIAL = {
  instagram: "https://instagram.com/bsuhoops",   // e.g. https://instagram.com/bsuclubhoops
  twitter:   "https://x.com/",           // e.g. https://x.com/bsuclubhoops
  tiktok:    "https://tiktok.com/@",     // e.g. https://tiktok.com/@bsuclubhoops
  youtube:   "",                          // leave empty to hide icon
};

/* ------------------------------------------------------------------
   3. PLAYERS — edit, add, or remove player objects below.
   
   Fields:
     number    — jersey number (shown on card)
     name      — full name
     position  — G (Guard) | F (Forward) | C (Center)
     year      — Fr. | So. | Jr. | Sr. | R-So. | Grad
     height    — e.g. "6' 3\""
     weight    — e.g. "190 lbs"
     hometown  — city, state
     major     — academic major
     photo     — path to photo, e.g. "images/roster/jane-doe.jpg"
                  (leave "" to show jersey number placeholder)
     bio       — short player bio (a few sentences)
     stats     — season stats object (set to {} if no stats yet)
   ------------------------------------------------------------------ */
const PLAYERS = [
  {
    number: "2",
    name: "Chris Nobbe",
    position: "G",
    year: "So.",
    height: "6' 0\"",
    weight: "lbs",
    hometown: "Noblesville, IN",
    major: "N/A",
    photo: "",
    bio: "N/A",
    stats: { PPG: "0", RPG: "0", APG: "0", FG: "0%" },
  },
  {
    number: "4",
    name: "Djimon Wilson",
    position: "G",
    year: "So.",
    height: "5' 7\"",
    weight: "179 lbs",
    hometown: "Indianapolis, IN",
    major: "BioMedical Science",
    photo: "",
    bio: "N/A",
    stats: { PPG: "0", RPG: "0", APG: "0", FG: "0%" },
  },
  {
    number: "7",
    name: "Ben Kasper",
    position: "SG",
    year: "Jr.",
    height: "6' 3\"",
    weight: "lbs",
    hometown: "Mooresville, IN",
    major: "N/A",
    photo: "",
    bio: "N/A",
    stats: { PPG: "0", RPG: "0", APG: "0", FG: "0%" },
  },
  {
    number: "12",
    name: "Evan Darrah",
    position: "G",
    year: "fr.",
    height: "6' 0\"",
    weight: "lbs",
    hometown: "New Palestine, IN",
    major: "N/A",
    photo: "",
    bio: "N/A",
    stats: { PPG: "0", RPG: "0", APG: "0", FG: "0%" },
  },
  {
    number: "34",
    name: "Ben Wellensiek",
    position: "CF",
    year: "So.",
    height: "6' 7\"",
    weight: "lbs",
    hometown: "Chesterton, IN",
    major: "Architecture",
    photo: "",
    bio: "N/A",
    stats: { PPG: "0", RPG: "0", APG: "0", FG: "0%" },
  },
  {
    number: "43",
    name: "Shane Ohale",
    position: "G",
    year: "So.",
    height: "5' 10\"",
    weight: "lbs",
    hometown: "Indianapolis, IN",
    major: "N/A",
    photo: "",
    bio: "N/A",
    stats: { PPG: "0", RPG: "0", APG: "0", FG: "0%" },
  },
];

/* ------------------------------------------------------------------
   4. COACHES / STAFF — add or edit entries below
   ------------------------------------------------------------------ */
const COACHES = [
  {
    name: "Chidera Ohale",
    title: "Head Coach/Operations",
    photo: "",
    email: "chichi.ohale@bsu.edu",
    bio: "Current Men's Volleyball Manager. Former Guerin Catholic Boys Varsity Basketball Manager.",
  },
  {
    name: "Assistant Name",
    title: "Assistant Coach",
    photo: "",
    email: "",
    bio: "Focuses on player development, film study, and recruiting new members to the club.",
  },
  {
    name: "Manager Name",
    title: "Club President / Manager",
    photo: "",
    email: "president@bsu.edu",
    bio: "Handles scheduling, finances, and coordination with Ball State's Recreation Services.",
  },
];

/* ------------------------------------------------------------------
   5. NEWS — add new posts at the TOP of this array.
   
   Fields:
     title     — headline
     date      — display date string, e.g. "June 14, 2025"
     tag       — category label (News | Recap | Announcement | Schedule)
     excerpt   — short preview shown on the card
     body      — full article text (use \n\n for paragraph breaks)
     image     — path to image, e.g. "images/news/post1.jpg"
                  (leave "" for a placeholder)
   ------------------------------------------------------------------ */
const NEWS = [
  {
    title: "Summer Pickup Runs — Every Saturday at RecCenter",
    date: "June 14, 2025",
    tag: "Announcement",
    excerpt: "Open pickup games every Saturday morning through August. All skill levels welcome — come hoop with us.",
    body: "Summer pickup runs are officially underway! We're holding open sessions every Saturday from 9–11 AM in RecCenter Gym A. No sign-up needed — just show up with your BSU ID.\n\nWhether you're a returning club member or just want to play some ball before the fall semester, everyone is welcome. Bring water and good energy.\n\nQuestions? DM us on Instagram at " + TEAM_INFO.instagramHandle + " or email " + TEAM_INFO.contactEmail + ".",
    image: "",
  },
  {
    title: "Spring Tournament Recap: Cardinals Finish 4–2",
    date: "April 28, 2025",
    tag: "Recap",
    excerpt: "We wrapped up the spring NIRSA tournament with a strong 4–2 record. Here's a look back at the highlights.",
    body: "The club finished the spring NIRSA regional tournament at 4–2, making it to the semifinal round for the second year in a row.\n\nStandout performances included a 22-point effort in the quarterfinal win, a dominant defensive showing in the group stage, and a buzzer-beating three in the second game.\n\nWe're proud of the team's effort and are already looking ahead to the fall season. Stay tuned for tryout dates and the new practice schedule.",
    image: "",
  },
  {
    title: "Fall 2025 Tryouts — September 6 & 7",
    date: "August 15, 2025",
    tag: "Announcement",
    excerpt: "Tryouts for the 2025–26 roster are set for the first weekend of September. Here's everything you need to know.",
    body: "We're excited to announce that tryouts for the upcoming season will be held September 6–7 in RecCenter Gym A.\n\nSessions run 5–8 PM both days. Please arrive 20 minutes early to sign waivers. Bring your own ball if possible, but it's not required.\n\nTo secure your spot, fill out the interest form linked in our bio. Roster spots are limited — don't wait.",
    image: "",
  },
  {
    title: "New Practice Schedule for Fall 2025",
    date: "August 1, 2025",
    tag: "Schedule",
    excerpt: "Practices move to Tuesday/Thursday evenings starting September 9. All times and locations inside.",
    body: "Starting September 9, the team will practice Tuesdays and Thursdays from 7:00–9:00 PM in RecCenter Gym A.\n\nAttendance expectations will be shared at the first meeting. If you have a conflict with these times, reach out to the club president before the season begins so we can work something out.\n\nSee you on the court.",
    image: "",
  },
];

/* ------------------------------------------------------------------
   6. SCHEDULE — add, edit, or remove games below.
   The page sorts by date automatically and marks games as
   Upcoming / Final based on today's date.

   *** THE GAMES BELOW ARE SAMPLES — replace them with your real ones. ***

   Fields:
     date       — "YYYY-MM-DD"  (e.g. "2026-11-14")
     time       — display time, e.g. "2:00 PM"  ("TBD" is fine)
     opponent   — opponent team name
     logo       — path to opponent logo, e.g. "images/logos/purdue.png"
                  (leave "" and the page shows a badge with their initials)
     homeAway   — "Home" | "Away" | "Neutral"
     venue      — name of the gym, e.g. "Mackey Arena"
     address    — (optional) street address / city — used for the map link
     event      — (optional) label like "Conference", "Tournament", "Scrimmage"
     result     — (optional) after the game: { us: 58, them: 51 }
     note       — (optional) extra info, e.g. "Bring your BSU ID"
   ------------------------------------------------------------------ */
const SCHEDULE = [
  {
    date: "2026-10-17",
    time: "1:00 PM",
    opponent: "Sample University",
    logo: "",
    homeAway: "Away",
    venue: "Sample Rec Center",
    address: "Sample City, IN",
    event: "Conference",
    result: { us: 58, them: 51 },
    note: "",
  },
  {
    date: "2026-11-14",
    time: "2:00 PM",
    opponent: "Sample State",
    logo: "",
    homeAway: "Home",
    venue: "Ball State RecCenter Gym A",
    address: "Ball State University, Muncie, IN",
    event: "Conference",
    result: null,
    note: "Free entry with BSU ID.",
  },
  {
    date: "2026-11-21",
    time: "4:30 PM",
    opponent: "Example Tech",
    logo: "",
    homeAway: "Away",
    venue: "Example Tech Fieldhouse",
    address: "Example City, OH",
    event: "Conference",
    result: null,
    note: "",
  },
  {
    date: "2026-12-05",
    time: "12:00 PM",
    opponent: "Demo College",
    logo: "",
    homeAway: "Neutral",
    venue: "Demo Sports Complex",
    address: "Demo City, IL",
    event: "Tournament",
    result: null,
    note: "",
  },
  {
    date: "2027-01-21",
    time: "3:00 PM",
    opponent: "Indiana Wesleyan University",
    logo: "https://github.com/Greatful-love/bsuhoops.github.io/blob/main/images/IWUWildcatsLogo.png?raw=true",
    homeAway: "Away",
    venue: "I Am Third Arena",
    address: "Marion, Ind.",
    event: "Non-Conference",
    result: null,
    note: "",
  },
  {
    date: "2027-01-23",
    time: "3:00 PM",
    opponent: "Indiana State",
    logo: "https://github.com/Greatful-love/bsuhoops.github.io/blob/main/images/Indiana-State-Sycamores-logo.png?raw=true",
    homeAway: "Away",
    venue: "Gainbridge Fieldhouse",
    address: "Indianapolis, Ind.",
    event: "Conference",
    result: null,
    note: "",
  },
];
