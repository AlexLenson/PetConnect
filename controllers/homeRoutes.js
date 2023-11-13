const router = require('express').Router();
const { Pet, User, Like } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection')

router.get('/', async (req, res)=>{
  try {
    res.render('init');
  } catch (err) {
    res.status(500).json(err);
  }
  });
  
router.get('/home', async (req, res) => {
  try {
    res.render('homepage', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Go to search page and find all pets depending on whether cats or dogs was selected
router.get('/search/:type', withAuth, async (req, res) => {
  try {
    const petData = await Pet.findAll({
      where: { animal_type: req.params.type},
      order: [['pet_name', 'ASC']],
      attributes: [

        'intake_type', 'in_date', 'pet_name', 'pet_age', 'pet_size', 'color', 'breed', 'sex', 'picture', 'id',
      
        [sequelize.literal('(SELECT COUNT(*) FROM Likes WHERE Likes.pet_id = Pet.id)'), 'likeCount']
      ]
        
    });

    // Pet.findAll({
    //   attributes: [
    //     'id',
    //     'name',
    //     [sequelize.literal('(SELECT COUNT(*) FROM Likes WHERE Likes.pet_id = Pet.id)'), 'likeCount']
    //   ]
    // })

    const pets = petData.map((project) => project.get({ plain: true }));
    console.log("LOGGING PETS, WE SHOULD SEE A LIKE PROPERTY",pets);
    res.render('search', {
      pets,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Pet.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  console.log("ENTERED THE /profile HOME ROUTE");
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pet }],
    });
    console.log("HERE WE ARE LOGGING userData: ", userData);
    
    const user = userData.get({ plain: true });
    console.log("HERE WE ARE LOGGING USER: ", user);
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/home');
    return;
  }

  res.render('signup');
});
module.exports = router;

router.get('/support', async (req, res) => {
  try {
    res.render('support', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});
