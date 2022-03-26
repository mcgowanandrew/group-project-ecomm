const items = require("./data/items.json");
const companies = require("./data/companies.json");
const { restart } = require("nodemon");


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

const getItemsById = (req, res) => {
  const { id } = req.params;
  const filtedItem = items.filter((item) => {
    return item._id === Number(id);
  });
  if (filtedItem.length <= 0) {
    res.status(404).json({
      status: 404,
      message: "Item not found by ID",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: filtedItem,
    });
  }
};

// Handlers for companies data file:

// An endpoint to access all companies listed:

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
//An endpoint to access one company based on its id:

const getCompaniesById = (req, res) => {
  const { id } = req.params.categoryName;
  const filtedCompany = companies.filter((company) => {
    return company._id === Number(id);
  });
  if (!filtedCompany) {
    res.status(404).json({
      status: 404,
      message: "Item not found by ID",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: filtedCompany,
    });
  }
};

const getCategoryByName = (req, res) => {
  const categoryName = req.params.categoryName;
  const filteredCategory = items.filter((result) => {
    return result.category === categoryName;
  });
  if (!filteredCategory) {
    res.status(404).json({ status: 404, message: "Category not found" });
  } else {
    res.status(200).json({ status: 200, data: filteredCategory });
  }
};

const patchItems = (req, res) => {
  // get the cart items from the fetch in the req body
  const cartItems = req.body.itemQuantArray;
  const filteredCartItems = cartItems.map((cartItem) => {
    return items.filter((origItem) => {
      return cartItem._id === origItem._id;
    });
  });
  
  const newItems = filteredCartItems.map((filtItem, index) => {
    if (filtItem[0]._id === cartItems[index]._id) {
      let initialStockNum = filtItem[0].numInStock; //9
      let subtractFromStock = cartItems[index].quantity; //2
      initialStockNum = initialStockNum - subtractFromStock;
      return { _id: filtItem[0]._id, newQuantity: initialStockNum }; // 7
    }
  });
  res.status(201).json({
    status: 201,
    message: "updated item quants",
    data: newItems,
  });
};

module.exports = {
  getAllItems,
  getAllCompanies,
  getItemsById,
  getCompaniesById,
  patchItems,
  getCategoryByName,
};
