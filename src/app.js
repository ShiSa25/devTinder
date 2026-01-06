const express = require('express');

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Shiva", lastName: "Sahu"});
});

app.post("/user", (req, res) => {
    // Logic to create a new user would go here
    res.send("User added successfully");
});

app.delete("/user", (req, res) => {
    // Logic to delete a user would go here
    res.send("User deleted successfully");
})

app.use("/", (req, res) => {
    res.send("Hello babe");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});