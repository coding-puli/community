var config = {
  "copy":{
    "html":{
      "sourceDir": "src",
      "sourceFiles": ["index"],
      "destinationDir":"dist/community"
    },
    "css":{
      "sourceDir":null,
      "sourceFiles": null,
      "destinationDir":null
    },
    "json":{
      "sourceDir":null,
      "sourceFiles": null,
      "destinationDir":null
    },
    "other":{
      "sourceDir":'src/static',
      "sourceFiles": null,
      "destinationDir":'dist/community/static'
    }
  }
};

module.exports = config;
