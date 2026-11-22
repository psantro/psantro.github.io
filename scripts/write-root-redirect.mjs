import { copyFile } from "node:fs/promises";

const outputDirectory = new URL(
  "../dist/psantro-portfolio/browser/",
  import.meta.url,
);

await Promise.all([
  copyFile(
    new URL("../src/root-redirect.html", import.meta.url),
    new URL("index.html", outputDirectory),
  ),
  copyFile(
    new URL("en/robots.txt", outputDirectory),
    new URL("robots.txt", outputDirectory),
  ),
  copyFile(
    new URL("en/sitemap.xml", outputDirectory),
    new URL("sitemap.xml", outputDirectory),
  ),
]);
