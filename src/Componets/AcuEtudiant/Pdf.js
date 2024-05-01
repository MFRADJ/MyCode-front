import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';
function Pdf() {
  // Fonction pour gérer le téléchargement du fichier PDF
  const handleDownload = () => {
    // Créer un objet Blob représentant les données PDF
    const pdfData = new Blob(["Contenu du fichier PDF"], { type: 'application/pdf' });

    // Créer un objet URL à partir des données Blob
    const pdfUrl = URL.createObjectURL(pdfData);

    // Créer un élément <a> pour déclencher le téléchargement
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'nom_du_fichier.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);

    // Cliquer sur le lien pour déclencher le téléchargement
    link.click();

    // Nettoyer l'URL après le téléchargement
    URL.revokeObjectURL(pdfUrl);
  };

  return (
    <div>
      {/* Bouton pour télécharger le PDF */}
      <button onClick={handleDownload}>Télécharger PDF</button>
    </div>
  );
}

export default Pdf;
