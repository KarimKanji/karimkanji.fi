/* =========================================================================
   PORTFOLIO CONTENT
   Everything you see on the site comes from this file.

   Pictures: put them in the  images/  folder and write the path below,
   e.g.  images: ["images/abb-1.jpg", "images/abb-2.jpg"]
   Any path that doesn't exist yet shows a placeholder with that file name,
   so you can see exactly what to drop in where.
   Large landscape photos work best (around 2400 x 1500 px, JPG or WebP).

   Lines starting with "To add:" are gaps the LinkedIn export didn't cover.
   ========================================================================= */

window.PORTFOLIO = {
  name: "Karim",
  tagline: "Product & digital transformation",
  email: "you@yourdomain.com",              // replace
  github: "https://github.com/",            // replace with your profile

  hero: {
    title: "Karim",
    kicker: "Karim Kanji · Product & digital transformation · M.Sc. Aalto · EN / SV / FI",
    intro: "I turn complex technical problems into decisions people can act on, by starting with the people stuck inside them. This is the timeline of how I got here, starting with now. Keep scrolling to go back in time.",
    images: ["images/hero.jpg"]
  },

  /* One entry per chapter, oldest first. The site shows them newest first,
     so add a new experience at the end of this list. */
  chapters: [
    {
      id: "kauto",
      years: "2020 – 2021",
      title: "Volkswagen Group",
      role: "Project worker & spare parts salesman",
      org: "K Auto Oy · Volkswagen Center Vantaa",
      summary: "My first years of work were face to face with customers. I sold spare parts, worked in logistics and trained the seasonal workers who joined each year.",
      tags: ["Customer service", "Training", "Logistics"],
      images: ["images/kauto-1.jpg"],
      captions: ["Volkswagen Center Vantaa"],
      story: {
        lead: "Before any software, I learned what it's like to stand between a customer and a system that doesn't quite fit their question.",
        situation: "At Volkswagen Center Vantaa I worked across a sales project, logistics and the spare parts counter, where every request had to be translated into the right part number.",
        part: "I worked on a sales project and taught seasonal workers the job while working in logistics and at the parts counter.",
        steps: [
          { t: "Project work", d: "Jan – Sep 2020. Sales project, logistics, and training seasonal staff." },
          { t: "Parts sales",  d: "May – Aug 2021. Spare parts salesman at the Vantaa centre." }
        ],
        outcomes: ["To add: something you learned about customers here that you still use"],
        made: ["Customer service", "Training others", "Forklift certified"]
      }
    },
    {
      id: "erillisverkot",
      years: "2022 – 2025",
      title: "State Security Networks",
      role: "Data center trainee → ICT trainee → Junior systems specialist",
      org: "Suomen Erillisverkot",
      summary: "Three years inside the infrastructure behind Finland's critical networks: mapping a data center by hand, designing how its CMDB should be run, then building and teaching the systems.",
      tags: ["CMDB", "DCIM", "User guides", "Training"],
      images: ["images/erillisverkot-1.jpg", "images/erillisverkot-2.jpg"],
      captions: ["Data center documentation", "CMDB management model"],
      story: {
        lead: "A configuration database is only as good as the people who keep it up to date. Most of my work here was making that job easier for them.",
        situation: "Erillisverkot runs secure networks for Finland's public safety authorities. Its data center infrastructure needed to be documented, and its configuration management database (CMDB) needed a clear way of being managed.",
        part: "I started by documenting the data center and loading it into a DCIM system. As an ICT trainee I built a management model for the CMDB, which became my bachelor's thesis. As a junior systems specialist I developed the CMDB, handled configuration items and integrations, supported AI initiatives, ran technical trainings and wrote user guides.",
        steps: [
          { t: "Map",     d: "2022 · Data center trainee. Mapped devices, cabling and power, and fed the data into a DCIM system." },
          { t: "Model",   d: "2023 · ICT trainee. Designed a management model for the CMDB (bachelor's thesis). Also worked with the Turvapilvi security cloud team." },
          { t: "Build",   d: "2024 · Junior systems specialist. Developed the CMDB and DCIM integrations, configuration items and infrastructure installs." },
          { t: "Teach",   d: "2024 – 25 · Technical trainings and user guides, so others could keep the systems right." }
        ],
        outcomes: [
          "A CMDB management model, delivered as my bachelor's thesis",
          "A documented data center in a working DCIM system",
          "To add: how the trainings or guides changed day-to-day work"
        ],
        made: ["CMDB", "DCIM", "Configuration management", "Technical documentation", "ICT infrastructure"]
      }
    },
    {
      id: "tlk",
      years: "2023",
      title: "Culture",
      role: "Chief Culture Officer",
      org: "Tekniska Läroverkets Kamratförbund",
      summary: "Chaired the committee responsible for student culture: inclusive events, room for people to meet, and the wellbeing of everyone who came.",
      tags: ["Community", "Events", "Wellbeing"],
      images: ["images/tlk-1.jpg"],
      captions: ["TLK, the engineering students' association at Arcada"],
      storyImage: "images/tlk-rollup.jpg",
      storyCaption: "TLK roll-up banner",
      story: {
        lead: "Designing an event is designing an experience. You learn fast what makes people feel welcome, and what makes them leave.",
        situation: "TLK is the student association for Swedish-speaking technology students in Finland. Its events are where students meet, network and feel they belong.",
        part: "As CCO I chaired the culture committee. We planned and ran inclusive events and acted as welfare officers, responsible for attendees' wellbeing and for handling any problems on the night.",
        steps: [
          { t: "Plan",  d: "Events built for inclusion and conversation." },
          { t: "Host",  d: "Ran the events with the committee I chaired." },
          { t: "Care",  d: "Welfare officers for every attendee." }
        ],
        outcomes: ["To add: number of events, attendees, or a moment you're proud of"],
        made: ["Event management", "Leading a committee", "Welfare"]
      }
    },
    {
      id: "waumer",
      years: "2024 – 2025",
      title: "Waumer",
      role: "Full stack engineer",
      org: "Waumer · Aalto Design Factory",
      summary: "The world's first self-powered, IoT-enabled water meter. I built the app that shows people their water use, the data pipeline behind it, and the story we told at the final gala.",
      tags: ["IoT", "Mobile app", "Product story", "Team of the year"],
      images: ["images/waumer-meter.mp4", "images/waumer-1.jpg", "images/waumer-2.jpg", "images/waumer-3.jpg", "images/waumer-4.jpg", "images/waumer-5.jpg", "images/waumer-6.jpg", "images/waumer-7.jpg", "images/waumer-8.jpg"],
      captions: ["The meter, assembled and taken apart", "Waumer, the self-powered water meter", "Exploded view of the meter", "The energy-harvesting mechanism at the gala", "Harvester prototype up close", "Explaining how the meter powers itself", "At the Waumer stand during the gala", "Hosting our intro video", "Team of the year"],
      links: [{ label: "Watch the pitch (from 1:36:30)", url: "https://pdp.fi/gala25/" }],
      story: {
        lead: "A water meter that powers itself is only useful if people can understand what it's telling them. My job was to get the data from the pipe to their phone.",
        situation: "Waumer is a self-powered, IoT-enabled water meter with a patented energy-harvesting mechanism. It needed software that turns raw sensor readings into water information people can act on.",
        part: "I built the full-stack application and the IoT pipeline under it, working closely with the electrical and product designers. I also led the vision and execution of the final gala, designed the posters, graphics and final report, and hosted our intro video and livestream presentation.",
        steps: [
          { t: "Connect", d: "Chose LoRaWAN for device communication, with a gateway bridging sensor data to the internet." },
          { t: "Carry",   d: "A Python backend publishing over MQTT to a cloud-hosted HiveMQ broker." },
          { t: "Store",   d: "Firebase for the database and user authentication." },
          { t: "Show",    d: "A mobile app that presents water management details to the end user." },
          { t: "Tell",    d: "Led the final gala, designed the posters and report, and hosted the video and livestream pitch." }
        ],
        outcomes: [
          "Won team of the year",
          "Associated with the energy-harvesting mechanism patent",
          "A working path from sensor to app, end to end"
        ],
        made: ["LoRaWAN", "Python", "MQTT", "HiveMQ", "Firebase", "Mobile app", "Graphic design"]
      }
    },
    {
      id: "neppi",
      years: "Autumn 2024",
      title: "Pourot",
      role: "Smart cocktail scale · team project",
      org: "NEPPI · Aalto University",
      summary: "A smart scale and app that make cocktails at home easy: it recognises your bottles, suggests what you can make, and weighs every pour. Designed to feel like a speakeasy, not a gadget.",
      tags: ["IoT product", "Computer vision", "User survey", "Industrial design"],
      images: ["images/neppi-1.jpg", "images/neppi-7.jpg", "images/neppi-2.jpg", "images/neppi-8.jpg", "images/neppi-9.jpg", "images/neppi-3.jpg", "images/neppi-4.jpg"],
      captions: ["Pourot on the home bar", "Our poster for the NEPPI Expo 2024", "Pitching Pourot at the NEPPI Expo 2024", "Welcome to the bar: the stand's lettering", "Exploded view of the scale", "Load cells and microcontroller inside the scale", "Bottle detected: confirm and add to stock"],
      links: [{ label: "About the NEPPI course", url: "https://neppi.aalto.fi/" }],
      story: {
        lead: "People told us cocktail apps were slow, outdated and ugly. So we designed Pourot to feel like walking into a speakeasy, and let a scale do the measuring.",
        situation: "Making cocktails at home means manual measuring, guessing what you have, and trial and error. Less experienced people find it daunting, and ingredients get thrown away because nobody knows how to use them.",
        part: "Built in Networked Partnering and Product Innovation (NEPPI) at Aalto, in a team of five with Anssi Moilanen, Sanni Mustonen, Antti Ojala and Elina Takamäki, I pitched and demoed Pourot to visitors at the NEPPI Expo 2024. To add: which parts of the build you led.",
        steps: [
          { t: "Ask",      d: "An online survey reaching 328 members of the Aalto Cocktail Community, with 25 responses, plus open discussion in the community." },
          { t: "Imagine",  d: "A user scenario: a 29-year-old host who finds cocktails daunting makes four perfect drinks for game night." },
          { t: "Require",  d: "Design requirements per touchpoint, so the app, the scale and the cloud feel like one premium product." },
          { t: "Shape",    d: "A minimal wooden scale designed for Don Norman's reflective level, with birch finishes and 105 mm bottle plates." },
          { t: "Build",    d: "Four load cells and amplifiers on a Seeeduino with WiFi, and a laser-cut plywood prototype." },
          { t: "See",      d: "A YOLOv11 computer vision model that recognises bottles from the phone camera, trained on public and team-shot images." },
          { t: "Price",    d: "€108 to make in small batches, €299 to buy: a 52.9% margin for a made-to-order Finnish design object." }
        ],
        outcomes: [
          "A working prototype of scale, app and cloud, shown at the NEPPI Expo 2024",
          "User research that set the product's look: warm, dark and discreet, like a cocktail bar",
          "A full desirability, feasibility and viability case, published under CC BY-SA 4.0"
        ],
        made: ["User survey", "Scenarios", "Python", "YOLOv11", "Seeeduino", "Load cells", "WiFi", "Laser-cut plywood"]
      }
    },
    {
      id: "specification",
      years: "2024 – 2025",
      title: "ABB",
      role: "Student consultant → Specification management trainee",
      org: "ABB · Aalto IDBM",
      summary: "How should ABB's specification management tool evolve? I interviewed people from Finland to Singapore, shaped four visions for its future, checked each one could really be built, and then helped take the chosen direction towards scale.",
      tags: ["User research", "Design visions", "Figma prototypes", "Technical feasibility"],
      images: ["images/spec-1.jpg", "images/spec-2.jpg", "images/spec-3.jpg"],
      captions: ["Specifier, the tool we helped evolve · image: Reaktor", "Four design visions", "Clickable Figma prototype"],
      links: [{ label: "The project, by Reaktor", url: "https://www.reaktor.com/work/abb" }],
      story: {
        lead: "Specifications pass through many hands in many countries. I set out to see where they actually break down, imagine what the tool could become, and make sure every idea could really be built.",
        situation: "ABB Motion builds motors and drives to customer specifications. Clarifying those specifications across international engineering teams was slow and hard to trace, and the tool supporting it needed a direction for its future.",
        part: "I joined through Aalto's IDBM industry project in a team with business and design backgrounds, where I was largely responsible for technical feasibility. I then continued as a trainee, moving the concept into scaling and implementation with Reaktor, ABB's development partner on the platform.",
        steps: [
          { t: "Listen",    d: "Stakeholder interviews in Finland and at ABB Singapore, and later across IEC LV Motors, System Drives, Large Motors & Generators and NEMA (U.S.)." },
          { t: "Map",       d: "How specification and clarification really worked across teams, and where it broke down, using internal and external journey maps." },
          { t: "Envision",  d: "Four concepts, each describing a different future for the tool." },
          { t: "Check",     d: "Technical feasibility for every concept, from REST API design to system integrations." },
          { t: "Prototype", d: "Extensive clickable Figma prototypes, tested in focus groups and iterated." },
          { t: "Present",   d: "Findings and design recommendations to ABB's internal stakeholders, informing roadmap decisions." },
          { t: "Scale",     d: "An approach for rolling the product out across divisions and business areas." }
        ],
        outcomes: [
          "Four design visions for the future of the tool",
          "Recommendations that formed the basis of ABB's continued work and informed its roadmap",
          "An approach for scaling the product across divisions and business areas",
          "User-journey mapping adopted as the main method for iterating the product"
        ],
        made: ["Stakeholder interviews", "Journey mapping", "Concept design", "Figma", "Focus groups", "REST API design"]
      }
    },
    {
      id: "abb",
      years: "2025 – now",
      title: "Collaboration Engine",
      role: "Master's thesis",
      org: "ABB",
      summary: "My master's thesis: a standalone collaboration service, designed from 24 interviews, 72 survey answers and two co-design workshops, and verified against live Salesforce.",
      tags: ["Design science", "Qualitative research", "Prototype", "Salesforce"],
      images: ["images/abb-1.jpg", "images/abb-2.jpg", "images/abb-3.jpg"],
      captions: ["Co-design workshop", "Collaboration Engine architecture", "Prototype running against Salesforce"],
      story: {
        lead: "The same three problems showed up no matter how I asked: clarifications scattered everywhere, decisions nobody could trace, and project information out of sync between systems.",
        situation: "ABB's specification management platform is the case. Engineering teams around the world clarify specifications across several systems, and the friction slows every order.",
        part: "I synthesised all the fieldwork from my earlier roles on the project, turned it into design requirements, defined the architecture of the Collaboration Engine, and built a working prototype.",
        steps: [
          { t: "Gather",     d: "24 semi-structured interviews, 72 questionnaire responses, two co-design workshops and direct observation across ABB Motion divisions." },
          { t: "Triangulate",d: "Kept only the problems that held across all four sources: fragmented clarification, poor decision traceability, and out-of-sync project information." },
          { t: "Require",    d: "Translated the findings into design requirements." },
          { t: "Architect",  d: "Defined the Collaboration Engine: a standalone service that separates collaboration logic from individual applications." },
          { t: "Verify",     d: "Built a working prototype and verified it against a live Salesforce environment." }
        ],
        outcomes: [
          "One validated analysis across four data sources",
          "A modular, system-independent collaboration service, architecturally defined",
          "A working prototype verified against live Salesforce"
        ],
        made: ["Qualitative case study", "Design science research", ".NET 8", "Blazor Server", "PostgreSQL", "Salesforce REST API"]
      }
    },
    {
      id: "arcada",
      years: "2025",
      title: "Teaching",
      role: "Teacher, Teamwork & Innovation",
      org: "Arcada University of Applied Sciences",
      summary: "Part of the teaching team for a course every Arcada student takes, about working, and thriving, in multidisciplinary teams.",
      tags: ["Design thinking", "Agile & Scrum", "Teamwork"],
      images: ["images/arcada-1.jpg"],
      captions: ["Teamwork & Innovation course"],
      story: {
        lead: "Teaching design thinking to students from every field is a good test of whether you can explain it without the jargon.",
        situation: "Teamwork & Innovation is a mandatory course at Arcada. It gives every student the basics of working in multidisciplinary teams.",
        part: "I was part of the teaching team, covering topics such as design thinking, agile, sprints and Scrum, team strengths and weaknesses, and argumentation and rhetoric.",
        steps: [
          { t: "Design thinking", d: "Framing problems around people." },
          { t: "Agile & Scrum",   d: "Working in sprints." },
          { t: "Teams",           d: "Strengths and weaknesses within teams." },
          { t: "Rhetoric",        d: "Argumentation and making the case." }
        ],
        outcomes: ["To add: group size, or what students said"],
        made: ["Teaching", "Lecturing", "Design thinking", "Scrum"]
      }
    },
    {
      id: "athena",
      years: "May 2026",
      title: "Athena",
      role: "Solo hackathon project",
      org: "Aalto Defence × Junction",
      summary: "A real-time picture of any area on earth, built in one weekend from open data only, with an AI analyst that can only speak from what's on the map.",
      tags: ["Hackathon", "Open data", "AI analyst", "Maps"],
      images: ["images/athena-1.jpg", "images/athena-2.jpg", "images/athena-3.jpg"],
      captions: ["Area overview", "Generated situation report", "Vision scan of the map"],
      story: {
        lead: "An analyst under time pressure needs to trust what they're looking at. So every answer in Athena comes from data you can see, with every source's status shown.",
        situation: "ATHENA (All-Source Threat Evaluation & Network Analysis) does real-time Intelligence Preparation of the Battlefield for any area on earth, using open-source data only. No classified sources.",
        part: "I built it solo over the Aalto Defence × Junction hackathon weekend, with Claude Code, from data pipeline to interface and deployment.",
        steps: [
          { t: "Gather",  d: "Each area load pulls OpenStreetMap, Open-Meteo, CelesTrak, FMI and Statistics Finland in parallel." },
          { t: "Ground",  d: "An AI analyst (Claude) that answers strictly from the loaded terrain, weather, infrastructure, demographics and satellite passes." },
          { t: "Report",  d: "On-demand situation reports structured around military doctrine (OAKOC, ASCOPE)." },
          { t: "Assess",  d: "Route feasibility for specific military vehicles, and a vision scan that flags objects of interest on the map." },
          { t: "Trust",   d: "Full source transparency, with per-source status and latency tracking." },
          { t: "Ship",    d: "Deployed on Vercel with a server-side API proxy, so all AI calls stay server-side." }
        ],
        outcomes: [
          "A working, deployed tool in one weekend, built solo",
          "Finnish-specific layers: FMI observations and municipal demographics",
          "Every answer traceable to an open source"
        ],
        made: ["React", "TypeScript", "Mapbox GL", "Vite", "Claude (Haiku + Sonnet)", "Vercel Edge Functions", "Claude Code"]
      }
    },
    {
      id: "aalto",
      years: "2026 – now",
      title: "Research",
      role: "Research assistant",
      org: "Aalto University",
      summary: "Studying how the design profession is defined, by analysing designer job ads in four Nordic languages.",
      tags: ["Thematic analysis", "Design profession", "EN / FI / SV / DA"],
      images: ["images/aalto-1.jpg"],
      captions: ["Coding job advertisements"],
      story: {
        lead: "What do employers actually mean when they ask for a designer? The job ads say more than you'd think.",
        situation: "Prof. Tua Björklund and Dr. Paulo Dziobczenski research how the design profession is defined through job advertisements across the Nordic labour market.",
        part: "I thematically analyse and code designer job ads in English, Finnish, Swedish and Danish to map the skills, roles and expectations employers set for designers.",
        steps: [
          { t: "Collect", d: "Designer job ads from across the Nordics." },
          { t: "Code",    d: "Thematic coding in four languages." },
          { t: "Map",     d: "Skills, roles and expectations employers set." }
        ],
        outcomes: ["Ongoing, started November 2026"],
        made: ["Thematic analysis", "Qualitative coding", "English, Finnish, Swedish, Danish"]
      }
    }
  ],

  /* Education, oldest first here; the site shows the newest first.
     "Read the story" opens a vertical timeline of the projects from that degree:
     list them NEWEST FIRST, so scrolling down goes further back in time.
     ref: "<chapter id>" links a project to its full chapter story and borrows its first image.
     image: "images/....jpg" overrides the picture. */
  education: [
    {
      id: "ruk",
      years: "2019",
      title: "Officer School",
      role: "Reserve Officer Degree · Military & strategic leadership",
      org: "Reserve Officer School (RUK), Hamina",
      summary: "Platoon leader training in the infantry. The first place I had to lead a team under pressure, and plan for the people doing the work.",
      tags: ["Leadership", "Infantry", "Platoon leader"],
      images: ["images/ruk-1.jpg"],
      captions: ["Me as platoon leader (front, centre) with the leaders group and the group leaders of my platoon · Hamina"],
      lead: "Leading a platoon teaches you quickly that a plan only works if everyone carrying it out understands it.",
      facts: [
        { k: "Degree", v: "Reserve Officer Degree" },
        { k: "Line", v: "Infantry (Jääkärilinja, Kärki)" },
        { k: "Course", v: "Kärkikomppania, course 254" },
        { k: "When", v: "May – Sep 2019" }
      ],
      projects: [
        { year: "2019", kind: "Training", title: "Platoon leader", image: "images/ruk-1.jpg", text: "Reserve officer training as a platoon leader in the infantry: planning, leading and looking after a team in the field. In the photo I'm front and centre, with the platoon's leaders group and the leaders of each of its groups." }
      ]
    },
    {
      id: "arcada",
      years: "2020 – 2023",
      title: "Arcada",
      role: "Bachelor's degree, Information Technology",
      org: "Arcada University of Applied Sciences",
      summary: "Graduated with honours, half a year ahead of schedule, with a thesis built on real infrastructure work at State Security Networks.",
      tags: ["IT", "Graduated with honours", "4.68 / 5"],
      images: ["images/arcada-edu.jpg"],
      captions: ["Arcada, Helsinki"],
      lead: "Four years of engineering, finished early, and a student culture I got to help shape.",
      facts: [
        { k: "Grade", v: "4.68 / 5" },
        { k: "Credits", v: "245 of 240 ECTS" },
        { k: "Thesis", v: "Grade 4 / 5" },
        { k: "Honours", v: "Martha & Albin Löfgren culture fund scholarship for excellent studies" }
      ],
      projects: [
        { year: "2023", kind: "Bachelor's thesis", title: "CMDB management model", ref: "erillisverkot", text: "A management model for the configuration management database at State Security Networks, written while working there as an ICT trainee." },
        { year: "2023", kind: "Student life", title: "Chief Culture Officer", ref: "tlk", text: "Chaired the culture committee of TLK, the engineering students' association at Arcada: inclusive events and the wellbeing of everyone who came." },
        { year: "2020 – 2022", kind: "Course project", sample: true, title: "To add", text: "Add a course project from Arcada here, with a picture: what you built, for whom, and what you learned." }
      ]
    },
    {
      id: "aalto",
      years: "2024 – 2026",
      title: "Aalto",
      role: "M.Sc. (Tech), International Design Business Management",
      org: "Aalto University",
      summary: "Where design, business and technology met for me. Almost everything on this timeline since 2024 started as an Aalto project.",
      tags: ["IDBM", "Space Science & Technology minor", "4.48 / 5"],
      images: ["images/aalto-edu.jpg"],
      captions: ["Aalto University, Otaniemi"],
      links: [{ label: "Space Science & Technology minor", url: "https://www.aalto.fi/en/minors/space-science-and-technology-minor" }],
      lead: "IDBM puts designers, business students and engineers in one team. I was usually the one making sure the idea could actually be built.",
      facts: [
        { k: "Degree", v: "Master of Science (Technology)" },
        { k: "Programme", v: "International Design Business Management" },
        { k: "Minor", v: "Space Science & Technology" },
        { k: "Grade", v: "4.48 / 5" }
      ],
      projects: [
        { year: "2025 – 2026", kind: "Master's thesis", title: "Collaboration Engine", ref: "abb", text: "A standalone collaboration service for ABB, designed from 24 interviews, 72 survey answers and two co-design workshops, and verified against live Salesforce." },
        { year: "May 2026", kind: "Hackathon", title: "Athena", ref: "athena", text: "Built solo in one weekend at Aalto Defence × Junction: a real-time picture of any area on earth from open data, with an AI analyst grounded in what's on the map." },
        { year: "2024 – 2025", kind: "Product development project", title: "Waumer", ref: "waumer", text: "The full-stack app and IoT pipeline for a self-powered water meter. Team of the year." },
        { year: "2024 – 2025", kind: "IDBM industry project", title: "ABB Specifier", ref: "specification", text: "Interviews from Finland to Singapore, four design visions and the feasibility work behind the future of ABB's specification tool." },
        { year: "Autumn 2024", kind: "NEPPI course", title: "Pourot", ref: "neppi", text: "A smart cocktail scale and app, from user survey to working prototype, pitched at the NEPPI Expo 2024." }
      ]
    }
  ],

  approach: {
    title: "How I work",
    images: ["images/approach.jpg"],
    principles: [
      { t: "Go where the work is", d: "Interviews, workshops and watching people at work, before any solution. The problems that hold up across every method are the ones worth solving." },
      { t: "Make it decidable", d: "I turn messy technical findings into clear requirements and options that people can make decisions on." },
      { t: "Prototype to learn", d: "Clickable prototypes and working builds, tested early with the people who will use them." }
    ]
  },

  contact: {
    title: "Say hello",
    text: "I'm looking for product and transformation work where research, design and engineering sit at the same table. I work in English, Swedish and Finnish.",
    images: ["images/contact.jpg"]
  }
};
