import client from "../configs/connectDB";

let getHomePage = (req, res) => {
     //logic
     let data = [];
     client
  .query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return res.status(500).send('Database query failed');
    } else {
      const data = result.rows; // Lấy dữ liệu từ result.rows
      console.log('Query result:', data);

      // Gửi dữ liệu ra giao diện
      return res.render('index.ejs', { dataUser: JSON.stringify(data) });
    }
  });



    //  return res.render('index.ejs',{ dataUser: JSON.stringify(data)});
   
};

module.exports = {
    getHomePage
};
