/*eslint-disable no-console   */
import webpack from 'webpack';
import chalk from 'chalk';
import webbackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating production artifact'));

webpack(webbackConfig).run((error, stats) => {
  if (error) {
    console.log(chalk.red(error));
    console.log(stats);
    return 1;

  }
  return 0;

});
