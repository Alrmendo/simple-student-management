const express = require('express');
const { getHome, getAddStudent, getStudentList, getSearchStudent } = require('../controllers/studentController');

const router = express.Router();

router.get('/', getHome);
router.get('/add-student', getAddStudent);
router.get('/student-list', getStudentList);
router.get('/search-student', getSearchStudent);

module.exports = router;
