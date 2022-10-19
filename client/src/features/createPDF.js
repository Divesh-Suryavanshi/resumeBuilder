import axios from "axios";
import { saveAs } from "file-saver"

const createPDF = (data) => {
    axios
        .post('/api/create-pdf', data)
        .then(() => {
            axios
                .get('/api/fetch-pdf', { responseType: 'arraybuffer' })
                .then(res => {
                    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                    saveAs(pdfBlob, `${data['Heading'].firstName}'s Resume.pdf`);
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });
};

export default createPDF;