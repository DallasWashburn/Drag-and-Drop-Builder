import React from "react"
import jsPDF from 'jspdf'
import Axios from "axios";
import Tooltip from "../Tooltip/Tooltip"

class PDFGenerate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    generatePDF = () => {
        var data1 = [];
        data1.push(this.props.pageTitles[0])
        var dataFromContainer1 = this.props.dataFromContainer1
        dataFromContainer1.map((element) => {
            data1.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data1.push(`${property}: ${dataInfo[property]}`)
            }
            return data1
        })
        var data2 = [];
        if (this.props.pageTitles.length > 1) {

            data2.push(this.props.pageTitles[1])
        }
        var dataFromContainer2 = this.props.dataFromContainer2
        dataFromContainer2.map((element) => {
            data2.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data2.push(`${property}: ${dataInfo[property]}`)
            }
            return data2
        })
        var data3 = [];
        if (this.props.pageTitles.length > 2) {

            data3.push(this.props.pageTitles[2])
        }
        var dataFromContainer3 = this.props.dataFromContainer3
        dataFromContainer3.map((element) => {
            data3.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data3.push(`${property}: ${dataInfo[property]}`)
            }
            return data3
        })
        var data4 = [];
        if (this.props.pageTitles.length > 3) {

            data4.push(this.props.pageTitles[3])
        }
        var dataFromContainer4 = this.props.dataFromContainer4
        dataFromContainer4.map((element) => {
            data4.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data4.push(`${property}: ${dataInfo[property]}`)
            }
            return data4
        })
        var data5 = [];
        if (this.props.pageTitles.length > 4) {

            data5.push(this.props.pageTitles[4])
        }
        var dataFromContainer5 = this.props.dataFromContainer5
        dataFromContainer5.map((element) => {
            data5.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data5.push(`${property}: ${dataInfo[property]}`)
            }
            return data5
        })
        var data6 = [];
        if (this.props.pageTitles.length > 5) {

            data6.push(this.props.pageTitles[5])
        }
        var dataFromContainer6 = this.props.dataFromContainer6
        dataFromContainer6.map((element) => {
            data6.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data6.push(`${property}: ${dataInfo[property]}`)
            }
            return data6
        })
        var data7 = [];
        if (this.props.pageTitles.length > 6) {

            data7.push(this.props.pageTitles[6])
        }
        var dataFromContainer7 = this.props.dataFromContainer7
        dataFromContainer7.map((element) => {
            data7.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data7.push(`${property}: ${dataInfo[property]}`)
            }
            return data7
        })
        var data8 = [];
        if (this.props.pageTitles.length > 7) {

            data8.push(this.props.pageTitles[7])
        }
        var dataFromContainer8 = this.props.dataFromContainer8
        dataFromContainer8.map((element) => {
            data8.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data8.push(`${property}: ${dataInfo[property]}`)
            }
            return data8
        })
        var data9 = [];
        if (this.props.pageTitles.length > 8) {

            data9.push(this.props.pageTitles[8])
        }
        var dataFromContainer9 = this.props.dataFromContainer9
        dataFromContainer9.map((element) => {
            data9.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data9.push(`${property}: ${dataInfo[property]}`)
            }
            return data9
        })
        var data10 = [];
        if (this.props.pageTitles.length > 9) {

            data10.push(this.props.pageTitles[9])
        }
        var dataFromContainer10 = this.props.dataFromContainer10
        dataFromContainer10.map((element) => {
            data10.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data10.push(`${property}: ${dataInfo[property]}`)
            }
            return data10
        })

        var doc = new jsPDF('l', 'em', [300, 150]);
        var splitText = doc.splitTextToSize(data1, 175)
        var splitText2 = doc.splitTextToSize(data2, 175)
        var splitText3 = doc.splitTextToSize(data3, 175)
        var splitText4 = doc.splitTextToSize(data4, 175)
        var splitText5 = doc.splitTextToSize(data5, 175)
        var splitText6 = doc.splitTextToSize(data6, 175)
        var splitText7 = doc.splitTextToSize(data7, 175)
        var splitText8 = doc.splitTextToSize(data8, 175)
        var splitText9 = doc.splitTextToSize(data9, 175)
        var splitText10 = doc.splitTextToSize(data10, 175)



        doc.text(5, 5, splitText);
        if (data2.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText2);
        }
        if (data3.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText3);
        }
        if (data4.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText4);
        }
        if (data5.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText5);
        }
        if (data6.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText6);
        }
        if (data7.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText7);
        }
        if (data8.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText8);
        }
        if (data9.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText9);
        }
        if (data10.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText10);
        }
        doc.save('project.pdf');
        // var res = btoa(doc.output())
        // console.log(res);

        // Axios.post("http://localhost:3001/pdfUpload", res).then((res) => {
        //     if (res.status === 'ok') console.log("Yeah!");
        // })
    }

    
    passPdf = () => {
        const dataForm = new FormData()
        dataForm.append('file', this.state.selectedFile)

        Axios.post("http://localhost:3001/pdfUpload", dataForm, {
            // receive two    parameter endpoint url ,form data

        })
    }

    render() {
        return (
            <div className="btn-container">
                    <button id="pdfBtn" className="btn" onClick={this.generatePDF} type="primary"><i className="fas fa-file-pdf fa-3x"></i></button>
            </div>
        );

    }
}
export default PDFGenerate;
