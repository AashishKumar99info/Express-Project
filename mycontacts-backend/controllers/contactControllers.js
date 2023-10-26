//@desc Get All Contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get All Contacts" });
}

//@desc Create New Contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("The Request body is : " ,req.body)
    res.status(200).json({ message: "Create Contact" });
}

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({ message:`update contact for ${req.params.id}`});
}

//@desc put Contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });
}

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
}

module.exports = { 
    getContacts, 
    createContact,
    getContact, 
    updateContact, 
    deleteContact 
};