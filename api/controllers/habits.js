const Habit = require('../models/Habit');

// index route: gets all habits
async function index (req, res) {
    try {
        const habits = await Habit.all
        res.status(200).json(habits)
    } catch(err) {
        res.status(500).json(err)
    }
};

// show route: gets habit by id
async function showHabitbyHabitId (req, res) {
    try {
        const habit = await Habit.findByHabitId(req.params.id);
        res.status(200).json(habit)
    } catch(err) {
        res.status(404).json({err})
    }
};

// show route: gets habit by id
async function showHabitsbyUser (req, res) {
    try {
        const habit = await Habit.HabitsByUserId(req.params.id);
        res.status(200).json(habit)
    } catch(err) {
        res.status(404).json({err})
    }
};

/* router.post('/', habitRoutes.create); // creates habit route */
async function create (req, res) {
    try {
        const habit = await Habit.create(req.body);
        res.status(201).json(habit)
    } catch (err) {a
        res.status(422).json({err})
    }
};

// router.delete('/:id', habitRoutes.destroy); //endpoint for the delete habit

async function destroy (req, res) {
    try {
    const habit = await Habit.destroy(req.params.id);
    const resp = await habit.destroy();
    res.status(204).send(resp)
} catch (err) {
    res.status(404).json({err})
}
}

module.exports= {index, showHabitbyHabitId, showHabitsbyUser, create, destroy};
