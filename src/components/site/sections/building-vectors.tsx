"use client";

import React from "react";

interface BuildingVectorProps {
  isHovered?: boolean;
  className?: string;
}

/* =========================================================================
   1. 2003 — THE BEGINNING
   Low-rise commercial & industrial building (4 floors), classic masonry grid,
   rooftop mechanical water tank, entrance portico, and street trees.
   ========================================================================= */
export function Building2003({ isHovered, className }: BuildingVectorProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      preserveAspectRatio="xMidYMax meet"
      className={className ?? "w-full h-auto"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="b2003-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f3ede2" stopOpacity="0.85" />
          <stop offset="65%" stopColor="#ebe4d6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#dfd7c7" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Rooftop Water Tank & Structure */}
      <g stroke="#071525" strokeWidth="1.2" strokeLinecap="round">
        {/* Antenna / lightning rod with draft ticks */}
        <line x1="120" y1="58" x2="120" y2="28" strokeWidth="1" />
        <circle cx="120" cy="27" r="1.5" fill="#071525" />
        <line x1="117" y1="36" x2="123" y2="36" strokeWidth="0.8" />

        {/* Water Tank */}
        <rect x="88" y="42" width="22" height="16" rx="2" fill="#ebe4d6" fillOpacity="0.9" strokeWidth="1.2" />
        <line x1="88" y1="50" x2="110" y2="50" strokeWidth="0.8" />
        {/* Tank stilts */}
        <line x1="92" y1="58" x2="92" y2="64" strokeWidth="1.2" />
        <line x1="106" y1="58" x2="106" y2="64" strokeWidth="1.2" />
        <line x1="92" y1="62" x2="106" y2="59" strokeWidth="0.7" strokeDasharray="1 1" />

        {/* Elevator/Stair machine room */}
        <rect x="42" y="46" width="30" height="18" fill="#e5decb" strokeWidth="1.3" />
        <line x1="42" y1="44" x2="74" y2="44" strokeWidth="1.5" />
        <line x1="48" y1="52" x2="56" y2="52" strokeWidth="0.8" />
        <line x1="48" y1="57" x2="56" y2="57" strokeWidth="0.8" />
      </g>

      {/* Main Building Body */}
      <rect
        x="32"
        y="64"
        width="98"
        height="96"
        fill="url(#b2003-body)"
        stroke="#071525"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      {/* Architectural drafting corner extension ticks */}
      <g stroke="#071525" strokeWidth="1" strokeOpacity="0.7">
        <line x1="29" y1="64" x2="35" y2="64" />
        <line x1="32" y1="61" x2="32" y2="67" />
        <line x1="127" y1="64" x2="133" y2="64" />
        <line x1="130" y1="61" x2="130" y2="67" />
      </g>

      {/* Parapet Cornice Band */}
      <rect x="30" y="64" width="102" height="6" fill="#ded5c2" stroke="#071525" strokeWidth="1.4" />
      {/* Floor Dividers */}
      <line x1="32" y1="88" x2="130" y2="88" stroke="#071525" strokeWidth="1.2" />
      <line x1="32" y1="112" x2="130" y2="112" stroke="#071525" strokeWidth="1.2" />
      <line x1="32" y1="136" x2="130" y2="136" stroke="#071525" strokeWidth="1.2" />

      {/* Vertical Structural Pilasters */}
      <line x1="56" y1="70" x2="56" y2="160" stroke="#071525" strokeWidth="0.9" strokeOpacity="0.7" />
      <line x1="80" y1="70" x2="80" y2="136" stroke="#071525" strokeWidth="0.9" strokeOpacity="0.7" />
      <line x1="104" y1="70" x2="104" y2="160" stroke="#071525" strokeWidth="0.9" strokeOpacity="0.7" />

      {/* 4x4 Window Openings */}
      {/* Floor 4 (top) */}
      {[38, 62, 86, 110].map((x, i) => (
        <g key={`f4-${i}`}>
          <rect
            x={x}
            y={73}
            width={14}
            height={11}
            fill={isHovered ? "#fbbf24" : "#cbdcf7"}
            fillOpacity={isHovered ? 0.95 : 0.45}
            stroke="#071525"
            strokeWidth="0.9"
            className="transition-all duration-300"
          />
          <line x1={x + 7} y1={73} x2={x + 7} y2={84} stroke="#071525" strokeWidth="0.6" />
        </g>
      ))}

      {/* Floor 3 */}
      {[38, 62, 86, 110].map((x, i) => (
        <g key={`f3-${i}`}>
          <rect
            x={x}
            y={95}
            width={14}
            height={12}
            fill={isHovered ? "#fbbf24" : "#cbdcf7"}
            fillOpacity={isHovered ? 0.9 : 0.5}
            stroke="#071525"
            strokeWidth="0.9"
            className="transition-all duration-300"
          />
          <line x1={x + 7} y1={95} x2={x + 7} y2={107} stroke="#071525" strokeWidth="0.6" />
        </g>
      ))}

      {/* Floor 2 */}
      {[38, 62, 86, 110].map((x, i) => (
        <g key={`f2-${i}`}>
          <rect
            x={x}
            y={119}
            width={14}
            height={12}
            fill={isHovered ? "#f59e0b" : "#cbdcf7"}
            fillOpacity={isHovered ? 0.9 : 0.5}
            stroke="#071525"
            strokeWidth="0.9"
            className="transition-all duration-300"
          />
          <line x1={x + 7} y1={119} x2={x + 7} y2={131} stroke="#071525" strokeWidth="0.6" />
        </g>
      ))}

      {/* Floor 1 (Ground) - Flanking windows */}
      {[38, 110].map((x, i) => (
        <g key={`f1-${i}`}>
          <rect
            x={x}
            y={142}
            width={14}
            height={14}
            fill={isHovered ? "#fbbf24" : "#cbdcf7"}
            fillOpacity={isHovered ? 0.9 : 0.45}
            stroke="#071525"
            strokeWidth="0.9"
            className="transition-all duration-300"
          />
          <line x1={x + 7} y1={142} x2={x + 7} y2={156} stroke="#071525" strokeWidth="0.6" />
        </g>
      ))}

      {/* Entrance Portico (Center) */}
      <rect x="68" y="137" width="26" height="4" fill="#b68b4c" stroke="#071525" strokeWidth="1.2" />
      <line x1="70" y1="141" x2="70" y2="160" stroke="#071525" strokeWidth="1.3" />
      <line x1="92" y1="141" x2="92" y2="160" stroke="#071525" strokeWidth="1.3" />
      {/* Entrance Door */}
      <rect
        x="72"
        y="141"
        width="18"
        height="19"
        fill={isHovered ? "#fef3c7" : "#dfd7c7"}
        stroke="#071525"
        strokeWidth="1"
      />
      <line x1="81" y1="141" x2="81" y2="160" stroke="#071525" strokeWidth="0.8" />
      {/* Entry steps */}
      <line x1="66" y1="160" x2="96" y2="160" stroke="#071525" strokeWidth="1.4" />

      {/* Architectural Hatching on shaded side */}
      <g stroke="#071525" strokeWidth="0.6" strokeOpacity="0.25">
        <line x1="122" y1="73" x2="128" y2="67" />
        <line x1="122" y1="83" x2="128" y2="77" />
        <line x1="122" y1="95" x2="128" y2="89" />
        <line x1="122" y1="105" x2="128" y2="99" />
        <line x1="122" y1="117" x2="128" y2="111" />
        <line x1="122" y1="127" x2="128" y2="121" />
      </g>

      {/* Landscaping / Sketch Trees at base */}
      {/* Left Tree */}
      <g stroke="#071525" strokeWidth="1">
        <line x1="18" y1="160" x2="18" y2="140" strokeWidth="1.5" />
        <path
          d="M18 140 C11 138 9 127 15 122 C13 116 20 112 25 116 C30 111 36 117 33 124 C38 128 35 137 28 139 C25 142 20 142 18 140 Z"
          fill="#86efac"
          fillOpacity="0.4"
        />
        {/* Branches */}
        <line x1="18" y1="145" x2="13" y2="133" strokeWidth="0.7" />
        <line x1="18" y1="142" x2="23" y2="132" strokeWidth="0.7" />
      </g>

      {/* Right Small Shrub */}
      <g stroke="#071525" strokeWidth="0.9">
        <path
          d="M136 160 C132 153 135 145 141 146 C145 141 152 143 153 148 C158 152 155 158 150 160 Z"
          fill="#86efac"
          fillOpacity="0.35"
        />
      </g>

      {/* Ground Line Anchor */}
      <line x1="4" y1="160" x2="156" y2="160" stroke="#071525" strokeWidth="1.6" />
    </svg>
  );
}

