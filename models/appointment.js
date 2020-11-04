module.exports = (sequelize, DataTypes) => {
    const Appointments = sequelize.define('Appointments', {
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    Appointments.associate = function(models) {
        Appointments.belongsTo(models.Users);
        Appointments.belongsTo(models.Services)
    }


    return Appointments;
}