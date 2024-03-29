console.log("Welcome to the loot generator. If you're reading this, I'd say you know what you're doing (probably more so than me), so feel free to make any improvements!");

// ARRAYS OF ALL ITEMS
var gearItems = Array(
  "Abacus - 2gp, 2lb. ",
  "Acid (vial) - 25 gp, 1lb",
  "Alchemist’s fire (flask) - 50 gp, 1lb ",
  "Arrows (20) ",
  "Arrows (10) ",
  "Blowgun needles (10)",
  "Crossbow bolts (10)",
  "Sling bullets (10)",
  "Arrows (5) ",
  "Blowgun needles (5)",
  "Crossbow bolts (5)",
  "Sling bullets (5)",
  "Antitoxin (vial)",
  "Arcane focus - Crystal",
  "Arcane focus - Orb",
  "Arcane focus - Rod",
  "Arcane focus - Staff",
  "Arcane focus - Wand ",
  "Backpack ",
  "Ball bearings (bag of 1,000) ",
  "Barrel ",
  "Basket ",
  "Bedroll ",
  "Bell ",
  "Blanket ",
  "Block and tackle ",
  "Book ",
  "Glass Bottle ",
  "Bucket ",
  "Caltrops (bag of 20) ",
  "Candle ",
  "Crossbow bolt case ",
  "Case, map or scroll ",
  "Chain (10 feet) ",
  "Chalk (1 piece) ",
  "Chest",
  "Climber's kit ",
  "Clothes, common",
  "Clothes, costume ",
  "Clothes, fine ",
  "Clothes, traveler's ",
  "Component pouch ",
  "Crowbar ",
  "Druidic focus - Sprig of mistletoe ",
  "Druidic focus - Totem ",
  "Druidic focus - Wooden staff ",
  "Druidic focus - Yew wand ",
  "Fishing tackle ",
  "Flask or tankard ",
  "Grappling hook ",
  "Hammer ",
  "Hammer, sledge ",
  "Healer’s kit (advantage on stabilising allies, +1 hit die) ",
  "Holy symbol - Reliquary ",
  "Holy symbol - Emblem ",
  "Holy symbol - Amulet ",
  "Holy water (flask) ",
  "Hourglass ",
  "Hunting trap ",
  "Ink (1 ounce bottle) ",
  "Ink pen ",
  "Jug or pitcher ",
  "Ladder (10-foot) ",
  "Lamp ",
  "Lantern, bullseye ",
  "Lantern, hooded ",
  "Magnifying Glass ",
  "Manacles ",
  "Messkit ",
  "Mirror, steel ",
  "Oil (flask) ",
  "Paper (one sheet) ",
  "Parchment (one sheet) ",
  "Perfume (vial)",
  "Pick, miner’s ",
  "Piton ",
  "Poison, basic (vial) ",
  "Pole (10-foot) ",
  "Iron Pot ",
  "Potion of healing ",
  "Pouch",
  "Quiver ",
  "Ram, portable ",
  "Rations (1 day) ",
  "Robes",
  "Rope, hempen (50 feet) ",
  "Rope, silk (50 feet) ",
  "Sack",
  "Scale, merchant’s ",
  "Sealing wax ",
  "Shovel ",
  "Signal whistle ",
  "Signet ring ",
  "Soap ",
  "Spellbook ",
  "Spikes, iron (10) ",
  "Spyglass ",
  "Tent, two-person ",
  "Tinderbox ",
  "Torch ",
  "Vial ",
  "Waterskin ",
  "Whetstone ",
  "Drum ",
  "Flute ",
  "Lute",
  "Horn ",
  "Pan flute ",
  "Keg of ale ",
  "Jug of ale ",
  "Bottle of ale",
  "Botle of wine (common)",
  "Bottle of wine (fine)",
  "Loaf of bread",
  "Cheese wedge",
  "Cheese wheel"
)
var weaponItems = Array(
  "Club",
  "Dagger",
  "Greatclub",
  "Handaxe ",
  "Javelin ",
  "Light Hammer ",
  "Mace ",
  "Quaterstaff ",
  "Sickle ",
  "Spear ",
  "Light Crossbow ",
  "Dart (10) ",
  "Shortbow ",
  "Sling ",
  "Battleaxe ",
  "Flail ",
  "Glaive ",
  "Greataxe ",
  "Halbard ",
  "Lance ",
  "Longsword ",
  "Moringstar ",
  "Pike ",
  "Rapier ",
  "Shortsword ",
  "Trident ",
  "Warpick ",
  "Warhammer ",
  "Whip ",
  "Blowgun ",
  "Hand Crossbow ",
  "Heavy Crossbow ",
  "Longbow ",
  "Net ",
  "Sabre - 1d6, slashing, Versitile(1d8)  ",
  "Spiked Maul - 1d8 bludgeoning	 ",
  "Kartana - 1d8 slashing, Versitile(1d10)  ",
  "Boomarang -  1d4 bludgeoning, Returning",
  "Bladed-Staff - 1d8 slashing, Versatile(1d8 bludgeoning) ",
  "Broad sword - 2d4 slashing/piercing "
)
var trinketItems = Array(
  "A mummified goblin hand ",
  "A piece o f crystal that faintly glows in the moonlight ",
  "A gold coin minted in an unknown land ",
  "A diary written in a language you don’t know ",
  "A brass ring that never tarnishes ",
  "An old chess piece made from glass ",
  "A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips ",
  "A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it ",
  "A rope necklace from which dangles four mummified elf fingers ",
  "The deed for a parcel of land in a realm unknown to you ",
  "A 1-ounce block made from an unknown material ",
  "A small cloth doll skewered with needles ",
  "A tooth from an unknown beast ",
  "An enormous scale, perhaps from a dragon ",
  "A bright green feather ",
  "An old divination card bearing your likeness ",
  "A glass orb filled with moving smoke ",
  "A 1-pound egg with a bright red shell ",
  "A pipe that blows bubbles ",
  "A glass jar containing a weird bit o f flesh floating in pickling fluid ",
  "A tiny gnome-crafted music box that plays a song you dimly remember from your childhood ",
  "A small wooden statuette of a smug halfling ",
  "A brass orb etched with strange runes ",
  "A multicolored stone disk ",
  "A tiny silver icon of a raven ",
  "A bag containing forty-seven humanoid teeth, one of which is rotten ",
  "A shard o f obsidian that always feels warm to the touch ",
  "A dragon's bony talon hanging from a plain leather necklace ",
  "A pair of old socks ",
  "A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking ",
  "A silver badge in the shape of a five-pointed star ",
  "A knife that belonged to a relative ",
  "A glass vial filled with nail clippings ",
  "A rectangular metal device with two tiny metal cups on one end that throws sparks when wet ",
  "A white, sequined glove sized for a human ",
  "A vest with one hundred tiny pockets ",
  "A small, weightless stone block ",
  "A tiny sketch portrait of a goblin ",
  "An empty glass vial that smells of perfume when opened ",
  "A gemstone that looks like a lump of coal when examined by anyone but you ",
  "A scrap of cloth from an old banner ",
  "A rank insignia from a lost legionnaire ",
  "A tiny silver bell without a clapper ",
  "A mechanical canary inside a gnomish lamp ",
  "A tiny chest carved to look like it has numerous feet on the bottom ",
  "A dead sprite inside a clear glass bottle ",
  "A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice) ",
  "A glass orb filled with water, in which swims a clockwork goldfish",
  "A silver spoon with an M engraved on the handle ",
  "A whistle made from gold-colored wood ",
  "A dead scarab beetle the size of your hand ",
  "Two toy soldiers, one with a missing head ",
  "A small box filled with different-sized buttons ",
  "A candle that can’t be lit ",
  "A tiny cage with no door ",
  "An old key ",
  "An indecipherable treasure map",
  "A hilt from a broken sword ",
  "A rabbit’s foot ",
  "A glass eye ",
  "A cameo carved in the likeness of a hideous person ",
  "A silver skull the size of a coin ",
  "An alabaster mask",
  "A pyramid of sticky black incense that smells very bad ",
  "A nightcap that, when worn, gives you pleasant dreams ",
  "A single caltrop made from bone ",
  "A gold monocle frame without the lens ",
  "A 1-inch cube, each side painted a different color ",
  "A crystal knob from a door ",
  "A small packet filled with pink dust",
  "A fragment of a beautiful song, written as musical notes on two pieces of parchment ",
  "A silver teardrop earring made from a real teardrop ",
  "The shell of an egg painted with scenes of human misery in disturbing detail ",
  "A fan that, when unfolded, shows a sleeping cat  ",
  "A set of bone pipes ",
  "A four-leaf clover pressed inside a book discussing manners and etiquette",
  "A sheet of parchment upon which is drawn a complex mechanical contraption ",
  "An ornate scabbard that fits no blade you have found so far ",
  "An invitation to a party where a murder happened ",
  "A bronze pentacle with an etching of a rat's head in its center ",
  "A purple handkerchief embroidered with the name of a powerful archmage ",
  "Half o f a floorplan for a temple, castle, or some other structure ",
  "A bit of folded cloth that, when unfolded, turns into a stylish cap ",
  "A receipt o f deposit at a bank in a far-flung city ",
  "A diary with seven missing pages ",
  "An empty silver snuffbox bearing an inscription on the surface that says “dreams’’ ",
  "An iron holy symbol devoted to an unknown god ",
  "A book that tells the story of a legendary hero's rise and fall, with the last chapter missing ",
  "A vial of dragon blood ",
  "An ancient arrow of elven design ",
  "A needle that never bends ",
  "An ornate brooch of dwarven design ",
  "An empty wine bottle bearing a pretty label that says, The Wizard of Wines Winery, Red Dragon Crush, 331422-W",
  "A mosaic tile with a multicolored, glazed surface ",
  "A petrified mouse ",
  "A black pirate flag adorned with a dragon's skull and crossbones ",
  "A tiny mechanical crab or spider that moves about when it’s not being observed ",
  "A glass jar containing lard with a label that reads, Griffon Grease",
  "A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body ",
  "A metal urn containing the ashes of a hero ",
  "A tiny brass clockwork cathedral that plays organ music when wound",
  "A bag of one-hundred marbles, ninety-nine are white and the other is black ",
  "A roc's feather ",
  "A soldier doll of an empire long-forgotten ",
  "A small mechanical snapping turtle ",
  "A piece of torn red cloth bearing a royal insignia ",
  "A preserved eyeball attached to a spindly eye-stalk, the nerves twitch occasionally ",
  "A wooden puzzle box that you have not solved ",
  "A shrunken head ",
  "A ransom note for a long-lost relative of yours ",
  "An hourglass filled with glowing sand that falls slower or faster than it should ",
  "An obsidian icon of a forgotten deity ",
  "A recorder carved from brilliant white ash ",
  "A scroll case and scroll scribed with an unfinished spell ",
  "A small stone that shifts through the color spectrum over the course of a week ",
  "A candle whose flame produces no heat nor can it be extinguished or transfer its flame ",
  "A leather necklace lined with troll fangs ",
  "A small piece of gelatinous cube that slightly stings the skin, prolonged exposure may cause a rash ",
  "A hefty piece of magnetic ore that fell from the skies ",
  "A mining pick made from bone ",
  "A coin that appears to have the same sides to everyone except you ",
  "A bag full of tiny mummified frogs ",
  "A box containing a mold for a cast iron key ",
  "A compass that always points to where you were moments ago ",
  "A painting of yourself when you are much older ",
  "A small jewelry box containing three perfectly round and smooth stones ",
  "A wanted poster with your face but someone else's name ",
  "A wooden coin that weighs and sounds like metal ",
  "A tiny soapstone octopus that slowly absorbs water ",
  "A glass lamp with a tiny star suspended inside ",
  "A petrified heart that leaks an oily black substance ",
  "A harp which strings play notes you can only hear after sunset ",
  "A pair of old books written in a lost language ",
  "A map with a large patch of ocean torn out ",
  "A pair of tetrahedral clay dice that always add up to five when rolled together ",
  "A pair of glasses that make you invisible to yourself ",
  "A small frozen glass-like flame that subtly melts and refreezes, morphing over time ",
  "A pewter ring with an inlaid gold band that slowly rotates ",
  "A hand mirror that shows everyone's reflection except your own ",
  "A horn that when blown through produces no sound ",
  "A freshly-excavated humanoid skeleton the size of your hand ",
  "A broken sword hilt with strange runes on the remains of the blade ",
  "A crow's claw ",
  "A thin metal rod that plays out a tune when repeatedly tapped ",
  "A heavy metal coin that floats on water ",
  "A glass bone ",
  "A bouncing ball made of a strange spongy wood ",
  "A small crate box filled with burlap sacks of different exotic coffee beans ",
  "A small mass of grey metallic ooze that can be stretched but not pulled apart ",
  "A letter from a relative addressing you by a different name ",
  "A stone statue of a god with an creature's head ",
  "A small piece of rock that floats almost imperceivably above the ground ",
  "A dagger, simple and sharp, that is incapable of hurting you ",
  "A pair of copper snake earrings of elven design ",
  "A very small and furry creature that always sleeps and never eats ",
  "A grime encrusted bone ring ",
  "A magical acorn ",
  "A green leather pouch full of berries that will never rot ",
  "A silver and glass inkwell that cannot spill ",
  "A child's diary ",
  "A cloak lined with a strange blue fur ",
  "A small crystal sphere that illuminates under starlight ",
  "An odd pocket-sized gizmo that forecasts severe winds and rain coming your way ",
  "A hand sized bell with no clapper but it still rings when played ",
  "A right arm broken off from a statue ",
  "A glass bottle that spins and points to the same place when left alone ",
  "An antique sword, rusted to the scabbard ",
  "A strange barbed choker that makes your voice more resonant ",
  "A small piece of fabric that still holds the scent of a lost love ",
  "A rock with a patch of curious purple moss ",
  "A wooden carving of a strange unknown beast ",
  "A spherical astrolabe that tracks the movements of the planes ",
  "An ivory hair comb that changes your hair color subtly after repeated use ",
  "A razor-sharp piece of metal wrapped in a bloody bandage ",
  "A heavy rust-covered metal rod that whispers words only you hear ",
  "A slender wooden twig which cannot be broken by any man ",
  "A hand puppet that very much resembles another party member ",
  "A wooden leg with a hidden compartment ",
  "A clay teapot that fills itself with fresh hot tea every morning ",
  "A small rabbit-fur pouch filled with ceremonial herbs and incense ",
  "A piece of volcanic rock that has never completely cooled down ",
  "A tiny oragami spider that ocassionaly skitters about on its own ",
  "A small dark glass corked bottle filled to the brim with a powerful liquor ",
  "A piece of a castle wall with a map chalked onto one side ",
  "A small pouch of ashes that will remove ink from the pages they are smeared on ",
  "A pocket-watch that started running backwards the moment you picked it up ",
  "A rope belt that can extend to fifty feet ",
  "A rare copy and translation of a religious manuscript ",
  "A magical signet-ring that leaves a seal in wax that only the person or people you designate can see ",
  "A gnarled walking staff of living wood that can manipulate tiny objects while you hold it ",
  "A perfect forgery of a small masterpiece work of art ",
  "A pair of magically linked bits of gemstone, holding one lets you sense the direction of the other ",
  "A tuning fork that produces the most satisfying note anyone that hears it has ever heard ",
  "A musical washboard made of monster bones ",
  "A merchant's scale you can adjust with a handwave to weigh slightly in your favor ",
  "A necklace of varyingly spherical and odd-shaped shimmering stones that gives the wearer prophetic dreams ",
  "A quiver of twenty arrows that degrade quickly after impact, leaving no trace ",
  "A small log that burns as hot as a roaring campfire and never turns to ash ",
  "An unfinished autobiography ",
  "A large piece of shell from a dragon's egg ",
  "An unflatering water color of a Dragonborn called Vlad"
)