/* =========================================================================
   2. 2007 — GROWING HORIZONS
   Mid-rise commercial office complex (6 floors), articulated dual wings,
   ribbon window profiles, colonnade entrance, pergola terrace.
   ========================================================================= */
export function Building2007({ isHovered, className }: BuildingVectorProps) {
  return (
    <svg
      viewBox="0 0 190 190"
      preserveAspectRatio="xMidYMax meet"
      className={className ?? "w-full h-auto"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="b2007-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ebe4d6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ded5c2" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="b2007-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f3ede2" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e4dccd" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Rooftop Pergola on Left Wing */}
      <g stroke="#071525" strokeWidth="1">
        <line x1="28" y1="62" x2="28" y2="52" strokeWidth="1.2" />
        <line x1="45" y1="62" x2="45" y2="52" strokeWidth="1.2" />
        <line x1="62" y1="62" x2="62" y2="52" strokeWidth="1.2" />
        <line x1="24" y1="52" x2="66" y2="52" strokeWidth="1.5" />
        {/* Trellis cross beams */}
        <line x1="33" y1="50" x2="33" y2="54" strokeWidth="0.8" />
        <line x1="40" y1="50" x2="40" y2="54" strokeWidth="0.8" />
        <line x1="50" y1="50" x2="50" y2="54" strokeWidth="0.8" />
        <line x1="57" y1="50" x2="57" y2="54" strokeWidth="0.8" />
      </g>

      {/* Rooftop Plant Room on Right Wing */}
      <rect x="110" y="38" width="36" height="14" fill="#d9d0be" stroke="#071525" strokeWidth="1.3" />
      {/* Louver lines */}
      {[41, 44, 47].map((y) => (
        <line key={y} x1="114" y1={y} x2="142" y2={y} stroke="#071525" strokeWidth="0.7" />
      ))}
      <line x1="135" y1="38" x2="135" y2="22" stroke="#071525" strokeWidth="1" />
      <circle cx="135" cy="21" r="1.5" fill="#071525" />

      {/* LEFT WING (5 floors, slightly setback) */}
      <rect
        x="24"
        y="62"
        width="54"
        height="128"
        fill="url(#b2007-left)"
        stroke="#071525"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* RIGHT WING (6 floors, taller primary volume) */}
      <rect
        x="74"
        y="52"
        width="88"
        height="138"
        fill="url(#b2007-right)"
        stroke="#071525"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Parapet Caps */}
      <rect x="22" y="60" width="56" height="4" fill="#071525" fillOpacity="0.15" stroke="#071525" strokeWidth="1.2" />
      <rect x="72" y="49" width="92" height="5" fill="#071525" fillOpacity="0.2" stroke="#071525" strokeWidth="1.4" />

      {/* Architectural Corner Extension Ticks */}
      <line x1="70" y1="49" x2="76" y2="49" stroke="#071525" strokeWidth="1" />
      <line x1="162" y1="49" x2="167" y2="49" stroke="#071525" strokeWidth="1" />

      {/* Left Wing Ribbon Windows */}
      {[72, 94, 116, 138, 160].map((y, idx) => (
        <g key={`lw-${idx}`}>
          <rect
            x="28"
            y={y}
            width="42"
            height="13"
            fill={isHovered ? "#fbbf24" : "#bae6fd"}
            fillOpacity={isHovered ? 0.9 : 0.45}
            stroke="#071525"
            strokeWidth="0.9"
            className="transition-all duration-300"
          />
          <line x1="42" y1={y} x2="42" y2={y + 13} stroke="#071525" strokeWidth="0.6" />
          <line x1="56" y1={y} x2="56" y2={y + 13} stroke="#071525" strokeWidth="0.6" />
        </g>
      ))}

      {/* Right Wing Ribbon Windows with Alternating Panels */}
      {[62, 83, 104, 125, 146].map((y, idx) => (
        <g key={`rw-${idx}`}>
          <rect
            x="80"
            y={y}
            width="76"
            height="13"
            fill={isHovered ? "#f59e0b" : "#bae6fd"}
            fillOpacity={isHovered ? 0.92 : 0.5}
            stroke="#071525"
            strokeWidth="1"
            className="transition-all duration-300"
          />
          {[98, 118, 138].map((x) => (
            <line key={x} x1={x} y1={y} x2={x} y2={y + 13} stroke="#071525" strokeWidth="0.7" />
          ))}
          {/* Glass reflection diagonal slash */}
          <line x1="84" y1={y + 11} x2="94" y2={y + 2} stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />
        </g>
      ))}

      {/* Ground Floor Colonnade & Glass Lobby */}
      <rect
        x="76"
        y="168"
        width="84"
        height="22"
        fill={isHovered ? "#fef3c7" : "#e0f2fe"}
        fillOpacity={isHovered ? 0.95 : 0.6}
        stroke="#071525"
        strokeWidth="1.2"
      />
      {/* Colonnade Columns */}
      {[80, 96, 114, 134, 154].map((x) => (
        <line key={x} x1={x} y1="168" x2={x} y2="190" stroke="#071525" strokeWidth="1.8" />
      ))}
      {/* Entrance canopy marker in SKCL gold */}
      <rect x="106" y="166" width="24" height="3" fill="#b68b4c" stroke="#071525" strokeWidth="1" />

      {/* Shading Hatch on Right Profile */}
      <g stroke="#071525" strokeWidth="0.6" strokeOpacity="0.2">
        <line x1="154" y1="60" x2="160" y2="54" />
        <line x1="154" y1="80" x2="160" y2="74" />
        <line x1="154" y1="100" x2="160" y2="94" />
        <line x1="154" y1="120" x2="160" y2="114" />
        <line x1="154" y1="140" x2="160" y2="134" />
      </g>

      {/* Sketch Trees & Entourage */}
      <g stroke="#071525" strokeWidth="1">
        {/* Left Tree */}
        <line x1="12" y1="190" x2="12" y2="168" strokeWidth="1.5" />
        <path
          d="M12 168 C6 165 4 153 10 147 C8 140 16 135 22 140 C28 134 35 141 32 149 C37 154 34 164 26 166 C22 170 15 170 12 168 Z"
          fill="#86efac"
          fillOpacity="0.4"
        />
        {/* Street Light / Pole */}
        <line x1="172" y1="190" x2="172" y2="162" strokeWidth="1" />
        <path d="M172 162 Q176 158 180 162" strokeWidth="1" fill="none" />
        <circle cx="180" cy="163" r="1.5" fill="#b68b4c" />
      </g>

      {/* Scale Person Silhouette */}
      <g stroke="#071525" strokeWidth="0.8">
        <circle cx="68" cy="180" r="1.2" fill="#071525" />
        <line x1="68" y1="181.5" x2="68" y2="188" />
        <line x1="68" y1="188" x2="66.5" y2="190" />
        <line x1="68" y1="188" x2="69.5" y2="190" />
      </g>

      {/* Ground Baseline */}
      <line x1="4" y1="190" x2="186" y2="190" stroke="#071525" strokeWidth="1.6" />
    </svg>
  );
}

