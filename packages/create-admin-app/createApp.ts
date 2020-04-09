import chalk from 'chalk'
import fs from 'fs'
import makeDir from 'make-dir'
import os from 'os'
import path from 'path'

import { install } from './helpers/install'

export async function createApp({
  appPath,
}: {
  appPath: string
}) {
  const root = path.resolve(appPath)
  const appName = path.basename(root)

  await makeDir(root)

    const packageJson = {
      name: appName,
      version: '0.1.0',
      private: true,
      scripts: { dev: 'dev', build: 'build', start: 'start' },
    }
    fs.writeFileSync(
      path.join(root, 'package.json'),
      JSON.stringify(packageJson, null, 2) + os.EOL
    )

    console.log(
      `Installing ${chalk.cyan('react')}, ${chalk.cyan(
        'react-dom'
      )}`
    )

    await install(root, ['react', 'react-dom'])
  }
