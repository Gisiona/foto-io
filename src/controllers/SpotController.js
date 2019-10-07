
const Spot = require('../models/Spot');

module.exports = {

  async store(req, res){
      const { filename } = req.file;
      const {company, techs, price } = req.body;
      const { user_id } = req.headers;

        let spot = await Spot.findOne({thumbnail});
        if(!spot){
            spot = Spot.create({
                user: user_id,
                techs: techs.split(',').map(t => t.trim()),
                price: price,
                thumbnail: filename
            });
        }
        

       console.log(req.body);
        console.log(req.file);

        return res.json({spot});
    }
};