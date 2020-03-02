import React, {useContext} from 'react';
import '../../index.css';

const MyContext = React.createContext();
const SecondContext = React.createContext();

let UseCon = () => {
    return (
        <>
            <MyContext.Provider value="UseContext">
                <SecondContext.Provider value="Test">
                    <Child/>
                    <ChildHook/>
                </SecondContext.Provider>
            </MyContext.Provider>
        </>
    )
};

const Child = () => {
    return (
        <MyContext.Consumer>
            {( value ) => {
                return (
                    <p> {value} </p>
                )
            }}
        </MyContext.Consumer>
    )
};

const ChildHook = () => {
    const value = useContext(MyContext);
    const value2 = useContext(SecondContext);
    return (
        <>
            <b> {value} </b>
            <b> {value2} </b>
        </>
    )
};

export default UseCon




