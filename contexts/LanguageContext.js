import React, { createContext } from 'react'
export const LanguageContext = createContext();

class LanuageContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {language: "english"}
    }
    changeLanguage = (e) =>{
        this.setState({language : e.target.value});
    }
    render(){
        return (
            <LanguageContext.Provider value={{...this.state, changeLanguage : this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}
export default LanuageContextProvider;

//creating own HOC
export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
      {value => <Component languageContext = {value} {...props}/>}
    </LanguageContext.Consumer>
    )