 // =====================
// DATI
// =====================
 
const categorieEmoji = {
  saluti: '👋', famiglia: '👨‍👩‍👧', casa: '🏠', scuola: '📚', lavoro: '💼', emozioni: '😊'
};
 
const parole = [
  // ── SALUTI: salutare, presentarsi, ringraziare, cortesia ──
  { nome: "Ciao",              categoria: "saluti", video: "VideoLis/Ciao.mp4" },
  { nome: "Buongiorno",        categoria: "saluti", video: "VideoLis/Buongiorno.mp4" },
  { nome: "Buonasera",         categoria: "saluti", video: "VideoLis/Buonasera.mp4" },
  { nome: "Buon pomeriggio",   categoria: "saluti", video: "VideoLis/BuonPomeriggio.mp4" },
  { nome: "Buonanotte",        categoria: "saluti", video: "VideoLis/Buonanotte.mp4" },
  { nome: "Arrivederci",       categoria: "saluti", video: "VideoLis/Arrivederci.mp4" },
  { nome: "Come ti chiami?",   categoria: "saluti", video: "VideoLis/ComeTiChiami.mp4" },
  { nome: "Mi chiamo...",      categoria: "saluti", video: "VideoLis/MiChiamo.mp4" },
  { nome: "Piacere",           categoria: "saluti", video: "VideoLis/Piacere.mp4" },
  { nome: "Di dove sei?",      categoria: "saluti", video: "VideoLis/DiDoveSei.mp4" },
  { nome: "Dove abiti?",       categoria: "saluti", video: "VideoLis/DoveAbiti.mp4" },
  { nome: "Dove sei nato?",    categoria: "saluti", video: "VideoLis/DoveSeiNato.mp4" },
  { nome: "Come stai?",        categoria: "saluti", video: "VideoLis/ComeStai.mp4" },
  { nome: "Sto bene",          categoria: "saluti", video: "VideoLis/StoBene.mp4" },
  { nome: "Cosi cosi",         categoria: "saluti", video: "VideoLis/CosiCosi.mp4" },
  { nome: "Non sto bene",      categoria: "saluti", video: "VideoLis/NonStoBene.mp4" },
  { nome: "Sto male",          categoria: "saluti", video: "VideoLis/StoMale.mp4" },
  { nome: "Grazie",            categoria: "saluti", video: "VideoLis/Grazie.mp4" },
  { nome: "Prego",             categoria: "saluti", video: "VideoLis/Prego.mp4" },
  { nome: "Scusa",             categoria: "saluti", video: "VideoLis/Scusa.mp4" },
  { nome: "Per favore",        categoria: "saluti", video: "VideoLis/PerFavore.mp4" },
  { nome: "Aiuto",             categoria: "saluti", video: "VideoLis/Aiuto.mp4" },

  // ── FAMIGLIA: legami di parentela e generazioni ──
  { nome: "Mamma",   categoria: "famiglia", video: "VideoLis/Mamma.mp4" },
  { nome: "Papa",    categoria: "famiglia", video: "VideoLis/Papa.mp4" },
  { nome: "Fratello",categoria: "famiglia", video: "VideoLis/Fratello.mp4" },
  { nome: "Sorella", categoria: "famiglia", video: "VideoLis/Sorella.mp4" },
  { nome: "Nonno",   categoria: "famiglia", video: "VideoLis/Nonno.mp4" },
  { nome: "Nonna",   categoria: "famiglia", video: "VideoLis/Nonna.mp4" },
  { nome: "Zio",     categoria: "famiglia", video: "VideoLis/Zio.mp4" },
  { nome: "Zia",     categoria: "famiglia", video: "VideoLis/Zia.mp4" },
  { nome: "Cugino",  categoria: "famiglia", video: "VideoLis/Cugino.mp4" },
  { nome: "Cugina",  categoria: "famiglia", video: "VideoLis/Cugina.mp4" },
  { nome: "Nipote",  categoria: "famiglia", video: "VideoLis/Nipote.mp4" },

  // ── CASA: stanze, oggetti, attività domestiche ──
  { nome: "Casa",      categoria: "casa", video: "VideoLis/Casa.mp4" },
  { nome: "Cucina",    categoria: "casa", video: "VideoLis/Cucina.mp4" },
  { nome: "Camera",    categoria: "casa", video: "VideoLis/Camera.mp4" },
  { nome: "Bagno",     categoria: "casa", video: "VideoLis/Bagno.mp4" },
  { nome: "Salotto",   categoria: "casa", video: "VideoLis/Salotto.mp4" },
  { nome: "Tavolo",    categoria: "casa", video: "VideoLis/Tavolo.mp4" },
  { nome: "Sedia",     categoria: "casa", video: "VideoLis/Sedia.mp4" },
  { nome: "Finestra",  categoria: "casa", video: "VideoLis/Finestra.mp4" },
  { nome: "Porta",     categoria: "casa", video: "VideoLis/Porta.mp4" },
  { nome: "Letto",     categoria: "casa", video: "VideoLis/Letto.mp4" },
  { nome: "Balcone",   categoria: "casa", video: "VideoLis/Balcone.mp4" },
  { nome: "Mangiare",  categoria: "casa", video: "VideoLis/Mangiare.mp4" },
  { nome: "Dormire",   categoria: "casa", video: "VideoLis/Dormire.mp4" },
  { nome: "Cucinare",  categoria: "casa", video: "VideoLis/Cucinare.mp4" },
  { nome: "Pulire",    categoria: "casa", video: "VideoLis/Pulire.mp4" },

  // ── SCUOLA: materiali, persone, materie, frasi in classe ──
  { nome: "Libro",                         categoria: "scuola", video: "VideoLis/Libro.mp4" },
  { nome: "Penna",                         categoria: "scuola", video: "VideoLis/Penna.mp4" },
  { nome: "Zaino",                         categoria: "scuola", video: "VideoLis/Zaino.mp4" },
  { nome: "Quaderno",                      categoria: "scuola", video: "VideoLis/Quaderno.mp4" },
  { nome: "Lavagna",                       categoria: "scuola", video: "VideoLis/Lavagna.mp4" },
  { nome: "Compiti",                       categoria: "scuola", video: "VideoLis/Compiti.mp4" },
  { nome: "Insegnante",                    categoria: "scuola", video: "VideoLis/Insegnante.mp4" },
  { nome: "Studente",                      categoria: "scuola", video: "VideoLis/Studente.mp4" },
  { nome: "Assistente alla Comunicazione", categoria: "scuola", video: "VideoLis/AssistenteComunicazione.mp4" },
  { nome: "Insegnante di Sostegno",        categoria: "scuola", video: "VideoLis/InsegnanteSostegno.mp4" },
  { nome: "Preside",                       categoria: "scuola", video: "VideoLis/Preside.mp4" },
  { nome: "Vice Preside",                  categoria: "scuola", video: "VideoLis/VicePreside.mp4" },
  { nome: "Segreteria Didattica",          categoria: "scuola", video: "VideoLis/SegreteriaDidattica.mp4" },
  { nome: "Segreteria Amministrativa",     categoria: "scuola", video: "VideoLis/SegreteriaAmministrativa.mp4" },
  { nome: "Bidello",                       categoria: "scuola", video: "VideoLis/Bidello.mp4" },
  { nome: "Laboratorio di Telecomunicazioni", categoria: "scuola", video: "VideoLis/LaboratorioTelecomunicazioni.mp4" },
  { nome: "Laboratorio Sistemi e Reti",    categoria: "scuola", video: "VideoLis/LaboratorioSistemiReti.mp4" },
  { nome: "Laboratorio Informatica",       categoria: "scuola", video: "VideoLis/LaboratorioInformatica.mp4" },
  { nome: "Studiare",                      categoria: "scuola", video: "VideoLis/Studiare.mp4" },
  { nome: "Capire",                        categoria: "scuola", video: "VideoLis/Capire.mp4" },
  { nome: "Ripetere",                      categoria: "scuola", video: "VideoLis/Ripetere.mp4" },
  { nome: "Non ho capito",                 categoria: "scuola", video: "VideoLis/NonHoCapito.mp4" },
  { nome: "Puoi ripetere?",                categoria: "scuola", video: "VideoLis/PuoiRipetere.mp4" },
  { nome: "Ho finito",                     categoria: "scuola", video: "VideoLis/HoFinito.mp4" },
  { nome: "Posso uscire?",                 categoria: "scuola", video: "VideoLis/PossoUscire.mp4" },
  { nome: "Posso andare in bagno?",        categoria: "scuola", video: "VideoLis/PossoAndareBagno.mp4" },
  { nome: "Matematica",                    categoria: "scuola", video: "VideoLis/Matematica.mp4" },
  { nome: "Italiano",                      categoria: "scuola", video: "VideoLis/Italiano.mp4" },
  { nome: "Inglese",                       categoria: "scuola", video: "VideoLis/Inglese.mp4" },
  { nome: "Storia",                        categoria: "scuola", video: "VideoLis/Storia.mp4" },
  { nome: "Geografia",                     categoria: "scuola", video: "VideoLis/Geografia.mp4" },
  { nome: "Scienze",                       categoria: "scuola", video: "VideoLis/Scienze.mp4" },
  { nome: "Arte",                          categoria: "scuola", video: "VideoLis/Arte.mp4" },
  { nome: "Musica",                        categoria: "scuola", video: "VideoLis/Musica.mp4" },
  { nome: "Educazione Fisica",             categoria: "scuola", video: "VideoLis/EducazioneFisica.mp4" },
  { nome: "Informatica",                   categoria: "scuola", video: "VideoLis/Informatica.mp4" },
  { nome: "Sistemi e Reti",               categoria: "scuola", video: "VideoLis/SistemiEReti.mp4" },
  { nome: "TPSI",                          categoria: "scuola", video: "VideoLis/TPSI.mp4" },
  { nome: "Telecomunicazioni",             categoria: "scuola", video: "VideoLis/Telecomunicazioni.mp4" },
  { nome: "Fisica",                        categoria: "scuola", video: "VideoLis/Fisica.mp4" },
  { nome: "Chimica",                       categoria: "scuola", video: "VideoLis/Chimica.mp4" },
  { nome: "Educatrice",                    categoria: "scuola", video: "VideoLis/Educatrice.mp4" },
  { nome: "Lim",                           categoria: "scuola", video: "VideoLis/Lim.mp4" },
  { nome: "Interrogazione",               categoria: "scuola", video: "VideoLis/Interrogazione.mp4" },
  { nome: "Valutazione",                   categoria: "scuola", video: "VideoLis/Valutazione.mp4" },
  { nome: "Voto",                          categoria: "scuola", video: "VideoLis/Voto.mp4" },
  { nome: "Prova parallela",              categoria: "scuola", video: "VideoLis/ProvaParallela.mp4" },
  { nome: "Verifica",                      categoria: "scuola", video: "VideoLis/Verifica.mp4" },
  { nome: "Nota disciplinare",            categoria: "scuola", video: "VideoLis/NotaDisciplinare.mp4" },
  { nome: "Richiamo",                      categoria: "scuola", video: "VideoLis/Richiamo.mp4" },

  // ── LAVORO: contesto lavorativo e professionale ──
  { nome: "Lavoro",          categoria: "lavoro", video: "VideoLis/Lavoro.mp4" },
  { nome: "Ufficio",         categoria: "lavoro", video: "VideoLis/Ufficio.mp4" },
  { nome: "Riunione",        categoria: "lavoro", video: "VideoLis/Riunione.mp4" },
  { nome: "Collega",         categoria: "lavoro", video: "VideoLis/Collega.mp4" },
  { nome: "Ho una riunione", categoria: "lavoro", video: "VideoLis/HoUnaRiunione.mp4" },
  { nome: "Sono d accordo",  categoria: "lavoro", video: "VideoLis/SonoDAccordo.mp4" },
  { nome: "Buon lavoro!",    categoria: "lavoro", video: "VideoLis/BuonLavoro.mp4" },

  // ── EMOZIONI: stati d'animo e sensazioni ──
  { nome: "Felice",         categoria: "emozioni", video: "VideoLis/Felice.mp4" },
  { nome: "Contento",       categoria: "emozioni", video: "VideoLis/Contento.mp4" },
  { nome: "Entusiasta",     categoria: "emozioni", video: "VideoLis/Entusiasta.mp4" },
  { nome: "Amore",          categoria: "emozioni", video: "VideoLis/Amore.mp4" },
  { nome: "Triste",         categoria: "emozioni", video: "VideoLis/Triste.mp4" },
  { nome: "Arrabbiato",     categoria: "emozioni", video: "VideoLis/Arrabbiato.mp4" },
  { nome: "Preoccupato",    categoria: "emozioni", video: "VideoLis/Preoccupato.mp4" },
  { nome: "Spaventato",     categoria: "emozioni", video: "VideoLis/Spaventato.mp4" },
  { nome: "Stanco",         categoria: "emozioni", video: "VideoLis/Stanco.mp4" },
  { nome: "Sorpreso",       categoria: "emozioni", video: "VideoLis/Sorpreso.mp4" },
  { nome: "Ho fame",        categoria: "emozioni", video: "VideoLis/HoFame.mp4" },
  { nome: "Ho sete",        categoria: "emozioni", video: "VideoLis/HoSete.mp4" },
  { nome: "Come ti senti?", categoria: "emozioni", video: "VideoLis/ComeTiSenti.mp4" },
  { nome: "Stai bene?",     categoria: "emozioni", video: "VideoLis/StaiBene.mp4" },
  { nome: "Ti aiuto?",      categoria: "emozioni", video: "VideoLis/TiAiuto.mp4" },
];
 
