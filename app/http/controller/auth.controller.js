const { userModel } = require("../../model/user");
const { hashedPassword, createToken } = require("../../module/functions");
const bcrypt=require("bcrypt")
class AuthController {
  async register(req, res, next) {
    try {
      const { mobile, username, password, email } = req.body;
      const passHashed = hashedPassword(password);

      const user = await userModel.create({
        mobile,
        username,
        email,
        password: passHashed,
      });
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({ username });
      if (!user)throw { status: 401, message: "یورزنیم و پسورد اشتباه میباشد" };
      const passCheck = bcrypt.compareSync(password, user.password);
      if (!passCheck) throw { status: 401, message: "یوزرنیم و یا پسورد شما اشتباه می باشد" };
     const  token = createToken({username});
      user.token = token;
      user.save();
      res.status(200).json({
        status: 200,
        success: true,
        message: "شما با موفقیت وارد شدید",
        token,
      });
    } catch (error) {
      next(error);
    }
  }

  resetPassword() {}
}
module.exports = {
  AuthController: new AuthController()
};
