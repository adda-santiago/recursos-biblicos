# Uso: python3 herramientas/esquemas_escatologia.py  (desde la raíz del repositorio)
# Genera los esquemas SVG del recurso «Los últimos tiempos» (origen: 'esquema').
import os
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'apps', 'escatologia', 'img') + os.sep
BG='#f6f3ec'; INK='#1f2430'; MUTED='#8a8f98'; GRIS='#c9c6be'
COL={'iglesia':'#2f7d4a','arrebatamiento':'#2a6fb0','cielo':'#2a6fb0','tribulacion':'#b03a2e','venida':'#7a3fa0',
     'milenio':'#c08a1e','juicio':'#4a4a4a','eternidad':'#1e8a8a','cruz':'#1f2430','resurreccion':'#2a6fb0'}
SERIF="Georgia, 'Times New Roman', serif"; SANS="Helvetica, Arial, sans-serif"
def t(x,y,s,size=20,fill=INK,anchor='middle',weight='normal',font=SANS,italic=False):
    st=' font-style="italic"' if italic else ''
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}>{s}</text>'
def principal(resaltar=None):
    def c(k):
        if resaltar is None: return COL[k]
        return COL[k] if k in resaltar else GRIS
    def ink(k): return INK if (resaltar is None or k in resaltar) else MUTED
    Y=470; o=[]
    o.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">')
    o.append(f'<rect width="1200" height="760" fill="{BG}"/>')
    o.append(f'<rect x="20" y="40" width="1160" height="250" rx="14" fill="#e6eef6"/>')
    o.append(t(40,72,'CIELO',16,MUTED,'start','bold'))
    o.append(t(40,330,'TIERRA',16,MUTED,'start','bold'))
    o.append(f'<line x1="40" y1="{Y}" x2="1170" y2="{Y}" stroke="{GRIS}" stroke-width="3"/>')
    # cruz
    o.append(f'<g stroke="{c("cruz")}" stroke-width="6" stroke-linecap="round"><line x1="80" y1="{Y-60}" x2="80" y2="{Y+10}"/><line x1="58" y1="{Y-40}" x2="102" y2="{Y-40}"/></g>')
    o.append(t(80,Y+44,'La cruz y',17,ink('cruz'))); o.append(t(80,Y+66,'Pentecostés',17,ink('cruz')))
    # iglesia
    o.append(f'<rect x="110" y="{Y-9}" width="490" height="18" rx="9" fill="{c("iglesia")}"/>')
    o.append(t(355,Y-28,'La era de la iglesia',24,ink('iglesia'),font=SERIF))
    o.append(t(355,Y+44,'Tiempo de los gentiles (Lc 21:24)',17,ink('iglesia')))
    o.append(t(355,Y+66,'Paréntesis entre la semana 69 y la 70 de Daniel',15,MUTED,italic=True))
    # arrebatamiento
    o.append(f'<line x1="600" y1="{Y-12}" x2="600" y2="150" stroke="{c("arrebatamiento")}" stroke-width="5"/><path d="M586,168 L600,140 L614,168 Z" fill="{c("arrebatamiento")}"/>')
    o.append(t(600,110,'Arrebatamiento',22,ink('arrebatamiento'),weight='bold')); o.append(t(600,132,'1 Ts 4:16-17',16,ink('arrebatamiento')))
    # cielo durante la tribulacion
    o.append(f'<rect x="640" y="168" width="160" height="96" rx="10" fill="#fff" stroke="{c("cielo")}" stroke-width="3"/>')
    o.append(t(720,198,'Tribunal de Cristo',17,ink('cielo'),weight='bold')); o.append(t(720,218,'2 Co 5:10',14,ink('cielo')))
    o.append(t(720,240,'Bodas del Cordero',17,ink('cielo'),weight='bold')); o.append(t(720,258,'Ap 19:7-9',14,ink('cielo')))
    # tribulacion
    o.append(f'<rect x="610" y="{Y-9}" width="100" height="18" fill="{c("tribulacion")}" opacity="0.75"/><rect x="710" y="{Y-9}" width="100" height="18" fill="{c("tribulacion")}"/>')
    o.append(t(710,Y-28,'Tribulación · 7 años',20,ink('tribulacion'),weight='bold',font=SERIF))
    o.append(t(660,Y+40,'3½ años',16,ink('tribulacion'))); o.append(t(760,Y+40,'3½ años',16,ink('tribulacion')))
    o.append(t(710,Y+62,'Semana 70 (Dn 9:27)',16,ink('tribulacion')))
    o.append(t(760,Y+84,'Gran tribulación',15,ink('tribulacion'),italic=True))
    # segunda venida
    o.append(f'<line x1="820" y1="150" x2="820" y2="{Y-14}" stroke="{c("venida")}" stroke-width="5"/><path d="M806,{Y-30} L820,{Y-4} L834,{Y-30} Z" fill="{c("venida")}"/>')
    o.append(t(860,110,'Segunda venida',22,ink('venida'),weight='bold')); o.append(t(860,132,'Ap 19:11-16; Zac 14:4',16,ink('venida')))
    o.append(t(905,Y-48,'Armagedón',15,ink('venida'),italic=True))
    # milenio
    o.append(f'<rect x="830" y="{Y-9}" width="200" height="18" rx="9" fill="{c("milenio")}"/>')
    o.append(t(930,Y-28,'Milenio · 1.000 años',20,ink('milenio'),weight='bold',font=SERIF))
    o.append(t(930,Y+40,'Ap 20:1-6',16,ink('milenio')))
    # gran trono
    o.append(f'<rect x="1032" y="{Y-22}" width="44" height="44" rx="6" fill="#fff" stroke="{c("juicio")}" stroke-width="4"/>')
    o.append(t(1054,Y+52,'Gran trono',16,ink('juicio'),weight='bold')); o.append(t(1054,Y+72,'blanco',16,ink('juicio'),weight='bold')); o.append(t(1054,Y+92,'Ap 20:11-15',14,ink('juicio')))
    # eternidad
    o.append(f'<rect x="1080" y="{Y-9}" width="90" height="18" rx="9" fill="{c("eternidad")}"/>')
    o.append(t(1100,340,'Cielos nuevos',17,ink('eternidad'),weight='bold')); o.append(t(1100,362,'y tierra nueva',17,ink('eternidad'),weight='bold')); o.append(t(1100,384,'Ap 21–22',14,ink('eternidad')))
    # resurrecciones
    R=640
    o.append(f'<path d="M600,{R} L600,{R+14} L820,{R+14} L820,{R}" fill="none" stroke="{c("resurreccion")}" stroke-width="3"/>')
    o.append(t(710,R+42,'Primera resurrección (Ap 20:5-6)',16,ink('resurreccion')))
    o.append(t(710,R+62,'los justos, en etapas',14,MUTED,italic=True))
    o.append(f'<path d="M1054,{R} L1054,{R+14}" stroke="{c("juicio")}" stroke-width="3"/>')
    o.append(t(1054,R+42,'Segunda resurrección',16,ink('juicio'))); o.append(t(1054,R+62,'Jn 5:29; Ap 20:12-13',14,MUTED,italic=True))
    o.append('</svg>')
    return '\n'.join(o)
