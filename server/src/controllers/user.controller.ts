import User from '../models/user.model.js'

const getAlUsers = async () => {
    try {
        
        const users = await User.find();
        return users;
    } catch (error) {
        
    }
}


const getuserById = async (id: string) => {
    try {
        
        const user = await User.findById(id);
        return user;
    } catch (error) {
        
    }
}

export { getAlUsers, getuserById };