import React,{ Component, createContext } from 'react'

export const ThemeContext = createContext();

export default class ThemeProvider extends Component{
    state = {theme: true,
             light: { textColor: '#555' , ui: "#ddd" , bg: "#333" },
             dark: { textColor: '#ddd' , ui: "#333" , bg: "#555"},
            };

            themeToggle = ()=> {
                this.setState({
                    theme: !this.state.theme
                })
            }

            render(){
                return(
                    <ThemeContext.Provider value={{ ...this.state, themeToggle: this.themeToggle }}>
                        {this.props.children}
                    </ThemeContext.Provider>
                )
            }
}