// let message: string = 'Hello World !';
// console.log(message);
// console.log("test");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // number : Représente les nombres, qu'ils soient entiers ou à virgule flottante.
// // string : Représente une séquence de caractères.
// // boolean : Représente une valeur booléenne, soit true (vrai) soit false (faux).
// // null : Représente une valeur nulle ou absente.
// // undefined : Représente une valeur non définie.
// // symbol : Représente un identifiant unique et immuable.
// // bigint : Représente des entiers de grande taille.
// // void : ne retourne rien
// let tableau: number[];
// let tableau2: string[];
// let tableau3: boolean[];
// let tableau4: null[];
// let tableau5: undefined[];
// let tableau6: symbol[];
// let tableau7: bigint[];
// let tableau8: void[];
// let tableau9: Array<boolean>;
// let tableau10: any[];
// function maFonction(param1: number, param2: string): boolean {
//   return true;
// }
// function maFonction2(param1: number, param2: string): void | boolean {
//   // Corps de la fonction
//   console.log('La fonction ne retourne rien.');
//   return true;
// }
// console.log('Test maFonction boolean:'+maFonction(1,"UN"));
// console.log('Test maFonction2 void:'+maFonction2(1,"UN"));
// // class MaClasse {
// // }
// // const instance = new MaClasse();
// // if (instance instanceof MaClasse) {
// //   // L'instance est de type MaClasse
// //   console.log('Ceci est une instance de MaClasse');
// // }
// // class MaClasse2 {
// //   prop1: string;
// //   prop2: number;
// //   constructor(param1: string, param2: number) {
// //     this.prop1 = param1;
// //     this.prop2 = param2;
// //   }
// // }
// // const instance2 = new MaClasse2("valeur1", 42);
// // console.log(instance2.prop1); // Affiche "valeur1"
// // console.log(instance2.prop2); // Affiche 42
// // class MaClasse {
// //   public prop1: string;
// //   private prop2: number;
// //   protected prop3: boolean;
// //   constructor(param1: string, param2: number, param3: boolean) {
// //     this.prop1 = param1;
// //     this.prop2 = param2;
// //     this.prop3 = param3;
// //   }
// //   public methodePublique() {
// //     console.log("Méthode publique");
// //     console.log(this.prop1); // Accès à prop1 depuis l'intérieur de la classe
// //     console.log(this.prop2); // Erreur : Prop2 est privée et ne peut pas être accédée ici
// //     console.log(this.prop3); // Accès à prop3 depuis l'intérieur de la classe
// //   }
// //   private methodePrivee() {
// //     console.log("Méthode privée");
// //   }
// //   protected methodeProtegee() {
// //     console.log("Méthode protégée");
// //   }
// // }
// // class MaClasseEnfant extends MaClasse {
// //   constructor(param1: string, param2: number, param3: boolean) {
// //     super(param1, param2, param3);
// //   }
// //   public utiliserProprietesProtegees() {
// //     console.log(this.prop3); // Accès à prop3 depuis une classe enfant
// //     this.methodeProtegee(); // Appel de la méthode protégée depuis une classe enfant
// //   }
// // }
// // const instance = new MaClasse("valeur1", 42, true);
// // console.log(instance.prop1); // Accès à prop1 depuis l'extérieur de la classe
// // console.log(instance.prop2); // Erreur : Prop2 est privée et ne peut pas être accédée ici
// // console.log(instance.prop3); // Erreur : Prop3 est protégée et ne peut pas être accédée ici
// // instance.methodePublique(); // Appel de la méthode publique
// // instance.methodePrivee(); // Erreur : MethodePrivee est privée et ne peut pas être appelée ici
// // instance.methodeProtegee(); // Erreur : MethodeProtegee est protégée et ne peut pas être appelée ici
// // const instanceEnfant = new MaClasseEnfant("valeur1", 42, true);
// // instanceEnfant.utiliserProprietesProtegees(); // Utilisation des propriétés protégées depuis une classe enfant
// import { MaClasse } from './maClasse';
// // Utilisez la classe ici
// const instance = new MaClasse();
var Hero = /** @class */ (function () {
    function Hero(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }
    Hero.prototype.attack = function (opponent) {
        opponent.reduceLife(this.power);
    };
    Hero.prototype.reduceLife = function (damage) {
        this.life -= damage;
    };
    Hero.prototype.isAlive = function () {
        return this.life > 0;
    };
    Hero.prototype.getName = function () {
        return this.name;
    };
    Hero.prototype.getPower = function () {
        return this.power;
    };
    Hero.prototype.getLife = function () {
        return this.life;
    };
    Hero.prototype.setName = function (name) {
        this.name = name;
    };
    Hero.prototype.setPower = function (power) {
        this.power = power;
    };
    Hero.prototype.setLife = function (life) {
        this.life = life;
    };
    return Hero;
}());
var HeroAxe = /** @class */ (function (_super) {
    __extends(HeroAxe, _super);
    function HeroAxe(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new Weapon('axe', 10);
        return _this;
    }
    HeroAxe.prototype.attack = function (opponent) {
        if (opponent instanceof HeroSword) {
            opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
        }
        else {
            opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
    };
    return HeroAxe;
}(Hero));
var HeroSword = /** @class */ (function (_super) {
    __extends(HeroSword, _super);
    function HeroSword(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new Weapon('sword', 20);
        return _this;
    }
    HeroSword.prototype.attack = function (opponent) {
        if (opponent instanceof HeroSpear) {
            opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
        }
        else {
            opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
    };
    return HeroSword;
}(Hero));
var HeroSpear = /** @class */ (function (_super) {
    __extends(HeroSpear, _super);
    function HeroSpear(name, power, life) {
        var _this = _super.call(this, name, power, life) || this;
        _this.weapon = new Weapon('spear', 30);
        return _this;
    }
    HeroSpear.prototype.attack = function (opponent) {
        if (opponent instanceof HeroAxe) {
            opponent.reduceLife(this.getPower() * 2 + this.weapon.damage);
        }
        else {
            opponent.reduceLife(this.getPower() + this.weapon.damage);
        }
    };
    return HeroSpear;
}(Hero));
var Weapon = /** @class */ (function () {
    function Weapon(weapon, damage) {
        this.weapon = weapon;
        this.damage = damage;
    }
    return Weapon;
}());
function bataille(hero1, hero2) {
    while (hero1.isAlive() && hero2.isAlive()) {
        console.log('Attaque ' + hero1.getName() + "/" + hero2.getName());
        console.log(hero1);
        console.log(hero2);
        hero1.attack(hero2);
        hero2.attack(hero1);
        console.log('AFTER ATTAQUE');
        console.log(hero1);
        console.log(hero2);
    }
    var result = document.getElementById("result");
    result.innerHTML = "Résultat";
    if (!hero1.isAlive() && !hero2.isAlive()) {
        result.innerHTML = "It's a draw!";
        return ("It's a draw");
    }
    else if (!hero1.isAlive()) {
        result.innerHTML = "".concat(hero2.getName(), " wins!");
        return ("".concat(hero2.getName(), " wins"));
    }
    else {
        result.innerHTML = "".concat(hero1.getName(), " wins!");
        return ("".concat(hero1.getName(), " wins"));
    }
}
// Deux instances de Hero
var joan = new Hero("Joan", 20, 100);
var leon = new Hero("Leon", 20, 100);
var jerome = new HeroAxe("Jérôme", 20, 100);
var quentin = new HeroSpear("Quentin", 20, 100);
var bayram = new HeroSword("Bayram", 20, 100);
// console.log("GAME leon,joan: "+bataille(leon,joan));
// console.log("GAME quentin,jerome: "+bataille(quentin,jerome));
// console.log("GAME jerome,jerome: "+bataille(jerome,jerome));
var gameButton = document.getElementById("gameButton");
gameButton.addEventListener("click", function () {
    console.log("GAME leon,Quentin: " + bataille(leon, quentin));
});
// Début de la partie
// joan.attack(leon);
// leon.attack(joan);
// jerome.attack(quentin);
// quentin.attack(jerome);
// bayram.attack(quentin);
// bayram.attack(quentin);
// Résultats
// JOAN
// console.log("Nom du joueur", joan.getName());
// console.log("Est-il en vie?",joan.isAlive());
// console.log("Puissance :", joan.getPower());
// console.log("Vie restante :", joan.getLife());
// // LEON
// console.log("Nom du joueur", leon.getName());
// console.log("Est-il en vie?",leon.isAlive());
// console.log("Puissance :", leon.getPower());
// console.log("Vie restante :", leon.getLife());
// // JEROME
// console.log("Nom du joueur", jerome.getName());
// console.log("Est-il en vie?",jerome.isAlive());
// console.log("Puissance :", jerome.getPower());
// console.log("Vie restante :", jerome.getLife());
// // QUENTIN
// console.log("Nom du joueur", quentin.getName());
// console.log("Est-il en vie?",quentin.isAlive());
// console.log("Puissance :", quentin.getPower());
// console.log("Vie restante :", quentin.getLife());
// // BAYRAM
// console.log("Nom du joueur", bayram.getName());
// console.log("Est-il en vie?",bayram.isAlive());
// console.log("Puissance :", bayram.getPower());
// console.log("Vie restante :", bayram.getLife());
