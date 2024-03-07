const expressAsyncHandler = require("express-async-handler");
const Contact = require("../Modals/contactModals");

const getContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

const getContactbyId = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
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
    user_id: req.user.id,
  });
  res.status(200).json(contact);
});
const deleteAll = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.deleteMany();

  res.status(200).json(contacts);
});
const deleteContactbyId = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) throw new Error("Contact not found");
  res.status(200).json(contact);
});
const updateContact = expressAsyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw console.error("Please fill all the fields");
  }
  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      phone,
    },
    { new: true, runValidators: true }
  );
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContactbyId,
  createContact,
  deleteAll,
  deleteContactbyId,
  updateContact,
};
