import express from "express";
const listings = [
 { id: 1, title: "Nile View Apartment", price: 85 },
 { id: 2, title: "Beach House", price: 140 },
 { id: 3, title: "Desert Eco-Lodge", price: 60 },
];
const app = express();
app.get("/api/listings", (req, res) => {
 res.send(listings);
});
app.listen(3000, () => {
 console.log("Server running on http://localhost:3000");
});

