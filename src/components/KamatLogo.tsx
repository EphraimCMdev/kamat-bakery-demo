import React from 'react';

interface KamatLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const KamatLogo: React.FC<KamatLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      {/* Outer Glow / Ring */}
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Circle with Orange/Red Edge */}
        <circle cx="100" cy="100" r="96" fill="#FFD400" stroke="#FF7A00" strokeWidth="6" />
        
        {/* Inner subtle rim */}
        <circle cx="100" cy="100" r="90" stroke="#120E0D" strokeWidth="2" strokeOpacity="0.15" />
        
        {/* Black Badge Silhouette */}
        <path
          d="M 52 82 C 45 68, 62 55, 78 58 C 90 48, 110 48, 122 58 C 138 55, 155 68, 148 82 C 158 96, 152 118, 138 124 C 130 132, 115 134, 100 134 C 85 134, 70 132, 62 124 C 48 118, 42 96, 52 82 Z"
          fill="none"
          stroke="#120E0D"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Text: KAMAT */}
        <text
          x="100"
          y="88"
          textAnchor="middle"
          fill="#120E0D"
          fontFamily="'Playfair Display', 'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="900"
          fontSize="26"
          letterSpacing="2"
        >
          KAMAT
        </text>

        {/* Text: BAKERY */}
        <text
          x="100"
          y="108"
          textAnchor="middle"
          fill="#120E0D"
          fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="3"
        >
          BAKERY
        </text>

        {/* Pill at bottom: Since : 1988 */}
        <rect
          x="62"
          y="118"
          width="76"
          height="16"
          rx="8"
          fill="#120E0D"
        />
        <text
          x="100"
          y="130"
          textAnchor="middle"
          fill="#FFD400"
          fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="700"
          fontSize="8.5"
          letterSpacing="0.8"
        >
          Since : 1988
        </text>
      </svg>
    </div>
  );
};
