/* =========================================================
   DennisZeroVT site — consolidated app script
   One data load, one render pass per section, one nav system.

   TABLE OF CONTENTS
   -----------------
   1. Site content       (SITE_SONGS, SITE_ALBUMS, SITE_PEOPLE,
                           SITE_CATEGORIES, SITE_POSTS)
   2. Init                (initSiteData — maps raw data → render state)
   3. Home                (stats strip, latest release/post, "In The Works")
   4. Shared style maps    (STATUS_META, STREAMING_META, badge helpers)
   5. Music                (song/album grids — search, sort, genre, view)
   6. Friends & Collaborators
   7. Content blocks       (shared renderer for blog posts + song overlay)
   8. Blog                 (categories, search, sort, year, posts)
   9. Navigation           (tabs, drawer, hash routing / deep links)
   10. Song overlay        (modal + persistent bottom player)
   11. Album overlay
   12. HQ / performance toggle
   ========================================================= */

let SONGS = {};
let ALBUMS = {};
let personData = {};
let allPosts = [];
let categories = [];

/* ===========================================================================
   SITE CONTENT — edit everything below directly. No JSON files, no fetch,
   no build step. Save the file and reload the page — that's it.
   =========================================================================== */

/* ============================================================
   SITE_SONGS — your tracks. Each needs a unique "id" (used in URLs like
   openSong('this-id') and in ALBUMS tracklists below). "genres" is an array
   of strings used for the genre filter chips and search on the Music page.
   "status" (e.g. "Released" / "Work in Progress" / "Pending") powers the
   status filter dropdown on the Music page.
   ============================================================ */
