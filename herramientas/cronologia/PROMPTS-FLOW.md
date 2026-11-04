# Cronología del Nuevo Testamento: prompts para Google Flow

Ocho escenas, la portada y una foto real. **Estado (3 de noviembre de 2026): todo integrado.** Variantes elegidas: B en Dionisio, el incendio de Roma y la portada (la A mostraba una cúpula anacrónica); A en las demás. La foto de Delfos tiene la licencia verificada. Cada prompt va en inglés y está completo: se copia y se pega tal cual.
Cuando subas cada imagen al chat, indica su nombre de archivo (columna «Archivo»). Las escenas van en 4:3 y la portada en 16:9.
El registro de todos los personajes del proyecto está en la hoja «Personajes Flow» de la planilla «orden_publicacion_recursos».

El recurso reutiliza veintiocho imágenes, fotos y esquemas de otros recursos (Hechos, Los viajes de Pablo, El imperio romano, La dinastía de Herodes, El mundo judío, La persona y obra de Cristo, Pesos y medidas, De la Biblia a nosotros y Apocalipsis) y doce esquemas propios (`herramientas/esquemas_cronologia.py`). Dios no se representa en ninguna escena. Jesús aparece en una sola escena nueva, a los doce años, de espaldas.

## Escenas

| Nº | Archivo | Estación | Personajes de Flow |
|---|---|---|---|
| 1 | cr-dionisio.webp | I.2 Dionisio el Exiguo y el año 1 | Dionisio-el-Exiguo (nuevo) |
| 2 | cr-zacarias-incienso.webp | II.1 Zacarías y el turno de Abías | Zacarías-sacerdote (nuevo) |
| 3 | cr-jesus-doce.webp | II.6 Jesús a los doce años y los años en Nazaret | Jesús-doce-años (nuevo, de espaldas); maestros anónimos |
| 4 | cr-pascua-corderos.webp | IV.3 La Pascua en Juan y en los otros evangelios | Ninguno (sacerdotes y multitud anónimos) |
| 5 | cr-jacobo-justo.webp | VII.1 La muerte de Jacobo, el hermano del Señor | Jacobo-hermano-del-Señor (nuevo) |
| 6 | cr-incendio-roma.webp | VII.2 Nerón y el incendio de Roma | Ninguno (habitantes anónimos) |
| 7 | cr-huida-pela.webp | VII.4 La guerra judía y la caída de Jerusalén | Ninguno (familias anónimas) |
| 8 | cr-juan-efeso.webp | VII.5 Juan en Éfeso | Juan-apóstol-anciano; creyentes anónimos |
| — | portada (16:9) | Portada del recurso | Ninguno |

## Personajes de Flow

Juan-apóstol-anciano ya existe (Apocalipsis). Crea primero los personajes nuevos con su prompt de referencia, con el nombre exacto de la tabla. Después genera cada escena adjuntando los personajes indicados.

| Personaje en Flow | Estado | Se usa en |
|---|---|---|
| Dionisio-el-Exiguo | Nuevo (monje, hacia 525 d.C.; no bíblico) | Escena 1. Servirá para Historia de la Iglesia I |
| Zacarías-sacerdote | Nuevo (Zacarías, padre de Juan el Bautista, unos 70 años, hacia 7 a.C.). No confundir con el profeta Zacarías ni con Zacarías hijo de Joiada | Escena 2. Servirá para Lucas 1 |
| Jesús-doce-años | Nuevo (Jesús a los doce años, hacia 8 d.C.; solo de espaldas o de tres cuartos posterior, sin rostro). Etapa anterior de Jesús-adulto-espalda | Escena 3. Servirá para Lucas 2 y la Armonía |
| Jacobo-hermano-del-Señor | Nuevo (Jacobo, hermano de Jesús, líder de la iglesia de Jerusalén, unos 60 años, 62 d.C.). No confundir con Jacobo-hijo-de-Zebedeo, con Jacobo hijo de Alfeo ni con el patriarca Jacob | Escena 5. Servirá para Hechos 15 y 21 y la carta de Santiago |

### Prompts de referencia de los personajes nuevos

#### Dionisio-el-Exiguo

