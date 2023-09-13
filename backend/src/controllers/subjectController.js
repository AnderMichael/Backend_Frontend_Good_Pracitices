const {
  getSubjectService,
  getSubjectByIdService,
  postSubjectService,
  putSubjectService,
  deleteSubjectService,
} = require("../services/subjectService");

const getSubjectController = async (req, res) => {
  //Call service
  try {
    const subjects = await getSubjectService();
    return res.status(200).json({
      success: true,
      message: "Subjects retrieved succesfully",
      data: subjects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error subjects retrieved succesfully",
    });
  }
};

const getSubjectByIdController = async (req, res) => {
  //Call service
  const subjectId = req.params.id;
  try {
    const subject = await getSubjectByIdService(subjectId);
    return res.status(200).json({
      success: true,
      message: "Subject retrieved succesfully",
      data: subject,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error subject retrieved succesfully",
    });
  }
};

const postSubjectController = async (req, res) => {
  try {
    const subjectData = req.body;

    if (
      !subjectData.name ||
      !subjectData.description ||
      !subjectData.credits ||
      !subjectData.professor
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newSubject = await postSubjectService(subjectData);
    return res.status(201).json({
      success: true,
      message: "Subject created successfully",
      data: newSubject,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: "Error creating subject",
      error: error.message,
    });
  }
};

const deleteSubjectController = async (req, res) => {
  try {
    const subjectId = req.params.id;
    await deleteSubjectService(subjectId);
    return res.status(204).send(); // No content, successful delete
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      success: false,
      message: "Error deleting subject",
      error: error.message,
    });
  }
};

const putSubjectController = async (req, res) => {
  try {
    const subjectId = req.params.id;
    const updatedData = req.body;

    if (
      !updatedData.name ||
      !updatedData.description ||
      !updatedData.credits ||
      !updatedData.professor
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const updatedSubject = await putSubjectService(subjectId, updatedData);
    return res.status(200).json({
      success: true,
      message: "Subject updated successfully",
      data: updatedSubject,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      success: false,
      message: "Error updating subject",
      error: error.message,
    });
  }
};

module.exports = {
  getSubjectController,
  getSubjectByIdController,
  postSubjectController,
  putSubjectController,
  deleteSubjectController,
};
