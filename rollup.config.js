import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  onwarn(warning, rollupWarn) {
    if (!["CIRCULAR_DEPENDENCY", "EVAL"].includes(warning.code)) {
      rollupWarn(warning);
    }
  },
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
    exports: "default",
  },
  // external: ["bluebird", "as-table", "chalk"],
  plugins: [resolve({ preferBuiltins: true }), commonjs(), json(), externals(), terser()],
};
