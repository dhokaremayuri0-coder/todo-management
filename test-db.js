
import sequelize from "./db.js";
import Task from "./task.js";

// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log("PostgreSQL connection successful!");
//     } catch (error) {
//         console.error("Unable to connect to PostgreSQL:");
//         console.error(error.message);
//     } finally {
//         await sequelize.close();
//     }
// }

async function createTable() {
    try {
        await sequelize.authenticate();

        await Task.sync();

        console.log("Tasks table created successfully!");
    } catch (error) {
        console.error("Error creating tasks table:");
        console.error(error.message);
    } finally {
        await sequelize.close();
    }
}

createTable();
// testConnection();

