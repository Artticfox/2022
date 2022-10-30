// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import projects from "./projects";
import { about, servicesOb, partnersOb, processOb, softwaresOb } from "./about";
import { siteSettings, seo } from "./siteSettings";
import home from "./home";
import services from "./services";
import softwares from "./softwares";
import images from "./objects/images";
import videos from "./objects/videos";
import contact from "./contact";
import partners from "./partners";
import process from "./process";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    projects,
    home,
    about,
    contact,
    siteSettings,
    services,
    softwares,
    partners,
    process,
    images,
    videos,
    servicesOb,
    partnersOb,
    processOb,
    softwaresOb,
    seo,
  ]),
});
