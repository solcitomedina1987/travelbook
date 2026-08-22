const disneyMedia = (path: string) =>
  `https://images.wdpromedia.com/resize/mwImage/1/630/354/75/dam/wdw/${path}`;

/** Official Disney & Universal CDN photos with fallback mechanisms */
export const parkImages: Record<string, string> = {
  // Magic Kingdom (Official Disney World CDN)
  "mk-hero":
    "https://images.wdpromedia.com/resize/mwImage/1/1600/900/75/dam/wdw/destinations/magic-kingdom/magic-kingdom-hero.jpg",
  "mk-tron": disneyMedia(
    "attractions/magic-kingdom/tron-lightcycle-run/tron-lightcycle-run-gallery00.jpg",
  ),
  "mk-space": disneyMedia(
    "attractions/magic-kingdom/space-mountain/space-mountain-gallery00.jpg",
  ),
  "mk-mine": disneyMedia(
    "attractions/magic-kingdom/seven-dwarfs-mine-train/seven-dwarfs-mine-train-gallery00.jpg",
  ),
  "mk-peter": disneyMedia(
    "attractions/magic-kingdom/peter-pans-flight/peter-pans-flight-gallery00.jpg",
  ),
  "mk-pooh": disneyMedia(
    "attractions/magic-kingdom/many-adventures-of-winnie-the-pooh/many-adventures-of-winnie-the-pooh-gallery00.jpg",
  ),
  "mk-small-world": disneyMedia(
    "attractions/magic-kingdom/its-a-small-world/its-a-small-world-gallery00.jpg",
  ),
  "mk-little-mermaid": disneyMedia(
    "attractions/magic-kingdom/under-the-sea-journey-of-the-little-mermaid/under-the-sea-journey-of-the-little-mermaid-gallery00.jpg",
  ),
  "mk-barnstormer": disneyMedia(
    "attractions/magic-kingdom/the-barnstormer/the-barnstormer-gallery00.jpg",
  ),
  "mk-dumbo": disneyMedia(
    "attractions/magic-kingdom/dumbo-the-flying-elephant/dumbo-the-flying-elephant-gallery00.jpg",
  ),
  "mk-tea-party": disneyMedia(
    "attractions/magic-kingdom/mad-tea-party/mad-tea-party-gallery00.jpg",
  ),
  "mk-philharmagic": disneyMedia(
    "attractions/magic-kingdom/mickeys-philharmagic/mickeys-philharmagic-gallery00.jpg",
  ),
  "mk-carousel": disneyMedia(
    "attractions/magic-kingdom/prince-charming-regal-carrousel/prince-charming-regal-carrousel-gallery00.jpg",
  ),
  "mk-belle": disneyMedia(
    "attractions/magic-kingdom/enchanted-tales-with-belle/enchanted-tales-with-belle-gallery00.jpg",
  ),
  "mk-haunted": disneyMedia(
    "attractions/magic-kingdom/haunted-mansion/haunted-mansion-gallery00.jpg",
  ),
  "mk-riverboat": disneyMedia(
    "attractions/magic-kingdom/liberty-square-riverboat/liberty-square-riverboat-gallery00.jpg",
  ),
  "mk-presidents": disneyMedia(
    "attractions/magic-kingdom/hall-of-presidents/hall-of-presidents-gallery00.jpg",
  ),
  "mk-thunder": disneyMedia(
    "attractions/magic-kingdom/big-thunder-mountain-railroad/big-thunder-mountain-railroad-gallery00.jpg",
  ),
  "mk-tiana": disneyMedia(
    "attractions/magic-kingdom/tianas-bayou-adventure/tianas-bayou-adventure-gallery00.jpg",
  ),
  "mk-country-bears": disneyMedia(
    "attractions/magic-kingdom/country-bear-jamboree/country-bear-jamboree-gallery00.jpg",
  ),
  "mk-pirates": disneyMedia(
    "attractions/magic-kingdom/pirates-of-the-caribbean/pirates-of-the-caribbean-gallery00.jpg",
  ),
  "mk-jungle": disneyMedia(
    "attractions/magic-kingdom/jungle-cruise/jungle-cruise-gallery00.jpg",
  ),
  "mk-aladdin": disneyMedia(
    "attractions/magic-kingdom/magic-carpets-of-aladdin/magic-carpets-of-aladdin-gallery00.jpg",
  ),
  "mk-tiki": disneyMedia(
    "attractions/magic-kingdom/enchanted-tiki-room/enchanted-tiki-room-gallery00.jpg",
  ),
  "mk-treehouse": disneyMedia(
    "attractions/magic-kingdom/swiss-family-treehouse/swiss-family-treehouse-gallery00.jpg",
  ),
  "mk-railroad": disneyMedia(
    "attractions/magic-kingdom/walt-disney-world-railroad-fantasyland/walt-disney-world-railroad-fantasyland-gallery00.jpg",
  ),
  "mk-festival": disneyMedia(
    "entertainment/magic-kingdom/festival-of-fantasy-parade/festival-of-fantasy-parade-gallery00.jpg",
  ),
  "mk-buzz": disneyMedia(
    "attractions/magic-kingdom/buzz-lightyears-space-ranger-spin/buzz-lightyears-space-ranger-spin-gallery00.jpg",
  ),
  "mk-monsters": disneyMedia(
    "attractions/magic-kingdom/monsters-inc-laugh-floor/monsters-inc-laugh-floor-gallery02.jpg",
  ),
  "mk-speedway": disneyMedia(
    "attractions/magic-kingdom/tomorrowland-speedway/tomorrowland-speedway-gallery00.jpg",
  ),
  "mk-astro-orbiter": disneyMedia(
    "attractions/magic-kingdom/astro-orbiter/astro-orbiter-gallery00.jpg",
  ),
  "mk-peoplemover": disneyMedia(
    "attractions/magic-kingdom/tomorrowland-transit-authority-peoplemover/tomorrowland-transit-authority-peoplemover-gallery00.jpg",
  ),
  "mk-carousel-progress": disneyMedia(
    "attractions/magic-kingdom/walt-disneys-carousel-of-progress/walt-disneys-carousel-of-progress-gallery00.jpg",
  ),
  "mk-hea": disneyMedia(
    "entertainment/magic-kingdom/happily-ever-after/happily-ever-after-gallery00.jpg",
  ),

  // EPCOT
  "ep-hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Spaceship_Earth.jpg/1280px-Spaceship_Earth.jpg",
  "ep-guardians": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Guardians_of_the_Galaxy_Cosmic_Rewind_at_EPCOT.jpg/1280px-Guardians_of_the_Galaxy_Cosmic_Rewind_at_EPCOT.jpg",
  "ep-remy": "https://upload.wikimedia.org/wikipedia/commons/6/68/Remy%27s_Ratatouille_Adventure.jpg",
  "ep-soarin": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Soarin%27.jpg/1280px-Soarin%27.jpg",
  "ep-canada": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/CanadaEpcot.JPG/1280px-CanadaEpcot.JPG",
  "ep-frozen": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Frozen_Ever_After_HK_08.jpg/1280px-Frozen_Ever_After_HK_08.jpg",
  "ep-test": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/TestTrackEpcot.JPG/1280px-TestTrackEpcot.JPG",
  "ep-mission": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/WDW_EPCOT_Mission_Space.JPG/1280px-WDW_EPCOT_Mission_Space.JPG",
  "ep-living": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Living_with_the_Land_34.jpg/1280px-Living_with_the_Land_34.jpg",
  "ep-seas": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Turtle_Talk_with_Crush%2C_Epcot.jpg/1280px-Turtle_Talk_with_Crush%2C_Epcot.jpg",
  "ep-mexico": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Mexico_Pyramid_%2849560738966%29.jpg/1280px-Mexico_Pyramid_%2849560738966%29.jpg",
  "ep-night": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/IllumiNations_barges.jpg/1280px-IllumiNations_barges.jpg",
  "ep-spaceship": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Spaceship_Earth.jpg/1280px-Spaceship_Earth.jpg",

  // Hollywood Studios
  "hs-hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Disney%27s_Hollywood_Studios_Tower_of_Terror.jpg/1280px-Disney%27s_Hollywood_Studios_Tower_of_Terror.jpg",
  "hs-rise": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Rise_of_the_Resistance_Stormtrooper_Hangar.jpg/1280px-Rise_of_the_Resistance_Stormtrooper_Hangar.jpg",
  "hs-slinky": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Slinky_Dog_Dash.jpg/1280px-Slinky_Dog_Dash.jpg",
  "hs-tower": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hollywood_Tower_Hotel.jpg/1280px-Hollywood_Tower_Hotel.jpg",
  "hs-smugglers": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Millennium_Falcon_Panorama_%2848512183287%29.jpg/1280px-Millennium_Falcon_Panorama_%2848512183287%29.jpg",
  "hs-alien": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alien_Swirling_Saucers_%2842415768554%29.jpg/1280px-Alien_Swirling_Saucers_%2842415768554%29.jpg",
  "hs-mania": "https://upload.wikimedia.org/wikipedia/commons/2/2d/DHS_ToyStoryMidwayMania.jpg",
  "hs-rockn": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rock_n_Roller_Coaster%2C_Disney%27s_Hollywood_Studios.jpg/1280px-Rock_n_Roller_Coaster%2C_Disney%27s_Hollywood_Studios.jpg",
  "hs-mickey": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Runaway_Railway_Chinese_Theater.jpg/1280px-Runaway_Railway_Chinese_Theater.jpg",
  "hs-animation": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Magic_of_Disney_Animation.jpg/1280px-Magic_of_Disney_Animation.jpg",
  "hs-indy": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Indiana_Jones_Stunt_Spectacular.jpg/1280px-Indiana_Jones_Stunt_Spectacular.jpg",
  "hs-fantasmic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hollywood_Tower_Hotel.jpg/1280px-Hollywood_Tower_Hotel.jpg",
  "hs-manytours": "https://upload.wikimedia.org/wikipedia/commons/2/2d/DHS_ToyStoryMidwayMania.jpg",
  "hs-tofystory": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Magic_of_Disney_Animation.jpg/1280px-Magic_of_Disney_Animation.jpg",

  // Animal Kingdom
  "ak-hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg/1280px-Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg",
  "ak-everest": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Expedition_Everest.jpg/1280px-Expedition_Everest.jpg",
  "ak-kali": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Kali_River_Rapids.jpg/1280px-Kali_River_Rapids.jpg",
  "ak-navi": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Avatar_Land_Boat_Ride_-_Na%27vi_River_Journey_-_Pandora_-_Animal_Kingdom.jpg/1280px-Avatar_Land_Boat_Ride_-_Na%27vi_River_Journey_-_Pandora_-_Animal_Kingdom.jpg",
  "ak-safari": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg/1280px-Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg",
  "ak-maharajah": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Maharajah_Jungle_Trek.JPG",
  "ak-avatar": "https://upload.wikimedia.org/wikipedia/commons/5/56/Floating_Mountains_001.jpg",
  "ak-tree": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg/1280px-Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg",
  "ak-feathered": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Finding_Nemo_The_Musical_at_Animal_Kingdom.JPG/1280px-Finding_Nemo_The_Musical_at_Animal_Kingdom.JPG",
  "ak-dinosaur": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Expedition_Everest.jpg/1280px-Expedition_Everest.jpg",
  "ak-triceratop": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg/1280px-Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg",
  "ak-gorilla": "https://upload.wikimedia.org/wikipedia/commons/5/56/Floating_Mountains_001.jpg",
  "ak-lionking": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg/1280px-Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg",
  "ak-dinosaurs": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Expedition_Everest.jpg/1280px-Expedition_Everest.jpg",
  "ak-gorillas": "https://upload.wikimedia.org/wikipedia/commons/5/56/Floating_Mountains_001.jpg",
  "ak-festival": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg/1280px-Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg",

  // Universal Studios Florida
  "us-hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Universal_Studios_Florida.jpg/1280px-Universal_Studios_Florida.jpg",
  "us-gringotts": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dragon_breathing_fire_in_Diagon_ALley.jpg/1280px-Dragon_breathing_fire_in_Diagon_ALley.jpg",
  "us-express": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Orlando-hogwarts-express-kings-cross-station.jpg/1280px-Orlando-hogwarts-express-kings-cross-station.jpg",
  "us-mummy": "https://upload.wikimedia.org/wikipedia/commons/8/8b/UniversalStudiosRevengeOfTheMummyEntrance.jpg",
  "us-transformers": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/New_Transformers_Ride_-_panoramio.jpg/1280px-New_Transformers_Ride_-_panoramio.jpg",
  "us-minions": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Atracci%C3%B3n_Mi_Villano_Favorito.JPG/1280px-Atracci%C3%B3n_Mi_Villano_Favorito.JPG",
  "us-villain": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Minion_Land.jpg/1280px-Minion_Land.jpg",
  "us-mib": "https://upload.wikimedia.org/wikipedia/commons/7/72/Men_in_Black_Single_Rider_Line.jpg",
  "us-horror": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/HorrorMakeUpEnt.JPG/1280px-HorrorMakeUpEnt.JPG",
  "us-jimmy": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Universal_Studios_Florida.jpg/1280px-Universal_Studios_Florida.jpg",
  "us-et": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Atracci%C3%B3n_Mi_Villano_Favorito.JPG/1280px-Atracci%C3%B3n_Mi_Villano_Favorito.JPG",
  "us-bourne": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/HorrorMakeUpEnt.JPG/1280px-HorrorMakeUpEnt.JPG",
  "us-night": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dragon_breathing_fire_in_Diagon_ALley.jpg/1280px-Dragon_breathing_fire_in_Diagon_ALley.jpg",
  "us-forbidden": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dragon_breathing_fire_in_Diagon_ALley.jpg/1280px-Dragon_breathing_fire_in_Diagon_ALley.jpg",
  "us-hogwarts-express": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Orlando-hogwarts-express-kings-cross-station.jpg/1280px-Orlando-hogwarts-express-kings-cross-station.jpg",
  "us-men": "https://upload.wikimedia.org/wikipedia/commons/7/72/Men_in_Black_Single_Rider_Line.jpg",
  "us-bournes": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/HorrorMakeUpEnt.JPG/1280px-HorrorMakeUpEnt.JPG",

  // Islands of Adventure
  "ioa-hero": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Incredible_Hulk_Coaster.jpg",
  "ioa-hagrid": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Hagrid%27s_Magical_Creatures_Motorbike_Adventure_2.jpg/1280px-Hagrid%27s_Magical_Creatures_Motorbike_Adventure_2.jpg",
  "ioa-veloci": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/VelociCoaster_2.jpg/1280px-VelociCoaster_2.jpg",
  "ioa-hulk": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Incredible_Hulk_Coaster.jpg",
  "ioa-forbidden": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Wizarding_World_of_Harry_Potter_Castle.jpg",
  "ioa-hippogriff": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flight_of_the_Hippogriff_at_Islands_of_Adventure.jpg",
  "ioa-spiderman": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Amazing_Adventures_of_Spider-Man_%28Universal%27s_Islands_of_Adventure%29_1.jpg/1280px-The_Amazing_Adventures_of_Spider-Man_%28Universal%27s_Islands_of_Adventure%29_1.jpg",
  "ioa-doom": "https://upload.wikimedia.org/wikipedia/commons/8/82/Marvel_Super_Hero_Island_23.jpg",
  "ioa-popeye": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Popeye_and_Blutos_Bilge-Rat_Barges_01.jpg/1280px-Popeye_and_Blutos_Bilge-Rat_Barges_01.jpg",
  "ioa-poseidon": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Poseidon%27sFury.JPG/1280px-Poseidon%27sFury.JPG",
  "ioa-night": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hogwarts_Express_at_Islands_of_Adventure_by_night.jpg/1280px-Hogwarts_Express_at_Islands_of_Adventure_by_night.jpg",
  "ioa-cat": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Flight_of_the_Hippogriff_at_Islands_of_Adventure.jpg",
  "ioa-jurassic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/VelociCoaster_2.jpg/1280px-VelociCoaster_2.jpg",
  "ioa-mythos-show": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Poseidon%27sFury.JPG/1280px-Poseidon%27sFury.JPG",

  // Epic Universe
  "eu-hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/UEU_Entrance.jpg/1280px-UEU_Entrance.jpg",
  "eu-mario": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Super_Nintendo_World_%28Universal_Studios_Japan%29.png/1280px-Super_Nintendo_World_%28Universal_Studios_Japan%29.png",
  "eu-yoshi": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Super_Nintendo_World_%28Universal_Studios_Japan%29.png/1280px-Super_Nintendo_World_%28Universal_Studios_Japan%29.png",
  "eu-stardust": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Stardust_Racers_in_twilight.jpg/1280px-Stardust_Racers_in_twilight.jpg",
  "eu-ministry": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dragon_breathing_fire_in_Diagon_ALley.jpg/1280px-Dragon_breathing_fire_in_Diagon_ALley.jpg",
  "eu-hiccup": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Celestial_Park.jpg/1280px-Celestial_Park.jpg",
  "eu-werewolf": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Curse_of_the_Werewolf.jpg/1280px-Curse_of_the_Werewolf.jpg",
  "eu-carousel": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/UEU_Entrance.jpg/1280px-UEU_Entrance.jpg",
  "eu-show": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Celestial_Park.jpg/1280px-Celestial_Park.jpg",
  "eu-night": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/UEU_Entrance.jpg/1280px-UEU_Entrance.jpg",
  "eu-dragon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Celestial_Park.jpg/1280px-Celestial_Park.jpg",
  "eu-minecart": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Super_Nintendo_World_%28Universal_Studios_Japan%29.png/1280px-Super_Nintendo_World_%28Universal_Studios_Japan%29.png",
  "eu-monsters": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Curse_of_the_Werewolf.jpg/1280px-Curse_of_the_Werewolf.jpg",
  "eu-mario-kart": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Super_Nintendo_World_%28Universal_Studios_Japan%29.png/1280px-Super_Nintendo_World_%28Universal_Studios_Japan%29.png",
  "eu-mine-cart": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Super_Nintendo_World_%28Universal_Studios_Japan%29.png/1280px-Super_Nintendo_World_%28Universal_Studios_Japan%29.png",
  "eu-curse": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Curse_of_the_Werewolf.jpg/1280px-Curse_of_the_Werewolf.jpg",
  "eu-constellation": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/UEU_Entrance.jpg/1280px-UEU_Entrance.jpg",
  "eu-berk-show": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Celestial_Park.jpg/1280px-Celestial_Park.jpg",
};

