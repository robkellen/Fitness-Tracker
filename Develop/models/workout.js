const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      weight: {
        type: Number,
        default: 0,
        
      },
      sets: {
        type: Number,
        default: 0,
        
      },
      reps: {
        type: Number,
        default: 0,
        
      },
      duration: {
        type: Number,
        default: 0,
        
      },
      distance: {
        type: Number,
        default: 0,
        
      }
    },
  ],
});

const Workout = new Schema("Workout", WorkoutSchema);

module.exports = Workout
