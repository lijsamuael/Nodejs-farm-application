const express = require("express");
const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    console.log("Hello from the middleware...")
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);


 // app.route("api/v1/tours").get(getTours).post(createTour);
 // app.route("api/v1/tours/:id").delete(deleteTour).post(getTour);

module.exports = app;