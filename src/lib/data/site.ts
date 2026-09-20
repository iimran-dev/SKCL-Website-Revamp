import { UNSPLASH_IMAGES } from "@/lib/constants/images";

/* SKCL site content — single source of truth for all sections */

export const SKCL_NAV = [
  { label: "The Company", href: "#company" },
  { label: "Developments", href: "#developments" },
  { label: "Facility Management", href: "#facility" },
  { label: "Joint Ventures", href: "#joint-ventures" },
  { label: "Clients", href: "#clients" },
  { label: "Insights", href: "#insights" },
];

export const SKCL_METRICS = [
  { value: 2003, label: "Established", suffix: "", isYear: true },
  { value: 9, label: "Projects", suffix: "+", isYear: false },
  { value: 1, label: "Sq.ft Delivered", suffix: "M+", isYear: false },
  { value: 60, label: "Clients", suffix: "+", isYear: false },
  { value: 200, label: "Professionals", suffix: "+", isYear: false },
];

export const SKCL_DEVELOPMENTS = [
  {
    name: "SKCL One",
    location: "OMR, Chennai",
    sqft: "4,50,000",
    year: "2024",
    status: "Operational",
    image: UNSPLASH_IMAGES.developments.skclOne.url,
    description:
      "A glass-and-steel landmark engineered for global technology enterprises on Chennai's IT corridor.",
  },
  {
    name: "SKCL Square",
    location: "T. Nagar, Chennai",
    sqft: "3,20,000",
    year: "2022",
    status: "Operational",
    image: UNSPLASH_IMAGES.developments.skclSquare.url,
    description:
      "A premium corporate address in the commercial heart of the city, designed for institutional tenants.",
  },
  {
    name: "SKCL Horizon",
    location: "Guindy, Chennai",
    sqft: "5,80,000",
    year: "2025",
    status: "Under Construction",
    image: UNSPLASH_IMAGES.developments.skclHorizon.url,
    description:
      "Next-generation Grade A workspace with integrated campus infrastructure and landscape courtyards.",
  },
  {
    name: "SKCL Gateway",
    location: "Porur, Chennai",
    sqft: "3,95,000",
    year: "2026",
    status: "Upcoming",
    image: UNSPLASH_IMAGES.developments.skclGateway.url,
    description:
      "A built-to-suit business campus for a Fortune 500 anchor tenant on the western growth corridor.",
  },
];

export const SKCL_TIMELINE_MILESTONES = [
  {
    year: "2003",
    title: "The Beginning",
    note: "SKCL established in Chennai · First commercial & industrial facilities handed over.",
    sqft: "45,000 sq.ft",
    floors: "4 Floors",
    typology: "Commercial Low-Rise",
    keyProject: "Guindy Industrial Complex",
  },
  {
    year: "2007",
    title: "Growing Horizons",
    note: "Multi-tenant office center handed over · Expanding commercial footprint across city nodes.",
    sqft: "1,20,000 sq.ft",
    floors: "6 Floors",
    typology: "Corporate Business Center",
    keyProject: "SKCL Central Park",
  },
  {
    year: "2012",
    title: "Expanding Possibilities",
    note: "Grade A tech park delivered on Chennai's growth corridor with integrated infrastructure.",
    sqft: "2,80,000 sq.ft",
    floors: "8 Floors",
    typology: "IT & Tech Park",
    keyProject: "SKCL Tech Park",
  },
  {
    year: "2017",
    title: "Scaling New Heights",
    note: "High-rise corporate tower · Advanced MEP & gold-standard sustainability ratings.",
    sqft: "4,50,000 sq.ft",
    floors: "11 Floors",
    typology: "Grade A High-Rise",
    keyProject: "SKCL One Tower",
  },
  {
    year: "2021",
    title: "Strengthening Partnerships",
    note: "Institutional flagship commercial landmark in prime central business district.",
    sqft: "7,50,000 sq.ft",
    floors: "14 Floors",
    typology: "Flagship Commercial Landmark",
    keyProject: "SKCL Square",
  },
  {
    year: "2026",
    title: "Building What's Next",
    note: "Next-generation sustainable campus · Horizon & Gateway underway with biophilic architecture.",
    sqft: "1,200,000+ sq.ft",
    floors: "18 Floors Equivalent",
    typology: "Next-Gen Integrated Campus",
    keyProject: "SKCL Horizon & Gateway",
  },
];

export const SKCL_CHENNAI_LOCATIONS = [
  { name: "SKCL One", area: "OMR", x: 78, y: 56, status: "Operational" },
  { name: "SKCL Square", area: "T. Nagar", x: 44, y: 64, status: "Operational" },
  { name: "SKCL Horizon", area: "Guindy", x: 56, y: 70, status: "Under Construction" },
  { name: "SKCL Gateway", area: "Porur", x: 28, y: 60, status: "Upcoming" },
  { name: "SKCL Tech Park", area: "Sholinganallur", x: 84, y: 68, status: "Operational" },
];

