// // // import React, { useState, useEffect } from "react";
// // // import BackButton from "../pages/BackButton";
// // // import Spinner from "../pages/Spinner";
// // // import axios from "axios";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import { useSnackbar } from "notistack";

// // // const EditBook = () => {
// // //   const [title, setTitle] = useState("");
// // //   const [author, setAuthor] = useState("");
// // //   const [publishYear, setPublishYear] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();
// // //   const { id } = useParams();
// // //   const { enqueueSnackbar } = useSnackbar();

// // //   useEffect(() => {
// // //     setLoading(true);
// // //     axios
// // //       .get(`http://localhost:5555/books/${id}`)
// // //       .then((response) => {
// // //         setAuthor(response.data.author);
// // //         setPublishYear(response.data.publishYear);
// // //         setTitle(response.data.title);
// // //         setDescription(response.data.description); // Set description state
// // //         setLoading(false);
// // //       })
// // //       .catch((error) => {
// // //         setLoading(false);
// // //         alert("An error happened. Please Check console");
// // //         console.log(error);
// // //       });
// // //   }, [id]);
// // //   const handleEditBook = () => {
// // //     const data = {
// // //       title,
// // //       author,
// // //       publishYear,
// // //       description,
// // //     };
// // //     setLoading(true);
// // //     axios
// // //       .put(`http://localhost:5555/books/${id}`, data)
// // //       .then(() => {
// // //         setLoading(false);
// // //         enqueueSnackbar("Book Edited successfully", { variant: "success" });
// // //         navigate("/");
// // //       })
// // //       .catch((error) => {
// // //         setLoading(false);
// // //         // alert('An error happened. Please Chack console');
// // //         enqueueSnackbar("Error", { variant: "error" });
// // //         console.log(error);
// // //       });
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <BackButton />
// // //       <h1 className="text-3xl my-4">Edit Book</h1>
// // //       {loading ? <Spinner /> : ""}
// // //       <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
// // //         <div className="my-4">
// // //           <label className="text-xl mr-4 text-gray-500">Title</label>
// // //           <input
// // //             type="text"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             className="border-2 border-gray-500 px-4 py-2 w-full"
// // //           />
// // //         </div>
// // //         <div className="my-4">
// // //           <label className="text-xl mr-4 text-gray-500">Author</label>
// // //           <input
// // //             type="text"
// // //             value={author}
// // //             onChange={(e) => setAuthor(e.target.value)}
// // //             className="border-2 border-gray-500 px-4 py-2  w-full "
// // //           />
// // //         </div>
// // //         <div className="my-4">
// // //           <label className="text-xl mr-4 text-gray-500">Publish Year</label>
// // //           <input
// // //             type="number"
// // //             value={publishYear}
// // //             onChange={(e) => setPublishYear(e.target.value)}
// // //             className="border-2 border-gray-500 px-4 py-2  w-full "
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block text-gray-700 text-sm font-bold mb-2">
// // //             Description
// // //           </label>
// // //           <input
// // //             type="text"
// // //             value={description}
// // //             onChange={(e) => setDescription(e.target.value)}
// // //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// // //             placeholder="Enter description"
// // //           />
// // //         </div>
// // //         <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
// // //           Save
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default EditBook;
// // import React, { useState, useEffect } from "react";
// // import BackButton from "../pages/BackButton";
// // import Spinner from "../pages/Spinner";
// // import axios from "axios";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { useSnackbar } from "notistack";

// // const EditBook = () => {
// //   const [title, setTitle] = useState("");
// //   const [author, setAuthor] = useState("");
// //   const [publishYear, setPublishYear] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [category, setCategory] = useState("");
// //   const [image, setImage] = useState(null); // Add state for image
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const { id } = useParams();
// //   const { enqueueSnackbar } = useSnackbar();
// //   const [previousImage, setPreviousImage] = useState(null); // State to store the URL of the previous image