```
Photorealistic character reference photo, real person in costume, studio photography, plain neutral warm-grey studio background, soft even light. Full body, standing, front view and three-quarter view side by side. Dionysius Exiguus, a Christian monk and scholar living in Rome around 525 AD, a slim man of about fifty from the region of the lower Danube, fair olive skin, thoughtful grey-green eyes, a short greying beard, short dark hair with a simple monastic tonsure, a humble and attentive expression. He wears a plain ankle-length tunic of undyed brown wool with long sleeves, a dark grey hooded woollen cowl over the shoulders, a simple rope belt, and plain leather sandals. He holds a small wax tablet and a bronze stylus. No jewellery, no halo. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### Zacarías-sacerdote

```
Photorealistic character reference photo, real person in costume, studio photography, plain neutral warm-grey studio background, soft even light. Full body, standing, front view and three-quarter view side by side. Zechariah, an elderly Jewish priest of the first century BC from the hill country of Judea, a man of about seventy, olive skin with deep wrinkles, kind and devout dark eyes, a long white beard and white hair, slightly stooped but dignified. He wears the vestments of an ordinary priest: an ankle-length tunic of plain white linen with long sleeves, a long white linen sash wound around the waist, a white linen cap wrapped like a low turban, and bare feet. No gold, no breastplate, no jewellery, no halo. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### Jesús-doce-años

```
Photorealistic character reference photo, real person in costume, studio photography, plain neutral warm-grey studio background, soft even light. Full body, standing, seen only from behind and in three-quarter rear view side by side, the face never visible. A Jewish boy of twelve from Galilee in the first century, slender, olive skin, dark brown wavy hair falling to the nape of the neck. He wears a knee-length tunic of undyed off-white wool, a small light brown woollen mantle over the shoulders with blue tassels at the corners, a simple cord belt, and leather sandals. No halo, no jewellery. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### Jacobo-hermano-del-Señor

```
Photorealistic character reference photo, real person in costume, studio photography, plain neutral warm-grey studio background, soft even light. Full body, standing, front view and three-quarter view side by side. James, the brother of Jesus and leader of the church in Jerusalem, in 62 AD, a lean man of about sixty from Galilee, weathered olive skin, serious and gentle dark eyes, a long grey beard and grey hair to the shoulders, the face of a man of prayer. He wears a long tunic of plain white linen, a simple white linen prayer shawl with blue stripes over the shoulders, a cord belt, and plain sandals. No jewellery, no halo. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

## Prompts de las escenas (4:3)

#### 1. cr-dionisio.webp — Adjuntar: Dionisio-el-Exiguo

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. A small monastic library in Rome around 525 AD: thick stone walls, wooden shelves with rolled scrolls and a few bound codices, a heavy wooden table under a narrow arched window. Dionisio-el-Exiguo sits at the table, writing columns of Roman numerals on a large sheet of parchment with a reed pen, a wax tablet with calculations and an open codex beside him, his face concentrated. Soft morning light falls through the window onto the parchment, dust floating in the beam, an oil lamp unlit on the table. Cinematic composition with the monk and the parchment as the clear centre, shallow depth of field. Dionisio-el-Exiguo must match his attached character reference exactly. No readable text, no watermark, no modern objects, no clocks, no globes. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 2. cr-zacarias-incienso.webp — Adjuntar: Zacarías-sacerdote

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. Inside the Holy Place of the Jerusalem temple in the first century BC, a dim chamber of cedar-panelled walls overlaid with gold. Zacarías-sacerdote, in white linen priestly vestments, stands alone before the small golden altar of incense, holding a golden censer and scattering incense on the glowing coals; a column of fragrant white smoke rises. To the left, a tall seven-branched golden lampstand gives warm flickering light; to the right, the golden table with twelve loaves is barely visible in shadow. In the background, a heavy embroidered veil of blue, purple and scarlet closes off the inner sanctuary. Reverent, quiet atmosphere, warm golden light and deep shadows, the priest as the clear centre of the composition. No angel visible, no supernatural figure. Zacarías-sacerdote must match his attached character reference exactly. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 3. cr-jesus-doce.webp — Adjuntar: Jesús-doce-años

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. A shaded colonnade on the outer court of Herod's temple in Jerusalem during the Passover festival in the early first century. Jesús-doce-años sits on a low stone step, seen from behind and in three-quarter rear view, his face not visible, listening and asking questions. Around him, seated on stone benches and facing him, a semicircle of five anonymous Jewish teachers of the law, older men with grey beards, white and blue prayer shawls and scrolls in their hands, leaning forward with expressions of surprise and admiration. Tall limestone columns with carved capitals, pilgrims passing in soft focus in the background, warm afternoon light falling between the columns. The boy and the attentive teachers form the clear centre of the composition. Jesús-doce-años must match his attached character reference exactly and must be seen only from behind. No halo. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 4. cr-pascua-corderos.webp — Sin personajes

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. The inner court of the Jerusalem temple on the afternoon of the Passover, around 30 AD. Two long rows of anonymous Jewish priests in white linen tunics and sashes, barefoot on the stone pavement, pass golden and silver bowls from hand to hand towards the great stone altar in the background, from which a column of smoke rises. In the foreground, anonymous Jewish men in simple tunics and mantles stand in line, each carrying a young white lamb in his arms. Warm golden late-afternoon light, haze of smoke and dust, the sense of a solemn crowded festival. No blood visible, no slaughter shown. Wide cinematic composition with the rows of priests as the centre. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 5. cr-jacobo-justo.webp — Adjuntar: Jacobo-hermano-del-Señor

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. Early morning in a quiet colonnade of the Jerusalem temple courts in 62 AD. Jacobo-hermano-del-Señor kneels alone in prayer on the worn limestone pavement, his hands open and lifted slightly, his eyes closed, wearing his white linen tunic and prayer shawl. Long cool shadows of the columns cross the floor, the first golden light of dawn touches his face and grey beard, a few anonymous worshippers walk in soft focus in the background. Peaceful, devout atmosphere, cinematic composition with the kneeling man as the clear centre, shallow depth of field. Jacobo-hermano-del-Señor must match his attached character reference exactly. No halo, no violence. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 6. cr-incendio-roma.webp — Sin personajes

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. Night in Rome in July 64 AD: a narrow street between tall multi-storey brick and timber apartment buildings, the upper floors and roofs burning, flames and sparks rising into a sky glowing deep red and orange with smoke. Anonymous Roman men, women and children in tunics flee down the street towards the camera carrying bundles, baskets and oil lamps, some looking back at the fire. Ash in the air, strong backlight from the fire, dramatic cinematic contrast. No injured or burning people shown, no gore. The burning street and the fleeing crowd as the centre of the composition. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 7. cr-huida-pela.webp — Sin personajes

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. The Jordan River valley around 66 AD, early morning. A group of anonymous Jewish Christian families from Jerusalem — men in simple tunics and mantles, women with head coverings, children and an old man helped by a younger one — wade across a shallow ford of the Jordan with donkeys loaded with bundles and baskets, heading towards green hills on the eastern side. On the far western horizon, behind them, faint columns of smoke rise into a hazy sky. Reeds and tamarisk trees on the riverbanks, soft golden light, a mood of urgency and quiet trust. Wide cinematic composition with the crossing group as the centre. No soldiers, no violence. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

