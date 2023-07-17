import React from "react";

export default function SidebarItem({ name, active, hamdleClick }) {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={hamdleClick}
    >
      {name}
    </button>
  );
}
