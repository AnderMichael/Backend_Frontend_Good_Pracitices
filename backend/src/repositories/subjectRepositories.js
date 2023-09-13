const knex = require("knex");
const pgConnection = require("../config/knex-pg");
const db = knex(pgConnection.development);

const getSubjects = async () => {
  try {
    const subjects = await db("subject").select("*");
    const subjectsJson = subjects.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectsJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const getSubjectsById = async (subjectId) => {
  try {
    const subject = await db("subject").select("*").where("id", subjectId);
    const subjectJson = subject.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    return subjectJson;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const postSubject = async (subjectData) => {
  try {
    const newSubject = {
      id: subjectData.id,
      name: subjectData.name,
      description: subjectData.description,
      credits: subjectData.credits,
      professor: subjectData.professor,
    };
    await db("subject").insert(newSubject);
    return newSubject;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const deleteSubject = async (subjectId) => {
  try {
    const confirmation = {};
    await db("subject").where("id", subjectId).del();
    return confirmation;
  } catch (e) {
    console.error(e);
    return e;
  }
};

const putSubject = async (subjectId, subjectData) => {
  try {
    const updatedSubject = {
      id: subjectId,
      name: subjectData.name,
      description: subjectData.description,
      credits: subjectData.credits,
      professor: subjectData.professor,
    };
    await db("subject")
      .where("id", subjectId)
      .update({ ...subjectData });
    return updatedSubject;
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports = {
  getSubjects,
  getSubjectsById,
  postSubject,
  deleteSubject,
  putSubject,
};
