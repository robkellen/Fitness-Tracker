const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type of exercise is required",
        },
        name: {
          type: String,
          trim: true,
          required: "Name of exercise is required",
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
          required: "Duration is required",
        },
        distance: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