// //   useEffect(() => {
// //     setLoading(true);
// //     axios
// //       .get(`http://localhost:5555/books/${id}`)
// //       .then((response) => {
// //         setAuthor(response.data.author);
// //         setPublishYear(response.data.publishYear);
// //         setTitle(response.data.title);
// //         setDescription(response.data.description);
// //         setCategory(response.data.category); // Set description state
// //         setPreviousImage(response.data.image); // Set previous image URL
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         setLoading(false);
// //         alert("An error happened. Please Check console");
// //         console.log(error);
// //       });
// //   }, [id]);

// //   const handleEditBook = () => {
// //     setLoading(true);

// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("author", author);
// //     formData.append("publishYear", publishYear);
// //     formData.append("description", description);
// //     formData.append("category", category);
// //     formData.append("image", image); // Append the image file to the FormData

// //     axios
// //       .put(`http://localhost:5555/books/${id}`, formData)
// //       .then(() => {
// //         setLoading(false);
// //         enqueueSnackbar("Book Edited successfully", { variant: "success" });
// //         navigate("/adminhome");
// //       })
// //       .catch((error) => {
// //         setLoading(false);
// //         enqueueSnackbar("Error", { variant: "error" });
// //         console.log(error);
// //       });
// //   };

// //   const handleImageChange = (e) => {
// //     setImage(e.target.files[0]); // Update the image state with the selected file
// //   };

// //   return (
// //     <div className="p-4">
// //       <BackButton />
// //       <h1 className="text-3xl my-4">Edit Book</h1>
// //       {loading ? <Spinner /> : ""}
// //       <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
// //         <div className="my-4">
// //           <label className="text-xl mr-4 text-gray-500">Title</label>
// //           <input
// //             type="text"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className="border-2 border-gray-500 px-4 py-2 w-full"
// //           />
// //         </div>
// //         <div className="my-4">
// //           <label className="text-xl mr-4 text-gray-500">Author</label>
// //           <input
// //             type="text"
// //             value={author}
// //             onChange={(e) => setAuthor(e.target.value)}
// //             className="border-2 border-gray-500 px-4 py-2  w-full "
// //           />
// //         </div>
// //         <div className="my-4">
// //           <label className="text-xl mr-4 text-gray-500">Publish Year</label>
// //           <input
// //             type="number"
// //             value={publishYear}
// //             onChange={(e) => setPublishYear(e.target.value)}
// //             className="border-2 border-gray-500 px-4 py-2  w-full "
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Description
// //           </label>
// //           <input
// //             type="text"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Enter description"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Category
// //           </label>
// //           <input
// //             type="text"
// //             value={category}
// //             onChange={(e) => setCategory(e.target.value)}
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             placeholder="Enter description"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Previous Image
// //           </label>
// //           {console.log(previousImage)}
// //           {previousImage ? (
// //             <div className="flex items-center mb-2">
// //               <img
// //                 src={`../../src/images/${previousImage}`}
// //                 alt="Previous Book"
// //                 className="max-w-xs mr-2"
// //               />
// //               <span>{previousImage}</span>
// //             </div>
// //           ) : (
// //             <span>No previous image available</span>
// //           )}
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             New Image
// //           </label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageChange} // Call handleImageChange when file is selected
// //             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //         </div>

// //         <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
// //           Save
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditBook;
// import React, { useState, useEffect } from "react";
// import BackButton from "../pages/BackButton";
// import Spinner from "../pages/Spinner";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const EditBook = () => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [publishYear, setPublishYear] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [categoryName, setCategoryName] = useState(""); // State to store the category name
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { enqueueSnackbar } = useSnackbar();
//   const [previousImage, setPreviousImage] = useState(null);
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:5555/api/category/get-category"
//       );
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//       enqueueSnackbar("Something went wrong in getting category", {
//         variant: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/books/${id}`)
//       .then((response) => {
//         setAuthor(response.data.author);
//         setPublishYear(response.data.publishYear);
//         setTitle(response.data.title);
//         setDescription(response.data.description);
//         setCategory(response.data.category);
//         setPreviousImage(response.data.image);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//         alert("An error happened. Please Check console");
//         console.log(error);
//       });

