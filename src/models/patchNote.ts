import { Schema, model, models } from 'mongoose';

const PatchNoteSchema = new Schema({
    patchNumber: {
        type: Number,
        unique: [true, 'Patch is unique'],
        required: [true, 'PatchNumber is required'],
    },
    authorId: {
        type: String,
        unique: [true, 'authorId is unique'],
        required: [true, 'authorId is required'],
    },
    intro: {
        type: String,
        required: [true, 'intro is required'],
    },
    features: {
        type: [String],
    },
    bugFixed: {
        type: [String],
    },
    Adjustments: {
        type: [String],
    },
});

const PatchNote = models.PatchNote || model('PatchNote', PatchNoteSchema);

export default PatchNote;