/* =========================================================================
   3. 2012 — EXPANDING POSSIBILITIES
   Grade A IT park commercial building (8 floors), extensive glass curtain
   wall facade, angled cantilevered entrance canopy, landscaped roof terrace.
   ========================================================================= */
export function Building2012({ isHovered, className }: BuildingVectorProps) {
  return (
    <svg
      viewBox="0 0 220 222"
      preserveAspectRatio="xMidYMax meet"
      className={className ?? "w-full h-auto"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="b2012-glass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="b2012-frame" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f3ede2" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ded5c2" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Rooftop Screen & Architectural Feature */}
      <g stroke="#071525" strokeWidth="1.2">
        {/* Communications tower */}
        <line x1="56" y1="42" x2="56" y2="18" strokeWidth="1.2" />
        <line x1="52" y1="28" x2="60" y2="28" strokeWidth="0.8" />
        <circle cx="56" cy="17" r="1.5" fill="#b68b4c" />
        {/* Rooftop terrace pergola */}
        <line x1="126" y1="42" x2="168" y2="42" strokeWidth="1.8" />
        {[132, 142, 152, 162].map((x) => (
          <line key={x} x1={x} y1="36" x2={x} y2="44" strokeWidth="1" />
        ))}
      </g>

      {/* Main Building Frame */}
      <rect
        x="32"
        y="42"
        width="146"
        height="180"
        fill="url(#b2012-frame)"
        stroke="#071525"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Upper Terrace Setback (Level 7 & 8) */}
      <path
        d="M130 42 L130 76 L178 76"
        stroke="#071525"
        strokeWidth="1.4"
        strokeDasharray="2 2"
      />
      {/* Sky Terrace Greenery */}
      <path
        d="M136 74 C140 68 148 68 152 74 C156 69 164 69 168 74 C172 71 176 74 176 75"
        stroke="#16a34a"
        strokeWidth="1"
        fill="#86efac"
        fillOpacity="0.5"
      />

      {/* Left Service Core with Vertical Solar Louvers */}
      <rect x="32" y="42" width="26" height="180" fill="#ded5c2" stroke="#071525" strokeWidth="1.4" />
      {[38, 44, 50].map((x) => (
        <line key={x} x1={x} y1="46" x2={x} y2="218" stroke="#071525" strokeWidth="0.7" strokeDasharray="4 2" />
      ))}

      {/* Primary Glass Curtain Wall Grid (Floors 1 to 8) */}
      <rect
        x="62"
        y="46"
        width="112"
        height="146"
        fill={isHovered ? "#fbbf24" : "url(#b2012-glass)"}
        fillOpacity={isHovered ? 0.9 : 0.55}
        stroke="#071525"
        strokeWidth="1.4"
        className="transition-all duration-300"
      />

      {/* Horizontal Spandrel Beams */}
      {[64, 82, 100, 118, 136, 154, 172].map((y) => (
        <line key={y} x1="62" y1={y} x2="174" y2={y} stroke="#071525" strokeWidth="1" />
      ))}

      {/* Vertical Glass Mullions */}
      {[80, 98, 116, 134, 152].map((x) => (
        <line key={x} x1={x} y1="46" x2={x} y2="192" stroke="#071525" strokeWidth="0.8" />
      ))}

      {/* Glass Dynamic Reflection Hatching */}
      <g stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.75">
        <line x1="72" y1="184" x2="108" y2="70" />
        <line x1="84" y1="184" x2="120" y2="70" />
        <line x1="126" y1="184" x2="160" y2="76" />
      </g>

      {/* Angled Cantilevered Entrance Portico (Gold accent) */}
      <g stroke="#071525" strokeWidth="1.4">
        {/* Angled canopy slab */}
        <polygon
          points="80,188 155,180 158,185 78,193"
          fill="#b68b4c"
          fillOpacity="0.95"
        />
        {/* Support Truss Cables */}
        <line x1="95" y1="172" x2="130" y2="183" stroke="#b68b4c" strokeWidth="1.2" />
        <line x1="95" y1="172" x2="105" y2="186" stroke="#b68b4c" strokeWidth="1.2" />
      </g>

      {/* Ground Floor Double-Height Atrium */}
      <rect
        x="62"
        y="192"
        width="112"
        height="30"
        fill={isHovered ? "#fef3c7" : "#e0f2fe"}
        fillOpacity={isHovered ? 0.95 : 0.7}
        stroke="#071525"
        strokeWidth="1.4"
      />
      {/* Revolving / Center Doorway */}
      <rect x="106" y="200" width="24" height="22" fill="#dbeafe" stroke="#071525" strokeWidth="1" />
      <line x1="118" y1="200" x2="118" y2="222" stroke="#071525" strokeWidth="0.8" />

      {/* Entourage: Palm Tree & Scale Figures */}
      <g stroke="#071525" strokeWidth="1">
        {/* Palm tree on right */}
        <path d="M192 222 Q196 185 190 160" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Palm fronds */}
        <path d="M190 160 Q175 152 168 158" strokeWidth="1.3" fill="none" />
        <path d="M190 160 Q185 145 180 142" strokeWidth="1.3" fill="none" />
        <path d="M190 160 Q196 142 205 145" strokeWidth="1.3" fill="none" />
        <path d="M190 160 Q205 155 212 162" strokeWidth="1.3" fill="none" />
        <path d="M190 160 Q192 170 200 175" strokeWidth="1.3" fill="none" />
      </g>

      {/* Scale People */}
      <g stroke="#071525" strokeWidth="0.8">
        <circle cx="145" cy="211" r="1.3" fill="#071525" />
        <line x1="145" y1="213" x2="145" y2="220" />
        <line x1="145" y1="220" x2="143" y2="222" />
        <line x1="145" y1="220" x2="147" y2="222" />

        <circle cx="152" cy="212" r="1.3" fill="#071525" />
        <line x1="152" y1="214" x2="152" y2="221" />
        <line x1="152" y1="221" x2="150.5" y2="222" />
        <line x1="152" y1="221" x2="153.5" y2="222" />
      </g>

      {/* Ground Baseline */}
      <line x1="4" y1="222" x2="216" y2="222" stroke="#071525" strokeWidth="1.6" />
    </svg>
  );
}