const moduli = [
  { titolo: "Alfabeto e numeri", icon: "🔤", sub: "26 lettere + numeri da 1 a 1 Miliardo", sbloccato: true, progresso: 0,
    lezioni: [
      { titolo: "Lettere A - F", segni: [
        { lettera: "A", img: "https://media.spreadthesign.com/image/500/alphabet-letter-63-2.jpg" },
        { lettera: "B", img: "https://media.spreadthesign.com/image/500/alphabet-letter-64-2.jpg" },
        { lettera: "C", img: "https://media.spreadthesign.com/image/500/alphabet-letter-65-2.jpg" },
        { lettera: "D", img: "https://media.spreadthesign.com/image/500/alphabet-letter-66-2.jpg" },
        { lettera: "E", img: "https://media.spreadthesign.com/image/500/alphabet-letter-67-2.jpg" },
        { lettera: "F", img: "https://media.spreadthesign.com/image/500/alphabet-letter-68-2.jpg" },
      ]},
      { titolo: "Lettere G - M", segni: [
        { lettera: "G", img: "https://media.spreadthesign.com/image/500/alphabet-letter-69-2.jpg" },
        { lettera: "H", img: "https://media.spreadthesign.com/image/500/alphabet-letter-70-2.jpg" },
        { lettera: "I", img: "https://media.spreadthesign.com/image/500/alphabet-letter-71-2.jpg" },
        { lettera: "J", img: "https://media.spreadthesign.com/image/500/alphabet-letter-72-2.jpg" },
        { lettera: "K", img: "https://media.spreadthesign.com/image/500/alphabet-letter-95-2.jpg" },
        { lettera: "L", img: "https://media.spreadthesign.com/image/500/alphabet-letter-96-2.jpg" },
        { lettera: "M", img: "https://media.spreadthesign.com/image/500/alphabet-letter-97-2.jpg" },
      ]},
      { titolo: "Lettere N - T", segni: [
        { lettera: "N", img: "https://media.spreadthesign.com/image/500/alphabet-letter-98-2.jpg" },
        { lettera: "O", img: "https://media.spreadthesign.com/image/500/alphabet-letter-99-2.jpg" },
        { lettera: "P", img: "https://media.spreadthesign.com/image/500/alphabet-letter-100-2.jpg" },
        { lettera: "Q", img: "https://media.spreadthesign.com/image/500/alphabet-letter-101-2.jpg" },
        { lettera: "R", img: "https://media.spreadthesign.com/image/500/alphabet-letter-102-2.jpg" },
        { lettera: "S", img: "https://media.spreadthesign.com/image/500/alphabet-letter-103-2.jpg" },
        { lettera: "T", img: "https://media.spreadthesign.com/image/500/alphabet-letter-104-2.jpg" },
      ]},
      { titolo: "Lettere U - Z", segni: [
        { lettera: "U", img: "https://media.spreadthesign.com/image/500/alphabet-letter-105-2.jpg" },
        { lettera: "V", img: "https://media.spreadthesign.com/image/500/alphabet-letter-106-2.jpg" },
        { lettera: "W", img: "https://media.spreadthesign.com/image/500/alphabet-letter-109-2.jpg" },
        { lettera: "X", img: "https://media.spreadthesign.com/image/500/alphabet-letter-110-2.jpg" },
        { lettera: "Y", img: "https://media.spreadthesign.com/image/500/alphabet-letter-111-2.jpg" },
        { lettera: "Z", img: "https://media.spreadthesign.com/image/500/alphabet-letter-108-2.jpg" },
      ]},
      { titolo: "Numeri 1 - 10", segni: [
        { lettera: "1 - 10", img: "", video: "VideoLis/1-10.mp4" },
      ]},
      { titolo: "Numeri 11 - 20", segni: [
        { lettera: "11 - 20", img: "", video: "VideoLis/11-20.mp4" },
      ]},
      { titolo: "Numeri 21 - 25", segni: [
        { lettera: "21 - 25", img: "", video: "VideoLis/21-25.mp4" },
      ]},
      { titolo: "Numeri speciali: 50, 75", segni: [
        { lettera: "50", img: "", video: "VideoLis/50.mp4" },
        { lettera: "75", img: "", video: "VideoLis/75.mp4" },
      ]},
      { titolo: "Centinaia: 100 - 1000", segni: [
        { lettera: "100-1000", img: "", video: "VideoLis/100-1000.mp4" },
      ]},
      { titolo: "Grandi numeri", segni: [
        { lettera: "5.000",      img: "", video: "VideoLis/5000.mp4" },
        { lettera: "10.000",     img: "", video: "VideoLis/10000.mp4" },
        { lettera: "100.000",    img: "", video: "VideoLis/100000.mp4" },
        { lettera: "1 Milione",  img: "", video: "VideoLis/1mln.mp4" },
        { lettera: "1 Miliardo", img: "", video: "VideoLis/1mld.mp4" },
      ]},
    ]
  },
  { titolo: "Saluti e presentazioni", icon: "👋", sub: "Come salutare e presentarsi", sbloccato: false, progresso: 0,
    lezioni: [
      { titolo: "Saluti base", segni: [
        { lettera: "Ciao",           video: "VideoLis/Ciao.mp4" },
        { lettera: "Buongiorno",     video: "VideoLis/Buongiorno.mp4" },
        { lettera: "Buonasera",      video: "VideoLis/Buonasera.mp4" },
        { lettera: "Buon pomeriggio",video: "VideoLis/BuonPomeriggio.mp4" },
        { lettera: "Buonanotte",     video: "VideoLis/Buonanotte.mp4" },
        { lettera: "Arrivederci",    video: "VideoLis/Arrivederci.mp4" },
      ]},
      { titolo: "Presentarsi", segni: [
        { lettera: "Come ti chiami?",video: "VideoLis/ComeTiChiami.mp4" },
        { lettera: "Mi chiamo D-A-V-I-D", video: "VideoLis/MiChiamo.mp4" },
        { lettera: "Piacere",        video: "VideoLis/Piacere.mp4" },
        { lettera: "Di dove sei?",   video: "VideoLis/DiDoveSei.mp4" },
        { lettera: "Dove abiti?",    video: "VideoLis/DoveAbiti.mp4" },
        { lettera: "Dove sei nato?", video: "VideoLis/DoveSeiNato.mp4" },
      ]},
      { titolo: "Come stai?", segni: [
        { lettera: "Come stai?",     video: "VideoLis/ComeStai.mp4" },
        { lettera: "Sto bene",       video: "VideoLis/StoBene.mp4" },
        { lettera: "Cosi cosi",      video: "VideoLis/CosiCosi.mp4" },
        { lettera: "Non sto bene",   video: "VideoLis/NonStoBene.mp4" },
        { lettera: "Sto male",       video: "VideoLis/StoMale.mp4" },
      ]},
      { titolo: "Ringraziare", segni: [
        { lettera: "Grazie",         video: "VideoLis/Grazie.mp4" },
        { lettera: "Prego",          video: "VideoLis/Prego.mp4" },
        { lettera: "Scusa",          video: "VideoLis/Scusa.mp4" },
        { lettera: "Per favore",     video: "VideoLis/PerFavore.mp4" },
      ]},
    ]
  },
  { titolo: "Famiglia e casa", icon: "🏠", sub: "Familiari e ambienti domestici", sbloccato: false, progresso: 0,
    lezioni: [
      { titolo: "La famiglia", segni: [
        { lettera: "Mamma",    video: "VideoLis/Mamma.mp4" },
        { lettera: "Papa'",    video: "VideoLis/Papa'.mp4" },
        { lettera: "Fratello", video: "VideoLis/Fratello.mp4" },
        { lettera: "Sorella",  video: "VideoLis/Sorella.mp4" },
        { lettera: "Nonno",    video: "VideoLis/Nonno.mp4" },
        { lettera: "Nonna",    video: "VideoLis/Nonna.mp4" },
        { lettera: "Zio",      video: "VideoLis/Zio.mp4" },
        { lettera: "Zia",      video: "VideoLis/Zia.mp4" },
        { lettera: "Cugino",   video: "VideoLis/Cugino.mp4" },
        { lettera: "Cugina",   video: "VideoLis/Cugina.mp4" },
        { lettera: "Nipote",   video: "VideoLis/Nipote.mp4" },
      ]},
      { titolo: "La casa", segni: [
        { lettera: "Casa",     video: "VideoLis/Casa.mp4" },
        { lettera: "Cucina",   video: "VideoLis/Cucina.mp4" },
        { lettera: "Camera",   video: "VideoLis/Camera.mp4" },
        { lettera: "Bagno",    video: "VideoLis/Bagno.mp4" },
        { lettera: "Salotto",  video: "VideoLis/Salotto.mp4" },
      ]},
      { titolo: "Attivita", segni: [
        { lettera: "Mangiare", video: "VideoLis/Mangiare.mp4" },
        { lettera: "Dormire",  video: "VideoLis/Dormire.mp4" },
        { lettera: "Cucinare", video: "VideoLis/Cucinare.mp4" },
        { lettera: "Pulire",   video: "VideoLis/Pulire.mp4" },
      ]},
      { titolo: "Oggetti", segni: [
        { lettera: "Tavolo",   video: "VideoLis/Tavolo.mp4" },
        { lettera: "Sedia",    video: "VideoLis/Sedia.mp4" },
        { lettera: "Finestra", video: "VideoLis/Finestra.mp4" },
        { lettera: "Porta",    video: "VideoLis/Porta.mp4" },
        { lettera: "Letto",    video: "VideoLis/Letto.mp4" },
        { lettera: "Balcone",  video: "VideoLis/Balcone.mp4" },
      ]},
    ]
  },
  { titolo: "Scuola e lavoro", icon: "📚", sub: "Contesti scolastici e lavorativi", sbloccato: false, progresso: 0,
    lezioni: [
      { titolo: "Materiali scolastici", segni: [
        { lettera: "Libro",    video: "VideoLis/Libro.mp4" },
        { lettera: "Penna",    video: "VideoLis/Penna.mp4" },
        { lettera: "Zaino",    video: "VideoLis/Zaino.mp4" },
        { lettera: "Quaderno", video: "VideoLis/Quaderno.mp4" },
      ]},
      { titolo: "Figure dirigenziali e amministrative", segni: [
        { lettera: "Preside",                   video: "VideoLis/Preside.mp4" },
        { lettera: "Vice Preside",              video: "VideoLis/VicePreside.mp4" },
        { lettera: "Segreteria Didattica",      video: "VideoLis/SegreteriaDidattica.mp4" },
        { lettera: "Segreteria Amministrativa", video: "VideoLis/SegreteriaAmministrativa.mp4" },
        { lettera: "Bidello",                   video: "VideoLis/Bidello.mp4" },
      ]},
      { titolo: "Laboratori tecnici", segni: [
        { lettera: "Laboratorio di Telecomunicazioni", video: "VideoLis/LaboratorioTelecomunicazioni.mp4" },
        { lettera: "Laboratorio Sistemi e Reti",       video: "VideoLis/LaboratorioSistemiReti.mp4" },
        { lettera: "Laboratorio Informatica",          video: "VideoLis/LaboratorioInformatica.mp4" },
      ]},
      { titolo: "In classe", segni: [
        { lettera: "Insegnante",                  video: "VideoLis/Insegnante.mp4" },
        { lettera: "Studente",                    video: "VideoLis/Studente.mp4" },
        { lettera: "Lavagna",                     video: "VideoLis/Lavagna.mp4" },
        { lettera: "Compiti",                     video: "VideoLis/Compiti.mp4" },
        { lettera: "Assistente alla Comunicazione", video: "VideoLis/AssistenteComunicazione.mp4" },
        { lettera: "Insegnante di Sostegno",      video: "VideoLis/InsegnanteSostegno.mp4" },
        { lettera: "Educatrice",                  video: "VideoLis/Educatrice.mp4" },
        { lettera: "Lim",                         video: "VideoLis/Lim.mp4" },
        { lettera: "Interrogazione",              video: "VideoLis/Interrogazione.mp4" },
        { lettera: "Valutazione",                 video: "VideoLis/Valutazione.mp4" },
        { lettera: "Voto",                        video: "VideoLis/Voto.mp4" },
        { lettera: "Prova parallela",             video: "VideoLis/ProvaParallela.mp4" },
        { lettera: "Verifica",                    video: "VideoLis/Verifica.mp4" },
        { lettera: "Nota disciplinare",           video: "VideoLis/NotaDisciplinare.mp4" },
        { lettera: "Richiamo",                    video: "VideoLis/Richiamo.mp4" },
      ]},
      { titolo: "Frasi utili", segni: [
        { lettera: "Non ho capito",          video: "VideoLis/NonHoCapito.mp4" },
        { lettera: "Puoi ripetere?",         video: "VideoLis/PuoiRipetere.mp4" },
        { lettera: "Ho finito",              video: "VideoLis/HoFinito.mp4" },
        { lettera: "Posso uscire?",          video: "VideoLis/PossoUscire.mp4" },
        { lettera: "Posso andare in bagno?", video: "VideoLis/PossoAndareBagno.mp4" },
      ]},
      { titolo: "Materie scolastiche", segni: [
        { lettera: "Matematica",        video: "VideoLis/Matematica.mp4" },
        { lettera: "Italiano",          video: "VideoLis/Italiano.mp4" },
        { lettera: "Inglese",           video: "VideoLis/Inglese.mp4" },
        { lettera: "Storia",            video: "VideoLis/Storia.mp4" },
        { lettera: "Geografia",         video: "VideoLis/Geografia.mp4" },
        { lettera: "Scienze",           video: "VideoLis/Scienze.mp4" },
        { lettera: "Educazione Fisica", video: "VideoLis/EducazioneFisica.mp4" },
        { lettera: "Informatica",       video: "VideoLis/Informatica.mp4" },
        { lettera: "Sistemi e Reti",    video: "VideoLis/SistemiEReti.mp4" },
        { lettera: "TPSI",              video: "VideoLis/TPSI.mp4" },
        { lettera: "Telecomunicazioni", video: "VideoLis/Telecomunicazioni.mp4" },
        { lettera: "Fisica",            video: "VideoLis/Fisica.mp4" },
        { lettera: "Chimica",           video: "VideoLis/Chimica.mp4" },
      ]},
      { titolo: "Al lavoro", segni: [
        { lettera: "Lavoro",   video: "VideoLis/Lavoro.mp4" },
        { lettera: "Ufficio",  video: "VideoLis/Ufficio.mp4" },
        { lettera: "Riunione", video: "VideoLis/Riunione.mp4" },
        { lettera: "Collega",  video: "VideoLis/Collega.mp4" },
      ]},
      { titolo: "Frasi lavorative", segni: [
        { lettera: "Ho una riunione",  video: "VideoLis/HoUnaRiunione.mp4" },
        { lettera: "Sono d accordo",   video: "VideoLis/SonoDAccordo.mp4" },
        { lettera: "Buon lavoro!",     video: "VideoLis/BuonLavoro.mp4" },
      ]},
    ]
  },
  { titolo: "Emozioni", icon: "😊", sub: "Stati d animo e sensazioni", sbloccato: false, progresso: 0,
    lezioni: [
      { titolo: "Emozioni positive", segni: [
        { lettera: "Felice",      video: "VideoLis/Felice.mp4" },
        { lettera: "Contento",    video: "VideoLis/Contento.mp4" },
        { lettera: "Entusiasta",  video: "VideoLis/Entusiasta.mp4" },
        { lettera: "Amore",       video: "VideoLis/Amore.mp4" },
      ]},
      { titolo: "Emozioni difficili", segni: [
        { lettera: "Triste",       video: "VideoLis/Triste.mp4" },
        { lettera: "Arrabbiato",   video: "VideoLis/Arrabbiato.mp4" },
        { lettera: "Preoccupato",  video: "VideoLis/Preoccupato.mp4" },
        { lettera: "Spaventato",   video: "VideoLis/Spaventato.mp4" },
      ]},
      { titolo: "Stati fisici", segni: [
        { lettera: "Stanco",     video: "VideoLis/Stanco.mp4" },
        { lettera: "Sorpreso",   video: "VideoLis/Sorpreso.mp4" },
        { lettera: "Ho fame",    video: "VideoLis/HoFame.mp4" },
        { lettera: "Ho sete",    video: "VideoLis/HoSete.mp4" },
      ]},
      { titolo: "Chiedere come stai", segni: [
        { lettera: "Come ti senti?", video: "VideoLis/ComeTiSenti.mp4" },
        { lettera: "Stai bene?",     video: "VideoLis/StaiBene.mp4" },
        { lettera: "Ti aiuto?",      video: "VideoLis/TiAiuto.mp4" },
      ]},
    ]
  },
  { titolo: "Dialoghi completi", icon: "💬", sub: "Conversazioni in contesti reali", sbloccato: false, progresso: 0,
    lezioni: [
      { titolo: "A scuola", segni: [
        { lettera: "Ciao, come ti chiami?", video: "VideoLis/CiaoComeTiChiami.mp4" },
        { lettera: "Mi chiamo...",          video: "VideoLis/MiChiamo.mp4" },
        { lettera: "Di che classe sei?",    video: "VideoLis/DiCheClasseSei.mp4" },
        { lettera: "Piacere!",              video: "VideoLis/Piacere.mp4" },
      ]},
      { titolo: "Chiedere aiuto", segni: [
        { lettera: "Non ho capito",         video: "VideoLis/NonHoCapito.mp4" },
        { lettera: "Puoi ripetere?",        video: "VideoLis/PuoiRipetere.mp4" },
        { lettera: "Grazie, ora ho capito", video: "VideoLis/GrazieOraHoCapito.mp4" },
      ]},
      { titolo: "Al lavoro", segni: [
        { lettera: "Buongiorno",       video: "VideoLis/Buongiorno.mp4" },
        { lettera: "Ho una riunione",  video: "VideoLis/HoUnaRiunione.mp4" },
        { lettera: "Sono d accordo",   video: "VideoLis/SonoDAccordo.mp4" },
        { lettera: "Buon lavoro!",     video: "VideoLis/BuonLavoro.mp4" },
      ]},
      { titolo: "Fare amicizia", segni: [
        { lettera: "Posso sedermi?",   video: "VideoLis/PossoSedermi.mp4" },
        { lettera: "Ti piace la LIS?", video: "VideoLis/TiPiaceLIS.mp4" },
        { lettera: "Siamo amici?",     video: "VideoLis/SiamoAmici.mp4" },
      ]},
      { titolo: "Emergenza", segni: [
        { lettera: "Aiuto!",              video: "VideoLis/Aiuto.mp4" },
        { lettera: "Ho bisogno di aiuto", video: "VideoLis/HoBisognoDiAiuto.mp4" },
        { lettera: "Chiama un medico",    video: "VideoLis/ChiamaUnMedico.mp4" },
      ]},
    ]
  },
];
 
