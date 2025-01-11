import React, { forwardRef } from 'react';
import './Input.scss';

const PhoneInput = forwardRef(({ phone, setPhone }, ref) => {
  const handleChange = (e) => {
    let input = e.target.value;
    let numericValue = input.replace(/[^\d]/g, ''); // Remove non-numeric characters
    // Remove the leading '+998' if it exists to avoid duplication
    if (numericValue.startsWith('998')) {
      numericValue = numericValue.slice(3);
    }
    // Limit to 9 digits (local part)
    numericValue = numericValue.slice(0, 9);
    // Add the formatting
    let formatted = '+998 (__) ___-__-__';
    for (let char of numericValue) {
      formatted = formatted.replace('_', char);
    }
    setPhone(formatted);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      let input = e.target.value;
      let numericValue = input.replace(/[^\d]/g, ''); // Remove non-numeric characters
      // Remove the last digit
      if (numericValue.startsWith('998')) {
        numericValue = numericValue.slice(3, -1);
      } else {
        numericValue = numericValue.slice(0, -1);
      }

      // Add the formatting
      let formatted = '+998 (__) ___-__-__';
      for (let char of numericValue) {
        formatted = formatted.replace('_', char);
      }
      setPhone(formatted);
    }
  };

  return (
    <input
      name="phoneNumber"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={phone}
      placeholder="+998 (__) ___-__-__"
      className="phone-input"
      ref={ref}
    />
  );
});

export default PhoneInput;
