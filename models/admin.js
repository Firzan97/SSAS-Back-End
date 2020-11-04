module.exports = (sequelize, DataTypes) => {
    const Admins = sequelize.define('Admins', {
        username: DataTypes.STRING,
    });

    Admins.associate = function(models) {
        Admins.belongsTo(models.Users);
    }

    return Admins;
}