//     // Fetch category name based on category ID
//     axios
//       .get(`http://localhost:5555/api/category/get-category/${category}`)
//       .then((response) => {
//         setCategoryName(response.data.category.name); // Assuming the category name is nested inside "category" in the response
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id, category]); // Adding 'category' as a dependency to re-fetch the category name when it changes

//   const handleEditBook = () => {
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("author", author);
//     formData.append("publishYear", publishYear);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("image", image);

//     axios
//       .put(`http://localhost:5555/books/${id}`, formData)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar("Book Edited successfully", { variant: "success" });
//         navigate("/adminhome");
//       })
//       .catch((error) => {
//         setLoading(false);
//         enqueueSnackbar("Error", { variant: "error" });
//         console.log(error);
//       });
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">Edit Book</h1>
//       {loading ? <Spinner /> : ""}
//       <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Author</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2  w-full "
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Publish Year</label>
//           <input
//             type="number"
//             value={publishYear}
//             onChange={(e) => setPublishYear(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2  w-full "
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Description
//           </label>
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter description"
//           />
//         </div>
//         {/* {
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Category
//             </label>
//             {/* <input
//             type="text"
//             value={categoryName} // Display categoryName instead of category
//             onChange={(e) => setCategoryName(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter category"
//           /> */}
//         {/* </div> */}
//         {/* } */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Category
//           </label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             <option value="">Select a category</option>
//             {categories?.map((c) => (
//               <option key={c._id} value={c._id}>
//                 {c.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Previous Image
//           </label>
//           {console.log(previousImage)}
//           {previousImage ? (
//             <div className="flex items-center mb-2">
//               <img
//                 src={`../../src/images/${previousImage}`}
//                 alt="Previous Book"
//                 className="max-w-xs mr-2"
//               />
//               <span>{previousImage}</span>
//             </div>
//           ) : (
//             <span>No previous image available</span>
//           )}
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             New Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditBook;
import React, { useState, useEffect } from "react";
import BackButton from "../pages/BackButton";
import Spinner from "../pages/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState(""); // Separate state for category ID
  const [categoryName, setCategoryName] = useState(""); // Separate state for category name
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [previousImage, setPreviousImage] = useState(null);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5555/api/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Something went wrong in getting category", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategoryId(response.data.category);
        setQuantity(response.data.quantity);
        setPrice(response.data.price);
        setPreviousImage(response.data.image);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, [id]); // Update when id changes

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      axios
        .get(`http://localhost:5555/api/category/get-category/${categoryId}`)
        .then((response) => {
          setCategoryName(response.data.category.name);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [categoryId]); // Update when categoryId changes

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get(`http://localhost:5555/books/${id}`)
  //     .then((response) => {
  //       setAuthor(response.data.author);
  //       setPublishYear(response.data.publishYear);
  //       setTitle(response.data.title);
  //       setDescription(response.data.description);
  //       setCategoryId(response.data.category); // Set category ID
  //       setPreviousImage(response.data.image);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       alert("An error happened. Please Check console");
  //       console.log(error);
  //     });

  //   // Fetch category name based on category ID
  //   axios
  //     .get(`http://localhost:5555/api/category/get-category/${categoryId}`)
  //     .then((response) => {
  //       setCategoryName(response.data.category.name); // Assuming the category name is nested inside "category" in the response
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id, categoryId]); // Update category name when categoryId changes

  const handleEditBook = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("category", categoryId); // Use categoryId instead of category
    formData.append("image", image);

    axios
      .put(`http://localhost:5555/books/${id}`, formData)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited successfully", { variant: "success" });
        navigate("/adminhome");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="p-4">
      {/* <BackButton /> */}
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            value={categoryId} // Use categoryId instead of category
            onChange={(e) => setCategoryId(e.target.value)} // Update categoryId when category is changed
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a category</option>
            {categories?.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity
          </label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Previous Image
          </label>
          {console.log(previousImage)}
          {previousImage ? (
            <div className="flex items-center mb-2">
              <img
                src={`../../src/images/${previousImage}`}
                alt="Previous Book"
                className="max-w-xs mr-2"
              />
              <span>{previousImage}</span>
            </div>
          ) : (
            <span>No previous image available</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            New Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
