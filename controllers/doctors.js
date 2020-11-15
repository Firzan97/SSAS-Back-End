var Model = require("../models")
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const doctors = {

    getDoctor: async(request, response) => {
        let doctors = [];
        try {
            doctors = await Model.Doctors.findAll({
                where: {
                    speciality: request.params.speciality
                },
                include: Model.Users
            });
        } catch (error) {
            console.log(error);
        }
        response.json(doctors);
    },
    getAllDoctor: async(request, response) => {
        let doctors = [];
        try {
            doctors = await Model.Doctors.findAll({
                include: Model.Users

            });
        } catch (error) {
            console.log(error);
        }
        response.json(doctors);
    },
    getSpecificDoctor: async(request, response) => {
        let doctors = [];
        try {
            doctors = await Model.Doctors.findAll({
                where: {
                    speciality: request.params.speciality,
                    id: request.params.id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(doctors);
    },
    updateDoctor: async(request, response) => {
        let users = [];
        let doctors = [];
        try {
            doctors = await Model.Doctors.update({
                speciality: request.body.speciality,
            }, {
                where: {
                    id: request.params.id
                }
            });
            doctors = await Model.Doctors.findOne({
                where: {
                    id: request.params.id
                }
            });

            var pass;
            if (request.body.password == null) {
                pass = doctors.password
            } else {
                pass = bcrypt.hashSync(request.body.password, 8)
            }
            users = await Model.Users.update({
                username: request.body.username,
                email: request.body.email,
                fullname: request.body.fullname,
                phonenumber: request.body.phonenumber,
                age: request.body.age,
                password: pass
            }, {
                where: {
                    id: doctors.user_id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json();
    },
}

module.exports = doctors