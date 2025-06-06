// src/App.js
import React, { useState } from 'react';
import './App.css'; // We'll add some basic styling later
import { productData } from './data'; // Import our data

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to hold the selected product category
  const [selectedSeries, setSelectedSeries] = useState(null); // State to hold the selected exit device series
  const [selectedFunction, setSelectedFunction] = useState(null); // State to hold the selected exit device function

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
              setSelectedFunction(null); // Reset function when series changes
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
                          <img src={productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.lh} alt="Left Hand" />
                          <p>LH</p>
                          <img src={productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.rh} alt="Right Hand" />
                          <p>RH</p>
                          <img src={productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.lhr} alt="Left Hand Reverse" />
                          <p>LHR</p>
                          <img src={productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.rhr} alt="Right Hand Reverse" />
                          <p>RHR</p>
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
                          <img src={productData.exitDevices.find(d => d.series === selectedSeries)?.functions.find(f => f.functionCode === selectedFunction).visuals.generic} alt="Reversible" />
                          <p>Reversible Product</p>
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
      const lockData = productData[selectedCategory][0]; // Get the single entry for mortise/bored locks
      return (
        <div className="lock-details-section">
          <h2>{lockData.type}</h2>
          {lockData.handing === "handed" ? (
            <div className="handed-info">
              <p className="warning">WARNING: This product type is HANDED.</p>
              <p>{lockData.explanation}</p>
              <div className="visuals">
                <img src={lockData.visuals.lh} alt="Left Hand" />
                <p>LH</p>
                <img src={lockData.visuals.rh} alt="Right Hand" />
                <p>RH</p>
                <img src={lockData.visuals.lhr} alt="Left Hand Reverse" />
                <p>LHR</p>
                <img src={lockData.visuals.rhr} alt="Right Hand Reverse" />
                <p>RHR</p>
              </div>
            </div>
          ) : (
            <div className="reversible-info">
              <p className="positive">GOOD NEWS: This product type is REVERSIBLE.</p>
              <p>{lockData.explanation}</p>
              <div className="visuals">
                <img src={lockData.visuals.generic} alt="Reversible" />
                <p>Reversible Product</p>
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
        <img src="/images/logo.png" alt="Sargent Logo" className="logo" />
        <h1>Sargent Product Handing Tool</h1>
      </header>
      <nav className="category-selection">
        <button onClick={() => {
          setSelectedCategory("exitDevices");
          setSelectedSeries(null); // Reset series and function when category changes
          setSelectedFunction(null);
        }}
        className={selectedCategory === "exitDevices" ? "active" : ""}>
          Exit Devices
        </button>
        <button onClick={() => {
          setSelectedCategory("mortiseLocks");
          setSelectedSeries(null);
          setSelectedFunction(null);
        }}
        className={selectedCategory === "mortiseLocks" ? "active" : ""}>
          Mortise Locks
        </button>
        <button onClick={() => {
          setSelectedCategory("boredLocks");
          setSelectedSeries(null);
          setSelectedFunction(null);
        }}
        className={selectedCategory === "boredLocks" ? "active" : ""}>
          Bored Locks
        </button>
      </nav>

      <main className="product-display">
        {renderProductDetails()}
      </main>
    </div>
  );
}

export default App;