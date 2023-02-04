import React from 'react';
//COMPONENTS
import List from "./components/list/list";
//STYLES
import './App.css';
import Content from "./components/content/content";

function App() {

    return (
        <>
            <header className="header">
                <h1 className="header__title">Explorer react app</h1>
            </header>
            <main className="main">
                <List/>
                <Content/>
            </main>
            <footer className="footer">
                <h2 className="footer__title">Some info</h2>
            </footer>
        </>
    );
}

export default App;
