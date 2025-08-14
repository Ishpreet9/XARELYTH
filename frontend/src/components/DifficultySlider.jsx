import { useState } from "react";

export default function DifficultySlider() {
  const [value, setValue] = useState(5); // default value

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-64"
      />
      <span className="text-lg font-bold">Difficulty: {value}</span>
    </div>
  );
}
