const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    const images = '/images/profile.jpg'; // Adjusted to use the path served by express.static
    res.render('index', { images: images });
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/project", (req, res) => {
    res.render('project');
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
