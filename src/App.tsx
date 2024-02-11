import {BrowserRouter} from "react-router-dom";
import {
    Hero, Navbar, StarsCanvas
} from './components'
import WrappedFeedbacks from "./components/Feedbacks.tsx";
import WrappedAbout from "./components/About.tsx";
import WrappedExperience from "./components/Experience.tsx";
import WrappedTech from "./components/Tech.tsx";
import WrappedWorks from "./components/Works.tsx";
import WrappedContact from "./components/Contact.tsx";


function App() {

    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover
              bg-no-repeat bg-center'>
                    <Navbar/>
                    <Hero/>
                </div>

                <WrappedAbout/>
                <WrappedExperience/>
                <WrappedTech/>
                <WrappedWorks/>
                <WrappedFeedbacks/>

                <div className='relative z-0'>
                    <WrappedContact/>
                    <StarsCanvas/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App
