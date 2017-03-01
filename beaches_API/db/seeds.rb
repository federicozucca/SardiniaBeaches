Beach.delete_all();
Airport.delete_all();
Port.delete_all();

a1 = Airport.create({
  name: 'Cagliari Elmas',
  lat: 39.2515388,
  lng: 9.05567229999997
  })

a2 = Airport.create({
  name: 'Olbia Costa Smeralda',
  lat: 40.9003714,
  lng: 9.518049499999961
  })

a3 = Airport.create({
  name: 'Alghero Fertilia',
  lat: 40.6332779,
  lng: 8.289684599999987
  })

p1 = Port.create({
  name: 'Cagliari',
  lat: 39.21427,
  lng: 9.110458999999992
  })

p2 = Port.create({
  name: 'Olbia',
  lat: 40.922576,
  lng: 9.52449200000001
  })

p3 = Port.create({
  name: 'Porto Torres',
  lat: 40.8335,
  lng: 8.402140000000031
  })

p4 = Port.create({
  name: 'Arbatax',
  lat: 39.9373247,
  lng: 9.70410979999997
  })

p5 = Port.create({
  name: 'Santa Teresa di Gallura',
  lat: 41.2384475,
  lng: 9.19358253
  })


Beach.create({
  name: "Poetto",
  territory: "Cagliari",
  tipology: "sand",
  lat: 39.211241, 
  lng: 9.180052,
  img: "poetto.jpg",
  parking: "Mostly free",
  wiki: "Poetto is Cagliari's main beach. It stretches for about eight kilometers, from Sella del Diavolo up to the coastline of Quartu Sant'Elena",
  airport:a1,
  port:p1
})

Beach.create({
  name: "La Pelosa",
  territory: "Stintino",
  tipology: "sand",
  lat: 40.9626612,
  lng: 8.21010769999998,
  img: "lapelosa.jpg",
  parking: "Payment parking",
  wiki: "La Pelosa is one of the most famous beach on the North-West coast. It is famous also for its island reacheable by walk and its tower.",
  airport:a3,
  port:p3
})

Beach.create({
  name: "Is Arutas",
  territory: "Cabras",
  tipology: "pebbles",
  lat: 39.9531173,
  lng: 8.401319699999931,
  img: "isarutas.jpg",
  parking: "Payment parking",
  wiki: "Due the composition of its sand (small quartz grains), it is also known as the beach of the rice grains.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Cala Cipolla",
  territory: "Chia",
  tipology: "sand",
  lat: 38.8790211,
  lng: 8.854016000000001,
  img: "calacipolla.jpg",
  parking: "Payment parking",
  wiki: "It is famous for its dunes.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Cala Mariolu",
  territory: "Baunei",
  tipology: "pebbles",
  lat: 40.123954,
  lng: 9.676484999999957,
  img: "calamariolu.jpg",
  parking: "Payment parking",
  wiki: "The most accessible way to get to the Cala is by sea, starting from Santa Maria Navarrese or Arbatax (Tortolì fraction) from the south, or from Cala Gonone, starting from the north. The beach can be reached by land through a long path that starts from the plateau of Golgo.",
  airport:a1,
  port:p4
})

Beach.create({
  name: "Cala Goloritze",
  territory: "Baunei",
  tipology: "pebbles/sand",
  lat: 40.1084992,
  lng: 9.689316800000029,
  img: "calagoloritze.jpg",
  parking: "Payment parking",
  wiki: "The beach, one of the most evocative of Sardinia, created by a landslide in 1962, is famous for its high pinnacle 143 meters above the falls, also known to climbers for its rock climbing routes. Another feature of the beach is the natural arch that opens on the right side of the bay. The most convenient route and less demanding way to get to the beach, is by sea. There are boat available for transport services and for rent from nearby ports of Arbatax, Santa Maria Navarrese (Baunei). The landing in the cove is prohibited. Goloritzè was declared a natural monument Region of Sardinia in 1993, and then named Italian National Monument in 1995.",
  airport:a1,
  port:p4
})

