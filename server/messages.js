const auth = require("./auth.js");
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

//
// messages
//

const messageSchema = new mongoose.Schema({
  name: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

router.get('/', async (req, res) => {
  try {
    let messages = await Message.find();
    return res.send(messages);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const message = new Message({
    name: req.body.name,
    message: req.body.message,
  });
  try {
    await message.save();
    return res.send(message);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.delete('/:id', auth.verifyToken, async (req, res) => {
  try {
    await Message.deleteOne({
      _id: req.params.id
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