/* =========================================================================
   4. 2017 — SCALING NEW HEIGHTS
   High-rise corporate tower (11 floors), stepped architectural massing,
   aerodynamic vertical solar louvers, sky deck, cantilevered crown.
   ========================================================================= */
export function Building2017({ isHovered, className }: BuildingVectorProps) {
  return (
    <svg
      viewBox="0 0 240 260"
      preserveAspectRatio="xMidYMax meet"
      className={className ?? "w-full h-auto"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="b2017-tower-a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f3ede2" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#e2d8c5" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="b2017-glass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Architectural Crown Spire / Beacon */}
      <g stroke="#071525" strokeWidth="1.2">
        <line x1="130" y1="36" x2="130" y2="12" strokeWidth="1.5" />
        <circle cx="130" cy="11" r="2" fill="#b68b4c" />
        <line x1="125" y1="20" x2="135" y2="20" strokeWidth="1" />
        {/* Angled Crown Fins */}
        <polygon points="98,36 130,22 162,36 158,39 130,27 102,39" fill="#071525" />
      </g>

      {/* REAR / TALLEST TOWER VOLUME (Floors 1-11) */}
      <rect
        x="96"
        y="36"
        width="90"
        height="224"
        fill="url(#b2017-tower-a)"
        stroke="#071525"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* FRONT STEPPED TOWER VOLUME (Floors 1-8) */}
      <rect
        x="36"
        y="78"
        width="76"
        height="182"
        fill="#ece3d2"
        stroke="#071525"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Sky Lounge / Terrace on Floor 8 Roof */}
      <rect x="36" y="74" width="76" height="4" fill="#b68b4c" stroke="#071525" strokeWidth="1.2" />
      {/* Terrace Glass Railing */}
      <line x1="38" y1="68" x2="110" y2="68" stroke="#071525" strokeWidth="0.9" strokeDasharray="2 1" />
      <path
        d="M45 74 C50 68 56 68 62 74 C68 69 76 69 82 74"
        stroke="#16a34a"
        strokeWidth="1"
        fill="#86efac"
        fillOpacity="0.6"
      />

      {/* Glass Facade Zones */}
      {/* Front Tower Glass Grid */}
      <rect
        x="44"
        y="86"
        width="60"
        height="138"
        fill={isHovered ? "#fbbf24" : "url(#b2017-glass)"}
        fillOpacity={isHovered ? 0.9 : 0.6}
        stroke="#071525"
        strokeWidth="1.2"
        className="transition-all duration-300"
      />
      {/* Vertical Louver Fins on Front Tower */}
      {[54, 64, 74, 84, 94].map((x) => (
        <line key={x} x1={x} y1="86" x2={x} y2="224" stroke="#071525" strokeWidth="0.8" />
      ))}
      {/* Floor bands on front tower */}
      {[106, 126, 146, 166, 186, 206].map((y) => (
        <line key={y} x1="44" y1={y} x2="104" y2={y} stroke="#071525" strokeWidth="0.9" />
      ))}

      {/* Tall Rear Tower Glass Facade */}
      <rect
        x="116"
        y="46"
        width="62"
        height="178"
        fill={isHovered ? "#f59e0b" : "url(#b2017-glass)"}
        fillOpacity={isHovered ? 0.92 : 0.65}
        stroke="#071525"
        strokeWidth="1.2"
        className="transition-all duration-300"
      />
      {/* Louvers on Rear Tower */}
      {[128, 140, 152, 164].map((x) => (
        <line key={x} x1={x} y1="46" x2={x} y2="224" stroke="#071525" strokeWidth="0.8" />
      ))}
      {/* Floor bands on rear tower */}
      {[66, 86, 106, 126, 146, 166, 186, 206].map((y) => (
        <line key={y} x1="116" y1={y} x2="178" y2={y} stroke="#071525" strokeWidth="0.9" />
      ))}

      {/* Diagonal Architectural Glass Light Reflections */}
      <g stroke="#ffffff" strokeWidth="1.4" strokeOpacity="0.7">
        <line x1="50" y1="210" x2="95" y2="100" />
        <line x1="125" y1="210" x2="170" y2="90" />
      </g>

      {/* Grand Double-Height Corporate Lobby (Ground + Mezzanine) */}
      <rect
        x="38"
        y="226"
        width="146"
        height="34"
        fill={isHovered ? "#fef3c7" : "#e0f2fe"}
        fillOpacity={isHovered ? 0.95 : 0.75}
        stroke="#071525"
        strokeWidth="1.5"
      />
      {/* Monumental Entrance Portal */}
      <rect x="86" y="222" width="50" height="4" fill="#b68b4c" stroke="#071525" strokeWidth="1.3" />
      <line x1="90" y1="226" x2="90" y2="260" stroke="#071525" strokeWidth="1.8" />
      <line x1="132" y1="226" x2="132" y2="260" stroke="#071525" strokeWidth="1.8" />
      {/* Revolving Door */}
      <circle cx="111" cy="246" r="8" stroke="#071525" strokeWidth="0.8" fill="#dbeafe" />
      <line x1="111" y1="238" x2="111" y2="254" stroke="#071525" strokeWidth="0.7" />
      <line x1="103" y1="246" x2="119" y2="246" stroke="#071525" strokeWidth="0.7" />

      {/* Street Lamps & Trees */}
      <g stroke="#071525" strokeWidth="1">
        {/* Left Architectural Sketch Tree */}
        <line x1="20" y1="260" x2="20" y2="235" strokeWidth="1.5" />
        <path
          d="M20 235 C12 230 10 216 18 208 C15 198 26 192 34 198 C42 190 52 200 48 212 C55 218 50 232 40 234 C34 238 24 238 20 235 Z"
          fill="#86efac"
          fillOpacity="0.45"
        />
        {/* Right Modern Light Pole */}
        <line x1="205" y1="260" x2="205" y2="225" strokeWidth="1.2" />
        <line x1="202" y1="225" x2="212" y2="225" strokeWidth="1.4" />
        <circle cx="207" cy="227" r="1.5" fill="#b68b4c" />
      </g>

      {/* Ground Baseline */}
      <line x1="4" y1="260" x2="236" y2="260" stroke="#071525" strokeWidth="1.6" />
    </svg>
  );
}