Beach.create({
  name: "Porto Pino",
  territory: "Teulada",
  tipology: "sand",
  lat: 38.95853390000001,
  lng: 8.612613699999997,
  img: "portopino.jpg",
  parking: "Payment parking",
  wiki: "The Porto Pino beach is about 4 km. It is traditionally divided into three portions: two different beaches, separated by the ruins of a pier, that once protected another inlet channel, and the sand dunes area. The dune area, or white sands (Is arenas Biancas) is the third of the beach area. Along approximately 1 km, is located within the perimeter of Capo Teulada military range. Access is allowed only in summer.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Porto Giunco",
  territory: "Villasimius",
  tipology: "sand",
  lat: 39.11554427,
  lng: 9.51922417,
  img: "portogiunco.jpg",
  parking: "Free parking",
  wiki: "Geographically the beach of Porto Giunco ​​is located at the foot of a hill on which stands an old Spanish watch tower which takes the name of the beach and is known as the Tower of Porto Giunco. The beach consists of a very fine white sand that has shades of pink opal, color comes from tiny debris of the pink granite rocks, derived from erosion of rocks. The water, which has a light blue color, is always crystal clear, especially in the days of mistral. Away from the coast the sea changes color showing an infinity of shades of blue.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Scoglio di Peppino",
  territory: "Muravera",
  tipology: "sand",
  lat: 39.2368362,
  lng: 9.5719552,
  img: "scogliodipeppino.jpg",
  parking: "Free parking",
  wiki: "The splendid little beach of Scoglio di Peppino (Spiaggia di Scoglio di Peppino) can be found 1.5 kilometers south of Costa Rei. It has a length of only 120 meters and faces south-east, featuring marvelous views of Scoglio di Peppino (Peppino’s Rock), a natural extension of Punta Santa Giusta. In the far distance to the north, the mountains of the Capo Ferrato headlands compliment the beautiful scenery. Peppino’s granite rock is the main attraction of this beach. It’s about 30 meters long, and shaped like a big whale. It can easily be reached from the beach through shallow waters, and it is low and flat enough to walk on. Around the rock you’ll spot some natural pools and small inlets. The view from the rock is excellent, so if you can, bring your camera!",
  airport:a1,
  port:p1
})

Beach.create({
  name: "S'archittu",
  territory: "Oristano",
  tipology: "sand",
  lat: 40.090298,
  lng: 8.4924813,
  img: "sarchittu.jpg",
  parking: "Free parking",
  wiki: "The locality takes its name from the rock arch (S'Archittu) which encloses the beach, easily reachable by walk via a footway; during summer nights the arch is illuminated. The top of the arch is used for sea diving and it was the location of one event in the 2001 High Dive World Championship.[1] The arch, about 15 metres high, is a result of marine erosion of an ancient cave formed in the limestone.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Masua",
  territory: "Bugerru",
  tipology: "sand",
  lat: 39.3312716,
  lng: 8.4290463,
  img: "masua.jpg",
  parking: "Free parking",
  wiki: "Masua was a former mine in the past and a seaside resort today. Off the coast, facing the beach, you can see the sea stack Pan di Zucchero.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Cala Luna",
  territory: "CalaGonone",
  tipology: "sand",
  lat: 40.2252863,
  lng: 9.6262187,
  img: "calaluna.jpg",
  parking: "Free parking",
  wiki: "The beach is the mouth of a river that marks the border of the municipalities of Dorgali and Baunei, municipalities claiming in turn ownership of the site, this stream, called Cala Luna, stretches for several kilometers, from the slopes of Mountain Oseli (984 m) in the municipality of Urzulei. The beach is characterized by the presence of several caves and inlets in the front of the shoreline, due to the action of sea erosion on the rock of calcareous origin. Cala Luna is famous for its beauty and particularity, and has been used as a framework for the registration of many Italian and foreign films.",
  airport:a1,
  port:p1
})

Beach.create({
  name: "Arcipelago la Maddalena",
  territory: "lamaddalena",
  tipology: "sand",
  lat: 41.2313758,
  lng: 9.406167,
  img: "lamaddalena.jpg",
  parking: "Payment parking",
  wiki: "Visit the fascinating archipelago of La Maddalena is a must for tourists who wants to visit Sardinia. A spectacular naturalistic heritage is offered by the isles of La Maddalena and Caprera you should not miss. You can reach the main island of La Maddalena by a car ferries departing every day in the summer from Palau.",
  airport:a2,
  port:p3
})

