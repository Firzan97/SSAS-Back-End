var Model = require("../models")
let errors = [];
const bcrypt = require('bcryptjs');
const user = require("../models/user");
var jwt = require('jsonwebtoken');
const users = {
    register: async(request, response) => {
        let users = [];
        var salt = bcrypt.genSaltSync(10);
        try {
            users = await Model.Users.create({
                username: request.body.username,
                email: request.body.email,
                role: "patient",
                fullname: request.body.fullname,
                phonenumber: request.body.phonenumber,
                age: request.body.age,
                password: bcrypt.hashSync(request.body.password, 8)
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
            users = await Model.Users.findOne({
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
                let token = jwt.sign({ userId: users.id }, 'secretkey');
                return response.status(200).json({
                    title: "Login Success",
                    token: token,
                    user: users
                })
            }
        } catch (error) {
            console.log(error);
        }


    }

}

module.exports = users