import { branch, renderComponent } from 'recompose';
import Loading from 'src/components/Loading';
import { Predicate } from 'src/types/general';

export default (pred: Predicate) => branch(
  pred,
  renderComponent(Loading)
);

