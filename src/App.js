// src/App.js
import React, { useState } from 'react';
import Select from 'react-select'; // Import react-select
import './App.css'; // Your general app CSS
import { productData } from './data';
import { Images } from './images/images';

// --- Custom Styles for react-select ---
// This object defines the visual appearance for various parts of the Select component.
// You can move this to a separate file like `src/styles/selectStyles.js` for better organization.
const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f8f8f8', // Light gray background
    borderColor: state.isFocused ? '#007bff' : '#ced4da', // Blue border on focus, default gray
    boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0, 123, 255, 0.25)' : 'none', // Blue shadow on focus
    borderRadius: '8px', // More rounded corners
    minHeight: '45px', // Taller input area for better touch targets
    padding: '0 8px', // Inner padding within the control
    fontSize: '16px', // Readable font size for the selected value/placeholder
    '&:hover': {
      borderColor: '#007bff', // Keep blue border on hover
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#6c757d', // Muted gray for placeholder text
    fontSize: '16px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#343a40', // Darker text for the single selected value
    fontSize: '16px',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '0px', // Set to 0 or remove this line when using menuPortalTarget
    zIndex: 9999,
    maxHeight: '250px',
    overflowY: 'auto',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#e9ecef' : 'white', // Light gray on hover
    color: state.isSelected ? '#007bff' : '#343a40', // Blue if selected, else dark
    fontWeight: state.isSelected ? 'bold' : 'normal', // Bold selected option
    padding: '12px 20px', // More padding for individual options
    fontSize: '16px',
    '&:active': {
      backgroundColor: '#007bff', // Blue background when actively clicked
      color: 'white',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: '#ced4da', // Light gray separator line
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#6c757d', // Muted gray for the dropdown arrow
    '&:hover': {
      color: '#0056b3', // Darker blue on hover
    },
    transition: 'transform 0.2s ease-in-out', // Smooth rotation animation
    transform: state.isFocused ? 'rotate(180deg)' : null, // Rotates arrow when dropdown is open
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#dc3545', // Red 'X' for the clear button
    '&:hover': {
      color: '#c82333', // Darker red on hover
    },
  }),
  groupHeading: (provided) => ({
    ...provided,
    backgroundColor: '#f1f1f1', // Light background for group headings
    color: '#495057', // Darker text for group headings
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase', // Uppercase group headings
    letterSpacing: '0.5px',
    borderBottom: '1px solid #e0e0e0', // Separator below heading
    marginBottom: '5px',
  }),
  group: (provided) => ({
    ...provided,
    paddingBottom: '10px', // Space below each group of options
  }),
};

// --- Data Transformation Function ---
// This function reshapes your raw productData into the grouped format
// that `react-select` expects for its `options` prop.
// You can keep this in `src/utils/dataTransformers.js` for larger applications.
const transformExitDevicesForSelect = (data) => {
  const groupedOptions = {};

  data.exitDevices.forEach(seriesData => {
    // Uses the 'category' property added to your series objects in data.js
    const category = seriesData.category || "Uncategorized Series";

    if (!groupedOptions[category]) {
      groupedOptions[category] = {
        label: category, // This will be the visible group heading (e.g., "8000 Series")
        options: []
      };
    }

    // Each series becomes an option within its category group
    groupedOptions[category].options.push({
      value: seriesData.series, // The actual series identifier (e.g., "8300 Series")
      label: seriesData.series, // The text displayed for the series in the dropdown
      type: 'series' // A custom prop to identify this as a series option
    });
  });
  return Object.values(groupedOptions); // Returns an array of group objects
};

