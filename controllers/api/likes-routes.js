const router = require('express').Router();
const { Pet } = require('../../models');
const { User } = require('../../models');

router.put('/', async (req, res) => {
    try{
        const updateLike = await Like.update({
            pet_id: req.body.pet_id
        });
        res.status(200)
    } catch (err){
        res.status(500).console.log('somethings messed up');
    }

})