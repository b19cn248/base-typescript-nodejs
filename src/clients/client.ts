import {DataTypes } from 'sequelize';

import sequelize from "../config/mysql-db-config"

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Serial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Guid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ipAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ComputerName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Subnetmask: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    osVersion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastTimeOnline: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cpu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TotalRam: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    TotalDisk: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Version: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mac: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RegisterTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    DetailDisk: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: 'clients'
});

(async () => {
    await sequelize.sync();
    console.log('Model "Client" đã được đồng bộ hóa với cơ sở dữ liệu.');
})();

export default Client;
