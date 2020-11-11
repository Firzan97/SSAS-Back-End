module.exports = (sequelize, DataTypes) => {
    const Appointments = sequelize.define('Appointments', {
        regTime: DataTypes.STRING,
        regDate: DataTypes.DATE,
        status: DataTypes.STRING,
    });

    Appointments.associate = function(models) {
        Appointments.belongsTo(models.Users);
        Appointments.belongsTo(models.Users);
        Appointments.belongsTo(models.Services)
    }


    return Appointments;
}