const badge = [
  { nome: "Primo passo",    desc: "Completa il Modulo 1", icon: "🥇", sbloccato: false },
  { nome: "Esperto saluti", desc: "Impara tutti i saluti", icon: "👋", sbloccato: false },
  { nome: "Quiz Master",    desc: "Completa 10 quiz",      icon: "🎯", sbloccato: false },
  { nome: "7 giorni",       desc: "Studia 7 giorni di fila", icon: "🔥", sbloccato: false },
];
 
// =====================
// STATO
// =====================
let categoriaAttiva = "saluti";
let modalitaQuiz = "multipla";
let quizIndex = 0, quizPunteggio = 0;
let quizDomande = [], rispostaData = false;
let moduloAperto = null, lezioneAperta = null;
 
// =====================
// NAVIGAZIONE
// =====================
function navigate(id) {
  // Blocca la navigazione se il quiz è in corso → mostra modale interna
  if (quizAvviato && id !== 'quiz') {
    var modal = document.getElementById('modal-quiz-in-corso');
    if (modal) {
      modal.style.display = 'flex';
      document.getElementById('btn-quiz-esci').onclick = function() {
        chiudiModalQuizInCorso();
        quizAvviato = false;
        _navigateTo(id);
      };
    }
    return;
  }
  _navigateTo(id);
}

