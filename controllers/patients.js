var Model = require("../models")
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const patients = {

    getAllPatients: async(request, response) => {
        let patients = [];
        try {
            patients = await Model.Patients.findAll({
                include: Model.Users

            });
        } catch (error) {
            console.log(error);
        }
        response.json(patients);
    },
    updatePatient: async(request, response) => {
        let users = [];
        let patients;
        try {
            patients = await Model.Patients.update({
                ic: request.body.ic,
            }, {
                where: {
                    id: request.params.id
                }
            });
            patients = await Model.Patients.findOne({
                where: {
                    id: request.params.id
                }
            });
            var pass;
            if (request.body.password == null) {
                pass = patients.password
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
                    id: patients.user_id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },

}

module.exports = patients