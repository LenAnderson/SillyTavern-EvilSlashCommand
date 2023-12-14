import { registerSlashCommand } from "../../../slash-commands.js";




function jsCallback(value) {
    try {
        return eval(value);
    } catch {
        return null;
    }
}




registerSlashCommand('js', (_, value) => jsCallback(value), [], '<span class="monospace">(javascript)</span> – run JavaScript and return the result, e.g. <tt>/js alert("Hello, World!");</tt>', true, true);