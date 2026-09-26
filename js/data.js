/**
 * FROMSKRACH PRODUCTIONS - DATA REPOSITORY
 * 
 * Centralized data source for projects, capabilities, production milestones,
 * team roster, and testimonials. All entries are structured for easy editing
 * and CMS integration.
 * 
 * Brand: FromSkrach Productions
 * Slogan: "Built From Scratch. Made to Last."
 */

export const BRAND_DATA = {
  name: "FromSkrach Productions",
  shortName: "FromSkrach",
  tagline: "Built From Scratch. Made to Last.",
  domain: "fromskrach.com",
  email: "hello@fromskrach.com",
  opsEmail: "operations@fromskrach.com",
  phone: "+91 97037 00927",
  altPhone: "+91 81437 00927",
  handle: "@fromskrachproductions",
  altHandle: "@fromskrach.pro",
  hashtags: [
    "#FromSkrach",
    "#FromSkrachProductions",
    "#BuiltFromSkrach",
    "#SkrachEvents",
    "#SkrachMoments",
    "#CorporateEvents",
    "#WeddingEvents",
    "#EventManagement"
  ],
  cities: [
    "Mumbai", "Pune", "Bangalore", "Alsisar", "Sindhudurg",
    "Thiruvananthapuram", "Mahabaleshwar", "Bhubaneswar", "Hyderabad", "Raipur", "Nagpur", "Pohradevi"
  ],
  stats: [
    { value: "10+", label: "CITIES ACROSS INDIA", detail: "Proven pan-India logistics & operational footprint" },
    { value: "100K+", label: "FOOTFALL MANAGED", detail: "High-density crowd management and public security" },
    { value: "0", label: "SAFETY COMPROMISES", detail: "Rigid risk mitigation and power redundancy protocols" },
    { value: "100%", label: "ON-SCHEDULE DELIVERIES", detail: "Every cue, every gate, every door opens precisely on time" }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "navy-day",
    title: "Indian Navy Day 2025",
    category: "Public Scale & Defense Protocol",
    location: "Sindhudurg, Maharashtra",
    year: "2025",
    collaborator: "In collaboration with E-Factor Experiences Ltd. for the Indian Navy",
    image: "assets/images/project-navy-day.webp",
    thumb: "assets/images/project-navy-day-thumb.webp",
    summary: "Large-scale operational demonstration executed in a high-security coastal defense environment demanding absolute precision, strict safety compliance, and inter-agency coordination.",
    challenge: "Operating within a live defense perimeter with unpredictable maritime winds, tide fluctuations, and multi-tier state protocol security.",
    solution: "Engineered weather-hardened power redundancy, calibrated VIP ingress lines, and maintained 100% fail-safe communications across maritime and ground logistics.",
    dimensions: {
      stageWidth: "65m Coastal Front",
      crowdZone: "15,000+ Dignitaries & Public",
      buildWindow: "96 Hours Round-the-Clock",
      powerRedundancy: "100% Dual Synchronized Grid"
    },
    metrics: [
      { label: "Security Clearance", value: "Level 1 Protocol" },
      { label: "Waterfront Span", value: "1.2 km Perimeter" },
      { label: "Execution Uptime", value: "100% Zero Delay" }
    ],
    tags: ["Government", "Maritime", "High-Security", "Mega Event"]
  },
  {
    id: "magnetic-fields",
    title: "Magnetic Fields Festival",
    category: "Festivals & Boutique Arts",
    location: "Alsisar Mahal, Rajasthan",
    year: "2024–2025",
    collaborator: "In collaboration with Kickin Experiences",
    image: "assets/images/project-magnetic-fields.webp",
    thumb: "assets/images/project-magnetic-fields-thumb.webp",
    summary: "India's premier boutique music and arts festival set against the historic architecture of a 17th-century Rajasthani palace, balancing heritage preservation with cutting-edge experiential design.",
    challenge: "Preserving delicate palace masonry while rigging multi-tonne audio-visual trusses, laser arrays, and managing high-density immersive festival zones across heritage courtyards and desert sands.",
    solution: "Constructed free-standing load-dispersing scaffold networks, synchronized multi-stage acoustics to eliminate spillover, and implemented fluid crowd-path routing through historic gateways.",
    dimensions: {
      stageWidth: "4 Stage Zones + Desert Bedouin",
      crowdZone: "Boutique Global Audience",
      buildWindow: "120 Hours Heritage Protocol",
      powerRedundancy: "Isolated Clean-Audio Power Lines"
    },
    metrics: [
      { label: "Stage Environments", value: "4 Distinct Zones" },
      { label: "Heritage Impact", value: "Zero Structural Drill" },
      { label: "Continuous Run", value: "72 Hours Live" }
    ],
    tags: ["Music Festival", "Heritage Venue", "Multi-Stage", "Experiential"]
  },
  {
    id: "mahaparyatan-utsav",
    title: "Mahaparyatan Utsav",
    category: "Government & Cultural Tourism",
    location: "Maharashtra",
    year: "2024",
    collaborator: "Maharashtra Tourism Department",
    image: "assets/images/project-mahaparyatan.webp",
    thumb: "assets/images/project-mahaparyatan-thumb.webp",
    summary: "Flagship state tourism festival designed to celebrate regional culture, crafts, and performing arts in a high-footfall, dynamic public setting requiring rapid real-time adaptability.",
    challenge: "Massive public footfall with diverse demographic movement, complex vendor clusters, continuous live performance stages, and municipal infrastructure constraints.",
    solution: "Designed wide-channel crowd dispersal corridors, centralized backstage technical command, and staged rolling power grids for seamless multi-day operations.",
    dimensions: {
      stageWidth: "42m Cultural Stage",
      crowdZone: "50,000+ Daily Footfall",
      buildWindow: "72 Hours Mobilization",
      powerRedundancy: "Grid Tied + 3x Backup Gensets"
    },
    metrics: [
      { label: "Daily Attendees", value: "50,000+" },
      { label: "Vendor Touchpoints", value: "85+ Coordinated" },
      { label: "Incident Rate", value: "0 Security Flaws" }
    ],
    tags: ["State Tourism", "Mega Gathering", "Culture", "Crowd Flow"]
  },
  {
    id: "sant-sevalal-jayanti",
    title: "Sant Sevalal Maharaj Jayanti",
    category: "Mass Congregation & Rural Logistics",
    location: "Pohradevi, Maharashtra",
    year: "2024",
    collaborator: "State & Temple Trust Authorities",
    image: "assets/images/project-pohradevi.webp",
    thumb: "assets/images/project-pohradevi-thumb.webp",
    summary: "Large-scale religious and cultural gathering drawing over 100,000 devotees to remote terrain, demanding monumental temporary infrastructure and fail-safe safety architecture.",
    challenge: "Extreme logistical constraints in remote geography, limited grid power, vast unpaved terrain, and high-density emotional crowd dynamics.",
    solution: "Constructed heavy-duty dome shelters, laid extensive temporary power networks, engineered barricade pressure-relief zones, and deployed an agile on-ground crew.",
    dimensions: {
      stageWidth: "55m Main Congregation Stage",
      crowdZone: "100,000+ Devotee Capacity",
      buildWindow: "144 Hours Heavy Fabrication",
      powerRedundancy: "Dedicated Diesel Plant Farm"
    },
    metrics: [
      { label: "Total Devotees", value: "100,000+" },
      { label: "Shelter Footprint", value: "65,000 sq.ft Covered" },
      { label: "Safety Record", value: "100% Zero Stampede" }
    ],
    tags: ["Mega Gathering", "Remote Terrain", "Structural Engineering", "Public Safety"]
  },
  {
    id: "cognizant-awards",
    title: "Cognizant Annual Excellence Awards",
    category: "Corporate & Enterprise Excellence",
    location: "Pune / Mumbai",
    year: "2024",
    collaborator: "In collaboration with Kickin Experience and STCH",
    image: "assets/images/project-cognizant.webp",
    thumb: "assets/images/project-cognizant-thumb.webp",
    summary: "High-octane enterprise celebration and global leadership awards ceremony characterized by pixel-perfect visual timing, seamless AV switching, and executive stage design.",
    challenge: "Zero tolerance for technical or audiovisual glitches during live executive presentations, time-critical award cueing, and sophisticated hybrid live-streaming.",
    solution: "Integrated dual-redundant 4K LED processors, automated DMX stage lighting presets calibrated for broadcast, and rehearsed split-second runner and trophy protocols.",
    dimensions: {
      stageWidth: "28m Seamless Ultra-Wide LED",
      crowdZone: "2,500 Corporate Attendees",
      buildWindow: "18 Hours Overnight Turnover",
      powerRedundancy: "Online UPS + Studio-Grade Power"
    },
    metrics: [
      { label: "Display Resolution", value: "Native 8K Canvas" },
      { label: "Award Transitions", value: "Sub-Second Accuracy" },
      { label: "Executive Feedback", value: "Flawless Execution" }
    ],
    tags: ["Corporate", "Awards", "Precision AV", "Broadcasting"]
  },
  {
    id: "bismil-ki-mehfil",
    title: "Bismil Ki Mehfil Tour",
    category: "Live Concerts & Sufi Experiences",
    location: "Bhubaneswar",
    year: "2024",
    collaborator: "In collaboration with Asma Live",
    image: "assets/images/project-bismil.webp",
    thumb: "assets/images/project-bismil-thumb.webp",
    summary: "Atmospheric live Sufi and contemporary musical production crafted to bridge intimate spiritual artistry with arena-scale acoustic clarity and mood choreography.",
    challenge: "Tuning challenging venue acoustics to capture nuanced acoustic folk instruments alongside powerful vocal dynamics without harsh reflections or feedback.",
    solution: "Acoustically treated reflection surfaces, calibrated line-array speaker timing to the millisecond, and synchronized warm amber atmospheric lighting to musical movements.",
    dimensions: {
      stageWidth: "22m Tiered Sufi Stage",
      crowdZone: "3,500 Engaged Music Lovers",
      buildWindow: "24 Hours Sound & Rig Load-In",
      powerRedundancy: "Independent Audio Transformer"
    },
    metrics: [
      { label: "Acoustic Clarity", value: "105 dB Clean SPL" },
      { label: "Lighting Palette", value: "Warm Tungsten & Amber" },
      { label: "Audience Retention", value: "Full-Show Standing" }
    ],
    tags: ["Concert", "Acoustics", "Sufi Music", "Lighting Design"]
  }
];

