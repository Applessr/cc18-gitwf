require("dotenv").config();
const express = require("express");
const dog = express();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
