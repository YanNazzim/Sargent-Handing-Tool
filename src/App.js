// src/App.js
import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';
import { productData } from './data';
import { Images } from './images/images'; // Import Images object from src/images/images.js
import CustomMenu from './components/CustomMenu'; // Assuming you have this component
import ExplanationRenderer from './components/ExplanationRenderer'; // Import the new ExplanationRenderer

// --- Custom Styles for react-select ---
const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f8f8f8',
    borderColor: state.isFocused ? '#007bff' : '#ced4da',
    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none',
    borderRadius: '8px',
    minHeight: '45px',
    padding: '0 8px',
    fontSize: '16px',
    '&:hover': {
      borderColor: '#007bff',
     
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#6c757d',
    fontSize: '16px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#343a40',
    fontSize: '16px',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '0px',
    zIndex: 9999,
    
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#e9ecef' : 'white',
    color: state.isSelected ? '#007bff' : '#343a40',
    fontWeight: state.isSelected ? 'bold' : 'normal',
    padding: '12px 20px',
    fontSize: '16px',
    '&:active': {
      backgroundColor: '#007bff',
      color: 'white',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#ced4da',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#6c757d',
    '&:hover': {
      color: '#0056b3',
    },
    transition: 'transform 0.2s ease-in-out',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#dc3545',
    '&:hover': {
      color: '#c82333',
    },
  }),
  groupHeading: (provided) => ({
    ...provided,
    backgroundColor: '#f1f1f1',
    color: '#495057',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '5px',
  }),
  group: (provided) => ({
    ...provided,
    paddingBottom: '10px',
  }),
};

// --- Data Transformation Function ---
const transformExitDevicesForSelect = (data) => {
  const groupedOptions = {};
  data.exitDevices.forEach(seriesData => {
    const category = seriesData.category || "Uncategorized Series";
    if (!groupedOptions[category]) {
      groupedOptions[category] = {
        label: category,
        options: []
      };
    }
    groupedOptions[category].options.push({
      value: seriesData.series,
      label: seriesData.series,
      type: 'series'
    });
  });
  return Object.values(groupedOptions);
};

