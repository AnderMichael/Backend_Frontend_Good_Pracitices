const express = require("express");
const router = express.Router();
const {
  getSubjectController,
  getSubjectByIdController,
  postSubjectController,
  putSubjectController,
  deleteSubjectController,
} = require("../controllers/subjectController");

/**
 * @swagger
 * /subjects:
 *   get:
 *     summary: Get a list of subjects
 *     responses:
 *       200:
 *         description: A single list of subjects
 * 
 *       404:
 *         description: Subject not found
 */

/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Get a subject by ID
 *     description: Retrieve a subject by its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Subject ID
 *     responses:
 *       '200':
 *         description: A single subject object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       '404':
 *         description: Subject not found
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Create a new subject
 *     description: Create a new subject with the provided data, id is optional(ensure that there are not repeated id's).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               credits:
 *                 type: integer
 *               professor:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Subject created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /subjects/{id}:
 *   put:
 *     summary: Update a subject by ID
 *     description: Update a subject with the provided data by its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Subject ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               credits:
 *                 type: integer
 *               professor:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Subject updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 credits:
 *                   type: integer
 *                 professor:
 *                   type: string
 *       '400':
 *         description: Missing require fields
 *       '404':
 *         description: Subject not found

 */

/**
 * @swagger
 * /subjects/{id}:
 *   delete:
 *     summary: Delete a subject by ID
 *     description: Delete a subject by its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Subject ID
 *     responses:
 *       '204':
 *         description: Subject deleted successfully
 *       '404':
 *         description: Subject not found
 *
 */

router.get("/subjects", getSubjectController);
router.get(`/subjects/:id`, getSubjectByIdController);
router.post("/subjects", postSubjectController);
router.delete("/subjects/:id", deleteSubjectController);
router.put("/subjects/:id", putSubjectController);

module.exports = router;
