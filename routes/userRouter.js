const express = require('express')
const userRouter = express.Router();


// node modules
const mongoose = require('mongoose');
const MapDataModel = require('../models/mapDataModel')





// to get all map points
userRouter.route('/markers/all')
  .get(
    async (req, res, next) => {

try {

    let data = await MapDataModel.find({}).
    select('likes longitude latitude longitudeDelta latitudeDelta markerKey imagePath date userId _id')
    .populate('userId', 'username -_id')
    .sort({'updatedAt': 1});

    if(data.length == 0)
    {
        return res.status(200)
      .json({success:false, message:"No record (markers) found"});
    }
    
    res.status(200)
    .json({success:true, data:data});

  } catch (error) {
    console.log(error);
  }
});


module.exports = userRouter;