export const METHOD_STAGES = [
  {
    number: "01",
    code: "LSTN",
    name: "LISTEN",
    headline: "Deconstruct the Brief Before Drawing a Single Line",
    tapeMeasurement: "100mm",
    description: "Every build begins by listening. We dismantle the vision into raw parameters: brand intent, human audience psychology, spatial limits, and emotional payoff. We don't bring canned solutions; we start from scratch.",
    deliverables: ["Creative Manifesto", "Spatial Envelope Audit", "Risk & Constraint Map", "Aesthetic Blueprint"],
    status: "SPEC LOCKED"
  },
  {
    number: "02",
    code: "MSR",
    name: "MEASURE",
    headline: "Laser Precision Across Geography, Load & Logistics",
    tapeMeasurement: "250mm",
    description: "Measurement is our core discipline. We measure physical millimeter sightlines, structural truss tolerances, ingress/egress velocities, acoustic reflection times, and power wattage requirements.",
    deliverables: ["AutoCAD Technical Layout", "Structural Rigging Certs", "Acoustic Dispersion Mapping", "Kilowatt Power Plan"],
    status: "TOLERANCE ±2mm"
  },
  {
    number: "03",
    code: "CNCPT",
    name: "CONCEPT",
    headline: "Transform Raw Space Into an Unforgettable Narrative",
    tapeMeasurement: "450mm",
    description: "We design environments that grip people the second they step in. From customized stage architecture to theatrical lighting palettes, the concept reflects identity without ever feeling generic.",
    deliverables: ["3D Photorealistic Pre-Viz", "Material & Texture Boards", "Show Flow Choreography", "Motion & Lighting Scripts"],
    status: "RENDER APPROVED"
  },
  {
    number: "04",
    code: "BLD",
    name: "BUILD",
    headline: "Fabrication, Engineering & On-Ground Craftsmanship",
    tapeMeasurement: "650mm",
    description: "The workshop meets the production floor. Custom CNC fabrication, heavy steel scaffolding, line-array audio hangs, and high-definition video panels are assembled by seasoned technicians under strict engineering oversight.",
    deliverables: ["Custom Scenic Fabrication", "Truss & Hoist Installation", "AV Network Infrastructure", "Safety Zone Barricading"],
    status: "ON SCHEDULE"
  },
  {
    number: "05",
    code: "CHK",
    name: "CHECK",
    headline: "No Room for Errors: The Triple-Redundancy Audit",
    tapeMeasurement: "850mm",
    description: "Before a single guest touches the venue, every breaker, cable, cue, clamp, and egress lane is inspected, load-tested, and certified. We simulate power outages, test backup generators, and dry-run every cue.",
    deliverables: ["Full Emergency Dry-Run", "Dual-Generator Sync Test", "Decibel & Lighting Cue Lock", "Fire & Security Sign-off"],
    status: "ALL SYSTEMS GO"
  },
  {
    number: "06",
    code: "DLVR",
    name: "DELIVER",
    headline: "The Room Opens. The Lights Strike. The Memory Is Made.",
    tapeMeasurement: "1000mm",
    description: "Doors open. The house goes dark. Bass kicks in. The crowd feels what was once only an empty space. We manage the show quietly, invisibly, and flawlessly from backstage command.",
    deliverables: ["Live Stage Management", "Real-Time Show Calling", "VIP Ingress Operations", "Post-Event Handover"],
    status: "EXPERIENCE LIVE"
  }
];

