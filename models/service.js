module.exports = (sequelize, DataTypes) => {
    const Services = sequelize.define('Services', {
        type: DataTypes.STRING,
        cost: DataTypes.FLOAT,
    });
    return Services;
}