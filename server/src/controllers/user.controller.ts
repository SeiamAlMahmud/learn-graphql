import User from '../models/user.model.js'

const getAlUsers = async () => {
    const users = await User.find();
    return users;
}

export { getAlUsers };