import React, { useState } from "react";
import ChapterCard from "./ChapterCard";

const chapters = [
  { id: 1, title: "Dificuldades e oportunidades", teacherPdf: "/assets/pdfs/Educador_Capitulo_1_2a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_1_2a.pdf" },
  { id: 2, title: "Uma andorinha só não faz verão", teacherPdf: "/assets/pdfs/Educador_Capitulo_2_2a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_2_2a.pdf" },
  { id: 3, title: "Quem não se comunica, se trumbica!", teacherPdf: "/assets/pdfs/Educador_Capitulo_3_2a.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_3_2a.pdf" },
  
];

const ChapterList = () => {
  const [openPdf, setOpenPdf] = useState({ id: null, type: null });

  const togglePdf = (id, type) => {
    if (openPdf.id === id && openPdf.type === type) {
      setOpenPdf({ id: null, type: null });
    } else {
      setOpenPdf({ id, type });
    }
  };

  const downloadPdf = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6" id="chapter-list">
      <h1 className="text-4xl font-semibold text-center mb-4 bg-gradient-to-br from-[#F47F3A] to-[#F47F3A]  text-transparent bg-clip-text">
        Biblioteca de Capítulos
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto pb-4">
        Explore os capítulos abaixo e visualize / baixe os conteúdos do Caderno do Educador ou do Livro do Estudante.
      </p>

      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          openPdf={openPdf}
          togglePdf={togglePdf}
          downloadPdf={downloadPdf}
        />
      ))}
    </div>
  );
};

export default ChapterList;
