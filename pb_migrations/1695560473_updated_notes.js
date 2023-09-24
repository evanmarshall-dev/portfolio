/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nmj8gexv71nepxt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whex4cva",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nmj8gexv71nepxt")

  // remove
  collection.schema.removeField("whex4cva")

  return dao.saveCollection(collection)
})
