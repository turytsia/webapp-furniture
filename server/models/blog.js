import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    author: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
    },
    blogImg: {
        type: String,
        required: true
    }
})
blogSchema.pre('save', function() {
    this.date = Date.now()
})
const blogModel = mongoose.model('blog', blogSchema)

export default blogModel