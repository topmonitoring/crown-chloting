import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionLeaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";
import { compose } from "redux";

const mapStateToPtops = createStructuredSelector({
  isLoading: state => !selectCollectionLeaded(state)
});
const CollectionsPageContainer = compose(
  connect(mapStateToPtops),
  WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
