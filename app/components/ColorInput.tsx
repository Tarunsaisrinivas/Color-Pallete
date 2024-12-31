import React from 'react';

interface ColorInputProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorInput: React.FC<ColorInputProps> = ({ name, value, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor={name} className="w-24 capitalize">{name}:</label>
      <input
        type="color"
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-12 h-8"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded  px-2 py-1"
      />
    </div>
  );
};

export default ColorInput;

