import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ className,title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="collapse">
      <button
        type="button"
        className={`collapse-header ${className || ''}`}
        onClick={() => setOpen(!open)}
      >
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow ${open ? 'open' : ''}`}>⌃</span>
      </button>
      {open && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
