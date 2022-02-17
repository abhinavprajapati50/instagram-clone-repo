const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../Model/User");

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
exports.signUpRoute = async (req, res, next) => {
  // console.log(req.body);
  const { email, password, username } = req.body;

  // console.log(emailRegexp.test(emailToValidate));
  try {
    if (!email || !password || !username) {
      return res
        .status(200)
        .json({ status: false, message: "All Field required" });
    }
    if (!email) {
      return res
        .status(200)
        .json({ status: false, message: "Plz fill the email" });
    }
    if (!password) {
      return res
        .status(200)
        .json({ status: false, message: "Plz fill the password" });
    }
    if (!username) {
      return res
        .status(200)
        .json({ status: false, message: "Plz fill the username" });
    }

    const alreadyExists = await User.findOne({ where: { email } });

    console.log("================>alreadyExists", alreadyExists);

    if (alreadyExists) {
      return res
        .status(200)
        .json({ status: false, message: "Email Already Exists!!" });
    }

    if (!emailRegexp.test(email)) {
      res.status(200).json({ status: false, message: "Invalid Email!! " });
      return false;
    }
    if (!regularExpression.test(password)) {
      res.status(200).json({
        status: false,
        message:
          "plz fill valid password  */ fill one lowercase,one uppercase, one digit,valid 6 to 16",
      });
      return false;
    }

    const bcryptPass = await bcrypt.hash(password, 12);

    const result = await User.create({
      email: email.toLowerCase(),
      password: bcryptPass,
      username: username,
    });

    if (result) {
      return res.status(201).json({
        status: true,
        message: "user is successfull register",
        data: result,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "user is not registered", data: error });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  // console.log(req.body);
  if (!email || !password) {
    return res
      .status(200)
      .json({ status: false, message: "All Field Required(*)" });
  }
  if (!email) {
    return res
      .status(200)
      .json({ status: false, message: "Plz fill the email" });
  }
  if (!password) {
    return res
      .status(200)
      .json({ status: false, message: "Plz fill the password" });
  }

  const alreadyExists = await User.findOne({ where: { email } });
  // console.log(
  //   "================>alreadyExists",
  //   alreadyExists.password,
  //   password
  // );
  console.log("-----------=-=-=-=alreadyExists", alreadyExists);

  if (!alreadyExists) {
    return res.status(200).json({
      status: false,
      message: "Email or Passw does not exist !! Plz first register !!",
    });
  }

  try {
    // const bcryptPass = await bcrypt.hash(password, 12);
    // console.log("-------------------------->> ./> . . bcryptPass", bcryptPass);
    // const jwtToken =  jwt.sign(
    //   { id: result.id },
    //   "theimaginarydragontheabhinavprajapati"
    // );
    // console.log("===========-=-==-=",jwtToken);
    const result = await User.findOne({
      where: { email: email },
    });

    // console.log("=-=-=-=result",result);
    // niraj@gmail.com

    // console.log(result);

    if (!result) {
      return res
        .status(500)
        .json({ status: false, message: " email or password does not exist" });
    }
    // const bcryptPassword = await bcrypt.compare(
    //   password,
    //   alreadyExists.password
    // );
    // console.log("&&&&&&&&&bcryptPassword", bcryptPassword && result );

    // if (bcryptPassword && result) {
    //   const jwtToken =  jwt.sign(
    //     { id: result.id },
    //     "theimaginarydragontheabhinavprajapati", { expiresIn: '10s' }
    //   );
    //   // console.log("===========-=-==-=", process.env.JWT_EXPIRES_IN);

    //   return res.status(200).json({
    //     status: true,
    //     message: "Login successfully",
    //     data: result,
    //     token: jwtToken
    //   });
    // }

    // console.log("--------------result.length > 0", result);
    if (result) {
      bcrypt.compare(password, alreadyExists.password, (err, descPass) => {
        if (descPass) {
          const jwtToken = jwt.sign(
            { id: result.id },
            "theimaginarydragontheabhinavprajapati",
            { expiresIn: "10s" }
          );
          // const tokens =
          //    req.headers["x-access-token"];
          // console.log("^^^^^^^^tokenstokens", tokens, descPass);

          return res.status(200).json({
            status: true,
            message: "Login successfully",
            data: result,
            token: jwtToken,
          });
        }
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Invalid Credentials",
      });
    }

    // console.log("=-=-=-=(((((((((result", result);

    // return res.status(200).json({
    //   status: false,
    //   message: "Something went wrong...",
    // });
    // if (jwtToken) {
    //   return res
    //     .status(200)
    //     .json({ message: "get the jwt successfully ", token: jwtToken });
    // }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error occurs, Please try again",
      data: error,
    });
  }
};

exports.allSignedUser = async (req, res, next) => {
  // const { email, password } = res.body;

  try {
    const allSignedUser = await User.findAll();
    // res.status(201).json({ allData });
    // console.log("allSignedUser", allSignedUser);

    res.status(200).json({
      status: true,
      message: "Get All Menus Successfully",
      data: allSignedUser,
    });
  } catch (error) {
    console.log(error);
    console.log(error.message);
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", data: error });
  }
};
