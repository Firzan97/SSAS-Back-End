module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return Users;
}