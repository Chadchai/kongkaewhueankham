const fs = require('fs');

module.exports = {
index: function(req, res){
          
    res.render('index.ejs', {
      title: "Main Page"
      ,message: '',
  });
  },

}