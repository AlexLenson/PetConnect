const router = require('express').Router();
const { Pet, Like, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/:id', async (req, res) => {
    try {
        const likesData = await Like.findAll({
          attributes: ['pet_id'],
            where: {
                user_id: req.params.id,
            },
            include: Pet,
        })

        // for (let i= 0; index < likesData.length; index++) {
        //     const petData = Pet.findAll({
        //         where: {
        //             pet_id: likesData[i]
        //         }
        // })
    // }
        if(!likesData) {
            res.status(404).json({ message: `No likes found for user with id: ${id}.`});
            return;
        };
  
        res.status(200).render('profile', {likesData});
        res.status(200).json(likesData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  
module.exports = router;
