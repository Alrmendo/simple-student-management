const getHome = (req, res) => {
    res.render('home');
  };
  
  const getAddStudent = (req, res) => {
    res.render('add-student');
  };
  
  const getStudentList = (req, res) => {
    res.render('student-list');
  };
  
  const getSearchStudent = (req, res) => {
    res.render('search-student');
  };
  
  module.exports = {
    getHome,
    getAddStudent,
    getStudentList,
    getSearchStudent,
  };
  