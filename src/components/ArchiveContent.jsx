// src/components/ArchiveContent.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import archivesData from "../archives.json";
import { IoIosArrowBack } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ArchiveContent() {
  const { archiveID } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");

  // Rechercher le fichier spécifique en parcourant chaque dossier
  const archive = archivesData
    .flatMap((folder) => folder.files)
    .find((file) => file.id === archiveID);

  useEffect(() => {
    if (archive) {
      // Construire le chemin du fichier Markdown
      const filePath = `/md/${archive.id}_${archive.name}.md`;

      // Charger le fichier Markdown
      fetch(filePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Fichier Markdown introuvable");
          }
          return response.text();
        })
        .then((text) => setContent(text))
        .catch((error) => console.error(error));
    }
  }, [archive]);

  return (
    <div className="archive">
      {archive ? (
        <>
          <h3>
            archives/{archive.id}_{archive.name}/
          </h3>
          <div className="button back" onClick={() => navigate("/archives")}>
            <span>
              <IoIosArrowBack />
              Retour aux archives
            </span>
          </div>
          <hr />
          <ReactMarkdown
            className="archive-content"
            children={content}
            rehypePlugins={[rehypeRaw]}
          />
        </>
      ) : (
        <p>Fichier introuvable</p>
      )}
    </div>
  );
}
