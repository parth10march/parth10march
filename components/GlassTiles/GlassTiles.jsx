'use client';

import React, { useEffect, useRef } from 'react';
import './GlassTiles.css';

/**
 * GlassTiles Component - React Bits Pro
 * A shimmering background of colorful glass tiles
 *
 * Props:
 * - tileDensity: number of columns (default: 12)
 * - rows: number of rows (default: 6)
 * - speed: animation speed in seconds (default: 8)
 * - colorA: primary glow color (default: '#6C63FF')
 * - colorB: secondary glow color (default: '#00F0FF')
 * - colorC: accent glow color (default: '#FF007F')
 * - warpStrength: intensity of shimmer (default: 0.6)
 * - className: additional css classes
 * - children: optional content to overlay
 */
const GlassTiles = ({
  tileDensity = 12,
  rows = 6,
  speed = 8,
  colorA = '#6C63FF',
  colorB = '#00F0FF',
  colorC = '#FF007F',
  warpStrength = 0.6,
  className = '',
  children,
  style = {}
}) => {
  const containerRef = useRef(null);

  const tiles = Array.from({ length: tileDensity * rows }, (_, i) => ({
    id: i,
    delay: (i % tileDensity) * 0.15 + Math.floor(i / tileDensity) * 0.2
  }));

  const cssVars = {
    '--tile-cols': tileDensity,
    '--tile-rows': rows,
    '--anim-speed': `${speed}s`,
    '--color-a': colorA,
    '--color-b': colorB,
    '--color-c': colorC,
    '--warp': warpStrength,
    ...style
  };

  return (
    <div
      ref={containerRef}
      className={`glass-tiles-container ${className}`.trim()}
      style={cssVars}
    >
      {/* Underlying undulating chromatic lights */}
      <div className="glass-tiles-lights">
        <div className="glass-light light-a" />
        <div className="glass-light light-b" />
        <div className="glass-light light-c" />
      </div>

      {/* Grid of Shimmering Glass Tiles */}
      <div className="glass-tiles-grid">
        {tiles.map(tile => (
          <div
            key={tile.id}
            className="glass-tile"
            style={{ animationDelay: `${tile.delay}s` }}
          >
            <div className="glass-tile-shine" />
          </div>
        ))}
      </div>

      {/* Overlay content if provided */}
      {children && <div className="glass-tiles-content">{children}</div>}
    </div>
  );
};

export default GlassTiles;
