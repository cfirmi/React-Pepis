import UpdateToppingItem from '../../components/Admin/Pizza/Update/Toppings/UpdateTopping'

const update = ({ query }) => (
  <div>
    <UpdateToppingItem id={query.id} />
  </div>
);


export default update;
