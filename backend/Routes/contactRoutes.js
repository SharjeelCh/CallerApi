const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContactbyId,
  deleteAll,
  deleteContactbyId,
  updateContact,
} = require("../Controllers/routerController");
const validateUserToken = require("../validateUserToken");

router.use(validateUserToken);

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContactbyId);

router.route("/").delete(deleteAll);

router.route("/:id").delete(deleteContactbyId);

router.route("/:id").put(updateContact);

module.exports = router;
