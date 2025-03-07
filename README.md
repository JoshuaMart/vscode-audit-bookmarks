# Audit Bookmarks

<img width="350" alt="audit_bookmarks_icon" src="images/icon.png">

Easy navigation between audit annotations in your code files.

## Features

* Mark points of interest in your code with specific tags that are automatically converted into bookmarks
* Access a dedicated tab in the VS Code activity bar to easily view and navigate between bookmarks
* Use different annotation categories adapted for security and optimization audits

## Supported Audit Tags

* `@audit-note` - (blue) General notes
* `@audit-info` - (blue) General information
* `@audit-gas` - (purple) Gas optimization annotations
* `@audit-low` - (green) Low severity issues
* `@audit-medium` - (yellow) Medium severity issues
* `@audit-high` - (orange) High severity issues
* `@audit-critical` - (red) Critical severity issues

## Overview

![Audit bookmarks interface](images/screenshot.png)

## How to Use

1. Add annotations in your code with the supported tags:
   ```solidity
   function transfer(address to, uint256 amount) public {
       // @audit-medium Missing null address check
       // @audit-gas Opportunity to optimize using unchecked
       balances[msg.sender] -= amount;
       balances[to] += amount;
   }
   ```

2. Click on the icon in the activity bar to open the audit bookmarks panel

3. Navigate between bookmarks by clicking on entries in the panel or use shortcuts to move to the previous/next bookmark

## Available Commands

* `Audit Bookmarks: Jump to Previous` - Go to previous bookmark
* `Audit Bookmarks: Jump to Next` - Go to next bookmark
* `Audit Bookmarks: Filter View...` - Filter displayed bookmarks
* `Audit Bookmarks: Toggle: Show Bookmarks for Visible Editors / All Files` - Toggle display between all files and only visible editors
* `Audit Bookmarks: Scan Workspace for Bookmarks` - Scan the workspace for bookmarks

## Custom Configuration

You can customize bookmark colors and styles in the extension settings:

```json
"audit-bookmarks.expert.custom.styles": {
    "critical": {
        "gutterIconColor": "#FF0000",
        "overviewRulerColor": "rgba(255, 0, 0, 0.7)",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "red"
        }
    }
}
```

## License

GPLv3

---

Based on the work of [tintinweb/vscode-inline-bookmarks](https://github.com/tintinweb/vscode-inline-bookmarks)
