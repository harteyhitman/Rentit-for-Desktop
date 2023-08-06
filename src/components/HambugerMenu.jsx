import React, { useState } from 'react';

function HambugerMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hamburger-menu-bar">
      <header>
        <div className="hambuger-navbar">
          <div className="hamburger-click" onClick={handleMenuClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <ul>
            <li>Blog</li>
            <li>Listings</li>
            <li>LogIn</li>
            <li>Postings</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default HambugerMenu;
