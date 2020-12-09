const esbuild = require("esbuild");
const pirates = require("pirates");

const compile = (ts) => {
  const { code, warnings } = esbuild.transformSync(ts, {
    loader: "ts",
    logLevel: "error",
    format: "cjs",
    target: "node12.14",
  });

  for (const warning of warnings) {
    console.log(warning.location);
    console.log(warning.text);
  }
  return code;
};

pirates.addHook(compile, { ignoreNodeModules: true, exts: [".ts"] });
