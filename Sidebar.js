import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">Profile</div>
      <nav className="links">
        <ul>
          <li>All Products</li>
          <li>All User</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;