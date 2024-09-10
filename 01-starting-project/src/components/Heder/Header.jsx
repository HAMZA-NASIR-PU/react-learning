import reactImg from '../../assets/react-core-concepts.png'  //Build process will handle tis during making the bundle for deployment.
//Now the image is a javascript object.
import './Header.css';  //importing css files
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />  This is not a good way of using image bevause we lost the image during deployment*/}
      <img src={reactImg} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}