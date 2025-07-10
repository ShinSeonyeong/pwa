const express = require('express');
const router = express.Router();
const User = require("../schemas/users");

router.post("/register", async (req, res, next) => {
  try {
    const {nickname, email, password} = req.body;
    const user = new User({email, password, nickname});
    const result = await user.save();
    return res.json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    // supabase에선 supabase.from('테이블명').delete().eq()로 달아줬지만 여기선 findByIdAndDelete 이런 함수 쓰면 okay다!!!
    const deleted = await User.findByIdAndDelete(id);
    return res.json({message: '삭제성공', deleted});
  } catch (e) {
    return res.status(500).json(e);
  }

})

module.exports = router;