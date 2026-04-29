import { X, Trash2, ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/useStore";
import { Link } from "react-router";

function QuoteCartModal() {
  const {
    cartItems,
    isCartModalOpen,
    closeCartModal,
    removeFromCart,
    updateQuantity,
  } = useCartStore();

  if (!isCartModalOpen) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/60 z-[999] backdrop-blur-sm"
        onClick={closeCartModal}
      ></div>

      {/* MODAL */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-gray-1 border border-gray-3 z-1000 p-6 grid gap-6 max-h-[80vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex-between border-b border-gray-3 pb-4">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-gray-10" />
            <h2 className="font-tactic text-xl text-white">
              PROCUREMENT SUMMARY
            </h2>
          </div>
          <button
            onClick={closeCartModal}
            className="text-gray-10 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* CART ITEMS */}
        {cartItems.length === 0 ? (
          <div className="py-10 text-center text-gray-8">
            <p>Your inquiry list is currently empty.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border border-gray-6 p-4 bg-gray-2 relative"
              >
                {/* PRODUCT IMAGE SKELETON */}
                <div className="w-24 h-24 bg-gray-4 shrink-0 flex-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-8">Image</span>
                  )}
                </div>

                {/* PRODUCT DETAILS */}
                <div className="grid gap-1 flex-1">
                  <p className="text-xs text-gray-8">
                    {item.company} | {item.category}
                  </p>
                  <h3 className="text-lg text-white font-bold">{item.name}</h3>
                  <p className="text-xs text-gray-6">SKU: {item.sku}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm text-gray-10">QTY:</span>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="bg-gray-1 border border-gray-6 text-white text-sm px-2 py-1 w-16 outline-none"
                    />
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-4 right-4 text-red-9 hover:text-red-10 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER CTA */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-6 pt-4 flex justify-end">
            <Link to="/procurement-summary" onClick={closeCartModal}>
              <button className="bg-red-9 hover:bg-red-10 text-white font-bold py-3 px-8 transition-colors flex items-center gap-2">
                PROCEED TO INQUIRY
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default QuoteCartModal;
