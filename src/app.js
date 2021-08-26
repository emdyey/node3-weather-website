/*
///// Hello Express! /////

const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/weather", (req, res) => {
  res.send("Your weather");
});

// app.com
// app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// Serving up HTML and JSON /////

const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello express!</h1>");
});

app.get("/help", (req, res) => {
  // Object
  //   res.send({
  //     name: "Joy",
  //     age: 23,
  //   });

  // Array of Objects
  res.send([
    {
      name: "Joy",
      age: 23,
    },
    {
      name: "Marg",
      age: 14,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// Serving up Static Assets /////

const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// Dynamic Pages with Templating /////

const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


/////  Customizing the Views Directory /////

const path = require("path");
const express = require("express");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Rainy day",
    location: "Philippines",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// Advanced Templating /////

const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
    name: "Mary Joy Eraes",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Rainy day",
    location: "Philippines",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

///// The Query String /////

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { RSA_PKCS1_OAEP_PADDING } = require("constants");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
    name: "Mary Joy Eraes",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided",
    });
  }
  res.send({
    forecast: "Rainy day",
    location: "Philippines",
    address: req.query.address,
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// Building a JSON HTTP Endpoint /////

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
    name: "Mary Joy Eraes",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided",
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location }) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecasrData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecasrData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// ES6 Aside Default Function Parameters /////

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
    name: "Mary Joy Eraes",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecasrData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecasrData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});


///// Browser HTTP Requests with Fetch /////

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
    name: "Mary Joy Eraes",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecasrData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecasrData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

*/

///// Deploying Node.js to Heroku /////

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Mary Joy Eraes",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Mary Joy Eraes",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "How can we help you?",
    name: "Mary Joy Eraes",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address must be provided",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecasrData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecasrData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    name: "Mary Joy Eraes",
    errorMessage: "Page not found",
  });
});

app.listen(port, () => {
  console.log('Server is up on port' + port);
});

