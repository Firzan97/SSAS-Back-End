module.exports = (sequelize, DataTypes) => {
    const Staffs = sequelize.define('Staffs', {
        speciality: DataTypes.STRING,
        age: DataTypes.STRING,
    });

    Staffs.associate = function(models) {
        Staffs.belongsTo(models.Users);
    }

    return Staffs;
}