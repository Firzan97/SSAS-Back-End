module.exports = (sequelize, DataTypes) => {
    const Staffs = sequelize.define('Staffs', {
        speciality: DataTypes.STRING,
    }, {
        indexes: [
            // Create a unique index on email
            {
                unique: true,
                fields: ['user_id']
            },
        ]
    });

    Staffs.associate = function(models) {
        Staffs.belongsTo(models.Users, { foreignKey: 'user_id' });
    }

    return Staffs;
}