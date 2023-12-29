import mongoose from "mongoose";
const TaskSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enums: ['default', 'personal', 'shopping', 'wishlist','work'],
        default: 'default'
    },
    status: {
        type: String,
        enum: ["todo", "doing", "done"],
        default: "todo"
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Task', TaskSchema)