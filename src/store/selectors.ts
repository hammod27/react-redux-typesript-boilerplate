import { NavigatorSelectors } from "src/store/navigator/selectors";
import TestSelectors from "src/store/test/selectors";

const navigator = new NavigatorSelectors();
const test = new TestSelectors();

export default {
  navigator,
  test
};
