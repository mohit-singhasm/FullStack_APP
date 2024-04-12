import Service from "../models/service-model.js";

// *-------------------------
// Get Service logic
// *-------------------------

const service = async (req, res) => {
  try {
    const servicesAll = await Service.find({});
    // console.log(servicesAll)
    if (!servicesAll) {
      res.status(404).json({ msg: "No document is found" });
      return;
    }
    return res.status(200).json({ servicesAll });
  } catch (error) {
    console.log(`service ${error}`);
  }
};

// *-------------------------
// Edit Service logic
// *-------------------------

const updateSingleService = async (req, res) => {
  const id = req.params.id;
  const updateService = req.body;

  try {
    const updatedData = await Service.updateOne(
      { _id: id },
      { $set: updateService }
    );

    if (!updatedData) {
      return res.status(404).json({ message: "No Service Found" });
    }

    return res.status(201).json({ updatedData });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------
// Getting Single Service logic
// *-------------------------

const getSingleService = async (req, res) => {
  const id = req.params.id;

  try {
    const service = await Service.findOne({ _id: id }, { password: 0 });
    if (!service) {
      return res.status(404).json({ message: "No Service Found" });
    }

    return res.status(200).json({ service });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------
// Delete Service logic
// *-------------------------

const deleteSingleService = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedData = await Service.deleteOne({ _id: id });

    if (!deletedData) {
      return res.status(404).json({ message: "No Service Found" });
    }

    return res.status(200).json({ message: "Service is deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export { service, updateSingleService, deleteSingleService, getSingleService };
