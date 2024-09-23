import React, { useState, useEffect } from 'react';
import './styles/index.css'; // Importa el archivo CSS
const Header = ({ onMenuClick }) => (
    <header>
      {/* Sección de íconos en la parte superior */}
      <div className="icon-container">
        <button className="icon-button" onClick={() => onMenuClick('messages')}>📩</button>
        <button className="icon-button" onClick={() => onMenuClick('notifications')}>🔔</button>
        <button className="profile-button" onClick={() => onMenuClick('profile')}>
          <img src="https://i.pravatar.cc/40" alt="Profile" className="profile-image" />
        </button>
      </div>
      <h1>GEEK</h1>
      <nav>
        <button onClick={() => onMenuClick('feed')}>Inicio</button>
        <button onClick={() => onMenuClick('network')}>Mi Red</button>
        <button onClick={() => onMenuClick('jobs')}>Empleos</button>
        <button onClick={() => onMenuClick('projects')}>Proyectos</button>
        <button onClick={() => onMenuClick('techTrends')}>Tendencias Tech</button>
        <button onClick={() => onMenuClick('tools')}>Herramientas</button>
      </nav>
      <div>
        <input type="text" placeholder="Buscar..." />
      </div>
    </header>
  );
  

const Post = ({ post }) => (
    <article className="post">
      <header className="post-header">
        <img src={post.userAvatar} alt={post.userName} className="avatar" />
        <div className="post-info">
          <h3>{post.userName}</h3>
          <p>{post.userTitle}</p>
          <span className="post-date">{post.postDate}</span>
        </div>
      </header>
      <div className="post-content">
        <p>{post.content}</p>
        <img src={post.image} alt="Post content" className="post-image" />
      </div>
      <footer className="post-footer">
        <button className="post-action">👍 {post.likes}</button>
        <button className="post-action">💬 {post.comments.length}</button>
        <button className="post-action">Share</button>
      </footer>
    </article>
);

const Feed = ({ posts }) => (
  <section>
    <h2>Actualizaciones recientes</h2>
    {posts.map(post => <Post key={post.id} post={post} />)}
  </section>
);

const Network = () => (
  <section>
    <h2>Mi Red</h2>
    <div>
      <h3>Conexiones</h3>
      {/* Lista de conexiones */}
    </div>
    <div>
      <h3>Recomendaciones</h3>
      {/* Lista de profesionales recomendados */}
    </div>
    <div>
      <h3>Grupos</h3>
      {/* Lista de grupos relevantes */}
    </div>
  </section>
);

const Jobs = () => (
  <section>
    <h2>Empleos</h2>
    <div>
      <h3>Ofertas recomendadas</h3>
      {/* Lista de ofertas de trabajo */}
    </div>
    <div>
      <h3>Búsqueda avanzada</h3>
      <input type="text" placeholder="Tecnología o puesto" />
      <input type="text" placeholder="Ubicación" />
      <select>
        <option value="">Experiencia</option>
        <option value="junior">Junior</option>
        <option value="mid">Mid-level</option>
        <option value="senior">Senior</option>
      </select>
      <button>Buscar</button>
    </div>
  </section>
);

const Projects = () => (
  <section>
    <h2>Proyectos</h2>
    <div>
      <h3>Mis proyectos</h3>
      {/* Lista de proyectos del usuario */}
    </div>
    <div>
      <h3>Explorar proyectos</h3>
      {/* Lista de proyectos de la comunidad */}
    </div>
    <div>
      <h3>Crear nuevo proyecto</h3>
      {/* Formulario para crear un nuevo proyecto */}
    </div>
  </section>
);

const CodeReview = () => (
  <section>
    <h2>Revisión de Código</h2>
    <div>
      <h3>Solicitar revisión</h3>
      <textarea placeholder="Pega tu código aquí"></textarea>
      <select>
        <option value="">Selecciona el lenguaje</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <button>Enviar para revisión</button>
    </div>
    <div>
      <h3>Revisiones pendientes</h3>
      {/* Lista de códigos pendientes de revisión */}
    </div>
  </section>
);

const TechTrends = () => (
  <section>
    <h2>Tendencias Tech</h2>
    <div>
      <h3>Tecnologías en auge</h3>
      {/* Lista de tecnologías populares */}
    </div>
    <div>
      <h3>Noticias de la industria</h3>
      {/* Lista de noticias relevantes */}
    </div>
    <div>
      <h3>Predicciones del mercado</h3>
      {/* Gráficos y análisis de tendencias */}
    </div>
  </section>
);

const Learning = () => (
  <section>
    <h2>Aprendizaje</h2>
    <div>
      <h3>Cursos recomendados</h3>
      {/* Lista de cursos */}
    </div>
    <div>
      <h3>Tutoriales</h3>
      {/* Lista de tutoriales */}
    </div>
    <div>
      <h3>Recursos gratuitos</h3>
      {/* Lista de recursos de aprendizaje gratuitos */}
    </div>
  </section>
);

