module.exports = (sequelize, DataTypes) => {
    const Admins = sequelize.define('Admins', {}, {
        indexes: [
            // Create a unique index on email
            {
                unique: true,
                fields: ['user_id']
            },
        ]
    });

    Admins.associate = function(models) {
        Admins.belongsTo(models.Users, { foreignKey: 'user_id' });
    }

    return Admins;
}