// OUTPUT ARRAYS
var gearReturn = Array()
var trinketReturn = Array()
var weaponReturn = Array()

//CLEAR AND RESET INPUT AND OUTPUTS ONLOAD
var output = "";
window.onload = resetInput;

// GETS RANDOM GEAR ITEMS AND ADD THEM TO THE NEW GEAR ARRAY
function genGear() {
  gearReturn.length = 0;
  output = "";
  var gearNumber = document.getElementById("gearNumberInput").value;
  for (var x = 0; x < gearNumber; x++) {
    const gearRandom = gearItems[Math.floor(Math.random() * gearItems.length - 1)];
    // if we ignore the data errors, they go away right?
    if (gearRandom != undefined) {
        gearReturn.push(gearRandom);
    }
  }

  gearReturn.forEach(print);
  document.getElementById("gearOutput").innerHTML = output;
}

// GETS RANDOM WEAPON ITEMS AND ADD THEM TO THE NEW WEAPON ARRAY
function genWeapon() {
  weaponReturn.length = 0;
  output = "";
  var weaponNumber = document.getElementById("weaponNumberInput").value;
  for (var x = 0; x < weaponNumber; x++) {
    const weaponRandom = weaponItems[Math.floor(Math.random() * weaponItems.length - 1)];

    if (weaponRandom != undefined) {
      weaponReturn.push(weaponRandom);
    }
  }

  weaponReturn.forEach(print);
  document.getElementById("weaponOutput").innerHTML = output;
}