function chiudiModalQuizInCorso() {
  var modal = document.getElementById('modal-quiz-in-corso');
  if (modal) modal.style.display = 'none';
}

function _navigateTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.bnav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');
  if (id === 'home')       renderHome();
  if (id === 'dizionario') renderParole();
  if (id === 'moduli')     renderModuli();
  if (id === 'quiz')       avviaQuiz();
  if (id === 'progressi')  renderProgressi();
  if (id === 'profilo')    renderProfilo();
}
 
// =====================
// STREAK
// =====================
var streak = 0;

function getStreakData() {
  try { return JSON.parse(localStorage.getItem('accesslis_streak') || '{"count":0,"giorni":[]}'); } catch(e) { return {count:0,giorni:[]}; }
}
function salvaStreakData(d) { localStorage.setItem('accesslis_streak', JSON.stringify(d)); }

function aggiornaStreakOggi() {
  var oggi = new Date().toISOString().slice(0,10);
  var d = getStreakData();
  if (!d.giorni) d.giorni = [];
  if (!d.giorni.includes(oggi)) {
    d.giorni.push(oggi);
    // conta giorni consecutivi
    var count = 0;
    var giorno = new Date();
    while (true) {
      var key = giorno.toISOString().slice(0,10);
      if (d.giorni.includes(key)) { count++; giorno.setDate(giorno.getDate()-1); }
      else break;
    }
    d.count = count;
    salvaStreakData(d);
  }
  streak = d.count;
  return d;
}

function renderStreakWidget() {
  var d = aggiornaStreakOggi();
  var numEl = document.getElementById('streak-home-num');
  if (numEl) numEl.textContent = d.count;
  var settEl = document.getElementById('streak-settimana');
  if (!settEl) return;
  // Mostra ultimi 7 giorni
  var giorni = ['L','M','M','G','V','S','D'];
  var oggi = new Date();
  var html = '<div class="streak-week">';
  for (var i = 6; i >= 0; i--) {
    var g = new Date(oggi);
    g.setDate(oggi.getDate() - i);
    var key = g.toISOString().slice(0,10);
    var attivo = d.giorni && d.giorni.includes(key);
    var nomeG = giorni[g.getDay() === 0 ? 6 : g.getDay()-1];
    html += '<div class="streak-day' + (attivo ? ' attivo' : '') + '">';
    html += '<span class="streak-day-fire">' + (attivo ? '🔥' : '○') + '</span>';
    html += '<span class="streak-day-label">' + nomeG + '</span>';
    html += '</div>';
  }
  html += '</div>';
  settEl.innerHTML = html;
}

// =====================
// HOME
// =====================
function renderHome() {
  const frasi = [
    "Impara i nuovi segni oggi!",
    "Ogni segno e un ponte verso qualcuno.",
    "La comunicazione non ha barriere!",
    "Un passo alla volta, vai avanti!",
    "Imparare la LIS e un gesto d amore.",
    "Continua il tuo percorso oggi.",
    "Ottimo lavoro, non fermarti!",
  ];
  document.getElementById('frase-giorno').textContent = frasi[new Date().getDay()];
  // Aggiorna avatar con iniziale utente loggato
  var email = getSessione ? getSessione() : null;
  if (email) {
    var utenti = getUtenti ? getUtenti() : {};
    var nome = utenti[email] ? utenti[email].nome : email;
    var avatarEl = document.querySelector('.home-avatar');
    if (avatarEl) avatarEl.textContent = (nome || email)[0].toUpperCase();
  }
  const c = document.getElementById('home-moduli');
  c.innerHTML = moduli.map((m, i) => `
    <div class="home-modulo ${m.sbloccato ? '' : 'bloccato'}"
         onclick="${m.sbloccato ? 'apriModulo(' + i + ')' : 'moduloBloccato()'}">
      <div class="hm-icon">${m.icon}</div>
      <div class="hm-info">
        <p class="hm-titolo">${m.titolo}</p>
        <p class="hm-sub">${m.sub}</p>
        <div class="hm-prog">
          <div class="hm-bar-bg"><div class="hm-bar-fill" style="width:${m.progresso}%"></div></div>
          <span class="hm-perc">${m.progresso}%</span>
        </div>
      </div>
      <div class="hm-arrow">${m.sbloccato ? '›' : '🔒'}</div>
    </div>
  `).join('');
  renderStreakWidget();
}
 
// =====================
// DIZIONARIO
// =====================
function renderParole() {
  const query = document.getElementById('search-input').value.toLowerCase();
  let lista = parole.filter(p => p.categoria === categoriaAttiva);
  if (query) lista = lista.filter(p => p.nome.toLowerCase().includes(query));
  const c = document.getElementById('parole-list');
  if (!lista.length) {
    c.innerHTML = '<p style="text-align:center;color:#9CA3AF;padding:32px 0;">Nessuna parola trovata</p>';
    return;
  }
  c.innerHTML = lista.map(p => `
    <div class="parola-card" onclick="apriParola('${p.nome}')">
      <div class="parola-thumb">${categorieEmoji[p.categoria] || '🤟'}</div>
      <div class="parola-dati">
        <p class="parola-nome">${p.nome}</p>
        <span class="parola-cat">${p.categoria}</span>
      </div>
      <div class="parola-arrow">›</div>
    </div>
  `).join('');
}
 
function filtraParole() { renderParole(); }
 
function filtraCategoria(cat, el) {
  categoriaAttiva = cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderParole();
}
 
function apriParola(nome) {
  const p = parole.find(x => x.nome === nome);
  if (!p) return;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-parola').classList.add('active');
  document.getElementById('parola-titolo').textContent = p.nome;
  document.getElementById('parola-cat-label').textContent = p.categoria;
  const videoEl = document.getElementById('parola-video-el');
  const placeholder = document.getElementById('parola-placeholder');
  if (p.video) {
    videoEl.src = p.video;
    videoEl.muted = true;
    videoEl.volume = 0;
    videoEl.style.display = 'block';
    placeholder.style.display = 'none';
    // Quando il video finisce → segna la parola come vista
    videoEl.onended = function() {
      salvaParolaVista(p.nome);
    };
  } else {
    videoEl.style.display = 'none';
    placeholder.style.display = 'flex';
    videoEl.onended = null;
  }
}
 
// =====================
// MODULI
// =====================
function renderModuli() {
  const c = document.getElementById('moduli-list');
  c.innerHTML = moduli.map((m, i) => `
    <div class="modulo-card ${m.sbloccato ? '' : 'bloccato'}"
         onclick="${m.sbloccato ? 'apriModulo(' + i + ')' : 'moduloBloccato()'}">
      <div class="modulo-header">
        <div class="modulo-icon ${m.sbloccato ? '' : 'bloccato'}">${m.icon}</div>
        <div class="modulo-info">
          <p class="modulo-titolo">Modulo ${i+1} - ${m.titolo}</p>
          <p class="modulo-sub">${m.sub}</p>
        </div>
        <div class="modulo-lock">${m.sbloccato ? '›' : '🔒'}</div>
      </div>
      <div class="prog-bar-bg"><div class="prog-bar-fill" style="width:${m.progresso}%"></div></div>
      <div class="modulo-footer">
        <span class="modulo-lezioni-num">${m.lezioni.length} lezioni</span>
        <span class="modulo-perc">${m.progresso}%</span>
      </div>
    </div>
  `).join('');
}
 
