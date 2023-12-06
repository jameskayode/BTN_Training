import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import cartSlice from "../state/cartSlice";
import { FaSpinner } from "react-icons/fa";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleFetch = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.cartState);
  const { add } = cartSlice.actions;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Logic to display page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex mx-auto max-w-[1200px] flex-col pt-6">
      <div className="grid grid-cols-4 gap-y-6 gap-x-4">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
          <div className="text-3xl font-bold">
            <FaSpinner className="animate-spin w-16 h-16" />
          </div>
        </div>
        ) : (
          currentItems.map((product) => (
            <div
              className="flex flex-col gap-2 justify-between"
              key={product.id}
            >
              <div className="flex items-center h-[400px] bg-white justify-center rounded-lg">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-[60%] h-auto max-h-[320px]"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-500">{product.title}</h2>
              <p>${product.price}</p>
              <button
                className="bg-purple-900 text-white p-4"
                onClick={() => dispatch(add({ ...product, quantity: 1 }))}
              >
                add to cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`mx-2 px-4 py-2 border ${
              number === currentPage ? "bg-gray-500 text-white" : ""
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
