var Model = require("../models")

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
            users = await Model.Users.findAll({
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
                name: request.body.name,
                age: request.body.age,
                role: request.body.role
            });
        } catch (error) {
            console.log(error);
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
}

module.exports = users