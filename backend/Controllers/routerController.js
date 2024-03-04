const expressAsyncHandler = require("express-async-handler");
const Contact = require("../Modals/contactModals");

const getContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const getContactbyId = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact by id ${req.params.id}` });
});
const createContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw console.error("Please fill all the fields");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(200).json(contact);
});
const deleteAll = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete contacts" });
});
const deleteContactbyId = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact by id ${req.params.id}` });
});
const updateContact = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContactbyId,
  createContact,
  deleteAll,
  deleteContactbyId,
  updateContact,
};
