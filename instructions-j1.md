# Jour 1

## Plugins VSCode
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

## [Jeu du plus et du moins](https://github.com/Italemyae/Formation-NodeJS/blob/master/exo-jeu-01.js)

1. Générer un entier aléatoire entre 0 et 100 (API Math sur MDN)
2. Demander et récupérer la saisie (API Readline sur Node.js) puis afficher si le nombre est plus grand, plus petit ou trouvé
3. Pouvoir trouver en plusieurs tentatives (problème d’asynchronisme)
4. Stocker les essais dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
5. Afficher une erreur si la saisie n'est pas un nombre (API Number sur MDN)

Attention, le callback de question est toujours appelé avec un type String, à convertir si besoin

## POO

1. Une `function` est un objet, on peut `const o = new Foo('bar');`
2. Ne pas crée une `function` par object, l'assigner sur un `o.prototype.bar = function(){}`

## JSON

1. `JSON.stringify()`
1. `JSON.parse()`

## [Jeu du plus et du moins 2](https://github.com/Italemyae/Formation-NodeJS/blob/master/exo-jeu-02.js)

1. Reprendre le jeu du plus ou moins (correction)
2. Créer un objet random avec la syntaxe Object Literal et y regrouper les fonctions aléatoires
3. Créer une fonction constructeur Jeu recevant un objet en paramètres d’entrée et définir 3 propriétés : rl, entierAlea et essais
4. Créer une méthode loop/jouer() tel que le code suivant soit fonctionnel
5. Prévoir des valeurs par défaut pour min et max

## Proposals

TC39 est le nom du groupe ECMA.

Ils étudient et publient des [Proposals](https://github.com/tc39/proposals)
