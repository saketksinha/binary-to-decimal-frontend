import React from 'react';

function ResultDisplay({ decimal, error }) {
  return (
    <div>
      {decimal !== null && (
        <div className="result">
          <h2>Decimal: {decimal}</h2>
        </div>
      )}
      {error && (
        <div className="error">
          <h2>Error: {error}</h2>
        </div>
      )}
    </div>
  );
}

export default ResultDisplay;