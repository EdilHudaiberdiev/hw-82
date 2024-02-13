import {Router} from 'express';
import mongoose from "mongoose";
import TrackHistory from "../models/TrackHistory";

const trackHistoryRouter = Router();

trackHistoryRouter.post('/', async (req, res, next) => {

    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const refactorDate = `${day}.${month}.${year}`;

    try {
        const trackHistoryData = {
            user: req.body.user,
            track: req.body.track,
            date: refactorDate,
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
    try {
        const trackHistory = await TrackHistory.find();
        return res.send(trackHistory);
    } catch (e) {
        next(e);
    }
});

export default trackHistoryRouter