import { createRouter } from "./context";
import { z } from "zod";
import MajorVersions from "../../version-data";


export const versionsRouter = createRouter().query("versions", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {

    return {
      versions: MajorVersions
    };
  },
});

