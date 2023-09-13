const {
  getSubjects,
  getSubjectsById,
  postSubject,
  deleteSubject,
  putSubject,
} = require("../repositories/subjectRepositories");

const getSubjectService = async () => {
  // ! Lógica de Negocio, corregir mayúsculas y minúsculas
  const subjects = await getSubjects();

  return subjects;
};

const getSubjectByIdService = async (subjectId) => {
  // ! Lógica de Negocio, corregir mayúsculas y minúsculas
  const subjects = await getSubjectsById(subjectId);

  return subjects;
};

const postSubjectService = async (subjectData) => {
  // ! Lógica de Negocio, corregir mayúsculas y minúsculas
  const subject = await postSubject(subjectData);

  return subject;
};

const putSubjectService = async (subjectId, subjectData) => {
  // ! Lógica de Negocio, corregir mayúsculas y minúsculas
  const subject = await putSubject(subjectId, subjectData);

  return subject;
};

const deleteSubjectService = async (subjectId) => {
  // ! Lógica de Negocio, corregir mayúsculas y minúsculas
  const subject = await deleteSubject(subjectId);
  
  return subject;
};

module.exports = {
  getSubjectService,
  getSubjectByIdService,
  postSubjectService,
  putSubjectService,
  deleteSubjectService,
};
