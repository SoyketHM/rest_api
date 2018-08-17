const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "This is get method.",
        user
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    // res.json({
    //     id
    // })
    user.push(user[id])
    res.send(user)
});

router.post('/', (req, res, next) => {
    user.push({
        name: req.body.name,
        email: req.body.email
    })
    res.status(201).json({
        message: "Data Create",
    })
});

module.exports = router;




const user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442"
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125"
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447"
    }
]