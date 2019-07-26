import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectorDirectorySelections } from "../../redux/directory/directory.selectors.js";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectorDirectorySelections
});
export default connect(mapStateToProps)(Directory);
