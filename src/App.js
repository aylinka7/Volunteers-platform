import {Header} from "./view/components/header/Header";
import {Banner} from "./view/components/banner/Banner";
import {Form} from "./view/components/form/Form";
import {Organizations} from "./view/components/organizations/Organizations";
import {Footer} from "./view/components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Form/>
      <Organizations/>
      <Footer/>
    </div>
  );
}

export default App;
