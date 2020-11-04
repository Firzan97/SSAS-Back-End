module.exports = (sequelize, DataTypes) => {
    const Services = sequelize.define('Services', {
        type: DataTypes.STRING,
        cost: DataTypes.FLOAT,
    });

    Services.associate = function(models) {
        Services.hasMany(models.Appointments);
    }

    return Services;
}