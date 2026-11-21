import {DataTypes, DATE} from "sequelize";
import sequelize from "./db.js";

//define the task model
const Task = sequelize.define("Task", {
    taskName:{
        type:DataTypes.STRING,
        allowNull:false
    },

    taskDescription:{
        type:DataTypes.TEXT,
        allowNull:true
    },

    taskStatus: {
        type: DataTypes.ENUM(
            "Not Started",
            "On Track",
            "At Risk",
            "Delayed",
            "On Hold"
        ),
        defaultValue: "Not Started",
        allowNull: false
    },

    taskPriority : {
        type: DataTypes.ENUM(
            "Low",
            "Medium",
            "High",
            "Urgent"
        ),
        defaultValue: "Medium",
        allowNull: false
    },

    startDate:{
        type: DataTypes.DATEONLY,
        allowNull:true
    },

    endDate:{
        type: DataTypes.DATEONLY,
        allowNull:true
    },

    taskProgress:{
        type: DataTypes.INTEGER,
        defaultValue:0,
        allowNull:false,
        validate:{
            min:0,
            max:100
        }
    }
}, {
    tableName: "Task",
    timestamps: true
});

export default Task;