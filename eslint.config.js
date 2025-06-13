
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import pluginJs from "@eslint/js";

export default defineConfig([
  globalIgnores(["dist/", "mattobeecom/dist/"]),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
]);
