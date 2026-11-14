const User = require('./User');
const Movie = require('./Movie');
const Comment = require('./Comment');
const AuthService = require('./AuthService');
const MovieService = require('./MovieService');

class SeedService {
  static async seedIfNeeded() {
    try {
      const userCount = await User.countDocuments({});
      const movieCount = await Movie.countDocuments({});

      let usersByRole = { critics: [], normals: [] };

      if (userCount === 0) {
        console.log('[SEED] Inicializando usuarios de demostracion (Criticos y Usuarios Normales)...');
        const initialUsers = [
          {
            name: 'Alejandro Vargas',
            email: 'critico@cotufera.com',
            password: '123456',
            role: 'critic',
            avatar: 'critic-crimson',
            specialty: 'Cine de Autor & Sci-Fi · Revista Fotograma',
            bio: 'Crítico cinematográfico con 12 años analizando dirección, fotografía y guion en festivales internacionales.',
            favoriteGenres: ['Ciencia ficción', 'Drama', 'Misterio']
          },
          {
            name: 'Valeria Mendoza',
            email: 'valeria@cotufera.com',
            password: '123456',
            role: 'critic',
            avatar: 'critic-gold',
            specialty: 'Drama Psicológico & Series · Pantalla Negra',
            bio: 'Ensayista audiovisual y crítica especializada en narrativa de misterio, thrillers y series contemporáneas.',
            favoriteGenres: ['Misterio', 'Thriller', 'Drama']
          },
          {
            name: 'Sebastián Ríos',
            email: 'sebastian@cotufera.com',
            password: '123456',
            role: 'critic',
            avatar: 'critic-violet',
            specialty: 'Narrativa Visual & Montaje · Círculo de Críticos',
            bio: 'Analista de cine comercial y de autor. Riguroso con el ritmo narrativo y el desarrollo de personajes.',
            favoriteGenres: ['Acción', 'Crimen', 'Drama']
          },
          {
            name: 'Carlos Méndez',
            email: 'usuario@cotufera.com',
            password: '123456',
            role: 'normal',
            avatar: 'popcorn-gold',
            specialty: 'Cinéfilo & Maratonista',
            bio: 'Si tiene buena acción, giros inesperados y una banda sonora épica, tiene mi 10. Fan de las cotufas grandes.',
            favoriteGenres: ['Acción', 'Ciencia ficción', 'Aventura']
          },
          {
            name: 'Mariana Torres',
            email: 'mariana@cotufera.com',
            password: '123456',
            role: 'normal',
            avatar: 'popcorn-cyan',
            specialty: 'Fan del Misterio y las Series',
            bio: 'Me encantan las historias que te hacen teorizar hasta el último minuto con amigos.',
            favoriteGenres: ['Misterio', 'Comedia', 'Drama']
          },
          {
            name: 'Diego Salazar',
            email: 'diego@cotufera.com',
            password: '123456',
            role: 'normal',
            avatar: 'popcorn-emerald',
            specialty: 'Espectador Entusiasta',
            bio: 'Voy al cine cada semana buscando entretenimiento puro, grandes actuaciones y efectos increíbles.',
            favoriteGenres: ['Acción', 'Animación', 'Comedia']
          }
        ];

        for (const u of initialUsers) {
          const created = await AuthService.register(u);
          if (u.role === 'critic') usersByRole.critics.push(created.user);
          else usersByRole.normals.push(created.user);
        }
      } else {
        const allUsers = await User.find({});
        usersByRole.critics = allUsers.filter(u => u.role === 'critic');
        usersByRole.normals = allUsers.filter(u => u.role === 'normal');
      }

      if (movieCount === 0) {
        console.log('[SEED] Sincronizando catalogo inicial de peliculas y series reales desde TMDB...');
        const initialCatalog = [
          { tmdbId: 693134, type: 'movie' }, // Dune: Parte Dos
          { tmdbId: 872585, type: 'movie' }, // Oppenheimer
          { tmdbId: 414906, type: 'movie' }, // The Batman (Misterio / Accion / Crimen)
          { tmdbId: 157336, type: 'movie' }, // Interstellar
          { tmdbId: 546554, type: 'movie' }, // Knives Out (Misterio / Comedia)
          { tmdbId: 533535, type: 'movie' }, // Deadpool & Wolverine
          { tmdbId: 569094, type: 'movie' }, // Spider-Man: Across the Spider-Verse
          { tmdbId: 496243, type: 'movie' }, // Parasite
          { tmdbId: 155, type: 'movie' },    // The Dark Knight
          { tmdbId: 70523, type: 'tv' },     // Dark (Serie - Misterio / Sci-Fi / Drama)
          { tmdbId: 95396, type: 'tv' },     // Severance (Serie - Misterio / Drama)
          { tmdbId: 1396, type: 'tv' },      // Breaking Bad (Serie - Drama / Crimen)
          { tmdbId: 94605, type: 'tv' },     // Arcane (Serie - Animacion / Accion)
          { tmdbId: 100088, type: 'tv' }     // The Last of Us (Serie - Drama / Accion)
        ];

        for (const item of initialCatalog) {
          try {
            await MovieService.getMovie(item.tmdbId, item.type);
          } catch (err) {
            console.warn(`No se pudo sincronizar TMDB ID ${item.tmdbId}:`, err.message);
          }
        }

        // Sembrar reseñas contrastantes entre Criticos y Usuarios Normales
        const c1 = usersByRole.critics[0]?._id;
        const c2 = usersByRole.critics[1]?._id;
        const c3 = usersByRole.critics[2]?._id;
        const n1 = usersByRole.normals[0]?._id;
        const n2 = usersByRole.normals[1]?._id;
        const n3 = usersByRole.normals[2]?._id;

        const seedReviews = [
          // Dune: Parte Dos (693134) -> Criticos: 9.5, Usuarios: 9.5
          { tmdbId: 693134, userId: c1, score: 10, headline: 'Un triunfo monumental del cine de ciencia ficción moderno', text: 'Denis Villeneuve construye una ópera espacial de escala colosal sin perder la intimidad trágica de Paul Atreides. La fotografía de Greig Fraser y el diseño sonoro son cátedra pura.' },
          { tmdbId: 693134, userId: c2, score: 9, headline: 'Política, misticismo y espectáculo en perfecto equilibrio', text: 'Una secuela que supera a su predecesora al transformar la aventura mesiánica en una advertencia sombría sobre el fanatismo.' },
          { tmdbId: 693134, userId: n1, score: 10, headline: '¡La escena del gusano de arena en el cine fue de otro planeta!', text: 'Tres horas que se pasan volando. Las batallas en Arrakis y la música de Hans Zimmer te hacen vibrar el asiento.' },
          { tmdbId: 693134, userId: n2, score: 9, headline: 'Épica de principio a fin', text: 'Zendaya y Timothée tienen una química brutal y Austin Butler como Feyd-Rautha se roba cada escena.' },

          // Oppenheimer (872585) -> Criticos: 10, Usuarios: 8.0 (Diferencia notable a favor de criticos)
          { tmdbId: 872585, userId: c1, score: 10, headline: 'Nolan firma su obra más madura y formalmente implacable', text: 'Un estudio de personaje estructurado como un thriller judicial. Cillian Murphy entrega una interpretación histórica llena de matices morales.' },
          { tmdbId: 872585, userId: c3, score: 10, headline: 'Montaje prodigioso y tensión dramática incesante', text: 'Pocas veces tres horas de diálogos científicos y políticos han resultado tan hipnóticas y aterradoras.' },
          { tmdbId: 872585, userId: n1, score: 8, headline: 'Muy buena actuación, aunque la última hora es densa', text: 'La prueba Trinity es impresionante, pero la parte de las audiencias políticas se siente un poco larga si buscas más ritmo.' },
          { tmdbId: 872585, userId: n3, score: 8, headline: 'Excelente película histórica', text: 'Robert Downey Jr. y Cillian Murphy están increíbles, aunque requiere mucha concentración para seguir todos los nombres.' },

          // The Batman (414906) -> Criticos: 8.5, Usuarios: 9.5
          { tmdbId: 414906, userId: c2, score: 9, headline: 'Un noir detectivesco empapado en lluvia y sombras', text: 'Matt Reeves devuelve a Batman a sus raíces de misterio neo-noir al estilo Seven y Zodiac. Atmósfera absorbente.' },
          { tmdbId: 414906, userId: c3, score: 8, headline: 'Estéticamente sublime aunque extendida en su tercer acto', text: 'El diseño visual de Gótica es insuperable, si bien los últimos treinta minutos diluyen levemente la tensión detectivesca.' },
          { tmdbId: 414906, userId: n2, score: 10, headline: '¡El mejor Batman detectivesco que he visto!', text: 'Me encantó que sea una historia de misterio real siguiendo pistas de Acertijo. El Batimóvil rugiendo en la persecución es brutal.' },
          { tmdbId: 414906, userId: n1, score: 9, headline: 'Oscura, intensa y con una banda sonora inolvidable', text: 'Robert Pattinson calló bocas. Se siente como un cómic gráfico cobrando vida.' },

          // Deadpool & Wolverine (533535) -> Criticos: 6.5, Usuarios: 9.5 (Gran contraste Audiencia vs Criticos!)
          { tmdbId: 533535, userId: c1, score: 6, headline: 'Un festín de nostalgia que sacrifica cohesión narrativa', text: 'Funciona como espectáculo autorreferencial, pero su guion depende en exceso de los cameos y guiños meta en lugar de construir un conflicto sólido.' },
          { tmdbId: 533535, userId: c3, score: 7, headline: 'Carisma innegable de sus protagonistas pese a una puesta en escena plana', text: 'Hugh Jackman aporta gravedad emocional a un conjunto visualmente irregular pero innegablemente entretenido.' },
          { tmdbId: 533535, userId: n1, score: 10, headline: '¡Pura diversión y adrenalina en la sala de cine!', text: 'No me reía tanto en el cine desde hace años. Ver a Wolverine con el traje amarillo clásico junto a Deadpool fue un sueño cumplido.' },
          { tmdbId: 533535, userId: n3, score: 9, headline: 'Entretenimiento puro para fans', text: 'Acción sin freno, humor irreverente y sorpresas increíbles. Ideal para disfrutar con cotufas.' },

          // Knives Out / Puñales por la espalda (546554) -> Misterio
          { tmdbId: 546554, userId: c2, score: 9, headline: 'Un mecanismo de relojería que revitaliza el whodunit clásico', text: 'Rian Johnson subvierte las reglas de Agatha Christie con ironía social, un reparto coral delicioso y un guion milimétrico.' },
          { tmdbId: 546554, userId: n2, score: 9, headline: 'Un misterio súper entretenido y lleno de giros', text: 'Ana de Armas y Daniel Craig como Benoit Blanc están geniales. Te mantiene adivinando quién fue hasta el final.' },

          // Dark (70523) -> Serie de Misterio / Sci-Fi
          { tmdbId: 70523, userId: c1, score: 10, headline: 'La arquitectura temporal más rigurosa de la televisión contemporánea', text: 'Un rompecabezas determinista donde cada pieza encaja con precisión filosófica y emocional a lo largo de tres temporadas.' },
          { tmdbId: 70523, userId: n2, score: 9, headline: 'Te vuela la cabeza en cada episodio', text: 'Necesitas tener un árbol genealógico a mano, pero es de las mejores series de misterio y viajes en el tiempo que existen.' },

          // Severance (95396) -> Serie de Misterio / Drama
          { tmdbId: 95396, userId: c2, score: 10, headline: 'Sátira corporativa y thriller psicológico de primer orden', text: 'Su diseño de producción minimalista y su final de temporada construyen uno de los mayores ejercicios de suspenso de la década.' },
          { tmdbId: 95396, userId: n1, score: 9, headline: 'Misterio adictivo desde el minuto uno', text: 'La premisa de separar tu memoria laboral de tu vida personal es inquietante y el final te deja al borde del asiento.' },

          // Interstellar (157336)
          { tmdbId: 157336, userId: c3, score: 8, headline: 'Ambición cósmica y emoción desbordante', text: 'Aunque por momentos subraya sus tesis emocionales, su representación del cosmos y del paso del tiempo alcanza cimas inolvidables.' },
          { tmdbId: 157336, userId: n1, score: 10, headline: 'Mi película favorita de todos los tiempos', text: 'La escena de las olas en el planeta de Miller y los años de mensajes acumulados me siguen haciendo llorar siempre.' },

          // Breaking Bad (1396)
          { tmdbId: 1396, userId: c1, score: 10, headline: 'La tragedia griega definitiva de la era dorada televisiva', text: 'La transformación de Walter White está escrita, dirigida y actuada con una precisión que redefinió el medio.' },
          { tmdbId: 1396, userId: n3, score: 10, headline: 'Obra maestra absoluta de principio a fin', text: 'Ningún episodio sobra. Bryan Cranston y Aaron Paul tienen la mejor dinámica de cualquier serie.' },

          // Spider-Man: Across the Spider-Verse (569094)
          { tmdbId: 569094, userId: c3, score: 9, headline: 'Vanguardia artística en la animación mainstream', text: 'Cada universo despliega su propio lenguaje pictórico y expresionista, llevando el medio animado a nuevos horizontes.' },
          { tmdbId: 569094, userId: n3, score: 10, headline: 'Cada cuadro parece una obra de arte', text: 'Increíble historia, música espectacular y una animación que te deja con la boca abierta.' }
        ];

        for (const rev of seedReviews) {
          if (!rev.userId) continue;
          const movieDoc = await Movie.findOne({ tmdbId: rev.tmdbId });
          if (movieDoc) {
            const c = new Comment({
              userId: String(rev.userId),
              movieId: String(movieDoc._id),
              tmdbId: rev.tmdbId,
              headline: rev.headline,
              text: rev.text,
              score: rev.score,
              containsSpoilers: false
            });
            await c.save();
          }
        }
        console.log('[OK] Catalogo y reseñas iniciales sincronizados con exito');
      }
    } catch (error) {
      console.error('Advertencia durante seed inicial:', error.message);
    }
  }
}

module.exports = SeedService;

