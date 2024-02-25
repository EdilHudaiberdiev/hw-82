import {Router} from 'express';
import mongoose from "mongoose";
import TrackHistory from "../models/TrackHistory";
import User from "../models/User";
import Track from "../models/Track";

const trackHistoryRouter = Router();

trackHistoryRouter.post('/', async (req, res, next) => {

    try {
        const token = req.get('Authorization');

        if (!token) {
            return res.status(401).send({error: "No token present"});
        }

        const user = await User.findOne({token});

        if(!user) {
            return res.status(401).send({error: 'Wrong token'})
        }


        const trackHistoryData = {
            user: user._id,
            track: req.body.track,
            datetime: new Date().toISOString(),
        };

        const trackHistory = new TrackHistory(trackHistoryData);
        await trackHistory.save();

        res.send(trackHistory);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(422).send(e);
        }

        next(e);
    }
});

trackHistoryRouter.get('/', async (req, res, next) => {
    const token = req.get('Authorization');

    try {
        if (!token) {
            return res.status(401).send({error: "No token present"});
        }

        const user = await User.findOne({token});

        if(!user) {
            return res.status(401).send({error: 'Wrong token'})
        }

        let track;

        if (req.query.trackId) {
            track = await Track.findOne({ _id: req.query.trackId });
            if (!track) {
                return res.status(404).send({ error: 'Track not found' });
            }
        }

        let trackHistory;
        if (track) {
            trackHistory = await TrackHistory.find({ user: user._id, track: track._id });
        } else {
            trackHistory = await TrackHistory.find({ user: user._id })
                .populate( {
                    path: 'track',
                    populate: {
                        path: 'album',
                        model: 'Album',
                        populate: {
                            path: 'artist',
                            model: 'Artist',
                        }
                    }
                }).sort({ number: 1 });
        }

        return res.send(trackHistory);

    } catch (e) {
        next(e);
    }
});

export default trackHistoryRouter