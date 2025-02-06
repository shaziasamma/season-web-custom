
// pages/index.js
import NavBar from '../app/components/Navbar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Our Seasons Page</h1>
      <p>Select a season to explore more:</p>
      <ul>
        <li><a href="/summer">Summer</a></li>
        <li><a href="/winter">Winter</a></li>
        <li><a href="/autumn">Autumn</a></li>
        <li><a href="/spring">Spring</a></li>
      </ul>
    </div>
  );
};

export default Home;