export const SKCL_VERTICALS = [
  {
    title: "Commercial Development",
    copy: "Grade A office environments engineered for global enterprises — from concept design to operational handover.",
    image: UNSPLASH_IMAGES.verticals.commercial.url,
  },
  {
    title: "Facility Management",
    copy: "Integrated operations that preserve asset value and elevate the everyday experience for tenants.",
    image: UNSPLASH_IMAGES.verticals.facilityManagement.url,
  },
  {
    title: "Joint Ventures",
    copy: "Long-term partnerships with landowners — transforming parcels into institutional-grade commercial assets.",
    image: UNSPLASH_IMAGES.verticals.jointVentures.url,
  },
];

export const SKCL_WHY = [
  {
    title: "Strategic Locations",
    copy: "Developments positioned along Chennai's principal commercial corridors — OMR, Guindy, Porur and T. Nagar.",
  },
  {
    title: "Fast-Track Execution",
    copy: "Disciplined delivery cycles that hand over Grade A environments on schedule, every cycle.",
  },
  {
    title: "Built-to-Suit Expertise",
    copy: "Campuses engineered around anchor tenants — from floor plates to mechanical systems.",
  },
  {
    title: "Long-Term Partnerships",
    copy: "Relationships measured in decades, not transactions — with landowners, tenants and capital.",
  },
  {
    title: "Institutional Trust",
    copy: "Governance, transparency and reporting standards that meet the requirements of global enterprises.",
  },
];

export const SKCL_CLIENTS = [
  "Infosys", "TCS", "Cognizant", "Accenture", "Wipro", "HCL",
  "Deloitte", "EY", "Standard Chartered", "HSBC", "Capgemini", "Tech Mahindra",
];

export const SKCL_VOICES = [
  {
    quote:
      "SKCL did not deliver a building. They delivered an environment our enterprise could grow into for the next twenty years.",
    author: "Director of Workplace",
    org: "Global Technology Firm",
  },
  {
    quote:
      "A partnership measured in decades. Their facility management quietly ensures our campus performs every single day.",
    author: "Head of Asset Management",
    org: "Institutional Investor",
  },
  {
    quote:
      "From land to a Grade A campus in three years. The discipline of execution was unmistakably institutional.",
    author: "Landowner Partner",
    org: "Joint Venture Project",
  },
];

export const SKCL_INSIGHTS = [
  {
    category: "Project Launch",
    title: "SKCL Horizon breaks ground on Guindy corridor",
    excerpt:
      "A 5.8 lakh sq.ft Grade A campus begins construction, anchored by two global technology tenants.",
    date: "Mar 2025",
    image: UNSPLASH_IMAGES.insights[0].url,
    featured: true,
  },
  {
    category: "Construction Milestone",
    title: "Structural topping-out at SKCL One",
    excerpt: "OMR tower reaches final floor level ahead of schedule.",
    date: "Feb 2025",
    image: UNSPLASH_IMAGES.insights[1].url,
  },
  {
    category: "Industry Insight",
    title: "Designing for the post-2025 enterprise",
    excerpt: "How floor plates, daylighting and amenity mix are being re-engineered.",
    date: "Jan 2025",
    image: UNSPLASH_IMAGES.insights[2].url,
  },
  {
    category: "Facility Innovation",
    title: "Predictive maintenance across the SKCL portfolio",
    excerpt: "Sensor-led operations now cover 100% of operational floor area.",
    date: "Dec 2024",
    image: UNSPLASH_IMAGES.insights[3].url,
  },
  {
    category: "Corporate Announcement",
    title: "SKCL formalises new joint venture practice",
    excerpt: "Dedicated landowner partnership desk now operational.",
    date: "Nov 2024",
    image: UNSPLASH_IMAGES.insights[4].url,
  },
];

export const SKCL_FACILITY_STATS = [
  { value: 100, suffix: "%", label: "Portfolio coverage" },
  { value: 15, suffix: " min", label: "Avg. response time" },
  { value: 99.2, suffix: "%", label: "Uptime delivered", decimals: 1 },
  { value: 24, suffix: "/7", label: "Operations desk" },
];

export const SKCL_SUSTAINABILITY = [
  {
    pillar: "People",
    copy: "Workplaces engineered for wellbeing — daylight, air quality, amenity and circulation designed around the human experience.",
  },
  {
    pillar: "Planet",
    copy: "Efficient envelopes, on-site generation, water recycling and responsible material sourcing across every project.",
  },
  {
    pillar: "Progress",
    copy: "Measurable ESG outcomes reported to tenants and capital partners — year after year, building after building.",
  },
];

export const SKCL_LEADERSHIP = {
  name: "Chairman & Managing Director",
  quote:
    "We do not build for quarters. We build for the next generation of Indian enterprise — for institutions that, like us, think in decades.",
  bio: "Three decades in commercial real estate. Architect of SKCL's Grade A portfolio and the joint venture practice that defines the firm today.",
};

export const SKCL_FOOTER_LINKS = {
  Company: ["About SKCL", "Leadership", "Sustainability", "Careers", "Press"],
  Developments: ["Portfolio", "Current Projects", "Upcoming", "Leasing"],
  "Facility Management": ["Integrated Services", "Operations", "Asset Performance"],
  "Joint Ventures": ["Landowner Partnerships", "Development Management"],
  Clients: ["Tenant Relationships", "Case Studies"],
  Insights: ["Newsroom", "Research", "Annual Report"],
};
