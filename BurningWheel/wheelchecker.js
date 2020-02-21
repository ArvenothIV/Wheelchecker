"use strict";
//Paths*******

var none, one, two, three, four, beyondFour;
var BornClansman, Tender, Herder, DwarvenTinkerer, Delver, DwarvenMiller, DwarvenBrewer, Foreman, HusbandOrWife, Longbeard;
var BornGuilder, Wordbearer, Hauler, Carter, Hawker, DwarvenApprentice, DwarvenJourneyman, Craftsman, Trader;
var BornArtificer, ArtificerArdent, TyroArtificer, ArtificerPath, MaskBearer, MasterOfArches, MasterOfForges, MasterEngraver;
var DwarvenBornNoble, Abecedart, NobleArdent, NobleAxeBearer, DwarvenChronicler, Seneschal, DwarvenTreasurer, HighCaptain, Prince;
var DwarvenFootSoldier, Arbalester, BannerBearer, Hornealler, HostAxeBearer, Greybeard, Khirurgeon, DwarvenQuartermaster, DwarvenCaptain, Artillerist, DwarvenEngineer, Warden;
var Adventurer, Gambler, Oathbreaker, Drunk, Coward, RuneCaster;
var BornWilderElf, WilderlandsRider, Harvester, Gatherer, ElvenFisherman, ElvenShepherd, WilderlandsWanderer, ElvenHuntsman, Chandler, Weaver, ElvenForester, ElvenVinter, ElvenMiller, WilderlandsSongSinger, Spouse, PatriarchOrMatriarch, Elder;
var CitadelBorn, Servitor, CitadelWanderer, CitadelSongSinger, CitadelStudent, Clothier, SoldierProtector, Seafarer, SeaCaptian, Novice, Shaper, ElvenJeweler, ElvenArtisan, KeelMaster, ElvenArtist, Bard, Adjutant, Loremaster, Althing;
var BornEtharch, EtharchStudent, Attendant, Second, EtharchSwordSinger, ElvenSteward, PrinceOrPrincess, EtharchPath;
var ProtectorRider, ElvenHerald, Soother, Ranger, ElvenBowyer, Spearbearer, ProtectorSwordSinger, Outrider, Lancer, Lieutenant, ElvenCaptain, ElvenArmorer, Bladesmith, LordProtector;
var BornPeasant, Farmer, HeadOfHousehold, Midwife, LazyStayabout, PeasantConscript, PeasantPilgrim, HumanMiller, HumanFisherman, HumanShepherd, Woodcutter, Hunter, Trapper, PeasantPeddler, Elder, Augur, ItinerantPriest, RecluseWizard, CountryWife;
var VillageBorn,  Kid, Idiot, VillagerPilgrim, VillagerConscript, VillagerGroom, VillageRunner, VillagePeddler, VillagerShopkeeper, VillagerClerk, VillagerSailor, VillagerLaborer, Miner, VillagerTaskmaster, ServingWench, Hosteller, VillageGuard, VillageSergeant, CorruptSergeant, Tailor, VillagerTaxCollector, Cobbler, Farrier, Butcher, Barber, HumanBrewer, Acolyte, FailedAcolyte, VillagePriest, VenalPriest, HumanVillagerApprentice, HumanVillagerJourneyman, ClothDyer, HumanBowyer, VillagerMasterCraftsman, HumanVinter, Apiarist, MiningEngineer, TownOfficial, VillagerMerchant, VillageWife; 
var CityBorn, CityDwellerRunner, Urchin, CityDwellerBeggar, Courier, CityDwellerLaborer, CityDwellerPilgrim, CityDwellerGroom, Duelist, CoinClipper, Pickpocket, StreetThug, Criminal, ConfidenceMan, CityPeddler, CityDwellerSailor, CityDwellerStudent, Ganymede, Dilettante, NeophyteSorcerer, CityDwellerTempleAcolyte, Sculptor, Painter, Composer, Dramaturge, Performer, HumanTinkerer, Coalman, Seamstress, Barkeep, CityDwellerShopkeeper, Baker, Alewife, Conner, CityDwellerClerk, Scribe, Accountant, Scholar, MoneyLender, CityDwellerTaxCollector,  CityDwellerTaskmaster, MercenaryCaptain, CityGuard, SergeantAtArms, GuardCaptain, HumanCityDwellerApprentice, ApprenticeArtisan, HumanCityDwellerJourneyman, Engraver, Saddler, Saddler, HumanCityDwellerArmorer, Plumber, Locksmith, HumanJeweler, GaolWarden, Advocate, Doctor, Physician, HospitalWarden, Banker, CityDwellerMerchant, Sorcerer, TemplePriest, Judge, MunicipalMinister, HumanArtisan, CityDwellerMasterCraftsman, CityDwellerBishop, Magnate, CityWife;
var HumanBornNoble, Bastard, NoblePage, NobleStudent, NobleSquire, ArcaneDevotee, ReligiousAcolyte, NobleYoungLady, NobleKnight, Lady, Lord, Dame, Baron, Viscount, Count, Duke, NoblePrince, PrinceOfTheBlood;
var Minstrel, CourtJester, CourtArtist, NobleCourtServant, Nurse, NobleCourtGroom, Gardener, Torturer, HumanForester, NobleCourtStudent, NobleCourtPage, ManAtArms, Falconer, HumanHuntsman, HumanHerald, CourtChef, NobleCourtSquire, NobleCourtYoungLady, NobleCourtKnight, Courtier, Governess, NobleCourtChaplain, CourtScorcerer, CourtLawyer, CourtDoctor, HumanChronicler, HumanNobleCourtArmorer, NobleCourtAtilliator, CourtPriest, HumanSteward, MasterofHorses, MasterofHounds, Hostage, Baliff, Justiciar, Coroner, Constable, HumanTreasurer, Chamberlain, AdvisorToTheCourt;
var Castrati, Pardoner, ZealousConvert, MilitaryOrder, GraveDigger, Porter, Notary, Custodian, Interpreter, Archivist, ItinerantMonk, CloisteredNun, ReligiousTempleAcolyte, Priest, Exorcist, Inquisitor, Theologian, Archpriest, Canon, AbbotOrAbbess, ReligiousBishop;
var ProfessionalSoldierRunner, ProfessionalSoldierApprentice, Musician, HumanFootSoldier, Archer, Crossbowman, ProfessionalSoldierSailor, ProfessionalSoldierHerald, Bannerman, Scout, ProfessionalSoldierSergeant, Veteran, Cavalryman, ProfessionalSoldierJourneyman, HumanProfessionalSoldierArmorer, ProfessionalSoldierAtilliator, ProfessionalSoldierChaplian, HumanProfessionalSoldierEngineer, WizardOfWar, HumanQuartermaster, HumanCaptain;
var SonOfAGun, Boy, GalleySlave, SeafaringRatcatcher, Landsman, Drummer, SeafaringSailor, CrazyOldSailor, Purser, Signalman, Pilot, Marine, Bosun, Sailmaker, ShipsDoctor, ShipsCook, ShipsChaplain, WeatherWitch, Navigator, CarpentersMate, ShipsCarpenter, ArtilleristsMate, HumanSeafaringEngineer, OfficersMate, SeafaringSteward, FirstMate, ShipsCaptain;
var BornSlave, DitchDigger, ServitudeAndCaptiveServant, FieldLaborer, CaptiveOfWar, Gaol, HaremSlave, Bondsman;
var Urchin, Apostate, Blackmailer, Kidnapper, Pillager, Vagrant, Cripple, Poacher, Deranged, Outlaw, Fence, Gravedigger, OutcastRatcatcher, OutcastBeggar, Leper, Prostitute, Whoremonger, ItinerantPerformer, Insurrectionist, Cultist, Poisoner, Thug, DesperateKiller, Bandit, Pirate, Smuggler, Freebooter, Strider, MadSummoner, RogueWizard, CrazyWitch, HereticPriest, Thinker; 
var Clansman, Guilder, Artificer, DwarvenNoble, DwarvenHost, DwarvenOutcast;
var Wilderlands, Citadel, Etharch, Protector;
var Peasant, Villager, CityDweller, Noble, NobleCourt, ProfessionalSoldier, Seafaring, Religious, ServitudeAndCaptive, Outcast;
var dwarf, elf, human;