function apriModulo(i) {
  moduloAperto = i;
  const m = moduli[i];
  // Inizializza array lezioni completate se non esiste
  if (!m.lezioniCompletate) m.lezioniCompletate = new Array(m.lezioni.length).fill(false);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-lezioni').classList.add('active');
  document.getElementById('lezioni-titolo').textContent = m.icon + ' ' + m.titolo;
  document.getElementById('lezioni-desc').textContent = m.sub;
  const c = document.getElementById('lezioni-list');
  c.innerHTML = '<div class="content">' + m.lezioni.map((l, li) => {
    const completata = m.lezioniCompletate[li];
    // Ogni lezione si sblocca solo se quella precedente e completata (prima e sempre aperta)
    const bloccata = li > 0 && !m.lezioniCompletate[li - 1];
    return `
    <div class="lezione-card ${bloccata ? 'bloccato' : ''}"
         onclick="${bloccata ? 'lezioneBlocata()' : 'apriLezione(' + i + ',' + li + ')'}">
      <div class="lez-num" style="${completata ? 'background:#16A34A;' : bloccata ? 'background:#D1D5DB;' : ''}">${completata ? '✓' : li+1}</div>
      <div class="lez-info">
        <p class="lez-titolo">${l.titolo}</p>
        <p class="lez-sub">${l.segni.length} segni · ${completata ? 'Completata' : bloccata ? 'Bloccata' : 'Da completare'}</p>
      </div>
      <div class="lez-arrow">${completata ? '✓' : bloccata ? '🔒' : '›'}</div>
    </div>`;
  }).join('') + '</div>';
}
 
function lezioneBlocata() {
  mostraModalCompletamento({
    icon: '🔒',
    titolo: 'Lezione bloccata',
    testo: 'Completa la lezione precedente per sbloccare questa!',
    badge: null
  });
}
 
function apriLezione(mi, li) {
  moduloAperto = mi;
  lezioneAperta = li;
  const m = moduli[mi];
  if (!m.lezioniCompletate) m.lezioniCompletate = new Array(m.lezioni.length).fill(false);
  const lez = m.lezioni[li];
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-contenuto').classList.add('active');
  document.getElementById('contenuto-titolo').textContent = lez.titolo;
  document.getElementById('contenuto-modulo').textContent = 'Modulo ' + (mi+1) + ' - Lezione ' + (li+1);
  const c = document.getElementById('contenuto-list');
  c.innerHTML = '<div class="content">' + lez.segni.map(s => {
    const lettera = typeof s === 'object' ? s.lettera : s;
    const img = typeof s === 'object' ? s.img : '';
    const note = typeof s === 'object' ? s.note : '';
    const segVideo = typeof s === 'object' ? (s.video || '') : '';
 
    // Blocco "Video reali da scaricare"
    if (note === 'Video reali da scaricare') {
      return `
      <div class="segno-card">
        <div style="background:#F3F4F6;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
          <span style="font-size:32px;">🎬</span>
          <p style="font-size:13px;font-weight:700;color:#6B7280;">Video reali da scaricare</p>
        </div>
        <div class="segno-info"><p class="segno-nome">${lettera}</p></div>
      </div>`;
    }
 
    // Blocco con VIDEO reale mp4
    if (segVideo) {
      return `
      <div class="segno-card">
        <div style="background:#0C447C;overflow:hidden;">
          <video src="${segVideo}" controls playsinline preload="none" muted
            style="width:100%;display:block;max-height:240px;object-fit:cover;"></video>
        </div>
        <div class="segno-info"><p class="segno-nome">${lettera}</p></div>
      </div>`;
    }
 
    // Blocco con IMMAGINE
    if (img) {
      return `
      <div class="segno-card">
        <div class="segno-thumb" style="background:#f0f0f0;">
          <img src="${img}" alt="Segno ${lettera}" style="width:100%;height:100%;object-fit:cover;display:block;"/>
        </div>
        <div class="segno-info"><p class="segno-nome">${lettera}</p></div>
      </div>`;
    }
 
    // Blocco solo testo (fallback)
    return `
    <div class="segno-card">
      <div class="segno-thumb">
        <span>${lettera}</span>
      </div>
      <div class="segno-info"><p class="segno-nome">${lettera}</p></div>
    </div>`;
  }).join('') + '</div>';
 
  // Aggiorna pulsante
  const btnWrap = document.querySelector('.bottom-action');
  if (m.lezioniCompletate[li]) {
    btnWrap.innerHTML =
      '<div style="background:#DCFCE7;border-radius:14px;padding:14px;text-align:center;">' +
        '<p style="font-size:14px;color:#16A34A;font-weight:700;">✓ Lezione già completata</p>' +
      '</div>';
  } else {
    btnWrap.innerHTML = '<button class="btn-completa" onclick="completaLezione()">🤟 Ho imparato il segno</button>';
  }
}
 
function completaLezione() {
  const m = moduli[moduloAperto];
  if (!m.lezioniCompletate) m.lezioniCompletate = new Array(m.lezioni.length).fill(false);
 
  // Segna questa lezione come completata
  m.lezioniCompletate[lezioneAperta] = true;

  // ✅ Aggiorna streak: oggi hai imparato un segno
  aggiornaStreakOggi();
  renderStreakWidget();

  // Aggiorna progresso in base alle lezioni completate
  const completate = m.lezioniCompletate.filter(Boolean).length;
  m.progresso = Math.round((completate / m.lezioni.length) * 100);

  // 💾 Salva progressi in localStorage
  salvaProgressi();
 
  // Se tutte le lezioni sono completate sblocca il modulo successivo
  if (m.progresso === 100) {
    if (moduloAperto + 1 < moduli.length) {
      moduli[moduloAperto + 1].sbloccato = true;
      salvaProgressi(); // 💾 salva sblocco modulo successivo
      mostraModalCompletamento({
        icon: '🎉',
        titolo: 'Modulo ' + (moduloAperto + 1) + ' completato!',
        testo: 'Ottimo lavoro! Hai completato il modulo "' + m.titolo + '".\n🔓 Il Modulo ' + (moduloAperto + 2) + ' — "' + moduli[moduloAperto + 1].titolo + '" è ora sbloccato!',
        badge: '🏅 Nuovo modulo sbloccato: ' + moduli[moduloAperto + 1].titolo
      });
    } else {
      mostraModalCompletamento({
        icon: '🏆',
        titolo: 'Tutti i moduli completati!',
        testo: 'Straordinario! Hai completato tutti i moduli di AccessLIS.\nSei un vero campione della LIS! 🤟',
        badge: null
      });
    }
    // La modal gestisce il ritorno, non serve tornaLezioni() qui
  } else {
    // Vai automaticamente alla lezione successiva se esiste
    const prossimaLezione = lezioneAperta + 1;
    if (prossimaLezione < m.lezioni.length) {
      apriLezione(moduloAperto, prossimaLezione);
      return;
    }
  }
  tornaLezioni();
}
 
function moduloBloccato() {
  mostraModalCompletamento({
    icon: '🔒',
    titolo: 'Modulo bloccato',
    testo: 'Completa il modulo precedente per sbloccare questo!',
    badge: null
  });
}
function tornaModuli() { navigate('moduli'); }
function tornaLezioni() { apriModulo(moduloAperto); }
function tornaDizionario() { navigate('dizionario'); }

// =====================
// MODAL COMPLETAMENTO
// =====================
function mostraModalCompletamento(opts) {
  document.getElementById('modal-icon').textContent   = opts.icon;
  document.getElementById('modal-titolo').textContent = opts.titolo;
  document.getElementById('modal-testo').textContent  = opts.testo;
  var badgeBox = document.getElementById('modal-badge-box');
  if (opts.badge) {
    document.getElementById('modal-badge-testo').textContent = opts.badge;
    badgeBox.style.display = 'block';
  } else {
    badgeBox.style.display = 'none';
  }
  var modal = document.getElementById('modal-completamento');
  modal.style.display = 'flex';
}

function chiudiModalCompletamento() {
  document.getElementById('modal-completamento').style.display = 'none';
}
 
// =====================
// QUIZ — con video reale, modalita bloccata, cronometro 10 min
// =====================
let quizAvviato = false;
 
function setModalita(mod, el) {
  if (quizAvviato) return; // blocca cambio modalita durante quiz
  modalitaQuiz = mod;
  document.querySelectorAll('.btn-modalita').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}
 
function avviaQuiz() {
  // Mostra schermata scelta iniziale senza avviare il quiz
  quizAvviato = false;
  quizIndex = 0;
  quizPunteggio = 0;
  const area = document.getElementById('quiz-area');
  area.innerHTML =
    '<div class="quiz-card" style="text-align:center;padding:24px 16px;">' +
      '<div style="font-size:48px;margin-bottom:12px;">🎯</div>' +
      '<h3 style="font-size:18px;font-weight:700;color:#1a1a2e;margin-bottom:8px;">Scegli la modalita</h3>' +
      '<p style="font-size:14px;color:#6B7280;margin-bottom:20px;">Seleziona Scelta multipla o Vero o Falso e poi premi Inizia. Non potrai cambiare modalita durante il quiz.</p>' +
      '<button onclick="iniziaQuiz()" style="width:100%;padding:14px;border-radius:12px;background:#1E6FD9;color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;">Inizia quiz →</button>' +
    '</div>';
  // sblocca pulsanti modalita
  document.querySelectorAll('.btn-modalita').forEach(b => b.style.opacity = '1');
  document.querySelectorAll('.btn-modalita').forEach(b => b.style.pointerEvents = 'auto');
}
 
