// src/App.js
import React, { useState, useEffect } from 'react';
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
    backgroundColor: 'var(--dark-surface)', // Matches app background in both modes
    borderColor: state.isFocused ? 'var(--navy-accent)' : 'var(--border-dark)', // Dynamic border color
    boxShadow: state.isFocused ? `0 0 0 1px var(--navy-accent), 0 0 0 0.25rem rgba(0, 123, 255, 0.25)` : 'none', // Enhanced focus shadow
    borderRadius: '12px', // Slightly more rounded for modern look
    minHeight: '55px', // Taller control for better touch targets
    padding: '0 12px', // Increased padding inside
    transition: 'all 0.3s ease-in-out', // Smooth transitions for interactions
    '&:hover': {
      borderColor: 'var(--navy-accent)', // Consistent hover border
    },
    cursor: 'pointer', // Indicate interactivity
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--dark-text)', // Placeholder text color
    fontSize: '22px', // Slightly smaller for balance
    fontWeight: '500',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--dark-text-light)', // Selected value text color
    fontSize: '22px', // Consistent with placeholder
    fontWeight: '600',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '12px', // Matches control border-radius
    boxShadow: '0 8px 24px var(--shadow-dark)', // Larger, more prominent shadow
    marginTop: '8px', // Space between control and menu
    zIndex: 9999,
    overflow: 'hidden', // Ensures rounded corners are respected
    border: '1px solid var(--border-dark)', // Subtle border for the menu
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--navy-accent)' // Selected option background
      : state.isFocused
        ? 'var(--navy-accent-hover)' // Focused option background
        : 'var(--dark-surface)', // Default option background
    color: state.isSelected ? 'var(--dark-text-light)' : 'var(--dark-text)', // Text color based on selection
    fontWeight: state.isSelected ? '700' : '500', // Bold for selected, medium for others
    padding: '15px 25px', // More padding for each option
    fontSize: '20px', // Adjusted font size
    transition: 'background-color 0.2s ease, color 0.2s ease', // Smooth hover effect
    cursor: 'pointer',
    '&:active': {
      backgroundColor: 'var(--navy-accent)', // Stronger active state
      color: 'var(--dark-text-light)',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'var(--border-dark)', // Separator color
    height: '60%', // Shorter separator for modern look
    alignSelf: 'center',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--dark-text)', // Arrow color
    '&:hover': {
      color: 'var(--navy-accent)', // Hover color for arrow
    },
    transition: 'transform 0.2s ease-in-out, color 0.2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null, // Rotates arrow on focus
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'var(--warning-dark)', // Clear icon color
    '&:hover': {
      color: 'var(--warning-dark)', // Darker clear icon on hover
    },
  }),
  groupHeading: (provided) => ({
    ...provided,
    backgroundColor: 'var(--border-dark)', // Group heading background
    color: 'var(--dark-text-light)', // Group heading text color
    padding: '12px 25px',
    fontWeight: '700',
    fontSize: '15px', // Slightly larger group heading
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    borderBottom: '1px solid var(--border-dark)',
  }),
  group: (provided) => ({
    ...provided,
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
  const [selectedBoredLockOption, setSelectedBoredLockOption] = useState(null);
  const [selectedMortiseLockOption, setSelectedMortiseLockOption] = useState(null); // New state for mortise locks
  const [modalImageUrl, setModalImageUrl] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  // Effect to apply/remove 'light-mode' class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const seriesOptions = transformExitDevicesForSelect(productData);

  const functionOptions = selectedSeriesOption
    ? productData.exitDevices
      .find(d => d.series === selectedSeriesOption.value)
      ?.functions.map(func => ({
        value: func.functionCode,
        label: func.functionCode,
      })) || []
    : [];

  const boredLockOptions = productData.boredLocks.map(lock => ({
    value: lock.type,
    label: lock.type,
  }));

  // New options for mortise locks dropdown
  const mortiseLockOptions = productData.mortiseLocks.map(lock => ({
    value: lock.type,
    label: lock.type,
  }));


  const currentFunctionDetails = selectedSeriesOption && selectedFunctionOption
    ? productData.exitDevices
      .find(d => d.series === selectedSeriesOption.value)
      ?.functions.find(f => f.functionCode === selectedFunctionOption.value)
    : null;

  const currentBoredLockDetails = selectedBoredLockOption
    ? productData.boredLocks.find(lock => lock.type === selectedBoredLockOption.value)
    : null;

  // New current mortise lock details
  const currentMortiseLockDetails = selectedMortiseLockOption
    ? productData.mortiseLocks.find(lock => lock.type === selectedMortiseLockOption.value)
    : null;


  const openModal = (url) => setModalImageUrl(url);
  const closeModal = () => setModalImageUrl(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSeriesOption(null);
    setSelectedFunctionOption(null);
    setSelectedBoredLockOption(null);
    setSelectedMortiseLockOption(null); // Clear mortise lock selection when category changes
  };

  const handleSeriesChange = (option) => {
    setSelectedSeriesOption(option);
    setSelectedFunctionOption(null);
  };

  const handleFunctionChange = (option) => {
    setSelectedFunctionOption(option);
  };

  const handleBoredLockChange = (option) => {
    setSelectedBoredLockOption(option);
  };

  // New handler for mortise lock selection
  const handleMortiseLockChange = (option) => {
    setSelectedMortiseLockOption(option);
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
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
    } else if (selectedCategory === "mortiseLocks") {
      return (
        <div className="mortise-locks-section">
          <h2>Mortise Locks</h2>
          <div className="dropdowns-container">
            <div className="mortise-lock-dropdown-wrapper">
              <label htmlFor="mortise-lock-select" className="dropdown-label">Select Mortise Lock Type</label>
              <Select
                id="mortise-lock-select"
                options={mortiseLockOptions}
                onChange={handleMortiseLockChange}
                value={selectedMortiseLockOption}
                placeholder="Mortise Lock Type"
                isClearable
                isSearchable
                styles={customSelectStyles}
                menuPlacement="top"
                menuPortalTarget={document.body}
                components={{ Menu: CustomMenu }}
              />
            </div>
          </div>

          {currentMortiseLockDetails && (
            <div className="mortise-lock-details">
              <h4>Details for {currentMortiseLockDetails.type}</h4>
              {currentMortiseLockDetails.handing === "handed" ? (
                <div className="handed-info">
                  <p className="warning">WARNING: This mortise lock type is HANDED.</p>
                  <ExplanationRenderer contentArray={currentMortiseLockDetails.explanation} />
                  {renderVisuals(currentMortiseLockDetails.visuals)}
                </div>
              ) : (
                <div className="reversible-info">
                  <p className="positive">GOOD NEWS: This mortise lock type is REVERSIBLE.</p>
                  <ExplanationRenderer contentArray={currentMortiseLockDetails.explanation} />
                  {renderVisuals(currentMortiseLockDetails.visuals)}
                </div>
              )}
            </div>
          )}
        </div>
      );
    } else if (selectedCategory === "boredLocks") {
      return (
        <div className="bored-locks-section">
          <h2>Bored Locks</h2>
          <div className="dropdowns-container">
            <div className="bored-lock-dropdown-wrapper">
              <label htmlFor="bored-lock-select" className="dropdown-label">Select Bored Lock Type</label>
              <Select
                id="bored-lock-select"
                options={boredLockOptions}
                onChange={handleBoredLockChange}
                value={selectedBoredLockOption}
                placeholder="Bored Lock Type"
                isClearable
                isSearchable
                styles={customSelectStyles}
                menuPlacement="top"
                menuPortalTarget={document.body}
                components={{ Menu: CustomMenu }}
              />
            </div>
          </div>

          {currentBoredLockDetails && (
            <div className="bored-lock-details">
              <h4>Details for {currentBoredLockDetails.type}</h4>
              {currentBoredLockDetails.handing === "handed" ? (
                <div className="handed-info">
                  <p className="warning">WARNING: This bored lock type is HANDED.</p>
                  <ExplanationRenderer contentArray={currentBoredLockDetails.explanation} />
                  {renderVisuals(currentBoredLockDetails.visuals)}
                </div>
              ) : (
                <div className="reversible-info">
                  <p className="positive">GOOD NEWS: This bored lock type is REVERSIBLE.</p>
                  <ExplanationRenderer contentArray={currentBoredLockDetails.explanation} />
                  {renderVisuals(currentBoredLockDetails.visuals)}
                </div>
              )}
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
        <button className="theme-toggle-button" onClick={toggleTheme}>
          <img src={isDarkMode ? Images.sun : Images.moon} alt={isDarkMode ? 'Sun icon for light mode' : 'Moon icon for dark mode'} className="theme-icon" />
        </button>
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