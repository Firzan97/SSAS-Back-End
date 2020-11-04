var Model = require("../models")

const appointments = {
    getAllAppointment: async(request, response) => {
        let appointments = [];
        try {
            appointments = await Model.Appointments.findAll();
        } catch (error) {
            console.log(error);
        }
        response.json(appointments);
    },
    getAppointment: async(request, response) => {
        let appointments = [];
        try {
            appointments = await Model.Appointments.findAll({
                where: {
                    id: request.params.id
                }
            });
        } catch (error) {
            console.log(error);
        }
        response.json(appointments);
    },
    updateService: async(request, response) => {
        let appointments = [];
        try {
            appointments = await Model.Appointments.update({
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
        response.json(appointments);
    },
    createAppointment: async(request, response) => {
        let appointments = [];
        try {
            appointments = await Model.Appointments.create({
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
        response.json(appointments);
    },
    deleteAppointment: async(req, res) => {
        console.log(req.params.id)

        await Model.appointments.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(204).json({
            status: "Success"
        })
    },
}

module.exports = appointments