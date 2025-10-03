import React from 'react';
import {SearchbarIcon} from '@/assets/Svgicons'

interface SearchbarProps {
  placeholder: string; // Accepts a custom placeholder text as a prop
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder }) => {
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder={placeholder} // Dynamic placeholder passed as a prop
        className="input"
      />
      <button className="Search-btn">
        {SearchbarIcon}
      </button>
    </div>
  );
};

export default Searchbar;


