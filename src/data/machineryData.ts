import { PLACEHOLDER_IMAGE } from "@/constants/placeholderImage";

export interface MachineryItem {
  name: string;
  brand: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface MachinerySection {
  title: string;
  subtitle: string;
  machines: MachineryItem[];
}

export const machinerySections: MachinerySection[] = [
  {
    title: "Panel Section",
    subtitle: "Precision panel processing with world-class HOMAG systems",
    machines: [
      {
        name: "SAWTEQ S-410",
        brand: "HOMAG",
        image: PLACEHOLDER_IMAGE,
        description:
          "The SAWTEQ S-410 allows for efficient and ergonomic processing of large quantities of panels with first-class cutting quality. The integrated lifting table provides for automatic feed and with large saw blade projection, the saw is reliable, precise and offers high throughput.",
        highlights: [
          "First-class cutting quality with automatic feed",
          "Check tolerance measurement for continuous high-quality production",
          "Up to 20% performance increase with improved energy efficiency",
          "Integrated lifting table for ergonomic panel handling",
        ],
      },
      {
        name: "CENTATEQ P-110",
        brand: "HOMAG",
        image: PLACEHOLDER_IMAGE,
        description:
          "A flexible CNC machine based on compact technology and a reduced footprint giving 3-, 4- and 5-axis solutions for processing kitchen, office and solid wood furniture and door construction.",
        highlights: [
          "3-, 4- and 5-axis CNC machining capabilities",
          "Compact footprint with flexible configuration",
          "Ideal for kitchen, office furniture, and door construction",
          "High-precision routing, drilling, and edge processing",
        ],
      },
      {
        name: "EDGETEQ S-500",
        brand: "HOMAG",
        image: PLACEHOLDER_IMAGE,
        description:
          "The single-sided EDGETEQ S-500 machine offers precise gluing and perfect post-processing of edges. With a variable feed rate of 16–20, 25 or 35 m/min, it enables productivity to keep up with higher performance requirements.",
        highlights: [
          "Variable feed rate: 16–20, 25, or 35 m/min",
          "Precise gluing and perfect edge post-processing",
          "High productivity for demanding production schedules",
          "Single-sided operation for versatile edge banding",
        ],
      },
      {
        name: "DRILLTEQ H-230",
        brand: "HOMAG",
        image: PLACEHOLDER_IMAGE,
        description:
          "Allows for precise drilling process of panels in all 6 sides with the workpieces optimally positioned by CNC-controlled clamps which also provides the capability to work on two pieces simultaneously.",
        highlights: [
          "Precise 6-sided drilling of panels",
          "CNC-controlled clamp positioning",
          "Simultaneous dual-piece processing capability",
          "Optimized workflow for maximum throughput",
        ],
      },
      {
        name: "EDGETEQ S-380",
        brand: "HOMAG",
        image: PLACEHOLDER_IMAGE,
        description:
          "Provides high feed speeds and high-performance motors, whilst the glue application system allows you to switch easily between two colours or glue types (EVA, PU) giving precise trimming, corner rounding, and buffing for a seamless, professional look.",
        highlights: [
          "High feed speeds with powerful motors",
          "Dual glue system: switch between EVA and PU",
          "Precise trimming, corner rounding, and buffing",
          "Flexible configurations for various materials",
        ],
      },
    ],
  },
  {
    title: "Milling & Veneer Section",
    subtitle: "German-engineered MARTIN, WEINIG & KUPER precision systems",
    machines: [
      {
        name: "POWERMAT 1500",
        brand: "WEINIG",
        image: PLACEHOLDER_IMAGE,
        description:
          "A high-precision industrial woodworking machine that planes and profiles solid wood on all four sides simultaneously, creating finished components like mouldings, window frames, and furniture parts with exceptional surface quality and accuracy.",
        highlights: [
          "4-sided simultaneous planing and profiling",
          "Versatile frames and tooling options",
          "Quick automated setup for different profiles",
          "Exceptional surface quality for mouldings and frames",
        ],
      },
      {
        name: "PROFIRIP 340 — Raimann Line",
        brand: "WEINIG",
        image: PLACEHOLDER_IMAGE,
        description:
          "A powerful, flexible multi-blade rip saw with high-efficiency, profitable cutting of solid wood, creating glue-ready strips or optimizing board widths with automated adjustments. It excels at making precise cuts parallel to the wood grain, maximizing timber recovery with minimal setup.",
        highlights: [
          "Multi-blade rip saw for high-efficiency cutting",
          "Glue-ready strip production with automated adjustments",
          "Precise cuts parallel to wood grain",
          "Maximum timber recovery with minimal waste",
        ],
      },
      {
        name: "KUPER ZFS 3200",
        brand: "KUPER",
        image: PLACEHOLDER_IMAGE,
        description:
          "A precise machine that cuts stacked veneer packages simultaneously with a top and bottom knife for perfectly straight, parallel edges, ideal for creating tight, high-quality veneer joints for furniture, cabinetry, and other applications.",
        highlights: [
          "Double knife cutting for perfectly straight edges",
          "Stacked veneer package processing",
          "Straightens wavy veneers under pressure",
          "Also cuts paper, foil, or plastic sheets",
        ],
      },
      {
        name: "KUPER FLI 1000 & QFS 850",
        brand: "KUPER",
        image: PLACEHOLDER_IMAGE,
        description:
          "The KUPER FLI 1000 is a high-performance veneer splicing machine that precisely joins and glues strips of veneer to create larger, seamless panels. The QFS 850 is a cross-cutting clipper that rapidly and precisely cuts stacks of veneer to specific lengths with clean, tear-free edges.",
        highlights: [
          "FLI 1000: High-performance veneer splicing with heat and pressure",
          "QFS 850: Rapid cross-cutting with tear-free edges",
          "Precise glue application with intelligent energy management",
          "User-friendly interface for efficient processing",
        ],
      },
    ],
  },
  {
    title: "Coating & Finishing Section",
    subtitle: "Advanced Cefla coating systems for flawless finishes",
    machines: [
      {
        name: "Cefla Smartcoater PRO",
        brand: "CEFLA",
        image: PLACEHOLDER_IMAGE,
        description:
          "An advanced machine for applying coatings (like lacquer or paint) to flat materials, particularly wood, glass, metal, and plastic. Uses rollers instead of spray guns for reduced material waste and faster processing. Excels at handling uneven or uncalibrated panels with its floating application head and soft roller technology.",
        highlights: [
          "Roller-based application for reduced waste",
          "Floating head handles uneven panels",
          "Processes wood, glass, metal, and plastic",
          "Minimized solvent use and downtime",
        ],
      },
      {
        name: "Cefla Smartclean",
        brand: "CEFLA",
        image: PLACEHOLDER_IMAGE,
        description:
          "A comprehensive range of brushing machines for all cleaning requirements associated with various types of substrates. Suitable for flat and shaped, rough and smooth panels, after primer application and before finishing.",
        highlights: [
          "Comprehensive brushing for all substrate types",
          "Flat and shaped panel compatibility",
          "Pre-finishing and post-primer cleaning",
          "Ensures optimal surface preparation",
        ],
      },
      {
        name: "Cefla Easy",
        brand: "CEFLA",
        image: PLACEHOLDER_IMAGE,
        description:
          "A two-arm oscillating automatic spraying machine designed for high-quality, consistent finishes on various materials like wood, glass, and plastic. Features an automatic part scanning system, a carbon fiber belt conveyor with a patented cleaning and paint recovery system.",
        highlights: [
          "Two-arm oscillating automatic spraying",
          "Automatic part scanning system",
          "Carbon fiber belt with paint recovery",
          "Minimized waste and cleaning time",
        ],
      },
    ],
  },
];

// Full equipment list from the PDF for the summary table
export const panelSectionEquipment = [
  { brand: "HOMAG", equipment: "Beam Saw SAWTEQ S-410" },
  { brand: "HOMAG", equipment: "Edge Bander EDGETEQ S-380" },
  { brand: "HOMAG", equipment: "Edge Bander EDGETEQ S-500" },
  { brand: "HOMAG", equipment: "DRILLTEQ H-230" },
  { brand: "HOMAG", equipment: "DRILLTEQ V-310" },
  { brand: "HOMAG", equipment: "CNC CENTATEQ P-110 (5 Axis)" },
  { brand: "ITALPRESSE", equipment: "Automatic Pressing Line" },
  { brand: "GANOMATE", equipment: "Dowel Inserting Selecta 253" },
  { brand: "GANOMATE", equipment: "Cabinet Clamping Concept Line 70 ECO" },
  { brand: "GANOMATE", equipment: "S+S Frame Clamping Machine T35" },
  { brand: "ITALPRESSE", equipment: "Kube Pressing Machine" },
];

export const millingVeneerEquipment = [
  { brand: "MARTIN", equipment: "Surface Planer T54" },
  { brand: "MARTIN", equipment: "Thickness Planer T45" },
  { brand: "MARTIN", equipment: "Sliding Table Saw T77" },
  { brand: "MARTIN", equipment: "Spindle Moulder T27 FleX" },
  { brand: "REHEN", equipment: "Edge Sanding Machine Junior 1" },
  { brand: "WEINIG", equipment: "Multi Blade Rip Saw PROFIRIP 340" },
  { brand: "WEINIG", equipment: "Cross Cutting Saw Opticut S-50" },
  { brand: "WEINIG", equipment: "Multi Spindle Moulder POWERMAT 1500" },
  { brand: "ITALPRESSE", equipment: "Manual Hot Press XL/08" },
  { brand: "KUPER", equipment: "Veneer Cutting Mc ZFS 3200/470" },
  { brand: "KUPER", equipment: "Veneer Splicing Machine FWS 920" },
  { brand: "KUPER", equipment: "Veneer Splicing Machine FLI 1000" },
  { brand: "KUPER", equipment: "Veneer Cross Cutter Mc QFS 850" },
];

export const sandingSectionEquipment = [
  { brand: "VIET", equipment: "Wide Belt Sanding S1 211" },
  { brand: "—", equipment: "Edge & Profile Sanding Machine" },
  { brand: "—", equipment: "Sanding Table 2.4M × 1.5M" },
];
