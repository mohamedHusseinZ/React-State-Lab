import React, { useState } from 'react';

const Item = () => {
  const [isInCart, setIsInCart] = useState(false);

  const handleToggleCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {/* Item details */}
      <button onClick={handleToggleCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item;

