import mongoose, {Schema, model, Types} from 'mongoose';
import Album from "./Album";

const TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => {
                const album = await Album.findById(value);
                return Boolean(album);
            },
            message: 'Album does not found',
        }
    },
    duration: {
        type: String,
    },
});

const Track = mongoose.model('Track', TrackSchema);

export default Track;