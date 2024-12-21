import User from '../models/user.model.js'

const getAlUsers = async () => {
    try {
        
        const users = await User.find();
        return users;
    } catch (error) {
        
    }
}

export { getAlUsers };