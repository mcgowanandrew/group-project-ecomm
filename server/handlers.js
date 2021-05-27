const items = require("./data/items.json");
const companies = require("./data/companies.json");

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
  const id = req.params.id;
  const filtedItem = items.filter((item) => {
    return (item._id = id);
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

const getCompanyById = (req, res) => {
  const id = req.params.id;
  const filtedCompany = companies.filter((company) => {
    return (company._id = id);
  });

  if (filtedCompany.length <= 0) {
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

module.exports = {
  getAllItems,
  getItemsById,
  getCompanyById,
};
