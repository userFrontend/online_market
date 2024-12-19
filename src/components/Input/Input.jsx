import './Input.scss';

const PhoneInput = ({phone, setPhone}) => {

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
    let index = 0;
    for (let char of numericValue) {
      formatted = formatted.replace('_', char);
      index++;
    }
    setPhone(formatted)
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 8) {
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
      let index = 0;

      for (let char of numericValue) {
        formatted = formatted.replace('_', char);
        index++;
      }
      setPhone(formatted)
    }
  };

  return (
    <input
      name='phoneNumber'
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={phone}
      placeholder='+998 (__) ___-__-__'
      className="phone-input"
    />
  );
};

export default PhoneInput;
