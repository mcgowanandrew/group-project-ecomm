const items = require("./data/items.json");
const companies = require("./data/companies.json");

//console.log("items", items);
// Handlers for items data file

// An endpoint to access all items listed:

const getAllItems = (req, res) => {
  if (!items) {
    res.status(404).json({
      status: "error",
      message: "No items found",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: items,
    });
  }
};

// An endpoint to access one item based on its id:

// const getItemsById = (req, res) => {
//   const { id } = req.params;

//   //console.log("id", id);
//   const filtedItem = items.filter((item) => {
//     //console.log("items", item._id);
//     //console.log("items", item._id.toString() === id);
//     //console.log("items", typeof item._id);
//     // console.log("taco", typeof id);

//     return item._id.toString() !== id;
//   });

//   if (filtedItem.length <= 0) {
//     res.status(404).json({
//       status: 404,
//       message: "Item not found by ID",
//     });
//   } else {
//     res.status(200).json({
//       status: 200,
//       data: filtedItem,
//     });
//   }
// };

// Handlers for companies data file:

const getAllCompanies = (req, res) => {
  if (!companies) {
    res.status(404).json({
      status: "error",
      message: "No companies found",
    });
  } else {
    res.status(200).json({
      status: "success",
      message: companies,
    });
  }
};

module.exports = {
  getAllItems,
  getAllCompanies,
};
