import App from './App';
import enhancer from './enhancer';

// TODO: remove `any`
//       export default enhancer(App);
const enhanced: any = enhancer(App);
export default enhanced;
