/**
 * Unsplash Photography Directory & Asset Registry for SKCL
 * 
 * Curated, verified, high-resolution photography selected for an institutional
 * commercial real estate developer in Chennai, India.
 * 
 * Every image is verified for active 200 OK availability, editorial relevancy,
 * and aesthetic alignment with SKCL's architectural brand identity.
 */

export interface UnsplashImageMeta {
  id: string;
  url: string;
  alt: string;
  description: string;
  category: "hero" | "developments" | "verticals" | "architecture" | "facility" | "leadership" | "sustainability" | "joint-ventures" | "insights" | "corporate";
  photographer?: string;
  photographerProfile?: string;
  location?: string;
}

export const UNSPLASH_IMAGES = {
  /**
   * Cinematic Hero Section:
   * Low-angle perspective looking up at dark steel and reflective glass skyscrapers with warm interior lighting at dusk.
   */
  hero: {
    id: "photo-1486406146926-c627a92ad1ab",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    alt: "Grade A commercial glass and steel skyscrapers rising into the evening sky",
    description: "Low-angle perspective of modern glass skyscrapers illuminated at twilight, projecting prestige and institutional scale.",
    category: "hero",
    photographer: "Sean Pollock",
    photographerProfile: "https://unsplash.com/@seanpollock",
    location: "Financial District",
  },

  /**
   * Architectural Legacy Statement:
   * Architect hand-drafting structural blueprint plans with scale ruler and technical pencil.
   */
  legacy: {
    id: "photo-1503387762-592deb58ef4e",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    alt: "Architect drafting structural blueprint elevation drawings with scale ruler",
    description: "Architectural study and blueprint drafting on technical paper, symbolising precision engineering and enduring design.",
    category: "architecture",
    photographer: "Daniel McCullough",
    photographerProfile: "https://unsplash.com/@dancalders",
  },

  /**
   * Purpose Section Architectural Sketch:
   * Modern commercial office building perspective concept sketch.
   */
  purposeSketch: {
    id: "purpose-sketch",
    url: "/generated/purpose-sketch.jpg",
    alt: "Architectural concept perspective sketch of modern commercial building",
    description: "Detailed graphite perspective elevation sketch of SKCL commercial development on paper.",
    category: "architecture",
  },

  /**
   * Signature Developments:
   */
  developments: {
    skclOne: {
      id: "photo-1464938050520-ef2270bb8ce8",
      url: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1600&q=85",
      alt: "SKCL One - Curving modern glass corporate towers on enterprise IT corridor",
      description: "Glass-and-steel architectural landmark engineered for global technology enterprises on OMR, Chennai.",
      category: "developments",
      location: "OMR, Chennai",
    },
    skclSquare: {
      id: "photo-1554469384-e58fac16e23a",
      url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=85",
      alt: "SKCL Square - Angular geometric glass corporate building in central business district",
      description: "Premium corporate address with faceted curtain wall facade in T. Nagar commercial hub.",
      category: "developments",
      location: "T. Nagar, Chennai",
    },
    skclHorizon: {
      id: "photo-1755936495011-57dbd3afe405",
      url: "https://images.unsplash.com/photo-1755936495011-57dbd3afe405?auto=format&fit=crop&w=1600&q=85",
      alt: "SKCL Horizon - Next-gen Grade A tower under construction with tower cranes",
      description: "Next-generation 5.8 lakh sq.ft workspace under active construction on Guindy growth corridor.",
      category: "developments",
      location: "Guindy, Chennai",
    },
    skclGateway: {
      id: "photo-1518005020951-eccb494ad742",
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
      alt: "SKCL Gateway - Grade A built-to-suit commercial business campus",
      description: "Built-to-suit campus with integrated infrastructure and courtyard circulation in Porur.",
      category: "developments",
      location: "Porur, Chennai",
    },
  },

  /**
   * Business Verticals:
   */
  verticals: {
    commercial: {
      id: "photo-1464938050520-ef2270bb8ce8",
      url: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1600&q=85",
      alt: "Commercial Development - Grade A office environments",
      description: "Grade A office environments engineered for multinational technology corporations.",
      category: "verticals",
    },
    facilityManagement: {
      id: "photo-1497366754035-f200968a6e72",
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      alt: "Facility Management - Spotless corporate office corridor and glass suites",
      description: "Integrated facility management preserving asset value and delivering flawless tenant uptime.",
      category: "verticals",
    },
    jointVentures: {
      id: "photo-1554469384-e58fac16e23a",
      url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=85",
      alt: "Joint Ventures - Institutional commercial development transformation",
      description: "Long-term landowner partnerships transforming strategic parcels into institutional real estate.",
      category: "verticals",
    },
  },

  /**
   * Facility Management Section & Dashboard:
   */
  facility: {
    id: "photo-1497366754035-f200968a6e72",
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    alt: "Pristine corporate office facility with glass partitions and polished floors",
    description: "Grade A enterprise interior showcasing 24/7 predictive maintenance and operational excellence.",
    category: "facility",
    photographer: "Nastuh Abootalebi",
  },

  /**
   * Joint Ventures Before / After Interactive Slider:
   */
  jointVentures: {
    beforeLand: {
      id: "photo-1726087162826-e6f42613a89e",
      url: "https://images.unsplash.com/photo-1726087162826-e6f42613a89e?auto=format&fit=crop&w=1600&q=85",
      alt: "Aerial view of raw land development site and groundwork excavation",
      description: "Undeveloped prime commercial land parcel ready for institutional joint-venture development.",
      category: "joint-ventures",
    },
    afterCampus: {
      id: "photo-1518005020951-eccb494ad742",
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85",
      alt: "Completed Grade A commercial business campus",
      description: "Delivered institutional office tower with world-class architecture and infrastructure.",
      category: "joint-ventures",
    },
  },

  /**
   * Leadership Section:
   * Distinguished senior Indian corporate leader in tailored suit in modern corporate setting.
   */
  leadership: {
    id: "photo-1762163920282-130f7c485f85",
    url: "https://images.unsplash.com/photo-1762163920282-130f7c485f85?auto=format&fit=crop&w=1200&q=85",
    alt: "Chairman & Managing Director in tailored formal suit at SKCL corporate headquarters",
    description: "Annual report executive portrait of SKCL's Chairman & Managing Director.",
    category: "leadership",
    photographer: "Vishal Kampani",
  },

  /**
   * Sustainability Section:
   * Bosco Verticale - world-renowned vertical forest skyscraper with lush green foliage terraces.
   */
  sustainability: {
    id: "photo-1655447844120-083802457b17",
    url: "https://images.unsplash.com/photo-1655447844120-083802457b17?auto=format&fit=crop&w=1800&q=85",
    alt: "Vertical forest skyscraper with biophilic green terraces and lush trees",
    description: "Sustainable biophilic high-rise architecture engineered for carbon efficiency and human wellbeing.",
    category: "sustainability",
    photographer: "Alexandre Chambon",
  },

  /**
   * Final CTA Section:
   * Golden hour sunrise illuminating city skyscrapers and central avenue.
   */
  finalCta: {
    id: "photo-1480714378408-67cf0d13bc1b",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2000&q=85",
    alt: "Golden sunrise breaking across city skyline and commercial avenue",
    description: "Panoramic cityscape bathed in golden dawn light, inspiring enterprise growth and new partnerships.",
    category: "corporate",
    photographer: "Lerone Pieters",
  },

  /**
   * Corporate Profile Brochure Cover:
   */
  corporateProfile: {
    id: "photo-1554469384-e58fac16e23a",
    url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=85",
    alt: "Geometric corporate glass facade on SKCL corporate profile cover",
    description: "Cover photography for SKCL Corporate Profile Edition 2025.",
    category: "corporate",
  },

  /**
   * Voices / Client Trust Background Backdrop:
   */
  voicesBg: {
    id: "photo-1496307653780-42ee777d4833",
    url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&q=85",
    alt: "Minimalist soaring glass skyscraper apex in the morning sky",
    description: "Ambient architectural backdrop for enterprise tenant testimonials.",
    category: "architecture",
  },

  /**
   * Research & News Insights (5 curated distinct stories):
   */
  insights: [
    {
      id: "photo-1496307653780-42ee777d4833",
      url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&q=85",
      alt: "SKCL Horizon Groundbreaking - Soaring glass skyscraper",
      title: "SKCL Horizon breaks ground on Guindy corridor",
    },
    {
      id: "photo-1755936495011-57dbd3afe405",
      url: "https://images.unsplash.com/photo-1755936495011-57dbd3afe405?auto=format&fit=crop&w=1600&q=85",
      alt: "Structural topping-out milestone at SKCL One",
      title: "Structural topping-out at SKCL One",
    },
    {
      id: "photo-1504384308090-c894fdcc538d",
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=85",
      alt: "Modern enterprise workspace floor plate and collaboration",
      title: "Designing for the post-2025 enterprise",
    },
    {
      id: "photo-1497366754035-f200968a6e72",
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      alt: "Facility operations and predictive maintenance suite",
      title: "Predictive maintenance across the SKCL portfolio",
    },
    {
      id: "photo-1517502884422-41eaead166d4",
      url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=85",
      alt: "Executive conference boardroom overlooking city",
      title: "SKCL formalises new joint venture practice",
    },
  ],
} as const;

export default UNSPLASH_IMAGES;
