# La tierra de Israel: prompts para Google Flow

Hay 20 escenas en 4:3 y la portada en 16:9. Cada prompt va en inglés y está completo: se copia y se pega tal cual.
Cuando subas cada imagen al chat, indica su nombre de archivo (columna «Archivo»).
El registro de todos los personajes del proyecto está en la hoja «Personajes Flow» de la planilla «orden_publicacion_recursos».

## Personajes de Flow

Jesús-adulto-espalda y Moisés ya existen. Antes de las escenas 18 y 20, crea el único personaje nuevo, Abraham, con su prompt de referencia y ese nombre exacto. Después genera cada escena adjuntando los personajes que indica la tabla.

| Personaje en Flow | Estado | Se usa en |
|---|---|---|
| Jesús-adulto-espalda | Ya existe (solo de espaldas) | Escena 4 |
| Moisés | Ya existe (anciano) | Escena 9 |
| Abraham | Nuevo | Escenas 18 y 20 |

En las demás escenas no aparecen personajes con nombre. La samaritana, los pescadores, los pastores, los ancianos de la puerta, los peregrinos y los soldados son anónimos. La mujer samaritana no tiene nombre en la Biblia, así que no se crea como personaje.

### Jesús de frente (decisión del 21-10-2026)

Desde ahora existe también el personaje **Jesús-adulto**, de frente, para las escenas en que su rostro o su expresión son el centro (la mirada a Pedro, el llanto sobre Jerusalén). Por defecto se sigue usando Jesús-adulto-espalda, y los dos no se mezclan en una misma escena. En este recurso, la escena 4 (el pozo de Jacob) se mantiene de espaldas. Si prefieres hacerla de frente, adjunta Jesús-adulto y cambia la frase «is seen only from behind and slightly from the side, his face not visible» por «is seen in three-quarter view, his face turned toward the woman with a calm, attentive expression». Crea el personaje con este prompt, con el nombre exacto Jesús-adulto:

```
Photorealistic character reference photo, real person in costume, studio photography, plain neutral warm-grey studio background, soft even light. Full body, standing, front view and three-quarter view side by side. Jesus of Nazareth at about thirty years of age, a Galilean Jewish man of the first century AD, Middle Eastern features, olive-brown sun-tanned skin, dark brown eyes, dark brown wavy hair to the shoulders, full dark beard of medium length, lean build of a man who works with his hands and walks long distances, a calm, kind and attentive expression. He wears an ankle-length off-white tunic of coarse wool, a light brown wool mantle over the shoulders with blue tassels at the four corners, a simple cloth belt and leather sandals. Historically grounded first-century Galilean clothing, no halo, no glow. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

Usa el mismo cabello castaño ondulado y el mismo vestuario que Jesús-adulto-espalda, para que los dos personajes sean la misma persona.

### Prompt de referencia del personaje nuevo

#### Abraham

```
Photorealistic character reference photo, real person in costume, studio photography, plain neutral warm-grey studio background, soft even light. Full body, standing, front view and three-quarter view side by side. Abraham the patriarch, a Semitic nomadic herdsman of the Middle Bronze Age around 2000 BC, an elderly man of about eighty but strong and upright, deeply tanned and weathered skin, long white beard and long white hair partly covered by a cream wool head cloth held by a simple dark cord, calm and steadfast expression. He wears an ankle-length undyed wool tunic, a heavy wool mantle with broad brown, ochre and dark red vertical stripes, a wide leather belt, leather sandals, and holds a tall wooden shepherd's staff. Historically grounded Middle Bronze Age Amorite clothing. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

---

## Escenas