const SITE_SONGS = [
  {
    "id": "song-1787263450989",
    "title": "Dont lose sight",
    "artist": "DennisZeroVT",
    "year": 2026,
    "status": "Announced",
    "genres": [
      "Pop",
      "Rock"
    ],
    "coverEmoji": "",
    "badges": [
      {
        "label": "Announced",
        "color": "#3B82F6"
      }
    ],
    "streaming": {
      "spotify": "",
      "apple": "",
      "tidal": "",
      "youtube": "",
      "amazon": "",
      "deezer": ""
    },
    "blocks": [
      {
        "type": "text",
        "heading": "Why it was made ",
        "content": "I made this song as a sort of showcase how much i improved \n\neven tho i original planned to over throw stuck in time whice ironicly i did top it  but not by a lot but its so much better mix and master wise \n\n"
      },
      {
        "type": "divider"
      },
      {
        "type": "text",
        "heading": "Theme ",
        "content": "The irony is that i wanted for the first time a happy and inspiration song whice worked  really well"
      },
      {
        "type": "divider"
      },
      {
        "type": "image",
        "src": "https://denniszerovt.github.io/images/posts/1787264077248-1000069525.jpg",
        "caption": "The project  (the biggest project file i made yet)"
      }
    ],
    "credits": [
      {
        "role": "Druns",
        "name": "Kula",
        "personId": "kula"
      }
    ],
    "about": "",
    "thoughts": "",
    "miscellaneous": "",
    "behindTheScenes": "",
    "cover": "https://denniszerovt.github.io/SongData/AlbumArt/1787263742565-1000069524.jpg",
    "audio": "https://denniszerovt.github.io/SongData/Songs/1787263769590-Don't-Your-Sight-(final).mp3"
  },
  {
    "id": "adrenaline",
    "title": "Adrenaline",
    "artist": "DennisZeroVT",
    "year": 2026,
    "status": "Released",
    "genres": [
      "Electronic",
      "Orchestral"
    ],
    "coverEmoji": "🎵",
    "badges": [
      {
        "label": "Released",
        "color": "#10B981"
      },
      {
        "label": "Spotify",
        "color": "#1DB954"
      },
      {
        "label": "Apple Music",
        "color": "#FA243C"
      },
      {
        "label": "Tidal",
        "color": "#000000"
      },
      {
        "label": "Amazon",
        "color": "#FF9900"
      },
      {
        "label": "YouTube Music",
        "color": "#FF0000"
      },
      {
        "label": "Deezer",
        "color": "#FEAA2D"
      }
    ],
    "streaming": {
      "spotify": "",
      "apple": "",
      "tidal": "",
      "youtube": "",
      "amazon": "",
      "deezer": ""
    },
    "about": "Adrenaline is the third remake of an old song I wrote 2 years ago with the same name.\nI wanted to make the final version to show that I have improved as a music producer.",
    "thoughts": "The song uses a lot of FM instruments and Genesis SoundFonts for some elements. The trumpet has a harmony now, and there are a lot of key changes.",
    "miscellaneous": "I brought back Kula for the drums. We actually had two drum takes — one was a draft and the last one was the final one. Again, he did a great job. I really love the energy of the descending harmony chorus.",
    "behindTheScenes": "",
    "cover": "https://denniszerovt.github.io/SongData/AlbumArt/1781376777984-andrenaline.png",
    "audio": "https://denniszerovt.github.io/SongData/Songs/1781377044884-adrenaline-final-mix.mp3",
    "blocks": [
      {
        "type": "text",
        "heading": "About",
        "content": "Adrenaline is the third remake of an old song I wrote 2 years ago with the same name.\nI wanted to make the final version to show that I have improved as a music producer.\n"
      },
      {
        "type": "text",
        "heading": "Thoughts",
        "content": "The song uses a lot of FM instruments and Genesis SoundFonts for some elements. The trumpet has a harmony now, and there are a lot of key changes."
      },
      {
        "type": "text",
        "heading": "Behind the Scenes",
        "content": "I brought back Kula for the drums. We actually had two drum takes — one was a draft and the last one was the final one. Again, he did a great job. I really love the energy of the descending harmony chorus."
      },
      {
        "type": "divider"
      },
      {
        "type": "text",
        "heading": "version history",
        "content": "here shows the history of this song"
      },
      {
        "type": "video",
        "src": "",
        "url": "https://www.youtube.com/watch?v=MBxLK-FmkI0",
        "caption": "second remaster"
      },
      {
        "type": "video",
        "src": "",
        "url": "https://www.youtube.com/watch?v=CEEKVptauro",
        "caption": "original"
      }
    ],
    "credits": [
      {
        "role": "Drums",
        "name": "Kula",
        "personId": "kula"
      }
    ]
  },
  {
    "id": "snowfall",
    "title": "Snowfall",
    "artist": "DennisZeroVT",
    "year": "2025",
    "status": "Released",
    "genres": [
      "Ambient",
      "Lo-fi"
    ],
    "audio": "SongData/Songs/snowfall.mp3",
    "cover": "SongData/AlbumArt/snowfall.png",
    "coverEmoji": "🌨️",
    "badges": [
      {
        "label": "Released",
        "color": "#10B981"
      },
      {
        "label": "Spotify",
        "color": "#1DB954"
      },
      {
        "label": "Apple Music",
        "color": "#FA243C"
      },
      {
        "label": "Tidal",
        "color": "#000000"
      },
      {
        "label": "Amazon",
        "color": "#FF9900"
      },
      {
        "label": "YouTube Music",
        "color": "#FF0000"
      },
      {
        "label": "Deezer",
        "color": "#FEAA2D"
      }
    ],
    "streaming": {
      "spotify": "https://open.spotify.com/track/0TxrNlfNSlwuncbt0wpVH6?utm_source=generator",
      "apple": "https://music.apple.com/be/album/snowfall-single/1840250772?l=nl",
      "tidal": "https://tidal.com/album/460721208/track/460721209",
      "youtube": "https://music.youtube.com/watch?v=9dDbeq0VEbc&si=c9Cb4I4bC4nwWi7e",
      "amazon": "https://music.amazon.com/albums/B0FNKT4Z2X",
      "deezer": "https://link.deezer.com/s/337CFXi1lRmRShDNd2jGO"
    },
    "about": "Snowfall was written for my friend Erik, also known as eri_k416. It's built around his character Viona — a quiet, wintry figure that inspired the whole mood of the track.",
    "thoughts": "This was the first time I ever wrote lyrics for a song. I didn't plan it that way — I just wanted to make something for Erik and the words came naturally. I remember sitting with the melody for a long time before anything clicked. When it finally did, it felt like the song wrote itself.",
    "miscellaneous": "The track is the first song I ever released. It was released on Spotify in 2025",
    "behindTheScenes": "I was using Studio One at the time. The arrangement started with just a piano line and some light percussion. The winter atmosphere came from layered pads and a lot of reverb on everything. I wanted it to feel like you were standing outside in the cold, watching snow fall slowly — calm but a little melancholic.",
    "credits": [
      {
        "role": "Inspiration",
        "name": "Erik",
        "personId": "erik"
      }
    ]
  },
  {
    "id": "stuck_in_time",
    "title": "Stuck In Time",
    "artist": "DennisZeroVT",
    "year": "2026",
    "status": "Released",
    "genres": [
      "Rock",
      "Alternative"
    ],
    "audio": "SongData/Songs/stuckintime.mp3",
    "cover": "SongData/AlbumArt/stuckintime.png",
    "coverEmoji": "🕒",
    "badges": [
      {
        "label": "Released",
        "color": "#10B981"
      },
      {
        "label": "Spotify",
        "color": "#1DB954"
      },
      {
        "label": "Apple Music",
        "color": "#FA243C"
      },
      {
        "label": "Tidal",
        "color": "#000000"
      },
      {
        "label": "Amazon",
        "color": "#FF9900"
      },
      {
        "label": "YouTube Music",
        "color": "#FF0000"
      },
      {
        "label": "Deezer",
        "color": "#FEAA2D"
      }
    ],
    "streaming": {
      "spotify": "https://open.spotify.com/track/1UNqmaIFQVQia3Ogxtpu4x?si=994999e942f14ba4",
      "apple": "https://music.apple.com/be/album/stuck-in-time-single/1893337152?l=nl",
      "tidal": "http://tidal.com/album/514925638/track/514925640",
      "youtube": "https://music.youtube.com/watch?v=pMVXcz9Ztpc&si=tf1PjhIUzJvQK1KT",
      "amazon": "https://music.amazon.com/tracks/B0GWS3FN2G?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_tyzyaI4xxzICjl1682gmmG0om",
      "deezer": "https://link.deezer.com/s/337CHhi5HVwqcozgsSI4d"
    },
    "about": "Stuck In Time is about the feeling of being trapped in a cycle — staying the same while everything else moves on. It's a reflection on change, growth, and the fear of being left behind.",
    "thoughts": "This song was inspired by a lot of personal experiences and conversations with friends. I wanted to capture that bittersweet feeling of nostalgia mixed with the anxiety of change. The lyrics came from a place of vulnerability, and I hope they resonate with anyone who's ever felt stuck in a moment they can't escape.",
    "miscellaneous": "the harmonies in the song is sang by me its actualy one of the first time i used my own voice in my song.",
    "behindTheScenes": "i went back in cubase for this one. The drums were recorded live by my friend Kula i met during an idol group project, which added a lot of energy to the track. I built the produced the song to finish and i send the mockup drums to kula and told him you can put your own spin to the drums and he killed it, like i put a half time section in it before the key change and he went insane on the half time section and his drums conbined with my guitars and the song just came alive, it was a really fun process and i hope to work with him again in the future.",
    "credits": [
      {
        "role": "Drums",
        "name": "Kula",
        "personId": "kula"
      }
    ]
  }
];

