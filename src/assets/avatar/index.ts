import Astronaut1 from "./astronaut-1.png";
import Astronaut from "./astronaut.png";
import Bear1 from "./bear-1.png";
import Bear from "./bear.png";
import Beaver from "./beaver.png";
import Boy from "./boy.png";
import Cat from "./cat.png";
import Chicken from "./chicken.png";
import Cool1 from "./cool-1.png";
import Cool2 from "./cool-2.png";
import Cool from "./cool.png";
import Cow from "./cow.png";
import Deer from "./deer.png";
import Dinosaur from "./dinosaur.png";
import Dog1 from "./dog-1.png";
import Dog2 from "./dog-2.png";
import Dog from "./dog.png";
import Dragon from "./dragon.png";
import Eagle from "./eagle.png";
import Elephant from "./elephant.png";
import Emoji from "./eagle.png";
import Fox from "./fox.png";
import Frog from "./frog.png";
import Gamer from "./gamer.png";
import Ghost from "./ghost.png";
import Gorilla from "./gorilla.png";
import Hen from "./hen.png";
import Hippopo from "./hippopotamus.png";
import Knight from "./knight.png";
import Lion from "./lion.png";
import Meerkat from "./meerkat.png";
import Monkey from "./monkey.png";
import Monkey1 from "./monkey-1.png";
import Ninja from "./ninja.png";
import Ostrich from "./ostrich.png";
import Panda from "./panda.png";
import Penguin from "./penguin.png";
import Person from "./person.png";
import PolarBear from "./polar-bear.png";
import PolarBear1 from "./polar-bear-1.png";
import PufferFish from "./puffer-fish.png";
import Rabbit from "./rabbit.png";
import Rabbit1 from "./rabbit-1.png";
import Robot from "./robot.png";
import Robot1 from "./robot-1.png";
import Robot2 from "./robot-2.png";
import Robot3 from "./robot-3.png";
import Robot4 from "./robot-4.png";
import SeaLion from "./sea-lion.png";
import Sloth from "./sloth.png";
import Tiger from "./tiger.png";
import User1 from "./user-1.png";
import User from "./user.png";
import Weasel from "./weasel.png";
import WildBoar from "./wild-boar.png";
import Wolf from "./wolf.png";

enum AvatarMap {
  Astronaut1 = "astronaut-1",
  Astronaut = "astronaut",
  Bear1 = "bear-1",
  Bear = "bear",
  Beaver = "beaver",
  Boy = "boy",
  Cat = "cat",
  Chicken = "chicken",
  Cool1 = "cool-1",
  Cool2 = "cool-2",
  Cool = "cool",
  Cow = "cow",
  Deer = "deer",
  Dinosaur = "dinosaur",
  Dog1 = "dog-1",
  Dog2 = "dog-2",
  Dog = "dog",
  Dragon = "dragon",
  Eagle = "eagle",
  Elephant = "elephant",
  Emoji = "emoji",
  Fox = "fox",
  Frog = "frog",
  Gamer = "gamer",
  Ghost = "ghost",
  Gorilla = "gorilla",
  Hen = "hen",
  Hippopo = "hippopo",
  Knight = "knight",
  Lion = "lion",
  MeerKat = "meerkat",
  Monkey1 = "monkey-1",
  Monkey = "monkey",
  Ninja = "ninja",
  Ostrich = "ostrich",
  Panda = "panda",
  Penguin = "penguin",
  Person = "person",
  PolarBear = "polar-bear",
  PolarBear1 = "polar-bear-1",
  PufferFish = "puffer-fish",
  Rabbit1 = "rabbit-1",
  Rabbit = "rabbit",
  Robot = "robot",
  Robot1 = "robot-1",
  Robot2 = "robot-2",
  Robot3 = "robot-3",
  Robot4 = "robot-4",
  SeaLion = "sea-lion",
  Sloth = "sloth",
  Tiger = "tiger",
  User1 = "user-1",
  User = "user",
  Weasel = "weasel",
  WildBoar = "wildboar",
  Wolf = "wolf",
}

export const Avatar = {
  [AvatarMap.Astronaut1]: Astronaut1,
  [AvatarMap.Astronaut]: Astronaut,
  [AvatarMap.Bear]: Bear,
  [AvatarMap.Bear1]: Bear1,
  [AvatarMap.Beaver]: Beaver,
  [AvatarMap.Boy]: Boy,
  [AvatarMap.Cat]: Cat,
  [AvatarMap.Chicken]: Chicken,
  [AvatarMap.Cool]: Cool,
  [AvatarMap.Cool1]: Cool1,
  [AvatarMap.Cool2]: Cool2,
  [AvatarMap.Cow]: Cow,
  [AvatarMap.Deer]: Deer,
  [AvatarMap.Dinosaur]: Dinosaur,
  [AvatarMap.Dog]: Dog,
  [AvatarMap.Dog1]: Dog1,
  [AvatarMap.Dog2]: Dog2,
  [AvatarMap.Dragon]: Dragon,
  [AvatarMap.Eagle]: Eagle,
  [AvatarMap.Elephant]: Elephant,
  [AvatarMap.Emoji]: Emoji,
  [AvatarMap.Fox]: Fox,
  [AvatarMap.Frog]: Frog,
  [AvatarMap.Gamer]: Gamer,
  [AvatarMap.Ghost]: Ghost,
  [AvatarMap.Gorilla]: Gorilla,
  [AvatarMap.Hen]: Hen,
  [AvatarMap.Hippopo]: Hippopo,
  [AvatarMap.Knight]: Knight,
  [AvatarMap.Lion]: Lion,
  [AvatarMap.MeerKat]: Meerkat,
  [AvatarMap.Monkey1]: Monkey1,
  [AvatarMap.Monkey]: Monkey,
  [AvatarMap.Ninja]: Ninja,
  [AvatarMap.Ostrich]: Ostrich,
  [AvatarMap.Panda]: Panda,
  [AvatarMap.Penguin]: Penguin,
  [AvatarMap.Person]: Person,
  [AvatarMap.PolarBear]: PolarBear,
  [AvatarMap.PolarBear1]: PolarBear1,
  [AvatarMap.PufferFish]: PufferFish,
  [AvatarMap.Rabbit]: Rabbit,
  [AvatarMap.Rabbit1]: Rabbit1,
  [AvatarMap.Robot]: Robot,
  [AvatarMap.Robot1]: Robot1,
  [AvatarMap.Robot2]: Robot2,
  [AvatarMap.Robot3]: Robot3,
  [AvatarMap.Robot4]: Robot4,
  [AvatarMap.SeaLion]: SeaLion,
  [AvatarMap.Sloth]: Sloth,
  [AvatarMap.Tiger]: Tiger,
  [AvatarMap.User1]: User1,
  [AvatarMap.User]: User,
  [AvatarMap.Weasel]: Weasel,
  [AvatarMap.WildBoar]: WildBoar,
  [AvatarMap.Wolf]: Wolf,
};

export const avatarMap = Object.keys(Avatar).map((key) => key);