export const CAPABILITIES_DATA = [
  {
    id: "corporate",
    code: "CAP-01",
    title: "Corporate & Enterprise",
    tagline: "Precision execution for global enterprise benchmarks",
    scope: "Annual leadership summits, global partner conferences, high-stakes award galas, and investor symposiums.",
    specs: {
      scale: "500 to 10,000+ Delegates",
      engineering: "Broadcast-grade AV switching, studio lighting, teleprompter arrays, hybrid webcasting",
      footprint: "Multi-breakout hotels, convention centers, bespoke temporary pavilions"
    },
    keyFeature: "Zero-latency technical execution where executive presentation and brand prestige cannot falter."
  },
  {
    id: "weddings",
    code: "CAP-02",
    title: "Luxury Wedding Experiences",
    tagline: "Bespoke architectural environments for once-in-a-lifetime milestones",
    scope: "Grand destination weddings, palace transformations, bespoke mandap engineering, and themed sangeet productions.",
    specs: {
      scale: "200 to 3,000+ Guests",
      engineering: "Theatrical lighting, custom scenic fabrication, weather-sealed transparent domes, floral load engineering",
      footprint: "Palace courtyards, beachfronts, private estates, hill resorts"
    },
    keyFeature: "Intimate warmth coupled with industrial-grade technical stability and seamless hospitality logistics."
  },
  {
    id: "activations",
    code: "CAP-03",
    title: "Brand Activations & Experiential",
    tagline: "Tangible brand worlds that command social attention and cultural currency",
    scope: "Product launches, interactive pop-ups, immersive media corridors, influencer showcases, and experiential pavilions.",
    specs: {
      scale: "High-density pedestrian flow, 1,000s daily interactions",
      engineering: "Interactive sensors, kinetic lighting, projection mapping, custom tactile fabrication",
      footprint: "Malls, open public plazas, trade expos, festival grounds"
    },
    keyFeature: "Built to stop passersby in their tracks and convert passive onlookers into active brand advocates."
  },
  {
    id: "festivals",
    code: "CAP-04",
    title: "Festivals & Live Concerts",
    tagline: "High-voltage multi-stage energy engineered with safety at its core",
    scope: "Boutique arts festivals, multi-day music gatherings, arena concert tours, and cultural celebrations.",
    specs: {
      scale: "3,000 to 50,000+ Attendees",
      engineering: "Multi-tier line arrays, delay towers, moving-head laser arrays, pyrotechnic safety, barricade engineering",
      footprint: "Palaces, open fields, amphitheaters, sports arenas"
    },
    keyFeature: "Sonic clarity across every row with crowd-flow safety protocols tested against maximum surges."
  },
  {
    id: "government",
    code: "CAP-05",
    title: "Government & Public Scale",
    tagline: "High-security protocol management and massive public crowd infrastructure",
    scope: "Defense demonstrations, state tourism festivals, mega religious congregations, and civic inaugurations.",
    specs: {
      scale: "10,000 to 100,000+ Attendees",
      engineering: "Heavy structural shelters, perimeter CCTV networks, command center feeds, mass evacuation routes",
      footprint: "Coastal waterfronts, rural pilgrim centers, civic maidans"
    },
    keyFeature: "Strict multi-agency protocol adherence with failsafe power, medical ingress, and crowd management."
  }
];

