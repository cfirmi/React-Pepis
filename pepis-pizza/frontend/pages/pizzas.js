import Link from 'next/link';
import PizzaItems from '../components/PizzaItems';
import CreatePizzaItem from '../components/CreatePizzaItem';

const Pizza = props => (
    <div>
        <p>Pizza Page</p>
        <CreatePizzaItem /> 
        <PizzaItems />
    </div>
);

export default Pizza;

