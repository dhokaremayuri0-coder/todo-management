import Task from "./task.js";

export class TaskList {
    //get alll task
    async getAll() {
        return await Task.findAll();
    }

    //get by name
    async getByName(name){
        return await Task.findAll({
            where: {
                taskName : name
            }
        });
    }

    //add task
    async add(taskName, taskDescription, taskStatus, taskPriority, startDate, endDate, taskProgress ){
        return await Task.create({
            taskName,
            taskDescription,
            taskStatus,
            taskPriority,
            startDate,
            endDate,
            taskProgress
        });
    }

    //update task
    async update(id, taskName, taskDescription, taskStatus, taskPriority, startDate, endDate, taskProgress){
        const task = await Task.findByPk(id);

        if(!task) return null;

        return await task.update({
            taskName,
            taskDescription,
            taskStatus,
            taskPriority,
            startDate,
            endDate,
            taskProgress
        });
    }

    // partially update a task
    async patch(id,data){
        const task= await Task.findByPk(id);

        if(!task) return null;

        const allowedFields =[
            "taskName",
            "taskDescription",
            "taskStatus",
            "taskPriority",
            "startDate",
            "endDate",
            "taskProgress"
        ];

        const updates = {};

        for(const field of allowedFields){
            for (const field of allowedFields) {
            if (data[field] !== undefined) {
                updates[field] = data[field];
            }
        }

        return await task.update(updates);
        }
    }

    // delete task
    async delete(id){
        const task = await Task.findByPk(id);
        
        if(!task) return null;

        await task.destroy();
        return task;
    }
}