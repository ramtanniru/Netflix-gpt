import { createContext } from "react";

const UserContext = createContext({
    users: {
        ram : {
            username: "ram",
            email: "ramtanniru2@gmail.com",
            password: "1234"
        },
    }
})

export default UserContext;