import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://bitu:9934092985@inshorts.vpyat.mongodb.net/inshorts?retryWrites=true&w=majority`
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;