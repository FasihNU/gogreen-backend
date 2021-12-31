const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapPointsSchema = new Schema({
    longitude: {
      type: Number,
      required: true
    },
    latitude : {
      type: Number,
      required: true
    },
    longitudeDelta: {
      type: Number,
      required: true
    },
    latitudeDelta : {
      type: Number,
      required: true
    },
    markerKey : {
      type: Number,
      required: true
    },
    date : {
      type: Date,
      required: true
    },
    imagePath: {
      type: [String],
      required: true,
      unique: false
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  }
);



var MapPoints = mongoose.model('mapPoint', mapPointsSchema);
module.exports = MapPoints;


// var thingSchema = new Schema({..}, { timestamps: { createdAt: 'created_at' } });


