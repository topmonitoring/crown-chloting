import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import { compose } from "redux";

const mapStateToPtops = createStructuredSelector({
  isLoading: selectCollectionFetching
});
const CollectionsOverviewContainer = compose(
  connect(mapStateToPtops),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
