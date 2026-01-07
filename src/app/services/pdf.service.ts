import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({ providedIn: 'root' })
export class PdfService {
  generatePDF(imageBase64: string) {
    const doc = new jsPDF();
    doc.addImage(imageBase64, 'PNG', 10, 10, 180, 250);
    doc.save('assignment.pdf');
  }
}
