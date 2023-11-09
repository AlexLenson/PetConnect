const router = require('express').Router();
const { Pet } = require('../../models');
const { User } = require('../../models');
const { Like } = require('../../models');

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