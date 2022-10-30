const fs = require("fs");
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../starter/dev-data/data/tours-simple.json`));

exports.checkId = (req, res, next, val) => {
    console.log(`The requested id is : ${val}.`);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    if (!tour){
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID"
        })
    }
    next();
}

exports.checkBody = (req, res, next) => {
    const newTour = req.body;
    if(!newTour.name|| !newTour.price){
        return res.status(404).json({
            status: "fail",
            message: "Not valid object"
        })
    }

    next();
}

exports.createTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/starter/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tours: newTour
            }
        })
    });
}

exports.deleteTour = (req, res) =>{

    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

 
        res.status(204).json({
            status: "success",
            data: null
        }
        );
    }

exports.getTour = (req, res) =>{

    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);


        res.json({
            status: "success",
            data: {
                tour
            }
        }
        );
}

exports.getTours = (req, res) =>{
    console.log(req.requestTime)
    res.json({
        status: "success",
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours
        }
    }
    )
}