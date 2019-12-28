// Point to the mydb database
db = db.getSiblingDB("mydb")

// Create collection
db.createCollection("products")

// Insert entry in database
db.products.insert({"name": "white board", "price": 100})


