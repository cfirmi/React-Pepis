import Link from 'next/link';
import Header from '../components/Header';
import PizzaItems from '../components/PizzaItems';
import CreatePizzaItem from '../components/CreatePizzaItem';

const Pizza = props => (
  <div>
    <Header />
    <p>Pizza Page</p>
    <CreatePizzaItem /> 
    <PizzaItems />
  </div>
);

export default Pizza;

