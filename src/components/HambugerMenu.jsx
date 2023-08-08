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
            <li><a href="#Home-page" onClick={handleCloseModal}>Blog</a></li>
            <li><a href="#Home-page" onClick={handleCloseModal}>Listings</a></li>
            <li><a href="#Home-page" onClick={handleCloseModal}>LogIn</a></li>
            <li><a href="#Home-page" onClick={handleCloseModal}>Postings</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default HambugerMenu;
