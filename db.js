
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "todo_management",
    "postgres",
    "mayuri",
    {
        host: "localhost",
        port: 5432,
        dialect: "postgres",
        logging: false
    }
);

export default sequelize;
