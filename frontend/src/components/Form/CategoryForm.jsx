import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          className="w-full px-4 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter new category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500 "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
