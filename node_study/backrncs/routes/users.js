const express = require('express');
const router = express.Router();
const User = require("../schemas/users");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  try {
    const {nickname, email, password} = req.body;
    const hashed = bcrypt.hash(password, 12);
    const user = new User({email, password:hashed, nickname});
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

router.put('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const {nickname, email, password} = req.body;
    const hashed = bcrypt.hash(password, 12);
    const updated = await User.findByIdAndUpdate(id,
        {nickname, email, password:hashed},
        {new: true, runValidators: true}
    );
    if (!updated) {
      return res.status(404).json({message: '사용자를 찾을 수 없습니다.'})
    }
    return res.json(updated);
  } catch (e) {
    return res.status(500).json(e);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    // supabase에선 supabase.from('테이블명').delete().eq()로 달아줬지만 여기선 findByIdAndDelete 이런 함수 쓰면 okay다!!!
    const deleted = await User.findByIdAndDelete(id);
    return res.json({message: '삭제성공', deleted});
  } catch (e) {
    return res.status(500).json(e);
  }
});

module.exports = router;