const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.json({message : "Welcome in the Universe of League of Legends."})
})

require("./routes/heroes.routes")(app);
require("./routes/region.routes")(app);
require("./routes/role.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));