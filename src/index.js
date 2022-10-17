const express = require("express");

const index = express();

index.use(express.json());


index.listen(3000);
