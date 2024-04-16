import mongoose, {mongo} from "mongoose";

async function connectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection
}

export default connectaNaDatabase


// mongodb+srv://admin:<password>@cluster0.r56ld0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
