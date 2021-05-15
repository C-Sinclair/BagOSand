import esbuild from "esbuild"
import xdm from "xdm/esbuild.js"

async function build() {
  await esbuild.build({
    entryPoints: ["app.jsx"],
    outdir: "dist",
    bundle: true,
    minify: true,
    plugins: [xdm({})],
  })
}

console.log("Lets build that shit!")
build()
