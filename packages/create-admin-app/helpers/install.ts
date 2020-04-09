import chalk from "chalk";
import spawn from "cross-spawn";

export function install(
  root: string,
  dependencies: string[] | null,
) {
  return new Promise((resolve, reject) => {
    let command: string;
    let args: string[];

    command = "yarnpkg";
    args = dependencies ? ["add", "--exact"] : ["install"];

    if (dependencies) {
      args.push(...dependencies);
    }
    args.push("--cwd", root);

    const child = spawn(command, args, {
      stdio: "inherit",
      env: { ...process.env, ADBLOCK: "1", DISABLE_OPENCOLLECTIVE: "1" },
    });
    child.on("close", (code) => {
      if (code !== 0) {
        reject({ command: `${command} ${args.join(" ")}` });
        return;
      }
      resolve();
    });
  });
}
