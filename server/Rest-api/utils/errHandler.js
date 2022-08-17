const { json } = require("express");

function errorHandler(err, req, res, next) {
    if(err.errors){
        console.log(Object.values(err.errors)[0].properties.message);
        return res.status(500).json({message: Object.values(err.errors)[0].properties.message});
    }
    console.log("error in error handler")
    if (err.status === 333) {
        res.status(333)
            .json({ message: 'ErrorHandler: not allowed!' })
    } else {
        // console.error(err.stack)
        // console.log(err)
        res.status(500)
            .json({ message: 'ErrorHandler: Something went wrong!', err })
    }
}

module.exports = errorHandler;
