// const navbarMenu = require("../Model/navBarMenu");
// const { Op } = require("sequelize");


// exports.manageMenu = async (req, res, next) => {
//   const { id, title, parent_Menu, page_slug } =
//       req.body;
    
//   const data = { id, title, parent_Menu} ;
//   if (!title) {
//     return res.status(400).json({error: "Plz enter the title"})
//   }
//   if (!parent_Menu) {
//     return res.status(400).json({error: "Plz select the id"})
//   }
//   try {
//     const result = await navbarMenu.findOne({where :{ id: parent_Menu }})
//     const result_title = result.title
    
    
//     const result_menu = await navbarMenu.create({id, title, parent_Menu, page_slug:result_title});
//       res.status(200).json({ result_menu });
//   } catch (error) {
//     console.log("-----error", error);
//     res.status(500).json({ error: error });
//   }
// };
