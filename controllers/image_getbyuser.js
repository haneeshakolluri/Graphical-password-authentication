import { commons, login_messages as msg } from "../static/message.js"
import { usertModel as User } from "../models/user.js"

const getByUser = async (req, res, next) => {
    console.log("💡 /api/image called with:", req.query)

    var { username } = req.query
    username = username.toLowerCase()
    let existingUser
    
    if (typeof username === 'undefined') {
        res.status(500).json({
            message: commons.invalid_params,
            format: "username"
        })
        return next()
    }

    try { existingUser = await User.findOne({username: username}) }
    catch(err) {
        console.log(err)
        res.status(401).json({message: "Error occured while fetching from DB"})
        return next()
    }

    if (!existingUser) {
        res.status(401).json({message: msg.user_not_exist})
        return next()
    }
    console.log("SETS DATA:", existingUser.sets)

    res.send(existingUser.sets)
}

export { getByUser }