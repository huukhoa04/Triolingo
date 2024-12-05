const bookmarkSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    vocabId: {
        type: Number,
        required: true,
    },
    wordId: {
        type: Number,
        required: true,
    },
})
bookmarkSchema.index({ username: 1, vocabId: 1, wordId: 1 }, { unique: true });
const Bookmark = model('Bookmark', bookmarkSchema);
export default Bookmark;