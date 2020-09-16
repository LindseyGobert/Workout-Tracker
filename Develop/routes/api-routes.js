const workout = require("../models/workouts");

module.exports = function (app) {
    app.post("/api/workouts", (req, res) => {
        workout.create({}).then((data) => {
            res.json(data);
        });
    });

    app.put("/api/workouts/:id", ({body, params}, res) => {
        workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body}},
            { new: true, runValidators: true}
        )
        .then((data) => res.json(data))
        .catch((err) => {
            res.json(err);
        });
    });

    app.get("/api/workouts", (req,res) => {
        workout.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        workout.find()
        .limit(7)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });
};