import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectorDirectorySelections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
