module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define('Patients', {
        ic: DataTypes.STRING,
        desease: DataTypes.STRING,
    });

    Patients.associate = function(models) {
        Patients.belongsTo(models.Users);
    }

    return Patients;
}