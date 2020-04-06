const router = require('express').Router();
let Music = require('../models/music.model');

router.route('/add').post((req, res) => {
    console.log(req.body)  
    const myData = new Music(req.body);  
    console.log(myData);
    myData.save()
        .then(() => res.json('Music added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    Music.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
    Music.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').get((req, res) => {
    Music.findByIdAndDelete(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;