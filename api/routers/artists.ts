import {Router} from 'express';
import mongoose, {mongo} from "mongoose";
import {imagesUpload} from "../multer";
import Artist from "../models/Artist";

const artistsRouter = Router();

artistsRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
    try {
        const artistData = {
            title: req.body.title,
            image: req.file ? req.file.filename : null,
            description: req.body.description,
        };

        const artist = new Artist(artistData);
        await artist.save();

        res.send(artist);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(422).send(e);
        }

        if (e instanceof mongo.MongoServerError && e.code === 11000) {
            return res.status(422).send({message: 'Title is not unique'});
        }

        next(e);
    }
});

artistsRouter.get('/', async (req, res, next) => {
    try {
        const artist = await Artist.find();
        return res.send(artist);
    } catch (e) {
        next(e);
    }
});

export default artistsRouter