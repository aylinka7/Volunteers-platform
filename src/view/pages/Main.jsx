import {Header} from "../components/header/Header";
import {Banner} from "../components/banner/Banner";
import {Form} from "../components/form/Form";
import {Organizations} from "../components/organizations/Organizations";
import {Footer} from "../components/footer/Footer";

export const Main = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Form/>
            <Organizations/>
            <Footer/>
        </div>
    )
}