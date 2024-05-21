// const mathFunctions = {
//   cosineSimilarity: (vec1, vec2) => {
//     try {
//       const dotProduct = mathFunctions.dotProduct(vec1, vec2);
//       const normVec1 = mathFunctions.norm(vec1);
//       const normVec2 = mathFunctions.norm(vec2);
//       if (normVec1 === 0 || normVec2 === 0) return 0;
//       return dotProduct / (normVec1 * normVec2);
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   },

//   dotProduct: (vec1, vec2) => {
//     try {
//       return vec1.reduce((acc, val, index) => acc + val * vec2[index], 0);
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   },

//   norm: (vec) => {
//     try {
//       return Math.sqrt(vec.reduce((acc, val) => acc + val * val, 0));
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   },
// };

// export default mathFunctions;