export const BTS_TIMELINE = [
  {
    time: "08:00 AM",
    phase: "EMPTY SPACE",
    tape: "000mm",
    title: "Laser Grid & Physical Floor Marking",
    image: "assets/images/bts-venue-empty.webp",
    detail: "The production team enters an empty hall or bare terrain. Laser meters mark the primary stage axis, audience sightlines, safety clear zones, and cable trenches with high-visibility chalk and tape."
  },
  {
    time: "12:00 PM",
    phase: "STRUCTURE",
    tape: "200mm",
    title: "Truss Rigging & Scaffolding Erection",
    image: "assets/images/bts-truss-rigging.webp",
    detail: "Heavy aluminum box truss is bolted and inspected. Electric chain hoists lift roof grids. Base plates and ballast water weights are mathematically verified for wind loads."
  },
  {
    time: "04:00 PM",
    phase: "POWER GRID",
    tape: "400mm",
    title: "Dual Generator Synchronisation & Safety",
    image: "assets/images/bts-power-grid.webp",
    detail: "Independent diesel gensets are linked through auto-transfer switchgear. Phase balance is tested under full load. Heavy rubber cable ramps protect primary feeder runs."
  },
  {
    time: "08:00 PM",
    phase: "AUDIO & AV",
    tape: "600mm",
    title: "Acoustic Tuning & LED Calibration",
    image: "assets/images/bts-sound-desk.webp",
    detail: "Digital audio consoles perform pink-noise room sweeps to tune EQ for room reflections. LED walls undergo pixel mapping, color temperature calibration, and redundant signal tests."
  },
  {
    time: "11:00 PM",
    phase: "LIGHTING",
    tape: "750mm",
    title: "DMX Addressing & Cue Programming",
    image: "assets/images/bts-lighting-setup.webp",
    detail: "Lighting designers work through the night programming time-coded cues for entrances, keynote speeches, emotional transitions, and stage climaxes."
  },
  {
    time: "02:00 PM (T-4H)",
    phase: "SAFETY LOCK",
    tape: "900mm",
    title: "Final Multi-Tier Redundancy Inspection",
    image: "assets/images/bts-site-safety.webp",
    detail: "Every emergency exit sign is illuminated, fire extinguishers placed, backstage runners briefed, and wireless radio frequencies locked against local interference."
  },
  {
    time: "06:30 PM (T-0H)",
    phase: "SHOWTIME",
    tape: "1000mm",
    title: "Doors Open & The Experience Begins",
    image: "assets/images/hero-stage-live.webp",
    detail: "The venue breathes. Lights strike. Sound rings true. The audience experiences the magic — completely unaware of the hundreds of calculated decisions made before they arrived."
  }
];

