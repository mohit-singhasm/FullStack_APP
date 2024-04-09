import Contact from "../models/contactForm-model.js";

// *-----------------
// Contact Form logic
// *-----------------

const contact = async (req, res) => {
  const { username, email, message } = req.body;

  const contactExist = await Contact.findOne({ email });
  console.log(contactExist);

  if (contactExist) {
    console.log("contact hai bhai");
  }

  const contactCreated = await Contact.create({ username, email, message });

  try {
    res
      .status(200)
      .json({ message: contactCreated, id: contactCreated._id.toString() });
  } catch (error) {
    console.log(err);
  }
};

// *-------------------------
// Getting All Contacts logic
// *-------------------------

const getAllContacts = async (req, res) => {
  const allContacts = await Contact.find({});

  try {
    if (!allContacts || allContacts.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }

    return res.status(200).json({ allContacts });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------
// Delete User logic
// *-------------------------

const deleteContact = async (req, res) => {
  try {
    let id = req.params.id;
    const deletedContact = await Contact.deleteOne({ _id: id });
    if (!deletedContact) {
      return res.status(404).json({ message: "No Users Found" });
    }
    // console.log(id, 'User deleted succssfully')
    return res.status(200).json({ message: "Contact is deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export { contact, getAllContacts, deleteContact };
