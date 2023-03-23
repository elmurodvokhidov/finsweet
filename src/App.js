import './Main.css';
import './Media.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

function App() {

  const generalInfo = [
    { id: "gInfo1", title: "We value human, organizational, and operational intelligence, not just artificial", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.", img: "./Header Image.png" },
    { id: "gInfo2", title: "We want to get local identification in every corner of the world in this era of global citizenship.", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.", img: "./About Image1.png" },
    { id: "gInfo3", title: "We serve clients with ground breaking solutions", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.", img: "./photo_2022-10-20_16-31-40.jpg" },
    { id: "gInfo4", title: "Business strategy", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.", img: "./SameCardImage.png", li1: "Cost strategy", li2: "Differentiated product or service strategy", li3: "Focus on a niche strategy" },
    { id: "gInfo5", title: "Digitalization", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis. Aliquam leo odio, sagittis.", img: "./SameCardImage1.png" },
    { id: "gInfo6", title: "Risk assessment", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.", img: "./SameCardImage2.png", li1: "Individual risk assessment", li2: "Systems risk assessment", li3: "Mathematical conceptualization" },
    { id: "gInfo7", title: "Artificial intelligence", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis. Aliquam leo odio, sagittis.", img: "./SameCardImage3.png" },
    { id: "gInfo8", title: "Smart Contracts", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.", img: "./SameCardImage4.png", li1: "Smart contract implementation", li2: "Smart legal contracts", li3: "Basic contract law" },
    { id: "gInfo9", title: "We hired people who are very passionate about what they do", about: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.", img: "./photo_2022-10-20_16-31-32.jpg" },
    { id: "gInfo10", title: "Our internal process and longerm vision", about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the", img: "./Image20.png" },
  ]

  return (
    <div className="App">
      <Navbar generalData={generalInfo} />
      <Footer />
    </div>
  );
}

export default App;
