'use strict';

// Set Marked.js default options.
marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true
});

document.addEventListener("DOMContentLoaded", function () {

    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    /**
     * Convert markdown text to HTML.
     * @param {String} value Markdown that you want to convert to HTML.
     */
    function convertMarkdown(value) {
        return marked(value.trim());
    }

    /**
     * Render markdown text to preview area.
     * @param {String} markdown Markdown Text
     */
    function renderMarkdown(markdown) {
        preview.innerHTML = convertMarkdown(markdown);
    }

    /**
     * Handle text editor change.
     * @param {Object} ev Event Argument.
     */
    function handleChange(ev) {
        const value = ev.target.value;
        renderMarkdown(value);
        console.log('value', value)
    }

    // Adding default markdown.
    let sampleMarkdown = "";

    editor.value = sampleMarkdown;

    // Render sample markdown.
    renderMarkdown(editor.value);

    editor.addEventListener('change', handleChange);
    editor.addEventListener('keyup', handleChange);
})