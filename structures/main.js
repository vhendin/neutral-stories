import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  
].includes(listItem.getId())

export default () =>
S.list()
  .title("Content")
  .items([
    ...S.documentTypeListItems()
    .filter(hiddenDocTypes)
  ]);