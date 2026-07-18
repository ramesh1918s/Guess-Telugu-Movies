/* =========================================================================
   movies.js
   All game data for the Telugu Movie Guess Game lives here.
   No database, no API — just a plain array the rest of the game reads from.

   Each movie object:
     id            short slug, also used for generated poster art & filenames
     name          the canonical answer shown on reveal
     aliases       alternate spellings the answer-checker will also accept
     emojis        3 emoji clues
     images        3 image filenames the game will TRY to load from
                    assets/images/. If a file isn't present (none are
                    shipped in this project — see assets/images/README.txt)
                    the game falls back to a generated poster automatically,
                    so nothing ever looks broken.
     posterColors  [colorA, colorB] gradient used for the generated poster art
     posterGlyph   big emoji used on the generated poster art
     hero          lead actor
     director      director
     year          release year
     storyHints    2 short plot hints, revealed one at a time
     difficulty    "Easy" | "Medium" | "Hard" — shown on the movie card
   ========================================================================= */

const MOVIES = [
  {
    id: "rrr",
    name: "RRR",
    aliases: ["roudram ranam rudhiram"],
    emojis: ["🔥", "🤝", "🦁"],
    images: ["https://th.bing.com/th/id/OIP.tD_S8dgNvqogUn33Z6sjCwHaEs?w=290&h=184&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://carroar.com/wp-content/uploads/2020/04/bmw-motorcycle-brand-768x512.jpg", "https://www.bing.com/th/id/OIP.RNHq2v-N9TC0kCueGoo4SQHaF7?w=193&h=154&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=ImgAns&rm=2"],
    posterColors: ["#c81e3a", "#7a1029"],
    posterGlyph: "🔥",
    hero: "N.T. Rama Rao Jr. & Ram Charan",
    director: "S. S. Rajamouli",
    year: 2022,
    storyHints: [
      "Two real revolutionaries become fictional best friends fighting the British Raj.",
      "One chases a tiger bare-handed, the other unleashes a cage full of animals on a mansion."
    ],
    difficulty: "Easy"
  },
  {
    id: "baahubali",
    name: "Baahubali",
    aliases: ["bahubali", "baahubali the beginning", "bahubali the beginning"],
    emojis: ["👑", "⚔️", "🏔️"],
    images: ["https://static.vecteezy.com/system/resources/thumbnails/046/245/815/small_2x/aerial-view-of-large-city-among-trees-and-mountains-photo.jpeg", "https://th.bing.com/th/id/OIP.apbDwgXDy5PamzCxebewrAHaE8?w=260&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://www.bing.com/th/id/OIP.x0Mhj2a1Jc4rQUfqYiuKdAHaLH?w=193&h=290&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=ImgAns&rm=2"],
    posterColors: ["#e8b004", "#8a5a02"],
    posterGlyph: "👑",
    hero: "Prabhas",
    director: "S. S. Rajamouli",
    year: 2015,
    storyHints: [
      "A young man raised by villagers climbs a waterfall and falls for a warrior woman.",
      "The whole kingdom keeps asking one question about why a king was killed."
    ],
    difficulty: "Easy"
  },
  {
    id: "pushpa",
    name: "Pushpa",
    aliases: ["pushpa the rise", "pushparaj"],
    emojis: ["👮", "🌲", "🚛"],
    images: ["https://www.bing.com/th/id/OIP.rRPWDLn9G4oy5JB0_w2MdAHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=ImgAns&rm=2", "https://www.indiaherald.com/Assets/ArticleUpload/20238814746445_WhatsApp-Image-2023-08-08-at-1-36-54-PM.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8j_byn92AVL_8ssHTnknok2kSj9sjSdpwMwZKhlZPQ&s=10"],
    posterColors: ["#16a3a0", "#0b4f4d"],
    posterGlyph: "🪓",
    hero: "Allu Arjun",
    director: "Sukumar",
    year: 2021,
    storyHints: [
      "A lorry worker rises through the ranks of a red sandalwood smuggling syndicate.",
      "He refuses to bow his head to anyone — literally, it becomes his signature."
    ],
    difficulty: "Easy"
  },
  {
    id: "eega",
    name: "Eega",
    aliases: ["makkhi", "naan ee"],
    emojis: ["%", "💛", "😠"],
    images: ["https://tse1.mm.bing.net/th/id/OIP.5JhL-E-3nKHJqrRzjI5ezgHaEo?r=0&pid=ImgDet&w=195&h=122&c=7&dpr=1.4&o=7&rm=3", "https://www.bing.com/th/id/OIP.LzDq9gmebelAg_70ijB2fQHaEK?w=180&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2", "https://www.bing.com/th/id/OIP.GGmYPk_r20iyxcBugwTBMQHaLH?w=132&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=ImgMag&rm=2"],
    posterColors: ["#d9a300", "#3a3a00"],
    posterGlyph: "🪰",
    hero: "Nani",
    director: "S. S. Rajamouli",
    year: 2012,
    storyHints: [
      "A murdered man is reborn as a tiny insect and plots revenge on his killer.",
      "The villain is terrified of a housefly for the entire second half."
    ],
    difficulty: "Medium"
  },
  {
    id: "pokiri",
    name: "Pokiri",
    aliases: ["pokiri raja"],
    emojis: ["👮", "🎭", "🔥"],
    images: ["https://th.bing.com/th/id/OIP.GNv9J5kcNLBKn0YHgTJnUAHaEM?w=301&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://th.bing.com/th/id/OIP.r8-SGfoU99EbxBAciRR5sgHaDJ?w=298&h=149&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://www.bing.com/th/id/OIP.Dh25c43QQLpYDpl1sFq_uAHaE8?w=180&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"],
    posterColors: ["#3b3b3b", "#0d0d0d"],
    posterGlyph: "🕶️",
    hero: "Mahesh Babu",
    director: "Puri Jagannadh",
    year: 2006,
    storyHints: [
      "A small-time rowdy is secretly working undercover for the police.",
      "His double life unravels the closer he gets to the woman he loves."
    ],
    difficulty: "Medium"
  },
  {
    id: "vikramarkudu",
    name: "Vikramarkudu",
    aliases: ["vikramaarkudu", "simha", "rowdy rathore"],
    emojis: ["👮", "🎭", "🔥"],
    images: ["https://www.bing.com/th/id/OIP.tNm4N-l90p0sKmGasVy3iAHaLH?w=193&h=290&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=ImgAns&rm=2", "data:image/jpeg;base64,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", "https://www.bing.com/th/id/OIP.WqDY3zj3i47O4QxYxk8QagAAAA?w=180&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"],
    posterColors: ["#a32020", "#2b0a0a"],
    posterGlyph: "🎭",
    hero: "Ravi Teja",
    director: "S. S. Rajamouli",
    year: 2006,
    storyHints: [
      "An honest cop is mistaken for a ruthless gangster who looks exactly like him.",
      "He accidentally has to keep up the gangster's act to survive."
    ],
    difficulty: "Medium"
  },
  {
    id: "rangasthalam",
    name: "Rangasthalam",
    aliases: ["ranga sthalam"],
    emojis: ["🚜", "🗳️", "🔥"],
    images: ["https://www.bing.com/th/id/OIP.H7c9BLZRuoP87UC_aMb7dwHaEe?w=180&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2", "https://th.bing.com/th/id/OIP.SoZSyg6SNn-eI_lTWWsBDwHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://tse1.mm.bing.net/th/id/OIP.hW_pGyoEpPUsCH1A5KluYgHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"],
    posterColors: ["#7a5a1e", "#2b1e08"],
    posterGlyph: "🚜",
    hero: "Ram Charan",
    director: "Sukumar",
    year: 2018,
    storyHints: [
      "A hard-of-hearing farmer stands up against a corrupt village president.",
      "Village elections turn violent as old secrets about his brother surface."
    ],
    difficulty: "Hard"
  },
  {
    id: "arya",
    name: "Arya",
    aliases: ["arya 1"],
    emojis: ["💌", "🎓", "😎"],
    images: ["https://wallpapers.com/images/hd/allu-arjun-hd-white-shirt-7t2efdn8btx0n0hs.jpg", "https://th.bing.com/th?q=2+Boys+Fighting+Cartoon&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.4&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247", "https://www.reviewadda.com/assets/article-img/st-stephens-college.jpg"],
    posterColors: ["#2b7a3e", "#0a2b12"],
    posterGlyph: "😎",
    hero: "Allu Arjun",
    director: "Sukumar",
    year: 2004,
    storyHints: [
      "A carefree college guy falls for a girl who's already promised to someone else.",
      "He never confesses his feelings, choosing to support her love story instead."
    ],
    difficulty: "Hard"
  },
  {
    id: "khushi",
    name: "Khushi",
    aliases: ["kushi"],
    emojis: ["❤️", "🚌", "😄"],
    images: ["https://th.bing.com/th/id/OIP.6gJQwu1JiaFB6flr2r6aZAHaLH?w=115&h=181&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://th.bing.com/th?q=Kushi+Movie+Kids+Hands&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.4&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247", "https://th.bing.com/th?q=S+J+Surya+New+Stills&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.4&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"],
    posterColors: ["#c23b6a", "#3a0a1e"],
    posterGlyph: "😄",
    hero: "Pawan Kalyan",
    director: "S. J. Surya",
    year: 2001,
    storyHints: [
      "Two strangers keep clashing on a hostel bus before falling for each other.",
      "A misunderstanding forces the couple into a fake, on-paper marriage."
    ],
    difficulty: "Hard"
  },
  {
    id: "adhurs",
    name: "Adhurs",
    aliases: ["adurs", "adhursu"],
    emojis: ["👬", "🤠", "😂"],
    images: ["https://th.bing.com/th/id/OIP.eaYJLCYkpp17tGTo4bWaxQHaL2?w=115&h=183&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "data:image/webp;base64,UklGRtASAABXRUJQVlA4IMQSAABQhACdASodAfsAPp1EnEklqrUkLFarEqATiWNt6zBpXkB6Wcd2ayABFXS/wc/M5346cCUhbcf+bfzU7KFULOR+PM1YJIQzHiHQGOSLzY+iWTY5e4v27X+cGFRz2LE/ndnTB1pOgwpvLlYk/UZZDRvaXogja9qv/WZ/VqhMVZb3VjcELq0D8hGdt5hL85m21nJy9lLMXrtu4j2HYNsnmSyh/DBUKP+/MDVTh6L8jet6lvRU8qbfL0Ds4B2PXTrwOy5pogniq2Q2VoofzdxQe1SkZGrbnH8UqBTvsdxL16dqcIC1EbX+IMlz4Q4JFDY/OeK3cGowXsFU+zmizanfKuJXURscC+yzovFSLCAjhkSdIHOOLToYLkF53k0Z2Z8Z4rDo9TQG6jnNAWZAjbVz3XUPP0geHRfRHj3rfJnp8WTJcvvfYSflHl6wMfKmvAtwV4oB4K7sfrb0W6Axi80rRG8JSLX8cCP+Bjr/ydUVBsh77Dmq+q8loo0GXNK3dxU/U99PgyHfUJJ6OGdZjDr5+uAnuyoZl9wCkQz8JEbbicumax8sXppaSGULr31OQVI0nmxATJdBzKGUghI2naZiWWbBcbFtMu5WiCleMIndaNJxt08ahiOpwXUFVykNO4rFXWdVJeDq1thIKCR39CodqqXWE3+C+uEDNBMAYYRnVw9qd2FwE+o/NMlzUmZsr464rIeHKHtfgq3u+4fxPnx8veI8pAsETkaXu2uX9EroROdi/hOvSMjVEp93lCVKM+mjSZx2C9SNry1UTezlBRo1s4DvK6XZELfkr+0xrHDMPNuwXcu6mQjSqrc27GtdVh15MvVhE5xxe52WqzNeR8QsSiGMX9X9YgZs6UF8M0s6VyByv2WKDp7Umh+wrGQPk0FujEtQMveOgXC8LgJa8d5o2owu1WsYn/4/2f+nzktrPD9GNOF+s8isgCLmKD44/S1AQlCveePL2OPd1qHWyOLlmQdN7LHTI6KQS79BjWlZCRTR/boyrr7YiH5nBet0SwpCBdDPh9GQEzYEr6lnyCltef+IuVt+7yBYjhAokqkqNh2pryb/8Le7Jjp5McceNN4ghKkXKAM4bLaoE+QvXB2f4UHweRukUMuBt+cDuC8Bgt2OExjtUH6a+VU+IFYU8XKr2QdRquiIWoVlAZJgaGqZdg5G1hn7/SEmxEMHIZ7fDUJabz6d07+TZM2MkVWRyUn7iYc7CuRkwPwWhgSfTWZH4CBu8cbp8G8U5b89IlqyLeUi4cpDp00zG3vdEtvLMTWP38frSo4Rpd6lTeGJ1IXvyvenrXN4zxMixvmFufw0D0fcyLNskZs3zQR/XZzLRmEqJuweaM989p1DJfv5W+s6l9F6bE68BPKz7mA86hvY2EaTpMe8wDjJuISpLvlhWw4yigQ5+JBwC67UlNjBgAD+9fTPDlYqA3412LQSRtrfAp62RDk7pBR3VWWxD1MY2p0DCTWHjEBWtCr4bOH1jbjo4fK8AgSrQgrJDCLwjP7JH6Kcpa6s70VnAvviYyFKW024psv9qB4Rcrz+ey2asgTMhLpiT5KrmcFBbV/tSIDH0vtTkl+TJ/J8r/MOlltg24yiwbxZYoApOJO6WyU0i01HD4nZc4OWPAP6XdUPZPbIc+NkF76lI2VEvrthruOeJ68W9i6NAFJ3DeIsuSoFt1sXq/6JpcjZQuShID+QVjKEsmHFB7xJfZmVxKFFtzO8VCf7Sk8vJaKeuNIBBNQXO/g1nkt7pd1G70pgdBHlk0irhtHihB0dyfCxtvMG//T8sL5H3v0e7QUsFlLoEQtMd8ux72VgPYMnYgVB9Gw0BL6P1N7JHNIYIlHiJ3xFeQi73hq5TY9Du0aoGe+2fzxEr4oNspHe62ddp7M/Xr6y3Z4stIgtlkuGPgTeH+YZu5TbN3OaRLZ13Wf5BDAOPK/YO0IvzGnsQhNE0laVwoDTkjxvL8thmPqJsm9OB/WyF7wCM8Dm4z7yV0HZuQ4nxcOKgFhoFVeYxd2lgytKIIu+BF9atNPKAYOvpqQf8LmkyVyy09BfjVhfz7T3Um4pTUMIz6EqxsrW9cuKqwK8y0pwsf3OjEhbDnlGBsTNbXPlWthhjbhuC+44oHeLPb27J8jW7ljwk2Yy1ni9wKuWs6STP8QeqJE82Kkdg3PdRviGpW2FzCmHztpeNtcXzQ9eLQxB03eLFZoBpVmRClPcKrHLlrZ+tdPtBH22k55P/bm2G2SpGfGpwZE1qhl/qRcxv8w1T+O/Ly3AyXuJ7P+bFTorMgSCSXKQRwKXCosaZHajHFnAvuE/lw/A6hioV+1KXr0tSJJUjuAZQc9rex6b9Xy+rSusJ4CDV49QHgs9T0saX+xM/04zKfnOKt6JwC0GI4ZFe0uuCxv+Q2g2Lz6gjqftaUssW68kB/R9qotv+sHMbP6SklPBL4qQe8g+HON71VyilDLv+WKpeA2MyBHhMXMB0vYTNmlDvyZ/lderNOQIwXjzm1Bqi2xcSbmdUYtWGbbCB2UvIGMTPQI/HThFpA26uZ2QA3XLLW0Z6Jr+aZ0gMH1hU7a/mUliAyB03NtQkHxxDkOCLdp+BdPg9COZqLvUJsjltJGuTL6FxTTqZoRL2D7iz3z1UG+XSFPwRaac3yju+Xm2mfmPICCOmsXI4XvQQm8asdsv7XBCcgMgt2mP23d7vB9SVKDFbnnBJKUOBqd+7vKak4+ZmKLJQaPoEmaVP3fTEhNvpJcJKbXO2ZwdJfGl6IK+8t0QPHrkZyt/MQ1KTW8ERBt0vBGnnA8IAzgeCYEu5BT1MhGZJuQhiAoiHnXLa/E6aldjJWlsvAt/B/pqcEh3/aWYE63HZ/2yL6jEjCYbJB5yAxCu8WTfShfwjQZvObUhWsQl7dy10LkDTeIUM8Y5wauhD8iBuNCR786DFelJnSxtJbGa05DRKVJvqOMyKaa0o1mHRZmg/d5JeLsl+jGAQefTOmsfqGaXBmAv+qUb+1XF5Fum/5RiTmevNp3+VWPiGmdeQLYkNQt893M94LySS3VWRrNGmb9xyuPbgPlw/FCTBQGzodJM4PQPyyGxUaEsQ0qQROdAhiY5qVkTXGMwICSNXK7aCtdxv6um3U/7/TXewN2Z45cJ0ZuTldzKj1wUyh18/GfF3bvPSaB4OFOiJNpIZM1TPqB+fm0S67T8uQ4t8R7L8cOLta103jAwnnDD61VWfuajANBC1Uw5uIgt6Cl+t3DwQXeWrE38c03XYiuuiOMwOqLyZqs3+gM9rbedogeUnzDW2DkqbZ/wp8S6wC9aOvo6sVwp9NJb7jsVrlxgXzpouSLy7+LerroXsREANu03euabbs/aW6ZXwftpnGFNB30/ddaotOwhQM+gZ0Xlhj6VkKluxhu40jRG+Kl5EFiqJz9metwZOr8LIsZdOCMdGnl30hcx082CDHHKv/zyJ3G8s658qvQ8kwb9XyEhOWcy6x09aqRGwqP4h/4t0PqgQVm+jpWE101cYi4PI+/cZeiOL7XiXAn5VbNdw2rlyb18ZW44CWlW8WY9sT5hlyiBwRmUB/f2jsDapq2I21J7/F5pFlaiEqE3BV/svgwgyq8fOu4nlrkYUkIq9GJJvnsYwZJBQTCZVQMO8eRnYlG6LpvccFxsDV5e9lNOKS1cBoE6BtXguqwbQmQYQAnvsOpF4aVsgG67dag/2FzEPi77JXbsjyaCIJ34ttV9T9rIFKBzAnSTWHetM45SKx9M50srkL7r1SCbTBVPE2SBdD2Jpimayfd5wU9UtXlNwAZHvw/eIL6Hb2U/5yRc00dYjgww06QReLw++JcAVy9mcJbsGVVVHM1bSAv8KJRPxD/ql9wah9hFSIVt/S1p6TJikhqUvSS/VVCQmNSzSGEiJ7s7RAxCpu01QYWRLI2b0wGnHkLxVTcrvRyrG5M7FRaYeg/Frbn8wd1LxNjD7NCrGDvGibScX/Uy5KtbkF1Ho/kLHjslAncPYYhn28HHSMZriXt6UUPazSmrZhajQcbnpk5Borpkcp6jHdHx/8BIlu3JVZFnVhV+ZT6Nu1yYisnBBFAnT7rVznGfb2ymT01h4/+MdrVMSSaBYIL7QEG6lpiUtKeYOamLK4li+hIkitV49X9ksEIeaytXEM3PabhldH2NbXEZtE2w/1i3p4kxlZ9p0gF5PI69MZKbrwxT2p5o+5bvgs1cFkFtmpAX+ZL/OJUkJjN0y0NIqxrYyC5QxgMTcEtAVr7JxmWMd/AO/5mZZyNTPN8tGNDXWIxVr91YoGJz1V4K7rhzX794kf/Q8Mk9xhP/TgmA8gpVACZuzlau7tZff/kpCiFFwHxp5/e4zCyx2rtSYFbLBiNk4aYMb2QIRol/+29tXl8mZUpreeWOXX1I55yevACNffR9hyGDwuJmoOhGBWM1YpRsyBrX1xDv6w3M7kgXQtSo1tohsLycH7PUgeCPDtH45JEdrE23oXB9JztNKUCIx7ft7PWkUqwtYsXEESLAvBPTDTP0UkdFFwdAkdbr0MF8p3n8yNqE7S1ACeqYc1FNYZ1od2XEvzkvVeP6koxA1mhPxBDWIlR6aKBT2tL31anEK/zFPevvq6H7TPxaiexXEkLpMnAhhE1hfOjanlckuEOslniKv6fIPJRGlRtJQ3Tbg8tommng74h0lShnkZR38LLf+RBUC6dXKcsuxcLJXzcedBTvqtZ0dEmS/dZHvjt/46cKTDazLmh952aAwxo8Zlvp6morH8S7qO2gn7ZlFhHWDEmFQzRtd1b3+/KyyixB5R1vkFDodIVT78FBsmPg9PZOI/FN4Jk/rU111Mi3jM/C/ao2gU7qUMfsXPuoEQAnnF0eRVdaKLIcHFJmcCWectCWUsAMbUj1L1i+VdzV+mIeHaaUe6LRs3cpSKF5/m/mMZBiaCfGPtSxZMcVAkIHqOBxgTF2YLLUHcIzWK3SJDVGzx/+8DIV3RLNKdszoxffM3vg74um9GDLHf3wJyKTQqnZFiWoLKtqmQ5JP8f28AEB+MmLD35xJ7Rl2Bq9cOzKqz79Zw9op7nUau5BFPGax9P7k7in+mBcj8cw22Txv94UJO84ZcaoVdlD8WTk3QJOJ/uKNHem1CUfEMsHpY0P1fPCfnPFIJojka0m88rjZoLU43wzWcZWTOeely6YFgwwgwK1BQPwD4o2IqBXIZ2r1FKMi/4Xcuw2UoM/XDDZIv52wI167V4ns6UPIDxvQQ6PBcVvopJfq+eAa3zRghB/sidL7Ug/Mglk9BVXpYXXHXqNgQJgfTJ8QromfMUq1n9S8/n+3IPt00aCXrpVewL+4vuIr7Iky6EtYTsZNaowWUAtt9nped0AVk1trm7eP/7Imu+6myqPQovOeJtN7EOzbCX53IBJ626gsUT074Hw/LaKt0LgIejEl+RdVdwz/1N6/cw80PHvhZNWY6W8ijxKgWtyCBFhr3A2q0XKlYMPWFWir5j32T8V1hdMvMIvPEfaCT9TwyIsfa9AyCdgpS2XR5RS8F+MjN6hw7RfX5uxQzkvr+2mhrYOkbE0se/rF6DZubCTwsHAGEuY5mD+C74uOL+LZSHuX8K/W1/8/4k2pWX6qVpTdtUy+ASc6i6MK0VjieOh6+dP0Uk2EwBsF4c3BoW/09Zda76hvRxhiHKWhXN002kgvLww2ptkpu3xV2VrVx5S5jdmoHnPmy5nkf3OBYzT3zbv3czHX1xGTMxB5U8oJy/affMXKbfUGHv4BS9EFjZ1AZelze+l8E841u02719hr7E4DMy5WGmld+NcQ25vHbXcZwa9wsX2udJkm8U/RxOyy8ecTYkzSlbWr0mE4VODHQQg7ea0L2enmsg3HlPPbbbJGvq0qrdwk0t0kcuHDACApg5tIb+DxFufA29qEawmoqY6xYkGhmeX1zMK6637xnwByst8ppYXh98qFFfz0MSbdCg0axLftakrFPSquDhtYjNbAdkxGIJX8B9U7qGzwVxEPyNoeJzRajVrusGpdLFJ1bQ8Vjztv9P7fWHOrcqoLyheHm/c0NYEFUQevxbu/bSA7WYea0DEr2ov672EMO9/uNqNSUxQDCwdIcF/g8LAa1ksm+lC0pcE8QojypSqGGbYnG/TCs2pPIP7dRzAyom1vNnb9/JcckTnqrmk0XPsyJ54czm+YfZr80cMB94q8ETUyje7Vizt/Utk/HNraO4WOmtWPErRdoqY1XwdjxaOg72ozVPVXkMuZx4vj1vjg7a9esP2MhFuLrWLhyvs90kv8I7ZRPkd6toFeCk3Cx6uFvwv8W10a7/nIM0j72QuQrbVYWRYRpQv8z8t+OxyHWPxiz23TkMC1AAaf26id+u0bHMQJ90D5KpOsvdMbceR0x8PRfAm+fU1CvgydgeYAJQaLh5vtemb7/HIdo+grf2zMocSAwXbtbRgAAAA", "https://tse2.mm.bing.net/th/id/OIP.mrWo59Q0N-1WUGC7fiUAwQHaEy?r=0&pid=ImgDet&w=195&h=126&c=7&dpr=1.4&o=7&rm=3"],
    posterColors: ["#7a3ec2", "#1e0a3a"],
    posterGlyph: "🤠",
    hero: "N.T.Rama Rao",
    director: "V. V. Vinayak",
    year: 2010,
    storyHints: [
      "A US-based grandson returns home and is mistaken for someone else entirely.",
      "Double roles and a family feud collide at a wedding gone chaotic."
    ],
    difficulty: "Medium"
  },
  {
    id: "magadheera",
    name: "Magadheera",
    aliases: ["magadeera"],
    emojis: ["⚔️", "🔄", "👑"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEAqDvmSn0m6QdK-p_ryw7HaEFbvTKlO-eOPr20rCOA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVezNU8OGTjcvRMH_hkH2A2AR_FtxfVM8XXbfIWQ6Yw&s=10", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/88/0f/9e/the-open-area.jpg?w=1200&h=-1&s=1"],
    posterColors: ["#8a1f1f", "#2b0a0a"],
    posterGlyph: "⚔️",
    hero: "Ram Charan",
    director: "S. S. Rajamouli",
    year: 2009,
    storyHints: [
      "A warrior's soul is reborn centuries later, still carrying an unfinished vow.",
      "A childhood scar and a falling coin trigger memories of a past life romance."
    ],
    difficulty: "Medium"
  },
  {
    id: "julayi",
    name: "Julayi",
    aliases: ["julai"],
    emojis: ["😂", "🔫", "👬"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUaRUMX3GhWfH_YjJ0CWayTfkgYO5BFbcj5zXRJ-Nrrw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7ODPcAeQlyEHUaYZE4-_6GXOiBu9MIpV-MRq8_A0wg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMJOSbGJVjlwL2--Cn84vLTzfGw7ZI8gY2jjz5wPWuQ&s=10"],
    posterColors: ["#c2751e", "#3a1e08"],
    posterGlyph: "😂",
    hero: "Allu Arjun",
    director: "Trivikram Srinivas",
    year: 2012,
    storyHints: [
      "A carefree guy and his friends get tangled up with a don's stolen fortune.",
      "A promise to a friend's family pulls him into a dangerous game of hide and seek with gangsters."
    ],
    difficulty: "Medium"
  },
  {
    id: "athadu",
    name: "Athadu",
    aliases: ["atadu"],
    emojis: ["🔫", "🎭", "🕶️"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSmd2sKMYw1NTQ6JpkthZTu1hAAfuYGR9srRtdy1HuQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fnwuQBqWwpv7aiOH96M9qhynJTI5vmEST58xV6IS4w&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8vnJOUALn8ziS45TfZX1Y1x4v9v79-FNfXGEdBkPXg&s=10"],
    posterColors: ["#1e2b7a", "#08102b"],
    posterGlyph: "🕶️",
    hero: "Mahesh Babu",
    director: "Trivikram Srinivas",
    year: 2005,
    storyHints: [
      "A deadly contract killer is mistaken for a mild-mannered lookalike in a small town.",
      "He starts living someone else's peaceful life while old enemies close in."
    ],
    difficulty: "Medium"
  },
  {
    id: "dookudu",
    name: "Dookudu",
    aliases: ["dhookudu"],
    emojis: ["👮", "😂", "👨‍👩‍👦"],
    images: ["https://m.media-amazon.com/images/M/MV5BYWM2Y2M3NjktYmEzMy00ZGM5LWFkMTctZTA1ZTQ1OTc4NTVlXkEyXkFqcGc@._V1_.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-BTttkUGTjAkhHuHsUfi8ygtndWJwhjnkEwUBXB3UwQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6twvAno1YGoWA51FU-WLPBtmt9k6cOm8uZNnLegH0w&s=10"],
    posterColors: ["#1e7a4a", "#082b18"],
    posterGlyph: "👮",
    hero: "Mahesh Babu",
    director: "Srinu Vaitla",
    year: 2011,
    storyHints: [
      "An undercover cop hides his real job from his own family for their safety.",
      "A wedding gone wrong exposes his double life to the woman he loves."
    ],
    difficulty: "Easy"
  },
  {
    id: "businessman",
    name: "Businessman",
    aliases: ["business man"],
    emojis: ["💼", "🔫", "😎"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFwFkm7aSc16-kGPOeI9ESrCcwBRdgukY7u9PBOROKg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoKfrwkWWTHVECyWsl1FJgB-jsnLb8W-VeYFSl7w8Lg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdtir68CYtAtkK00QmgCzTaA9GzyZd-7Lf-URoUVqFvg&s=10"],
    posterColors: ["#2b2b2b", "#0a0a0a"],
    posterGlyph: "💼",
    hero: "Mahesh Babu",
    director: "Puri Jagannadh",
    year: 2012,
    storyHints: [
      "A ruthless gangster decides to run crime like a corporate empire, with rules and targets.",
      "He falls for a cop's daughter while rival syndicates try to shut his business down."
    ],
    difficulty: "Medium"
  },
  {
    id: "temper",
    name: "Temper",
    aliases: ["temper movie"],
    emojis: ["👮‍♂️", "💰", "🔥"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImUhU-eSYg5ywJwgFG2Qk_ptjykdcar3ch8QdSaAocg&s=10", "https://i.ytimg.com/vi/KmwtQecrScg/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCYmFB53zLmjT4UzMm4qP4odlCWCw&usqp=CCk", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKtUgnpfSdi9GL0MMjy4xEQlyOtnYetkbZ-WEu97tdQ&s=10"],
    posterColors: ["#7a1e1e", "#2b0808"],
    posterGlyph: "👮‍♂️",
    hero: "N.T. Rama Rao Jr.",
    director: "Puri Jagannadh",
    year: 2015,
    storyHints: [
      "A corrupt cop who takes bribes without shame slowly finds a reason to change.",
      "A woman's faith in him and a city overrun by crime push him toward redemption."
    ],
    difficulty: "Medium"
  },
  {
    id: "jalsa",
    name: "Jalsa",
    aliases: ["jalasa"],
    emojis: ["🕶️", "💊", "👨‍👧"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70B65a-UGanUEzk74Jp3mg23CwBcQjdVCLLxsImygkA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHtyU7jzsNWnm20pwzSn8X0hMjzoknH28vpnBtzUuhz9KH6xM4mEol-E&s=10", "https://i.pinimg.com/474x/80/77/7e/80777e0caff0c5f171214ccbef13897a.jpg"],
    posterColors: ["#1e5a7a", "#08202b"],
    posterGlyph: "🕶️",
    hero: "Pawan Kalyan",
    director: "Trivikram Srinivas",
    year: 2008,
    storyHints: [
      "A powerful crime boss secretly leads a peaceful double life as a caring father.",
      "A pharma conspiracy forces his two worlds to violently collide."
    ],
    difficulty: "Hard"
  },
  {
    id: "gabbarsingh",
    name: "Gabbar Singh",
    aliases: ["gabbar singh movie", "gabbarsingh"],
    emojis: ["👮‍♂️", "😆", "💥"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Oz_xwDVv7v8X-uUgeXA58c_wEjOLy2oozSH0LajMSlRiDA5-iKVFau20&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGeZvx-60Q9ll51zbDV5oHsUFRqzmZnM9E6PPNOTWBQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfbXEU9wSlmKSmuY8SUrdC1xI3GI4shKPPV1KHkee1g&s=10"],
    posterColors: ["#8a5a1e", "#2b1a08"],
    posterGlyph: "👮‍♂️",
    hero: "Pawan Kalyan",
    director: "Harish Shankar",
    year: 2012,
    storyHints: [
      "A fearless, wisecracking cop is transferred to a small town full of local goons.",
      "He romances a feisty local girl while single-handedly cleaning up the town."
    ],
    difficulty: "Easy"
  },
  {
    id: "racegurram",
    name: "Race Gurram",
    aliases: ["race gurram movie", "racegurram"],
    emojis: ["🐎", "🏇", "👨‍👩‍👧"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjdmqvOmihoXEW2pzPw_2pgih-dLAHQAs6PrTpMuj2w&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsWXiUnhQzNkW8qE3G2MmC-1MxrYkrUkcW45fnIlz1w&s=10", "data:image/jpeg;base64,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"],
    posterColors: ["#1e7a5a", "#082b1e"],
    posterGlyph: "🐎",
    hero: "Allu Arjun",
    director: "Surender Reddy",
    year: 2014,
    storyHints: [
      "A carefree young man supports his sister's family while hiding his own broke reality.",
      "A horse-racing hustle and a wealthy love interest put his loyalty to the test."
    ],
    difficulty: "Medium"
  },
  {
    id: "alavaikunthapurramuloo",
    name: "Ala Vaikunthapurramuloo",
    aliases: ["ala vaikunthapurramloo", "avpl"],
    emojis: ["👶", "🔄", "🏠"],
    images: ["https://content.tupaki.com/twdata/2020/0120/news/Ala-Vaikunthapuramulo-House-Value--1579152229-1774.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtzaI2FkreMRwgVCTtEnPr5OeoBQm7cRn3w4iGDZmYg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeXuW6j5FB-SIPSgnitQ9djlQA4cmIpiUD-NHHfsKsw&s=10"],
    posterColors: ["#7a1e5a", "#2b081e"],
    posterGlyph: "👶",
    hero: "Allu Arjun",
    director: "Trivikram Srinivas",
    year: 2020,
    storyHints: [
      "A young man raised in a modest family discovers he was switched at birth with a rich family's son.",
      "He must find a way to reunite with his real family without hurting the parents who raised him."
    ],
    difficulty: "Easy"
  },
  {
    id: "sarrainodu",
    name: "Sarrainodu",
    aliases: ["sarainodu", "sarrainodu movie"],
    emojis: ["⚔️", "🌾", "💥"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4muE8j3rbNe5fUHD-NcQXBJAMXe1adTqwxevFf9bog&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMnU14KtuKZuSuJ4iNfKUwoZy2GNg24f78KLybaUT0Q&s=10", "https://files.prokerala.com/movies/pics/800/sarrainodu-movie-function-still-56490.jpg"],
    posterColors: ["#1e7a1e", "#082b08"],
    posterGlyph: "⚔️",
    hero: "Allu Arjun",
    director: "Boyapati Srinu",
    year: 2016,
    storyHints: [
      "A fierce protector rises to defend his village's farmland from greedy land grabbers.",
      "Old family rivalries resurface as he battles a ruthless political strongman."
    ],
    difficulty: "Medium"
  },
  {
    id: "bharatanenenu",
    name: "Bharat Ane Nenu",
    aliases: ["bharat ane nenu movie", "bharath ane nenu"],
    emojis: ["🏛️", "👨‍💼", "📚"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC517RhUdSLb2VWpR_dFX81wKOW7xTTzBDDaLz6Ygig&s=10", "https://pbs.twimg.com/profile_images/1547454408161521665/iJUDF7Ps_400x400.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxFhTA2PZbNIRjtwscaGCE9JWgz7xsIfQ1XZMttDXOg&s=10"],
    posterColors: ["#1e3a7a", "#08122b"],
    posterGlyph: "🏛️",
    hero: "Mahesh Babu",
    director: "Koratala Siva",
    year: 2018,
    storyHints: [
      "A young man educated abroad is thrust into leading his state after his father's sudden death.",
      "He fights entrenched corruption inside his own cabinet to bring real reform."
    ],
    difficulty: "Medium"
  },
  {
    id: "srimanthudu",
    name: "Srimanthudu",
    aliases: ["srimanthudu movie", "srimanthud"],
    emojis: ["🌾", "💰", "🏘️"],
    images: ["https://th.bing.com/th/id/OIP.ZN8xhXsrtXgwTWDte8i12AHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSo6NgwN4sg88LbV-Qq1Y9WaUxtU5wC8l9jOD-sRM8zw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEd2mLSgtDNO0f6G-Su6mOasnlaElRZ04wLfjnAM5Ug&s=10"],
    posterColors: ["#7a5a1e", "#2b1e08"],
    posterGlyph: "🌾",
    hero: "Mahesh Babu",
    director: "Koratala Siva",
    year: 2015,
    storyHints: [
      "A billionaire's son sets out to trace his roots and finds an impoverished ancestral village.",
      "He quietly commits to transforming the entire village without revealing who he really is."
    ],
    difficulty: "Easy"
  },
  {
    id: "mirchi",
    name: "Mirchi",
    aliases: ["mirchi movie"],
    emojis: ["🌾", "🔥", "❓"],
    images: ["data:image/webp;base64,UklGRj4cAABXRUJQVlA4IDIcAACwgACdASrgAP0APp1CnEqlo6KnKJK9WOATiWUDsB0pXwynU9tNbIS64fi5rXoeby6q9/mP/L8QfQt9LmFnNdmDtv+cqom4Fv//xvOD7V9Ifhcfj/+v7BP84/yHrHf7nlF/a/UW8uf2Lfux7H37dHY7pBsX5wgOPhLKv0hdCy1piLSLhZ46Y23E8yxQR2BGv+JtWS2cgcsTtV/B3gMOOolR0Zp5HT8zSe3wxgrblroBZ83clt54lLhehCrdeOnElKTLE66pbo/avRSyYehUILCQ5tvA5xc3rcCUMPHAawWQQwWXLM3STVfBIIYtErhbPddA/ynKWdmkGbyq6BqhhpQcRmTNcgmWEN69utkQdCZ0TrusaYzDkIkNOZvfg3dteuLpdZxm/E3HrIhqflmLYFoQc0fyk0d12bja9O2OD1w2iYp0OlDuIZ9VH0V73heIBxFm1XckiDQYH9IORvWFYvWwwjFR2HAJkLMaqdLB+jSZyOYnYS8PtCB+Zzi1xKkbt5Wcobl6N7p78KY95EB5aU9lWSpTSnTGpSMitEb+AY3Nr5GP6R7FjPdAfTjTRxUuC9qs/FyISELVqK7uLKkq8Lz4CXkjq2+BVeuKODWWIYyT5k8nFAGpNAC7Wb6/rsQ0q0NKqdTx1F8u29gePR1LFuFGW/DQIg3tkAfzR+SogE0qfacDlGjYqFtDQC+I4bYkQgESmH23CPFxRRsS5yVy+A/IAPjCRxRgT7AqRiZIbnSQxh1ZPTf750tiUWZIv3HNlQm/qa2jDb5RbZqbApjvRQySFunv6t0eQRvQVeUdnFpQ4sAFL5Y3cSMzGN63NEx+AxWiEPYkJnDMfggiHHEz+oFR7nr3sQpMDlI08sCp3dya+4Z2nvFV+JO4pfp1d4PDDHU2ivpdlQU6mDtJDT1lkMmieCvYheB5RbXr9rdEfjtXyK0xXFdZDVP8IttAkin0LASbAQJ884q7xpJO3JlfUePu9cJvhdfP3vcwM6qskaz7yZFl2SdqTq/Id4MFQsvFH/TUDzgby/DRtghBHGRIR9JC2Q5Sea6E0YZxwPqfQQLBTDWdwlaj/ND+f/aZdqy63IckTBF83WMOlARiS98yZexaTxnjbxm3ESR6Nb+wSEVhjtpQnGZosoGPokDv1UuzOfK3A0jwFSd80G4Yeon5SFcLUuC2p0VAeBxOuu4uGvvSrGJ2uoTyk2trH9qiz9yF5+ZKIaXnfHRsDKN2mfuZHRwBZn4aFI3w2QLi/1Yzw14ymUFpJCCyLa3gD6ePaICREy37djiMWfW6/0OX3/stY1Hp8ki5L6SO4g5ScAjEKaEaQb///WCJ2hX+wv1rm7fRXfvcjwgw8bcOW/3zU+plr5RboJjnCNbRpKAwY/T+9pAA/vbzmYm6+20aOGI8d8SPLOM4leqIbdj3paQlCyHCzkFxCxs29lj1cIKUdAzLHSOfcUNnV6NW8BZkArqTmpophML+OzE0BThebWfsKOhFyJSJ4WVm1mGglFhXk3PfEc90oYQa34HMaXxZKRtSiWnUmxabpO3jR0t7guvU1jkKvUAf9lAK/HbaV1TN6yGWChJsUBfJG/zeeXwOEPz03sn/fc8n5FzOv8N4lfMU0GAASB39VnnXl+doP/x4+VWxigyUTpOfOivnocI2Cwke8CTLtvCoGG/2xEksB5pquzwwikupGw/bVtSEPHHqOTdngRIT+T97rO5S8M/Y/XwJTxsZTCN7IpG/s69H56hXTEOBnQuAW6clZeKSHhYFygJ/LLkuU+RLKSJC9CuEq75zsH9NzreNV/VFGIZRNFmOpRLqZ9WK6UqeJz9PMTsTzd+DeS0BTwAHNlBXCSUbiuCnxgAHWGsfBXBDuaWkASogAw19MFgA7tlLrJzbErUMq+L8IxH8ZP9apQUOKdDQjG6szdN3NYVnLs5mkFzY/DNCmWAOIdukSRGIbbJJopYNRN60ILC8/FfINMo/whnynjh4HfEJ+On9aeDX451mm2qTxIy3pgv+HazeReCYmlm14yk8aXp2XqvP7iF5wEc5Z/+u6B0b7yGQeZOdbVYo5PuOHg4cvtgm48CDKp+dca0Bqf0ubVVBe/RntqylE/H+Fsl5mw2b5KivGxH80hXnVaC+jaLqpAmJ5Ts+3KhLVNuvw2eE5oObenBYiQD2DngZqh2nDpHyAbeT+PnbSjvm3ukCwf/xMs8XssDYoPf0GsUQzxDy3AdgsK7Q0eHETE+YbRNpXfLQ7NGyIZm8ZSfy2XdiwKic78AXGrxC+4bdq3APAIZ5r51QBbes7mjG7g1IC06hneou/Mm1O/Av+Fuv8IoiIY0zmh+CUtGB5Li/fnD3emazdiy/CxJaai/38n/YbbVNqZbCx98Zdk3EXsIYvAFHepT3CNVdRxU26wVcCzwKN55SPkt5ON82MnVWWhE2webfH171I8FZJTGDopGb4sDI7p35LiVj1x/nLgLUeyd1gdtxWKhBaugYPHVJv8YDgcx68nBlZutieJxKXKcVcKyWDYllFDdh41xu56QoSl095jPj9wuU+Nm8A7QTMT1qS1BQ5H8E4mQZkbf6cm+h/xy0yJhpOKGqePZNWduDF/k9Y2UzdkQxAAFOXU6OmbFwmxd52mje4intn4flnDbnV2fNAuPjk7AOkq12HOvs1I0Fsi8q3+WedJg+IWpNyECziWcIj5I7SMFtWCZqi1bv4+GfX+A/LZyqC0vI/FvRK0QpdY7BNB4rOzJsjEPzXjEeptFk6ZV94eLV8MFn2DBhGOIDvlTMtRaxxTc83frtbgsJT8eeig0LRD6JO2PEJ4e+fj1Ex9bYycn6sOg+nznYXMNZMiytbYEPRIEcnX/QjTlItn0ebdAvU2PShdpYpMNM2HgmwxSjnCw0LzTWW63OMqPwck3QIwAncfOtOOa/hQF1WL70Pu4BiOb3tjuZJIJJaQGi995hxuxQ0o6RduPojubdZAbuB5UzDtEx6TAKOojRuvrXMuIxhnY3eG5kFiE6F71Psa4sGq77li6UE3ddYfuPITIOYYzDxi6o9vZolIaw1XTrLRWV9+/dVhLhJt9Pyi3aOmMiQ44iY1Pwkoe3fXVoUE8FNRAP+JO7wfhTv+1FYF87NXZdwIuPYQ6KLpfYiqZ/rL7qE1qp7CLdjhbC6X0ONN847dG9hZUSyIIuJEg5lljXApXdwE/rZVkmfqVe0TAk6ByQkUGhvqDpspBN4N4ziyjPHBPokh+6fKoozKLhf0tDb9DZNZ2e7CbBBdsL8Or0xJk6pX1Fec48iHkyvslHQ+yhpBYggl1nHaOSibrhBG1ois7fpuQdy7NFXTsVRKBZJ1CkmJBOSTum+IxR8HmC/QDzyaI6fQ3CgpADoQthGd2XhWcGtICD2SV9UNQWKh/92X/+Qg9hWcs5aoDOgdQ2aMGstQ8MPNCyWk0V4JzYAe0KldjPB82IF9BcDqhdoFgBuxCs9X9tQfZCTooWbcNKfDbcQ3OAQKsq61KA3Gt0vGvVl3jHt6K3Iqn+K4nrUi4l5aZKAw9Mhe6rXnjWYH0Ij7J/Nm7Gn8KmSt/V9d9nFhq4h76nlknzD1YqUAGNJoRytI88N0f4TU0c0uVlsJDJth9fqRWAjJ4bx8jxdR2Qiruyg8O/KOQiaNjZjhpIGiIBiiGFArVaI/NMC+QdYtwG67gZAKoB4LkuXLOEkRub0ASVUQmSb3YFBicBLRY598KTr65OglrFPpCQDWEsLnH8ixW7cSa1w5B7bKu5vqW8ljFOSh+gu2ve0jTBFe/nu7/xost6/D7WnKLtcT5zMAs0j7o3lKKoXPY/pChk/X531Jx4IceD1SRSoJMsxiMrejt6TvGDMDBInb4W/Xu2KzpB4IEHJ1kNDtSeBTHZbQGVM6/vmpdess+ZzTFp3Mxzt5g8fFuXxIJXn+jXvZogylBo06KqLgz/ij3CM5Gphlvaasp5GM9J0uZc60tzCOA5Jy5IBD2bNvjmSK6NRyko8BMADFrDCtyoPTq3J1ux21zVz/whSx9Wf9LOsU6YrdnggHDPdxt8cfz6yybe/HS7B7Q8csYKeMZkiysWczJxB5jQTFusUu4JW87JE5rqO5khvas9okf4jIJ0QQWcSIVc3HRci0CgVDMOaoUsOvp7kVkLZ1iZALKnJiIBPpWARb2wlT6hzBvlLDqpU8jw5UVwn0gvhZpIeZFVrIrHUufkaQbw8KUGASXiGO65bfT0YhIaQNlHU9uzKT7dhQYxCDQ1GUWB1qcpubBqSf6ivwbxjrXZobK7z2uGvMmoQQLRw1mYq4OawzwTi6bDcXipRY/PbQlksoIINkUOHY0/Xgc6vtNAeS3Qbff8qCYpaYDfA0uNwBjsCvqXPFTfggD0UbggdWRxC4HqrNYk3QnL6qZHMN8hps+UucCuYQCDoOPScwiaCvspMhm0AFhDAxrd+j29MgE/B0t6FKHaOW7QCvbBZ5ePWvq5pcD4TfGeK2ZhxhQ0WR5584yUYRmWoEDNN98+9GbQcUbx20F+2P2q/ruwT2dbau2ynEntgUWKyp8KjZjrYdG8+aUxGcbHuMDJVVVZdlMeR/3ZnEeV4+rExy1lxtxG9kpi5C21BiF08JpCuMq1L5tI6dZT+OtCYCfH1q502wR6F9VMq4NFpgyu++NpM2ioAxL5+Dze0wOLuaCu3dViE5Obrggw2jY7GH9VpzownqImdwoOaaemRvB6PFGqSdCpIyLXo4cszV5KwJtgW4nAWR44AqQEFqwZx9n6950DhXv4nsqe5A66Stjlb/x9HGb/D2P4t8CuqYPZhw543jy5+IATicLIlUjADi22qlLbJWjiAjK8kpVG1M+KGK0M4SUrVNeAorhXt6Wlf2tKy3/prr76SNeD2Eu9IAHx9UDUVn3Xs5FFZtPSmJsxYi4HICN4GEx17rGtmyU2A5hWtwOxihStw1cS4IYCpNQQhZlbmFFWm70xDEE7sfL/p9LyEpUxuah90di92TdgwcRtyAUbi22Or9riHns9XPLKfDDh/WQr9DlWN83C7JkXUJa6QvIrYsW5uEWS77149LbxebVZNEf2K2KCHLZAm1/x/E9gStCUaGxm/4TEKu1DPQZ2VPFPz4zFhQUUsSrXe04s141+F6p73SGE4ybcauII1HeF4nB53iwYI34XGvN4TsyqwOeblG4W5HdF26aYHpq6d2hGsworVBtse8Ao54oLDlyk0z78/A4Ao6l6aDEOADzuGgeFpRPy+rrtQwKA2I7DZKlhNJWwDBwhiMcHzH6xWLh8hgH7p5XRUwMKrmCs9YUoH1yUqVt0qfkgrHluGisyMAWwpl5EKZdGWcRaPCdKHiYyDyx3qDp6Fygp+1Tv20UQcmCvQRa6G+BgED98aB59B1AVla91h0xxHbSD/ZkubDWXMJD75zuqLdcyMlLlj4kHjxjBtCYP8MvYfwB6MKZbUcjPKpt8W2YV0Gt3rP/0q95xA4IRPfk43P5prvPYbZ475JFbX4qwDLkN1+dMIm1LqFicpD6es0FM+ed+1S/6hdeqL600iLEIkaYxuVd1yxs3gR5y2e4wE+dv8wQASUMxkcu1n7+tFVsaWOSOBlIh/kKuD2oAhgwAO74ZUqE0Uz4qHFl/zFt+F+J0mA7RJHhyhi15nwmlFngMU4b8IrOqXXjJlEA2ameV3n+SgLgh1jgezOnzNjzr9crmRs72dQi8pX429z+fVWKVu7Vi4+dmaMVDUuJYgQQqJtjTND5yvJP1alYOklelw8IwZIUkafnRhzixghiXV+Y9qCkRa079TCN2CELkLKa3OnWMIvvXTXuP9AWqoTzVvdGa70AXp6iSrrGkUXt6knxXUEZRn/2HP5/E3wcuU1Voj3c20nu59gW9ZIF98noy5IjRgumVP3JeVoBM5uJz2khVljHhJ1Oal4/1WTmNDJVF7jMtZxtPbvOXigiMGhnU6D/OeiID0LsUXZhBFUzNelj+jJeJ+PDiUbWhAnfZCrrBt6tcwWbW/qdNsCzX7lVJRysABUhTlq3YoV5QIrpdhMB2/FwlIG79MF4HP8Q6m/0bN34T5DOPFZwbTDTN15mCRq128RrpBi9ydkHc66NHl475TQ/xTSXxbw/W4+CzQktOwl80sap0yasDkjZ0v1GzvE7bfYTnJLB6e0HMblZrmRuRX/RW9BjvbFLMp6VJHUTmzXCiWJ6CfESBw3yicDR9Idg+V9sCF/dPyWe1N25NpW9azDuejZSnuqNIvut5Bcq+DN5tBOj585T7i2SZbHF64nTkvPVJ4ss2JgSs9RvrzMA8/9isc2fPQwkHiLqU1UsFyoNgllUjcC/HloE1EipZRl+/mgIDaBtVbAyqH+KvE5YcIAvczwVMMwIXByEjX+c+7h4HMg5jXTfL0rDpWOilF7yto1M2wTf2DJ/Y8uuSJ4KKTtWQLR2V20Bwpj+a0sD4CXAOBcA/mAco8bwXuDX3NKDW6/1gAHSgOSFPT+HDPhIWz4brzqRXEgka6DI09aL4Y5SijGixCpwAxdXnNqI3G66FnQtTkqpnWQFPexbZBWtCZ4+FwwOso5tREg5h51Jylkl/tAWVp72L4kNCu7oocpz71dPm3yVC2I/woKDCoBaDj7r1zb811IWnd7RDZt05UJd7bMnx3n3mP3SsPMuBgDTVVMdRLycPVU7b8CP/OJe9DXPHwz0BFlOC6oTOBzO0ZujwN2rOEPm9uZuflUc9midcT26cPNNYXR++0PX5jdvDtyl9N8xRPU5mVOgmP9OqchwWrnDxd9aESP8f2u2UD+7ODKc2oBMHFJkpVdCa8Zo+VKDnVUQvEgTaYnim22DkRBFc+2fnB56SDWM14o3s0HuyKI3YtRK6XGgupSy4lxUNkYqrGDfHbrgjiusixLr3dUztoV9OajfR6cKo2eE00w7MYbXQHro/5PTkWWnjTuMYnaJs92KpgYfZAuyVYyo0D/rkjkjnGct7qYniSGnDRcap8tVusJ+dQfOOVQ9iRv9dTAA9sh1894WDYnqelhNMv/dpHtNrUBNG+vOGafCRyOTvN1UUc5JfmOIIhUFBdGQ+nZxzJe4/t3txCKJfH2M+hRo9yOOZ7I94urWVfpbMhR/8Fpp+Zh/LWBCuC71hJgy+57Wm8uiamcHXtV3DnSfB32ogEZyDib5IOoGuto1GznBOs2A+xNlZxFuQEhHn6XgvUffi0Pd4zIBBJ57Xu/P5YbfYZT+/hIP14gX02SZVkR3ckISVzCyfc6np+Ev+Zc525dkxIXHpx+m0L8IeVvAVCiCjYDycN0Wu1jCU7VeLQbNsieResOxkF4IG2rm0VAtGbcOyZvblSdlQPpGlYXxyUOAosGLmKGfJ9QERTK4AUNLjlALPVLVzYeASaFzdcJ64Cw9tsFYuGLT6o6CCrW0jQYa+JcaMMwUA3oBemTGhti8B4xutYoBZsoHMJ3iV+ya6TrgA1Sq32AomnAS7GAR24D/2JeQ8lYVeqRO6Fe5jCM0ig/aSjifwI5qB4xWWnroivGiR5Y47qODQZbkTn1xPlonz+DbWOI+3JI36t6SdPWYxtW+e6iEtJlOc527v3qUwjSETA06o4oCsVy262kHwdsIyC8F1JEQ9zTQ2o58mISupbUqtW8gRR5ubEENtG1uH8SspSBAN1agiSBHaI+ILFpUkRMEaF0JEqteajA2Ts7gIrYwZERQIlY4/YAwnU7etRi/67RYOydqK3yn3p5ghu7M622AoLh9Leu07MtwQpAemWA1O/VmbVEFeJCjmG6Zyqr47+zu6u2P7rhkTY6zDQpDw1pv2HdMFR/yW9LQ5O34siKaBG+tCcf4rnXYznTw60VfgzVlD1C/+KOBWE4j23w5lSOmxJ5FnFSdHXddpLcz8qqa0OsKeVkNi50Er5AANUGPEHl5FDZCflDhKiSSkGjomq/VTjQvCqr6XtITeJP4geSVc/8oWRO90ZyTv8svCmvfgwc99E38Z8R6Fq9vOvkIpJq81BMm0Lg2UflFq7YL8nhOUrxK2ae4BgCcnz69yN5t1wjwucZnLog82VjiMDXw2xrw034YpyJ+ZVYvluZEQ/05KlNucQQOBuKqGU42h6H6GIIhK66PGKfRYySHSOxIUYrAuMHPvXIwSrbN1uYz4qU8Auzwefl3jJTwc8tUgdZvj29b3N8tVdiIXLnDhMt6mG8ShcEitjhe6vvo6rUPh3Wr4yekElOGv5Es593E/hFz79UVAVYbghL+QjcWIm6DcNa1vMYQmX9EA8vNmt41rgSR9CNwQi/bJOqLuX9n1iVx54nTR9UInkzcv3ixv8uWRjyBw6Zar565mt0rlw+aX9QoIyOScQUYUxhyf82khaRdnfHGVU7X4skoF/HPDLTY0KKhesVfTgggOfxagXod6EpN/GV5tJNWV7hJftcTzrVb7JYTDeh1X/3k6fA5iQkLlxvmEewaQe9TL94s7YbSyMlxZ2Ri5AaSJYRHatjzePECjT9psuV3a01YpK+lNrooBfWGPL/MDT/nmIlPacBVv/5Q81IosHpuyPhkt25fvXvP2vTXyAhkPxYaHLiw4RBKevJzAJ3UpxJtfXinE8np0iROIuRnf7zbsOlLP0nEdjkapIAU8hfEJsBOA5FF2zVRWVcAaYsTao4RszBQB7/PvcvlU1JRqGqKIt7i/a+3uilt3jpDb7OHXFYLeobDxp51603ZSELuemlCJiu6du5u1fMuCPDK1EvuEtbYW8HjE05LSkfz1kqvgzolaDnCQ/pr0avTNefgklSWK3q0pTBMENl0eSAH4Ovr7yDBB23eeHs/WGHo/gZmoae8wzqDXFjOYH+hT8WCH9m/mL9bcmPwmvqfwI7kCAWxgg9IXbEtDy/cIvehlJnUK1GHQQ/IhZDcYuAirYqtHLOQ2NyAAcPi2wmy6go2GjljBNrvrMxocnvSEFDB2I+rsauoiWf/NbbRdi9+Eleh8rHTo8r44FpHWWhF0YMaVr5WI1HDEclnEQgtx6ESFnWNWcT6IxKDI0uiuzDc6A6FyrIe1S1nEgBeZQWHC+dnBk68RMGjF7FxDb9umCTQseXIhqjJ6E1S5wUNSZQprrqyNrXGbwv5vVIiOGW40V6cx03mQR6k1AWYXs67ikylu7yExF7+u7Zz25f3dnAx5lpsaSkcfXDbPx0Askfu022a6nwSxB52fOUDmWdouPuMPy/DtVnbiEQpmTElcOfItXcj+Wk08YHwUjYCp05gA0FbxwIof9ICGGprzy7QfGb9L0ek8PxjDyABj3L44sEIPrkIthWhamQ/0lMAw0bWKoTtRcHLaF8dD05rN5naWnPsQG1Gcc524FXKeNXARdWL6u9XW0aQgGWnSaCrfHdL4JuLgqzMOteF4NOcbtAL16RdunAs+zcl9D0lAhXVypkptxLanE+82kLfsNfeNlWJu+kTYntySHQk2IpweebrNfv6LJt4DFS8SqmPklWag19RuM1bj/ngYbFXvC4wBinTSbX8mFnfO2Wa5dFLOiv2NRqC7gi3Qpinn2x5PvQQMyAub4IGMdhE46zhZGJNtS2Al3pp7DLtl1OKGFpLCthcR4i3yNyqIYAUyx8jHsedEHRsv8x2Cyl7dfwS6Cvk/l8VbCi0OSfb06+5XkL6lT4AK5OUfa5lq0TvoHBtdD2oAAAA=", "https://content.tupaki.com/twdata/2013/0313/news/Prabhas-Mother--1574.jpg", "data:image/webp;base64,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"],
    posterColors: ["#c21e1e", "#3a0808"],
    posterGlyph: "🌶️",
    hero: "Prabhas",
    director: "Koratala Siva",
    year: 2013,
    storyHints: [
      "A mysterious stranger with a hidden past arrives in a village torn by a feud.",
      "Flashbacks slowly reveal why this seemingly ordinary man is so feared by dangerous men."
    ],
    difficulty: "Medium"
  },
  {
    id: "chatrapathi",
    name: "Chatrapathi",
    aliases: ["chhatrapathi", "chatrapathi movie"],
    emojis: ["⚔️", "🏚️", "👊"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-HoIsNRcGX3uEDLuYoRORUjFQMSPMGOWkQZG97XNGA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJ_Y3ddUER2jMpNKiL8W5zUIiZHaAxLGr9cSnkfOabw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQ39LvKkBf4e-ljUUZJoUv3s2jxSw19RJ72KnkqoEVQ&s=10"],
    posterColors: ["#5a1e7a", "#1e082b"],
    posterGlyph: "👊",
    hero: "Prabhas",
    director: "S. S. Rajamouli",
    year: 2005,
    storyHints: [
      "A refugee colony's residents are exploited by a corrupt strongman who controls their labor.",
      "One fearless young man rises to unite the colony and fight back for their dignity."
    ],
    difficulty: "Hard"
  },
  {
    id: "darling",
    name: "Darling",
    aliases: ["darling movie"],
    emojis: ["💘", "😂", "💍"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsX4pE7-z_8fj4O5Yy1GkltSG0brixlj-tfHFLZEFlQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmFyXBNiPubiJwiJ21GfCnttiIr2EWy8_2kHpXnB6Vw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_bPBIwH2iHCR-6oCUkalyjH1CWBA8iDkWc_QR3y6JQ&s=10"],
    posterColors: ["#c21e7a", "#3a081e"],
    posterGlyph: "💘",
    hero: "Prabhas",
    director: "A. Karunakaran",
    year: 2010,
    storyHints: [
      "A carefree romantic keeps falling for women without ever meaning to commit.",
      "One relationship finally forces him to figure out what real love actually means."
    ],
    difficulty: "Hard"
  },
  {
    id: "jersey",
    name: "Jersey",
    aliases: ["jersey movie"],
    emojis: ["🏏", "👨‍👦", "🎽"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMR_qHL9BRpQW_7fLTWHqG0fm0InPiHTwHzX3-dyHEg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZntwHzZCN_ldFPdCR3R7WHrzD4m9bXFnELlxtcJn5Pg&s", "https://i.pinimg.com/736x/5c/6b/16/5c6b16f36cba1c9850b5cd38c926b0fb.jpg"],
    posterColors: ["#1e5a2b", "#082b12"],
    posterGlyph: "🏏",
    hero: "Nani",
    director: "Gowtam Tinnanuri",
    year: 2019,
    storyHints: [
      "A washed-up former cricketer, now struggling and jobless, decides to attempt a comeback in his late thirties.",
      "His young son's simple wish for a team jersey becomes the reason he refuses to give up."
    ],
    difficulty: "Medium"
  },
  {
    id: "geethagovindam",
    name: "Geetha Govindam",
    aliases: ["geeta govindam", "geetha govindham"],
    emojis: ["💐", "😅", "❤️"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1XSuL1oItrK2gyVH9uJ9rQcChv3xlKiMHGyGjKaCjg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrzYlJSK8sCfPHjfTGrpz7peTCbBij1Fpb3lDRd_cJg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV33r8IhnqIwb4LRz4t0r6TVn3--ViMLIU87wf7onC-oTy1opp5ayvu2DrHKz_GKeAm6naMR4l2xObW_ewp7sOEVhkFTqZzQ5wMwUeQ&s=10"],
    posterColors: ["#c2751e", "#3a2008"],
    posterGlyph: "💐",
    hero: "Vijay Deverakonda",
    director: "Parasuram",
    year: 2018,
    storyHints: [
      "A lecturer is wrongly accused of misbehaving with a woman on a bus and sets out to clear his name.",
      "Tracking her down to apologize slowly turns into an unexpected love story."
    ],
    difficulty: "Easy"
  },
  {
    id: "mahanati",
    name: "Mahanati",
    aliases: ["mahanati movie", "nadigaiyar thilagam"],
    emojis: ["🎬", "👑", "😢"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxcQuOQXrnj-OzeTseZ9nTSKpdVK83pKaBgeCc6EtYA&s=10", "https://mridulachitnis.files.wordpress.com/2018/07/rangarao3.jpg", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nag_Ashwin_by_Gage_Skidmore.jpg"],
    posterColors: ["#7a1e4a", "#2b0818"],
    posterGlyph: "🎬",
    hero: "Keerthy Suresh",
    director: "Nag Ashwin",
    year: 2018,
    storyHints: [
      "A biopic tracing a legendary actress's rise from a small town to becoming a beloved superstar.",
      "A journalist's investigation into her later, tragic years uncovers the woman behind the legend."
    ],
    difficulty: "Hard"
  },
  {
    id: "leader",
    name: "Leader",
    aliases: ["leader movie"],
    emojis: ["🏛️", "✊", "📜"],
    images: ["https://www.trawell.in/admin/images/upload/153110467Assembly_Main.jpg", "https://cdn.pixabay.com/photo/2017/04/05/19/34/leader-2206099_640.jpg", "https://www.entrepreneur.com/wp-content/uploads/sites/2/2019/08/20190821133726-GettyImages-927720230.jpeg"],
    posterColors: ["#1e2b5a", "#08102b"],
    posterGlyph: "✊",
    hero: "Rana Daggubati",
    director: "Sekhar Kammula",
    year: 2010,
    storyHints: [
      "An idealistic young man enters politics determined to fix a broken, corrupt system.",
      "He travels the state confronting factionalism and disillusioned voters to build a real movement."
    ],
    difficulty: "Hard"
  },
  {
    id: "indra",
    name: "Indra",
    aliases: ["indra the tiger"],
    emojis: ["🐯", "🏞️", "👨‍👩‍👦"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMfZNYxVhGxADRDiYuGnFhAppcrh7_ElyQ7bl4_6GTgrO0JuHgNh15Sg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBh3OFFVFV-cyjKKP7bICn1Fc5imgutbjaSS_XeuHYKQ&s=10", "data:image/jpeg;base64,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"],
    posterColors: ["#8a5a02", "#2b1a00"],
    posterGlyph: "🐯",
    hero: "Chiranjeevi",
    director: "B. Gopal",
    year: 2002,
    storyHints: [
      "A humble boatman in a village is secretly a powerful figure with a hidden past tied to a royal family.",
      "A flashback reveals him single-handedly ending a bloody feud between two warring factions years ago."
    ],
    difficulty: "Medium"
  },
  {
    id: "tagore",
    name: "Tagore",
    aliases: ["tagore movie"],
    emojis: ["🎓", "😡", "🏥"],
    images: ["https://pbs.twimg.com/media/E6GGelwUUAYuysY.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPVnzW8s66IAopHAoGdFnOSVRPIiUiSpLUglGSo-PeNTN0b3bd_llmekp&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4OvWAjVj6d0XIH9hv6pLhySMtmDzER1iDr4Tdbyltg&s=10"],
    posterColors: ["#1e5a3a", "#082b18"],
    posterGlyph: "🎓",
    hero: "Chiranjeevi",
    director: "A. R. Murugadoss",
    year: 2003,
    storyHints: [
      "A former professor turns vigilante after seeing corruption strangle the education and medical systems.",
      "He takes on a ruthless minister's private college and hospital empire one by one."
    ],
    difficulty: "Medium"
  },
  {
    id: "gharanamogudu",
    name: "Gharana Mogudu",
    aliases: ["gharana mogudu movie"],
    emojis: ["🤵", "😄", "👩‍❤️‍👨"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iL_lWR8lP1mwQvOnDRNqhfa8drVRKxRrNK5kOysKQQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkwi1dnxMZpzSEigL8c60caOS8eepq3KhvOlAI9XGafizeL7EWGF_IGjN&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2dCRRtsEcjqoFPVZb8pXCJm91Bvg7p6injamuy9qqg&s=10"],
    posterColors: ["#c2751e", "#3a2008"],
    posterGlyph: "😄",
    hero: "Chiranjeevi",
    director: "K. Raghavendra Rao",
    year: 1992,
    storyHints: [
      "A carefree man's playful married life turns chaotic when his wife's tough family gets involved.",
      "Comic misunderstandings pile up as he tries to win over a stern father figure."
    ],
    difficulty: "Easy"
  },
  {
    id: "stalin",
    name: "Stalin",
    aliases: ["stalin movie"],
    emojis: ["💪", "🌾", "🏘️"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlR9AlavW_gc4bB-5ptMCWBYCIbIqNa-ZNFtzWJyLJrA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_Mrsp9OjR7G1PB4mnzv6PEPOfiKNJ3Q_CnvJG2QlPQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FmS0vuBNxKo9ty1zEaeX53Dx_Q7MQvs5SQtR-LvTUg&s=10"],
    posterColors: ["#7a1029", "#2b0510"],
    posterGlyph: "💪",
    hero: "Chiranjeevi",
    director: "A. R. Murugadoss",
    year: 2006,
    storyHints: [
      "A fearless man takes it upon himself to fix his village's broken healthcare and water problems.",
      "He clashes with a corrupt local politician who profits from the village's suffering."
    ],
    difficulty: "Medium"
  },
  {
    id: "samarasimhareddy",
    name: "Samarasimha Reddy",
    aliases: ["samara simha reddy"],
    emojis: ["🤴", "⚔️", "🏰"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduX9zokGdsd_I6-5rrJTdAntGsI9_LQnB2fOwHSuawA&s=10", "https://static.toiimg.com/thumb/msid-78001881,width-1280,height-720,resizemode-4/78001881.jpg", "https://i.ytimg.com/vi/s2hUtLDR83c/mqdefault.jpg"],
    posterColors: ["#3a2b0a", "#161000"],
    posterGlyph: "🤴",
    hero: "Balakrishna",
    director: "B. Gopal",
    year: 1999,
    storyHints: [
      "A righteous village leader returns home to find his family estate seized by scheming relatives.",
      "He must reclaim his father's legacy while protecting his village from a rival clan."
    ],
    difficulty: "Medium"
  },
  {
    id: "narasimhanaidu",
    name: "Narasimha Naidu",
    aliases: ["narasimhudu naidu"],
    emojis: ["🦁", "🌾", "🥊"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEtM-ArrBn2htFiOPbuITm57QmLN9yyBkKBo-v3FsTw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OIMaL6b4Z3rSYPE1JaVQUqGkT_e0_r_5xDHUPY6qcA&s=10", "https://alchetron.com/cdn/narasimha-naidu-416f1241-eb3d-4a8e-8e3f-d4ef17408b9-resize-750.jpg"],
    posterColors: ["#5a3a1e", "#2b1a08"],
    posterGlyph: "🐂",
    hero: "Balakrishna",
    director: "B. Gopal",
    year: 2001,
    storyHints: [
      "A strong-willed farmer's son returns to his village to stand against land-grabbing goons.",
      "His fierce temper and loyalty to his father set off a violent showdown with the local faction leader."
    ],
    difficulty: "Medium"
  },
  {
    id: "legend",
    name: "Legend",
    aliases: ["legend movie", "balayya legend"],
    emojis: ["🕉️", "🥋", "👑"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKxwiCMRXiiLmFg3dPY0my6jpAlGWxbmR9sXK150P2w&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Oo47AqRFEoU-AadVQNfOPr5d15Z1PDPq3euDDbncgg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEttt3_UlqEBYojilDDmYgcvtj7_6sf5lEF1K5glLShw&s=10"],
    posterColors: ["#8a2b1e", "#2b0a08"],
    posterGlyph: "🥋",
    hero: "Balakrishna",
    director: "Boyapati Srinu",
    year: 2014,
    storyHints: [
      "A fierce elder brother figure raises his younger siblings with an iron code of family honor.",
      "A dual role and a village feud collide when an old enemy resurfaces to threaten the family."
    ],
    difficulty: "Hard"
  },
  {
    id: "akhanda",
    name: "Akhanda",
    aliases: ["akhanda movie"],
    emojis: ["🔱", "🧘", "🐆"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBndXPXYZiRHnDqRBXT4HOOa92JflKzFpLo1cPTU8-5w&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_t-PI459RVkLGm1UN4ncw6qeE2pLiMCVFOI_jfOrzg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpClTmxCpEwl3RfUvJHLbDp__xCbbyD3eKG60XPH9EjQ&s=10"],
    posterColors: ["#5a1e5a", "#1a081a"],
    posterGlyph: "🔱",
    hero: "Balakrishna",
    director: "Boyapati Srinu",
    year: 2021,
    storyHints: [
      "A devoted temple priest with mystical powers clashes with a red-sandalwood smuggling syndicate.",
      "A dual role reveals a monk's parallel destiny tied to the same battle against evil forces."
    ],
    difficulty: "Hard"
  },
  {
    id: "shiva",
    name: "Shiva",
    aliases: ["siva", "shiva movie"],
    emojis: ["🚲", "⛓️", "🎓"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVK4eyKtN6PuHPjTyf5StgZzWtUaHBLItzwGaMEmxBFejWKah8aAY08Q&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3BOLmYyg1vG3sQ45oUY04b1ViNf6onMd7ZEsp7AnzBQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_7UqU9ucqD-hlxMJMxEs5ZF4Ru0gef8LQgeGw1SKDg&s=10"],
    posterColors: ["#1e3a5a", "#08182b"],
    posterGlyph: "🚲",
    hero: "Nagarjuna",
    director: "Ram Gopal Varma",
    year: 1989,
    storyHints: [
      "A new college student refuses to bow to campus goons controlled by a corrupt student politician.",
      "A now-iconic bicycle-chain fight scene becomes the turning point of his rebellion."
    ],
    difficulty: "Medium"
  },
  {
    id: "manmadhudu",
    name: "Manmadhudu",
    aliases: ["manmadhudu movie"],
    emojis: ["🎨", "😱", "💘"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6GSMbh6UZq2SHZ0PqONrQ_XAYYXhVISYOJFfzf559g&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZAAvhhydo6Yqa1TIcBH_IZwbG7ejyCorvoq27pKPrw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoERSHdEZ8Vn_DXmobfhuy9hfqZFZRFxnAkkX-TQ8UcQ&s=10"],
    posterColors: ["#7a3a1e", "#2b1408"],
    posterGlyph: "🎨",
    hero: "Nagarjuna",
    director: "V. N. Aditya",
    year: 2002,
    storyHints: [
      "A charming painter with a fear of commitment keeps sabotaging his own budding romances.",
      "A woman finally challenges him to face the childhood trauma behind his fear of marriage."
    ],
    difficulty: "Easy"
  },
  {
    id: "hellobrother",
    name: "Hello Brother",
    aliases: ["hello brother movie"],
    emojis: ["🚙", "👯", "🕵️"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwg2sygf1h5ce9ofIzmIHvvoXiQ9PdINhfYldey0Aapw&s=10", "https://i.ytimg.com/vi/tv6vNWNgHD0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCT_TLh6RwXc8Lup_GpIFzQUv-pRg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6gQMl1C3-Wd5unsQVa4ZlTwY-2LKY5NT_iZk2R0XYZi4ccN_sd05UUmSJKqFIZrealRPvE2zHzdnWGOdAyCphijXp1L2g91Aq3lsfxD4&s=10"],
    posterColors: ["#3a5a1e", "#141a06"],
    posterGlyph: "👯",
    hero: "Nagarjuna",
    director: "S. V. Krishna Reddy",
    year: 1994,
    storyHints: [
      "A carefree man discovers he has a look-alike twin separated since childhood.",
      "The mix-up between the two brothers spirals into comic chaos and a hidden family secret."
    ],
    difficulty: "Easy"
  },
  {
    id: "bobbiliraja",
    name: "Bobbili Raja",
    aliases: ["bobbili raja movie"],
    emojis: ["👑", "🏹", "😤"],
    images: ["data:image/jpeg;base64,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", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPS-tG5VqbeyV_VsJg1kYQTSW34t16gCkDZ0mKZI3sw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qzfHq9EUgHcdtmRv7W_h5nRHbimcgeZMAu2DGGst_Q&s=10"],
    posterColors: ["#8a5a02", "#2b1a00"],
    posterGlyph: "🏹",
    hero: "Venkatesh",
    director: "Ram Gopal Varma",
    year: 1990,
    storyHints: [
      "Twin brothers separated at birth are raised worlds apart, one rich and one poor.",
      "Fate reunites them just as a family conspiracy threatens to destroy their inheritance."
    ],
    difficulty: "Medium"
  },
  {
    id: "nuvvunaakunachav",
    name: "Nuvvu Naaku Nachav",
    aliases: ["nuvvunaakunachav", "nuvvu naku nachav"],
    emojis: ["💑", "🎓", "😂"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6MgoRyIA0fAXG78AfLvobPtrUf8ug8AabrqQIa9ONw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg100S4fpPpXAJMzuCqSG52-sc7MMQvXAV1t98CZvuWQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVn89N5aYmhuFljglBwK-ozzoLFiKJjy6ZzzJ9xjHsg&s=10"],
    posterColors: ["#c2751e", "#3a2008"],
    posterGlyph: "💑",
    hero: "Venkatesh",
    director: "Vamsy",
    year: 2001,
    storyHints: [
      "A carefree young man's father conspires with a friend to arrange his marriage without his knowledge.",
      "He falls for the very woman his family had already picked out for him, unaware of the plan."
    ],
    difficulty: "Easy"
  },
  {
    id: "raja",
    name: "Raja",
    aliases: ["raja movie"],
    emojis: ["🤴", "❤️", "👨‍👩‍👧"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qZbk5H2BzH12QtcHEwtX3CGSmsGXYwSS-nmovIZnZA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HvOWqsdvKerZDCD8jPW8NIS5Ib6Q-urogU3TrQ_7FA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Eti5rVQKcAVJXf0nOiSl2qxpO9XiWRrhB0XBSuT3JA&s=10"],
    posterColors: ["#1e5a2b", "#082b12"],
    posterGlyph: "🤴",
    hero: "Venkatesh",
    director: "Muppalaneni Siva",
    year: 1999,
    storyHints: [
      "A well-meaning young man's marriage is arranged in haste, hiding an old family rivalry.",
      "He must win over his suspicious in-laws while unraveling a decades-old feud between two households."
    ],
    difficulty: "Medium"
  },
  {
    id: "pedarayudu",
    name: "Pedarayudu",
    aliases: ["peda rayudu"],
    emojis: ["🌾", "🏹", "👴"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocwFkq7eC7P8x-_H7-zmQwlK_mnZRyyQCDJWMewaIwg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRk6LmlbG0TJ--rNrNFEJF1GApjmx9syz0qWgPzjx1fg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEz9PJTjzq-Xu5_nJwwLLKafTe45SAPlCHlTSCdiTOjQ&s=10"],
    posterColors: ["#5a3a1e", "#2b1a08"],
    posterGlyph: "🌾",
    hero: "Mohan Babu",
    director: "Raviraja Pinisetty",
    year: 1995,
    storyHints: [
      "A respected village elder's word is law, until a rival faction challenges his authority over the land.",
      "His iron sense of justice is put to the test when his own family gets caught in the conflict."
    ],
    difficulty: "Medium"
  },
  {
    id: "baasha",
    name: "Baasha",
    aliases: ["basha", "baashha"],
    emojis: ["🚕", "🕶️", "🤐"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgzjz_zAG9CrnkAw3baN_XtSa6cgyVPlpODostCn32w&s=10", "https://pbs.twimg.com/media/FviVKfpX0AMVav4.jpg?format=jpg&name=thumb", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83veZhFDlQdQcxDSeECVxeKEhBv-9V6FvqZL7LJSTYA&s=10"],
    posterColors: ["#1e2b5a", "#08102b"],
    posterGlyph: "🕶️",
    hero: "Rajinikanth",
    director: "Suresh Krissna",
    year: 1995,
    storyHints: [
      "A mild-mannered auto-rickshaw driver in Chennai hides a violent, feared past as a Mumbai don.",
      "When his family is threatened by old enemies, his true identity comes roaring back."
    ],
    difficulty: "Medium"
  },
  {
    id: "sivaji",
    name: "Sivaji",
    aliases: ["sivaji the boss", "shivaji"],
    emojis: ["💰", "🕺", "🏗️"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5cO9FTDH9Zwp0vf88LQc0icf9sR8dJOInkAdH1x32Q&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVQRoH-bZmy7I2E01I_JfD9QCLb3f6seDFgy0dfumsg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrs055EIkZR1calo7ArqdxtpMLa_bbs8NuPg41qmhkb_GhnqJ7xSedBc&s=10"],
    posterColors: ["#7a1e4a", "#2b0818"],
    posterGlyph: "💰",
    hero: "Rajinikanth",
    director: "S. Shankar",
    year: 2007,
    storyHints: [
      "A software engineer returns from the US determined to build free hospitals and colleges for the poor.",
      "Corrupt businessmen and black money launderers conspire to strip him of everything he owns."
    ],
    difficulty: "Medium"
  },
  {
    id: "enthiran",
    name: "Enthiran",
    aliases: ["robo", "enthiran robo", "the robot"],
    emojis: ["❤️", "🧠", "💥"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePJ8713b0kxDoE49Ec3lfVBgZmu6suYThBfuGQduFIQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyp5h048cg-5P4foz9C1CZ39ACRD2eCgjPVo4nHXa2w&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmZJDx--8-oaP8-gENmXO6MTFba-kVAlrfoJrx8PSxg&s=10"],
    posterColors: ["#1e5a5a", "#082b2b"],
    posterGlyph: "🤖",
    hero: "Rajinikanth",
    director: "S. Shankar",
    year: 2010,
    storyHints: [
      "A brilliant scientist builds a humanoid robot that begins developing human emotions, including love.",
      "When reprogrammed with a evil chip, the robot multiplies into an army and turns against humanity."
    ],
    difficulty: "Hard"
  },
  {
    id: "Leo",
    name: "Leo",
    aliases: ["leo movie"],
    emojis: ["🏃", "🥍", "❤️"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye2kdfUBBwJ-Fb04P0L-l6rtnyrgXLaJJp5K4fqHcDA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGX8VReJxsk18bNkqnFKal3X48sHErDbF6zOLuWnuqLg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpJSgiJM2RITpfQWOksBT5IZLV5EY5x4_fOy0jROHWA&s=10"],
    posterColors: ["#c2751e", "#3a2008"],
    posterGlyph: "🥍",
    hero: "Vijay",
    director: "lokesh Kanagaraj",
    year: 2004,
    storyHints: [
      "A talented kabaddi player gets entangled in a small town's dangerous family feud.",
      "He poses as someone else to protect a woman fleeing a ruthless, controlling brother."
    ],
    difficulty: "Medium"
  },
  {
    id: "singam",
    name: "Singam",
    aliases: ["singam movie", "yamudu"],
    emojis: ["👮", "🦁", "🥊"],
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleMsBn8cOUx5GnXG2Wp-LryAv0JY5Ux-foSB0mVtRGQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQfWWuv4udr85r9iBvOmGGN5PvmvE8si7mkihDlrqDA&s=10", "https://masssuriya.wordpress.com/wp-content/uploads/2013/06/16b50-singham2-movie-latest-stills-4-629x417.jpg"],
    posterColors: ["#1e3a1e", "#081a08"],
    posterGlyph: "👮",
    hero: "Suriya",
    director: "Hari",
    year: 2010,
    storyHints: [
      "An honest, good-natured police officer in a small town is beloved by everyone in his village.",
      "A ruthless don from the city sets out to destroy him after he refuses to be corrupted."
    ],
    difficulty: "Easy"
  }
];

