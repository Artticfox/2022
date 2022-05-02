import schemaTypes from 'all:part:@sanity/base/schema-type'

export default {
  name:"siteSettings",
  type:"document",
  title:"Site Settings",
  fields:[
    {
      name:"title",
      type:"string",
      title:"Title"
    },
  ]
}