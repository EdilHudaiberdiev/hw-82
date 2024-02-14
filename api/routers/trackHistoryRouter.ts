import {Router} from 'express';
import mongoose from "mongoose";
import TrackHistory from "../models/TrackHistory";
import Album from "../models/Album";
import User from "../models/User";
import Track from "../models/Track";

const trackHistoryRouter = Router();

trackHistoryRouter.post('/', async (req, res, next) => {

    try {
        const trackHistoryData = {
            user: req.body.user,
            track: req.body.track,
            datetime: req.body.datetime,
        };

        const trackHistory = new TrackHistory(trackHistoryData);
        trackHistory.generateToken();
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
    try {
        const trackHistory = await TrackHistory.find();

        let user_id = req.body.user
        let track_id = req.body.track

        if (req.body.user) {
            req.body.user =  await User.findOne({user_id});
        } if (req.body.track) {
            req.body.track=  await Track.findOne({track_id});
        }

        return res.send(trackHistory);
    } catch (e) {
        next(e);
    }
});

export default trackHistoryRouter