#### 8. cr-juan-efeso.webp — Adjuntar: Juan-apóstol-anciano

```
Photorealistic film still from a historical epic movie, 4:3 aspect ratio, 1200x896. Interior of a large house in Ephesus around 90 AD, used as a meeting place for the church: plastered walls with simple painted bands, a mosaic floor, oil lamps on stands, an open courtyard visible through a doorway. Juan-apóstol-anciano, very old, with his long white beard and brown mantle, sits on a wooden chair, speaking gently with one hand raised, a rolled scroll on his knees. Around him sit and stand anonymous believers of different ages and origins — Greek and Jewish men and women, a young mother with a child, an old slave, a young man — listening with deep attention. Warm evening lamplight, intimate atmosphere, the apostle as the clear centre of the composition. Juan-apóstol-anciano must match his attached character reference exactly. No halo. No text, no watermark, no modern objects. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

## Portada (16:9)

#### portada — cronologia-nuevo-testamento (16:9) — Sin personajes

```
Photorealistic cinematic film still, 16:9 aspect ratio, 1200x675. On an old weathered stone table in warm side light, an unrolled papyrus scroll covered with faded Greek handwriting lies at the centre, beside a small clay oil lamp with a flickering flame, a worn bronze Roman coin and a silver denarius, and a simple ancient sundial of white stone casting a long sharp shadow across the papyrus. In the soft-focus background, through an open stone window, the walls and the white and gold temple of first-century Jerusalem glow at sunrise. Sense of time, history and dawn, dust in the air, deep amber and blue tones. Wide cinematic composition with the scroll and the sundial in the centre and space on both sides. No people, no readable text, no watermark, no modern objects, no clocks. It must look like a real photograph, not an illustration, not a painting, not concept art, not digital art, not a 3D render, no painterly brushstrokes.
```

## Fotos reales

Descarga la foto desde su página de Wikimedia Commons (botón «Descargar» o «Original file») y súbela al chat con el nombre de la columna «Archivo». Antes de integrarla se revisa la licencia en esa misma página; si no es libre, la estación queda sin la foto.

| Archivo | Estación | Página de descarga | Licencia |
|---|---|---|---|
| foto-delfos-galion.jpg | VI.4 Galión y la inscripción de Delfos | https://commons.wikimedia.org/wiki/File:Delphes_Gallion.jpg | CC BY-SA 4.0 (Gérard, Museo de Delfos, 2018) — verificada |

Las demás fotos del recurso vienen de otros recursos con su licencia ya verificada: la réplica de la inscripción de Pilato (El mundo judío) y el Papiro 52 (De la Biblia a nosotros).
