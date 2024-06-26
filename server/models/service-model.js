import {Schema, model} from 'mongoose'

const serviceModel = new Schema({
    service: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
})

const Service = new model('Service', serviceModel)
export default Service;