// GETS RANDOM TRINKET ITEMS AND ADD THEM TO THE NEW TRKINKET ARRAY
function genTrinket() {
  trinketReturn.length = 0;
  output = "";
  var trinketNumber = document.getElementById("trinketNumberInput").value;
  for (var x = 0; x < trinketNumber; x++) {
    const trinketRandom = trinketItems[Math.floor(Math.random() * trinketItems.length - 1)];

    if (trinketRandom != undefined) {
        trinketReturn.push(trinketRandom);
    }
  }

  trinketReturn.forEach(print);
  document.getElementById("trinketOutput").innerHTML = output;
}
// COIN LOGIC

function coinGen() {
  var gold;
  var silver;
  var copper;

  var sml;
  var med;
  var lrg;

  var randNum;
  var randRange;

  if (sml = document.getElementById('smallCoinInput').checked) {
    gold = randomAmount(randNum, 10);
    silver = randomAmount(randNum, 15);
    copper = randomAmount(randNum, 20);
    coinPrint(gold, silver, copper);

  } else if (med =document.getElementById('medCoinInput').checked) {
    gold = randomAmount(randNum, 18);
    silver = randomAmount(randNum, 20);
    copper = randomAmount(randNum, 25);
    coinPrint(gold, silver, copper);

  } else if (lrg = document.getElementById('largeCoinInput').checked) {
    gold = randomAmount(randNum, 25);
    silver = randomAmount(randNum, 30);
    copper = randomAmount(randNum, 40);
    coinPrint(gold, silver, copper);
  }
}

function randomAmount (randNum, randRange) {
  randNum = Math.floor((Math.random() * randRange) + 1);
  return randNum;
}

function coinPrint(gold, silver, copper) {
  document.getElementById('goldOutput').innerHTML = (gold + " Gold pieces" + "<br>" + silver) + " Silver Pieces" + "<br>" + copper + " Copper Pieces";

}

// FORMAT GEAR/WEAPONS/TRINKETS OUTPUT STRING
function print(value, index, array) {
  output = output + value + "<br>";
}

function resetInput() {
  document.getElementById('gearNumberInput').value = "";
  document.getElementById('weaponNumberInput').value = "";
  document.getElementById('trinketNumberInput').value = "";
}
