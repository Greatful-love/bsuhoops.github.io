/* ====================================================================
   SITE DATA — EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ====================================================================
   Everything you need to change lives here:
     1. TEAM_INFO    — team name, season, tagline, contact email
     2. SOCIAL       — your social media links
     3. PLAYERS      — full roster with stats & bios
     4. COACHES      — coaching/staff section
     5. NEWS         — news posts (add new ones at the top)
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
  instagramHandle: "@bsuclubhoops",
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
    number: "0",
    name: "Your Name Here",
    position: "G",
    year: "Jr.",
    height: "6' 2\"",
    weight: "175 lbs",
    hometown: "Indianapolis, IN",
    major: "Sports Administration",
    photo: "",
    bio: "Team captain and floor general. Led the club in assists last season and brings a high basketball IQ to every game.",
    stats: { PPG: "14.2", RPG: "3.1", APG: "6.5", FG: "45.3%" },
  },
  {
    number: "3",
    name: "Player Two",
    position: "F",
    year: "So.",
    height: "6' 6\"",
    weight: "210 lbs",
    hometown: "Carmel, IN",
    major: "Business",
    photo: "",
    bio: "Versatile forward who can score inside and out. Averaged a double-double in the spring tournament.",
    stats: { PPG: "11.8", RPG: "10.2", APG: "1.4", FG: "52.1%" },
  },
  {
    number: "5",
    name: "Player Three",
    position: "G",
    year: "Fr.",
    height: "5' 11\"",
    weight: "165 lbs",
    hometown: "Fort Wayne, IN",
    major: "Kinesiology",
    photo: "",
    bio: "Freshman sharpshooter who brings energy off the bench. Shot 41% from three in high school.",
    stats: { PPG: "8.4", RPG: "2.2", APG: "2.8", FG: "39.8%" },
  },
  {
    number: "11",
    name: "Player Four",
    position: "C",
    year: "Sr.",
    height: "6' 9\"",
    weight: "230 lbs",
    hometown: "Chicago, IL",
    major: "Computer Science",
    photo: "",
    bio: "Anchor of the frontcourt. Four-year member of the club who provides veteran leadership and rim protection.",
    stats: { PPG: "9.1", RPG: "8.7", APG: "0.9", FG: "58.4%" },
  },
  {
    number: "15",
    name: "Player Five",
    position: "F",
    year: "Jr.",
    height: "6' 4\"",
    weight: "195 lbs",
    hometown: "Columbus, OH",
    major: "Marketing",
    photo: "",
    bio: "Two-way forward who guards the opponents' best player every night. Known for hustle plays and big moments.",
    stats: { PPG: "7.5", RPG: "5.3", APG: "2.1", FG: "44.7%" },
  },
  {
    number: "22",
    name: "Player Six",
    position: "G",
    year: "So.",
    height: "6' 1\"",
    weight: "180 lbs",
    hometown: "Muncie, IN",
    major: "Education",
    photo: "",
    bio: "Local product who walked on and earned a starting spot by year two. Clutch performer in close games.",
    stats: { PPG: "10.3", RPG: "2.9", APG: "4.1", FG: "41.2%" },
  },
];

/* ------------------------------------------------------------------
   4. COACHES / STAFF — add or edit entries below
   ------------------------------------------------------------------ */
const COACHES = [
  {
    name: "Coach Name",
    title: "Head Coach",
    photo: "",
    email: "coach@bsu.edu",
    bio: "Former varsity player with 5+ years of coaching experience. Leads all practices and game-day strategy.",
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
