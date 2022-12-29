import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './style.scss'

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