/** High-res fallback images from Wikimedia Commons */
export const parkFallbackImages: Record<string, string> = {
  "mk-hero": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Cinderella_Castle.jpg/1280px-Cinderella_Castle.jpg",
  "mk-tron": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Tron_Lightcycle_Run.jpg",
  "mk-space": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Magic_Kingdom_Space_Mountain.jpg/1280px-Magic_Kingdom_Space_Mountain.jpg",
  "mk-mine": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seven_Dwarfs_Mine_Train.jpg/1280px-Seven_Dwarfs_Mine_Train.jpg",
  "mk-peter": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_Pan%27s_Flight_%2834399881866%29.jpg/1280px-Peter_Pan%27s_Flight_%2834399881866%29.jpg",
  "mk-pooh": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Many_Adventures_of_Winnie_the_Pooh_at_Walt_Disney_World_01.jpg/1280px-The_Many_Adventures_of_Winnie_the_Pooh_at_Walt_Disney_World_01.jpg",
  "mk-small-world": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/It%27s_a_Small_World_%2840919313264%29.jpg/1280px-It%27s_a_Small_World_%2840919313264%29.jpg",
  "mk-little-mermaid": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Under_the_Sea_%2842591053734%29.jpg/1280px-Under_the_Sea_%2842591053734%29.jpg",
  "mk-barnstormer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/The_Barnstormer_%2816480749069%29.jpg/1280px-The_Barnstormer_%2816480749069%29.jpg",
  "mk-dumbo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dumbo_the_Flying_Elephant_%2834399859596%29.jpg/1280px-Dumbo_the_Flying_Elephant_%2834399859596%29.jpg",
  "mk-tea-party": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mad_Tea_Party_%2816665793091%29.jpg/1280px-Mad_Tea_Party_%2816665793091%29.jpg",
  "mk-philharmagic": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mickey%27s_PhilharMagic_%2835200388276%29.jpg/1280px-Mickey%27s_PhilharMagic_%2835200388276%29.jpg",
  "mk-carousel": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Prince_Charming_Regal_Carrousel_%2834438965663%29.jpg/1280px-Prince_Charming_Regal_Carrousel_%2834438965663%29.jpg",
  "mk-belle": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Enchanted_Tales_with_Belle_%288730997194%29.jpg/1280px-Enchanted_Tales_with_Belle_%288730997194%29.jpg",
  "mk-haunted": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_Haunted_Mansion.jpg/1280px-The_Haunted_Mansion.jpg",
  "mk-riverboat": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Liberty_Belle_Riverboat_%2835240989075%29.jpg/1280px-Liberty_Belle_Riverboat_%2835240989075%29.jpg",
  "mk-presidents": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/The_Hall_of_Presidents_%2834399757966%29.jpg/1280px-The_Hall_of_Presidents_%2834399757966%29.jpg",
  "mk-thunder": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Big_Thunder_Mountain_Railroad_2.jpg/1280px-Big_Thunder_Mountain_Railroad_2.jpg",
  "mk-tiana": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Tiana%27s_Bayou_Adventure_%28Magic_Kingdom%29_1.jpg/1280px-Tiana%27s_Bayou_Adventure_%28Magic_Kingdom%29_1.jpg",
  "mk-country-bears": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Country_Bear_Jamboree_%2834438947653%29.jpg/1280px-Country_Bear_Jamboree_%2834438947653%29.jpg",
  "mk-pirates": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adventureland_at_Magic_Kingdom.jpg/1280px-Adventureland_at_Magic_Kingdom.jpg",
  "mk-jungle": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Jungle_Cruise.jpg/1280px-Jungle_Cruise.jpg",
  "mk-aladdin": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/The_Magic_Carpets_of_Aladdin_%2834438927063%29.jpg/1280px-The_Magic_Carpets_of_Aladdin_%2834438927063%29.jpg",
  "mk-tiki": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Walt_Disney%27s_Enchanted_Tiki_Room_%2835200346386%29.jpg/1280px-Walt_Disney%27s_Enchanted_Tiki_Room_%2835200346386%29.jpg",
  "mk-treehouse": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Swiss_Family_Treehouse_%2834399723226%29.jpg/1280px-Swiss_Family_Treehouse_%2834399723226%29.jpg",
  "mk-railroad": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Walt_Disney_World_Railroad_%2834438902503%29.jpg/1280px-Walt_Disney_World_Railroad_%2834438902503%29.jpg",
  "mk-festival": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Princess_Garden%2C_Festival_of_Fantasy_Parade_%2816398355087%29.jpg/1280px-Princess_Garden%2C_Festival_of_Fantasy_Parade_%2816398355087%29.jpg",
  "mk-buzz": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Buzz_Lightyear%27s_Space_Ranger_Spin.jpg/1280px-Buzz_Lightyear%27s_Space_Ranger_Spin.jpg",
  "mk-monsters": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Monsters%2C_Inc._Laugh_Floor_%2835240957595%29.jpg/1280px-Monsters%2C_Inc._Laugh_Floor_%2835240957595%29.jpg",
  "mk-speedway": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tomorrowland_Speedway_%2834399694466%29.jpg/1280px-Tomorrowland_Speedway_%2834399694466%29.jpg",
  "mk-astro-orbiter": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Astro_Orbiter_%2834399684696%29.jpg/1280px-Astro_Orbiter_%2834399684696%29.jpg",
  "mk-peoplemover": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wdw-peoplemover.jpg/1280px-Wdw-peoplemover.jpg",
  "mk-carousel-progress": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Walt_Disney%27s_Carousel_of_Progress_%2834438865613%29.jpg/1280px-Walt_Disney%27s_Carousel_of_Progress_%2834438865613%29.jpg",
  "mk-hea": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fireworks_in_Magic_Kingdom.jpg/1280px-Fireworks_in_Magic_Kingdom.jpg",
};