| # | Archivo | Estación | Personajes que se adjuntan |
|---|---|---|---|
| 1 | `costa.webp` | II.1 La llanura costera | Ninguno |
| 2 | `sefela.webp` | II.2 La Sefela | Ninguno |
| 3 | `terrazas.webp` | II.3 La serranía de Judá | Ninguno |
| 4 | `pozo-jacob.webp` | II.4 Samaria y la serranía de Efraín | Jesús-adulto-espalda |
| 5 | `carmelo.webp` | II.5 El Carmelo y el valle de Jezreel | Ninguno |
| 6 | `galilea.webp` | II.6 Galilea y su mar | Ninguno |
| 7 | `jordan.webp` | II.7 El valle del Jordán | Ninguno |
| 8 | `engadi.webp` | II.8 El desierto de Judea y el Neguev | Ninguno |
| 9 | `nebo.webp` | II.9 Al otro lado del Jordán | Moisés |
| 10 | `rocio.webp` | III.3 Rocío, vientos y sequía | Ninguno |
| 11 | `cisterna.webp` | III.4 Fuentes, pozos y cisternas | Ninguno |
| 12 | `pastor.webp` | III.6 Pastores y rebaños | Ninguno |
| 13 | `caravana.webp` | IV.1 Los caminos internacionales | Ninguno |
| 14 | `puerta.webp` | IV.4 Ciudades, tells y puertas | Ninguno |
| 15 | `peregrinos.webp` | IV.6 Distancias y viajes a pie | Ninguno |
| 16 | `masada.webp` | V.1 Destrucción y dispersión | Ninguno |
| 17 | `basilica.webp` | V.2 Tierra Santa cristiana | Ninguno |
| 18 | `abraham.webp` | VI.1 La promesa a Abraham | Abraham |
| 19 | `lindero.webp` | VI.4 «La tierra mía es» | Ninguno |
| 20 | `tiendas.webp` | VI.7 Una patria mejor | Abraham |
| P | `portada.webp` | Portada del recurso (16:9) | Ninguno |

Los prompts comparten el mismo cierre: «No text… no painterly brushstrokes». No lo quites, porque evita que Flow genere ilustraciones.

### 1. costa.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, soft early morning light, real water, rock, wood and stone textures, 4:3 aspect ratio, landscape. The small natural harbor of ancient Joppa on the Mediterranean coast around 800 BC: a low rocky reef shelters calm water where three small wooden sailing boats with furled square sails are moored; anonymous fishermen in simple tunics mend nets on the rocks; behind them, a hill with mudbrick and stone houses and a city wall rises above the shore. Sandy beach and dunes stretch to the south in the haze. Calm turquoise sea. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no modern buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 2. sefela.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 50mm lens, warm spring afternoon light, real grass, soil, rock and leaf textures, 4:3 aspect ratio, landscape. The Shephelah lowlands of ancient Judah: low rounded limestone hills covered with green spring grass, a wide valley floor with fields of young green wheat, scattered large sycamore fig trees with spreading branches, a few olive trees, and on a distant hilltop a small walled town of stone. In the foreground, an anonymous young shepherd in a simple wool tunic walks with a few sheep along a dirt path. Peaceful, open landscape. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no roads, no power lines. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 3. terrazas.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, golden late afternoon light, real stone, soil, vine and leaf textures, 4:3 aspect ratio, landscape. The hill country of Judea near Bethlehem in the Iron Age: a steep hillside shaped into terraces held by dry stone walls, rows of grapevines on the terraces, old olive trees and a few fig trees; in the middle of the vineyard stands a small round watchtower built of rough stones, and next to it a wine press cut into the bedrock. In the distance, a small village of flat-roofed stone houses on a ridge. No people, or only one tiny anonymous farmer far away. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no modern buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 4. pozo-jacob.webp (adjuntar Jesús-adulto-espalda)

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 50mm lens, bright midday sunlight with soft shadows, real stone, fabric and pottery textures, shallow depth of field, 4:3 aspect ratio, landscape. Samaria around AD 28. Jesus (attached character Jesús-adulto-espalda) is seen only from behind and slightly from the side, his face not visible, sitting tired on the low stone rim of an ancient well with a round stone mouth. Facing him and the camera, an anonymous Samaritan woman of about thirty-five, in a long faded red-brown dress and a cream head covering, holds a large clay water jar on her hip and listens with surprise. Behind them rises the rocky slope of Mount Gerizim, with olive trees and a dusty path. Subject centered. No text, no captions, no watermark, no logos, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 5. carmelo.webp

