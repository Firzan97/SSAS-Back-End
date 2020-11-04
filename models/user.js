module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    Users.associate = function(models) {
        Users.hasMany(models.Appointments);
    }

    return Users;
}