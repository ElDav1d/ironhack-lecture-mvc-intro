function errorHandling(app) {
  app.use((req, res) => {
    // 404
    res.status(404).render("errors/not-found.hbs"); // not throwing error, since THIS IS A FOUND RESOURCE!!!
  });

  app.use((err, req, res, next) => {
    // 500 server errors
    console.log(new Error(err)); // throw is NOT for this flow because it RETURNS
    res.status(500).render("errors/server-error.hbs");
  });
}

module.exports = errorHandling;