```
Photorealistic film still from a high-budget historical movie, wide shot on a full-frame cinema camera with a 24mm lens, dry hazy late afternoon light, real rock, grass and soil textures, 4:3 aspect ratio, landscape. View from the rocky top of Mount Carmel in ancient Israel, after a long drought: in the foreground, dry yellow grass, oak scrub and limestone rocks; below, the wide flat Jezreel Valley stretches into the distance with dry brown and yellow fields and a winding riverbed almost empty of water; on the far left, the blue Mediterranean Sea. Above the sea, in an otherwise clear and pale sky, a single small dark cloud is rising, about the size of a man's hand. No people. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no roads, no buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 6. galilea.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, soft dawn light with mist on the water, real wood, rope, net, skin and water textures, 4:3 aspect ratio, landscape. The Sea of Galilee around AD 28: a wooden first-century fishing boat about eight meters long, with a short mast and furled sail, floats on calm water; three anonymous Galilean fishermen in short work tunics, with sun-darkened skin, haul a wet dragnet full of silver fish over the side. Behind them, the green hills of the shore and a small fishing village of black basalt houses, half hidden in the morning mist. Subject centered. No text, no captions, no watermark, no logos, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 7. jordan.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, warm morning light, real water, mud, reed and leaf textures, 4:3 aspect ratio, landscape. The Jordan River in ancient times, south of the Sea of Galilee: a narrow river of muddy green water winds between banks covered with a dense thicket of tamarisks, tall reeds, willows and poplars; a heron stands in the shallows; beyond the green ribbon of the river, the bare beige hills of the Jordan Valley rise on both sides under a clear sky. No people. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no bridges, no buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 8. engadi.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, bright desert light, real rock, water, moss and animal textures, 4:3 aspect ratio, landscape. The oasis of En Gedi in the Judean Desert: a waterfall falls down a narrow gorge of pale limestone into a clear pool surrounded by green reeds, maidenhair ferns and small trees, in the middle of a bare, sunburnt desert canyon; two Nubian ibexes with long curved horns stand on the rocks beside the water; in the distance, through the mouth of the canyon, the deep blue Dead Sea and the mountains of Moab. No people. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no paths, no railings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 9. nebo.webp (adjuntar Moisés)

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, warm hazy late afternoon light, real skin, fabric, wood and rock textures, 4:3 aspect ratio, landscape. Moses (attached character Moisés), a very old man with a long white beard and a dark brown mantle, stands alone on the rocky summit of Mount Nebo, leaning on his wooden staff, seen from the side and slightly from behind, gazing west. Below him spreads the vast Jordan Valley with the green oasis of Jericho, the blue northern tip of the Dead Sea and the hills of Canaan fading into a golden haze. Solemn, quiet atmosphere. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 10. rocio.webp

```
Photorealistic film still from a high-budget historical movie, close shot on a full-frame cinema camera with a 85mm lens, soft blue dawn light turning golden, real leaf, grape and water droplet textures, shallow depth of field, 4:3 aspect ratio, landscape. In an ancient vineyard in upper Galilee at dawn in late summer, large drops of dew cover the broad green vine leaves and clusters of ripening green grapes in the foreground; the vines grow low along the ground and on stones. In the blurred background, beyond the misty hills, the high snow-capped summit of Mount Hermon catches the first light. No people. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no wires, no metal posts. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 11. cisterna.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, soft morning light in an open courtyard, real stone, plaster, rope, pottery and fabric textures, 4:3 aspect ratio, landscape. The courtyard of a stone house in an Iron Age village in the hills of Judah: in the stone floor there is a round opening of a cistern cut into the bedrock, with a worn stone rim and plastered walls visible inside. An anonymous Judean woman of about forty, in a long dark blue dress and an off-white head covering, pulls up a clay jar tied to a rope from the cistern; another jar waits beside her. A clay oven, a stone bench and a doorway in the background. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no metal buckets. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 12. pastor.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 50mm lens, warm low sunset light, real wool, skin, rock and dust textures, 4:3 aspect ratio, landscape. In the rolling dry hills of the Judean wilderness, an anonymous Judean shepherd of about forty, with a short dark beard, a coarse striped wool mantle and a long wooden staff, walks ahead of his flock of white sheep and black goats, which follow him in a line along a narrow path on the slope; a small leather bag and a sling hang from his belt. Golden dust in the air, long shadows, bare hills fading into the distance. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no dogs with collars. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 13. caravana.webp

