module.exports = (sequelize, DataTypes) => {
    const Patients = sequelize.define('Patients', {
        ic: DataTypes.STRING,
        phoneNum: DataTypes.STRING,
    }, {
        indexes: [
            // Create a unique index on email
            {
                unique: true,
                fields: ['user_id']
            },
        ]
    });

    Patients.associate = function(models) {
        Patients.belongsTo(models.Users, { foreignKey: 'user_id' });
    }

    return Patients;
}