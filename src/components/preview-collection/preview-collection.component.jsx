import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPrevew = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, inx) => inx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);
export default CollectionPrevew;
