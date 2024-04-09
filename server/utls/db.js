import mongoose from "mongoose";
import 'dotenv/config'

const uri = 'mongodb+srv://mohitsinghasm:Itachi123@cluster0.6ql6ece.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// const uri = process.env.MONGO_URI
// console.log(uri)


const connectDb = async ()=>{
    try {
        await mongoose.connect(uri)
        console.log('connection successfull to the database')
    } catch (error) {
        console.error('database connection failed', error)
        throw error
        // process.exit(0)
    }
}


export default connectDb;