// src/components/Archives.jsx
import React from "react";
import archivesData from "../archives.json";
import "../styles/archives.scss";
import { CiFileOn, CiFolderOn, CiMail, CiSquareMore } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { BiConversation } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";

export default function Archives() {
  const navigate = useNavigate();

  const icons = {
    tchat: <CiSquareMore />,
    report: <CiFileOn />,
    mail: <CiMail />,
  };

  return (
    <div className="archives">
      <h3>Index de /archives</h3>

      <div className="archives-table">
        <div className="table-header">
          <h4>Nom</h4>
          <h4>Date de création</h4>
        </div>
        <hr />

        {archivesData.map((folder) => (
          <div key={folder.id}>
            {/* Dossier principal */}
            <div className="archive-item folder">
              <span className="name">
                <CiFolderOn />
                {folder.name}
              </span>
              <span className="date">{folder.createdAt}</span>
            </div>

            {/* Liste des fichiers sous forme de lignes dans le tableau */}
            {folder.files.map((file) => (
              <div key={file.id} className="archive-item file button">
                <span
                  className="name"
                  onClick={() => navigate(`/archives/${file.id}`)}
                >
                  {icons[file.icon]}
                  {file.id}_{file.name}/
                </span>
                <span className="date">{file.createdAt}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
