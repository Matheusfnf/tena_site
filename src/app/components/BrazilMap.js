'use client';

import React, { useState } from 'react';
import Brazil from '@svg-maps/brazil';
import styles from './BrazilMap.module.css';

export default function BrazilMap() {
  const [hoveredState, setHoveredState] = useState(null);
  const [hoveredUnit, setHoveredUnit] = useState(null);

  const units = [
    { id: 'patos', name: 'Patos de Minas - MG', cx: 450, cy: 400, state: 'mg' },
    { id: 'unai', name: 'Unaí - MG', cx: 420, cy: 350, state: 'mg' },
    { id: 'navegantes', name: 'Navegantes - SC', cx: 380, cy: 570, state: 'sc' }
  ];

  return (
    <div className={styles.mapContainer}>
      <svg 
        viewBox={Brazil.viewBox} 
        className={styles.mapSvg}
      >
        <g className={styles.statesGroup}>
          {Brazil.locations.map(location => {
            const isHighlighted = location.id === 'mg' || location.id === 'sc';
            const isHovered = hoveredState === location.id;
            
            return (
              <path
                key={location.id}
                id={location.id}
                name={location.name}
                d={location.path}
                className={`
                  ${styles.statePath} 
                  ${isHighlighted ? styles.stateHighlighted : ''} 
                  ${isHovered ? styles.stateHovered : ''}
                `}
                onMouseEnter={() => setHoveredState(location.id)}
                onMouseLeave={() => setHoveredState(null)}
              />
            );
          })}
        </g>
        
        <g className={styles.unitsGroup}>
          {units.map(unit => (
            <g 
              key={unit.id}
              className={`${styles.unitMarker} ${hoveredUnit === unit.id ? styles.unitHovered : ''}`}
              onMouseEnter={() => {
                setHoveredUnit(unit.id);
                setHoveredState(unit.state);
              }}
              onMouseLeave={() => {
                setHoveredUnit(null);
                setHoveredState(null);
              }}
            >
              <circle cx={unit.cx} cy={unit.cy} r={8} className={styles.markerCircle} />
              
              <text 
                x={unit.cx + 20} 
                y={unit.cy + 5} 
                className={`${styles.markerLabel} ${hoveredUnit === unit.id ? styles.labelVisible : ''}`}
              >
                {unit.name}
              </text>
            </g>
          ))}
        </g>
      </svg>
      
      <div className={styles.legend}>
        <h3>Onde Estamos</h3>
        <ul>
          {units.map(unit => (
            <li 
              key={unit.id}
              onMouseEnter={() => {
                setHoveredUnit(unit.id);
                setHoveredState(unit.state);
              }}
              onMouseLeave={() => {
                setHoveredUnit(null);
                setHoveredState(null);
              }}
              className={hoveredUnit === unit.id ? styles.legendItemHovered : styles.legendItem}
            >
              <span className={styles.legendDot}></span> {unit.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
