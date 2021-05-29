// This enables nodejs worker API instead of spawing a process
// per invocation of esbuild
process.env.ESBUILD_WORKER_THREADS = 1;

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
