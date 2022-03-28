const User = require('../models/User');

// index route: gets all users
async function index (req, res) {
    try {
        const users = await User.all
        res.status(200).json(users)
    } catch(err) {
        res.status(500).json(err)
    }
};

// show route: gets users by id
async function show (req, res) {
    try {
        // const user = await User.findById(parseInt(req.params.id));
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch(err) {
        res.status(404).json({err})
    }
};

/* router.post('/', userRoutes.create); // creates user post route */
async function create (req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user)
    } catch (err) {
        res.status(422).json({err})
    }
};



module.exports= {index, show, create};
