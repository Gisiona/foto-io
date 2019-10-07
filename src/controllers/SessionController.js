
const User = require('../models/User');

module.exports = {

    async store(req, res){
        const email = req.body.email;
        const nome = req.body.nome;

        let user = await User.findOne({email});

        console.log(user);
        
        if(!user){
            user = User.create({email, nome});
        }

        console.log(user);

        return res.status(201).send(user);
    },

    async show(req, res){
        const users = await User.find();
        console.log(users);
        
        return res.json(users);
    }
};