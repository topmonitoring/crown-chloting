import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ColectionPrevew from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collections-overview.component";

const ColectionsOverviw = ({ collections }) => (
  <div className="collections-overvew ">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <ColectionPrevew key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(ColectionsOverviw);