// --- Modal Component ---
const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>X</button>
        <img src={imageUrl} alt="Enlarged Handing Visual" className="modal-image" />
      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeriesOption, setSelectedSeriesOption] = useState(null);
  const [selectedFunctionOption, setSelectedFunctionOption] = useState(null);
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const seriesOptions = transformExitDevicesForSelect(productData);

  const functionOptions = selectedSeriesOption
    ? productData.exitDevices
      .find(d => d.series === selectedSeriesOption.value)
      ?.functions.map(func => ({
        value: func.functionCode,
        label: func.functionCode,
      })) || []
    : [];

  const currentFunctionDetails = selectedSeriesOption && selectedFunctionOption
    ? productData.exitDevices
      .find(d => d.series === selectedSeriesOption.value)
      ?.functions.find(f => f.functionCode === selectedFunctionOption.value)
    : null;

  const openModal = (url) => setModalImageUrl(url);
  const closeModal = () => setModalImageUrl(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSeriesOption(null);
    setSelectedFunctionOption(null);
  };

  const handleSeriesChange = (option) => {
    setSelectedSeriesOption(option);
    setSelectedFunctionOption(null);
  };

  const handleFunctionChange = (option) => {
    setSelectedFunctionOption(option);
  };

  // Helper function to render visuals for both handed and reversible
  const renderVisuals = (visuals) => {
    if (!visuals) return null; // No visuals available

    // Define the order of keys you want to display,
    // placing 'generic' last if it exists, or just specific handed visuals.
    const keys = ['lh', 'rh', 'lhr', 'rhr', 'generic'];
    
    // Filter out keys that don't exist in the visuals object
    // and then map them to handing cards.
    return (
      <div className="visuals">
        {keys.map((key, index) => {
          const imageUrl = visuals[key];
          if (imageUrl) { // Only render if the image URL exists for this key
            let labelText = '';
            switch(key) {
              case 'lh': labelText = 'LH'; break;
              case 'rh': labelText = 'RH'; break;
              case 'lhr': labelText = 'LHR'; break;
              case 'rhr': labelText = 'RHR'; break;
              case 'generic': labelText = 'Reversible Product'; break;
              default: labelText = key.toUpperCase();
            }
            return (
              <div key={key} className="handing-card" style={{ '--i': index }}>
                <img src={imageUrl} alt={labelText} onClick={() => openModal(imageUrl)} />
                <p>{labelText}</p>
              </div>
            );
          }
          return null; // Don't render if image URL doesn't exist
        })}
      </div>
    );
  };


  const renderProductDetails = () => {
    if (!selectedCategory) {
      return <p>Please select a product category to get started.</p>;
    }

    if (selectedCategory === "exitDevices") {
      return (
        <div className="exit-devices-section">
          <h2>Exit Devices</h2>
          <div className="dropdowns-container">
            <div className="series-dropdown-wrapper">
              <label htmlFor="series-select" className="dropdown-label">Select Series</label>
              <Select
                id="series-select"
                options={seriesOptions}
                onChange={handleSeriesChange}
                value={selectedSeriesOption}
                placeholder="Series"
                isClearable
                isSearchable
                styles={customSelectStyles}
                menuPlacement="top"
                menuPortalTarget={document.body}
                components={{ Menu: CustomMenu }}
              />
            </div>

            {selectedSeriesOption && (
              <div className="function-dropdown-wrapper">
                <label htmlFor="function-select" className="dropdown-label">Select Function</label>
                <Select
                  id="function-select"
                  options={functionOptions}
                  onChange={handleFunctionChange}
                  value={selectedFunctionOption}
                  placeholder="Function"
                  isClearable
                  isSearchable
                  styles={customSelectStyles}
                  menuPlacement="top"
                  menuPortalTarget={document.body}
                  components={{ Menu: CustomMenu }}
                />
              </div>
            )}
          </div>

          {selectedSeriesOption && (
            <div className="functions-section">
              {currentFunctionDetails && (
                <div className="handing-details">
                  <h4>Details for Function {currentFunctionDetails.functionCode}</h4>
                  {/* Now the logic for handing info and visuals is unified */}
                  {currentFunctionDetails.handing === "handed" ? (
                    <div className="handed-info">
                      <p className="warning">WARNING: This device and function combination is HANDED.</p>
                      <ExplanationRenderer contentArray={currentFunctionDetails.explanation} />
                      {renderVisuals(currentFunctionDetails.visuals)} {/* Unified visual rendering */}
                    </div>
                  ) : (
                    <div className="reversible-info">
                      <p className="positive">GOOD NEWS: This device and function combination is REVERSIBLE.</p>
                      <ExplanationRenderer contentArray={currentFunctionDetails.explanation} />
                      {renderVisuals(currentFunctionDetails.visuals)} {/* Unified visual rendering */}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    else if (selectedCategory === "mortiseLocks" || selectedCategory === "boredLocks") {
      const lockData = productData[selectedCategory][0];
      return (
        <div className="lock-details-section">
          <h2>{lockData.type}</h2>
          {lockData.handing === "handed" ? (
            <div className="handed-info">
              <p className="warning">WARNING: This product type is HANDED.</p>
              <ExplanationRenderer contentArray={lockData.explanation} />
              {renderVisuals(lockData.visuals)} {/* Unified visual rendering */}
            </div>
          ) : (
            <div className="reversible-info">
              <p className="positive">GOOD NEWS: This product type is REVERSIBLE.</p>
              <ExplanationRenderer contentArray={lockData.explanation} />
              {renderVisuals(lockData.visuals)} {/* Unified visual rendering */}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Images.logo} alt="Sargent Logo" className="logo" />
        <h1>Sargent Product Handing Tool</h1>
      </header>
      <nav className="category-selection">
        <button onClick={() => handleCategoryChange("exitDevices")}
          className={selectedCategory === "exitDevices" ? "active" : ""}
          style={{ '--delay': '0s' }}>
          Exit Devices
        </button>
        <button onClick={() => handleCategoryChange("mortiseLocks")}
          className={selectedCategory === "mortiseLocks" ? "active" : ""}
          style={{ '--delay': '0.1s' }}>
          Mortise Locks
        </button>
        <button onClick={() => handleCategoryChange("boredLocks")}
          className={selectedCategory === "boredLocks" ? "active" : ""}
          style={{ '--delay': '0.2s' }}>
          Bored Locks
        </button>
      </nav>

      <main className="product-display">
        {renderProductDetails()}
      </main>

      <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
    </div>
  );
}

export default App;