Beach.create({
  name: "Rena Bianca",
  territory: "SantaTeresaDiGallura",
  tipology: "sand",
  lat: 41.2450789,
  lng: 9.1891569,
  img: "renabianca.jpg",
  parking: "Payment parking",
  wiki: "The main beach is Rena Bianca wich is a small rocky bay, not very far form the town where you can find a lot of beach establishment. To the other side of this beach there is the harbor from which ferries depart to reach Corsica.",
  airport:a2,
  port:p5
})

Beach.create({
  name: "Cala Brandinchi",
  territory: "SanTeodoro",
  tipology: "sand",
  lat: 40.834719,
  lng: 9.6858272,
  img: "calabrandinchi.jpg",
  parking: "Payment parking",
  wiki: "Cala Brandinchi beach has amazingly clear and shallow waters, making this beach perfectly suitable for families with small children. Cala Brandinchi beach faces east and is over 700 meters long – perfect for a relaxing stroll along the waterline! Sandy dunes with pine trees and lovely lillies further define the excellent surroundings of this beach. It shouldn’t come as a surprise that Cala Brandinchi beach is a very popular beach during summer. It has won a place in the top ten of Best Beaches of Italy many times, and is on our list of Best Beaches of San Teodoro.",
  airport:a2,
  port:p2
})

Beach.create({
  name: "Liscia Ruja",
  territory: "PortoCervo",
  tipology: "sand",
  lat: 41.0707821,
  lng: 9.5285154,
  img: "lisciaruja.jpg",
  parking: "Payment parking",
  wiki: "Liscia Ruja Beach is rather long and wide, making it ideal for long walks along the waterline in spring. Its dimensions somewhat increase your chance of finding a good spot in the morning, even during peak season in August. In some places the beach can be up to 50 meters wide which on hot days can be quite a stretch without proper footwear. The sand is of a powdery white and fine quality, and the water incredibly light blue.",
  airport:a2,
  port:p2
})


Beach.create({
  name: "Campana Dune",
  territory: "Chia",
  tipology: "sand",
  lat: 38.88228076,
  lng: 8.86013031,
  img: "campanadune.jpg",
  parking: "Payment parking",
  wiki: "Situated in front of the Chia Golf Sporting Club, 1 kilometer south-east of Setti Ballas, you’ll discover the beach of Campana Dune (Spiaggia di Campana Dune). This is the northernmost part of a 1.7 kilometer long stretch of soft sand that extends all the way to the beach of Su Giudeu. Sheltered by a small rocky headland, Campana Dune is up to 80 meters wide at some spots, and is backed by pretty dunes that can reach up to 20 meters high. Spiaggia di Campana Dune is 400 meters long, and faces south-east, featuring marvelous vistas of the Torre di Chia to the north-east, and Isola su Giudeu to the south. Campana is a nice beach for families with children, as the waters remain shallow for quite a long way out, and you’ll find plenty of corners near the dunes where you’ll be sheltered from the Mistral and Sirocco winds. Beach activities include beach tennis, kayaking, paddle boating, windsurfing, and kitesurfing. Overall, this part of south Sardinia is very nice for hiking and walking as well.",
  airport:a1,
  port:p1
})

 Beach.create({
   name: "Arcipelago Asinara",
   territory: "Stintino",
   tipology: "sand",
   lat: 41.0523108,
   lng: 8.2095084,
   img: "asinara.jpg",
   parking: "Payment parking",
   wiki: "Archipelago of islands to the north of Porto Torres in front of Stintino. Island - famous for its namesake jail now abandoned - were numerous Mafia bosses held until 1998. Now the seat of the regional park where you can admire various species of flora and fauna including the white donkey. Overland tours by jeep, bike or motorcycle or by sea with boats, catamarans, sailboats. Departures from Stintino and Porto Torres.",
   airport:a3,
   port:p3
 })

 Beach.create({
   name: "Spiaggia del Lazzaretto",
   territory: "Alghero",
   tipology: "sand",
   lat: 40.5819649,
   lng: 8.2467645,
   img: "lazzaretto.jpg",
   parking: "Payment parking",
   wiki: "Among the most famous and picturesque in the area of ​​Alghero. Besides the main beach there are many coves with white sand and crystal clear water emerald green. Ideal for diving and kayaking. Bars and restaurants where you can enjoy fresh fish. Named as one of the best beaches of Sardinia by readers of The Guardian.",
   airport:a3,
   port:p3
 })








