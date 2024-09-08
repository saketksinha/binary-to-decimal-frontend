
import React, { useState } from 'react';
import axios from 'axios';
import ResultDisplay from './ResultDisplay';

function BinaryConverter() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(null);
  const [error, setError] = useState('');

  const handleConvert = async (e) => {
    e.preventDefault();
    setError('');
    setDecimal(null);

    // Basic client-side validation
    if (!/^[01]+$/.test(binary)) {
      setError('Please enter a valid binary number (only 0s and 1s).');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/convert', { binary });
      setDecimal(response.data.decimal);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred while converting.');
      }
    }
  };

  return (
    <div>
      <h1>Binary to Decimal Converter</h1>
      <form onSubmit={handleConvert}>
        <input
          type="text"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
          placeholder="Enter binary number"
          required
        />
        <button type="submit">Convert</button>
      </form>
      {/* Render the ResultDisplay component */}
      <ResultDisplay decimal={decimal} error={error} />
    </div>
  );
}

export default BinaryConverter;
