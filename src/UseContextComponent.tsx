import { useContext, useState } from 'react';
import UserContext,{UserState} from './store';

function ConsumerComponent (){
    const user = useContext<UserState>(UserContext);

    return(
        <div>
            <div>First:{user.first}</div>
            <div>Last:{user.last}</div>
        </div>
    )

}

 function  UseContextComponent(){
    const [user, userSet] = useState<UserState>({
        first:"Aslam",
        last:"Mohamed"
    });
    return(
        <UserContext.Provider value={user}>
            <ConsumerComponent/>
            <button
            onClick={() => userSet({
                first:"Mohamed",
                last:"Aslam",
            })}
            >Change Context</button>
        </UserContext.Provider>
    )
 }
export default UseContextComponent;