import * as fs from "node:fs";
import * as path from "node:path";
import format from "./format";

const cwd = import.meta.dirname;

export async function createFile(content: string, filePath: string) {
  const formattedContent = await format(content);
  const resolvedPath = path.join(cwd, `../src${filePath}`);
  const directoryPath = path.join(
    cwd,
    "../src" + filePath.substring(0, filePath.lastIndexOf("/"))
  );
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
  fs.writeFileSync(resolvedPath, formattedContent, "utf8");
}
