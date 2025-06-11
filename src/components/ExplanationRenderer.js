// src/components/ExplanationRenderer.js
import React from 'react';

const ExplanationRenderer = ({ contentArray }) => {
  if (!contentArray || !Array.isArray(contentArray)) {
    return <p>No explanation available or invalid format.</p>;
  }

  // A flag to keep track of whether we are currently inside an unordered list
  let inUnorderedList = false;
  const renderedElements = [];

  contentArray.forEach((item, index) => {
    switch (item.type) {
      case 'paragraph':
        // If we were in a list, close it before rendering a paragraph
        if (inUnorderedList) {
          renderedElements.push(<ul key={`ul-end-${index}`}></ul>);
          inUnorderedList = false;
        }
        renderedElements.push(<p key={index} className="explanation-paragraph">{item.content}</p>);
        break;
      case 'bullet':
        // If we're not yet in a list, open one
        if (!inUnorderedList) {
          renderedElements.push(<ul key={`ul-start-${index}`} className="explanation-bullet-list"></ul>);
          inUnorderedList = true;
        }
        renderedElements.push(<li key={index} className="explanation-bullet-item">{item.content}</li>);
        break;
      case 'link':
        // If we were in a list, close it before rendering a link
        if (inUnorderedList) {
          renderedElements.push(<ul key={`ul-end-link-${index}`}></ul>);
          inUnorderedList = false;
        }
        renderedElements.push(
          <p key={index} className="explanation-link">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.content}
            </a>
          </p>
        );
        break;
      case 'heading':
          // If we were in a list, close it before rendering a heading
          if (inUnorderedList) {
              renderedElements.push(<ul key={`ul-end-heading-${index}`}></ul>);
              inUnorderedList = false;
          }
          // Dynamically render heading level (h2, h3, h4, etc.)
          const HeadingTag = `h${item.level || 5}`; // Default to h5 if level is not specified
          renderedElements.push(<HeadingTag key={index} className={`explanation-heading-h${item.level || 5}`}>{item.content}</HeadingTag>);
          break;
      default:
        // Fallback for unknown types
        if (inUnorderedList) {
          renderedElements.push(<ul key={`ul-end-default-${index}`}></ul>);
          inUnorderedList = false;
        }
        renderedElements.push(<p key={index} className="explanation-unknown">{item.content}</p>);
    }
  });

  // Close any open list at the end
  if (inUnorderedList) {
    renderedElements.push(<ul key="ul-final-end"></ul>);
  }

  return <div className="explanation-content-wrapper">{renderedElements}</div>;
};

export default ExplanationRenderer;