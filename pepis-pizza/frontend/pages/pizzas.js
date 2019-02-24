import Link from 'next/link';
import Header from '../components/User/Header';
import PizzaItems from '../components/User/Pizza/PizzaItems';
import CreatePizzaItem from '../components/User/Pizza/CreatePizzaItem';

const Pizza = props => (
  <div>
    <Header />
    <p>Pizza Page</p>
    <CreatePizzaItem /> 
    <PizzaItems />
  </div>
);

export default Pizza;

