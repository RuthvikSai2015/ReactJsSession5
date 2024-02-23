import {createContext,useContext} from 'react';
export const UserContext = createContext();
export default function ReactContextExample() {
  return (
    <UserContext.Provider value="context test">
        <User/>
    </UserContext.Provider>
  )
}

function User(){
    const value = useContext(UserContext);

    return (
        <h1>{value}</h1>
    )
    // return (
    //     <UserContext.Consumer>
    //         {
    //             value => <h1>{value}</h1>
    //         }
    //     </UserContext.Consumer>
    // )

}