//Special Paths
none = {
	path: "none",
	leadsto: [],
	Requires: []
};
one = {
	path: "one",
	leadsto: [],
	Requires: []
};
two = {
	path: "two",
	leadsto: [],
	Requires: []
};
three = {
	path: "three",
	leadsto: [],
	Requires: []
};
four = {
	path: "four",
	leadsto: [],
	Requires: []
};
beyondFour = {
	path: "beyondFour",
	leadsto: [],
	Requires: []
};
//Clansman
BornClansman = {
	path: "BornClansman",
	leadsto: ["Guilder"],
	Requires: []
};
Tender = {
	path: "Tender",
	leadsto: ["Guilder", "DwarvenHost"],
	Requires: []
};
Herder = {
	path: "Herder",
	leadsto: ["Guilder", "DwarvenHost"],
	Requires: []
};
DwarvenTinkerer = {
	path: "DwarvenTinkerer",
	leadsto: ["Guilder", "DwarvenOutcast"],
	Requires: []
};
Delver = {
	path: "Delver",
	leadsto: ["Guilder", "DwarvenHost"],
	Requires: []
};
DwarvenMiller = {
	path: "DwarvenMiller",
	leadsto: ["Guilder", "DwarvenHost"],
	Requires: []
};
DwarvenBrewer = {
	path: "DwarvenBrewer",
	leadsto: ["Guilder", "DwarvenHost", "DwarvenOutcast"],
	Requires: ["DwarvenMiller", "Longbeard", "Seneschal", "DwarvenCaptain", "Drunk"]
};
Foreman = {
	path: "Foreman",
	leadsto: ["Guilder", "DwarvenHost", "Artificer"],
	Requires: ["Delver", "ArtificerArdent", "DwarvenEngineer"]
};
HusbandOrWife = {
	path: "HusbandOrWife",
	leadsto: ["Guilder", "DwarvenHost", "DwarvenOutcast"],
	Requires: ["three", "four", "beyondFour"]
};
Longbeard = {
	path: "Longbeard",
	leadsto: ["DwarvenOutcast", "DwarvenHost"],
	Requires: ["Foreman", "Greybeard", "Artificer", "Trader", "Seneschal", "Adventurer", "HusbandOrWife"]
};
//Guilder
BornGuilder = {
	path: "BornGuilder",
	leadsto: ["Clansman"],
	Requires: []
};
Wordbearer = {
	path: "Wordbearer",
	leadsto: ["Clansman", "DwarvenHost"],
	Requires: []
};
Hauler = {
	path: "Hauler",
	leadsto: ["Clansman", "DwarvenHost"],
	Requires: []
};
Carter = {
	path: "Carter",
	leadsto: ["Clansman", "DwarvenHost"],
	Requires: []
};
Hawker = {
	path: "Hawker",
	leadsto: ["Clansman", "DwarvenHost", "DwarvenOutcast"],
	Requires: []
};
DwarvenApprentice = {
	path: "DwarvenApprentice",
	leadsto: ["Clansman", "Artificer"],
	Requires: []
};
DwarvenJourneyman = {
	path: "DwarvenJourneyman",
	leadsto: ["Clansman", "Artificer"],
	Requires: ["DwarvenApprentice", "ArtificerArdent"]
};
Craftsman = {
	path: "Craftsman",
	leadsto: ["Clansman", "Artificer"],
	Requires: ["DwarvenJourneyman", "ArtificerPath", "Artillerist", "DwarvenEngineer"]
};
Trader = {
	path: "Trader",
	leadsto: ["Clansman", "DwarvenOutcast"],
	Requires: ["Hawker", "DwarvenJourneyman", "Adventurer", "HusbandOrWife"]
};
//Artificer
BornArtificer = {
	path: "BornArtificer",
	leadsto: ["Clansman"],
	Requires: []
};
ArtificerArdent = {
	path: "ArtificerArdent",
	leadsto: ["Clansman", "Guilder", "DwarvenNoble", "DwarvenHost"],
	Requires: []
};
TyroArtificer = {
	path: "TyroArtificer",
	leadsto: ["Guilder", "DwarvenHost", "DwarvenOutcast"],
	Requires: ["ArtificerArdent", "DwarvenJourneyman"]
};
ArtificerPath = {
	path: "ArtificerPath",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["TyroArtificer", "DwarvenJourneyman"]
};
MaskBearer = {
	path: "MaskBearer",
	leadsto: ["DwarvenHost", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["ArtificerPath"]
};
MasterOfArches = {
	path: "MasterOfArches",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["ArtificerPath"]
};
MasterOfForges = {
	path: "MasterOfForges",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["MaskBearer"]
};
MasterEngraver = {
	path: "MasterEngraver",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["MasterOfArches"]
};
//DwarvenNoble
DwarvenBornNoble = {
	path: "DwarvenBornNoble",
	leadsto: ["Guilder", "Artificer"],
	Requires: []
};
Abecedart = {
	path: "Abecedart",
	leadsto: ["Guilder", "Artificer", "DwarvenOutcast"],
	Requires: []
};
NobleArdent = {
	path: "NobleArdent",
	leadsto: ["Guilder", "Artificer", "DwarvenOutcast"],
	Requires: []
};
NobleAxeBearer = {
	path: "NobleAxeBearer",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["NobleArdent", "BannerBearer"]
};
DwarvenChronicler = {
	path: "DwarvenChronicler",
	leadsto: ["DwarvenHost", "Guilder", "Artificer"],
	Requires: ["Abecedart", "Khirurgeon", "Greybeard"]
};
Seneschal = {
	path: "Seneschal",
	leadsto: ["DwarvenHost", "Guilder"],
	Requires: ["Trader", "Longbeard", "DwarvenQuartermaster", "DwarvenChronicler", "Khirurgeon", "Greybeard"]
};
DwarvenTreasurer = {
	path: "DwarvenTreasurer",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["Seneschal", "ArtificerPath", "Warden"]
};
HighCaptain = {
	path: "HighCaptain",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["NobleAxeBearer", "DwarvenCaptain", "Warden"]
};
Prince = {
	path: "Prince",
	leadsto: ["DwarvenHost", "DwarvenOutcast"],
	Requires: ["DwarvenBornNoble", "NobleAxeBearer"]
};
//DwarvenHost
DwarvenFootSoldier = {
	path: "DwarvenFootSoldier",
	leadsto: ["Clansman", "DwarvenOutcast", "Guilder"],
	Requires: []
};
Arbalester = {
	path: "Arbalester",
	leadsto: ["Clansman", "DwarvenOutcast", "Guilder"],
	Requires: []
};
BannerBearer = {
	path: "BannerBearer",
	leadsto: ["Clansman", "DwarvenOutcast", "Guilder"],
	Requires: []
};
Hornealler = {
	path: "Hornealler",
	leadsto: ["Clansman", "DwarvenOutcast", "Guilder"],
	Requires: []
};
HostAxeBearer = {
	path: "HostAxeBearer",
	leadsto: ["Guilder", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["NobleArdent", "Greybeard", "BannerBearer"]
};
Greybeard = {
	path: "Greybeard",
	leadsto: ["Guilder", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["HostAxeBearer", "Longbeard"]
};
Khirurgeon = {
	path: "Khirurgeon",
	leadsto: ["Guilder", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["Abecedart", "Seneschal", "Greybeard"]
};
DwarvenQuartermaster = {
	path: "DwarvenQuartermaster",
	leadsto: ["Guilder", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["Seneschal", "DwarvenTreasurer", "Trader", "Greybeard"]
};
DwarvenCaptain = {
	path: "DwarvenCaptain",
	leadsto: ["Guilder", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["Prince", "Greybeard"]
};
Artillerist = {
	path: "Artillerist",
	leadsto: ["Artificer", "DwarvenOutcast", "DwarvenNoble"],
	Requires: ["MaskBearer", "Craftsman", "Foreman"]
};
DwarvenEngineer = {
	path: "DwarvenEngineer",
	leadsto: ["Artificer", "DwarvenNoble"],
	Requires: ["Artillerist", "MaskBearer"]
};
Warden = {
	path: "Warden",
	leadsto: ["DwarvenNoble", "DwarvenOutcast"],
	Requires: ["Prince", "DwarvenCaptain", "HighCaptain"]
};
//DwarvenOutcast
Adventurer = {
	path: "Adventurer",
	leadsto: ["Clansman", "Guilder"],
	Requires: []
};
Gambler = {
	path: "Gambler",
	leadsto: ["Clansman"],
	Requires: []
};
Oathbreaker = {
	path: "Oathbreaker",
	leadsto: ["Clansman"],
	Requires: []
};
Drunk = {
	path: "Drunk",
	leadsto: ["Clansman"],
	Requires: []
};
Coward = {
	path: "Coward",
	leadsto: ["DwarvenNoble", "DwarvenOutcast", "Clansman", "Guilder"],
	Requires: []
};
RuneCaster = {
	path: "RuneCaster",
	leadsto: ["DwarvenNoble", "DwarvenOutcast"],
	Requires: []
};
//Wilderlands
BornWilderElf = {
	path: "BornWilderElf",
	leadsto: ["Citadel"],
	Requires: []
};
WilderlandsRider = {
	path: "WilderlandsRider",
	leadsto: ["Citadel", "Protector"],
	Requires: []
};
Harvester = {
	path: "Harvester",
	leadsto: ["Protector"],
	Requires: []
};
Gatherer = {
	path: "Gatherer",
	leadsto: [],
	Requires: []
};
ElvenFisherman = {
	path: "ElvenFisherman",
	leadsto: ["Citadel"],
	Requires: []
};
ElvenShepherd = {
	path: "ElvenShepherd",
	leadsto: ["Citadel"],
	Requires: []
};
WilderlandsWanderer = {
	path: "WilderlandsWanderer",
	leadsto: ["Citadel"],
	Requires: []
};
ElvenHuntsman = {
	path: "ElvenWilderlandsHuntsman",
	leadsto: ["Citadel", "Protector"],
	Requires: []
};
Chandler = {
	path: "Chandler",
	leadsto: ["Citadel", "Protector"],
	Requires: []
};
Weaver = {
	path: "Weaver",
	leadsto: ["Citadel"],
	Requires: []
};
ElvenForester = {
	path: "ElvenForester",
	leadsto: ["Citadel", "Protector"],
	Requires: []
};
ElvenVinter = {
	path: "ElvenVinter",
	leadsto: ["Citadel"],
	Requires: []
};
ElvenMiller = {
	path: "ElvenMiller",
	leadsto: ["Citadel"],
	Requires: []
};
WilderlandsSongSinger = {
	path: "WilderlandsSongSinger",
	leadsto: ["Citadel", "Protector"],
	Requires: []
};
Spouse = {
	path: "Spouse",
	leadsto: ["Citadel", "Protector"],
	Requires: []
};
PatriarchOrMatriarch = {
	path: "PatriarchOrMatriarch",
	leadsto: ["Citadel"],
	Requires: ["Spouse"]
};
Elder = {
	path: "Elder",
	leadsto: ["Citadel", "Etharch"],
	Requires: []
};
//Citadel
CitadelBorn = {
	path: "CitadelBorn",
	leadsto: ["Wilderlands"],
	Requires: []
};
Servitor = {
	path: "Servitor",
	leadsto: ["Wilderlands", "Protector"],
	Requires: []
};
CitadelWanderer = {
	path: "CitadelWanderer",
	leadsto: ["Wilderlands"],
	Requires: []
};
CitadelSongSinger = {
	path: "CitadelSongSinger",
	leadsto: ["Wilderlands", "Protector"],
	Requires: []
};
CitadelStudent = {
	path: "CitadelStudent",
	leadsto: ["Wilderlands", "Protector"],
	Requires: []
};
Clothier = {
	path: "Clothier",
	leadsto: ["Wilderlands", "Protector"],
	Requires: []
};
SoldierProtector = {
	path: "SoldierProtector",
	leadsto: ["Wilderlands", "Protector", "Etharch"],
	Requires: ["CitadelWanderer", "ProtectorRider", "Seafarer", "Spouse", "WilderlandsRider", "ElvenHuntsman", "Etharch", "Protector"]
};
Seafarer = {
	path: "Seafarer",
	leadsto: ["Wilderlands", "Protector"],
	Requires: []
};
SeaCaptian = {
	path: "SeaCaptian",
	leadsto: ["Wilderlands", "Protector", "Etharch"],
	Requires: ["Seafarer", "Adjutant", "Lieutenant", "EtharchSwordSinger", "ProtectorSwordSinger"]
};
Novice = {
	path: "Novice",
	leadsto: ["Wilderlands"],
	Requires: []
};
Shaper = {
	path: "Shaper",
	leadsto: ["Wilderlands", "Protector"],
	Requires: ["Novice"]
};
ElvenJeweler = {
	path: "ElvenJeweler",
	leadsto: ["Wilderlands", "Protector"],
	Requires: ["Shaper"]
};
ElvenArtisan = {
	path: "ElvenArtisan",
	leadsto: ["Wilderlands", "Protector", "Etharch"],
	Requires: ["Shaper"]
};
KeelMaster = {
	path: "KeelMaster",
	leadsto: ["Wilderlands", "Protector"],
	Requires: ["Shaper"]
};
ElvenArtist = {
	path: "ElvenArtist",
	leadsto: ["Wilderlands"],
	Requires: []
};
Bard = {
	path: "Bard",
	leadsto: ["Wilderlands", "Protector"],
	Requires: ["CitadelSongSinger", "WilderlandsSongSinger"]
};
Adjutant = {
	path: "Adjutant",
	leadsto: ["Wilderlands", "Protector"],
	Requires: ["ElvenHerald", "Attendant", "EtharchStudent", "CitadelStudent", "Spouse"]
};
Loremaster = {
	path: "Loremaster",
	leadsto: ["Wilderlands", "Etharch"],
	Requires: ["Bard", "Adjutant", "ElvenSteward", "PatriarchOrMatriarch"]
};
Althing = {
	path: "Althing",
	leadsto: ["Wilderlands", "Protector", "Etharch"],
	Requires: ["PatriarchOrMatriarch", "Loremaster", "ElvenSteward", "Bard", "ElvenArtisan", "SeaCaptian", "ElvenCaptain"]
};
//Etharch
BornEtharch = {
	path: "BornEtharch",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
EtharchStudent = {
	path: "EtharchStudent",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
Attendant = {
	path: "Attendant",
	leadsto: ["Wilderlands", "Citadel", "Protector"],
	Requires: []
};
Second = {
	path: "Second",
	leadsto: ["Wilderlands", "Citadel", "Protector"],
	Requires: ["Attendant", "ElvenBowyer", "Spearbearer", "Seafarer", "SoldierProtector"]
};
EtharchSwordSinger = {
	path: "EtharchSwordSinger",
	leadsto: ["Wilderlands", "Citadel", "Protector"],
	Requires: ["Second", "Lancer", "Lieutenant"]
};
ElvenSteward = {
	path: "ElvenSteward",
	leadsto: ["Citadel", "Protector"],
	Requires: ["Lieutenant", "ElvenArtisan", "Bard", "Loremaster", "Adjutant", "SeaCaptian", "PatriarchOrMatriarch"]
};
PrinceOrPrincess = {
	path: "PrinceOrPrincess",
	leadsto: ["Citadel", "Protector"],
	Requires: ["BornEtharch", "EtharchSwordSinger", "ProtectorSwordSinger"]
};
EtharchPath = {
	path: "EtharchPath",
	leadsto: ["Citadel", "Protector"],
	Requires: ["Loremaster", "PrinceOrPrincess", "BornEtharch"]
};
//Protector
ProtectorRider = {
	path: "ProtectorRider",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
ElvenHerald = {
	path: "ElvenHerald",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
Soother = {
	path: "Soother",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
Ranger = {
	path: "Ranger",
	leadsto: ["Wilderlands"],
	Requires: ["ElvenForester", "WilderlandsWanderer", "CitadelWanderer", "ElvenBowyer", "Second"]
};
ElvenBowyer = {
	path: "ElvenBowyer",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
Spearbearer = {
	path: "Spearbearer",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: []
};
ProtectorSwordSinger = {
	path: "ProtectorSwordSinger",
	leadsto: ["Wilderlands", "Citadel", "Etharch"],
	Requires: ["Second", "SoldierProtector", "Soother", "Spouse", "Spearbearer"]
};
Outrider = {
	path: "Outrider",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: ["ProtectorRider", "WilderlandsRider"]
};
Lancer = {
	path: "Lancer",
	leadsto: ["Wilderlands", "Citadel", "Etharch"],
	Requires: ["Outrider", "Second"]
};
Lieutenant = {
	path: "Lieutenant",
	leadsto: ["Wilderlands", "Citadel", "Etharch"],
	Requires: ["EtharchSwordSinger", "ProtectorSwordSinger", "Lancer", "SeaCaptian"]
};
ElvenCaptain = {
	path: "ElvenCaptain",
	leadsto: ["Wilderlands", "Citadel", "Etharch"],
	Requires: ["Lieutenant", "PrinceOrPrincess", "SeaCaptian", "ElvenSteward", "EtharchSwordSinger", "ProtectorSwordSinger"]
};
ElvenArmorer = {
	path: "ElvenArmorer",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: ["Shaper", "Bladesmith"]
};
Bladesmith = {
	path: "Bladesmith",
	leadsto: ["Wilderlands", "Citadel"],
	Requires: ["ElvenArmorer", "Shaper", "ElvenBowyer", "Spearbearer"]
};
LordProtector = {
	path: "LordProtector",
	leadsto: ["Wilderlands", "Citadel", "LordProtector"],
	Requires: ["ElvenCaptain", "PrinceOrPrincess"]
};
//Peasant
BornPeasant = {
	path: "BornPeasant",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Seafaring", "Religious"],
	Requires: []
};
Farmer = {
	path: "Farmer",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Villager"],
	Requires: []
};
HeadOfHousehold = {
	path: "HeadOfHousehold",
	leadsto: ["Villager", "ProfessionalSoldier"],
	Requires: ["three", "four", "beyondFour"]
};
Midwife = {
	path: "Midwife",
	leadsto: ["Villager", "Outcast"],
	Requires: ["Farmer", "ItinerantPriest"]
};
LazyStayabout = {
	path: "LazyStayabout",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
PeasantConscript = {
	path: "PeasantConscript",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
PeasantPilgrim = {
	path: "PeasantPilgrim",
	leadsto: ["ServitudeAndCaptive", "Outcast", "Villager"],
	Requires: []
};
HumanMiller = {
	path: "HumanMiller",
	leadsto: ["Villager"],
	Requires: []
};
HumanFisherman = {
	path: "HumanFisherman",
	leadsto: ["Villager", "Outcast", "Seafaring"],
	Requires: []
};
HumanShepherd = {
	path: "HumanShepherd",
	leadsto: ["Villager", "Outcast"],
	Requires: []
};
Woodcutter = {
	path: "Woodcutter",
	leadsto: ["Villager", "Outcast"],
	Requires: []
};
Hunter = {
	path: "Hunter",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
Trapper = {
	path: "Trapper",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
PeasantPeddler = {
	path: "PeasantPeddler",
	leadsto: ["ServitudeAndCaptive", "Villager", "CityDweller", "Outcast"],
	Requires: []
};
Elder = {
	path: "Elder",
	leadsto: ["Villager", "Outcast"],
	Requires: ["beyondFour"]
};
Augur = {
	path: "Augur",
	leadsto: ["ServitudeAndCaptive", "Outcast"],
	Requires: ["Midwife", "CountryWife"]
};
ItinerantPriest = {
	path: "ItinerantPriest",
	leadsto: ["Villager", "Outcast", "CityDweller", "Religious"],
	Requires: ["Acolyte", "FailedAcolyte", "ReligiousAcolyte"]
};
RecluseWizard = {
	path: "RecluseWizard",
	leadsto: ["Outcast", "Villager", "CityDweller", "NobleCourt"],
	Requires: ["Augur", "Sorcerer", "CourtScorcerer", "WizardOfWar", "RogueWizard"]
};
CountryWife = {
	path: "CountryWife",
	leadsto: ["Religious"],
	Requires: []
};
//Villager
VillageBorn = {
	path: "VillageBorn",
	leadsto: ["Peasant", "ServitudeAndCaptive", "Seafaring", "Religious"],
	Requires: []
};
Kid = {
	path: "Kid",
	leadsto: ["Peasant", "ServitudeAndCaptive", "Seafaring", "Religious", "ProfessionalSoldier", "CityDweller", "Outcast"],
	Requires: ["two"]
};
Idiot = {
	path: "Idiot",
	leadsto: ["Outcast", "Peasant"],
	Requires: []
};
VillagerPilgrim = {
	path: "VillagerPilgrim",
	leadsto: ["Religious", "ServitudeAndCaptive", "CityDweller"],
	Requires: []
};
VillagerConscript = {
	path: "VillagerConscript",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
VillagerGroom = {
	path: "VillagerGroom",
	leadsto: ["Peasant", "CityDweller", "ProfessionalSoldier"],
	Requires: []
};
VillageRunner = {
	path: "VillageRunner",
	leadsto: ["CityDweller", "Peasant", "ProfessionalSoldier"],
	Requires: []
};
VillagePeddler = {
	path: "VillagePeddler",
	leadsto: ["Peasant", "ServitudeAndCaptive", "CityDweller", "Outcast"],
	Requires: []
};
VillagerShopkeeper = {
	path: "VillagerShopkeeper",
	leadsto: ["CityDweller", "Peasant"],
	Requires: []
};
VillagerClerk = {
	path: "VillagerClerk",
	leadsto: ["CityDweller", "Outcast", "ProfessionalSoldier"],
	Requires: []
};
VillagerSailor = {
	path: "VillagerSailor",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Peasant", "ServitudeAndCaptive", "Seafaring"],
	Requires: []
};
VillagerLaborer = {
	path: "VillagerLaborer",
	leadsto: ["ProfessionalSoldier", "Outcast", "ServitudeAndCaptive", "Peasant"],
	Requires: []
};
Miner = {
	path: "Miner",
	leadsto: ["ProfessionalSoldier", "Outcast", "ServitudeAndCaptive", "Peasant"],
	Requires: ["FieldLaborer", "VillagerLaborer", "CityDwellerLaborer", "PeasantConscript", "VillagerConscript", "Farmer", "HumanFootSoldier"]
};
VillagerTaskmaster = {
	path: "VillagerTaskmaster",
	leadsto: ["CityDweller", "Outcast", "ProfessionalSoldier"],
	Requires: ["VillageSergeant", "ProfessionalSoldier"]
};
ServingWench = {
	path: "ServingWench",
	leadsto: ["Peasant", "CityDweller", "NobleCourt", "ProfessionalSoldier", "ServitudeAndCaptive", "Seafaring", "Outcast", "Religious"],
	Requires: []
};
Hosteller = {
	path: "Hosteller",
	leadsto: ["CityDweller", "Peasant"],
	Requires: ["three", "four", "beyondFour"]
};
VillageGuard = {
	path: "VillageGuard",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Peasant", "ServitudeAndCaptive"],
	Requires: []
};
VillageSergeant = {
	path: "VillageSergeant",
	leadsto: ["ProfessionalSoldier", "ServitudeAndCaptive", "NobleCourt"],
	Requires: ["VillageGuard", "NobleSquire", "NobleCourtSquire", "Freebooter", "SergeantAtArms", "ManAtArms"]
};
CorruptSergeant = {
	path: "CorruptSergeant",
	leadsto: ["ProfessionalSoldier", "ServitudeAndCaptive", "NobleCourt"],
	Requires: ["VillageGuard", "NobleSquire", "NobleCourtSquire", "Freebooter", "SergeantAtArms", "ManAtArms"]
};
Tailor = {
	path: "Tailor",
	leadsto: ["CityDweller", "Peasant"],
	Requires: []
};
VillagerTaxCollector = {
	path: "VillagerTaxCollector",
	leadsto: ["CityDweller", "Peasant", "Outcast"],
	Requires: ["three", "four", "beyondFour"]
};
Cobbler = {
	path: "Cobbler",
	leadsto: ["CityDweller", "Peasant", "ProfessionalSoldier"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice"]
};
Farrier = {
	path: "Farrier",
	leadsto: ["Peasant", "ProfessionalSoldier", "CityDweller"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice"]
};
Butcher = {
	path: "Butcher",
	leadsto: ["CityDweller", "Peasant", "Outcast"],
	Requires: []
};
Barber = {
	path: "Barber",
	leadsto: ["CityDweller", "Peasant", "Outcast"],
	Requires: []
};
HumanBrewer = {
	path: "HumanBrewer",
	leadsto: ["CityDweller", "Peasant", "NobleCourt"],
	Requires: []
};
Acolyte = {
	path: "Acolyte",
	leadsto: ["Peasant", "ServitudeAndCaptive", "CityDweller", "Religious"],
	Requires: []
};
FailedAcolyte = {
	path: "FailedAcolyte",
	leadsto: ["Outcast", "ProfessionalSoldier", "Peasant"],
	Requires: []
};
VillagePriest = {
	path: "VillagePriest",
	leadsto: ["Religious", "Peasant", "CityDweller", "ProfessionalSoldier", "ServitudeAndCaptive", "Outcast", "Seafaring"],
	Requires: ["Acolyte", "FailedAcolyte", "ReligiousAcolyte"]
};
VenalPriest = {
	path: "VenalPriest",
	leadsto: ["Religious", "Peasant", "CityDweller", "ProfessionalSoldier", "ServitudeAndCaptive", "Outcast", "Seafaring"],
	Requires: ["Acolyte", "FailedAcolyte", "ReligiousAcolyte", "NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "VillagerClerk", "CityDwellerClerk", "Religious"]
};
HumanVillagerApprentice = {
	path: "HumanVillagerApprentice",
	leadsto: ["CityDweller", "Peasant", "ProfessionalSoldier", "Seafaring"],
	Requires: []
};
HumanVillagerJourneyman = {
	path: "HumanVillagerJourneyman",
	leadsto: ["CityDweller", "Peasant", "ProfessionalSoldier", "Seafaring"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice"]
};
ClothDyer = {
	path: "ClothDyer",
	leadsto: ["CityDweller", "Peasant"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice"]
};
HumanBowyer = {
	path: "HumanBowyer",
	leadsto: ["ProfessionalSoldier", "Outcast", "Peasant"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice", "HumanHuntsman", "HumanForester", "Archer"]
};
VillagerMasterCraftsman = {
	path: "VillagerMasterCraftsman",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
HumanVinter = {
	path: "HumanVinter",
	leadsto: ["NobleCourt", "Peasant", "Villager"],
	Requires: ["three", "four", "beyondFour"]
};
Apiarist = {
	path: "Apiarist",
	leadsto: ["CityDweller", "Peasant", "NobleCourt"],
	Requires: []
};
MiningEngineer = {
	path: "MiningEngineer",
	leadsto: ["CityDweller", "NobleCourt", "ProfessionalSoldier"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice", "Miner", "NobleCourtStudent", "NobleStudent", "CityDwellerStudent", "HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
TownOfficial = {
	path: "TownOfficial",
	leadsto: ["CityDweller", "Outcast", "ProfessionalSoldier"],
	Requires: ["VillagerClerk", "CityDwellerClerk", "Priest", "NobleCourtStudent", "NobleStudent", "CityDwellerStudent"]
};
VillagerMerchant = {
	path: "VillagerMerchant",
	leadsto: ["CityDweller", "Outcast", "Seafaring"],
	Requires: ["Accountant", "SeaCaptian", "VillagerShopkeeper", "CityDwellerShopkeeper", "Smuggler", "Fence", "HumanVinter", "Chamberlain"]
};
VillageWife = {
	path: "VillageWife",
	leadsto: ["Religious", "CityDweller", "ServitudeAndCaptive"],
	Requires: []
};
//City Dweller
CityBorn = {
	path: "CityBorn",
	leadsto: ["ServitudeAndCaptive", "NobleCourt", "Noble", "Outcast"],
	Requires: []
};
CityDwellerRunner = {
	path: "CityDwellerRunner",
	leadsto: ["Villager", "ProfessionalSoldier"],
	Requires: []
};
Urchin = {
	path: "Urchin",
	leadsto: ["Outcast", "ServitudeAndCaptive", "Villager"],
	Requires: ["two", "three"]
};
CityDwellerBeggar = {
	path: "CityDwellerBeggar",
	leadsto: ["Outcast", "ServitudeAndCaptive", "Villager"],
	Requires: []
};
Courier = {
	path: "Courier",
	leadsto: ["Villager", "ProfessionalSoldier"],
	Requires: []
};
CityDwellerLaborer = {
	path: "CityDwellerLaborer",
	leadsto: ["ProfessionalSoldier", "Outcast", "ServitudeAndCaptive", "Peasant"],
	Requires: []
};
CityDwellerPilgrim = {
	path: "CityDwellerPilgrim",
	leadsto: ["Religious", "ServitudeAndCaptive", "Villager"],
	Requires: []
};
CityDwellerGroom = {
	path: "CityDwellerGroom",
	leadsto: ["Peasant", "Villager", "ProfessionalSoldier"],
	Requires: []
};
Duelist = {
	path: "Duelist",
	leadsto: ["ProfessionalSoldier", "Outcast", "ServitudeAndCaptive"],
	Requires: ["NobleSquire", "NobleCourtSquire", "Outcast", "ProfessionalSoldier", "GuardCaptain", "CityGuard", "VillageGuard"]
};
CoinClipper = {
	path: "CoinClipper",
	leadsto: ["Outcast", "NobleCourt"],
	Requires: []
};
Pickpocket = {
	path: "Pickpocket",
	leadsto: ["Outcast", "Villager", "ServitudeAndCaptive"],
	Requires: []
};
StreetThug = {
	path: "StreetThug",
	leadsto: ["Outcast", "ServitudeAndCaptive", "ProfessionalSoldier"],
	Requires: []
};
Criminal = {
	path: "Criminal",
	leadsto: ["Outcast", "Villager", "ProfessionalSoldier"],
	Requires: []
};
ConfidenceMan = {
	path: "ConfidenceMan",
	leadsto: ["Outcast", "ProfessionalSoldier", "Villager"],
	Requires: []
};
CityPeddler = {
	path: "CityPeddler",
	leadsto: ["Villager", "ServitudeAndCaptive", "Peasant", "Outcast"],
	Requires: []
};
CityDwellerSailor = {
	path: "CityDwellerSailor",
	leadsto: ["ProfessionalSoldier", "Seafaring", "Peasant", "ServitudeAndCaptive"],
	Requires: []
};
CityDwellerStudent = {
	path: "CityDwellerStudent",
	leadsto: ["Peasant", "Villager", "NobleCourt", "ProfessionalSoldier", "Seafaring", "ServitudeAndCaptive", "Outcast", "Religious"],
	Requires: []
};
Ganymede = {
	path: "Ganymede",
	leadsto: ["Outcast", "ServitudeAndCaptive", "NobleCourt"],
	Requires: []
};
Dilettante = {
	path: "Dilettante",
	leadsto: ["Villager", "NobleCourt", "Outcast"],
	Requires: []
};
NeophyteSorcerer = {
	path: "NeophyteSorcerer",
	leadsto: ["Villager", "Peasant", "Outcast", "ServitudeAndCaptive"],
	Requires: []
};
CityDwellerTempleAcolyte = {
	path: "CityDwellerTempleAcolyte",
	leadsto: ["Religious", "Peasant", "Outcast", "ServitudeAndCaptive"],
	Requires: []
};
Sculptor = {
	path: "Sculptor",
	leadsto: ["Outcast", "Peasant", "NobleCourt"],
	Requires: []
};
Painter = {
	path: "Painter",
	leadsto: ["Outcast", "Peasant", "NobleCourt"],
	Requires: []
};
Composer = {
	path: "Composer",
	leadsto: ["Outcast", "Peasant", "NobleCourt"],
	Requires: []
};
Dramaturge = {
	path: "Dramaturge",
	leadsto: ["Outcast", "Peasant", "NobleCourt"],
	Requires: []
};
Performer = {
	path: "Performer",
	leadsto: ["Villager", "Outcast", "ProfessionalSoldier"],
	Requires: []
};
HumanTinkerer = {
	path: "HumanTinkerer",
	leadsto: ["Villager", "Peasant", "Outcast"],
	Requires: []
};
Coalman = {
	path: "Coalman",
	leadsto: ["ServitudeAndCaptive", "Peasant", "Outcast", "ProfessionalSoldier"],
	Requires: []
};
Seamstress = {
	path: "Seamstress",
	leadsto: ["Villager", "Peasant"],
	Requires: []
};
Barkeep = {
	path: "Barkeep",
	leadsto: ["Villager", "Peasant"],
	Requires: []
};
CityDwellerShopkeeper = {
	path: "CityDwellerShopkeeper",
	leadsto: ["Villager", "Peasant"],
	Requires: []
};
Baker = {
	path: "Baker",
	leadsto: ["Villager", "Peasant"],
	Requires: []
};
Alewife = {
	path: "Alewife",
	leadsto: ["Villager", "Peasant", "NobleCourt"],
	Requires: []
};
Conner = {
	path: "Conner",
	leadsto: ["Villager", "Peasant", "NobleCourt"],
	Requires: []
};
CityDwellerClerk = {
	path: "CityDwellerClerk",
	leadsto: ["Villager", "Outcast", "ProfessionalSoldier"],
	Requires: []
};
Scribe = {
	path: "Scribe",
	leadsto: ["Villager", "Peasant"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "Acolyte", "VillagerClerk", "CityDwellerClerk"]
};
Accountant = {
	path: "Accountant",
	leadsto: ["Villager", "Peasant"],
	Requires: ["CityDwellerClerk", "VillagerClerk", "NobleYoungLady", "NobleCourtYoungLady", "NobleStudent", "NobleCourtStudent", "CityDwellerStudent"]
};
Scholar = {
	path: "Scholar",
	leadsto: ["Villager", "Outcast", "NobleCourt"],
	Requires: ["Scribe", "Thinker", "Archivist", "Interpreter", "Custodian", "ReligiousBishop", "CityDwellerBishop", "Sorcerer", "NeophyteSorcerer", "WizardOfWar", "RogueWizard", "RecluseWizard"]
};
MoneyLender = {
	path: "MoneyLender",
	leadsto: ["Villager", "Peasant", "Outcast"],
	Requires: []
};
CityDwellerTaxCollector = {
	path: "CityDwellerTaxCollector",
	leadsto: ["Villager", "Peasant", "Outcast"],
	Requires: ["three", "four", "beyondFour"]
};
CityDwellerTaskmaster = {
	path: "CityDwellerTaskmaster",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast"],
	Requires: ["three", "four", "beyondFour"]
};
MercenaryCaptain = {
	path: "MercenaryCaptain",
	leadsto: ["ProfessionalSoldier", "Seafaring", "Outcast"],
	Requires: ["VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate", "NobleKnight", "NobleCourtKnight"]
};
CityGuard = {
	path: "CityGuard",
	leadsto: ["ProfessionalSoldier", "Outcast"],
	Requires: []
};
SergeantAtArms = {
	path: "SergeantAtArms",
	leadsto: ["ProfessionalSoldier", "Outcast"],
	Requires: ["CityGuard", "VillageGuard", "Marine", "FirstMate", "HumanFootSoldier", "Freebooter", "NobleSquire", "NobleCourtSquire", "ManAtArms", "Cavalryman"]
};
GuardCaptain = {
	path: "GuardCaptain",
	leadsto: ["ProfessionalSoldier", "Outcast", "NobleCourt"],
	Requires: ["NobleKnight", "NobleCourtKnight", "HumanCaptain", "SergeantAtArms", "VillageSergeant", "CorruptSergeant"]
};
HumanCityDwellerApprentice = {
	path: "HumanCityDwellerApprentice",
	leadsto: ["Villager", "Peasant", "ProfessionalSoldier", "Seafaring"],
	Requires: []
};
ApprenticeArtisan = {
	path: "ApprenticeArtisan",
	leadsto: ["Villager", "ProfessionalSoldier"],
	Requires: []
};
HumanCityDwellerJourneyman = {
	path: "HumanCityDwellerJourneyman",
	leadsto: ["Villager", "Peasant", "ProfessionalSoldier", "Seafaring"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice"]
};
Engraver = {
	path: "Engraver",
	leadsto: ["ProfessionalSoldier", "NobleCourt"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
Saddler = {
	path: "Saddler",
	leadsto: ["Villager", "ProfessionalSoldier", "NobleCourt"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
HumanCityDwellerArmorer = {
	path: "HumanCityDwellerArmorer",
	leadsto: ["ProfessionalSoldier", "NobleCourt", "Outcast"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
Plumber = {
	path: "Plumber",
	leadsto: ["NobleCourt", "Outcast"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
Locksmith = {
	path: "Locksmith",
	leadsto: ["Peasant", "Villager"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
HumanJeweler = {
	path: "HumanJeweler",
	leadsto: ["Peasant", "Villager"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
GaolWarden = {
	path: "GaolWarden",
	leadsto: ["Outcast", "Villager", "ProfessionalSoldier", "NobleCourt"],
	Requires: ["HumanBornNoble", "VillagerMerchant", "CityDwellerMerchant", "CorruptSergeant", "VillageSergeant", "ProfessionalSoldierSergeant", "ManAtArms", "Judge"]
};
Advocate = {
	path: "Advocate",
	leadsto: ["Outcast", "Villager", "NobleCourt"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "NobleYoungLady", "NobleCourtYoungLady"]
};
Doctor = {
	path: "Doctor",
	leadsto: ["Outcast", "Villager", "NobleCourt"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "NobleYoungLady", "NobleCourtYoungLady"]
};
Physician = {
	path: "Physician",
	leadsto: ["NobleCourt", "ProfessionalSoldier"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "NobleYoungLady", "NobleCourtYoungLady", "Midwife"]
};
HospitalWarden = {
	path: "HospitalWarden",
	leadsto: ["Outcast", "ServitudeAndCaptive", "Religious"],
	Requires: ["Noble", "NobleCourt", "Religious"]
};
Banker = {
	path: "Banker",
	leadsto: ["NobleCourt", "Noble"],
	Requires: ["VillagerMerchant", "CityDwellerMerchant", "MoneyLender", "HumanSteward", "Accountant", "Chamberlain"]
};
CityDwellerMerchant = {
	path: "CityDwellerMerchant",
	leadsto: ["Villager", "Peasant", "NobleCourt"],
	Requires: ["VillagerMasterCraftsman", "CityDwellerMasterCraftsman", "MasterofHorses", "MasterofHounds", "MoneyLender", "HumanSteward", "HumanJeweler", "Saddler", "HumanNobleCourtArmorer", "HumanCityDwellerArmorer", " HumanProfessionalSoldierArmorer", "Cobbler", "Courtier", "Chamberlain"]
};
Sorcerer = {
	path: "Sorcerer",
	leadsto: ["Villager", "Outcast", "NobleCourt"],
	Requires: ["NeophyteSorcerer", "ArcaneDevotee", "WeatherWitch"]
};
TemplePriest = {
	path: "TemplePriest",
	leadsto: ["Religious", "Villager", "Peasant", "NobleCourt", "ProfessionalSoldier", "Seafaring"],
	Requires: ["ReligiousAcolyte", "ReligiousTempleAcolyte", "CityDwellerTempleAcolyte", "MilitaryOrder"]
};
Judge = {
	path: "Judge",
	leadsto: ["NobleCourt", "Villager"],
	Requires: ["TownOfficial", "VillagerTaxCollector", "CityDwellerTaxCollector", "Baliff", "Justiciar"]
};
MunicipalMinister = {
	path: "MunicipalMinister",
	leadsto: ["Villager", "NobleCourt", "Outcast"],
	Requires: ["TownOfficial", "Scholar", "Priest", "ReligiousBishop", "CityDwellerBishop", "HumanCaptain", "SeaCaptian", "HumanArtisan", "VillagerMasterCraftsman", "CityDwellerMasterCraftsman", "NobleKnight", "NobleCourtKnight", "Courtier", "MasterofHorses"]
};
HumanArtisan = {
	path: "HumanArtisan",
	leadsto: ["ProfessionalSoldier", "NobleCourt"],
	Requires: ["ApprenticeArtisan", "HumanProfessionalSoldierEngineer", "VillagerMasterCraftsman", "CityDwellerMasterCraftsman"]
};
CityDwellerMasterCraftsman = {
	path: "CityDwellerMasterCraftsman",
	leadsto: ["Villager", "NobleCourt", "ProfessionalSoldier"],
	Requires: ["Locksmith", "Plumber", "Engraver", "Saddler", "HumanNobleCourtArmorer", "HumanCityDwellerArmorer", "HumanProfessionalSoldierArmorer", "NobleCourtAtilliator", "ProfessionalSoldierAtilliator", "Cobbler", "HumanBowyer", "VillagerTaskmaster", "CityDwellerTaskmaster"]
};
CityDwellerBishop = {
	path: "CityDwellerBishop",
	leadsto: ["Religious", "NobleCourt"],
	Requires: ["Archpriest", "Canon", "HumanSteward", "Chamberlain"]
};
Magnate = {
	path: "Magnate",
	leadsto: ["Peasant", "Villager", "Noble", "NobleCourt", "ProfessionalSoldier", "Seafaring", "Religious"],
	Requires: ["VillagerMerchant", "CityDwellerMerchant", "MasterofHorses"]
};
CityWife = {
	path: "CityWife",
	leadsto: ["Religious"],
	Requires: []
};
//Noble
HumanBornNoble = {
	path: "HumanBornNoble",
	leadsto: ["Peasant", "Villager", "CityDweller", "NobleCourt", "ProfessionalSoldier", "Seafaring", "ServitudeAndCaptive", "Outcast", "Religious"],
	Requires: []
};
Bastard = {
	path: "Bastard",
	leadsto: ["Outcast", "ProfessionalSoldier", "Religious", "CityDweller"],
	Requires: ["two"]
};
NoblePage = {
	path: "NoblePage",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive"],
	Requires: ["two"]
};
NobleStudent = {
	path: "NobleStudent",
	leadsto: ["CityDweller", "NobleCourt"],
	Requires: []
};
NobleSquire = {
	path: "NobleSquire",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: ["NoblePage", "NobleCourtPage", "ProfessionalSoldier"]
};
ArcaneDevotee = {
	path: "ArcaneDevotee",
	leadsto: ["CityDweller", "NobleCourt", "Outcast"],
	Requires: []
};
ReligiousAcolyte = {
	path: "ReligiousAcolyte",
	leadsto: ["CityDweller", "Religious", "NobleCourt"],
	Requires: []
};
NobleYoungLady = {
	path: "NobleYoungLady",
	leadsto: ["CityDweller", "NobleCourt", "Religious"],
	Requires: ["two", "three"]
};
NobleKnight = {
	path: "NobleKnight",
	leadsto: ["Religious", "ProfessionalSoldier", "CityDweller", "Outcast"],
	Requires: ["NobleSquire", "NobleCourtSquire", "Cavalryman"]
};
Lady = {
	path: "Lady",
	leadsto: ["CityDweller", "Outcast", "Religious", "NobleCourt"],
	Requires: ["NobleYoungLady", "NobleCourtYoungLady", "Courtier", "NobleKnight", "NobleCourtKnight", "CityWife"]
};
Lord = {
	path: "Lord",
	leadsto: ["ProfessionalSoldier", "NobleCourt", "CityDweller"],
	Requires: ["NobleKnight", "NobleCourtKnight", "HumanBornNoble"]
};
Dame = {
	path: "Dame",
	leadsto: ["Religious", "CityDweller", "NobleCourt", "Outcast"],
	Requires: ["Lady", "CityWife"]
};
Baron = {
	path: "Baron",
	leadsto: ["NobleCourt", "ProfessionalSoldier"],
	Requires: ["NobleKnight", "NobleCourtKnight", "Magnate", "MasterofHorses", "HumanSteward", "Lord", "Constable", "Justiciar"]
};
Viscount = {
	path: "Viscount",
	leadsto: ["NobleCourt", "ProfessionalSoldier"],
	Requires: ["NobleKnight", "NobleCourtKnight", "Magnate", "Baron", "Constable", "Justiciar"]
};
Count = {
	path: "Count",
	leadsto: ["NobleCourt", "ProfessionalSoldier"],
	Requires: ["NobleKnight", "NobleCourtKnight", "Magnate", "Constable", "Justiciar"]
};
Duke = {
	path: "Duke",
	leadsto: ["NobleCourt", "ProfessionalSoldier"],
	Requires: ["NobleKnight", "NobleCourtKnight"]
};
NoblePrince = {
	path: "NoblePrince",
	leadsto: ["NobleCourt", "ProfessionalSoldier"],
	Requires: ["NobleKnight", "NobleCourtKnight", "Duke"]
};
PrinceOfTheBlood = {
	path: "PrinceOfTheBlood",
	leadsto: ["NobleCourt", "ProfessionalSoldier", "Religious"],
	Requires: ["HumanBornNoble"]
};
//NobleCourt
Minstrel = {
	path: "Minstrel",
	leadsto: ["CityDweller", "Outcast", "Villager"],
	Requires: []
};
CourtJester = {
	path: "CourtJester",
	leadsto: ["Outcast", "ServitudeAndCaptive"],
	Requires: []
};
CourtArtist = {
	path: "CourtArtist",
	leadsto: ["CityDweller", "Outcast"],
	Requires: ["CourtJester", "Thinker", "Painter", "Scholar", "Sculptor"]
};
NobleCourtServant = {
	path: "NobleCourtServant",
	leadsto: ["Outcast", "ServitudeAndCaptive"],
	Requires: []
};
Nurse = {
	path: "Nurse",
	leadsto: ["Outcast", "ServitudeAndCaptive", "Villager"],
	Requires: []
};
NobleCourtGroom = {
	path: "NobleCourtGroom",
	leadsto: ["CityDweller", "Villager", "ProfessionalSoldier"],
	Requires: []
};
Gardener = {
	path: "Gardener",
	leadsto: ["CityDweller", "ServitudeAndCaptive"],
	Requires: []
};
Torturer = {
	path: "Torturer",
	leadsto: ["Outcast", "ServitudeAndCaptive", "ProfessionalSoldier"],
	Requires: []
};
HumanForester = {
	path: "HumanForester",
	leadsto: ["Peasant", "ProfessionalSoldier", "Villager", "Outcast"],
	Requires: []
};
NobleCourtStudent = {
	path: "NobleCourtStudent",
	leadsto: ["CityDweller", "Noble", "Religious"],
	Requires: []
};
NobleCourtPage = {
	path: "NobleCourtPage",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Noble"],
	Requires: ["two"]
};
ManAtArms = {
	path: "ManAtArms",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Outcast"],
	Requires: ["NoblePage", "NobleCourtPage", "ProfessionalSoldier"]
};
Falconer = {
	path: "Falconer",
	leadsto: ["Peasant", "ProfessionalSoldier", "CityDweller"],
	Requires: []
};
HumanHuntsman = {
	path: "HumanHuntsman",
	leadsto: ["Peasant", "ProfessionalSoldier"],
	Requires: []
};
HumanHerald = {
	path: "HumanHerald",
	leadsto: ["ProfessionalSoldier", "ServitudeAndCaptive", "CityDweller"],
	Requires: []
};
CourtChef = {
	path: "CourtChef",
	leadsto: ["Outcast", "CityDweller"],
	Requires: []
};
NobleCourtSquire = {
	path: "NobleCourtSquire",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast", "Noble"],
	Requires: ["CorruptSergeant", "VillageSergeant", "ProfessionalSoldierSergeant", "Veteran", "NoblePage", "NobleCourtPage", "ManAtArms"]
};
NobleCourtYoungLady = {
	path: "NobleCourtYoungLady",
	leadsto: ["CityDweller", "Noble", "Religious"],
	Requires: ["two", "three"]
};
NobleCourtKnight = {
	path: "NobleCourtKnight",
	leadsto: ["ProfessionalSoldier", "Noble", "Outcast"],
	Requires: ["NobleSquire", "NobleCourtSquire", "Cavalryman"]
};
Courtier = {
	path: "Courtier",
	leadsto: ["CityDweller", "Outcast", "Noble"],
	Requires: []
};
Governess = {
	path: "Governess",
	leadsto: ["Outcast", "ServitudeAndCaptive", "Villager"],
	Requires: ["Nurse", "Midwife", "Lady", "CityWife", "CountryWife", "VillageWife"]
};
NobleCourtChaplain = {
	path: "NobleCourtChaplain",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Religious", "ServitudeAndCaptive"],
	Requires: ["MilitaryOrder", "Priest", "CourtPriest", "VenalPriest", "TemplePriest", "HereticPriest", "VillagePriest", "ItinerantPriest"]
};
CourtScorcerer = {
	path: "CourtScorcerer",
	leadsto: ["Outcast", "CityDweller"],
	Requires: ["ArcaneDevotee", "RogueWizard", "Sorcerer"]
};
CourtLawyer = {
	path: "CourtLawyer",
	leadsto: ["Outcast", "CityDweller", "Religious"],
	Requires: ["CityDwellerStudent", "NobleStudent", "NobleCourtStudent", "Advocate"]
};
CourtDoctor = {
	path: "CourtDoctor",
	leadsto: ["CityDweller", "Outcast"],
	Requires: ["CityDwellerStudent", "NobleStudent", "NobleCourtStudent", "ItinerantMonk", "CloisteredNun", " Priest"]
};
HumanChronicler = {
	path: "HumanChronicler",
	leadsto: ["CityDweller", "Outcast", "Villager"],
	Requires: ["CityDwellerStudent", "NobleStudent", "NobleCourtStudent", "Custodian", "Interpreter", "Archivist", "NobleYoungLady", "NobleCourtYoungLady"]
};
HumanNobleCourtArmorer = {
	path: "HumanNobleCourtArmorer",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
}
NobleCourtAtilliator = {
	path: "NobleCourtAtilliator",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
CourtPriest = {
	path: "CourtPriest",
	leadsto: ["Outcast", "CityDweller", "Religious"],
	Requires: ["NobleCourtChaplain", "ProfessionalSoldierChaplian", "Priest", "ReligiousAcolyte"]
};
HumanSteward = {
	path: "HumanSteward",
	leadsto: ["CityDweller", "Noble", "Outcast", "Religious"],
	Requires: ["TownOfficial", "MunicipalMinister", "Judge", "CourtLawyer", "CourtDoctor", "Governess", "NobleYoungLady", "NobleCourtYoungLady", "Magnate", "Lord"]
};
MasterofHorses = {
	path: "MasterofHorses",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: ["HumanCaptain", "Baron", "Saddler", "VillagerMerchant", "CityDwellerMerchant", "Magnate"]
};
MasterofHounds = {
	path: "MasterofHounds",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: ["HumanCaptain", "Baron", "Saddler", "VillagerMerchant", "CityDwellerMerchant", "Magnate"]
};
Hostage = {
	path: "Hostage",
	leadsto: ["CityDweller", "Noble", "ProfessionalSoldier", "Religious"],
	Requires: ["Noble"]
};
Baliff = {
	path: "Baliff",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Outcast"],
	Requires: ["NobleKnight", "NobleCourtKnight", "HumanBornNoble"]
};
Justiciar = {
	path: "Justiciar",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Religious", "Outcast"],
	Requires: ["Judge", "HumanCaptain", "Baliff", "Lord"]
};
Coroner = {
	path: "Coroner",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: ["HumanSteward", "TownOfficial", "MunicipalMinister", "Judge", "CourtLawyer", "CourtDoctor", "Magnate", "Lord"]
};
Constable = {
	path: "Constable",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Outcast"],
	Requires: ["HumanCaptain", "Baron", "Viscount", "Count", "Duke", "NoblePrince"]
};
HumanTreasurer = {
	path: "HumanTreasurer",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Religious"],
	Requires: ["HumanSteward", "TownOfficial", "MunicipalMinister", "Judge", "CourtLawyer", "CourtDoctor", "Magnate", "Baron", "ReligiousBishop", "CityDwellerBishop", "Viscount", "Count", "Duke"]
};
Chamberlain = {
	path: "Chamberlain",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Religious"],
	Requires: ["Scholar", "HumanSteward", "TownOfficial", "MunicipalMinister", "Judge", "CourtLawyer", "CourtDoctor", "Magnate", "Baron", "ReligiousBishop", "CityDwellerBishop", "Viscount", "Count", "Duke"]
};
AdvisorToTheCourt = {
	path: "AdvisorToTheCourt",
	leadsto: ["Peasant", "Villager", "CityDweller", "Noble", "ProfessionalSoldier", "Seafaring", "ServitudeAndCaptive", "Outcast", "Religious"],
	Requires: ["Thinker", "HumanCaptain", "SeaCaptian", "Magnate", "VillagerMasterCraftsman", "CityDwellerMasterCraftsman", "HumanArtisan", "CityDwellerBishop", "ReligiousBishop", "RogueWizard", "MadSummoner", "HereticPriest", "Dame", "Baron", "Viscount", "Count", "Duke", "NoblePrince"]
};
//Religious
Castrati = {
	path: "Castrati",
	leadsto: ["Outcast", "NobleCourt"],
	Requires: []
};
Pardoner = {
	path: "Pardoner",
	leadsto: ["Peasant", "CityDweller", "Villager", "Outcast"],
	Requires: []
};
ZealousConvert = {
	path: "ZealousConvert",
	leadsto: ["Outcast", "Peasant", "ServitudeAndCaptive", "NobleCourt"],
	Requires: []
};
MilitaryOrder = {
	path: "MilitaryOrder",
	leadsto: ["Villager", "CityDweller", "Noble", "NobleCourt", "ProfessionalSoldier", "Seafaring", "ServitudeAndCaptive", "Outcast"],
	Requires: ["NobleKnight", "NobleCourtKnight", "ProfessionalSoldier"]
};
GraveDigger = {
	path: "GraveDigger",
	leadsto: ["Outcast", "ServitudeAndCaptive", "CityDweller", "Villager"],
	Requires: []
};
Porter = {
	path: "Porter",
	leadsto: ["Outcast", "Villager", "Peasant"],
	Requires: []
};
Notary = {
	path: "Notary",
	leadsto: ["CityDweller", "Outcast", "NobleCourt"],
	Requires: ["VillagerClerk", "CityDwellerClerk", "NobleYoungLady", "NobleCourtYoungLady", "NobleStudent", "NobleCourtStudent", "CityDwellerStudent"]
};
Custodian = {
	path: "Custodian",
	leadsto: ["CityDweller", "Outcast"],
	Requires: ["NobleYoungLady", "NobleCourtYoungLady", "NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "CloisteredNun", "ReligiousTempleAcolyte", "CityDwellerTempleAcolyte", "Inquisitor", "Exorcist", "Theologian"]
};
Interpreter = {
	path: "Interpreter",
	leadsto: ["CityDweller", "NobleCourt", "Villager"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "NobleYoungLady", "NobleCourtYoungLady", "ReligiousTempleAcolyte", "CityDwellerTempleAcolyte", "Exorcist", "Theologian"]
};
Archivist = {
	path: "Archivist",
	leadsto: ["CityDweller,Villager", "NobleCourt"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "CloisteredNun", "Exorcist", "Theologian"]
};
ItinerantMonk = {
	path: "ItinerantMonk",
	leadsto: ["Peasant", "Villager", "Outcast"],
	Requires: []
};
CloisteredNun = {
	path: "CloisteredNun",
	leadsto: ["Peasant", "Outcast", "NobleCourt"],
	Requires: []
};
ReligiousTempleAcolyte = {
	path: "ReligiousTempleAcolyte",
	leadsto: ["CityDweller", "Outcast", "ProfessionalSoldier"],
	Requires: []
};
Priest = {
	path: "Priest",
	leadsto: ["Villager", "Outcast", "ProfessionalSoldier", "NobleCourt"],
	Requires: ["ReligiousTempleAcolyte", "CityDwellerTempleAcolyte", "ReligiousAcolyte"]
};
Exorcist = {
	path: "Exorcist",
	leadsto: ["CityDweller", "Outcast", "NobleCourt"],
	Requires: ["TemplePriest", "ItinerantPriest", "Priest", "CourtPriest", "Archivist"]
};
Inquisitor = {
	path: "Inquisitor",
	leadsto: ["CityDweller", "Outcast", "ProfessionalSoldier", "NobleCourt"],
	Requires: ["TemplePriest", "ItinerantPriest", "Priest", "CourtPriest", "Judge", "Justiciar"]
};
Theologian = {
	path: "Theologian",
	leadsto: ["CityDweller", "Villager", "NobleCourt"],
	Requires: ["Scribe", "Archivist", "CourtLawyer", "Advocate", "Custodian", "Interpreter", "Priest", "ReligiousBishop", "CityDwellerBishop"]
};
Archpriest = {
	path: "Archpriest",
	leadsto: ["CityDweller", "Outcast", "NobleCourt"],
	Requires: ["TemplePriest", "ItinerantPriest", "Priest", "CourtPriest", "NobleCourtChaplain", "ProfessionalSoldierChaplian", "ShipsChaplain"]
};
Canon = {
	path: "Canon",
	leadsto: ["CityDweller", "Outcast", "NobleCourt"],
	Requires: ["Archpriest", "Theologian", "AbbotOrAbbess"]
};
AbbotOrAbbess = {
	path: "AbbotOrAbbess",
	leadsto: ["CityDweller", "Outcast", "NobleCourt"],
	Requires: ["ItinerantMonk", "CloisteredNun", "Theologian", "HumanVinter"]
};
ReligiousBishop = {
	path: "ReligiousBishop",
	leadsto: ["CityDweller", "Outcast", "NobleCourt"],
	Requires: ["Archpriest", "Baron", "Viscount", "Count", "Duke", "Prince"]
};
//Professional Soldier
ProfessionalSoldierRunner = {
	path: "ProfessionalSoldierRunner",
	leadsto: ["Villager", "Peasant", "ServitudeAndCaptive", "Outcast"],
	Requires: []
};
ProfessionalSoldierApprentice = {
	path: "ProfessionalSoldierApprentice",
	leadsto: ["CityDweller", "Peasant", "Villager"],
	Requires: []
};
Musician = {
	path: "Musician",
	leadsto: ["Villager", "Peasant", "ServitudeAndCaptive"],
	Requires: []
};
HumanFootSoldier = {
	path: "HumanFootSoldier",
	leadsto: ["Outcast", "Villager", "ServitudeAndCaptive"],
	Requires: []
};
Archer = {
	path: "Archer",
	leadsto: ["Outcast", "Villager", "ServitudeAndCaptive"],
	Requires: []
};
Crossbowman = {
	path: "Crossbowman",
	leadsto: ["Outcast", "Villager", "ServitudeAndCaptive"],
	Requires: []
};
ProfessionalSoldierSailor = {
	path: "ProfessionalSoldierSailor",
	leadsto: ["Outcast", "Villager", "ServitudeAndCaptive", "Seafaring"],
	Requires: []
};
ProfessionalSoldierHerald = {
	path: "ProfessionalSoldierHerald",
	leadsto: ["Villager", "ServitudeAndCaptive", "NobleCourt"],
	Requires: []
};
Bannerman = {
	path: "Bannerman",
	leadsto: ["Villager", "ServitudeAndCaptive", "NobleCourt"],
	Requires: []
};
Scout = {
	path: "Scout",
	leadsto: ["Peasant", "ServitudeAndCaptive", "Outcast"],
	Requires: []
};
ProfessionalSoldierSergeant = {
	path: "ProfessionalSoldierSergeant",
	leadsto: ["Villager", "ServitudeAndCaptive", "NobleCourt"],
	Requires: ["NobleSquire", "NobleCourtSquire", "VillageGuard", "CityGuard", "HumanFootSoldier"]
};
Veteran = {
	path: "Veteran",
	leadsto: ["Outcast", "NobleCourt"],
	Requires: ["ProfessionalSoldierSergeant", "SergeantAtArms", "VillageSergeant", "NobleKnight", "NobleCourtKnight", "MilitaryOrder", "Freebooter"]
};
Cavalryman = {
	path: "Cavalryman",
	leadsto: ["Villager", "ServitudeAndCaptive", "NobleCourt"],
	Requires: ["NobleKnight", "NobleCourtKnight", "NobleSquire", "NobleCourtSquire", "MasterofHorses", "VillagerGroom", "NobleCourtGroom", "CityDwellerGroom"]
};
ProfessionalSoldierJourneyman = {
	path: "ProfessionalSoldierJourneyman",
	leadsto: ["Villager", "Peasant", "Outcast"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice"]
};
HumanProfessionalSoldierArmorer = {
	path: "HumanProfessionalSoldierArmorer",
	leadsto: ["CityDweller", "Villager", "Outcast"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
ProfessionalSoldierAtilliator = {
	path: "ProfessionalSoldierAtilliator",
	leadsto: ["CityDweller", "NobleCourt", "Outcast"],
	Requires: ["HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
ProfessionalSoldierChaplian = {
	path: "ProfessionalSoldierChaplian",
	leadsto: ["CityDweller", "Outcast", "Seafaring", "NobleCourt", "Religious"],
	Requires: ["Priest", "CourtPriest", "VenalPriest", "TemplePriest", "HereticPriest", "VillagePriest", "ItinerantPriest", "MilitaryOrder"]
};
HumanProfessionalSoldierEngineer = {
	path: "HumanProfessionalSoldierEngineer",
	leadsto: ["CityDweller", "NobleCourt", "Outcast"],
	Requires: ["NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "HumanSeafaringEngineer", "MiningEngineer"]
};
WizardOfWar = {
	path: "WizardOfWar",
	leadsto: ["CityDweller", "NobleCourt", "Outcast"],
	Requires: ["NeophyteSorcerer", "ArcaneDevotee", "WeatherWitch", "RogueWizard", "MadSummoner"]
};
HumanQuartermaster = {
	path: "HumanQuartermaster",
	leadsto: ["Villager", "CityDweller", "NobleCourt"],
	Requires: ["ProfessionalSoldierSergeant", "VillageSergeant", "Veteran", "HumanSteward", "ShipsCaptain", "GuardCaptain", "CityDwellerMerchant", "VillagerMerchant", "ManAtArms", "Smuggler", "Constable", "Lord"]
};
HumanCaptain = {
	path: "HumanCaptain",
	leadsto: ["Peasant", "Villager", "CityDweller", "NobleCourt", "Seafaring", "ServitudeAndCaptive", "Religious", "Outcast"],
	Requires: ["GuardCaptain", "NobleCourtKnight", "NobleKnight", "Lord", "Constable", "Freebooter"]
};
//Seafaring
SonOfAGun = {
	path: "SonOfAGun",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
Boy = {
	path: "Boy",
	leadsto: ["CityDweller", "ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: ["two"]
};
GalleySlave = {
	path: "GalleySlave",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
SeafaringRatcatcher = {
	path: "SeafaringRatcatcher",
	leadsto: ["Outcast", "ServitudeAndCaptive", "CityDweller"],
	Requires: []
};
Landsman = {
	path: "Landsman",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
Drummer = {
	path: "Drummer",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Villager", "Outcast"],
	Requires: []
};
SeafaringSailor = {
	path: "SeafaringSailor",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "CityDweller", "Outcast"],
	Requires: []
};
CrazyOldSailor = {
	path: "CrazyOldSailor",
	leadsto: ["ServitudeAndCaptive", "Outcast"],
	Requires: ["SeafaringSailor", "VillagerSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate", "four", "beyondFour"]
};
Purser = {
	path: "Purser",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier"],
	Requires: ["VillagerClerk", "CityDwellerClerk", "NobleStudent", "NobleCourtStudent", "CityDwellerStudent", "VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor"]
};
Signalman = {
	path: "Signalman",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier"],
	Requires: []
};
Pilot = {
	path: "Pilot",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: ["VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate", "MercenaryCaptain"]
};
Marine = {
	path: "Marine",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: ["VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate", "MercenaryCaptain"]
};
Bosun = {
	path: "Bosun",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: ["VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate", "MercenaryCaptain"]
};
Sailmaker = {
	path: "Sailmaker",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: ["VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate", "Seamstress"]
};
ShipsDoctor = {
	path: "ShipsDoctor",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: ["Doctor", "CourtDoctor", "Physician", "Barber", "NobleStudent", "NobleCourtStudent", "CityDwellerStudent"]
};
ShipsCook = {
	path: "ShipsCook",
	leadsto: ["Villager", "ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: ["VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "Pirate"]
};
ShipsChaplain = {
	path: "ShipsChaplain",
	leadsto: ["Villager", "ProfessionalSoldier", "Religious", "CityDweller"],
	Requires: ["NobleCourtChaplain", "ProfessionalSoldierChaplian", "MilitaryOrder", "ReligiousTempleAcolyte", "CityDwellerTempleAcolyte", "ReligiousAcolyte"]
};
WeatherWitch = {
	path: "WeatherWitch",
	leadsto: ["ServitudeAndCaptive", "CityDweller", "Villager", "Outcast"],
	Requires: ["Augur", "NeophyteSorcerer", "ArcaneDevotee", "RogueWizard"]
};
Navigator = {
	path: "Navigator",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: ["Pilot", "MercenaryCaptain", "VillagerSailor", "SeafaringSailor", "CityDwellerSailor", "ProfessionalSoldierSailor", "NobleCourtStudent", "NobleStudent", "CityDwellerStudent"]
};
CarpentersMate = {
	path: "CarpentersMate",
	leadsto: ["ProfessionalSoldier", "ServitudeAndCaptive", "Villager", "Outcast"],
	Requires: []
};
ShipsCarpenter = {
	path: "ShipsCarpenter",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: ["HumanVillagerApprentice", "HumanCityDwellerApprentice", "ProfessionalSoldierApprentice", "CarpentersMate"]
};
ArtilleristsMate = {
	path: "ArtilleristsMate",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: []
};
HumanSeafaringEngineer = {
	path: "HumanSeafaringEngineer",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: ["ArtilleristsMate", "NobleCourtStudent", "NobleStudent", "CityDwellerStudent", "HumanProfessionalSoldierEngineer", "HumanVillagerJourneyman", "HumanCityDwellerJourneyman", "ProfessionalSoldierJourneyman"]
};
OfficersMate = {
	path: "OfficersMate",
	leadsto: ["ServitudeAndCaptive", "Outcast", "ProfessionalSoldier", "CityDweller"],
	Requires: ["two"]
};
SeafaringSteward = {
	path: "SeafaringSteward",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: ["Purser", "VillagerMerchant", "CityDwellerMerchant", "HumanSteward", "Accountant"]
};
FirstMate = {
	path: "FirstMate",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive", "Outcast"],
	Requires: ["NobleKnight", "NobleCourtKnight"]
};
ShipsCaptain = {
	path: "ShipsCaptain",
	leadsto: ["Peasant", "Villager", "CityDweller", "NobleCourt", "ProfessionalSoldier", "Religious", "Outcast"],
	Requires: ["FirstMate", "NobleKnight", "NobleCourtKnight", "MilitaryOrder", "MercenaryCaptain"]
};
//Servitude and Captives
BornSlave = {
	path: "BornSlave",
	leadsto: ["ProfessionalSoldier", "Outcast"],
	Requires: []
};
DitchDigger = {
	path: "DitchDigger",
	leadsto: ["ProfessionalSoldier", "Outcast"],
	Requires: []
};
ServitudeAndCaptiveServant = {
	path: "ServitudeAndCaptiveServant",
	leadsto: ["ProfessionalSoldier", "Outcast", "CityDweller", "NobleCourt"],
	Requires: []
};
FieldLaborer = {
	path: "FieldLaborer",
	leadsto: ["ProfessionalSoldier", "Outcast"],
	Requires: []
};
CaptiveOfWar = {
	path: "CaptiveOfWar",
	leadsto: ["ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: []
};
Gaol = {
	path: "Gaol",
	leadsto: ["ProfessionalSoldier", "Outcast", "CityDweller"],
	Requires: []
};
HaremSlave = {
	path: "HaremSlave",
	leadsto: ["Outcast"],
	Requires: []
};
Bondsman = {
	path: "Bondsman",
	leadsto: ["Peasant", "ProfessionalSoldier", "Outcast"],
	Requires: []
};
//Outcast
Urchin = {
	path: "Urchin",
	leadsto: ["Peasant", "ProfessionalSoldier", "ServitudeAndCaptive"],
	Requires: ["two"]
};
Apostate = {
	path: "Apostate",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Religious"],
	Requires: []
};
Blackmailer = {
	path: "Blackmailer",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Villager", "Seafaring"],
	Requires: []
};
Kidnapper = {
	path: "Kidnapper",
	leadsto: ["CityDweller", "ProfessionalSoldier", "Villager", "Seafaring"],
	Requires: []
};
Pillager = {
	path: "Pillager",
	leadsto: ["ProfessionalSoldier", "ServitudeAndCaptive", "CityDweller", "Seafaring"],
	Requires: []
};
Vagrant = {
	path: "Vagrant",
	leadsto: ["CityDweller", "ProfessionalSoldier", "ServitudeAndCaptive"],
	Requires: []
};
Cripple = {
	path: "Cripple",
	leadsto: ["ServitudeAndCaptive", "CityDweller"],
	Requires: []
};
Poacher = {
	path: "Poacher",
	leadsto: ["ServitudeAndCaptive", "ProfessionalSoldier", "Villager"],
	Requires: []
};
Deranged = {
	path: "Deranged",
	leadsto: ["ServitudeAndCaptive"],
	Requires: []
};
Outlaw = {
	path: "Outlaw",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Villager", "Peasant", "Seafaring"],
	Requires: []
};
Fence = {
	path: "Fence",
	leadsto: ["ServitudeAndCaptive", "CityDweller", "ProfessionalSoldier"],
	Requires: ["VillagerShopkeeper", "CityDwellerShopkeeper", "Barkeep", "MoneyLender"]
};
Gravedigger = {
	path: "Gravedigger",
	leadsto: ["ProfessionalSoldier", "ServitudeAndCaptive"],
	Requires: []
};
OutcastRatcatcher = {
	path: "OutcastRatcatcher",
	leadsto: [],
	Requires: []
};
OutcastBeggar = {
	path: "OutcastBeggar",
	leadsto: ["Peasant", "ProfessionalSoldier", "Villager"],
	Requires: []
};
Leper = {
	path: "Leper",
	leadsto: ["ServitudeAndCaptive", "Peasant"],
	Requires: []
};
Prostitute = {
	path: "Prostitute",
	leadsto: ["Peasant", "Villager", "CityDweller", "ServitudeAndCaptive"],
	Requires: []
};
Whoremonger = {
	path: "Whoremonger",
	leadsto: ["Villager", "CityDweller", "ProfessionalSoldier"],
	Requires: ["CorruptSergeant", "VenalPriest", "VillagerShopkeeper", "CityDwellerShopkeeper", "Barkeep", "MoneyLender"]
};
ItinerantPerformer = {
	path: "ItinerantPerformer",
	leadsto: ["Peasant", "Villager", "CityDweller", "ProfessionalSoldier"],
	Requires: []
};
Insurrectionist = {
	path: "Insurrectionist",
	leadsto: ["CityDweller", "ProfessionalSoldier"],
	Requires: []
};
Cultist = {
	path: "Cultist",
	leadsto: ["Peasant", "ServitudeAndCaptive", "ProfessionalSoldier"],
	Requires: []
};
Poisoner = {
	path: "Poisoner",
	leadsto: ["CityDweller", "Villager", "NobleCourt"],
	Requires: []
};
Thug = {
	path: "Thug",
	leadsto: ["ProfessionalSoldier", "CityDweller"],
	Requires: []
};
DesperateKiller = {
	path: "DesperateKiller",
	leadsto: ["ProfessionalSoldier", "CityDweller", "ServitudeAndCaptive"],
	Requires: []
};
Bandit = {
	path: "Bandit",
	leadsto: ["ProfessionalSoldier", "Peasant"],
	Requires: []
};
Pirate = {
	path: "Pirate",
	leadsto: ["Seafaring", "CityDweller", "Villager"],
	Requires: []
};
Smuggler = {
	path: "Smuggler",
	leadsto: ["ProfessionalSoldier", "CityDweller", "Villager"],
	Requires: []
};
Freebooter = {
	path: "Freebooter",
	leadsto: ["ProfessionalSoldier", "Peasant", "ServitudeAndCaptive"],
	Requires: ["Bandit", "Smuggler", "NobleSquire", "NobleCourtSquire", "NobleKnight", "NobleCourtKnight", "CityGuard", "VillageGuard", "Marine", "ProfessionalSoldier"]
};
Strider = {
	path: "Strider",
	leadsto: ["ProfessionalSoldier", "Peasant", "ServitudeAndCaptive"],
	Requires: ["HumanBornNoble", "Hunter", "Trapper", "HumanHuntsman", "Scout"]
};
MadSummoner = {
	path: "MadSummoner",
	leadsto: ["Peasant", "CityDweller", "Seafaring"],
	Requires: ["Cultist", "Augur", "NeophyteSorcerer", "ArcaneDevotee"]
};
RogueWizard = {
	path: "RogueWizard",
	leadsto: ["ServitudeAndCaptive", "Seafaring", "Religious"],
	Requires: ["Cultist", "Augur", "NeophyteSorcerer", "ArcaneDevotee"]
};
CrazyWitch = {
	path: "CrazyWitch",
	leadsto: ["Peasant", "ServitudeAndCaptive", "Villager"],
	Requires: ["WeatherWitch", "NobleYoungLady", "NobleCourtYoungLady", "Augur", "Midwife"]
};
HereticPriest = {
	path: "HereticPriest",
	leadsto: ["Peasant", "ServitudeAndCaptive"],
	Requires: ["Acolyte", "Cultist", "Apostate", "Theologian", "VenalPriest", "Interpreter", "Archivist"]
};
Thinker = {
	path: "Thinker",
	leadsto: ["Peasant", "Villager", "CityDweller", "Noble", "NobleCourt", "ProfessionalSoldier", "Religious", "ServitudeAndCaptive", "Seafaring"],
	Requires: ["four", "beyondFour"]
};




//Settings *****
//Dwarf
Clansman = {
	setting: "Clansman",
	paths: [BornClansman, Tender, Herder, DwarvenTinkerer, Delver, DwarvenMiller, DwarvenBrewer, Foreman, HusbandOrWife, Longbeard]
};
Guilder = {
	setting: "Guilder",
	paths: [BornGuilder, Wordbearer, Hauler, Carter, Hawker, DwarvenApprentice, DwarvenJourneyman, Craftsman, Trader]
};
Artificer = {
	setting: "Artificer",
	paths: [BornArtificer, ArtificerArdent, TyroArtificer, ArtificerPath, MaskBearer, MasterOfArches, MasterOfForges, MasterEngraver]
};
DwarvenNoble = {
	setting: "DwarvenNoble",
	paths: [DwarvenBornNoble, Abecedart, NobleArdent, NobleAxeBearer, DwarvenChronicler, Seneschal, DwarvenTreasurer, HighCaptain, Prince]
};
DwarvenHost = {
	setting: "DwarvenHost",
	paths: [DwarvenFootSoldier, Arbalester, BannerBearer, Hornealler, HostAxeBearer, Greybeard, Khirurgeon, DwarvenQuartermaster, DwarvenCaptain, Artillerist, DwarvenEngineer, Warden]
};
DwarvenOutcast = {
	setting: "DwarvenOutcast",
	paths: [Adventurer, Gambler, Oathbreaker, Drunk, Coward, RuneCaster]
};
//Elf
Wilderlands = {
	setting: "Wilderlands",
	paths: [BornWilderElf, WilderlandsRider, Harvester, Gatherer, ElvenFisherman, ElvenShepherd, WilderlandsWanderer, ElvenHuntsman, Chandler, Weaver, ElvenForester, ElvenVinter, ElvenMiller, WilderlandsSongSinger, Spouse, PatriarchOrMatriarch, Elder]
};
Citadel = {
	setting: "Citadel",
	paths: [CitadelBorn, Servitor, CitadelWanderer, CitadelSongSinger, CitadelStudent, Clothier, SoldierProtector, Seafarer, SeaCaptian, Novice, Shaper, ElvenJeweler, ElvenArtisan, KeelMaster, ElvenArtist, Bard, Adjutant, Loremaster, Althing]
};
Etharch = {
	setting: "Etharch",
	paths: [BornEtharch, EtharchStudent, Attendant, Second, EtharchSwordSinger, ElvenSteward, PrinceOrPrincess, EtharchPath]
};
Protector = {
	setting: "Protector",
	paths: [ProtectorRider, ElvenHerald, Soother, Ranger, ElvenBowyer, Spearbearer, ProtectorSwordSinger, Outrider, Lancer, Lieutenant, ElvenCaptain, ElvenArmorer, Bladesmith, LordProtector]
};
//Human
Peasant = {
	setting: "Peasant",
	paths: [BornPeasant, Farmer, HeadOfHousehold, Midwife, LazyStayabout, PeasantConscript, PeasantPilgrim, HumanMiller, HumanFisherman, HumanShepherd, Woodcutter, Hunter, Trapper, PeasantPeddler, Elder, Augur, ItinerantPriest, RecluseWizard, CountryWife]
};
Villager = {
	setting: "Villager",
	paths: [VillageBorn, Kid, Idiot, VillagerPilgrim, VillagerConscript, VillagerGroom, VillageRunner, VillagePeddler, VillagerShopkeeper, VillagerClerk, VillagerSailor, VillagerLaborer, Miner, VillagerTaskmaster, ServingWench, Hosteller, VillageGuard, VillageSergeant, CorruptSergeant, Tailor, VillagerTaxCollector, Cobbler, Farrier, Butcher, Barber, HumanBrewer, Acolyte, FailedAcolyte, VillagePriest, VenalPriest, HumanVillagerApprentice, HumanVillagerJourneyman, ClothDyer, HumanBowyer, VillagerMasterCraftsman, HumanVinter, Apiarist, MiningEngineer, TownOfficial, VillagerMerchant, VillageWife]
};
CityDweller = {
	setting: "CityDweller",
	paths: [CityBorn, CityDwellerRunner, Urchin, CityDwellerBeggar, Courier, CityDwellerLaborer, CityDwellerPilgrim, CityDwellerGroom, Duelist, CoinClipper, Pickpocket, StreetThug, Criminal, ConfidenceMan, CityPeddler, CityDwellerSailor, CityDwellerStudent, Ganymede, Dilettante, NeophyteSorcerer, CityDwellerTempleAcolyte, Sculptor, Painter, Composer, Dramaturge, Performer, HumanTinkerer, Coalman, Seamstress, Barkeep, CityDwellerShopkeeper, Baker, Alewife, Conner, CityDwellerClerk, Scribe, Accountant, Scholar, MoneyLender, CityDwellerTaxCollector, CityDwellerTaskmaster, MercenaryCaptain, CityGuard, SergeantAtArms, GuardCaptain, HumanCityDwellerApprentice, ApprenticeArtisan, HumanCityDwellerJourneyman, Engraver, Saddler, HumanCityDwellerArmorer, Plumber, Locksmith, HumanJeweler, GaolWarden, Advocate, Doctor, Physician, HospitalWarden, Banker, CityDwellerMerchant, Sorcerer, TemplePriest, Judge, MunicipalMinister, HumanArtisan, CityDwellerMasterCraftsman, CityDwellerBishop, Magnate, CityWife]
};
Noble = {
	setting: "Noble",
	paths: [HumanBornNoble, Bastard, NoblePage, NobleStudent, NobleSquire, ArcaneDevotee, ReligiousAcolyte, NobleYoungLady, NobleKnight, Lady, Lord, Dame, Baron, Viscount, Count, Duke, NoblePrince, PrinceOfTheBlood]
};
NobleCourt = {
	setting: "NobleCourt",
	paths: [Minstrel, CourtJester, CourtArtist, NobleCourtServant, Nurse, NobleCourtGroom, Gardener, Torturer, HumanForester, NobleCourtStudent, NobleCourtPage, ManAtArms, Falconer, HumanHuntsman, HumanHerald, CourtChef, NobleCourtSquire, NobleCourtYoungLady, NobleCourtKnight, Courtier, Governess, NobleCourtChaplain, CourtScorcerer, CourtLawyer, CourtDoctor, HumanChronicler, HumanNobleCourtArmorer, NobleCourtAtilliator, CourtPriest, HumanSteward, MasterofHorses, MasterofHounds, Hostage, Baliff, Justiciar, Coroner, Constable, HumanTreasurer, Chamberlain, AdvisorToTheCourt]
};
Religious = {
	setting: "Religious",
	paths: [Castrati, Pardoner, ZealousConvert, MilitaryOrder, GraveDigger, Porter, Notary, Custodian, Interpreter, Archivist, ItinerantMonk, CloisteredNun, ReligiousTempleAcolyte, Priest, Exorcist, Inquisitor, Theologian, Archpriest, Canon, AbbotOrAbbess, ReligiousBishop]
};
ProfessionalSoldier = {
	setting: "ProfessionalSoldier",
	paths: [ProfessionalSoldierRunner, ProfessionalSoldierApprentice, Musician, HumanFootSoldier, Archer, Crossbowman, ProfessionalSoldierSailor, ProfessionalSoldierHerald, Bannerman, Scout, ProfessionalSoldierSergeant, Veteran, Cavalryman, ProfessionalSoldierJourneyman, HumanProfessionalSoldierArmorer, ProfessionalSoldierAtilliator, ProfessionalSoldierChaplian, HumanProfessionalSoldierEngineer, WizardOfWar, HumanQuartermaster, HumanCaptain]
};
Seafaring = {
	setting: "Seafaring",
	paths: [SonOfAGun, Boy, GalleySlave, SeafaringRatcatcher, Landsman, Drummer, SeafaringSailor, CrazyOldSailor, Purser, Signalman, Pilot, Marine, Bosun, Sailmaker, ShipsDoctor, ShipsCook, ShipsChaplain, WeatherWitch, Navigator, CarpentersMate, ShipsCarpenter, ArtilleristsMate, HumanSeafaringEngineer, OfficersMate, SeafaringSteward, FirstMate, ShipsCaptain]
};
ServitudeAndCaptive = {
	setting: "ServitudeAndCaptive",
	paths: [BornSlave, DitchDigger, ServitudeAndCaptiveServant, FieldLaborer, CaptiveOfWar, Gaol, HaremSlave, Bondsman]
};
Outcast = {
	setting: "Outcast",
	paths: [Urchin, Apostate, Blackmailer, Kidnapper, Pillager, Vagrant, Cripple, Poacher, Deranged, Outlaw, Fence, Gravedigger, OutcastRatcatcher, OutcastBeggar, Leper, Prostitute, Whoremonger, ItinerantPerformer, Insurrectionist, Cultist, Poisoner, Thug, DesperateKiller, Bandit, Pirate, Smuggler, Freebooter, Strider, MadSummoner, RogueWizard, CrazyWitch, HereticPriest, Thinker]
};


//races ****
dwarf = {
	race: "dwarf",
	pathsettings: [Clansman, Guilder, Artificer, DwarvenNoble, DwarvenHost, DwarvenOutcast]
};
elf = {
	race: "elf",
	pathsettings: [Wilderlands, Citadel, Etharch, Protector]
};
human = {
	race: "human",
	pathsettings: [Peasant, Villager, CityDweller, Noble, NobleCourt, Religious, ProfessionalSoldier, Seafaring, ServitudeAndCaptive, Outcast]
};

//Starting Paths
var DwarfBorn = [BornClansman, BornGuilder, BornArtificer, DwarvenBornNoble];
var ElvenBorn = [BornWilderElf, CitadelBorn, BornEtharch];
var HumanBorn = [BornPeasant, VillageBorn, CityBorn, HumanBornNoble, SonOfAGun, BornSlave]

var races = [dwarf,elf,human];
var currentRace, currentSetting, currentStart, targetPath;

var resetDropBox = function (ID) {
	var select = document.getElementById(ID);
	var length = select.options.length;
	for (var i = 0; i < length; i++) {
  		select.options[i] = null;
	}
};

var filtersetting = function () {
	resetDropBox("Settings");
	var target;
	races.forEach((item, index, array) => {
		if (item.race === this.value)
		{
			target = item;
		}
	});
	currentRace = target;
	target.pathsettings.forEach((item, index, array) => {
		var sel = document.getElementById("Settings");
		var opt = new Option(item.setting,item.setting);
		sel.options[index] = opt;
	});
	resetDropBox("StartingPath");
	if (currentRace.race == "dwarf") {
		DwarfBorn.forEach((item, index, array) => {
			var sel = document.getElementById("StartingPath");
			var opt = new Option(item.path,item.path);
			sel.options[index] = opt;
		});
	} else if (currentRace.race == "elf") {
		ElvenBorn.forEach((item, index, array) => {
			var sel = document.getElementById("StartingPath");
			var opt = new Option(item.path,item.path);
			sel.options[index] = opt;
		});
	} else if (currentRace.race == "human") {
		HumanBorn.forEach((item, index, array) => {
			var sel = document.getElementById("StartingPath");
			var opt = new Option(item.path,item.path);
			sel.options[index] = opt;
		});
	}
};

var filterpath = function () {
	resetDropBox("EndingPath");
	var target;
	currentRace.pathsettings.forEach((item, index, array) => {
		if (item.setting === this.value)
		{
			target = item;
		}
	});
	currentSetting = target;
	target.paths.forEach((item, index, array) => {
		var sel = document.getElementById("EndingPath");
		var opt = new Option(item.path,item.path);
		sel.options[index] = opt;
	});
};

var filterstart = function () {
	var target;
	if (currentRace == dwarf)
	{
		DwarfBorn.forEach((item, index, array) => {
			if (item.path === this.value)
			{
				target = item;
			}
		});
	}
	if (currentRace == elf)
	{
		ElvenBorn.forEach((item, index, array) => {
			if (item.path === this.value)
			{
				target = item;
			}
		});
	}
	if (currentRace == human)
	{
		HumanBorn.forEach((item, index, array) => {
			if (item.path === this.value)
			{
				target = item;
			}
		});
	}
	currentStart = target;
};

var setTargetPath = function () {
	var target;
	if (!currentSetting)
	{
		currentSetting = getSettingObject(document.getElementById("Settings").options[document.getElementById("Settings").selectedIndex].value, getRaceObject(document.getElementById("Races").options[document.getElementById("Races").selectedIndex].value));
	}
	currentSetting.paths.forEach((item, index, array) => {
		if (item.path === this.value)
		{
			target = item;
		}
	});
	targetPath = target;
};

var itemNotFound = function(array, thingToFind) {
	var found = false;
	for(var i = 0; i < array.length; i++) {
	    if (array[i].path == thingToFind.path) {
	        found = true;
	        break;
	    }
	}
	return found;
};

var getLatestSetting = function(path, currentRace) {
	var latestSetting;
	currentRace.pathsettings.forEach((item1, index1, array1) => {
		item1.paths.forEach((item2, index2, array2) => {
			if (item2 === path) {
				latestSetting = item1;
			}
		});
	});
	return latestSetting;
};

var checkForTwo = function(path) {
	var pathRequiresTwo = false;
	path.Requires.forEach((item, index, array) => {
		if (item === two.path) {
			pathRequiresTwo = true;
		}
	});
	return pathRequiresTwo;
};

var checkForThree = function(path) {
	var pathRequiresThree = false;
	path.Requires.forEach((item, index, array) => {
		if (item === three.path) {
			pathRequiresThree = true;
		}
	});
	return pathRequiresThree;
};

var checkForFour = function(path) {
	var pathRequiresFour = false;
	path.Requires.forEach((item, index, array) => {
		if (item === four.path) {
			pathRequiresFour = true;
		}
	});
	return pathRequiresFour;
};

var checkForBeyondfour = function(path) {
	var pathRequiresFour = false;
	path.Requires.forEach((item, index, array) => {
		if (item === beyondFour.path) {
			pathRequiresFour = true;
		}
	});
	return pathRequiresFour;
};

var checkForBorn = function(path, race) {
	var isBorn = false;
	race.forEach((item, index, array) => {
		if (item === path) {
			isBorn = true;
		}
	});
	return isBorn;
};

var checkForRequirement = function(pathArray, pathToCheck) {
	var RequirementMet = false;
	//console.log(pathArray, pathToCheck);
	pathToCheck.Requires.forEach((item1, index1, array1) => {
		pathArray.forEach((item2, index2, array2) => {
			//console.log(item2, item1);
			if (item1 === item2) {
				RequirementMet = true;
			}
		});
	});
	return RequirementMet;
};

var checkForTarget = function(currentPath) {
	var nextJump;
	var correctSetting;
	var correctSettingInLeadsTo = false;
	var sameSettingCurrent = false;
	var sameSettingTarget = false;
	// check for target in same path
	currentSetting.paths.forEach((item, index, array) => {
		if(item === currentPath) {
			sameSettingCurrent = true;
		}
		if(item === targetPath) {
			sameSettingTarget = true;
		}
	});

	if (sameSettingTarget === true && sameSettingCurrent === true) {
		nextJump == targetPath;
	}

	if (nextJump === null) {
		// check for target setting in leads to
		currentPath.leadsto.forEach((item1, index1, array1) => {
			if(item1 === currentSetting) {
				correctSetting = item1;
				correctSettingInLeadsTo = true;
			}
		});
		if (correctSettingInLeadsTo === true) {
			correctSetting.paths.forEach((item2, index2, array2) => {
				if (item2 === targetPath) {
					nextJump = targetPath;
				}
			});
		}
		else {
			//do things
		}
	}
	
	return nextJump;
};

var checkForMatch = function(currentPaths, pathToAdd)
{
	let check = false;
	currentPaths.forEach((item, index, array) => {
		if (item.path == pathToAdd.path)
		{
			check = true;
		}
	});
	return check;
};

var checkForSameList = function(list1, list2, size)
{
	let check = false;
	if (list2) 
	{
		let matches = 0;
		list1.forEach((item, index, array) => {
			if (item.path == list2[index].path)
			{
				matches++;
			}
		});
		if (matches == size)
		{
			check = true;
		}
	}
	return check;
};

var getRaceObject = function (raceName) {
	var raceObject = dwarf;
	if (raceName === "elf")
	{
		return elf;
	}
	if (raceName === "dwarf")
	{
		return dwarf;
	}
	if (raceName === "human")
	{
		return human;
	}
	return raceObject;
};

var getBornList = function (race) {
	var BornList = DwarfBorn;
	if (race === "elf")
	{
		BornList = ElvenBorn;
	}
	if (race === "dwarf")
	{
		BornList = DwarfBorn;
	}
	if (race === "human")
	{
		BornList = HumanBorn;
	}
	return BornList;
};

var getSettingObject = function (settingName, race) {
	var settingObject;
	race.pathsettings.forEach((item1, index1, array1) => {
		if (item1.setting === settingName) {
			settingObject = item1;
		}
	});
	return settingObject;
};

var getPathObject = function (pathName, race) {
	var pathObject;
	race.pathsettings.forEach((item1, index1, array1) => {
		item1.paths.forEach((item2, index2, array2) => {
			if (item2.path === pathName) {
				pathObject = item2;
			}
		});
	});
	return pathObject;
};

var getPathDB = function (race, number) {
	var DBList = [];
	if (race === "elf")
	{
		switch (number)
		{
			case 2:
				DBList = ElfTwos;
				break;
			case 3:
				DBList = ElfThrees;
				break;
			case 4:
				DBList = ElfFours;
				break;
			case 5:
				DBList = ElfFives;
				break;
		}
	}
	if (race === "dwarf")
	{
		switch (number)
		{
			case 2:
				DBList = DwarfTwos;
				break;
			case 3:
				DBList = DwarfThrees;
				break;
			case 4:
				DBList = DwarfFours;
				break;
			case 5:
				DBList = DwarfFives;
				break;
		}
	}
	if (race === "human")
	{
		switch (number)
		{
			case 2:
				DBList = HumanTwos;
				break;
			case 3:
				DBList = HumanThrees;
				break;
			case 4:
				DBList = HumanFours;
				break;
			case 5:
				DBList = HumanFives;
				break;
		}
	}
	return DBList;
}

var extractData = function (pathList, pathNumber) {
	let tempPathList = [];
	pathList.forEach((item, index, array) => {
		let tempPath = [];
		for (let i = 0; i < pathNumber; i++)
		{
			tempPath.push(item[i].path);
		}
		tempPathList.push(tempPath);
	});
	return tempPathList;
}

var copyList = function (list) {
	let temp = []
	list.forEach((item, index, array) => {
		temp.push(item);
	});
	return temp;
}

var findThePath = function () {
	
	var raceDropDown = document.getElementById("Races");
	var settingsDropDown = document.getElementById("Settings");
	var startDropDown = document.getElementById("StartingPath");
	var endDropDown = document.getElementById("EndingPath");
	var numberDropDown = document.getElementById("PathNumber");
	var output = document.getElementById("output");

	var selectedRace = raceDropDown.options[raceDropDown.selectedIndex].value;
	var selectedSetting = settingsDropDown.options[settingsDropDown.selectedIndex].value;
	var selectedStart = startDropDown.options[startDropDown.selectedIndex].value;
	var selectedEnd = endDropDown.options[endDropDown.selectedIndex].value;
	var selectedNumber = numberDropDown.options[numberDropDown.selectedIndex].value;

	//parseInt(selectedNumber)

	var isEndPathBorn = false;
	getBornList(selectedRace).forEach((item, index, array) => {
		if(item.path == selectedEnd)
		{
			isEndPathBorn = true;
		}
	});
	if (isEndPathBorn)
	{
		output.innerHTML = "A born path cannot be an end path";
		return;
	}
	else
	{
		console.log(getPathDB(selectedRace, parseInt(selectedNumber)));
		var DB = JSON.parse(getPathDB(selectedRace, parseInt(selectedNumber)));
		var filteredList = [];
		DB.forEach((item, index, array) => {
			if (item[0] === selectedStart && item[(item.length - 1)] === selectedEnd)
			{
				filteredList.push(item);
			}
		});
		if (filteredList.length !== 0)
		{
			var outputList = [];
			filteredList.forEach((item1, index1, array1) => {
				var outputString = "";
				item1.forEach((item2, index2, array2) => {
					outputString = outputString.concat(' => ', item2);
				});
				outputList.push(outputString);
			});
			
			var listElement = document.createElement('ul');
			outputList.forEach((item, index, array) => {
				var listItem = document.createElement('li');
				listItem.innerHTML = item;
				listElement.appendChild(listItem);
			});
			output.appendChild(listElement);
		}
		else
		{
			
			output.innerHTML = "No paths found given the number of paths available.";
			return;
		}
	}

};

window.onload = function () {
	var setup = document.getElementById("Races");
	setup.addEventListener("change", filtersetting);
	var setup2 = document.getElementById("Settings");
	setup2.addEventListener("change", filterpath);
	var setup3 = document.getElementById("StartingPath");
	setup3.addEventListener("change", filterstart);
	var setup4 = document.getElementById("findThePaths");
	setup4.addEventListener("click", findThePath);
	var setup5 = document.getElementById("EndingPath");
	setup5.addEventListener("change", setTargetPath);

	races.forEach((item, index, array) => {
		var sel = document.getElementById("Races");
		var opt = new Option(item.race, item.race);
		sel.options[sel.options.length] = opt;
	});

	var raceDropDown = document.getElementById("Races");
	var selectedRace = raceDropDown.options[raceDropDown.selectedIndex].value;
	var raceObject = getRaceObject(selectedRace);
	var bornList = getBornList(selectedRace);
	
	raceObject.pathsettings.forEach((item, index, array) => {
		var sel = document.getElementById("Settings");
		var opt = new Option(item.setting, item.setting);
		sel.options[sel.options.length] = opt;
	});

	bornList.forEach((item, index, array) => {
		var sel = document.getElementById("StartingPath");
		var opt = new Option(item.path, item.path);
		sel.options[sel.options.length] = opt;
	});

	var settingDropDown = document.getElementById("Settings");
	var selectedSetting = settingDropDown.options[settingDropDown.selectedIndex].value;
	var settingObject = getSettingObject(selectedSetting, raceObject);

	settingObject.paths.forEach((item, index, array) => {
		var sel = document.getElementById("EndingPath");
		var opt = new Option(item.path, item.path);
		sel.options[sel.options.length] = opt;
	});


	for (var i = 2; i < 6; i++)
	{
		var sel = document.getElementById("PathNumber");
		var opt = new Option(i, i);
		sel.options[sel.options.length] = opt;
	}
};

//
// PASS 2
//

// ElvenBorn.forEach((item1, index1, array1) => {
// 	var thisSetting = getLatestSetting(item1, elf);
// 	thisSetting.paths.forEach((item2, index2, array2) => {
// 		var thisPath = [item1];
// 		if (item2 !== item1) {
// 			if (item2.Requires.length === 0) {
// 				thisPath.push(item2);
// 			}
// 			else if (checkForTwo(item2)) {
// 				thisPath.push(item2);
// 			}
// 			else if (checkForRequirement(thisPath, item2) && !checkForThree(item2) && !checkForFour(item2)) {
// 				thisPath.push(item2);
// 			}
// 		}
// 		AllElfPaths.push(thisPath);
// 	});
// 	item1.leadsto.forEach((item2, index2, array2) => {
// 		getSettingObject(item2, elf).paths.forEach((item3, index3, array3) => {
// 			var thisPath = [item1];
// 			if (!checkForBorn(item3, ElvenBorn) && item1 !== item3) {
// 				if (item3.Requires.length === 0) {
// 					thisPath.push(item3);
// 				}
// 				else if (checkForTwo(item3)) {
// 					thisPath.push(item3);
// 				}
// 				else if (checkForRequirement(thisPath, item3) && !checkForThree(item3) && !checkForFour(item3)) {
// 					thisPath.push(item3);
// 				}
// 			}
// 			AllElfPaths.push(thisPath);
// 		});
// 	});
// });

// DwarfBorn.forEach((item1, index1, array1) => {
// 	var thisSetting = getLatestSetting(item1, dwarf);
// 	thisSetting.paths.forEach((item2, index2, array2) => {
// 		var thisPath = [item1];
// 		if (item2 !== item1) {
// 			if (item2.Requires.length === 0) {
// 				thisPath.push(item2);
// 			}
// 			else if (checkForTwo(item2)) {
// 				thisPath.push(item2);
// 			}
// 			else if (checkForRequirement(thisPath, item2) && !checkForThree(item2) && !checkForFour(item2)) {
// 				thisPath.push(item2);
// 			}
// 		}
// 		AllDwarfPaths.push(thisPath);
// 	});
// 	item1.leadsto.forEach((item2, index2, array2) => {
// 		getSettingObject(item2, dwarf).paths.forEach((item3, index3, array3) => {
// 			var thisPath = [item1];
// 			if (!checkForBorn(item3, DwarfBorn) && item1 !== item3) {
// 				if (item3.Requires.length === 0) {
// 					thisPath.push(item3);
// 				}
// 				else if (checkForTwo(item3)) {
// 					thisPath.push(item3);
// 				}
// 				else if (checkForRequirement(thisPath, item3) && !checkForThree(item3) && !checkForFour(item3)) {
// 					thisPath.push(item3);
// 				}
// 			}
// 			AllDwarfPaths.push(thisPath);
// 		});
// 	});
// });
// console.log(AllDwarfPaths);

// HumanBorn.forEach((item1, index1, array1) => {
// 	var thisSetting = getLatestSetting(item1, human);
// 	thisSetting.paths.forEach((item2, index2, array2) => {
// 		var thisPath = [item1];
// 		if (item2 !== item1) {
// 			if (item2.Requires.length === 0) {
// 				thisPath.push(item2);
// 			}
// 			else if (checkForTwo(item2)) {
// 				thisPath.push(item2);
// 			}
// 			else if (checkForRequirement(thisPath, item2) && !checkForThree(item2) && !checkForFour(item2)) {
// 				thisPath.push(item2);
// 			}
// 		}
// 		AllHumanPaths.push(thisPath);
// 	});
// 	item1.leadsto.forEach((item2, index2, array2) => {
// 		getSettingObject(item2, human).paths.forEach((item3, index3, array3) => {
// 			var thisPath = [item1];
// 			if (!checkForBorn(item3, HumanBorn) && item1 !== item3) {
// 				if (item3.Requires.length === 0) {
// 					thisPath.push(item3);
// 				}
// 				else if (checkForTwo(item3)) {
// 					thisPath.push(item3);
// 				}
// 				else if (checkForRequirement(thisPath, item3) && !checkForThree(item3) && !checkForFour(item3)) {
// 					thisPath.push(item3);
// 				}
// 			}
// 			AllHumanPaths.push(thisPath);
// 		});
// 	});
// });

// AllElfPaths = AllElfPaths.filter((item) => {
// 	return item.length != 1;
// });
// AllDwarfPaths = AllDwarfPaths.filter((item) => {
// 	return item.length != 1;
// });
// AllHumanPaths = AllHumanPaths.filter((item) => {
// 	return item.length != 1;
// });


//
//PASS 3
//

// var AllElf3Paths = [];
	
// AllElfPaths.forEach((item1, index1, array1) => {
// 	var setting = getLatestSetting(item1[1], elf);
// 	setting.paths.forEach((item2, index2, array2) => {
// 		if (!checkForBorn(item2, ElvenBorn)){
// 			if (item2 !== item1[0] && item2 !== item1[1]) {
			
// 				var temparray = [];
// 				temparray.push(item1[0]);
// 				temparray.push(item1[1]);
// 				if (item2.Requires.length === 0) {
// 					temparray.push(item2);
// 				}
// 				else if (checkForThree(item2)) {
// 					temparray.push(item2);
// 				}
// 				else if (checkForRequirement(item1, item2) && !checkForFour(item2) && !checkForTwo(item5)) {
// 					temparray.push(item2);
// 				}

// 				if (temparray.length === 3) {
// 					AllElf3Paths.push(temparray);
// 				}
// 			}
// 		}
// 	});
// 	item1[1].leadsto.forEach((item3, index3, array3) => {
// 		getSettingObject(item3, elf).paths.forEach((item4, index4, array4) => {
// 			if (!checkForBorn(item4, ElvenBorn)) {
// 				if (item3[0] !== item4 && item3[1] !== item4) {
// 					var temparray = [];
// 					temparray.push(item1[0]);
// 					temparray.push(item1[1]);
// 					if (item4.Requires.length == 0) {
// 						temparray.push(item4);
// 					}
// 					else if (checkForThree(item4)) {
// 						temparray.push(item4);
// 					}
// 					else if (checkForRequirement(item1, item4) && !checkForFour(item4) && !checkForTwo(item4)) {
// 						temparray.push(item4);
// 					}

// 					if (temparray.length === 3) {
// 						AllElf3Paths.push(temparray);
// 					}
// 				}	
// 			}
// 		});	
// 	});
// });

// console.log(AllElf3Paths);
// console.log(JSON.stringify(extractData(AllElf3Paths, 3)));

// var AllDwarf3Paths = [];

// AllDwarfPaths.forEach((item1, index1, array1) => {
// 	var setting = getLatestSetting(item1[1], dwarf);
// 	setting.paths.forEach((item2, index2, array2) => {
// 		if (!checkForBorn(item2, DwarfBorn)){
// 			if (item2 !== item1[0] && item2 !== item1[1]) {
			
// 				var temparray = [];
// 				temparray.push(item1[0]);
// 				temparray.push(item1[1]);
// 				if (item2.Requires.length === 0) {
// 					temparray.push(item2);
// 				}
// 				else if (checkForThree(item2)) {
// 					temparray.push(item2);
// 				}
// 				else if (checkForRequirement(item1, item2) && !checkForFour(item2) && !checkForTwo(item5)) {
// 					temparray.push(item2);
// 				}

// 				if (temparray.length === 3) {
// 					AllDwarf3Paths.push(temparray);
// 				}
// 			}
// 		}
// 	});
// 	item1[1].leadsto.forEach((item3, index3, array3) => {
// 		getSettingObject(item3, dwarf).paths.forEach((item4, index4, array4) => {
// 			if (!checkForBorn(item4, DwarfBorn)) {
// 				if (item3[0] !== item4 && item3[1] !== item4) {
// 					var temparray = [];
// 					temparray.push(item1[0]);
// 					temparray.push(item1[1]);
// 					if (item4.Requires.length == 0) {
// 						temparray.push(item4);
// 					}
// 					else if (checkForThree(item4)) {
// 						temparray.push(item4);
// 					}
// 					else if (checkForRequirement(item1, item4) && !checkForFour(item4) && !checkForTwo(item4)) {
// 						temparray.push(item4);
// 					}

// 					if (temparray.length === 3) {
// 						AllDwarf3Paths.push(temparray);
// 					}
// 				}	
// 			}
// 		});	
// 	});
// });

// console.log(AllDwarf3Paths);
// console.log(JSON.stringify(extractData(AllDwarf3Paths, 3)));

// var AllHuman3Paths = [];
		
// 	AllHumanPaths.forEach((item1, index1, array1) => {
// 		var setting = getLatestSetting(item1[1], human);
// 		setting.paths.forEach((item2, index2, array2) => {
// 			if (!checkForBorn(item2, HumanBorn)){
// 				if (item2 !== item1[0] && item2 !== item1[1]) {
				
// 					var temparray = [];
// 					temparray.push(item1[0]);
// 					temparray.push(item1[1]);
// 					if (item2.Requires.length === 0) {
// 						temparray.push(item2);
// 					}
// 					else if (checkForThree(item2)) {
// 						temparray.push(item2);
// 					}
// 					else if (checkForRequirement(item1, item2) && !checkForFour(item2) && !checkForTwo(item5)) {
// 						temparray.push(item2);
// 					}

// 					if (temparray.length === 3) {
// 						AllHuman3Paths.push(temparray);
// 					}
// 				}
// 			}
// 		});
// 		item1[1].leadsto.forEach((item3, index3, array3) => {
// 			getSettingObject(item3, human).paths.forEach((item4, index4, array4) => {
// 				if (!checkForBorn(item4, HumanBorn)) {
// 					if (item3[0] !== item4 && item3[1] !== item4) {
// 						var temparray = [];
// 						temparray.push(item1[0]);
// 						temparray.push(item1[1]);
// 						if (item4.Requires.length == 0) {
// 							temparray.push(item4);
// 						}
// 						else if (checkForThree(item4)) {
// 							temparray.push(item4);
// 						}
// 						else if (checkForRequirement(item1, item4) && !checkForFour(item4) && !checkForTwo(item4)) {
// 							temparray.push(item4);
// 						}

// 						if (temparray.length === 3) {
// 							AllHuman3Paths.push(temparray);
// 						}
// 					}	
// 				}
// 			});	
// 		});
// 	});

// console.log(AllHuman3Paths);
// console.log(JSON.stringify(extractData(AllHuman3Paths, 3)));
// var tempString = JSON.stringify(extractData(AllHuman3Paths, 3));
// console.log(tempString);
// var newStr = tempString.replace(/"/g, "\\\"");
// console.log(newStr);


//
// PASS 4 
//

// var AllElf4Paths = [];

// AllElf3Paths.forEach((item5, index5, array5) => {
// 	var temparray = copyList(item5);
// 	var setting4 = getLatestSetting(item5[2], elf);
// 	setting4.paths.forEach((item6, index6, array6) => {
// 		if (!checkForMatch(item5, item6)) {
// 			if (item6.Requires.length === 0) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForFour(item6)) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForRequirement(item5, item6) && !checkForThree(item6) && !checkForTwo(item6)) {
// 				temparray.push(item6);
// 			}
// 		}
// 		if (item5.length === 4 && !checkForSameList(item5, AllElf4Paths[(AllElf4Paths.length - 1)], 4))
// 		{
// 			AllElf4Paths.push(copyList(temparray));
// 		}
// 	});
// 	item5[2].leadsto.forEach((item7, index7, array7) => {
// 		var temparray2 = copyList(item5);
// 		getSettingObject(item7, elf).paths.forEach((item8, index8, array8) => {
// 			if (!checkForBorn(item8, ElvenBorn) && !checkForMatch(temparray2, item8)) {
// 				if (item8.Requires.length === 0) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForFour(item8)) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForRequirement(temparray2, item8) && !checkForThree(item8) && !checkForTwo(item8)) {
// 					temparray2.push(item8);
// 				}
// 			}
// 			if (temparray2.length === 4 && !checkForSameList(temparray2, AllElf4Paths[(AllElf4Paths.length - 1)], 4))
// 			{
// 				AllElf4Paths.push(copyList(temparray2));
// 			}
// 		});
// 	});
// });

// console.log(AllElf4Paths);
// console.log(JSON.stringify(extractData(AllElf4Paths, 4)));


// var AllDwarf4Paths = [];

// AllDwarf3Paths.forEach((item5, index5, array5) => {
// 	var temparray = copyList(item5);
// 	var setting4 = getLatestSetting(item5[2], dwarf);
// 	setting4.paths.forEach((item6, index6, array6) => {
// 		if (!checkForMatch(item5, item6)) {
// 			if (item6.Requires.length === 0) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForFour(item6)) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForRequirement(item5, item6) && !checkForThree(item6) && !checkForTwo(item6)) {
// 				temparray.push(item6);
// 			}
// 		}
// 		if (item5.length === 4 && !checkForSameList(item5, AllDwarf4Paths[(AllDwarf4Paths.length - 1)], 4))
// 		{
// 			AllDwarf4Paths.push(copyList(temparray));
// 		}
// 	});
// 	item5[2].leadsto.forEach((item7, index7, array7) => {
// 		var temparray2 = copyList(item5);
// 		getSettingObject(item7, dwarf).paths.forEach((item8, index8, array8) => {
// 			if (!checkForBorn(item8, DwarfBorn) && !checkForMatch(temparray2, item8)) {
// 				if (item8.Requires.length === 0) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForFour(item8)) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForRequirement(temparray2, item8) && !checkForThree(item8) && !checkForTwo(item8)) {
// 					temparray2.push(item8);
// 				}
// 			}
// 			if (temparray2.length === 4 && !checkForSameList(temparray2, AllDwarf4Paths[(AllDwarf4Paths.length - 1)], 4))
// 			{
// 				AllDwarf4Paths.push(copyList(temparray2));
// 			}
// 		});
// 	});
// });

// console.log(AllDwarf4Paths);
// console.log(JSON.stringify(extractData(AllDwarf4Paths, 4)));

// var AllHuman4Paths = [];

// 	AllHuman3Paths.forEach((item5, index5, array5) => {
// 		var temparray = copyList(item5);
// 		var setting4 = getLatestSetting(item5[2], human);
// 		setting4.paths.forEach((item6, index6, array6) => {
// 			if (!checkForMatch(item5, item6)) {
// 				if (item6.Requires.length === 0) {
// 					temparray.push(item6);
// 				}
// 				else if (checkForFour(item6)) {
// 					temparray.push(item6);
// 				}
// 				else if (checkForRequirement(item5, item6) && !checkForThree(item6) && !checkForTwo(item6)) {
// 					temparray.push(item6);
// 				}
// 			}
// 			if (item5.length === 4 && !checkForSameList(item5, AllHuman4Paths[(AllHuman4Paths.length - 1)], 4))
// 			{
// 				AllHuman4Paths.push(copyList(temparray));
// 			}
// 		});
// 		item5[2].leadsto.forEach((item7, index7, array7) => {
// 			var temparray2 = copyList(item5);
// 			getSettingObject(item7, human).paths.forEach((item8, index8, array8) => {
// 				if (!checkForBorn(item8, HumanBorn) && !checkForMatch(temparray2, item8)) {
// 					if (item8.Requires.length === 0) {
// 						temparray2.push(item8);
// 					}
// 					else if (checkForFour(item8)) {
// 						temparray2.push(item8);
// 					}
// 					else if (checkForRequirement(temparray2, item8) && !checkForThree(item8) && !checkForTwo(item8)) {
// 						temparray2.push(item8);
// 					}
// 				}
// 				if (temparray2.length === 4 && !checkForSameList(temparray2, AllHuman4Paths[(AllHuman4Paths.length - 1)], 4))
// 				{
// 					AllHuman4Paths.push(copyList(temparray2));
// 				}
// 			});
// 		});
// 	});

// console.log(AllHuman4Paths);
// console.log(JSON.stringify(extractData(AllHuman4Paths, 4)));
// var tempString = JSON.stringify(extractData(AllHuman4Paths, 4));
// console.log(tempString);
// var newStr = tempString.replace(/"/g, "\\\"");
// console.log(newStr);


//
// PASS 5
//

// var AllElf5Paths = [];

// AllElf4Paths.forEach((item5, index5, array5) => {
// 	var temparray = copyList(item5);
// 	var setting4 = getLatestSetting(item5[2], elf);
// 	setting4.paths.forEach((item6, index6, array6) => {
// 		if (!checkForMatch(item5, item6)) {
// 			if (item6.Requires.length === 0) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForBeyondfour(item6)) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForRequirement(item5, item6) && !checkForThree(item6) && !checkForTwo(item6)) {
// 				temparray.push(item6);
// 			}
// 		}
// 		if (item5.length === 5 && !checkForSameList(item5, AllElf5Paths[(AllElf5Paths.length - 1)], 5))
// 		{
// 			AllElf5Paths.push(copyList(temparray));
// 		}
// 	});
// 	item5[3].leadsto.forEach((item7, index7, array7) => {
// 		var temparray2 = copyList(item5);
// 		getSettingObject(item7, elf).paths.forEach((item8, index8, array8) => {
// 			if (!checkForBorn(item8, ElvenBorn) && !checkForMatch(temparray2, item8)) {
// 				if (item8.Requires.length === 0) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForBeyondfour(item8)) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForRequirement(temparray2, item8) && !checkForThree(item8) && !checkForTwo(item8)) {
// 					temparray2.push(item8);
// 				}
// 			}
// 			if (temparray2.length === 5 && !checkForSameList(temparray2, AllElf5Paths[(AllElf5Paths.length - 1)], 5))
// 			{
// 				AllElf5Paths.push(copyList(temparray2));
// 			}
// 		});
// 	});
// });


// console.log(AllElf5Paths);
// console.log(JSON.stringify(extractData(AllElf5Paths, 5)));

// var AllDwarf5Paths = [];

// AllDwarf4Paths.forEach((item5, index5, array5) => {
// 	var temparray = copyList(item5);
// 	var setting4 = getLatestSetting(item5[2], dwarf);
// 	setting4.paths.forEach((item6, index6, array6) => {
// 		if (!checkForMatch(item5, item6)) {
// 			if (item6.Requires.length === 0) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForBeyondfour(item6)) {
// 				temparray.push(item6);
// 			}
// 			else if (checkForRequirement(item5, item6) && !checkForThree(item6) && !checkForTwo(item6)) {
// 				temparray.push(item6);
// 			}
// 		}
// 		if (item5.length === 5 && !checkForSameList(item5, AllDwarf5Paths[(AllDwarf5Paths.length - 1)], 5))
// 		{
// 			AllDwarf5Paths.push(copyList(temparray));
// 		}
// 	});
// 	item5[3].leadsto.forEach((item7, index7, array7) => {
// 		var temparray2 = copyList(item5);
// 		getSettingObject(item7, dwarf).paths.forEach((item8, index8, array8) => {
// 			if (!checkForBorn(item8, DwarfBorn) && !checkForMatch(temparray2, item8)) {
// 				if (item8.Requires.length === 0) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForBeyondfour(item8)) {
// 					temparray2.push(item8);
// 				}
// 				else if (checkForRequirement(temparray2, item8) && !checkForThree(item8) && !checkForTwo(item8)) {
// 					temparray2.push(item8);
// 				}
// 			}
// 			if (temparray2.length === 5 && !checkForSameList(temparray2, AllDwarf5Paths[(AllDwarf5Paths.length - 1)], 5))
// 			{
// 				AllDwarf5Paths.push(copyList(temparray2));
// 			}
// 		});
// 	});
// });


// console.log(AllDwarf5Paths);
// console.log(JSON.stringify(extractData(AllDwarf5Paths, 5)));

// var AllHuman5Paths = [];

// 	AllHuman4Paths.forEach((item5, index5, array5) => {
// 		var temparray = copyList(item5);
// 		var setting4 = getLatestSetting(item5[2], human);
// 		setting4.paths.forEach((item6, index6, array6) => {
// 			if (!checkForMatch(item5, item6)) {
// 				if (item6.Requires.length === 0) {
// 					temparray.push(item6);
// 				}
// 				else if (checkForBeyondfour(item6)) {
// 					temparray.push(item6);
// 				}
// 				else if (checkForRequirement(item5, item6) && !checkForThree(item6) && !checkForTwo(item6)) {
// 					temparray.push(item6);
// 				}
// 			}
// 			if (item5.length === 5 && !checkForSameList(item5, AllHuman5Paths[(AllHuman5Paths.length - 1)], 5))
// 			{
// 				AllHuman5Paths.push(copyList(temparray));
// 			}
// 		});
// 		item5[3].leadsto.forEach((item7, index7, array7) => {
// 			var temparray2 = copyList(item5);
// 			getSettingObject(item7, human).paths.forEach((item8, index8, array8) => {
// 				if (!checkForBorn(item8, HumanBorn) && !checkForMatch(temparray2, item8)) {
// 					if (item8.Requires.length === 0) {
// 						temparray2.push(item8);
// 					}
// 					else if (checkForBeyondfour(item8)) {
// 						temparray2.push(item8);
// 					}
// 					else if (checkForRequirement(temparray2, item8) && !checkForThree(item8) && !checkForTwo(item8)) {
// 						temparray2.push(item8);
// 					}
// 				}
// 				if (temparray2.length === 5 && !checkForSameList(temparray2, AllHuman5Paths[(AllHuman5Paths.length - 1)], 5))
// 				{
// 					AllHuman5Paths.push(copyList(temparray2));
// 				}
// 			});
// 		});
// 	});

// console.log(AllHuman5Paths);
// console.log(JSON.stringify(extractData(AllHuman5Paths, 5)));
// var tempString = JSON.stringify(extractData(AllHuman5Paths, 5));
// console.log(tempString);
// var newStr = tempString.replace(/"/g, "\\\"");
// console.log(newStr);
