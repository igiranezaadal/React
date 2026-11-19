import { useReducer } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Mechanical Keyboard' },
  { id: 2, name: 'Wireless Mouse' },
  { id: 3, name: 'USB-C Hub' },
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];
    }

    case 'remove':
      return state.filter((item) => item.id !== action.payload.id);

    case 'increase':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case 'decrease':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      );

    case 'clear':
      return [];

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div style={{ maxWidth: '420px', fontFamily: 'sans-serif' }}>
      <h3>Products</h3>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {PRODUCTS.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => dispatch({ type: 'add', payload: product })}
          >
            + {product.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Shopping Cart</h3>
        {cart.length > 0 && (
          <button type="button" onClick={() => dispatch({ type: 'clear' })}>
            Clear cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <span>
                <strong>{item.name}</strong> (x{item.qty})
              </span>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'decrease', payload: { id: item.id } })}
                  disabled={item.qty <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'increase', payload: { id: item.id } })}
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'remove', payload: { id: item.id } })}
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}