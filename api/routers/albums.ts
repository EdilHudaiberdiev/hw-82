import {Router} from 'express';
import mongoose, {Types} from "mongoose";
import {imagesUpload} from "../multer";
import Album from "../models/Album";

const albumsRouter = Router();

albumsRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
    try {

        const albumData = {
            title: req.body.title,
            artist: req.body.artist,
            release: req.body.release,
            image: req.file ? req.file.filename : null,
        };

        const album = new Album(albumData);
        await album.save();

        res.send(album);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(422).send(e);
        }

        next(e);
    }
});

albumsRouter.get('/', async (req, res, next) => {
    try {
        let album;

        if (req.query.artist) {
            album =  await Album.find({artist: req.query.artist}).populate('artist').sort({release: -1});
        } else {
            album = await Album.find().populate('artist', 'title').sort({release: -1});
        }

        return res.send(album);
    } catch (e) {
        next(e);
    }
});

albumsRouter.get('/:id', async (req, res, next) => {
    try {
        let _id: Types.ObjectId;
        try {
            _id = new Types.ObjectId(req.params.id);
        } catch {
            return res.status(404).send({error: 'Wrong ObjectId!'});
        }

        const album = await Album.findById(_id);

        if (!album) {
            return res.status(404).send({error: 'Not found!'});
        }

        res.send(album);
    } catch (e) {
        next(e);
    }
});


export default albumsRouter