/* ============================================================
   SITE_ALBUMS — collections/EPs. "tracklist[].key" must match a SITE_SONGS
   id to make a track clickable straight into the song overlay.
   ============================================================ */
const SITE_ALBUMS = [
  {
    id: "album-1780532205221",
    name: "Solo EP 💿",
    artist: "DennisZeroVT",
    year: 2026,
    cover: "",
    status: "In Progress",
    description: "So|o ep",
    tracklist: [
      { name: "Snowfall", duration: "", status: "planned", key: "snowfall" },
      { name: "Stuck in tims", duration: "", status: "planned", key: "stuck_in_time" }
    ]
  }
];

/* ============================================================
   SITE_PEOPLE — friends & collaborators. "tags" controls where they show up:
   include "friend" to appear on the Friends page, "collab" for Collaborators
   (a person can have both). "credits[].songId" must match a SITE_SONGS id to
   make it clickable into that song.
   ============================================================ */
const SITE_PEOPLE = [
  {
    id: "erik",
    name: "Erik",
    handle: "eri_k416",
    role: "Friend // eri_k416",
    avatar: "Friends/erik.jpg",
    bio: "Erik was the subject and inspiration for my debut release, Snowfall. His character Viona shaped the entire mood of the track — the wintry atmosphere, the lyrics, the melancholy. He was the reason I wrote vocals for the very first time.",
    tags: ["friend", "collab"],
    links: {
      twitter: "https://x.com/eri_k416?s=20",
      spotify: "https://open.spotify.com/track/0TxrNlfNSlwuncbt0wpVH6"
    },
    credits: [
      { song: "Snowfall", songId: "snowfall", role: "Inspiration", note: "His character Viona shaped the entire mood of the track" }
    ],
    color: "from-blue-500/30 to-blue-600/10",
    icon: "fas fa-snowflake"
  },
  {
    id: "kula",
    name: "Kula",
    handle: "@mee_yawwwwww",
    role: "Friend, Drummer // @mee_yawwwwww",
    avatar: "Friends/kula.jpg",
    bio: "Kula is a musician and drummer I met during an idol group project. Even though the project eventually fell apart, we connected through music and he turned out to be a really chill guy. He mentioned wanting to be part of something, so I invited him to play drums on my single Stuck In Time. We worked well together, and I will likely ask him to handle the drums again in future projects.",
    tags: ["friend", "collab"],
    links: {
      twitter: "https://x.com/mee_yawwwwww?s=20",
      spotify: "",
      instagram: "",
      website: ""
    },
    credits: [
      { song: "Stuck In Time", songId: "stuck_in_time", role: "Drums", note: "" },
      { song: "Adrenaline", songId: "adrenaline", role: "Drums", note: "" }
    ],
    color: "from-[#A596DA]/30 to-[#8B78CB]/10",
    icon: "fas fa-drum"
  },
  {
    id: "vivid",
    name: "Vivid",
    handle: "@vivid_exile",
    role: "best Friend, // @vivid_exile",
    avatar: "Friends/vivid.jpg",
    bio: "An ex-military veteran I met in my very first Discord server. Despite a troubled past he showed incredible strength and kindness. we became friends and helped each other through a lot. as he became my first friend when i came out of my shell, He was the person who got me back into streaming and introduced me to a whole new circle of people — including Erik",
    tags: ["friend"],
    links: { twitter: "https://x.com/vivid_exile?s=20" },
    credits: [],
    color: "from-pink-500/30 to-pink-600/10",
    icon: "fas fa-guitar"
  },
  {
    id: "skylar",
    name: "Skylar",
    handle: "@skylar_corgi",
    role: "Friend, // @skylar_corgi",
    avatar: "Friends/skylar.jpg",
    bio: "Skylar is a best friend i met trough vivid on vivid first stream she and vivid are great support",
    tags: ["friend"],
    links: { twitter: "https://x.com/skylar_corgi?s=20" },
    credits: [],
    color: "from-purple-500/30 to-purple-600/10",
    icon: "fas fa-guitar"
  },
  {
    id: "nox",
    name: "Nox",
    handle: "@Nox_Daemon",
    role: "Friend, // @Nox_Daemon",
    avatar: "Friends/nox.jpg",
    bio: "Nox is a friend i met trough vivid again lol, i saw vivid inetracting with nox a lot and weeks later she became on of my friends aswell,",
    tags: ["friend"],
    links: { twitter: "https://x.com/Nox_Daemon?s=20" },
    credits: [],
    color: "from-blue-500/30 to-blue-600/10",
    icon: "fas fa-guitar"
  }
];

/* ============================================================
   SITE_CATEGORIES — blog category filter pills + their color +
   subcategories. "name" here must match "category" on posts in SITE_POSTS
   below.
   ============================================================ */
const SITE_CATEGORIES = [
  { id: "gaming", name: "Gaming", color: "#A596DA", subs: ["Osu", "speedrunning"] },
  { id: "game-dev", name: "Game Dev", color: "#A596DA", subs: ["Ohter projects"] },
  { id: "music-production", name: "Music Production", color: "#ec4899", subs: ["Snowfall", "Originals", "Remixes", "Soundtracks", "Behind the Beat"] }
];

/* ============================================================
   SITE_POSTS — blog posts. "blocks" render top-to-bottom: {type:'text'},
   {type:'image', src}, {type:'video', url} (YouTube links auto-embed),
   {type:'divider'}.
   ============================================================ */
const SITE_POSTS = [
  {
    id: "post-1781469379216",
    title: "my second 200pp play",
    category: "Gaming",
    subcategory: "Osu",
    date: "2026-06-14",
    color: "#a596da",
   