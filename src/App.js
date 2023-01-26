import Section from "./components/Section";
import WelcomeVideo from "./components/WelcomeVideo";

import "./styles/App.scss";

import data from "./data/data.json";
import freshTopicImg from "./assests/academy.png";
import freshTopic2Img from "./assests/story.png";
import tedTalksImg from "./assests/in-the-news.gif";
import franchiseImg from "./assests/franchise.gif";
import mapImg from "./assests/locations.png";
import coursesImg from "./assests/image2.png";
import albumImg from "./assests/mba-cares.gif";
import baratImg from "./assests/image1.png";
import chaiwalaImg from "./assests/image3.png";
import Footer from "./components/Footer";

const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d3d0f"

function App() {

  const {freshTopic, freshTopic2,tedTalks, franchise,map,courses,album,barat,chaiwala}= data;

  return (
    <>
      <WelcomeVideo/>

      <Section
      h3={freshTopic.heading}
      text={freshTopic.text}
      btnTxt={freshTopic.btn}
      imgSrc={freshTopicImg}
      imgSize="70%"
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink}
      />

      <Section
      h3={freshTopic2.heading}
      text={freshTopic2.text}
      btnTxt={freshTopic2.btn}
      imgSrc={freshTopic2Img}
      imgSize="30%"
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink}
      />

      <Section
      h3={tedTalks.heading}
      text={tedTalks.text}
      btnTxt={tedTalks.btn}
      imgSrc={tedTalksImg}
      imgSize="70%"
      backgroundColor={yellow}
      headingColor={pink}
      textColor={pink}
      btnBgColor={pink}
      btnColor={yellow}
      />

      <Section
      h3={franchise.heading}
      text={franchise.text}
      btnTxt={franchise.btn}
      imgSrc={franchiseImg}
      imgSize="70%"
      backgroundColor={white}
      headingColor={pink}
      textColor={brown}
      btnBgColor={brown}
      btnColor={yellow}
      />

      <Section
      h3={map.heading}
      text={map.text}
      hasBtn={false}
      // btnTxt={map.btn}
      imgSrc={mapImg}
      imgSize="70%"
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={brown}
      btnColor={yellow}
      />

      <Section
      h3={courses.heading}
      text={courses.text}
      btnTxt={courses.btn}
      imgSrc={coursesImg}
      imgSize="30%"
      backgroundColor={yellow}
      headingColor={pink}
      textColor={pink}
      btnBgColor={pink}
      btnColor={yellow}
      />

      <Section
      h3={album.heading}
      text={album.text}
      btnTxt={album.btn}
      imgSrc={albumImg}
      // imgSize="70"
      backgroundColor={white}
      headingColor={pink}
      textColor={brown}
      btnBgColor={brown}
      btnColor={yellow}
      />

      <Section
      h3={barat.heading}
      text={barat.text}
      btnTxt={barat.btn}
      imgSrc={baratImg}
      // imgSize="70"
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink}
      />

      <Section
      h3={chaiwala.heading}
      text={chaiwala.text}
      btnTxt={chaiwala.btn}
      imgSrc={chaiwalaImg}
      // imgSize="70"
      backgroundColor={white}
      headingColor={pink}
      textColor={brown}
      btnBgColor={brown}
      btnColor={yellow}
      />
      <Footer/>

    </>
  );
}

export default App;
