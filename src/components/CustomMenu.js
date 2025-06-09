// src/components/CustomSelectMenu.js
import React from 'react';
import { components } from 'react-select';

const CustomMenu = (props) => {
  // This ref will be attached to the inner div that contains the scrollable options
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    const menuElement = menuRef.current;
    if (!menuElement) return;

    // Prevent touch events from bubbling up and causing page scroll
    const handleTouchMove = (e) => {
      // Check if the scroll is at the top or bottom
      const isAtTop = menuElement.scrollTop === 0;
      const isAtBottom = menuElement.scrollHeight - menuElement.scrollTop === menuElement.clientHeight;

      // If the scroll is within the menu and not at the very top/bottom edge,
      // prevent default to ensure menu scrolls
      if (e.targetTouches.length > 0 && !isAtTop && !isAtBottom) {
         e.stopPropagation(); // Stop event from bubbling up
      }
    };

    // Add passive: false to allow preventDefault to work
    menuElement.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      menuElement.removeEventListener('touchmove', handleTouchMove, { passive: false });
    };
  }, [menuRef]); // Re-run effect if ref changes (unlikely)


  return (
    <components.Menu {...props}>
      <div
        ref={menuRef}
        style={{ maxHeight: props.maxHeight, overflowY: 'auto' }} // Apply max height and overflow here
        onWheel={(e) => {
          // This part handles desktop mouse wheel scrolling, ensuring it doesn't bubble if menu is scrollable
          if (menuRef.current.scrollHeight > menuRef.current.clientHeight) {
            e.stopPropagation();
          }
        }}
      >
        {props.children}
      </div>
    </components.Menu>
  );
};

export default CustomMenu;