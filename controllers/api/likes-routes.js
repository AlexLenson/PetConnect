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
router.post('/user/:id', async (req, res) => {
    try {
        console.trace(req.params.id);
        console.trace(req.session.user_id);
        const likesData = await Like.create({
            recipe_id: req.params.id,
            user_id: req.session.user_id,
        });

        res.status(200).json(likesData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;