```
Photorealistic film still from a high-budget historical movie, wide shot on a full-frame cinema camera with a 35mm lens, warm late afternoon light, real animal, fabric, leather and dust textures, 4:3 aspect ratio, landscape. An ancient trade caravan around 1000 BC travels along a dirt road on the coastal plain of Canaan: a long line of camels loaded with bales of cloth, baskets and bundles of spices, led by anonymous Arabian and Midianite merchants in turbans, striped mantles and sandals; a few donkeys carry water skins. To the right, the blue Mediterranean Sea and dunes; to the left, green fields and a walled city on a mound in the distance. Dust rises in the low sunlight. Subject centered. No text, no captions, no watermark, no logos, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 14. puerta.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, warm morning light and deep shadows, real stone, wood, fabric and skin textures, 4:3 aspect ratio, landscape. The gate of a walled Israelite town in the Iron Age: a massive gatehouse of large stones with a passage and side chambers, stone benches along the walls. On the benches, a group of anonymous elderly town elders with grey beards, in wool mantles and head coverings, sit listening to two anonymous men who stand before them, one of them gesturing as he explains his case. Villagers with donkeys loaded with sacks pass through the gate; a heavy wooden gate door stands open. Subject centered. No text, no inscriptions, no captions, no watermark, no logos, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 15. peregrinos.webp

```
Photorealistic film still from a high-budget historical movie, wide shot on a full-frame cinema camera with a 35mm lens, bright spring morning light, real fabric, skin, stone and dust textures, 4:3 aspect ratio, landscape. A large group of anonymous Jewish pilgrims of the first century AD walks up a stony road through green spring hills toward Jerusalem for the Passover festival: families with children, grandparents, young men carrying bundles, women with baskets, a few donkeys loaded with provisions, some lambs walking with them; several people sing with joy. In the far distance, on a mountain, the walls of Jerusalem and the white and gold temple shine in the sun. Subject centered. No text, no captions, no watermark, no logos, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 16. masada.webp

```
Photorealistic film still from a high-budget historical movie, wide shot on a full-frame cinema camera with a 24mm lens, harsh desert afternoon light, real rock, earth, leather and metal textures, 4:3 aspect ratio, landscape. The Roman siege of Masada in AD 73: a huge isolated rock plateau with sheer cliffs rises above the desert near the Dead Sea; on its western side, a long ramp of earth and timber climbs up to the walls of the fortress at the top. At the foot of the mountain, a Roman legionary camp with straight lines of leather tents inside a stone rampart; anonymous Roman legionaries in armor and red tunics carry baskets of earth up the ramp. In the background, the blue Dead Sea and the mountains of Moab. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no cable car. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 17. basilica.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 35mm lens, warm light from oil lamps and high windows, real stone, marble, mosaic and fabric textures, 4:3 aspect ratio, landscape. The interior of a large fifth-century Byzantine basilica in the Holy Land, not any specific real church: two rows of stone columns, a floor of colorful geometric mosaics, an apse with gold mosaics and hanging bronze oil lamps. Anonymous Christian pilgrims of the period, men and women in travel cloaks with walking staffs and small bags, enter quietly, some kneeling in prayer, one woman lighting a lamp. Calm, reverent atmosphere with rays of light through the windows. Subject centered. No text, no inscriptions, no readable writing, no captions, no watermark, no logos, no modern objects, no recognizable real building. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 18. abraham.webp (adjuntar Abraham)

```
Photorealistic film still from a high-budget historical movie, wide shot on a full-frame cinema camera with a 35mm lens, golden sunset light, real skin, wool, wood and rock textures, 4:3 aspect ratio, landscape. Abraham (attached character Abraham), an elderly patriarch with a long white beard and a striped wool mantle, stands on a rocky hilltop near Bethel, leaning on his tall wooden staff, seen in three-quarter view from behind as he looks out over the land. Before him stretch the hills and valleys of Canaan in all directions, with terraced slopes, oak trees and distant ridges fading in the haze, and the Jordan Valley glowing far to the east. Below the hill, his black goat-hair tents and grazing flocks of sheep and goats. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 19. lindero.webp

