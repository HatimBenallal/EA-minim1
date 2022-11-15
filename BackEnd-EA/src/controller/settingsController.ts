import Settings from '../model/Settings';
import User from '../model/User';
import { Request, Response } from 'express';

const create = async (req: Request, res: Response) => {

	const user = await User.findOne({name: req.body.user});
	// const participants = [req.body.participants];
	const darkMode = req.body.darkMode;
	const lenguage = req.body.lenguage;
	const letterSize = req.body.letterSize;
	const newSettings = new Settings({ user, darkMode, lenguage, letterSize});

	await newSettings.save();
	// creator?.route.push(newRoute._id);
	user?.save();
	 await newSettings.save();
	res.status(200).json( {message: "Settings created", newSettings} );
};

const getSetting = async (req: Request, res: Response) => {
	const setting = await Settings.findById(req.params.id).populate('user')
	res.json(setting).status(200)

};

const getAll = async (req: Request, res: Response) => {
	const settings = await Settings.find().populate('user');
	res.json(settings);
};

const deleteOne = async (req: Request, res: Response) => {
	const setting = await Settings.findByIdAndDelete(req.params.id);
	if(!setting){
		return res.status(404).send('No setting found')
	}
	return res.status(200).json(setting);
}

const update = async (req: Request, res:Response) => {
    const user = await User.findOne({name: req.body.user});
    if(!user){
		return res.status(404).send('No user found')
	};
    const darkMode = req.body.darkMode;
    const lenguage = req.body.lenguage;
    const letterSize = req.body.letterSize;

    const setting = await Settings.findByIdAndUpdate(req.params.id, {user,darkMode,lenguage,letterSize}, {new:true});
    return res.json({message: "Setting updated", setting}).status(200);
}

export default{
	create,
	getSetting,
	getAll,
	deleteOne,
	update

};