export const TEAM_ROSTER = [
  {
    role: "HEAD OF PRODUCTION & STAGE ENGINEERING",
    name: "Technical Production Roster",
    specialty: "Structural Rigging, Power Redundancy & Load Analysis",
    tapeCoord: "GRID 01 / X:140",
    experience: "12+ Years Pan-India",
    metrics: "Over 200 Heavy Builds Directed"
  },
  {
    role: "CHIEF CREATIVE & SPATIAL DESIGNER",
    name: "Design & Spatial Architecture",
    specialty: "3D Stage Scenography, Lighting Architecture & Narrative",
    tapeCoord: "GRID 02 / X:320",
    experience: "10+ Years Experiential",
    metrics: "Custom Fabrications & Kinetic Sets"
  },
  {
    role: "ON-GROUND OPERATIONS & LOGISTICS DIRECTOR",
    name: "Site Operations Command",
    specialty: "Pan-India Freight, Vendor Fleet & Rapid Mobilization",
    tapeCoord: "GRID 03 / X:560",
    experience: "14+ Years Field Operations",
    metrics: "12 State Jurisdictions Navigated"
  },
  {
    role: "CROWD SAFETY & COMPLIANCE LEAD",
    name: "Safety & Emergency Protocols",
    specialty: "Risk Assessment, Crowd Fluidics & Municipal Permits",
    tapeCoord: "GRID 04 / X:780",
    experience: "9+ Years High-Footfall Events",
    metrics: "100,000+ Crowd Safety Record"
  },
  {
    role: "CLIENT EXPERIENCE & PROTOCOL DIRECTOR",
    name: "Client Relations & Show Calling",
    specialty: "Stakeholder Management, VIP Protocol & Show Timekeeping",
    tapeCoord: "GRID 05 / X:920",
    experience: "8+ Years Corporate & Defense",
    metrics: "Split-Second Cue Accuracy"
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "When you are executing an event with defense protocols and coastal elements, you don't need decorators — you need engineers who understand execution under pressure. FromSkrach brought meticulous discipline, unwavering safety, and total reliability to the ground.",
    client: "Operational Collaborator",
    company: "Public & Experiential Sector",
    project: "Indian Navy Day Operational Demonstration",
    metric: "100% Zero-Defect Delivery"
  },
  {
    quote: "Festivals at heritage palaces are an operational nightmare if your team doesn't respect the architecture. FromSkrach executed complex staging and heavy gear movements without leaving a single scratch on centuries-old stone, delivering seamless multi-stage power throughout.",
    client: "Festival Operations Lead",
    company: "Kickin Experiences Collaboration",
    project: "Magnetic Fields Festival",
    metric: "72 Hours Continuous Multi-Zone Run"
  },
  {
    quote: "Corporate awards leave no room for delay. An executive is on stage, a name is called, and the cue must hit immediately. FromSkrach delivered flawless AV switching, stunning LED clarity, and a level of backstage calm that made our leadership feel entirely supported.",
    client: "Enterprise Events Lead",
    company: "STCH / Kickin Collaboration",
    project: "Cognizant Annual Excellence Awards",
    metric: "Sub-Second Cue Precision"
  }
];

export const CLIENT_LOGOS = [
  { name: "E-Factor Experiences", image: "assets/images/client-efactor.webp", category: "Public & Mega Experiential" },
  { name: "Kickin Experiences", image: "assets/images/client-kickin.webp", category: "Festivals & Music Culture" },
  { name: "Cognizant", image: "assets/images/client-cognizant.webp", category: "Enterprise Global Technology" },
  { name: "Maharashtra Tourism", image: "assets/images/client-mahatourism.webp", category: "State Government & Tourism" },
  { name: "Asma Live", image: "assets/images/client-asma.webp", category: "Live Concerts & Artists" }
];