function iniziaQuiz() {
  quizAvviato = true;
  quizIndex = 0;
  quizPunteggio = 0;
  // Blocca i pulsanti modalita
  document.querySelectorAll('.btn-modalita').forEach(b => {
    b.style.opacity = b.classList.contains('active') ? '1' : '0.4';
    b.style.pointerEvents = 'none';
  });
  // Usa solo parole con video
  const conVideo = parole.filter(p => p.video);
  quizDomande = [...conVideo].sort(() => Math.random() - 0.5).slice(0, 20);
  mostraDomanda();
}
 
 
function mostraDomanda() {
  const area = document.getElementById('quiz-area');
 
  if (quizIndex >= quizDomande.length) {
    quizAvviato = false;
    quizTotali++;
    salvaQuizTotali(); // 💾
    document.querySelectorAll('.btn-modalita').forEach(b => {
      b.style.opacity = '1';
      b.style.pointerEvents = 'auto';
    });
    const stelle = quizPunteggio >= 17 ? '⭐⭐⭐' : quizPunteggio >= 12 ? '⭐⭐' : '⭐';
    const msg = quizPunteggio >= 17 ? 'Ottimo lavoro!' : quizPunteggio >= 12 ? 'Buon risultato!' : 'Continua ad esercitarti!';
    area.innerHTML =
      '<div class="quiz-risultato">' +
        '<div style="font-size:52px">' + stelle + '</div>' +
        '<h2>Quiz completato!</h2>' +
        '<p>Hai risposto correttamente a <strong>' + quizPunteggio + '</strong> su ' + quizDomande.length + ' domande.<br>' + msg + '</p>' +
        '<button class="btn-riprova" onclick="avviaQuiz()">Riprova</button>' +
      '</div>';
    return;
  }
 
  const d = quizDomande[quizIndex];
  let sbagliate = parole.filter(p => p.nome !== d.nome && p.categoria === d.categoria);
  if (sbagliate.length < 2) sbagliate = parole.filter(p => p.nome !== d.nome);
  sbagliate = sbagliate.sort(() => Math.random() - 0.5).slice(0, 2);
  const opzioni = [d, ...sbagliate].sort(() => Math.random() - 0.5);
 
  const stepHtml =
    '<div id="quiz-step-bar" style="margin-bottom:12px;">' +
      '<p class="quiz-step" style="margin:0;">Domanda ' + (quizIndex+1) + ' di ' + quizDomande.length + '</p>' +
    '</div>';
 
  if (modalitaQuiz === 'multipla') {
    area.innerHTML =
      '<div class="quiz-card">' +
        stepHtml +
        '<p class="quiz-domanda">Guarda il video e scegli il segno corretto</p>' +
        '<div class="quiz-video-wrap">' +
          '<video src="' + d.video + '" controls playsinline preload="auto" autoplay muted ' +
            'style="width:100%;height:100%;object-fit:cover;display:block;">' +
          '</video>' +
        '</div>' +
        '<div class="quiz-opzioni">' +
          opzioni.map(o =>
            '<button class="quiz-opt" onclick="rispondi(\'' + o.nome + '\',\'' + d.nome + '\',this)">' + o.nome + '</button>'
          ).join('') +
        '</div>' +
        '<div class="quiz-feedback" id="quiz-feedback"></div>' +
        '<button class="quiz-next" id="quiz-next" onclick="prossimaDomanda()">Prossima domanda →</button>' +
      '</div>';
    // Silenzia forzatamente via JS (cross-browser)
    var qv = area.querySelector('video');
    if (qv) { qv.muted = true; qv.volume = 0; }

  } else {
    const altraParola = parole.filter(p => p.nome !== d.nome).sort(() => Math.random() - 0.5)[0];
    const mostraNome = Math.random() > 0.5 ? d.nome : altraParola.nome;
    const eCorretto = mostraNome === d.nome;
    area.innerHTML =
      '<div class="quiz-card">' +
        stepHtml +
        '<p class="quiz-domanda">Questo video mostra il segno: <strong>"' + mostraNome + '"</strong>?</p>' +
        '<div class="quiz-video-wrap">' +
          '<video src="' + d.video + '" controls playsinline preload="auto" autoplay muted ' +
            'style="width:100%;height:100%;object-fit:cover;display:block;">' +
          '</video>' +
        '</div>' +
        '<div style="display:flex;gap:10px;margin-top:4px;">' +
          '<button class="quiz-opt" style="flex:1;text-align:center;background:#DCFCE7;border-color:#16A34A;color:#15803D;font-weight:700;font-size:16px;" ' +
            'onclick="rispondiVF(true,' + eCorretto + ',this,\'' + d.nome + '\',\'' + mostraNome + '\')">Vero</button>' +
          '<button class="quiz-opt" style="flex:1;text-align:center;background:#FEE2E2;border-color:#DC2626;color:#B91C1C;font-weight:700;font-size:16px;" ' +
            'onclick="rispondiVF(false,' + eCorretto + ',this,\'' + d.nome + '\',\'' + mostraNome + '\')">Falso</button>' +
        '</div>' +
        '<div class="quiz-feedback" id="quiz-feedback"></div>' +
        '<button class="quiz-next" id="quiz-next" onclick="prossimaDomanda()">Prossima domanda →</button>' +
      '</div>';
    // Silenzia forzatamente via JS (cross-browser)
    var qv2 = area.querySelector('video');
    if (qv2) { qv2.muted = true; qv2.volume = 0; }
  }
  rispostaData = false;
}
 
function rispondi(scelta, corretta, el) {
  if (rispostaData) return;
  rispostaData = true;
  document.querySelectorAll('.quiz-opt').forEach(o => o.style.pointerEvents = 'none');
  const vid = document.querySelector('.quiz-video-wrap video');
  if (vid) vid.pause();
  const fb = document.getElementById('quiz-feedback');
  const nx = document.getElementById('quiz-next');
  if (scelta === corretta) {
    el.classList.add('correct');
    fb.textContent = '✅ Bravo! Risposta corretta!';
    fb.className = 'quiz-feedback show ok';
    quizPunteggio++;
  } else {
    el.classList.add('wrong');
    fb.textContent = '❌ Risposta sbagliata! La parola corretta era: "' + corretta + '"';
    fb.className = 'quiz-feedback show no';
    document.querySelectorAll('.quiz-opt').forEach(o => {
      if (o.textContent === corretta) o.classList.add('correct');
    });
  }
  nx.classList.add('show');
}

function rispondiVF(scelta, corretto, el, nomeReale, nomeMostrato) {
  if (rispostaData) return;
  rispostaData = true;
  document.querySelectorAll('.quiz-opt').forEach(o => o.style.pointerEvents = 'none');
  const vid = document.querySelector('.quiz-video-wrap video');
  if (vid) vid.pause();
  const fb = document.getElementById('quiz-feedback');
  const nx = document.getElementById('quiz-next');
  if (scelta === corretto) {
    fb.textContent = '✅ Bravo! Risposta corretta!';
    fb.className = 'quiz-feedback show ok';
    quizPunteggio++;
  } else {
    const rispostaGiusta = corretto ? 'VERO' : 'FALSO';
    const spiegazione = corretto
      ? 'Il video mostrava davvero il segno "' + nomeReale + '".'
      : 'Il video mostrava "' + nomeReale + '", non "' + nomeMostrato + '".';
    fb.textContent = '❌ Risposta sbagliata! Era ' + rispostaGiusta + '. ' + spiegazione;
    fb.className = 'quiz-feedback show no';
  }
  nx.classList.add('show');
}
 
function prossimaDomanda() { quizIndex++; mostraDomanda(); }
 
// =====================
// PAROLE VISTE (dizionario)
// =====================
function getParoleViste() {
  try {
    var arr = JSON.parse(localStorage.getItem('accesslis_parole_viste') || '[]');
    return new Set(arr);
  } catch(e) { return new Set(); }
}
function salvaParolaVista(nome) {
  var set = getParoleViste();
  set.add(nome);
  localStorage.setItem('accesslis_parole_viste', JSON.stringify([...set]));
  // Aggiorna stat parole nel profilo se visibile
  var psEl = document.getElementById('ps-parole');
  if (psEl) psEl.textContent = set.size;
}

// =====================
// PROGRESSI
// =====================
function renderProgressi() {
  const completati = moduli.filter(m => m.progresso === 100).length;
  const paroleViste = getParoleViste();
  const percTot = Math.round(moduli.reduce((a, m) => a + m.progresso, 0) / moduli.length);

  const c = document.getElementById('progressi-content');
  if (!c) return;

  c.innerHTML =
    '<div style="text-align:center; padding:32px 16px 16px;">' +
      '<div style="font-size:64px; margin-bottom:12px;">📊</div>' +
      '<p style="font-size:16px; font-weight:700; color:#1a1a2e; margin-bottom:4px;">Avanzamento complessivo</p>' +
      '<p style="font-size:32px; font-weight:800; color:#1E6FD9; margin-bottom:4px;">' + percTot + '%</p>' +
      '<p style="font-size:13px; color:#9CA3AF; margin-bottom:28px;">delle lezioni completate</p>' +
    '</div>' +
    '<div style="background:#F0F7FF; border-radius:16px; padding:20px; text-align:center; margin-bottom:16px;">' +
      '<p style="font-size:13px; color:#1E6FD9; font-weight:700; margin-bottom:4px;">🎓 Vai al profilo</p>' +
      '<p style="font-size:13px; color:#6B7280;">Le statistiche dettagliate (moduli, parole, giorni streak) si trovano nel tuo profilo.</p>' +
      '<button onclick="navigate(\'profilo\')" style="margin-top:14px; padding:10px 24px; border-radius:12px; background:#1E6FD9; color:#fff; font-size:14px; font-weight:700; border:none; cursor:pointer;">Vai al Profilo →</button>' +
    '</div>';
}
 
// =====================
// INIT
// =====================
renderHome();

// ---- AUTH & PROFILO ----
var notificheOn = false;
var darkOn = false;
var quizTotali = 0;

// Database utenti in localStorage
function getUtenti() {
  try { return JSON.parse(localStorage.getItem('accesslis_utenti') || '{}'); } catch(e) { return {}; }
}
function salvaUtenti(u) { localStorage.setItem('accesslis_utenti', JSON.stringify(u)); }
function getSessione() { return localStorage.getItem('accesslis_sessione') || null; }
function salvaSessione(email) { localStorage.setItem('accesslis_sessione', email); }
function rimuoviSessione() { localStorage.removeItem('accesslis_sessione'); }

