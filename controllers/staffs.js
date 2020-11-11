var Model = require("../models")
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

const users = {

    getStaff: async(request, response) => {
        let users = [];
        try {
            users = await Model.Staffs.findAll({
                where: {
                    speciality: request.params.speciality
                },
                include: Model.Users
            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },
    getAllStaff: async(request, response) => {
        let users = [];
        try {
            users = await Model.Staffs.findAll({
                include: Model.Users

            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },


}

module.exports = users