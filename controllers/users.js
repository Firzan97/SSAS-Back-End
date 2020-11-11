var Model = require("../models")
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const users = {
    getAllUser: async(request, response) => {
        let users = [];
        try {
            users = await Model.Users.findAll({
                where: {
                    role: request.params.role
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },
    getUser: async(request, response) => {
        let users = [];
        try {
            users = await Model.Users.findOne({
                where: {
                    role: request.params.role,
                    id: request.params.id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },
    updateUser: async(request, response) => {
        let users = [];
        try {
            users = await Model.Users.update({
                name: request.body.name,
                age: request.body.age
            }, {
                where: {
                    role: request.params.role,
                    id: request.params.id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },
    createUser: async(request, response) => {
        let users = [];
        try {
            users = await Model.Users.create({
                username: request.body.username,
                email: request.body.email,
                role: request.params.role,
                fullname: request.body.fullname,
                phonenumber: request.body.phonenumber,
                age: request.body.age,
                password: bcrypt.hashSync(request.body.password, 8)
            });
            if (request.params.role == "staff") {

                await Model.Staffs.create({
                    speciality: request.body.speciality,
                    user_id: users.id,
                });

            } else {
                await Model.Admins.create({
                    user_id: users.id,
                });
            }

        } catch (error) {
            console.log(error.name)
            if (error.name == "SequelizeUniqueConstraintError") {
                return response.status(400).json({
                    name: error.name,
                    message: error.message

                })
            }
        }
        response.json(users);
    },
    deleteUser: async(req, res) => {
        console.log(req.params.id)

        await Model.Users.destroy({
            where: {
                role: request.params.role,
                id: req.params.id
            }
        })
        res.status(204).json({
            status: "Success"
        })
    },
    getStaff: async(request, response) => {
        let users = [];
        try {
            users = await Model.Staff.findAll({
                where: {
                    speciality: request.params.speciality
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(request.params.speciality);
    },
    getUserAppointment: async(request, response) => {
        let users, apppointment = [];
        try {
            users = await Model.Patients.findOne({
                where: {
                    id: request.params.id
                }
            });
            appointment = await Model.Appointments.findAll({
                where: {
                    UserId: users.id
                }
            });


        } catch (error) {
            console.log(error);
        }
        response.json(appointment);
    },

}

module.exports = users