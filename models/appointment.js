module.exports = (sequelize, DataTypes) => {
    const Appointments = sequelize.define('Appointments', {
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return Appointments;
}