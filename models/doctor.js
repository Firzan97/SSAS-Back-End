module.exports = (sequelize, DataTypes) => {
    const Doctors = sequelize.define('Doctors', {
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

    Doctors.associate = function(models) {
        Doctors.belongsTo(models.Users, {
            foreignKey: 'user_id',
            foreignKeyConstraint: true,
            onDelete: 'cascade'
        });
    }

    return Doctors;
}