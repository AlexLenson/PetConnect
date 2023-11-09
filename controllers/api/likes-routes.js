const router = require('express').Router();
const { Pet } = require('../../models');
const { User } = require('../../models');
const { Like } = require('../../models');

router.post('/', async (req, res) => {
    try{
        const updateLike = await Like.create({
            pet_id: req.body.pet_id
        });
        res.status(200)
    } catch (err){
        res.status(500)
    }

})

module.exports = router;