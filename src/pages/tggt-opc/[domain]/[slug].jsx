import {
  ArrowUp,
  ArrowDown,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavbarHeight } from "../../../utils/useNavbarHeight";
import PrimaryButton from "../../../components/PrimaryButton";
import { useState, useMemo, useEffect } from "react";
import { useCartStore } from "../../../store/useStore";
import ProductDetailModal from "../../../components/ProductDetailModal";
import { tggtOpcProducts } from "../../../data/products/tggtOpcProducts";
import { useParams, useLocation } from "react-router";

function DynamicCategoryPage() {
  const navHeight = useNavbarHeight();
  const { domain, slug } = useParams("/tggt-opc/:domain/:slug");

  const [openFilters, setOpenFilters] = useState({
    mission: true,
    equipments: true,
    others: false,
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const { addToCart } = useCartStore();

  // Find the current category data matching BOTH domain and slug
  const categoryData = useMemo(() => {
    if (!domain || !slug) return null;
    return (
      tggtOpcProducts.find(
        (cat) => cat.domain === domain && cat.slug === slug,
      ) || null
    );
  }, [domain, slug]);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.openModalWithProductId && categoryData) {
      const productToOpen = categoryData.products.find(
        (p) => p.id === location.state.openModalWithProductId
      );
      if (productToOpen) {
        setSelectedProduct(productToOpen);
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state, categoryData]);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!categoryData) return [];
    return categoryData.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [categoryData, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!categoryData) {
    return (
      <div className="flex-center h-screen text-white font-tactic">
        CATEGORY NOT FOUND
      </div>
    );
  }

  return (
    <>
      <div className="relative py-5" style={{ marginTop: `${navHeight}px` }}>
        <div className="wrapper py-10 flex-center">
          <h1 className="w-90 text-3xl text-center font-tactic text-white uppercase">
            {categoryData?.category || "PRODUCTS"}
          </h1>
        </div>
        <img
          className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
          src={`/stock-photos/${slug || "default"}.jpg`}
          onError={(e) => {
            e.target.src = "/stock-photos/search-and-rescue.jpg";
          }}
        />
      </div>
      <div className="wrapper flex gap-8 py-12">
        {/* FILTER */}
        <div className="flex flex-col gap-4 mt-10 w-64 shrink-0">
          <div>
            <div
              onClick={() => toggleFilter("mission")}
              className="flex-between pt-2 border-t border-gray-6 cursor-pointer hover:text-white transition-colors"
            >
              <div className="font-bold text-sm tracking-widest">MISSION</div>
              {openFilters.mission ? (
                <ArrowUp size={15} />
              ) : (
                <ArrowDown size={15} />
              )}
            </div>
            {openFilters.mission && (
              <ul className="flex flex-col gap-2 pt-4 pb-2">
                {[
                  "CSSR ELSAR",
                  "ROAD RESCUE",
                  "WASAR RESCUE",
                  "WILDERNESS RESCUE",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={item.toLowerCase().replace(/\s+/g, "-")}
                      className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                    />
                    <label
                      htmlFor={item.toLowerCase().replace(/\s+/g, "-")}
                      className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <div
              onClick={() => toggleFilter("equipments")}
              className="flex-between pt-2 border-t border-gray-6 cursor-pointer hover:text-white transition-colors"
            >
              <div className="font-bold text-sm tracking-widest">
                EQUIPMENTS
              </div>
              {openFilters.equipments ? (
                <ArrowUp size={15} />
              ) : (
                <ArrowDown size={15} />
              )}
            </div>
            {openFilters.equipments && (
              <ul className="flex flex-col gap-2 pt-4 pb-2">
                {[
                  "EXTRICATION TOOLS",
                  "SHORING STABILIZER",
                  "WASAR RESCUE",
                  "LIFTING BAG",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={item.toLowerCase().replace(/\s+/g, "-")}
                      className="peer w-4 h-4 bg-gray-1 border border-gray-6 rounded checked:bg-gray-1 checked:border-gray-6 accent-white cursor-pointer"
                    />
                    <label
                      htmlFor={item.toLowerCase().replace(/\s+/g, "-")}
                      className="cursor-pointer text-sm text-gray-11 hover:text-white transition-colors"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex relative w-full max-w-md">
            <input
              className="w-full bg-transparent text-gray-10 border-b border-gray-6 py-2 outline-none focus:border-gray-10 transition-colors"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="grid gap-2 w-full border border-gray-4 p-6 cursor-pointer hover:border-gray-6 transition-colors group text-gray-12 hover:text-red-9"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative flex-center bg-gray-a2 aspect-square p-6 overflow-hidden">
                  <img
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                    src={product.image}
                    alt={product.name}
                  />
                  {product.brandImage && (
                    <img
                      className="absolute top-3 right-3 h-6 object-contain"
                      src={product.brandImage}
                      alt=""
                    />
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-8 uppercase">
                    {product.category}
                  </p>
                  <p className="font-bold line-clamp-1">{product.name}</p>
                  <p className="text-xs text-gray-6">SKU: {product.sku}</p>
                </div>
                <PrimaryButton
                  className={"text-xs py-2! px-2!"}
                  icon={<Plus size={20} />}
                  label={"ADD TO CART"}
                  onClick={(e) => handleAddToCart(e, product)}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex-center gap-4 mt-8 py-4 border-t border-gray-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 text-gray-10 hover:text-white disabled:text-gray-4 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded flex-center text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-white text-black"
                        : "text-gray-10 hover:bg-gray-2"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-10 hover:text-white disabled:text-gray-4 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-6 italic">
              No products found matching your search.
            </div>
          )}
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default DynamicCategoryPage;
