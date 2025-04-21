const sass = require("sass");
const fs = require("fs");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addGlobalData("sites", () => {
        const projects = require("./src/projects.json");
        return projects.sites;
    });

    // Add SCSS to CSS compilation
    eleventyConfig.on("beforeBuild", () => {
        const result = sass.renderSync({
            file: "src/assets/styles.scss",
            outFile: "_site/assets/styles.css",
        });
        // Create the output directory if it doesn't exist
        const outputDir = "_site/assets";
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        // Write the compiled CSS to the output directory
        fs.writeFileSync(`${outputDir}/styles.css`, result.css);
    });

    return {
        dir: {
            input: "src/**",
            output: "_site",
        },
    };
};
