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
        response.json(services);
    },
    updateService: async(request, response) => {
        let services = [];
        try {
            services = await Model.Services.update({
                type: request.body.type,
                cost: request.body.cost
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
                type: request.body.type,
                cost: request.body.cost
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