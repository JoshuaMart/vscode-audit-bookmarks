'use strict';
/**
 * @author JoshuaMart
 * Basé sur le travail de github.com/tintinweb  
 */
const vscode = require('vscode');

function extensionConfig() {
    return vscode.workspace.getConfiguration('audit-bookmarks');
}

module.exports = {
    extensionConfig: extensionConfig
};