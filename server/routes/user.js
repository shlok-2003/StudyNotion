import express from 'express';
const router = express.Router();

import User from '../models/User.js';

router.post('/post', async (req, res) => {
    const { firstName, lastName, email, password, accountType, image, additionalDetails } = req.body;

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        accountType,
        image,
        additionalDetails,
    });

    console.log(user);

    res.json({ user });
})

export default router;