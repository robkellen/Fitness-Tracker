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
        required: true,
      },
      sets: {
        type: Number,
        default: 0,
        required: true,
      },
      reps: {
        type: Number,
        default: 0,
        required: true,
      },
      duration: {
        type: Number,
        default: 0,
        required: true,
      },
      distance: {
        type: Number,
        default: 0,
        required: true,
      }
    },
  ],
});

const Workout = new Schema("Workout", WorkoutSchema);

module.exports = Workout