```
Photorealistic film still from a high-budget historical movie, shot on a full-frame cinema camera with a 50mm lens, soft late afternoon light, real stone, earth, bark and leaf textures, shallow depth of field, 4:3 aspect ratio, landscape. On a terraced hillside in ancient Samaria, a tall rough standing stone, a boundary marker about one meter high, stands at the corner between two family plots of old gnarled olive trees, beside a low dry stone wall. In the soft-focus background, an anonymous farmer in a simple tunic prunes an olive tree, and a small stone village lies on the next hill. Quiet, timeless atmosphere. Subject centered. No text, no inscriptions, no captions, no watermark, no logos, no modern objects, no fences, no wires. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### 20. tiendas.webp (adjuntar Abraham)

```
Photorealistic film still from a high-budget historical movie, wide night shot on a full-frame cinema camera with a 24mm lens, deep blue night with a brilliant starry sky and the Milky Way, faint warm firelight, real fabric, skin and rock textures, 4:3 aspect ratio, landscape. Abraham (attached character Abraham), an elderly patriarch with a long white beard and a striped wool mantle, stands outside a large black goat-hair tent, seen from behind and slightly from the side, his head lifted toward the countless stars filling the sky. Around him, the dark shapes of other tents, resting camels and a small dying campfire, on the hills of Canaan under the night sky. Silent, awe-filled atmosphere. Subject centered. No text, no captions, no watermark, no logos, no modern objects, no lights from towns. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

### P. portada.webp (16:9)

```
Photorealistic film still from a high-budget historical epic, ultra-wide aerial establishing shot on a full-frame cinema camera, golden hour light, real terrain textures, 16:9 aspect ratio, landscape. A breathtaking view across the land of ancient Israel from high above the Judean hills looking east: in the foreground, terraced hills with olive groves and a small ancient stone village; in the middle, the bare folds of the Judean Desert descending steeply; beyond, the deep Jordan Valley with the green oasis of Jericho and the shining blue Dead Sea; on the horizon, the mountains of Moab glowing in warm light under a vast sky with a few clouds. The land is the clear subject, centered. No people. No text, no captions, no watermark, no logos, no modern objects, no roads, no modern buildings. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

## Fotos reales por agregar (con licencia verificada)

| Archivo | Estación | Qué buscar |
|---|---|---|
| `calendario-gezer.jpg` | III.5 El año agrícola | Foto del calendario de Gézer (Museo Arqueológico de Estambul) en Wikimedia Commons, con licencia CC o dominio público |
| `arco-tito.jpg` | V.1 Destrucción y dispersión | Relieve del botín del templo (el candelabro) en el Arco de Tito, Roma |
| `mapa-madaba.jpg` | V.2 Tierra Santa cristiana | Detalle de Jerusalén en el mosaico del mapa de Madaba |

Descarga cada foto en su resolución original y súbela al chat con el enlace a su página de Commons, para verificar la licencia antes de publicarla.
