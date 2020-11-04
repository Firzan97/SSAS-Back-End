module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        role: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    Users.associate = function(models) {
        Users.hasMany(models.Appointments);
        Users.hasOne(models.Staffs);
        Users.hasOne(models.Admins);
        Users.hasOne(models.Patients);


    }

    return Users;
}