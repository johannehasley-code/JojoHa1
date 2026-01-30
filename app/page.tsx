// // 'use client';



// // import FicheEtudiant from "../components/FicheEtudiant";
// // import Newsletter from "../components/Newsletter";
// // import  "./doc.css";
// // const App = () => {
// //   const cours = ['C++','Next.js','React', 'Python'];

// //   return(
// //     <div>
// // <img
// // className='flex justify-center items-center m-auto mt-20'

// // width={400}
// // height={40}
// //  src="https://tse1.mm.bing.net/th/id/OIP.-NZbXdVsZoG8sBc3qw6GEgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"></img>

// // <FicheEtudiant/> 


 
// // <h1 className='flex justify-center items-center m-auto mt-20'>Cours</h1>
// // <main>
// //       {cours.map((course) => (
// //         <ul key={Math.random()}>
// //           <li>{course}</li>
// //         </ul>
// //       ))}
// //     </main>
           

// //  <Newsletter/>

// //     </div>
// //   )
// // };

// // export default App;


// 'use client';

// import FicheEtudiant from "../components/FicheEtudiant";
// import Newsletter from "../components/Newsletter";
// import "./doc.css";

// const App = () => {
//   const cours = ['C++', 'Next.js', 'React', 'Python'];

//   return (
//     <div className="app-container">
//       <img
//         className="logo"
//         width={400}
//         height={40}
//         src="https://tse1.mm.bing.net/th/id/OIP.-NZbXdVsZoG8sBc3qw6GEgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
//         alt="Logo"
//       />

//       <FicheEtudiant />

//       <h1 className="title">Cours</h1>

//       <main className="course-list">
//         {cours.map((course, index) => (
//           <ul key={index}>
//             <li>{course}</li>
//           </ul>
//         ))}
//       </main>

//       <Newsletter />
//     </div>
//   );
// };

// export default App;
'use client';

import FicheEtudiant from "../components/FicheEtudiant";
import Newsletter from "../components/Newsletter";
import "./projet.css";

const App = () => {
  const cours = ['C++', 'Next.js', 'React', 'Python'];

  return (

    <div className="app-container">
      <header className="logo">
        <img
          className="logo-2ie"
          src="https://tse1.mm.bing.net/th/id/OIP.-NZbXdVsZoG8sBc3qw6GEgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Logo"
        />
      </header>



      <section className="block user">
        
        <FicheEtudiant 
        name={"DIESSONGO"}
        prenoms={"Johanne Hasley"}
        genre={"Féminin"}
        filiere={"Bachelor of engineering"} />
      </section>

      <h1 className="title">Cours</h1>

      <main className="cours">
        <ul>
          {cours.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </main>

      <Newsletter />
    </div>
  );
};

export default App;

