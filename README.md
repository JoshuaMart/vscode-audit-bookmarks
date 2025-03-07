# Audit Bookmarks

<img width="350" alt="audit_bookmarks_icon" src="images/icon.png">

Navigation facile entre annotations d'audit dans vos fichiers de code.

## Fonctionnalités

* Marquez des points d'intérêt dans votre code avec des tags spécifiques qui sont automatiquement convertis en signets
* Accédez à un onglet dédié dans la barre d'activité de VS Code pour visualiser et naviguer facilement entre les signets
* Utilisez différentes catégories d'annotation adaptées au audit de sécurité et d'optimisation

## Tags d'audit supportés

* `@audit-note` - (bleu) Notes générales
* `@audit-info` - (bleu) Informations générales
* `@audit-gas` - (violet) Annotations relatives à l'optimisation de gas
* `@audit-low` - (vert) Problèmes de sévérité faible
* `@audit-medium` - (jaune) Problèmes de sévérité moyenne
* `@audit-high` - (orange) Problèmes de sévérité élevée
* `@audit-critical` - (rouge) Problèmes de sévérité critique

## Tour d'horizon

![Interface des signets d'audit](images/screenshot.png)

## Comment l'utiliser

1. Ajoutez des annotations dans votre code avec les tags supportés:
   ```solidity
   function transfer(address to, uint256 amount) public {
       // @audit-medium Manque de vérification de l'adresse nulle
       // @audit-gas Possibilité d'optimiser en utilisant unchecked
       balances[msg.sender] -= amount;
       balances[to] += amount;
   }
   ```

2. Cliquez sur l'icône dans la barre d'activité pour ouvrir le panneau des signets d'audit

3. Naviguez entre les signets en cliquant sur les entrées dans le panneau ou utilisez les raccourcis pour passer au signet précédent/suivant

## Commandes disponibles

* `Audit Bookmarks: Jump to Previous` - Aller au signet précédent
* `Audit Bookmarks: Jump to Next` - Aller au signet suivant
* `Audit Bookmarks: Filter View...` - Filtrer les signets affichés
* `Audit Bookmarks: Toggle: Show Bookmarks for Visible Editors / All Files` - Basculer l'affichage entre tous les fichiers et uniquement les éditeurs visibles
* `Audit Bookmarks: Scan Workspace for Bookmarks` - Scanner l'espace de travail à la recherche de signets

## Configuration personnalisée

Vous pouvez personnaliser les couleurs et styles des signets dans les paramètres de l'extension:

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

Basé sur le travail de [tintinweb/vscode-inline-bookmarks](https://github.com/tintinweb/vscode-inline-bookmarks)
