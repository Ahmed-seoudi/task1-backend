const fs = require("fs");
const yargs = require("yargs");
const data0 = require("./data0");

// Add 
yargs.command({
  command: "add",
  describe: " to add an item",
  builder: {
    id: {
      describe: "this is the ID in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data0.addPerson(x.id, x.fname, x.lname, x.city, x.age);
  },
});

// Delete 
yargs.command({
  command: "delete",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "this is id desc in delete command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data0.deleteData(x.id);
  },
});

// delete all 
yargs.command({
  command: "deleteAll",
  describe: "Delete data of all people",
  handler: () => {
    data0.savealldata([]); 
    console.log("All data has been deleted.");
  },
});

// Read 
yargs.command({
  command: "view",
  describe: "to read an item",
  builder: {
    id: {
      describe: "this is id desc in read command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data0.readData(x.id);
  },
});

//  read all data
yargs.command({
  command: "viewAll",
  describe: "to view all data",
  handler: () => {
    data0.listData();
  },
});

yargs.parse(); 
