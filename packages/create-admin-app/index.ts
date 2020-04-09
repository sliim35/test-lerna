#!/usr/bin/env node
import chalk from 'chalk'
import clear from 'clear';
import figlet from 'figlet';
import prompts from 'prompts';
import Commander from 'commander'
import path from 'path'

import {createApp} from './createApp';
import packageJson from './package.json'

let projectPath: string = ''

clear();

new Commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectPath = name
  })
  .parse(process.argv)

console.log(
  chalk.red(
    figlet.textSync('admin-cli', { horizontalLayout: 'full' })
  )
);

async function run() {
  if (typeof projectPath === 'string') {
    projectPath = projectPath.trim()
  }

  if (!projectPath) {
    const res = await prompts({
      type: 'text',
      name: 'path',
      message: 'What is your project named?',
      initial: 'my-app',
    })

    if (typeof res.path === 'string') {
      projectPath = res.path.trim()
    }
  }

  const template = await prompts({
    type: 'select',
    name: 'value',
    message: 'Pick a template',
    choices: [
      { title: 'Default starter app', value: 'default' },
      { title: 'App with super graphic template', value: 'example' },
    ],
  })

  console.log(template);

  const resolvedProjectPath = path.resolve(projectPath)

  await createApp({
    appPath: resolvedProjectPath,
  });
}

run();
