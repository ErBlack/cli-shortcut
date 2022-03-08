#! /usr/bin/env node
const commander = require("commander");
const {version} = require("../package");

const create = require('../lib/create');

commander
  .version(version)
  .command("create", "Create shortcut")
  .command("ls", "List shortcuts");

commander
    .command('create <name> <command>')
    .description('Create shortcut with name for command')
    .action(create);

commander.parse(process.argv);
