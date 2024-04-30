// // // // import React, { useEffect, useState } from "react";
// // // // import { toast } from "react-toastify";
// // // // import axios from "axios";
// // // // import CategoryForm from "../components/Form/CategoryForm";
// // // // import { Modal } from "antd";
// // // // import Navbar from "../components/Navbar";
// // // // const CreateCategory = () => {
// // // //   const [categories, setCategories] = useState([]);
// // // //   const [name, setName] = useState("");
// // // //   const [visible, setVisible] = useState(false);
// // // //   const [selected, setSelected] = useState(null);
// // // //   const [updatedName, setUpdatedName] = useState("");
// // // //   //handle Form
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const { data } = await axios.post(
// // // //         "http://localhost:5555/api/category/create-category",
// // // //         {
// // // //           name,
// // // //         }
// // // //       );
// // // //       if (data?.success) {
// // // //         toast.success(`${name} is created`);
// // // //         getAllCategory();
// // // //       } else {
// // // //         toast.error(data.message);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //       // toast.error("somthing went wrong in input form");
// // // //     }
// // // //   };

// // // //   //get all cat
// // // //   const getAllCategory = async () => {
// // // //     try {
// // // //       const { data } = await axios.get(
// // // //         "http://localhost:5555/api/category/get-category"
// // // //       );
// // // //       if (data?.success) {
// // // //         setCategories(data?.category);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //       toast.error("Something wwent wrong in getting catgeory");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     getAllCategory();
// // // //   }, []);

// // // //   //update category
// // // //   const handleUpdate = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const { data } = await axios.put(
// // // //         `http://localhost:5555/api/category/update-category/${selected._id}`,
// // // //         { name: updatedName }
// // // //       );
// // // //       if (data?.success) {
// // // //         toast.success(`${updatedName} is updated`);
// // // //         setSelected(null);
// // // //         setUpdatedName("");
// // // //         setVisible(false);
// // // //         getAllCategory();
// // // //       } else {
// // // //         toast.error(data.message);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //     }
// // // //   };
// // // //   //delete category
// // // //   const handleDelete = async (pId) => {
// // // //     try {
// // // //       const { data } = await axios.delete(
// // // //         `http://localhost:5555/api/category/delete-category/${pId}`
// // // //       );
// // // //       if (data.success) {
// // // //         toast.success(`category is deleted`);

// // // //         getAllCategory();
// // // //       } else {
// // // //         toast.error(data.message);
// // // //       }
// // // //     } catch (error) {
// // // //       toast.error("Somtihing went wrong");
// // // //     }
// // // //   };
// // // //   return (
// // // //     <div className="container-fluid m-3 p-3 dashboard">
// // // //       <div className="row">
// // // //         <div className="col-md-3">
// // // //           <Navbar />
// // // //         </div>
// // // //         <div className="col-md-9">
// // // //           <h1>Manage Category</h1>
// // // //           <div className="p-3 w-50">
// // // //             <CategoryForm
// // // //               handleSubmit={handleSubmit}
// // // //               value={name}
// // // //               setValue={setName}
// // // //             />
// // // //           </div>
// // // //           <div className="w-75">
// // // //             <table className="table">
// // // //               <thead>
// // // //                 <tr>
// // // //                   <th scope="col">Name</th>
// // // //                   <th scope="col">Actions</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {categories?.map((c) => (
// // // //                   <>
// // // //                     <tr>
// // // //                       <td key={c._id}>{c.name}</td>
// // // //                       <td>
// // // //                         <button
// // // //                           className="btn btn-primary ms-2"
// // // //                           onClick={() => {
// // // //                             setVisible(true);
// // // //                             setUpdatedName(c.name);
// // // //                             setSelected(c);
// // // //                           }}
// // // //                         >
// // // //                           Edit
// // // //                         </button>
// // // //                         <button
// // // //                           className="btn btn-danger ms-2"
// // // //                           onClick={() => {
// // // //                             handleDelete(c._id);
// // // //                           }}
// // // //                         >
// // // //                           Delete
// // // //                         </button>
// // // //                       </td>
// // // //                     </tr>
// // // //                   </>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //           <Modal
// // // //             onCancel={() => setVisible(false)}
// // // //             footer={null}
// // // //             open={visible}
// // // //           >
// // // //             <CategoryForm
// // // //               value={updatedName}
// // // //               setValue={setUpdatedName}
// // // //               handleSubmit={handleUpdate}
// // // //             />
// // // //           </Modal>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CreateCategory;
// // // import React, { useEffect, useState } from "react";
// // // import { toast } from "react-toastify";
// // // import axios from "axios";
// // // import CategoryForm from "../components/Form/CategoryForm";
// // // import { Modal } from "antd";
// // // import Navbar from "../components/Navbar";

// // // const CreateCategory = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [name, setName] = useState("");
// // //   const [visible, setVisible] = useState(false);
// // //   const [selected, setSelected] = useState(null);
// // //   const [updatedName, setUpdatedName] = useState("");

// // //   // Handle Form Submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.post("/api/category/create-category", {
// // //         name,
// // //       });
// // //       if (data?.success) {
// // //         toast.success(`${name} is created`);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Get all categories
// // //   const getAllCategory = async () => {
// // //     try {
// // //       const { data } = await axios.get("/api/category/get-category");
// // //       if (data?.success) {
// // //         setCategories(data?.category);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Something went wrong in getting category");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getAllCategory();
// // //   }, []);

// // //   // Update category
// // //   const handleUpdate = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.put(
// // //         `/api/category/update-category/${selected._id}`,
// // //         { name: updatedName }
// // //       );
// // //       if (data?.success) {
// // //         toast.success(`${updatedName} is updated`);
// // //         setSelected(null);
// // //         setUpdatedName("");
// // //         setVisible(false);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Delete category
// // //   const handleDelete = async (pId) => {
// // //     try {
// // //       const { data } = await axios.delete(
// // //         `/api/category/delete-category/${pId}`
// // //       );
// // //       if (data.success) {
// // //         toast.success(`Category is deleted`);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex bg-gray-100 min-h-screen">
// // //       <Navbar />
// // //       <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">
// // //         Manage Category
// // //       </h1>
// // //       <div className="p-4 bg-white rounded-lg shadow-md">
// // //         <CategoryForm
// // //           handleSubmit={handleSubmit}
// // //           value={name}
// // //           setValue={setName}
// // //         />
// // //       </div>
// // //       <div className="w-full">
// // //         <table className="table-auto w-full">
// // //           <thead>
// // //             <tr>
// // //               <th className="px-4 py-2">Name</th>
// // //               <th className="px-4 py-2">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {categories?.map((c) => (
// // //               <tr key={c._id}>
// // //                 <td className="border px-4 py-2">{c.name}</td>
// // //                 <td className="border px-4 py-2">
// // //                   <button
// // //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
// // //                     onClick={() => {
// // //                       setVisible(true);
// // //                       setUpdatedName(c.name);
// // //                       setSelected(c);
// // //                     }}
// // //                   >
// // //                     Edit
// // //                   </button>
// // //                   <button
// // //                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
// // //                     onClick={() => {
// // //                       handleDelete(c._id);
// // //                     }}
// // //                   >
// // //                     Delete
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //       <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
// // //         <CategoryForm
// // //           value={updatedName}
// // //           setValue={setUpdatedName}
// // //           handleSubmit={handleUpdate}
// // //         />
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default CreateCategory;
// // // import React, { useEffect, useState } from "react";
// // // import { toast } from "react-toastify";
// // // import axios from "axios";
// // // import CategoryForm from "../components/Form/CategoryForm";
// // // import { Modal } from "antd";
// // // import Navbar from "../components/Navbar";

// // // const CreateCategory = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [name, setName] = useState("");
// // //   const [visible, setVisible] = useState(false);
// // //   const [selected, setSelected] = useState(null);
// // //   const [updatedName, setUpdatedName] = useState("");

// // //   // Handle Form Submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.post(
// // //         "http://localhost:5555/api/category/create-category",
// // //         {
// // //           name,
// // //         }
// // //       );
// // //       if (data?.success) {
// // //         toast.success(`${name} is created`);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Get all categories
// // //   const getAllCategory = async () => {
// // //     try {
// // //       const { data } = await axios.get(
// // //         "http://localhost:5555/api/category/get-category"
// // //       );
// // //       if (data?.success) {
// // //         setCategories(data?.category);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Something went wrong in getting category");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getAllCategory();
// // //   }, []);

// // //   // Update category
// // //   const handleUpdate = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.put(
// // //         `http://localhost:5555/api/category/update-category/${selected._id}`,
// // //         { name: updatedName }
// // //       );
// // //       if (data?.success) {
// // //         toast.success(`${updatedName} is updated`);
// // //         setSelected(null);
// // //         setUpdatedName("");
// // //         setVisible(false);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Delete category
// // //   const handleDelete = async (pId) => {
// // //     try {
// // //       const { data } = await axios.delete(
// // //         `http://localhost:5555/api/category/delete-category/${pId}`
// // //       );
// // //       if (data.success) {
// // //         toast.success(`Category is deleted`);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col min-h-screen">
// // //       <Navbar />
// // //       <div className="flex-grow w-full mt-8 p-5">
// // //         <h1 className="text-4xl font-bold mb-8 text-top text-cyan-700">
// // //           Manage Category
// // //         </h1>
// // //         <div className="w-full p-4">
// // //           <CategoryForm
// // //             handleSubmit={handleSubmit}
// // //             value={name}
// // //             setValue={setName}
// // //           />
// // //         </div>
// // //         <div className="w-full">
// // //           <table className="table-auto w-full">
// // //             <thead>
// // //               <tr>
// // //                 <th className="px-4 py-2">Name</th>
// // //                 <th className="px-4 py-2">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {categories?.map((c) => (
// // //                 <tr key={c._id}>
// // //                   <td className="border px-4 py-2">{c.name}</td>
// // //                   <td className="border px-4 py-2">
// // //                     <button
// // //                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
// // //                       onClick={() => {
// // //                         setVisible(true);
// // //                         setUpdatedName(c.name);
// // //                         setSelected(c);
// // //                       }}
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                     <button
// // //                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
// // //                       onClick={() => {
// // //                         handleDelete(c._id);
// // //                       }}
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //         <Modal
// // //           onCancel={() => setVisible(false)}
// // //           footer={null}
// // //           visible={visible}
// // //         >
// // //           <CategoryForm
// // //             value={updatedName}
// // //             setValue={setUpdatedName}
// // //             handleSubmit={handleUpdate}
// // //           />
// // //         </Modal>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateCategory;
// // // import React, { useEffect, useState } from "react";
// // // import { toast } from "react-toastify";
// // // import axios from "axios";
// // // import CategoryForm from "../components/Form/CategoryForm";
// // // import { Modal } from "antd";
// // // import Navbar from "../components/Navbar";

// // // const CreateCategory = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [name, setName] = useState("");
// // //   const [visible, setVisible] = useState(false);
// // //   const [selected, setSelected] = useState(null);
// // //   const [updatedName, setUpdatedName] = useState("");

// // //   // Handle Form Submission
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.post(
// // //         "http://localhost:5555/api/category/create-category",
// // //         {
// // //           name,
// // //         }
// // //       );
// // //       if (data?.success) {
// // //         toast.success(`${name} is created`);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Get all categories
// // //   const getAllCategory = async () => {
// // //     try {
// // //       const { data } = await axios.get(
// // //         "http://localhost:5555/api/category/get-category"
// // //       );
// // //       if (data?.success) {
// // //         setCategories(data?.category);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Something went wrong in getting category");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getAllCategory();
// // //   }, []);

// // //   // Update category
// // //   const handleUpdate = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const { data } = await axios.put(
// // //         `http://localhost:5555/api/category/update-category/${selected._id}`,
// // //         { name: updatedName }
// // //       );
// // //       if (data?.success) {
// // //         toast.success(`${updatedName} is updated`);
// // //         setSelected(null);
// // //         setUpdatedName("");
// // //         setVisible(false);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   // Delete category
// // //   const handleDelete = async (pId) => {
// // //     try {
// // //       const { data } = await axios.delete(
// // //         `http://localhost:5555/api/category/delete-category/${pId}`
// // //       );
// // //       if (data.success) {
// // //         toast.success(`Category is deleted`);
// // //         getAllCategory();
// // //       } else {
// // //         toast.error(data.message);
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error("Something went wrong");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex min-h-screen">
// // //       <Navbar />
// // //       <div className="flex-grow w-full pl-20 m-9">
// // //         <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">
// // //           Manage Category
// // //         </h1>
// // //         <div className="w-full p-4 ">
// // //           <CategoryForm
// // //             handleSubmit={handleSubmit}
// // //             value={name}
// // //             setValue={setName}
// // //           />
// // //         </div>
// // //         <div className="w-full">
// // //           <table className="table-auto w-full">
// // //             <thead>
// // //               <tr>
// // //                 <th className="px-4 py-2">Name</th>
// // //                 <th className="px-4 py-2">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {categories?.map((c) => (
// // //                 <tr key={c._id}>
// // //                   <td className="border px-4 py-2">{c.name}</td>
// // //                   <td className="border px-4 py-2">
// // //                     <button
// // //                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
// // //                       onClick={() => {
// // //                         setVisible(true);
// // //                         setUpdatedName(c.name);
// // //                         setSelected(c);
// // //                       }}
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                     <button
// // //                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
// // //                       onClick={() => {
// // //                         handleDelete(c._id);
// // //                       }}
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //         <Modal
// // //           onCancel={() => setVisible(false)}
// // //           footer={null}
// // //           visible={visible}
// // //         >
// // //           <CategoryForm
// // //             value={updatedName}
// // //             setValue={setUpdatedName}
// // //             handleSubmit={handleUpdate}
// // //           />
// // //         </Modal>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CreateCategory;

// // import React, { useEffect, useState } from "react";
// // import { toast } from "react-toastify";
// // import axios from "axios";
// // import CategoryForm from "../components/Form/CategoryForm";
// // import { Modal } from "antd";
// // import Navbar from "../components/Navbar";

// // const CreateCategory = () => {
// //   const [categories, setCategories] = useState([]);
// //   const [name, setName] = useState("");
// //   const [visible, setVisible] = useState(false);
// //   const [selected, setSelected] = useState(null);
// //   const [updatedName, setUpdatedName] = useState("");

// //   // Handle Form Submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.post(
// //         "http://localhost:5555/api/category/create-category",
// //         {
// //           name,
// //         }
// //       );
// //       if (data?.success) {
// //         toast.success(`${name} is created`);
// //         getAllCategory();
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   // Get all categories
// //   const getAllCategory = async () => {
// //     try {
// //       const { data } = await axios.get(
// //         "http://localhost:5555/api/category/get-category"
// //       );
// //       if (data?.success) {
// //         setCategories(data?.category);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error("Something went wrong in getting category");
// //     }
// //   };

// //   useEffect(() => {
// //     getAllCategory();
// //   }, []);

// //   // Update category
// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const { data } = await axios.put(
// //         `http://localhost:5555/api/category/update-category/${selected._id}`,
// //         { name: updatedName }
// //       );
// //       if (data?.success) {
// //         toast.success(`${updatedName} is updated`);
// //         setSelected(null);
// //         setUpdatedName("");
// //         setVisible(false);
// //         getAllCategory();
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   // Delete category
// //   const handleDelete = async (pId) => {
// //     try {
// //       const { data } = await axios.delete(
// //         `http://localhost:5555/api/category/delete-category/${pId}`
// //       );
// //       if (data.success) {
// //         toast.success(`Category is deleted`);
// //         getAllCategory();
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen">
// //       <Navbar />
// //       <div className="flex-grow w-full pl-20 m-9">
// //         <h1 className="text-4xl font-bold mb-8 text-left text-cyan-700">
// //           Manage Category
// //         </h1>
// //         <div className=" flex items-start p-4 ">
// //           <CategoryForm
// //             handleSubmit={handleSubmit}
// //             value={name}
// //             setValue={setName}
// //           />
// //         </div>
// //         <div className="w-1/2">
// //           <table className="table-auto w-1/2">
// //             <thead>
// //               <tr>
// //                 <th className="px-2 py-1 text-left">Name</th>
// //                 <th className="px-2 py-2 text-left">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {categories?.map((c) => (
// //                 <tr key={c._id}>
// //                   <td className="border px-2 py-2">{c.name}</td>
// //                   <td className="border px-2 py-2">
// //                     <button
// //                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-10"
// //                       onClick={() => {
// //                         setVisible(true);
// //                         setUpdatedName(c.name);
// //                         setSelected(c);
// //                       }}
// //                     >
// //                       Edit
// //                     </button>
// //                     <button
// //                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-13"
// //                       onClick={() => {
// //                         handleDelete(c._id);
// //                       }}
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
// //           <CategoryForm
// //             value={updatedName}
// //             setValue={setUpdatedName}
// //             handleSubmit={handleUpdate}
// //           />
// //         </Modal>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateCategory;
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import CategoryForm from "../components/Form/CategoryForm";
// import { Modal } from "antd";
// import Navbar from "../components/Navbar";

// const CreateCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [updatedName, setUpdatedName] = useState("");

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:5555/api/category/create-category",
//         {
//           name,
//         }
//       );
//       if (data?.success) {
//         toast.success(`${name} is created`);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Get all categories
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
//       toast.error("Something went wrong in getting category");
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   // Update category
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `http://localhost:5555/api/category/update-category/${selected._id}`,
//         { name: updatedName }
//       );
//       if (data?.success) {
//         toast.success(`${updatedName} is updated`);
//         setSelected(null);
//         setUpdatedName("");
//         setVisible(false);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Delete category
//   const handleDelete = async (pId) => {
//     try {
//       const { data } = await axios.delete(
//         `http://localhost:5555/api/category/delete-category/${pId}`
//       );
//       if (data.success) {
//         toast.success(`Category is deleted`);
//         getAllCategory();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <Navbar />
//       <div className="flex-grow w-full pl-20 m-9">
//         <h1 className="text-4xl font-bold mb-8 text-left text-cyan-700">
//           Manage Category
//         </h1>
//         <div className="w-1/2 flex flex-col items-start p-4 ">
//           <CategoryForm
//             handleSubmit={handleSubmit}
//             value={name}
//             setValue={setName}
//           />
//         </div>
//         <div className="w-1/2">
//           <table className="table-auto w-full">
//             <thead>
//               <tr>
//                 <th className="px-2 py-1 text-left">Name</th>
//                 <th className="px-2 py-2 text-left">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories?.map((c) => (
//                 <tr key={c._id}>
//                   <td className="border px-2 py-2">{c.name}</td>
//                   <td className="border px-2 py-2">
//                     <button
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
//                       onClick={() => {
//                         setVisible(true);
//                         setUpdatedName(c.name);
//                         setSelected(c);
//                       }}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
//                       onClick={() => {
//                         handleDelete(c._id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <Modal
//           onCancel={() => setVisible(false)}
//           footer={null}
//           visible={visible}
//         >
//           <CategoryForm
//             value={updatedName}
//             setValue={setUpdatedName}
//             handleSubmit={handleUpdate}
//           />
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default CreateCategory;
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "../components/Form/CategoryForm";
import { Modal } from "antd";
import Navbar from "../components/Navbar";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5555/api/category/create-category",
        {
          name,
        }
      );
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get all categories
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
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5555/api/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5555/api/category/delete-category/${pId}`
      );
      if (data.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex-grow w-full pl-20 m-9">
        <h1 className="text-4xl font-bold mb-8 text-center text-cyan-700">
          Add Category
        </h1>
        <div className="flex flex-col items-start p-4 w-full ">
          <CategoryForm
            handleSubmit={handleSubmit}
            value={name}
            setValue={setName}
          />
          <h1 className="text-4xl font-bold mb-8 text-left text-cyan-700">
            All Categories
          </h1>
          <table className="table-auto w-1/2 rounded-md">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left">Name</th>
                <th className="px-2 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((c) => (
                <tr key={c._id}>
                  <td className="border px-2 py-2">{c.name}</td>
                  <td className="border px-2 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => {
                        setVisible(true);
                        setUpdatedName(c.name);
                        setSelected(c);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded "
                      onClick={() => {
                        handleDelete(c._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal onCancel={() => setVisible(false)} footer={null} open={visible}>
          <CategoryForm
            value={updatedName}
            setValue={setUpdatedName}
            handleSubmit={handleUpdate}
          />
        </Modal>
      </div>
    </div>
  );
};

export default CreateCategory;