// =====================
// PERSISTENZA PROGRESSI
// =====================
function salvaProgressi() {
  var dati = moduli.map(function(m) {
    return {
      sbloccato:        m.sbloccato,
      progresso:        m.progresso,
      lezioniCompletate: m.lezioniCompletate || []
    };
  });
  localStorage.setItem('accesslis_progressi', JSON.stringify(dati));
}

function caricaProgressi() {
  try {
    var raw = localStorage.getItem('accesslis_progressi');
    if (!raw) return;
    var dati = JSON.parse(raw);
    dati.forEach(function(d, i) {
      if (!moduli[i]) return;
      moduli[i].sbloccato         = d.sbloccato;
      moduli[i].progresso         = d.progresso || 0;
      moduli[i].lezioniCompletate = d.lezioniCompletate || new Array(moduli[i].lezioni.length).fill(false);
    });
  } catch(e) { console.warn('Errore caricamento progressi:', e); }
}

function salvaQuizTotali() {
  localStorage.setItem('accesslis_quiz_totali', quizTotali);
}

function caricaQuizTotali() {
  var v = parseInt(localStorage.getItem('accesslis_quiz_totali') || '0');
  quizTotali = isNaN(v) ? 0 : v;
}

// Valida password: max 12 char, ≥1 maiuscola, ≥1 numero, ≥1 speciale
function validaPassword(pwd) {
  return {
    len: pwd.length > 0 && pwd.length <= 12,
    mai: /[A-Z]/.test(pwd),
    num: /[0-9]/.test(pwd),
    spe: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(pwd)
  };
}

function validaPwd(pwd, prefisso) {
  var p = prefisso || '';
  var v = validaPassword(pwd);
  function set(id, ok) {
    var el = document.getElementById((p ? p + '-' : '') + 'req-' + id);
    if (!el) return;
    el.classList.toggle('ok', ok);
    el.textContent = (ok ? '✓ ' : '○ ') + el.textContent.replace(/^[✓○] /, '');
  }
  set('len', v.len);
  set('mai', v.mai);
  set('num', v.num);
  set('spe', v.spe);
}

function togglePwd(inputId, btn) {
  var el = document.getElementById(inputId);
  if (!el) return;
  if (el.type === 'password') { el.type = 'text'; btn.textContent = '🙈'; }
  else { el.type = 'password'; btn.textContent = '👁'; }
}

function mostraView(id) {
  ['view-login','view-registrazione','view-reset'].forEach(function(v) {
    var el = document.getElementById(v);
    if (el) el.style.display = (v === id) ? '' : 'none';
  });
}

function mostraLogin()        { mostraView('view-login'); }
function mostraRegistrazione(){
  // Svuota tutti i campi prima di mostrare il form
  var campi = ['reg-nome','reg-email','reg-pwd'];
  campi.forEach(function(id) { var el = document.getElementById(id); if (el) el.value = ''; });
  var err = document.getElementById('reg-error'); if (err) err.textContent = '';
  // Resetta requisiti password visivi
  ['req-len','req-mai','req-num','req-spe'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.classList.remove('ok'); el.textContent = '○ ' + el.textContent.replace(/^[✓○] /,''); }
  });
  mostraView('view-registrazione');
}
function mostraResetPwd()     { mostraView('view-reset'); }

function doLogin() {
  var email = (document.getElementById('login-email').value || '').trim().toLowerCase();
  var pwd   = document.getElementById('login-pwd').value;
  var err   = document.getElementById('login-error');
  err.textContent = '';
  if (!email || !pwd) { err.textContent = 'Compila tutti i campi.'; return; }
  var utenti = getUtenti();
  if (!utenti[email]) { err.textContent = 'Account non trovato. Registrati prima.'; return; }
  if (utenti[email].password !== pwd) { err.textContent = 'Password errata.'; return; }
  salvaSessione(email);
  entraInApp(email, utenti[email].nome);
}

function doRegistrazione() {
  var nome  = (document.getElementById('reg-nome').value || '').trim();
  var email = (document.getElementById('reg-email').value || '').trim().toLowerCase();
  var pwd   = document.getElementById('reg-pwd').value;
  var err   = document.getElementById('reg-error');
  err.textContent = '';
  if (!nome || !email || !pwd) { err.textContent = 'Compila tutti i campi.'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'Email non valida.'; return; }
  var v = validaPassword(pwd);
  if (!v.len) { err.textContent = 'La password deve essere max 12 caratteri.'; return; }
  if (!v.mai) { err.textContent = 'Aggiungi almeno una lettera maiuscola.'; return; }
  if (!v.num) { err.textContent = 'Aggiungi almeno un numero.'; return; }
  if (!v.spe) { err.textContent = 'Aggiungi almeno un carattere speciale.'; return; }
  var utenti = getUtenti();
  if (utenti[email]) { err.textContent = 'Questo account esiste già. Accedi.'; return; }
  utenti[email] = { nome: nome, password: pwd };
  salvaUtenti(utenti);
  salvaSessione(email);
  entraInApp(email, nome);
}

// Entra nell'app dopo login/registrazione riusciti
function entraInApp(email, nome) {
  // Nasconde login screen, mostra app
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = '';
  document.querySelector('.bottom-nav').style.display = 'flex';
  // Aggiorna avatar
  var avatarEl = document.querySelector('.home-avatar');
  if (avatarEl) avatarEl.textContent = (nome || email)[0].toUpperCase();
  // Vai alla Home
  navigate('home');
}

function doLogout() {
  rimuoviSessione();
  // I progressi restano salvati per il prossimo accesso
  // Nasconde app e bottom nav, mostra login
  document.getElementById('app').style.display = 'none';
  document.querySelector('.bottom-nav').style.display = 'none';
  document.getElementById('login-screen').style.display = '';
  var pwdEl = document.getElementById('login-pwd');
  if (pwdEl) pwdEl.value = '';
  var errEl = document.getElementById('login-error');
  if (errEl) errEl.textContent = '';
  mostraLogin();
}

function renderProfilo() {
  var email = getSessione();
  if (!email) return;
  var utenti = getUtenti();
  var nome = utenti[email] ? utenti[email].nome : email;
  var avEl = document.getElementById('profilo-avatar-iniziale');
  var nEl  = document.getElementById('profilo-nome-display');
  var eEl  = document.getElementById('profilo-email-display');
  if (avEl) avEl.textContent = (nome || email)[0].toUpperCase();
  if (nEl)  nEl.textContent  = nome || email;
  if (eEl)  eEl.textContent  = email;
  aggiornaStatsProfilo();
}

function doRegistrazione() {
  var nome  = (document.getElementById('reg-nome').value || '').trim();
  var email = (document.getElementById('reg-email').value || '').trim().toLowerCase();
  var pwd   = document.getElementById('reg-pwd').value;
  var err   = document.getElementById('reg-error');
  err.textContent = '';
  if (!nome || !email || !pwd) { err.textContent = 'Compila tutti i campi.'; return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = 'Email non valida.'; return; }
  var v = validaPassword(pwd);
  if (!v.len) { err.textContent = 'La password deve essere max 12 caratteri.'; return; }
  if (!v.mai) { err.textContent = 'Aggiungi almeno una lettera maiuscola.'; return; }
  if (!v.num) { err.textContent = 'Aggiungi almeno un numero.'; return; }
  if (!v.spe) { err.textContent = 'Aggiungi almeno un carattere speciale.'; return; }
  var utenti = getUtenti();
  if (utenti[email]) { err.textContent = 'Questo account esiste già. Accedi.'; return; }
  utenti[email] = { nome: nome, password: pwd };
  salvaUtenti(utenti);
  salvaSessione(email);
  // Aggiorna avatar Home
  var avatarEl = document.querySelector('.home-avatar');
  if (avatarEl) avatarEl.textContent = nome[0].toUpperCase();
  // Vai alla Home
  navigate('home');
}

function doResetPwd() {
  var pwd1 = document.getElementById('reset-pwd1').value;
  var pwd2 = document.getElementById('reset-pwd2').value;
  var err  = document.getElementById('reset-error');
  err.textContent = '';
  if (!pwd1 || !pwd2) { err.textContent = 'Compila entrambi i campi.'; return; }
  if (pwd1 !== pwd2) { err.textContent = 'Le password non coincidono.'; return; }
  var v = validaPassword(pwd1);
  if (!v.len) { err.textContent = 'Max 12 caratteri.'; return; }
  if (!v.mai) { err.textContent = 'Aggiungi almeno una lettera maiuscola.'; return; }
  if (!v.num) { err.textContent = 'Aggiungi almeno un numero.'; return; }
  if (!v.spe) { err.textContent = 'Aggiungi almeno un carattere speciale.'; return; }
  // Aggiorna password per l'account salvato (se esiste sessione)
  var email = getSessione();
  if (email) {
    var utenti = getUtenti();
    if (utenti[email]) { utenti[email].password = pwd1; salvaUtenti(utenti); }
  }
  alert('✅ Password aggiornata con successo!');
  // Svuota i campi reset per la prossima volta
  document.getElementById('reset-pwd1').value = '';
  document.getElementById('reset-pwd2').value = '';
  document.getElementById('reset-error').textContent = '';
  // Resetta i requisiti visivi
  ['reset-req-len','reset-req-mai','reset-req-num','reset-req-spe'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.classList.remove('ok'); el.textContent = '○ ' + el.textContent.replace(/^[✓○] /,''); }
  });
  mostraLogin();
}

function mostraProfiloLoggato(email, nome) {
  mostraView('view-profilo-loggato');
  var iniziale = nome ? nome[0].toUpperCase() : email[0].toUpperCase();
  // Lettera avatar profilo
  var letEl = document.getElementById('profilo-avatar-lettera');
  if (letEl) letEl.textContent = iniziale;
  // Immagine avatar profilo (se salvata)
  var avatarImg = document.getElementById('profilo-avatar-img');
  var avatarImgSrc = localStorage.getItem('accesslis_avatar');
  if (avatarImg && avatarImgSrc) {
    avatarImg.src = avatarImgSrc;
    avatarImg.style.display = 'block';
    if (letEl) letEl.style.display = 'none';
  } else if (avatarImg) {
    avatarImg.style.display = 'none';
    if (letEl) letEl.style.display = '';
  }
  // Avatar home
  sincronizzaAvatarHome();
  var nEl = document.getElementById('profilo-nome-display');
  var eEl = document.getElementById('profilo-email-display');
  if (nEl) nEl.textContent = nome || email;
  if (eEl) eEl.textContent = email;
  aggiornaStatsProfilo();
}

