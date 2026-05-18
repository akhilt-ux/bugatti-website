export interface Car {
  id: string;
  name: string;
  subName: string;
  price: string;
  tagline: string;
  folderPath: string;
  themeColor: string;
  accentColor: string;
  gradient: string;
  specs: { label: string; value: string; unit: string; detail: string }[];
  features: { num: string; title: string; desc: string }[];
  dimensions: { label: string; value: string; unit: string }[];
  engine: { title: string; subtitle: string; body: string; stats: { label: string; val: string }[] };
  techTable: { key: string; val: string }[];
  colourways: { name: string; hex: string }[];
  heroSection: { eyebrow: string; title: string; subtitle: string };
  statementSection: { line1: string; line2: string; line3: string };
  ctaSection: { eyebrow: string; title: string; subtitle: string; buttonText: string };
}

export const cars: Car[] = [
  {
    id: "tourbillon",
    name: "Tourbillon",
    subName: "Beyond Hypercar.",
    price: "€3,800,000",
    tagline: "1,800hp · Naturally Aspirated · 250 Units Only",
    folderPath: "/images/tourbillon",
    themeColor: "#7aaec8",
    accentColor: "#d6e8f2",
    gradient: "linear-gradient(160deg, #060a0e 0%, #0d1c26 50%, #060a0e 100%)",
    specs: [
      { label: "Total Output", value: "1,800", unit: "hp", detail: "1,000hp combustion · 800hp electric (3 motors)" },
      { label: "Peak Torque", value: "1,900", unit: "Nm", detail: "Combined combustion and electric output" },
      { label: "0–100 km/h", value: "2.0", unit: "sec", detail: "Launch control, all-wheel drive" },
      { label: "0–200 km/h", value: "5.0", unit: "sec", detail: "Sustained torque across full RPM range" },
      { label: "Top Speed", value: "445", unit: "km/h", detail: "Aerodynamic ceiling, electronically governed" },
      { label: "Kerb Weight", value: "1,995", unit: "kg", detail: "Carbon monocoque + titanium hardware" },
      { label: "Displacement", value: "8.3", unit: "L", detail: "W16 quad-cam naturally aspirated" },
      { label: "Redline", value: "9,000", unit: "rpm", detail: "Highest in any production Bugatti" }
    ],
    features: [
      { num: "01", title: "Carbon Monocoque", desc: "A single-piece carbon-fibre tub forms the entire passenger cell — lighter and stiffer than aluminium, machined to aircraft tolerances. Every gram justified." },
      { num: "02", title: "Titanium Architecture", desc: "3D-printed titanium brackets, exhaust headers, and fasteners throughout. Components impossible to manufacture by conventional means, realised for the first time in a production car." },
      { num: "03", title: "Analogue Tourbillon Cluster", desc: "Central mechanical rev counter — a literal tourbillon escapement inspired by haute horlogerie. Flanked by analogue gauges. The antithesis of screen-saturated cabins." },
      { num: "04", title: "Active Aerodynamics", desc: "Rear wing deploys across three positions automatically — low drag, high downforce, air-brake. Under-body diffuser channels sculpted for peak efficiency at 445 km/h." },
      { num: "05", title: "Butterfly Dihedral Doors", desc: "Signature doors open upward and outward simultaneously — the most complex door mechanism in production car history. Each hinge is a precision-engineered sculpture." },
      { num: "06", title: "Hybrid Torque Vectoring", desc: "Individual electric motors on each front wheel allow true torque vectoring — independently modulating power to the nearest Newton-metre, impossible in conventional road cars." }
    ],
    dimensions: [
      { label: "Length", value: "4,540", unit: "mm" },
      { label: "Width", value: "2,038", unit: "mm" },
      { label: "Height", value: "1,187", unit: "mm" },
      { label: "Wheelbase", value: "2,750", unit: "mm" },
      { label: "Wheel Size", value: "20", unit: "in" },
      { label: "Fuel Tank", value: "250", unit: "L" },
      { label: "EV Range", value: "150", unit: "km" },
      { label: "Battery", value: "800", unit: "V" }
    ],
    engine: {
      title: "The Engine Reinvented",
      subtitle: "W16 · 8.3L · Naturally Aspirated · 9,000rpm",
      body: "For the first time in Bugatti history, the iconic W16 breathes without turbochargers. A 9,000rpm naturally aspirated soul, paired with three electric motors — two on the front axle, one integrated into the gearbox — delivering an experience no forced-induction engine can replicate: pure, linear, symphonic power.",
      stats: [
        { label: "Cylinders", val: "16" },
        { label: "Valves", val: "64" },
        { label: "Gearbox", val: "7-spd DSG" },
        { label: "Drive", val: "AWD" }
      ]
    },
    techTable: [
      { key: "Engine type", val: "W16 NA Hybrid" },
      { key: "Displacement", val: "8,285 cc" },
      { key: "Compression ratio", val: "12.0:1" },
      { key: "Camshafts", val: "4 (DOHC)" },
      { key: "Fuel injection", val: "Direct port · dual" },
      { key: "Transmission", val: "7-spd DSG" },
      { key: "Drive system", val: "All-wheel (AWD)" },
      { key: "Chassis", val: "Carbon monocoque" },
      { key: "Body material", val: "Carbon fibre" },
      { key: "Front suspension", val: "Double wishbone" },
      { key: "Rear suspension", val: "Pushrod multi-link" },
      { key: "Brakes front", val: "420mm carbon ceramic" },
      { key: "Brakes rear", val: "400mm carbon ceramic" },
      { key: "Tyres front", val: "285/35 ZR20" },
      { key: "Tyres rear", val: "345/30 ZR21" },
      { key: "Battery capacity", val: "25 kWh · 800V" },
      { key: "Production run", val: "250 units only" },
      { key: "Base price", val: "€3,800,000" }
    ],
    colourways: [
      { name: "Île de France Blue", hex: "#7aaec8" },
      { name: "Noir Absolu", hex: "#1a1a1a" },
      { name: "Blanc Pur", hex: "#c8bfb5" },
      { name: "Rouge Sang", hex: "#8b1a1a" },
      { name: "Or Massif", hex: "#c4a35a" },
      { name: "Gris Typhon", hex: "#4a5a6a" },
      { name: "Vert Racing", hex: "#2d4a3e" }
    ],
    heroSection: {
      eyebrow: "Molsheim · 2024 · Beyond Hypercar",
      title: "Tourbillon",
      subtitle: "1,800 Horsepower · Naturally Aspirated · Hybrid"
    },
    statementSection: {
      line1: "Not a successor. Not an evolution.",
      line2: "A complete reimagining of what a road car can be",
      line3: "— born from 115 years of obsession."
    },
    ctaSection: {
      eyebrow: "250 examples · allocation now open",
      title: "Own the impossible",
      subtitle: "By appointment · Château Saint Jean · Molsheim",
      buttonText: "Request Configuration"
    }
  }
];
