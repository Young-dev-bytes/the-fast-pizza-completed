import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  console.log('UpdateOrder', order);
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      {!order?.priority && <Button type="primary">Make priority</Button>}
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  console.log('update');
  console.log('request', request);
  console.log('params', params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
