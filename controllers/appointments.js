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
    updateAppointment: async(request, response) => {
        let appointments = [];
        try {
            appointments = await Model.Appointments.update({
                regTime: request.body.regTime,
                regDate: request.body.regDate,
                status: request.body.status,
                UserId: request.body.UserId,
                ServiceId: request.body.UserId,
                doctorId: request.body.doctorId,
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
                regTime: request.body.regTime,
                regDate: request.body.regDate,
                status: "pending",
                UserId: request.body.UserId,
                // ServiceId: 2,
                doctorId: request.body.doctorId,
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