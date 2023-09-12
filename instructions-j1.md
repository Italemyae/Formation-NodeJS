## Extension
- editorconfig
- vscode-icons
- prettier
- eslint

Générer l'editorconfig (right-click) puis le modifier

```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = crlf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```
## Install nvs

Sous windows `choco install nvs` (natif)

`winget` equivalent `apt-get` windows, project officiel windows

## Comment

* JSDoc `/**` doc pré-remplie, permet de donner des infos à JS
* TypeScript :
  * renommer fichier en `.ts`
  * ajouter typage `name: string`

## Typescript

Installer `npm install -g typescript`

Executer `tsc monfichier.ts` produit monfichier.js

## Jeu du plus et du moins

1. Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
2. Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
3. Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
4. Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
5. Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)

Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin
