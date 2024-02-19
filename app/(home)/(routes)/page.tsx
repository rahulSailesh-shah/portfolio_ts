import Footer from "../_components/Footer";
import About from "../_pages/About";
import Contact from "../_pages/Contact";
import Education from "../_pages/Education";
import Header from "../_pages/Header";
import Project from "../_pages/Projects";
import { Skills } from "../_pages/Skills";
import Work from "../_pages/Work";

export default function Home() {
    return (
        <main className='w-full overflow-hidden'>
            <Header />
            <About />
            <Work />
            <Project />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </main>
    );
}
