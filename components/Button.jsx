import React from 'react';

const Button = ({ text, addHandler }, props) => {
  return (
    <button
      onClick={addHandler}
      className="bg-green-500 h-10 w-60 text-white "
      type="button"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