const Tools = () => (
  <section>
    <h2>Herramientas</h2>
    <div>
      <h3>IDEs y editores</h3>
      {/* Lista de IDEs y editores populares */}
    </div>
    <div>
      <h3>Herramientas de productividad</h3>
      {/* Lista de herramientas de productividad */}
    </div>
    <div>
      <h3>Frameworks y librerías</h3>
      {/* Lista de frameworks y librerías populares */}
    </div>
  </section>
);

const Events = () => (
  <section>
    <h2>Eventos</h2>
    <div>
      <h3>Próximas conferencias</h3>
      {/* Lista de conferencias */}
    </div>
    <div>
      <h3>Meetups locales</h3>
      {/* Lista de meetups */}
    </div>
    <div>
      <h3>Webinars</h3>
      {/* Lista de webinars */}
    </div>
  </section>
);

const QA = () => (
  <section>
    <h2>Preguntas y Respuestas</h2>
    <div>
      <h3>Hacer una pregunta</h3>
      <textarea placeholder="Escribe tu pregunta aquí"></textarea>
      <button>Publicar pregunta</button>
    </div>
    <div>
      <h3>Preguntas populares</h3>
      {/* Lista de preguntas populares */}
    </div>
    <div>
      <h3>Mis preguntas</h3>
      {/* Lista de preguntas del usuario */}
    </div>
  </section>
);

const Messages = () => (
  <section>
    <h2>Mensajes</h2>
    <div>
      <input type="text" placeholder="Buscar conversaciones" />
      {/* Lista de conversaciones */}
    </div>
    <div>
      {/* Área de chat activo */}
    </div>
  </section>
);

const Notifications = () => (
  <section>
    <h2>Notificaciones</h2>
    <div>
      <h3>Nuevas</h3>
      {/* Lista de notificaciones nuevas */}
    </div>
    <div>
      <h3>Anteriores</h3>
      {/* Lista de notificaciones anteriores */}
    </div>
  </section>
);

const Profile = () => (
  <section>
    <h2>Mi Perfil</h2>
    <div>
      <h3>Información personal</h3>
      {/* Formulario de información personal */}
    </div>
    <div>
      <h3>Experiencia</h3>
      {/* Lista y formulario de experiencia */}
    </div>
    <div>
      <h3>Educación</h3>
      {/* Lista y formulario de educación */}
    </div>
    <div>
      <h3>Habilidades</h3>
      {/* Lista de habilidades con endorsements */}
    </div>
    <div>
      <h3>Proyectos destacados</h3>
      {/* Lista de proyectos destacados */}
    </div>
  </section>
);

const DevConnectProApp = () => {
  const [activeSection, setActiveSection] = useState('feed');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // Simulating API call with fake data
      const fakePosts = [
        {
          id: 1,
          userName: 'Alice Johnson',
          userTitle: 'Full Stack Developer',
          userAvatar: 'https://i.pravatar.cc/150?img=1',
          content: 'Just finished working on this amazing UI design. What do you think?',
          image: './logo512.png',
          likes: 42,
          comments: [{}, {}, {}],
          postDate: '2h ago'
        },
        {
          id: 2,
          userName: 'Bob Smith',
          userTitle: 'DevOps Engineer',
          userAvatar: 'https://i.pravatar.cc/150?img=2',
          content: 'My workspace setup for today. Ready to tackle some infrastructure challenges!',
          image: './logo512.png',
          likes: 28,
          comments: [{}, {}, {}, {}, {}],
          postDate: '4h ago'
        },
        {
          id: 3,
          userName: 'Charlie Brown',
          userTitle: 'Data Scientist',
          userAvatar: 'https://i.pravatar.cc/150?img=3',
          content: 'Visualizing some interesting patterns in our latest dataset. Data is beautiful!',
          image: './logo512.png',
          likes: 56,
          comments: [{}, {}, {}, {}, {}, {}, {}],
          postDate: '1d ago'
        },
      ];
      setPosts(fakePosts);
    };
    fetchPosts();
  }, []);

  const renderContent = () => {
    switch(activeSection) {
      case 'feed':
        return <Feed posts={posts} />;
      case 'network':
        return <Network />;
      case 'jobs':
        return <Jobs />;
      case 'projects':
        return <Projects />;
      case 'codeReview':
        return <CodeReview />;
      case 'techTrends':
        return <TechTrends />;
      case 'learning':
        return <Learning />;
      case 'tools':
        return <Tools />;
      case 'events':
        return <Events />;
      case 'qa':
        return <QA />;
      case 'messages':
        return <Messages />;
      case 'notifications':
        return <Notifications />;
      case 'profile':
        return <Profile />;
      default:
        return <Feed posts={posts} />;
    }
  };

  return (
    <div>
      <Header onMenuClick={setActiveSection} />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default DevConnectProApp;