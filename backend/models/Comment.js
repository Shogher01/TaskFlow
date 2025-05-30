const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    ticketId: { type: Schema.Types.ObjectId, ref: 'Ticket', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String, required: true },
    attachment: {
        type: String,
        required: false
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
