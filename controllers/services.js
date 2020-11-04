var Model = require("../models")

const users = {
    getAllUser: async(request, response) => {
        let users = [];
        try {
            users = await Model.Users.findAll();
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
                age: request.body.age
            }, {
                where: {
                    id: request.params.id
                }
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
                id: req.params.id
            }
        })
        res.status(204).json({
            status: "Success"
        })
    },
}

module.exports = users