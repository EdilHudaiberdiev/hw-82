import mongoose from 'mongoose';
import config from './config';
import Artist from "./models/Artist";
import Album from "./models/Album";
import Track from "./models/Track";


const dropCollection = async (
    db: mongoose.Connection,
    collectionName: string,
) => {
    try {
        await db.dropCollection(collectionName);
    } catch (e) {
        console.log(`Collection ${collectionName} was missing, skipping drop...`);
    }
};

const run = async () => {
    await mongoose.connect(config.mongoose.db);
    const db = mongoose.connection;

    const collections = ['artists', 'albums', 'tracks'];

    for (const collectionName of collections) {
        await dropCollection(db, collectionName);
    }

    const [Eminem, E50Cent] = await Artist.create(
        {
            title: "Eminem",
            image: 'fixtures/artist1_pic.jpeg'
        },
        {
            title: "E50 Cent",
            image: 'fixtures/artist2_pic.jpeg'
        },
    );

    const [EminemAlbum1, EminemAlbum2, E50CentAlbum1, E50CentAlbum2] = await Album.create(
        {
            title: "The Marshall Mathers LP",
            artist: Eminem._id,
            release: 2000,
            image: "fixtures/artist1_album1_pic.jpeg"
        }, {
            title: "Recovery",
            artist: Eminem._id,
            release: 2010,
            image: "fixtures/artist1_album2_pic.jpeg"
        },
        {
            title: "Get Rich or Die Tryin",
            artist: E50Cent._id,
            release: 2003,
            image: "fixtures/artist2_album1_pic.jpeg"
        }, {
            title: "The Massacre",
            artist: E50Cent._id,
            release: 2005,
            image: "fixtures/artist2_album2_pic.jpeg"
        },
    );

    await Track.create(
        {
            title: "Stan",
            album: EminemAlbum1._id,
            duration: "6:44",
            number: 1
        },
        {
            title: "The Real Slim Shady",
            album: EminemAlbum1._id,
            duration: "4:44",
            number: 2
        },
        {
            title: "The Way I Am",
            album: EminemAlbum1._id,
            duration: "4:51",
            number: 3
        },
        {
            title: "Kill You",
            album: EminemAlbum1._id,
            duration: "4:36",
            number: 4
        },
        {
            title: "Criminal",
            album: EminemAlbum1._id,
            duration: "4:55",
            number: 5
        },

        {
            title: "Not Afraid",
            album: EminemAlbum2._id,
            duration: "4:04",
            number: 1
        },
        {
            title: "Love the Way You Lie",
            album: EminemAlbum2._id,
            duration: "3:44",
            number: 2
        },
        {
            title: "No Love",
            album: EminemAlbum2._id,
            duration: "3:51",
            number: 3
        },
        {
            title: "Space Bound",
            album: EminemAlbum2._id,
            duration: "4:55",
            number: 4
        },
        {
            title: "Cinderella Man",
            album: EminemAlbum2._id,
            duration: "2:55",
            number: 5
        },

        {
            title: "What Up Gangsta",
            album: E50CentAlbum1._id,
            duration: "2:59",
            number: 1
        },
        {
            title: "In Da Club",
            album: E50CentAlbum1._id,
            duration: "3:13",
            number: 2
        },
        {
            title: "Many Men (Wish Death)",
            album: E50CentAlbum1._id,
            duration: "4:17",
            number: 3
        },
        {
            title: "Patiently Waiting (feat. Eminem)",
            album: E50CentAlbum1._id,
            duration: "4:48",
            number: 4
        },
        {
            title: "21 Questions (feat. Nate Dogg)",
            album: E50CentAlbum1._id,
            duration: "3:44",
            number: 5
        },

        {
            title: "Intro",
            album: E50CentAlbum2._id,
            duration: "0:41",
            number: 1
        },
        {
            title: "In My Hood",
            album: E50CentAlbum2._id,
            duration: "3:51",
            number: 2
        },
        {
            title: "This Is 50",
            album: E50CentAlbum2._id,
            duration: "3:04",
            number: 3
        },
        {
            title: "I'm Supposed to Die Tonight",
            album: E50CentAlbum2._id,
            duration: "3:51",
            number: 4
        },
        {
            title: "Piggy Bank",
            album: E50CentAlbum2._id,
            duration: "4:15",
            number: 5
        }
    );

    await db.close();
};

void run();



