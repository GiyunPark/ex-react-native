import React, { createContext, useState } from 'react';

const UserContext = createContext({ 
    user: {name : ''},
    dispatch: () => {},
});

const UserProvider = () => {
   
    const [name, setName] = useState('Giyun Park');

    const value = {user : {name}, dispatch: setName};
    return <UserContext.Provider value = {value}>  </UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;