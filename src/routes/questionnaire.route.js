const express = require("express");
const router = express.Router();
const qController = require("../controllers/questionnaire.controller");
const auth = require("../middleware/auth.middleware");
const awaitHandlerFactory = require("../middleware/awaitHandlerFactory.middleware");

const {
createFoodSchema,
} = require("../middleware/validators/questionValidator.middleware");

//Gets
router.get("/food", awaitHandlerFactory(qController.getAllFood));
router.get("/home", awaitHandlerFactory(qController.getAllHome));
router.get("/services", awaitHandlerFactory(qController.getAllServices));
router.get("/shopping", awaitHandlerFactory(qController.getAllShopping));
router.get("/transport", awaitHandlerFactory(qController.getAllTransport));

//Posts
router.post("/food", createFoodSchema, awaitHandlerFactory(qController.insertFood));
router.post("/home", awaitHandlerFactory(qController.insertHome));
router.post("/services", awaitHandlerFactory(qController.insertServices));
router.post("/shopping", awaitHandlerFactory(qController.insertShopping));
router.post("/transport", awaitHandlerFactory(qController.insertTransport));

//Puts
router.put("/food/:id", createFoodSchema, awaitHandlerFactory(qController.updateFood));
router.put("/home/:id", awaitHandlerFactory(qController.updateHome));
router.put("/services/:id", awaitHandlerFactory(qController.updateServices));
router.put("/shopping/:id", awaitHandlerFactory(qController.updateShopping));
router.put("/transport/:id", awaitHandlerFactory(qController.updateTransport));

module.exports = router;
