const router = require('express').Router();
const { Pet } = require('../../models');
const { User } = require('../../models');
const { Like } = require('../../models');


// Check if the current user has liked a specific pet
router.get('/check', async (req, res) => {
    console.log("Entered /check route");
    try {
        const petId = req.query.petId;
        const userId = req.session.user_id;

        console.log('petId:', petId);
        console.log('userId:', userId);

        // Check if there is a like record for the given pet and user
        const likeData = await Like.findOne({
            where: {
                pet_id: petId,
                user_id: userId,
            },
        });

        console.log('likeData:', likeData);

        res.status(200).json({ hasLiked: likeData !== null });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const likesData = await Like.findAll({
            where: {
                user_id: req.params.id,
            },
        });

        if(!likesData) {
            res.status(404).json({ message: `No likes found for user with id: ${id}.`});
            return;
        };

        res.status(200).json(likesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new like
router.post('/', async (req, res) => {
    try {
        console.log(req.body.petid);
        console.log(req.session.user_id);
        const likesData = await Like.create({
            pet_id: req.body.petid,
            user_id: req.session.user_id
        });

        res.status(200).json(likesData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
      const categoryDelete = await Like.destroy({
        where: {pet_id: req.params.id,},
      });
      if (!categoryDelete) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(categoryDelete);
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router;