/* =========================================================================
   5. 2021 — STRENGTHENING PARTNERSHIPS
   Grand commercial landmark (14 floors), monumental faceted glass curtain wall,
   signature central arch atrium, landscaped plaza, sky terraces.
   ========================================================================= */
export function Building2021({ isHovered, className }: BuildingVectorProps) {
  return (
    <svg
      viewBox="0 0 270 300"
      preserveAspectRatio="xMidYMax meet"
      className={className ?? "w-full h-auto"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="b2021-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f3ede2" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#e8dfce" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ded3be" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="b2021-glass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Architectural Sculptural Crown */}
      <g stroke="#071525" strokeWidth="1.4">
        <polygon points="34,44 135,24 236,44 232,48 135,28 38,48" fill="#071525" />
        <line x1="135" y1="24" x2="135" y2="6" strokeWidth="1.6" />
        <circle cx="135" cy="5" r="2.2" fill="#b68b4c" />
        {/* Crown diagonal structural louvers */}
        {[55, 75, 95, 115, 155, 175, 195, 215].map((x) => (
          <line key={x} x1={x} y1="44" x2={x > 135 ? x - 8 : x + 8} y2="34" stroke="#071525" strokeWidth="0.8" />
        ))}
      </g>

      {/* Main Structural Massing Envelope */}
      <rect
        x="34"
        y="44"
        width="202"
        height="256"
        fill="url(#b2021-body)"
        stroke="#071525"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Left & Right Primary Glass Facade Wings */}
      {/* Left Glass Zone */}
      <rect
        x="42"
        y="54"
        width="76"
        height="204"
        fill={isHovered ? "#fbbf24" : "url(#b2021-glass)"}
        fillOpacity={isHovered ? 0.9 : 0.65}
        stroke="#071525"
        strokeWidth="1.3"
        className="transition-all duration-300"
      />
      {/* Right Glass Zone */}
      <rect
        x="152"
        y="54"
        width="76"
        height="204"
        fill={isHovered ? "#fbbf24" : "url(#b2021-glass)"}
        fillOpacity={isHovered ? 0.9 : 0.65}
        stroke="#071525"
        strokeWidth="1.3"
        className="transition-all duration-300"
      />

      {/* CENTRAL MONUMENTAL GLASS ATRIUM (Signature Feature) */}
      <g stroke="#071525" strokeWidth="1.4">
        {/* Grand Arch Top of Atrium */}
        <path
          d="M118 84 Q135 62 152 84 L152 258 L118 258 Z"
          fill={isHovered ? "#fef3c7" : "#e0f2fe"}
          fillOpacity={isHovered ? 0.95 : 0.85}
          className="transition-all duration-300"
        />
        {/* Atrium Frame Arch Ribs */}
        <path d="M120 86 Q135 67 150 86" stroke="#b68b4c" strokeWidth="1.5" fill="none" />
        <line x1="135" y1="67" x2="135" y2="258" stroke="#b68b4c" strokeWidth="1.2" />
        {[102, 126, 150, 174, 198, 222, 246].map((y) => (
          <line key={y} x1="118" y1={y} x2="152" y2={y} stroke="#071525" strokeWidth="0.8" />
        ))}
      </g>

      {/* Floor Bands across Left & Right Wings (14 Levels) */}
      {[68, 82, 96, 110, 124, 138, 152, 166, 180, 194, 208, 222, 236, 250].map((y) => (
        <g key={y}>
          <line x1="42" y1={y} x2="118" y2={y} stroke="#071525" strokeWidth="0.8" />
          <line x1="152" y1={y} x2="228" y2={y} stroke="#071525" strokeWidth="0.8" />
        </g>
      ))}

      {/* Vertical Structural Mullions */}
      {[57, 72, 87, 102, 167, 182, 197, 212].map((x) => (
        <line key={x} x1={x} y1="54" x2={x} y2="258" stroke="#071525" strokeWidth="0.8" />
      ))}

      {/* Faceted Glass Light Reflections */}
      <g stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8">
        <line x1="48" y1="240" x2="105" y2="80" />
        <line x1="160" y1="240" x2="218" y2="80" />
      </g>

      {/* Tiered Sky Gardens on Facade Setbacks */}
      <g stroke="#16a34a" strokeWidth="1" fill="#86efac" fillOpacity="0.6">
        <path d="M42 166 C46 161 54 161 58 166 C62 162 70 162 74 166" />
        <path d="M196 166 C200 161 208 161 212 166 C216 162 224 162 228 166" />
      </g>

      {/* Monumental Triple-Height Ground Floor Lobby & Plaza */}
      <rect
        x="36"
        y="258"
        width="198"
        height="42"
        fill={isHovered ? "#fef3c7" : "#f0f9ff"}
        fillOpacity={isHovered ? 0.95 : 0.8}
        stroke="#071525"
        strokeWidth="1.6"
      />
      {/* Grand Entrance Portico Columns in Brass/Gold */}
      {[50, 78, 106, 164, 192, 220].map((x) => (
        <line key={x} x1={x} y1="258" x2={x} y2="300" stroke="#b68b4c" strokeWidth="2.2" />
      ))}
      {/* Entrance Portal Header Beam */}
      <rect x="100" y="255" width="70" height="4" fill="#b68b4c" stroke="#071525" strokeWidth="1.2" />
      <text
        x="135"
        y="272"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="7"
        fontWeight="bold"
        fill="#071525"
        letterSpacing="2"
      >
        SKCL
      </text>

      {/* Urban Plaza Landscaping, Water Features & Figures */}
      {/* Left Trees */}
      <g stroke="#071525" strokeWidth="1">
        <line x1="16" y1="300" x2="16" y2="272" strokeWidth="1.8" />
        <path
          d="M16 272 C8 266 5 252 14 242 C10 230 24 224 32 230 C42 222 54 232 50 246 C58 252 52 268 40 270 C32 276 22 276 16 272 Z"
          fill="#86efac"
          fillOpacity="0.45"
        />
        {/* Right Tree */}
        <line x1="252" y1="300" x2="252" y2="275" strokeWidth="1.6" />
        <path
          d="M252 275 C246 270 244 258 250 250 C248 240 258 235 264 240 C272 234 280 242 278 252 C284 256 280 270 270 272 Z"
          fill="#86efac"
          fillOpacity="0.45"
        />
      </g>

      {/* Scale People Silhouette walking on plaza */}
      <g stroke="#071525" strokeWidth="0.8">
        {[120, 132, 148].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={290} r="1.3" fill="#071525" />
            <line x1={cx} y1={291.5} x2={cx} y2={298} />
            <line x1={cx} y1={298} x2={cx - 1.5} y2={300} />
            <line x1={cx} y1={298} x2={cx + 1.5} y2={300} />
          </g>
        ))}
      </g>

      {/* Ground Baseline */}
      <line x1="4" y1="300" x2="266" y2="300" stroke="#071525" strokeWidth="1.8" />
    </svg>
  );
}

