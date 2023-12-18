const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const seedWithDummyData = require('../seeder');


dotenv.config();
//connect to DB
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error.message);
    }
}
connectToDatabase();


app.listen(3000, () => console.log('Server running......'));
