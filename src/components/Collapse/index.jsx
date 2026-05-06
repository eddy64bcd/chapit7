import React, { useState } from 'react';


const Collapse = ({ className, title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "12px" }}>
      <div className={className}
        onClick={() => setOpen(!open)}
        style={{
          background: "#FF6060",
          borderRadius: open ? "8px 8px 0 0" : "8px",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          
        }}
      >
        <span style={{ color: "white", fontFamily: "'Montserrat', sans-serif", fontWeight: "600", fontSize: "15px" }}>{title}</span>
        <span style={{ color: "white", fontSize: "20px", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>⌃</span>
      </div>
      {open && (
        <div style={{
          background: "#f6f6f6",
          borderRadius: "0 0 8px 8px",
          padding: "16px 20px",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "14px",
          color: "#555",
          lineHeight: "1.6",
        }}>
          {children}
        </div>
      )}
    </div>
  );
};


export default Collapse;