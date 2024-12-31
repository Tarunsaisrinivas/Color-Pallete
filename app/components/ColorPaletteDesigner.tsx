'use client'

import React, { useState } from 'react';
import ColorInput from './ColorInput';
import SampleInterface from './SimpleInterface';

const ColorPaletteDesigner: React.FC = () => {
  const [colors, setColors] = useState({
    primary: '#040316',
    secondary: '#EDEDED',
    accent: '#242424',
    neutral: '#808080',
    highlight: '#00F8F8',
  });

  const handleColorChange = (colorName: string, colorValue: string) => {
    setColors(prevColors => ({
      ...prevColors,
      [colorName]: colorValue,
    }));
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: colors.secondary }}>
      <h1 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>
        Interactive Color Palette Designer
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
            Choose Your Colors
          </h2>
          <div className="space-y-4">
            {Object.entries(colors).map(([name, color]) => (
              <ColorInput
                key={name}
                name={name}
                value={color}
                onChange={(value) => handleColorChange(name, value)}
              />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
            Sample Interface
          </h2>
          <SampleInterface colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDesigner;

