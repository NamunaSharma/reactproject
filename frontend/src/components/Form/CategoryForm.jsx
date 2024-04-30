// import React from "react";

// const CategoryForm = ({ handleSubmit, value, setValue }) => {
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter new category"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default CategoryForm;
import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-3">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-500 text-left"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