// --- Modal Component ---
// This component displays an enlarged image in a modal overlay.
// It's a good candidate for its own file (e.g., `src/components/ImageModal.js`).
const ImageModal = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null; // Don't render the modal if no image URL is provided

  return (
    // Overlay covers the whole screen, closes modal on click
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal content, prevents click from closing the modal */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>X</button>
        <img src={imageUrl} alt="Enlarged Handing Visual" className="modal-image" />
      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  // State variables to manage selected categories, series, functions, and modal visibility
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeriesOption, setSelectedSeriesOption] = useState(null); // Stores the full react-select option object
  const [selectedFunctionOption, setSelectedFunctionOption] = useState(null); // Stores the full react-select option object
  const [modalImageUrl, setModalImageUrl] = useState(null);

  // Options for the Series dropdown, generated from productData (grouped by category)
  const seriesOptions = transformExitDevicesForSelect(productData);

  // Options for the Function dropdown, dynamically generated based on the selected series
  const functionOptions = selectedSeriesOption
    ? productData.exitDevices
      .find(d => d.series === selectedSeriesOption.value) // Find the selected series data
      ?.functions.map(func => ({ // Map its functions to react-select option format
        value: func.functionCode,
        label: func.functionCode,
        // You could pass the whole `func` object here if needed,
        // e.g., ...func, to avoid re-searching later
      })) || [] // Default to empty array if no series selected or no functions found
    : [];

  // Find the complete details of the currently selected function
  const currentFunctionDetails = selectedSeriesOption && selectedFunctionOption
    ? productData.exitDevices
      .find(d => d.series === selectedSeriesOption.value)
      ?.functions.find(f => f.functionCode === selectedFunctionOption.value)
    : null; // Null if no series/function is selected

  // Handlers for modal open/close
  const openModal = (url) => setModalImageUrl(url);
  const closeModal = () => setModalImageUrl(null);

  // Handler for main category buttons
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSeriesOption(null); // Reset series and function when category changes
    setSelectedFunctionOption(null);
  };

  // Handler for React-Select Series dropdown
  const handleSeriesChange = (option) => {
    setSelectedSeriesOption(option); // Update state with the selected series option
    setSelectedFunctionOption(null); // Reset function when series changes
  };

  // Handler for React-Select Function dropdown
  const handleFunctionChange = (option) => {
    setSelectedFunctionOption(option); // Update state with the selected function option
  };

  // Renders the details section based on the selected category
  const renderProductDetails = () => {
    if (!selectedCategory) {
      return <p>Please select a product category to get started.</p>;
    }

    // Render logic for Exit Devices (using react-select)
    if (selectedCategory === "exitDevices") {
      return (
        <div className="exit-devices-section">
          <h2>Exit Devices</h2>
          <div style={{ marginBottom: '15px' }}>
            <Select
              options={seriesOptions}
              onChange={handleSeriesChange}
              value={selectedSeriesOption}
              placeholder="Select a Series"
              isClearable
              isSearchable
              styles={customSelectStyles}
              menuPlacement="top"
              menuPortalTarget={document.body} // <--- ADD THIS LINE
            />
          </div>

          {selectedSeriesOption && (
            <div className="functions-section">
              <h3>Functions for {selectedSeriesOption.label}</h3>
              <div style={{ marginBottom: '15px' }}>
                <Select
                  options={functionOptions}
                  onChange={handleFunctionChange}
                  value={selectedFunctionOption}
                  placeholder="Select a Function"
                  isClearable
                  isSearchable
                  styles={customSelectStyles}
                  menuPlacement="top"
                  menuPortalTarget={document.body} // <--- ADD THIS LINE
                />
              </div>

              {currentFunctionDetails && ( // Only show details if a function is selected
                <div className="handing-details">
                  <h4>Details for Function {currentFunctionDetails.functionCode}</h4>
                  {/* Conditional rendering based on 'handing' property */}
                  {currentFunctionDetails.handing === "handed" ? (
                    <div className="handed-info">
                      <p className="warning">WARNING: This device and function combination is HANDED.</p>
                      <p>{currentFunctionDetails.explanation}</p>
                      <div className="visuals">
                        {/* Map through visuals for handed products */}
                        {Object.entries(currentFunctionDetails.visuals || {}).map(([key, value]) => (
                          <div key={key} className="handing-card">
                            <img src={value} alt={key} onClick={() => openModal(value)} />
                            <p>{key.toUpperCase()}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="reversible-info">
                      <p className="positive">GOOD NEWS: This device and function combination is REVERSIBLE.</p>
                      <p>{currentFunctionDetails.explanation}</p>
                      <div className="visuals">
                        <div className="handing-card">
                          <img src={currentFunctionDetails.visuals.generic} alt="Reversible" onClick={() => openModal(currentFunctionDetails.visuals.generic)} />
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
    }
    // Render logic for Mortise Locks and Bored Locks (using static data/simple display)
    else if (selectedCategory === "mortiseLocks" || selectedCategory === "boredLocks") {
      const lockData = productData[selectedCategory][0]; // Assuming one entry per lock type
      return (
        <div className="lock-details-section">
          <h2>{lockData.type}</h2>
          {lockData.handing === "handed" ? (
            <div className="handed-info">
              <p className="warning">WARNING: This product type is HANDED.</p>
              <p>{lockData.explanation}</p>
              <div className="visuals">
                {Object.entries(lockData.visuals || {}).map(([key, value]) => (
                  <div key={key} className="handing-card">
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
                <div className="handing-card">
                  <img src={lockData.visuals.generic} alt="Reversible" onClick={() => openModal(lockData.visuals.generic)} />
                  <p>Reversible Product</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
    return null; // Fallback if no category is selected
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