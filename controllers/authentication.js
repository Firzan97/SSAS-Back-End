var Model = require("../models")
let errors = [];
const bcrypt = require('bcryptjs');
const user = require("../models/user");
var jwt = require('jsonwebtoken');

async function hashPassword(password) {

    return hash;
}
const users = {

    register: async(request, response) => {
        let users = [];
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(request.body.password, salt)
        try {
            users = await Model.Users.create({
                username: request.body.username,
                email: request.body.email,
                role: "Patient",
                fullname: request.body.fullname,
                phonenumber: request.body.phonenumber,
                age: request.body.age,
                password: hash
            });
            await Model.Patients.create({
                user_id: users.id,
            });
            let token = jwt.sign({ userId: users.id }, 'secretkey');
            return response.status(200).json({
                title: "Login Success",
                token: token,
                user: users

            })
        } catch (error) {
            console.log(error);
        }
        response.json(users);

    },
    login: async(request, response) => {
        var users = [];
        try {
            users = await Model.Users.findAll({
                where: {
                    email: request.body.email,
                }
            });
            if (users.length == 0) {

                return response.status(400).json({
                    title: "error",
                    error: "wrong email"
                })
            } else {

                for (var i = 0; i < users.length; i++) {
                    const isSame = await bcrypt.compare(request.body.password, users[i].password)

                    if (isSame == true) {
                        let token = jwt.sign({ userId: users.id }, 'secretkey');
                        return response.status(200).json({
                            title: "Login Success",
                            token: token,
                            user: users[i]
                        })
                    }
                }


            }
        } catch (error) {
            console.log(error);
        }


    }

}

module.exports = users