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

exports.getuUsers = (req, res) =>{
    res.status(500).json({
        status: "error",
        message: "This route is not yet implemented."
    })
}

exports.getUser = (req, res) =>{
    res.status(500).json({
        status: "error",
        message: "This route is not yet implemented."
    })
}

exports.deleteUser = (req, res) =>{
    res.status(500).json({
        status: "error",
        message: "This route is not yet implemented."
    })
}

exports.createUser = (req, res) =>{
    res.status(500).json({
        status: "error",
        message: "This route is not yet implemented."
    })
}