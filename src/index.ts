// let message: string = 'Hello World !';
// console.log(message);
// console.log("test");

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

class Hero{
  private name: string;
  private power: number;
  private life: number;
  weapon!:Weapon;

  constructor(name: string,power: number,life: number){
    this.name = name;
    this.power = power;
    this.life = life;
  }
  public attack(opponent: Hero){
    opponent.reduceLife(this.power);
  }
  reduceLife(damage: number){
    this.life -= damage;
  }
  isAlive(): boolean{
    return this.life>0;
  }
  getName(): string{
    return this.name;
  }
  getPower(): number{
    return this.power;
  }
  getLife(): number{
    return this.life;
  }
  setName(name: string){
    this.name = name;
  }
  setPower(power: number){
    this.power = power;
  }
  setLife(life: number){
    this.life = life;
  }
}
class HeroAxe extends Hero{
    constructor(name: string, power: number, life: number){
        super(name,power,life);
        this.weapon = new Weapon('axe',10);
 
    }
    public attack(opponent: Hero): void{
        if (opponent instanceof HeroSword){
            opponent.reduceLife(this.getPower()*2+this.weapon.damage);
        }else{
            opponent.reduceLife(this.getPower()+this.weapon.damage);
        }
    }
}
class HeroSword extends Hero{
    constructor(name: string, power: number, life: number){
        super(name,power,life);
        this.weapon = new Weapon('sword',20);
    }
    public attack(opponent: Hero): void{
        if (opponent instanceof HeroSpear){
            opponent.reduceLife(this.getPower()*2+this.weapon.damage);
        }else{
            opponent.reduceLife(this.getPower()+this.weapon.damage);
        }
    }

}
class HeroSpear extends Hero{
    constructor(name: string, power: number, life: number){
        super(name,power,life);
        this.weapon = new Weapon('spear',30);
    }
    public attack(opponent: Hero): void{
        if (opponent instanceof HeroAxe){
            opponent.reduceLife(this.getPower()*2+this.weapon.damage);
        }else{
            opponent.reduceLife(this.getPower()+this.weapon.damage);
        }
    }
}
class Weapon{
    damage: number
    weapon: String;
    constructor(weapon: string,damage: number){
        this.weapon = weapon;
        this.damage = damage;
    }
}

function bataille(hero1: Hero, hero2: Hero): string{
    while(hero1.isAlive() && hero2.isAlive()){
        console.log('Attaque '+hero1.getName()+"/"+hero2.getName());
        console.log(hero1);
        console.log(hero2);
        hero1.attack(hero2);
        hero2.attack(hero1);
        console.log('AFTER ATTAQUE');
        console.log(hero1);
        console.log(hero2);
    }
    let result: HTMLElement | null = document.getElementById("result")
    result!.innerHTML = "Résultat";
    if(!hero1.isAlive() && !hero2.isAlive()){
        result!.innerHTML = "It's a draw!";
        return("It's a draw");
    }else if(!hero1.isAlive()){
        result!.innerHTML = `${hero2.getName()} wins!`;
        return(`${hero2.getName()} wins`);
    }else{
        result!.innerHTML = `${hero1.getName()} wins!`;
        return(`${hero1.getName()} wins`);
    }
}

function buildHero(heroType:String) :Hero{
    switch (heroType){
      case "HeroAxe":
        return new HeroAxe(String(heroType),20,100);
        break;
      case "HeroSpear":
        return new HeroSpear(String(heroType),20,100);
        break;
      case "HeroSword":
        return new HeroSword(String(heroType),20,100);
        break;
    }
    return new Hero("Hero Geek",20,100);
}

// Deux instances de Hero
const joan = new Hero("Joan",20,100);
const leon = new Hero("Leon",20,100);
const jerome = new HeroAxe("Jérôme",20,100 );
const quentin = new HeroSpear("Quentin",20,100);
const bayram = new HeroSword("Bayram",20,100);
// console.log("GAME leon,joan: "+bataille(leon,joan));
// console.log("GAME quentin,jerome: "+bataille(quentin,jerome));
// console.log("GAME jerome,jerome: "+bataille(jerome,jerome));

const gameButton: HTMLElement | null = document.getElementById("gameButton");
const valueHero1: HTMLInputElement | null = document.getElementById("valueHero1") as HTMLInputElement;
const valueHero2: HTMLInputElement | null = document.getElementById("valueHero2") as HTMLInputElement;
if(gameButton){
    gameButton.addEventListener("click",() => {
    // const hero1: Hero = `new ${valueHero1!.value}(${valueHero1!.value},20,100)`;
    // const hero2: Hero = `new ${valueHero2!.value}(${valueHero2!.value},20,100)`;
    let hero1 = buildHero(valueHero1.value);
    hero1.setName("Héro 1");
    let hero2 = buildHero(valueHero2.value);
    hero2.setName("Héro 2");
    console.log("GAME Hero1 / Hero2: "+ bataille(hero1,hero2));
  });
}






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
