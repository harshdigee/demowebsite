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
    title: "Demo grouping · Panels",
    subtitle: "Demo section subtitle — illustrative manufacturing grouping for presentation layouts.",
    machines: [
      {
        name: "Demo machine 01",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 02",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 03",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 04",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 05",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
    ],
  },
  {
    title: "Demo grouping · Milling",
    subtitle: "Demo section subtitle — illustrative milling and veneer workflows for UI preview.",
    machines: [
      {
        name: "Demo machine 06",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 07",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 08",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 09",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
    ],
  },
  {
    title: "Demo grouping · Finishing",
    subtitle: "Demo section subtitle — illustrative finishing line cards for prototype layouts.",
    machines: [
      {
        name: "Demo machine 10",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 11",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
      {
        name: "Demo machine 12",
        brand: "DemoBrand",
        image: PLACEHOLDER_IMAGE,
        description:
          "Placeholder machine description for demo layouts only — replace with real specs before launch.",
        highlights: [
          "Demo bullet — illustrative specification.",
          "Demo bullet — illustrative throughput.",
          "Demo bullet — illustrative accuracy.",
          "Demo bullet — illustrative maintenance.",
        ],
      },
    ],
  },
];

// Full equipment list from the PDF for the summary table
export const panelSectionEquipment = [
  { brand: "Demo", equipment: "Panel row placeholder 01" },
  { brand: "Demo", equipment: "Panel row placeholder 02" },
  { brand: "Demo", equipment: "Panel row placeholder 03" },
  { brand: "Demo", equipment: "Panel row placeholder 04" },
  { brand: "Demo", equipment: "Panel row placeholder 05" },
  { brand: "Demo", equipment: "Panel row placeholder 06" },
  { brand: "Demo", equipment: "Panel row placeholder 07" },
  { brand: "Demo", equipment: "Panel row placeholder 08" },
  { brand: "Demo", equipment: "Panel row placeholder 09" },
  { brand: "Demo", equipment: "Panel row placeholder 10" },
  { brand: "Demo", equipment: "Panel row placeholder 11" }
];

export const millingVeneerEquipment = [
  { brand: "Demo", equipment: "Milling row placeholder 01" },
  { brand: "Demo", equipment: "Milling row placeholder 02" },
  { brand: "Demo", equipment: "Milling row placeholder 03" },
  { brand: "Demo", equipment: "Milling row placeholder 04" },
  { brand: "Demo", equipment: "Milling row placeholder 05" },
  { brand: "Demo", equipment: "Milling row placeholder 06" },
  { brand: "Demo", equipment: "Milling row placeholder 07" },
  { brand: "Demo", equipment: "Milling row placeholder 08" },
  { brand: "Demo", equipment: "Milling row placeholder 09" },
  { brand: "Demo", equipment: "Milling row placeholder 10" },
  { brand: "Demo", equipment: "Milling row placeholder 11" },
  { brand: "Demo", equipment: "Milling row placeholder 12" },
  { brand: "Demo", equipment: "Milling row placeholder 13" }
];

export const sandingSectionEquipment = [
  { brand: "Demo", equipment: "Sanding row placeholder 01" },
  { brand: "Demo", equipment: "Sanding row placeholder 02" },
  { brand: "Demo", equipment: "Sanding row placeholder 03" }
];
