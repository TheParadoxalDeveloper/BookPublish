import { connect } from 'mongoose';

export const dbConnection = connect('mongodb://127.0.0.1:27017/BooksPublish').then(() => {
    console.log('connected to database ✔');
}).catch(() => {
    console.log('connection failed ✘');
})