variantes={'esquema-completo':None,'esquema-iglesia':{'iglesia','cruz'},'esquema-arrebatamiento':{'arrebatamiento','resurreccion'},
 'esquema-cielo':{'cielo','arrebatamiento'},'esquema-tribulacion':{'tribulacion'},'esquema-venida':{'venida'},
 'esquema-milenio':{'milenio'},'esquema-juicio':{'juicio'},'esquema-eternidad':{'eternidad'},'esquema-resurrecciones':{'resurreccion','juicio'}}
for n,r in variantes.items(): open(OUT+n+'.svg','w').write(principal(r))

def semanas():
    o=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">',f'<rect width="1200" height="760" fill="{BG}"/>']
    o.append(t(600,70,'Las setenta semanas de Daniel (Dn 9:24-27)',30,INK,font=SERIF))
    o.append(t(600,102,'70 semanas de años = 490 años determinados sobre Israel y Jerusalén',18,MUTED))
    Y=330
    # 7 semanas
    o.append(f'<rect x="130" y="{Y-16}" width="100" height="32" fill="#2f7d4a"/>'); o.append(t(180,Y+6,'7',18,'#fff',weight='bold'))
    o.append(t(180,Y-36,'7 semanas',17,INK,weight='bold')); o.append(t(180,Y+52,'49 años',15,INK)); o.append(t(180,Y+72,'Jerusalén',14,MUTED,italic=True)); o.append(t(180,Y+90,'reconstruida',14,MUTED,italic=True))
    # 62 semanas
    o.append(f'<rect x="230" y="{Y-16}" width="410" height="32" fill="#2a6fb0"/>'); o.append(t(435,Y+6,'62',18,'#fff',weight='bold'))
    o.append(t(435,Y-36,'62 semanas',17,INK,weight='bold')); o.append(t(435,Y+52,'434 años',15,INK))
    # inicio
    o.append(f'<line x1="130" y1="{Y-60}" x2="130" y2="{Y+120}" stroke="{INK}" stroke-width="2" stroke-dasharray="4 4"/>')
    o.append(t(130,Y+146,'Orden de restaurar',15,INK,weight='bold')); o.append(t(130,Y+166,'y edificar Jerusalén',15,INK,weight='bold')); o.append(t(130,Y+186,'(Neh 2:1-8; c. 444 a.C.)',14,MUTED))
    # mesías
    o.append(f'<line x1="640" y1="{Y-60}" x2="640" y2="{Y+120}" stroke="#b03a2e" stroke-width="3"/>')
    o.append(t(640,Y+146,'El Mesías Príncipe',15,'#b03a2e',weight='bold')); o.append(t(640,Y+166,'«se quitará la vida al Mesías»',14,INK)); o.append(t(640,Y+186,'(Dn 9:25-26; c. 33 d.C.)',14,MUTED))
    # paréntesis
    o.append(f'<line x1="652" y1="{Y}" x2="900" y2="{Y}" stroke="{MUTED}" stroke-width="4" stroke-dasharray="3 9" stroke-linecap="round"/>')
    o.append(t(776,Y-36,'Paréntesis',17,MUTED,weight='bold')); o.append(t(776,Y+52,'La era de la iglesia',15,MUTED)); o.append(t(776,Y+72,'(no se cuenta)',14,MUTED,italic=True))
    o.append(t(776,Y-80,'Destrucción de Jerusalén, año 70 (Dn 9:26)',14,MUTED,italic=True))
    # semana 70
    o.append(f'<rect x="910" y="{Y-16}" width="110" height="32" fill="#b03a2e" opacity="0.75"/><rect x="1020" y="{Y-16}" width="110" height="32" fill="#b03a2e"/>')
    o.append(t(1020,Y-36,'Semana 70',17,'#b03a2e',weight='bold')); o.append(t(965,Y+6,'3½',16,'#fff',weight='bold')); o.append(t(1075,Y+6,'3½',16,'#fff',weight='bold'))
    o.append(t(1020,Y+52,'7 años: la tribulación',15,INK)); o.append(f'<line x1="1020" y1="{Y+100}" x2="1020" y2="{Y+120}" stroke="{INK}" stroke-width="2" stroke-dasharray="4 4"/>')
    o.append(f'<line x1="910" y1="{Y-60}" x2="910" y2="{Y+120}" stroke="{INK}" stroke-width="2" stroke-dasharray="4 4"/>')
    o.append(t(910,Y+146,'Pacto del',15,INK,weight='bold')); o.append(t(910,Y+166,'príncipe que',15,INK,weight='bold')); o.append(t(910,Y+186,'ha de venir',15,INK,weight='bold'))
    o.append(f'<line x1="1020" y1="{Y-60}" x2="1020" y2="{Y+20}" stroke="{INK}" stroke-width="2" stroke-dasharray="4 4"/>')
    o.append(t(1090,Y+146,'Rompe el pacto:',15,INK,weight='bold')); o.append(t(1090,Y+166,'la abominación',15,INK,weight='bold')); o.append(t(1090,Y+186,'(Dn 9:27; Mt 24:15)',14,MUTED))
    o.append(t(600,690,'Interpretación premilenial dispensacionalista. Las fechas de inicio y fin de las 69 semanas varían según los autores.',15,MUTED,italic=True))
    o.append('</svg>'); return '\n'.join(o)
