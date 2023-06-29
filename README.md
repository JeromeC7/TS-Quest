# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ?
- Comment typer un tableau ?
- Quel est le type `any` ?
- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ?

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

En TypeScript, il existe plusieurs types de données primitifs, qui comprennent :

number : Représente les nombres, qu'ils soient entiers ou à virgule flottante.
string : Représente une séquence de caractères.
boolean : Représente une valeur booléenne, soit true (vrai) soit false (faux).
null : Représente une valeur nulle ou absente.
undefined : Représente une valeur non définie.
symbol : Représente un identifiant unique et immuable.
bigint : Représente des entiers de grande taille.
Pour typer un tableau en TypeScript, vous pouvez utiliser la syntaxe suivante :

let tableau: typeElement[];
Remplacez typeElement par le type des éléments que vous souhaitez stocker dans le tableau. Par exemple, pour un tableau de nombres, vous pouvez utiliser :

let tableau: number[];
Le type any est un type spécial en TypeScript qui permet de désactiver la vérification de type statique. Lorsqu'une variable est de type any, vous pouvez lui assigner n'importe quelle valeur sans générer d'erreurs de type. Cependant, l'utilisation excessive du type any peut réduire les avantages de la vérification de type offerts par TypeScript. Il est donc préférable d'éviter son utilisation lorsque cela est possible et d'opter pour des types plus précis.

Pour typer le retour d'une fonction en TypeScript, vous pouvez utiliser la syntaxe : returnType après la liste des paramètres de la fonction. Par exemple :

function maFonction(param1: number, param2: string): boolean {
// Corps de la fonction
return true;
}
Dans cet exemple, la fonction maFonction retourne une valeur de type boolean.

Pour typer les paramètres d'une fonction, vous pouvez spécifier le type de chaque paramètre de la même manière que pour les variables. Par exemple :

function maFonction(param1: number, param2: string): void {
// Corps de la fonction
}
Dans cet exemple, la fonction maFonction prend deux paramètres : param1 de type number et param2 de type string. La fonction ne retourne aucune valeur (void).

## Level 2

- Qu'est ce qu'une classe ?
- Qu'est ce qu'un constructeur de classe ?
- Qu'est ce qu'une instance de classe ?
- Comment vérifier qu'une classe est d'une certaine instance ?
- Qu'est ce que `this` dans une classe ?
- Qu'est ce qu'une méthode de classe ?
- Qu'est ce que la visibilité des propriétés ?

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

Une classe est une structure qui définit un ensemble de propriétés et de méthodes associées. Elle sert de modèle pour créer des objets, qui sont des instances de cette classe.

Un constructeur de classe est une méthode spéciale qui est appelée lors de la création d'une nouvelle instance de classe. Il est utilisé pour initialiser les propriétés de l'objet. En TypeScript, le constructeur est défini à l'aide du mot-clé constructor.

Une instance de classe est un objet spécifique créé à partir d'une classe. Lorsque vous créez une instance de classe, vous pouvez accéder aux propriétés et aux méthodes définies dans cette classe.

Pour vérifier qu'une instance de classe est d'un certain type, vous pouvez utiliser l'opérateur instanceof. Par exemple :

class MaClasse {
// ...
}

const instance = new MaClasse();

if (instance instanceof MaClasse) {
// L'instance est de type MaClasse
}
Dans ce cas, si instance est une instance de la classe MaClasse, la condition sera vraie.

Dans une classe, le mot-clé this fait référence à l'instance actuelle de la classe. Il est utilisé pour accéder aux propriétés et aux méthodes de cette instance à l'intérieur de la classe.

Une méthode de classe est une fonction définie à l'intérieur d'une classe. Elle peut accéder aux propriétés de la classe et peut effectuer des opérations spécifiques. Les méthodes de classe sont appelées sur les instances de la classe.

La visibilité des propriétés en TypeScript peut être contrôlée à l'aide des modificateurs d'accès : public, private et protected.

public : Les propriétés publiques peuvent être accédées à partir de n'importe où, aussi bien à l'intérieur de la classe qu'à l'extérieur.
private : Les propriétés privées ne peuvent être accédées qu'à l'intérieur de la classe où elles sont définies.
protected : Les propriétés protégées peuvent être accédées à l'intérieur de la classe où elles sont définies, ainsi que dans les classes dérivées (héritage).
Par défaut, si aucun modificateur d'accès n'est spécifié, la visibilité est public.

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)
- Qu'est ce que l'héritage ?
- Comment appeler le constructeur d'une classe mère ?
- Comment appeler une méthode d'une classe mère ?
- Qu'est ce que le polymorphism ?

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

Pour diviser un programme en différents fichiers, vous pouvez utiliser des modules et des imports/export. Voici comment procéder :

Définissez votre classe dans un fichier séparé, par exemple MaClasse.ts :

export class MaClasse {
// ...
}
Dans un autre fichier où vous souhaitez utiliser la classe, importez-la à l'aide de l'instruction import :

import { MaClasse } from './MaClasse';

// Utilisez la classe ici
const instance = new MaClasse();
Cela permet d'importer la classe MaClasse depuis le fichier MaClasse.ts et de l'utiliser dans le fichier actuel.

L'héritage en TypeScript permet à une classe de hériter des propriétés et des méthodes d'une autre classe, appelée classe parente ou classe de base. La classe qui hérite est appelée classe enfant ou classe dérivée. L'héritage est réalisé à l'aide du mot-clé extends.

Pour appeler le constructeur d'une classe parente depuis une classe enfant, vous devez utiliser le mot-clé super suivi des arguments du constructeur de la classe parente. Par exemple :

class ClasseParente {
constructor(param1: number) {
// ...
}
}

class ClasseEnfant extends ClasseParente {
constructor(param1: number, param2: string) {
super(param1); // Appel du constructeur de la classe parente
// ...
}
}
Dans cet exemple, le constructeur de la classe enfant ClasseEnfant appelle le constructeur de sa classe parente ClasseParente à l'aide de super(param1).

Pour appeler une méthode d'une classe parente à partir d'une classe enfant, vous pouvez utiliser la même syntaxe super.nomMethode() dans la classe enfant. Par exemple :

class ClasseParente {
maMethode() {
// ...
}
}

class ClasseEnfant extends ClasseParente {
maMethode() {
super.maMethode(); // Appel de la méthode de la classe parente
// ...
}
}
Le polymorphisme en TypeScript se réfère à la capacité d'un objet d'une classe enfant à être traité comme un objet de sa classe parente. Cela signifie que vous pouvez utiliser une instance d'une classe enfant partout où une instance de la classe parente est attendue. Le polymorphisme permet de substituer ou de redéfinir des méthodes d'une classe parente dans la classe enfant, en utilisant le même nom de méthode.

Cela permet d'appeler la méthode redéfinie de la classe enfant lors de l'exécution, même si la référence à l'objet est de type de la classe parente.

Cela permet une plus grande flexibilité dans la conception et permet de créer du code plus générique et réutilisable.

## Boss level

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !

### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
_Exemple : Si Joan attaque Leon, cela sera représenté par :_

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes

​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​

### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

**_Bonus 1 : Les dégâts de l'arme_**

_Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur._

_Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`_

**_Bonus 2 : Interface graphique_**

_Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)_
