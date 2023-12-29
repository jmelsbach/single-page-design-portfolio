import "./App.css";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import IntroductionSection from "./components/IntroductionSection";
import AboutMeSection from "./components/AboutMeSection";
import SliderSection from "./components/SliderSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <IntroductionSection></IntroductionSection>
        <CardSection></CardSection>
        <AboutMeSection></AboutMeSection>
        <SliderSection></SliderSection>
        <BookingSection></BookingSection>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