open(OUT+'setenta-semanas.svg','w').write(semanas())
print('ok')

def juicios():
    o=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">',f'<rect width="1200" height="760" fill="{BG}"/>']
    o.append(t(600,62,'Los juicios de Apocalipsis en la semana setenta',30,INK,font=SERIF))
    o.append(t(600,94,'Sellos, trompetas y copas: cada serie sale de la anterior y es más intensa',18,MUTED))
    X0,X1=100,1100; MID=(X0+X1)//2; Y=640
    o.append(f'<rect x="{X0}" y="{Y-12}" width="{MID-X0}" height="24" fill="#b03a2e" opacity="0.55"/><rect x="{MID}" y="{Y-12}" width="{X1-MID}" height="24" fill="#b03a2e"/>')
    o.append(t((X0+MID)//2,Y+48,'Primeros 3½ años (Ap 11:3; 12:6)',16,INK)); o.append(t((MID+X1)//2,Y+48,'Gran tribulación: 3½ años (Mt 24:21; Ap 13:5)',16,INK))
    o.append(f'<line x1="{MID}" y1="{Y-500}" x2="{MID}" y2="{Y+20}" stroke="{INK}" stroke-width="2" stroke-dasharray="5 5"/>')
    o.append(t(MID,Y-508,'Mitad: la abominación (Dn 9:27)',15,INK,weight='bold'))
    o.append(t(X0,Y+48,'',1))
    def serie(y,x0,paso,color,etiqueta,ref,nombres):
        o.append(t(x0-34,y+6,etiqueta,19,color,'end','bold',SERIF)); o.append(t(x0-34,y+28,ref,14,MUTED,'end'))
        for i,n in enumerate(nombres):
            cx=x0+i*paso
            o.append(f'<circle cx="{cx}" cy="{y}" r="17" fill="{color}"/>'); o.append(t(cx,y+6,str(i+1),16,'#fff',weight='bold'))
            o.append(t(cx,y+40,n,12,INK))
        return x0+6*paso
    # sellos
    x7s=serie(200,250,50,'#2a6fb0','Sellos','Ap 6:1–8:1',['Caballo','Caballo','Caballo','Caballo','Mártires','Terremoto','Silencio'])
    o.append(t(250+50*1.5,170,'Los cuatro jinetes',13,'#2a6fb0',italic=True))
    # trompetas
    x7t=serie(370,440,60,'#c08a1e','Trompetas','Ap 8:2–11:19',['Tierra','Mar','Ríos','Astros','Langostas','Éufrates','Reino'])
    o.append(t(440+60*5,340,'Los tres «ayes»',13,'#c08a1e',italic=True))
    # copas
    serie(520,720,56,'#b03a2e','Copas','Ap 15–16',['Úlceras','Mar','Ríos','Sol','Tinieblas','Éufrates','Consumado'])
    # flechas telescopicas
    o.append(f'<path d="M{x7s},218 C{x7s},300 400,290 440,352" fill="none" stroke="{INK}" stroke-width="2" marker-end="url(#f)"/>')
    o.append(f'<path d="M{x7t},388 C{x7t},460 710,440 720,502" fill="none" stroke="{INK}" stroke-width="2" marker-end="url(#f)"/>')
    o.insert(1,f'<defs><marker id="f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="{INK}"/></marker></defs>')
    o.append(t(600,738,'Ubicación aproximada, según la lectura premilenial más común: los sellos al comienzo, las copas al final de la gran tribulación.',14,MUTED,italic=True))
    o.append('</svg>'); return '\n'.join(o)
open(OUT+'juicios-apocalipsis.svg','w').write(juicios())
