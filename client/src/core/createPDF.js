// import axios from "axios";
// import {saveAs} from "file-saver"

// const createPDF = () => {
//     axios
//         .post ('/create-pdf', data)
//         .then (() => {
//             axios
//                 .get ('fetch-pdf', {responseType: 'arraybuffer'})
//                 .then (res => {
//                     const pdfBlob = new Blob ([res.data], {type: 'application/pdf'});
//                     saveAs (pdfBlob, `${data['0'].firstname}'s Resume.pdf`);
//                 })
//                 .catch (err => {
//                     console.log (err);
//                 });
//         })
//     .catch (err => {
//     console.log (err);
// });
// };

// export default createPDF;