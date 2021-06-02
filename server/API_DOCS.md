# Clown Town API docs

The Clown Town API is a REST API for the Clown Town group's Ecommerce project.

---

# Setup and ports

Run `yarn start` to start the server.

The server runs on port 4000, so you can access the server at http://localhost:4000/

---

# Endpoints

Endpoints are grouped into 3 categories:

- **items** - get item data from `items.json`
- **companies** - get data from `companies.json`
- **cart** - patches data to the customers cart

## Item Endpoints

These endpoints control item-specific things: getting data for all items and for single items carried in the store.

This data can be found in `server` > `data` > `items.json`

### GET `/items`

Get all of the items available for purchase in the store.

The item data should come in this structure:

```json
[
  {
    "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
    "price": "$49.99",
    "body_location": "Wrist",
    "category": "Fitness",
    "_id": 6543,
    "imageSrc": "unnecessarily-long-imageSrc-here",
    "numInStock": 9,
    "companyId": 19962
  }
]
```

If the item does not exist, it returns a 404 error of `"No items found"`.

### GET `/items/:id`

Fetch the data for a specific item. Returns data in the same shape as `/items`

If the item does not exist, it returns a 404 error of `"Item not found by ID"`.

### GET `/category/:categoryName`

Fetch the data for items by category which is passed via `req.params`

Returns data in the same shape as `/items`

---

## Company Endpoints

These endpoints control company specific things: data for all companies or a single company carried in the store.

This data can be found in `server` > `data` > `companies.json`

### GET `/companies`

Get all of the companies carried in the store.

The companies data should come in this structure:

```json
[
  {
    "name": "Barska",
    "url": "http://www.barska.com/",
    "country": "United States",
    "_id": 19962
  }
]
```

If the companies do not exist, it returns a 404 error of `"No companies found"`.

### GET `/companies/:id`

Fetch the data for a specific company. Returns data in the same shape as `/companies`

If the company does not exist, it returns a 404 error of `"Company not found by ID"`.

---

## Cart Endpoint

These endpoints update the contents of the cart.

### PATCH `/cart/update`

Updates the items data and subtracts the quantity bought from `numInStock`.

```json
[
  {
    "newQuantity": 5,
    "_id": 6547
  }
]
```
