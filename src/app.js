const express = require('express');
const app = express();

app.use("/user", 
    [(req, res, next) => {
        console.log("Handling the route user");
        next();
    },
    (req, res, next) => {
        console.log("Handling the route user 2");
        next();
    },
    (req, res, next) => {
        console.log("Handling the route user 3");
        res.send("3rd response");
    }]
);

app.get("/user/:userId/:name", (req, res) => {
    console.log({...req.query});
    console.log({...req.params});
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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});