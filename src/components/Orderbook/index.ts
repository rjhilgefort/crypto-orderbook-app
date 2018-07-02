import enhancer from './enhancer';
import Orderbook from './Orderbook';

// TODO: remove `any`
//       export default enhancer(Orderbook);
const enhanced: any = enhancer(Orderbook);
export default enhanced;
