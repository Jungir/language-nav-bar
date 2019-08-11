import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from './PageContent';
import {ThemeProvider, ThemeContext} from './contexts/ThemeContext';
import LanuageContextProvider from "./contexts/LanguageContext";
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanuageContextProvider>
          <PageContent >
            <Navbar/>
            <Form/>
          </PageContent>
        </LanuageContextProvider>
      </ThemeProvider>
    )
  }
}

export default App;
