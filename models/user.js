module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.STRING,
        role: DataTypes.STRING,
        fullname: DataTypes.STRING,
        age: DataTypes.INTEGER,
        phonenumber: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    Users.associate = function(models) {
        Users.hasMany(models.Appointments, {
            foreignKey: 'patientId'
        });
        Users.hasMany(models.Appointments, {
            foreignKey: 'doctorId'
        });
        Users.hasOne(models.Doctors, { foreignKey: 'user_id' });
        Users.hasOne(models.Admins, { foreignKey: 'user_id' });
        Users.hasOne(models.Patients, { foreignKey: 'user_id' });


    }

    return Users;
}