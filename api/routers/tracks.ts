import {Router} from 'express';
import mongoose, {mongo} from "mongoose";
import Track from "../models/Track";

const tracksRouter = Router();

tracksRouter.post('/', async (req, res, next) => {
    try {
        const trackData = {
            title: req.body.title,
            album: req.body.album,
            duration: req.body.duration,
        };

        const artist = new Track(trackData);
        await artist.save();

        res.send(artist);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(422).send(e);
        }

        if (e instanceof mongo.MongoServerError && e.code === 11000) {
            return res.status(422).send({message: 'Album is not unique'});
        }

        next(e);
    }
});

tracksRouter.get('/', async (req, res, next) => {
    try {
        const track = await Track.find();
        return res.send(track);
    } catch (e) {
        next(e);
    }
});



export default tracksRouter