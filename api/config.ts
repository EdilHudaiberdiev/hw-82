import path from 'path';

const rooPath = __dirname;

const config = {
    rooPath,
    publicPath: path.join(rooPath, 'public'),
    mongoose: {
        db: 'mongodb://localhost/8001'
    }
};

export default config;