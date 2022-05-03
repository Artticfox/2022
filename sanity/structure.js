import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("about").documentId("about")),
      S.listItem()
        .title("Contact Page")
        .child(S.document().schemaType("contact").documentId("contact")),
      S.divider(),

      ...S.documentTypeListItems()
        .filter((item) => !["siteSettings"].includes(item.getId()))
        .filter((item) => !["about"].includes(item.getId()))
        .filter((item) => !["home"].includes(item.getId()))
        .filter((item) => !["contact"].includes(item.getId())),
      //   S.menuItemGroup([
      //     S.listItem()
      //     .title('About')
      //     .child(
      //       S.document().schemaType('about').documentId('about')
      //     )
      // ]),
    ]);
