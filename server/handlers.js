const items = require("./data/items.json");
const companies = require("./data/companies.json");
const { restart } = require("nodemon");

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

const getItemsById = (req, res) => {
  const { id } = req.params;

  //console.log("id", id);
  const filtedItem = items.filter((item) => {
    //console.log("items", item._id);
    //console.log("items", item._id.toString() === id);
    //console.log("items", typeof item._id);
    // console.log("taco", typeof id);

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
  const { _id, quantity } = req.body;

  let purchasedItem = items.filter((item) => {
    return item._id === _id;
  });

  // when adding fetch for this handler in the front end cart componenent
  // aka running fetch onClick of purchase button
  // fetch will perceive the type of API call as a POST
  // reference twitter clone tweet post for this.

  // could get things from front end purchase of cart
  // this way:
  // [ { _id: 6545, quantity: 2 }, { _id: 6544, quantity: 1 } ]
  // console.log(req.body);
  // the reasoning is - people might buy more than 1 item
  // right now handler works for the purchase of only 1 item at
  // a time :)

  purchasedItem[0].numInStock = purchasedItem[0].numInStock - quantity;
  res.status(200).json({
    status: 200,
    message: "updated",
    data: purchasedItem,
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
