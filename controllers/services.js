var Model = require("../models")

const services = {
    getAllService: async(request, response) => {
        let services = [];
        try {
            services = await Model.Services.findAll();
        } catch (error) {
            console.log(error);
        }
        response.json(services);
    },
    getService: async(request, response) => {
        let services = [];
        try {
            services = await Model.Services.findAll({
                where: {
                    id: request.params.id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(users);
    },
    updateService: async(request, response) => {
        let services = [];
        try {
            services = await Model.Services.update({
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
        response.json(services);
    },
    createService: async(request, response) => {
        let services = [];
        try {
            services = await Model.Services.create({
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
        response.json(services);
    },
    deleteService: async(req, res) => {
        console.log(req.params.id)

        await Model.Services.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(204).json({
            status: "Success"
        })
    },
}

module.exports = services