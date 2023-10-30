import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import { Footer } from "./ui/Footer/Footer"
import styles from './App.module.css';
import { AppProvider } from "./ui/MyContext";

function App() { 

    return (
        <AppProvider>
            <div className={styles.App}>
                <Header />
                <Home />
                <Footer />               
            </div>
        </AppProvider>
    )
}

export default App;
