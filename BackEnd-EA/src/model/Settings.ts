import { Schema, model } from 'mongoose';
import User from './User';

const Settings = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
    darkMode: Boolean,
    lenguage: String,
    letterSize: Number

});

export default model('Settings', Settings);