/* =========================================================================
   6. 2026 — BUILDING WHAT'S NEXT
   Next-generation flagship campus (18 floors equivalent), monumental scale,
   dramatic cantilevered geometric volumes, cascading biophilic sky gardens,
   futuristic solar crown canopy, iconic civic gateway.
   ========================================================================= */
export function Building2026({ isHovered, className }: BuildingVectorProps) {
  return (
    <svg
      viewBox="0 0 300 340"
      preserveAspectRatio="xMidYMax meet"
      className={className ?? "w-full h-auto"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="b2026-futuristic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="b2026-glass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#0284c7" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="b2026-gold-trim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b68b4c" />
        </linearGradient>
      </defs>

      {/* FUTURISTIC AERODYNAMIC CROWN / SOLAR CANOPY */}
      <g stroke="#071525" strokeWidth="1.6">
        {/* Floating aerodynamic solar wing */}
        <path
          d="M24 38 C75 20 185 16 276 34 L280 40 C190 22 80 26 28 44 Z"
          fill="url(#b2026-gold-trim)"
        />
        {/* Pylon trusses supporting canopy */}
        <line x1="60" y1="42" x2="75" y2="60" stroke="#b68b4c" strokeWidth="1.6" />
        <line x1="150" y1="36" x2="150" y2="58" stroke="#b68b4c" strokeWidth="1.8" />
        <line x1="240" y1="42" x2="225" y2="60" stroke="#b68b4c" strokeWidth="1.6" />

        {/* Central Communications & Weather Mast */}
        <line x1="150" y1="36" x2="150" y2="10" strokeWidth="1.8" />
        <circle cx="150" cy="9" r="2.5" fill="#f59e0b" />
        <line x1="144" y1="20" x2="156" y2="20" strokeWidth="1.2" />
        <line x1="146" y1="26" x2="154" y2="26" strokeWidth="1.2" />
      </g>

      {/* ICONIC TOWER ARCHITECTURE: CANTILEVERED MULTI-VOLUME SYSTEM */}

      {/* VOLUME 1: Main High-Rise Core (Center-Left) */}
      <rect
        x="50"
        y="58"
        width="118"
        height="282"
        fill="url(#b2026-futuristic)"
        stroke="#071525"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* VOLUME 2: Dramatic Floating Cantilever Wing (Top-Right, overhanging) */}
      <polygon
        points="140,58 260,58 252,176 140,176"
        fill="url(#b2026-futuristic)"
        stroke="#071525"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Cantilever Soffit Gold Trim Line */}
      <line x1="140" y1="176" x2="252" y2="176" stroke="#b68b4c" strokeWidth="2.5" />

      {/* VOLUME 3: Terraced Podium & Campus Wing (Bottom-Right) */}
      <polygon
        points="160,192 270,192 270,340 160,340"
        fill="url(#b2026-futuristic)"
        stroke="#071525"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Glass Curtain Wall Façade & Diagrid on Main Tower */}
      <rect
        x="60"
        y="68"
        width="98"
        height="220"
        fill={isHovered ? "#fbbf24" : "url(#b2026-glass)"}
        fillOpacity={isHovered ? 0.92 : 0.7}
        stroke="#071525"
        strokeWidth="1.4"
        className="transition-all duration-300"
      />

      {/* Glass on Floating Cantilever Volume */}
      <rect
        x="152"
        y="68"
        width="92"
        height="96"
        fill={isHovered ? "#f59e0b" : "url(#b2026-glass)"}
        fillOpacity={isHovered ? 0.92 : 0.75}
        stroke="#071525"
        strokeWidth="1.4"
        className="transition-all duration-300"
      />

      {/* Glass on Podium Wing */}
      <rect
        x="170"
        y="204"
        width="90"
        height="84"
        fill={isHovered ? "#fbbf24" : "url(#b2026-glass)"}
        fillOpacity={isHovered ? 0.9 : 0.65}
        stroke="#071525"
        strokeWidth="1.2"
        className="transition-all duration-300"
      />

      {/* Diagrid Structural Bracing Pattern (Parametric Architecture) */}
      <g stroke="#071525" strokeWidth="1" strokeOpacity="0.85">
        {/* Main Tower Diagrid */}
        <line x1="60" y1="68" x2="158" y2="128" />
        <line x1="158" y1="68" x2="60" y2="128" />
        <line x1="60" y1="128" x2="158" y2="188" />
        <line x1="158" y1="128" x2="60" y2="188" />
        <line x1="60" y1="188" x2="158" y2="248" />
        <line x1="158" y1="188" x2="60" y2="248" />

        {/* Cantilever Diagrid */}
        <line x1="152" y1="68" x2="244" y2="116" stroke="#b68b4c" strokeWidth="1.2" />
        <line x1="244" y1="68" x2="152" y2="116" stroke="#b68b4c" strokeWidth="1.2" />
        <line x1="152" y1="116" x2="244" y2="164" stroke="#b68b4c" strokeWidth="1.2" />
        <line x1="244" y1="116" x2="152" y2="164" stroke="#b68b4c" strokeWidth="1.2" />
      </g>

      {/* Horizontal Floor Bands across Main Tower */}
      {[88, 108, 128, 148, 168, 188, 208, 228, 248, 268].map((y) => (
        <line key={y} x1="60" y1={y} x2="158" y2={y} stroke="#071525" strokeWidth="0.8" />
      ))}

      {/* Dynamic Glass Reflections */}
      <g stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.85">
        <line x1="72" y1="280" x2="148" y2="80" />
        <line x1="162" y1="160" x2="235" y2="76" />
      </g>

      {/* BIOPHILIC SKY GARDENS & BALCONY GREENERY (Multiple cascading levels) */}
      <g stroke="#15803d" strokeWidth="1.2" fill="#86efac" fillOpacity="0.75">
        {/* Roof Garden of Lower Podium */}
        <path d="M162 192 C170 182 185 182 192 192 C200 184 215 184 222 192 C230 182 245 182 254 192 C260 185 268 185 270 192" />
        {/* Mid-tower pocket sky garden */}
        <path d="M50 188 C55 180 65 180 70 188 C75 182 85 182 90 188" />
        {/* Cascading terrace foliage */}
        <path d="M140 178 C145 184 150 184 155 178 C160 184 165 184 170 178" />
      </g>

      {/* Pedestrian Skybridge connecting volumes */}
      <g stroke="#071525" strokeWidth="1.3">
        <rect
          x="148"
          y="232"
          width="24"
          height="18"
          fill={isHovered ? "#fef3c7" : "#bae6fd"}
          fillOpacity="0.9"
        />
        <line x1="148" y1="236" x2="172" y2="236" stroke="#b68b4c" strokeWidth="1" />
        <line x1="148" y1="246" x2="172" y2="246" stroke="#b68b4c" strokeWidth="1" />
      </g>

      {/* Monumental Grand Campus Atrium & Civic Entrance */}
      <rect
        x="52"
        y="294"
        width="216"
        height="46"
        fill={isHovered ? "#fef3c7" : "#e0f2fe"}
        fillOpacity={isHovered ? 0.95 : 0.85}
        stroke="#071525"
        strokeWidth="1.8"
      />
      {/* Structural V-Columns (Signature Modern Architecture) */}
      <g stroke="#b68b4c" strokeWidth="2.4" strokeLinecap="round">
        <line x1="70" y1="294" x2="85" y2="340" />
        <line x1="100" y1="294" x2="85" y2="340" />

        <line x1="130" y1="294" x2="145" y2="340" />
        <line x1="160" y1="294" x2="145" y2="340" />

        <line x1="190" y1="294" x2="205" y2="340" />
        <line x1="220" y1="294" x2="205" y2="340" />
      </g>
      {/* Illuminated entrance canopy */}
      <polygon points="110,290 180,290 185,294 105,294" fill="#071525" />

      {/* Campus Plaza, Landscaping & Active Figures */}
      <g stroke="#071525" strokeWidth="1">
        {/* Left Lush Grove */}
        <line x1="22" y1="340" x2="22" y2="305" strokeWidth="2" />
        <path
          d="M22 305 C14 298 10 280 20 268 C16 252 32 244 42 252 C54 242 70 255 64 272 C74 280 66 300 52 302 C42 310 28 310 22 305 Z"
          fill="#86efac"
          fillOpacity="0.45"
        />
        {/* Right Modern Boulevard Trees */}
        <line x1="282" y1="340" x2="282" y2="310" strokeWidth="1.8" />
        <circle cx="282" cy="300" r="14" fill="#86efac" fillOpacity="0.4" stroke="#071525" strokeWidth="1" />
      </g>

      {/* Active Campus Pedestrian Figures */}
      <g stroke="#071525" strokeWidth="0.8">
        {[105, 122, 142, 168, 230, 245].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={330} r="1.4" fill="#071525" />
            <line x1={cx} y1={331.5} x2={cx} y2={338} />
            <line x1={cx} y1={338} x2={cx - 1.5} y2={340} />
            <line x1={cx} y1={338} x2={cx + 1.5} y2={340} />
          </g>
        ))}
      </g>

      {/* Ground Baseline */}
      <line x1="4" y1="340" x2="296" y2="340" stroke="#071525" strokeWidth="2" />
    </svg>
  );
}
