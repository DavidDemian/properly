import React from 'react';

const ProperlyLogo = ({ className = '', style = {}, width = 260, height = 64 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 320 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Main icon (house/check) on the left */}
    <g>
      <path
        d="M28 46V22a8 8 0 0 1 8-8h8a8 8 0 0 1 8 8v24"
        fill="none"
        stroke="#3496ff"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <polyline
        points="28,46 36,54 52,34"
        fill="none"
        stroke="#FFD700"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="24,26 40,14 56,26"
        fill="none"
        stroke="#3496ff"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </g>
    {/* Large wordmark to the right of the icon */}
    <text
      x="80"
      y="48"
      fontFamily="'Montserrat', 'Righteous', Arial, sans-serif"
      fontSize="38"
      fontWeight="700"
      letterSpacing="2"
      fill="#222"
      style={{ fontFamily: 'Montserrat, Righteous, Arial, sans-serif', fontWeight: 700 }}
    >
      proper
    </text>
    <text
      x="196"
      y="48"
      fontFamily="'Montserrat', 'Righteous', Arial, sans-serif"
      fontSize="38"
      fontWeight="700"
      fontStyle="italic"
      letterSpacing="2"
      fill="#FFD700"
      style={{ fontFamily: 'Montserrat, Righteous, Arial, sans-serif', fontWeight: 700, fontStyle: 'italic' }}
    >
      ly
    </text>
  </svg>
);

export default ProperlyLogo; 