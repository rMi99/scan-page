import React from 'react';

const TextsWithUrl = ({ linkUrl, text }) => {

  const matchResult = text.match(/\{(.+?)\}/);
  const textInsideBraces = matchResult ? matchResult[1] : '';

  const parts = text.split(`{${textInsideBraces}}`);

  const content = parts.map((part, index) => {
    if (index < parts.length - 1) {
      return (
        <React.Fragment key={index}>
          {part}
          <a href={linkUrl} style={{ color: "#28c254" }}>{textInsideBraces}</a>
        </React.Fragment>
      );
    } else {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });

  return <span>{content}</span>;
};

export default TextsWithUrl;

