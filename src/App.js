// src/App.js
import React, { useState } from 'react';
import './App.css';
import { productData } from './data';
import { Images } from './images/images';

// New Modal Component (can be put in a separate file like Modal.js if it grows)
const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null; // Don't render if no image is selected

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Click overlay to close */}
      <div className="modal-content" onClick={e => e.stopPropagation()}> {/* Prevent click inside from closing */}
        <button className="modal-close-button" onClick={onClose}>X</button>
        <img src={imageUrl} alt="Enlarged Handing Visual" className="modal-image" />
      </div>
    </div>
  );
};


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [modalImageUrl, setModalImageUrl] = useState(null); // New state for modal image URL

  // Function to open the modal
  const openModal = (url) => {
    setModalImageUrl(url);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalImageUrl(null);
  };

  const renderProductDetails = () => {
    if (!selectedCategory) {
      return <p>Please select a product category to get started.</p>;
    }

    if (selectedCategory === "exitDevices") {
      return (
        <div className="exit-devices-section">
          <h2>Exit Devices</h2>
          <select
            onChange={(e) => {
              setSelectedSeries(e.target.value);
              setSelectedFunction(null);
            }}
            value={selectedSeries || ""}
          >
            <option value="" disabled>Select a Series</option>
            {productData.exitDevices.map((device, index) => (
              <option key={index} value={device.series}>
                {device.series}
              </option>
            ))}
          </select>

          {selectedSeries && (
            <div className="functions-section">
              <h3>Functions for {selectedSeries}</h3>
              <select
                onChange={(e) => setSelectedFunction(e.target.value)}
                value={selectedFunction || ""}
              >
                <option value="" disabled>Select a Function</option>
                {productData.exitDevices.find(d => d.series === selectedSeries)?.functions.map((func, index) => (
                  <option key={index} value={func.functionCode}>
                    {func.functionCode}
                  </option>
                ))}
              </select>

              {selectedFunction && (
                <div className="handing-details">
                  <h4>Details for Function {selectedFunction}</h4>
                  {productData.exitDevices
                    .find(d => d.series === selectedSeries)
                    ?.functions.find(f => f.functionCode === selectedFunction)
                    .handing === "handed" ? (
                      <div className="handed-info">
                        <p className="warning">WARNING: This device and function combination is HANDED.</p>
                        <p>{productData.exitDevices
                          .find(d => d.series === selectedSeries)
                          ?.functions.find(f => f.functionCode === selectedFunction)
                          .explanation}</p>
                        <div className="visuals">
                            {Object.entries(productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals || {}).map(([key, value], index) => (
                                <div key={key} className="handing-card" style={{ '--i': index }}>
                                    {/* OnClick handler added to img */}
                                    <img src={value} alt={key} onClick={() => openModal(value)} />
                                    <p>{key.toUpperCase()}</p>
                                </div>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <div className="reversible-info">
                        <p className="positive">GOOD NEWS: This device and function combination is REVERSIBLE.</p>
                        <p>{productData.exitDevices
                          .find(d => d.series === selectedSeries)
                          ?.functions.find(f => f.functionCode === selectedFunction)
                          .explanation}</p>
                        <div className="visuals">
                          <div className="handing-card" style={{ '--i': 0 }}>
                            {/* OnClick handler added to img */}
                            <img src={productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.generic} alt="Reversible" onClick={() => openModal(productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.generic)} />
                            <p>Reversible Product</p>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>
          )}
        </div>
      );
    } else if (selectedCategory === "mortiseLocks" || selectedCategory === "boredLocks") {
      const lockData = productData[selectedCategory][0];
      return (
        <div className="lock-details-section">
          <h2>{lockData.type}</h2>
          {lockData.handing === "handed" ? (
            <div className="handed-info">
              <p className="warning">WARNING: This product type is HANDED.</p>
              <p>{lockData.explanation}</p>
              <div className="visuals">
                {Object.entries(lockData.visuals || {}).map(([key, value], index) => (
                    <div key={key} className="handing-card" style={{ '--i': index }}>
                        {/* OnClick handler added to img */}
                        <img src={value} alt={key} onClick={() => openModal(value)} />
                        <p>{key.toUpperCase()}</p>
                    </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="reversible-info">
              <p className="positive">GOOD NEWS: This product type is REVERSIBLE.</p>
              <p>{lockData.explanation}</p>
              <div className="visuals">
                <div className="handing-card" style={{ '--i': 0 }}>
                    {/* OnClick handler added to img */}
                    <img src={lockData.visuals.generic} alt="Reversible" onClick={() => openModal(lockData.visuals.generic)} />
                    <p>Reversible Product</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Images.logo} alt="Sargent Logo" className="logo" />
        <h1>Sargent Product Handing Tool</h1>
      </header>
      <nav className="category-selection">
        <button onClick={() => {
          setSelectedCategory("exitDevices");
          setSelectedSeries(null);
          setSelectedFunction(null);
        }}
        className={selectedCategory === "exitDevices" ? "active" : ""}
        style={{ '--delay': '0s' }}>
          Exit Devices
        </button>
        <button onClick={() => {
          setSelectedCategory("mortiseLocks");
          setSelectedSeries(null);
          setSelectedFunction(null);
        }}
        className={selectedCategory === "mortiseLocks" ? "active" : ""}
        style={{ '--delay': '0.1s' }}>
          Mortise Locks
        </button>
        <button onClick={() => {
          setSelectedCategory("boredLocks");
          setSelectedSeries(null);
          setSelectedFunction(null);
        }}
        className={selectedCategory === "boredLocks" ? "active" : ""}
        style={{ '--delay': '0.2s' }}>
          Bored Locks
        </button>
      </nav>

      <main className="product-display">
        {renderProductDetails()}
      </main>

      {/* Render the modal component */}
      <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
    </div>
  );
}

export default App;