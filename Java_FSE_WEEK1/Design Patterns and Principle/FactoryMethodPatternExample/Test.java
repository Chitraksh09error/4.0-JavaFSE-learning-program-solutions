public class Test {
    public static void main(String[] args) {

        // we are not directly creating object of Word/Excel/Pdf Document and we are encapsulating actual function and using Factory methods

        DocumentFactory wordfact = new WordDocumentFactory();
        Document word = wordfact.createDocument();
        word.name();
        System.out.println();
        
        DocumentFactory pdffact = new PdfDocumentFactory();
        Document pdf = pdffact.createDocument();
        pdf.name();
        System.out.println();
        
        
        DocumentFactory excelfact = new ExcelDocumentFactory();
        Document excel = excelfact.createDocument();
        excel.name();
    }
}
