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
  location: "Jo Ann Gora Student Recreation Center, Muncie, IN",
  practiceDays: "TBD",
  practiceLocation: "Jo Ann Gora Student Recreation Center, Muncie, IN",
  clubDuesInfo: null,
  joinFormLink: null,    // replace with Google Form URL
  instagramHandle: "@bsuhoops",
  // OUR CLUB LOGO — upload your logo to the images/ folder and put its file name here.
  // It shows up in the site header, footer, browser tab icon, and on every schedule card.
  // If the file isn't found, the site falls back to the red "BSU" circle.
  logo: "images/club-logo.png",
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
  {
    number: "24",
    name: "Erie Bryant",
    position: "G",
    year: "Jr.",
    height: "5'10"",
    weight: "lbs",
    hometown: "Indianapolis, IN",
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
    email: null,
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
    name: "Samantha Diaz",
    title: "Social Media/Manager",
    photo: "",
    email: null,
    bio: "Operates Social Media",
  },
  {
    name: "Melanna Filis",
    title: "Manager",
    photo: "",
    email: null,
    bio: "Manager",
  },
  {
    name: "Aleighya Noe",
    title: "Manager",
    photo: "",
    email: null,
    bio: "Manager",
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
    title: "Season kickoff against Illinois State",
    date: "June 14, 2025",
    tag: "Announcement",
    excerpt: "Ball State's Men's Basketball Club open's up their inaugural season against Illinois State!",
    body: "Basketball Season is approaching for both the Varsity and Club Men's Basketball teams! You dont want to miss the action from us! GO CARDS!",
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
    date: "2026-11-06",
    time: "6:00 PM",
    opponent: "Illinois State",
    logo: "images/SECNDRY_head_3C.png",
    homeAway: "Away",
    venue: "Student Fitness Center at Illinois State University",
    address: "Normal, IL",
    event: "Non-Conference",
    result: null,
    note: "",
  },
  {
    date: "2026-11-14",
    time: "2:00 PM",
    opponent: "Indiana University",
    logo: "images/primary_logo_on_black_color.png",
    homeAway: "Away",
    venue: "Bill Garrett Fieldhouse",
    address: "Bloomington, Ind.",
    event: "Conference",
    result: null,
    note: null,
  },
  {
    date: "2026-11-21",
    time: "4:30 PM",
    opponent: "Bellarmine University",
    logo: "images/819c588b-3e53-4903-83f9-ae308f6db3b7.png",
    homeAway: "Away",
    venue: "SuRF Center",
    address: "Louisville, KY",
    event: "Conference",
    result: null,
    note: null,
  },
  {
    date: "2026-12-05",
    time: "12:00 PM",
    opponent: "Bowling Green",
    logo: "images/BGfalcon.png",
    homeAway: "Away",
    venue: "Perry Field House",
    address: "Bowling Green, OH",
    event: "Non-Conference",
    result: null,
    note: "",
  },
  {
    date: "2027-01-21",
    time: "3:00 PM",
    opponent: "Indiana Wesleyan University",
    logo: "images/IWUWildcatsLogo.png",
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
    logo: "images/Indiana-State-Sycamores-logo.png",
    homeAway: "Neutral",
    venue: "Gainbridge Fieldhouse",
    address: "Indianapolis, Ind.",
    event: "Conference",
    result: null,
    note: "",
  },
  {
    date: "2027-01-30",
    time: "3:00 PM",
    opponent: "Purdue",
    logo: "images/Purdue-Boilermakers-Logo%20(1).png",
    homeAway: "Home",
    venue: "Jo Ann Gora Student Recreation Center",
    address: "Muncie, Ind.",
    event: "Conference",
    result: null,
    note: "",
  },
  {
    date: "2027-02-06",
    time: "3:00 PM",
    opponent: "Butler",
    logo: "images/Butler-Bulldogs-Logo.png",
    homeAway: "Home",
    venue: "Jo Ann Gora Student Recreation Center",
    address: "Muncie, Ind.",
    event: "Conference",
    result: null,
    note: "",
  {
    date: "2027-02-20",
    time: "3:00 PM",
    opponent: "Indiana State",
    logo: "images/Indiana-State-Sycamores-logo.png",
    homeAway: "Neutral",
    venue: "Hoosier Gym",
    address: "Knightstown, Ind.",
    event: "Conference",
    result: null,
    note: "Date TBD",
  },
];
