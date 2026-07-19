import * as path from "path";
import { Project, SourceFile } from "ts-morph";

const project = new Project({
  tsConfigFilePath: "tsconfig.json",
});

const aliasMappings = [
  {
    alias: "@core",
    target: path.resolve("src/core"),
  },
  {
    alias: "@api",
    target: path.resolve("src/api"),
  },
  {
    alias: "@ui",
    target: path.resolve("src/ui"),
  },
  {
    alias: "@pages",
    target: path.resolve("src/ui/pages"),
  },
  {
    alias: "@components",
    target: path.resolve("src/ui/components"),
  },
  {
    alias: "@fixtures",
    target: path.resolve("src/fixtures"),
  },
  {
    alias: "@utils",
    target: path.resolve("src/utils"),
  },
  {
    alias: "@tests",
    target: path.resolve("tests"),
  },
  {
    alias: "@testdata",
    target: path.resolve("test-data"),
  },
];

project.addSourceFilesAtPaths(["src/**/*.ts", "tests/**/*.ts", "playwright.config.ts"]);

let updatedFiles = 0;
let updatedImports = 0;

for (const sourceFile of project.getSourceFiles()) {
  if (updateImports(sourceFile)) {
    updatedFiles++;
  }
}

project.saveSync();

console.log("");
console.log("=======================================");
console.log(" Import migration completed");
console.log("=======================================");
console.log(` Files updated : ${updatedFiles}`);
console.log(` Imports fixed : ${updatedImports}`);
console.log("=======================================");

function updateImports(sourceFile: SourceFile): boolean {
  let fileChanged = false;

  sourceFile.getImportDeclarations().forEach((importDeclaration) => {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue();

    // Skip package imports
    if (!moduleSpecifier.startsWith(".")) {
      return;
    }

    const resolvedPath = path.resolve(path.dirname(sourceFile.getFilePath()), moduleSpecifier);

    for (const mapping of aliasMappings) {
      const normalizedTarget = normalize(mapping.target);
      const normalizedResolved = normalize(resolvedPath);

      if (normalizedResolved.startsWith(normalizedTarget)) {
        const relativePath = normalize(path.relative(mapping.target, resolvedPath));

        const newImport =
          relativePath.length > 0 ? `${mapping.alias}/${relativePath}` : mapping.alias;

        if (moduleSpecifier !== newImport) {
          importDeclaration.setModuleSpecifier(newImport);

          console.log(`${path.relative(process.cwd(), sourceFile.getFilePath())}`);
          console.log(`   ${moduleSpecifier}`);
          console.log(`-> ${newImport}`);
          console.log("");

          updatedImports++;
          fileChanged = true;
        }

        break;
      }
    }
  });

  return fileChanged;
}

function normalize(value: string): string {
  return value.replace(/\\/g, "/");
}