function aggiornaStatsProfilo() {
  var completate = moduli.reduce(function(acc, m) {
    return acc + (m.lezioniCompletate ? m.lezioniCompletate.filter(Boolean).length : 0);
  }, 0);
  var livelloLabel = 'Principiante', livelloNum = 1;
  if (completate >= 15) { livelloLabel = 'Avanzato'; livelloNum = 3; }
  else if (completate >= 6) { livelloLabel = 'Intermedio'; livelloNum = 2; }
  var lv = document.getElementById('profilo-livello-label');
  if (lv) lv.textContent = 'Livello ' + livelloNum + ' — ' + livelloLabel;
  // Quiz fatti
  var pq = document.getElementById('ps-quiz');
  if (pq) pq.textContent = typeof quizTotali !== 'undefined' ? quizTotali : 0;
  // Moduli completati
  var moduliCompletati = moduli.filter(function(m) { return m.progresso === 100; }).length;
  var pm = document.getElementById('ps-moduli');
  if (pm) pm.textContent = moduliCompletati + '/' + moduli.length;
  // Parole viste
  var paroleViste = getParoleViste();
  var pp = document.getElementById('ps-parole');
  if (pp) pp.textContent = paroleViste.size;
  // Giorni streak
  var sd = getStreakData();
  var pg = document.getElementById('ps-giorni');
  if (pg) pg.textContent = '🔥' + (sd.count || 0);

  // Anello avanzamento totale
  var percTot = Math.round(moduli.reduce(function(a, m) { return a + m.progresso; }, 0) / moduli.length);
  var ring = document.getElementById('profilo-ring-fill');
  var ringPerc = document.getElementById('profilo-ring-perc');
  if (ring) {
    var circ = 314;
    var offset = circ - (circ * percTot / 100);
    // Forza reflow per animazione
    ring.style.strokeDashoffset = circ;
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        ring.style.strokeDashoffset = offset;
        ring.style.stroke = percTot >= 80 ? '#16A34A' : percTot >= 40 ? '#1E6FD9' : '#F59E0B';
      });
    });
  }
  if (ringPerc) ringPerc.textContent = percTot + '%';
}

// =====================
// AVATAR PERSONALIZZATO
// =====================
function triggerAvatarUpload() {
  var inp = document.getElementById('avatar-file-input');
  if (inp) inp.click();
}

function caricaAvatar(event) {
  var file = event.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var dataUrl = e.target.result;
    localStorage.setItem('accesslis_avatar', dataUrl);
    sincronizzaAvatarHome();
    // Aggiorna avatar nel profilo
    var img = document.getElementById('profilo-avatar-img');
    var let_ = document.getElementById('profilo-avatar-lettera');
    if (img) { img.src = dataUrl; img.style.display = 'block'; }
    if (let_) let_.style.display = 'none';
    // Aggiorna avatar nella modifica profilo
    var mpImg = document.getElementById('mp-avatar-img');
    var mpLet = document.getElementById('mp-avatar-lettera');
    if (mpImg) { mpImg.src = dataUrl; mpImg.style.display = 'block'; }
    if (mpLet) mpLet.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function sincronizzaAvatarHome() {
  var homeAv = document.getElementById('home-avatar-img');
  if (!homeAv) return;
  var src = localStorage.getItem('accesslis_avatar');
  if (src) {
    homeAv.innerHTML = '<img src="' + src + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />';
  } else {
    var email = getSessione ? getSessione() : null;
    var nome = '';
    if (email) { var u = getUtenti ? getUtenti() : {}; nome = u[email] ? u[email].nome : email; }
    homeAv.textContent = nome ? nome[0].toUpperCase() : 'D';
  }
}

// =====================
// MODIFICA PROFILO
// =====================
function apriModificaProfilo() {
  var email = getSessione();
  var utenti = getUtenti();
  var nome = utenti[email] ? utenti[email].nome : '';
  var mpNome = document.getElementById('mp-nome');
  var mpEmail = document.getElementById('mp-email');
  var mpErr = document.getElementById('mp-error');
  if (mpNome) mpNome.value = nome;
  if (mpEmail) mpEmail.value = email;
  if (mpErr) mpErr.textContent = '';
  // Avatar nella modal modifica
  var mpImg = document.getElementById('mp-avatar-img');
  var mpLet = document.getElementById('mp-avatar-lettera');
  var src = localStorage.getItem('accesslis_avatar');
  if (mpImg && src) { mpImg.src = src; mpImg.style.display = 'block'; if (mpLet) mpLet.style.display = 'none'; }
  else if (mpLet) { mpLet.textContent = nome ? nome[0].toUpperCase() : 'D'; if (mpImg) mpImg.style.display = 'none'; mpLet.style.display = ''; }
  document.getElementById('modal-modifica-profilo').style.display = 'block';
}

function salvaModificaProfilo() {
  var nome = (document.getElementById('mp-nome').value || '').trim();
  var pwd  = document.getElementById('mp-pwd').value;
  var err  = document.getElementById('mp-error');
  err.textContent = '';
  if (!nome) { err.textContent = 'Il nome non può essere vuoto.'; return; }
  var email = getSessione();
  var utenti = getUtenti();
  utenti[email].nome = nome;
  if (pwd) {
    var v = validaPassword(pwd);
    if (!v.len) { err.textContent = 'Max 12 caratteri.'; return; }
    if (!v.mai) { err.textContent = 'Aggiungi almeno una maiuscola.'; return; }
    if (!v.num) { err.textContent = 'Aggiungi almeno un numero.'; return; }
    if (!v.spe) { err.textContent = 'Aggiungi almeno un carattere speciale.'; return; }
    utenti[email].password = pwd;
  }
  salvaUtenti(utenti);
  // Aggiorna UI
  var nEl = document.getElementById('profilo-nome-display');
  if (nEl) nEl.textContent = nome;
  var letEl = document.getElementById('profilo-avatar-lettera');
  if (letEl) letEl.textContent = nome[0].toUpperCase();
  sincronizzaAvatarHome();
  chiudiModale('modal-modifica-profilo');
  mostraModalCompletamento({ icon: '✅', titolo: 'Profilo aggiornato!', testo: 'Le tue modifiche sono state salvate.', badge: null });
}

// =====================
// PRIVACY
// =====================
function apriPrivacy() {
  document.getElementById('modal-privacy').style.display = 'block';
}

function cancellaIDati() {
  if (confirm('⚠️ Sei sicuro? Verranno cancellati tutti i progressi e i dati dell\'account.')) {
    // Azzera progressi in memoria prima del reload
    moduli.forEach(function(m, i) {
      m.sbloccato = (i === 0);
      m.progresso = 0;
      m.lezioniCompletate = [];
    });
    quizTotali = 0;
    localStorage.clear();
    location.reload();
  }
}

// =====================
// VALUTAZIONE APP
// =====================
var stellaSelezionata = 0;

function apriValutazione() {
  stellaSelezionata = 0;
  document.querySelectorAll('.stella').forEach(function(s) { s.textContent = '☆'; s.style.transform = ''; });
  document.getElementById('feedback-testo').value = '';
  document.getElementById('modal-valutazione').style.display = 'flex';
}

function selezionaStella(v) {
  stellaSelezionata = v;
  document.querySelectorAll('.stella').forEach(function(s) {
    var sv = parseInt(s.getAttribute('data-v'));
    s.textContent = sv <= v ? '★' : '☆';
    s.style.color  = sv <= v ? '#F59E0B' : '#D1D5DB';
    s.style.transform = sv === v ? 'scale(1.25)' : '';
  });
}

function inviaFeedback() {
  if (!stellaSelezionata) {
    alert('Seleziona almeno una stella!');
    return;
  }
  chiudiModale('modal-valutazione');
  mostraModalCompletamento({
    icon: stellaSelezionata >= 4 ? '🌟' : '🙏',
    titolo: 'Grazie per il feedback!',
    testo: 'Hai dato ' + stellaSelezionata + ' stelle su 5. Il tuo feedback ci aiuta a migliorare AccessLIS!',
    badge: null
  });
}

// =====================
// UTILITY MODALI
// =====================
function chiudiModale(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = 'none';
}



function renderProfilo() {
  var email = getSessione();
  if (email) {
    var utenti = getUtenti();
    var nome = utenti[email] ? utenti[email].nome : email;
    // Pre-compila username nel login per la prossima volta
    var loginEl = document.getElementById('login-email');
    if (loginEl) loginEl.value = email;
    mostraProfiloLoggato(email, nome);
  } else {
    mostraLogin();
  }
}

function toggleNotifiche() {
  notificheOn = !notificheOn;
  var t = document.getElementById('toggle-notifiche');
  if (t) t.classList.toggle('on', notificheOn);
}

function toggleDark() {
  darkOn = !darkOn;
  var t = document.getElementById('toggle-dark');
  if (t) t.classList.toggle('on', darkOn);
  document.body.style.filter = darkOn ? 'invert(1) hue-rotate(180deg)' : '';
}

// =====================
// AVVIO APP
// =====================
(function avvioApp() {
  // 💾 Ripristina progressi e quiz salvati
  caricaProgressi();
  caricaQuizTotali();

  const email = getSessione();
  if (email) {
    // Già loggato → mostra app direttamente
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app').style.display = '';
    document.querySelector('.bottom-nav').style.display = 'flex';
    const utenti = getUtenti();
    const nome = utenti[email] ? utenti[email].nome : email;
    const avatarEl = document.querySelector('.home-avatar');
    if (avatarEl) avatarEl.textContent = (nome || email)[0].toUpperCase();
    sincronizzaAvatarHome();
    navigate('home');
  } else {
    // Non loggato → mostra login screen, nasconde app e bottom nav
    document.getElementById('login-screen').style.display = '';
    document.getElementById('app').style.display = 'none';
    document.querySelector('.bottom-nav').style.display = 'none';
    mostraLogin();
  }
})();