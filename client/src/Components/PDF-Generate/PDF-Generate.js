import React from "react"
import jsPDF from 'jspdf'
import Axios from "axios";


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
        var data11 = [];
        if (this.props.pageTitles.length > 10) {

            data11.push(this.props.pageTitles[10])
        }
        var dataFromContainer11 = this.props.dataFromContainer11
        dataFromContainer11.map((element) => {
            data11.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data11.push(`${property}: ${dataInfo[property]}`)
            }
            return data11
        })
        var data12 = [];
        if (this.props.pageTitles.length > 11) {

            data12.push(this.props.pageTitles[11])
        }
        var dataFromContainer12 = this.props.dataFromContainer12
        dataFromContainer12.map((element) => {
            data12.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data12.push(`${property}: ${dataInfo[property]}`)
            }
            return data12
        })
        var data13 = [];
        if (this.props.pageTitles.length > 12) {

            data13.push(this.props.pageTitles[12])
        }
        var dataFromContainer13 = this.props.dataFromContainer13
        dataFromContainer13.map((element) => {
            data13.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data13.push(`${property}: ${dataInfo[property]}`)
            }
            return data13
        })
        var data14 = [];
        if (this.props.pageTitles.length > 13) {

            data14.push(this.props.pageTitles[13])
        }
        var dataFromContainer14 = this.props.dataFromContainer14
        dataFromContainer14.map((element) => {
            data14.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data14.push(`${property}: ${dataInfo[property]}`)
            }
            return data14
        })
        var data15 = [];
        if (this.props.pageTitles.length > 14) {

            data15.push(this.props.pageTitles[14])
        }
        var dataFromContainer15 = this.props.dataFromContainer15
        dataFromContainer15.map((element) => {
            data15.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data15.push(`${property}: ${dataInfo[property]}`)
            }
            return data15
        })
        var data16 = [];
        if (this.props.pageTitles.length > 15) {

            data16.push(this.props.pageTitles[15])
        }
        var dataFromContainer16 = this.props.dataFromContainer16
        dataFromContainer16.map((element) => {
            data16.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data16.push(`${property}: ${dataInfo[property]}`)
            }
            return data16
        })
        var data17 = [];
        if (this.props.pageTitles.length > 16) {

            data17.push(this.props.pageTitles[16])
        }
        var dataFromContainer17 = this.props.dataFromContainer17
        dataFromContainer17.map((element) => {
            data17.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data17.push(`${property}: ${dataInfo[property]}`)
            }
            return data17
        })
        var data18 = [];
        if (this.props.pageTitles.length > 17) {

            data18.push(this.props.pageTitles[17])
        }
        var dataFromContainer18 = this.props.dataFromContainer18
        dataFromContainer18.map((element) => {
            data18.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data18.push(`${property}: ${dataInfo[property]}`)
            }
            return data18
        })
        var data19 = [];
        if (this.props.pageTitles.length > 18) {

            data19.push(this.props.pageTitles[18])
        }
        var dataFromContainer19 = this.props.dataFromContainer19
        dataFromContainer19.map((element) => {
            data19.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data19.push(`${property}: ${dataInfo[property]}`)
            }
            return data19
        })
        var data20 = [];
        if (this.props.pageTitles.length > 19) {

            data20.push(this.props.pageTitles[19])
        }
        var dataFromContainer20 = this.props.dataFromContainer20
        dataFromContainer20.map((element) => {
            data20.push(element.data)
            var dataInfo = element.info
            for (const property in dataInfo) {
                data20.push(`${property}: ${dataInfo[property]}`)
            }
            return data20
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
        var splitText11 = doc.splitTextToSize(data11, 175)
        var splitText12 = doc.splitTextToSize(data12, 175)
        var splitText13 = doc.splitTextToSize(data13, 175)
        var splitText14 = doc.splitTextToSize(data14, 175)
        var splitText15 = doc.splitTextToSize(data15, 175)
        var splitText16 = doc.splitTextToSize(data16, 175)
        var splitText17 = doc.splitTextToSize(data17, 175)
        var splitText18 = doc.splitTextToSize(data18, 175)
        var splitText19 = doc.splitTextToSize(data19, 175)
        var splitText20 = doc.splitTextToSize(data20, 175)



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
        if (data11.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText11);
        }
        if (data12.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText12);
        }
        if (data13.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText13);
        }
        if (data14.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText14);
        }
        if (data15.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText15);
        }
        if (data16.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText16);
        }
        if (data17.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText17);
        }
        if (data18.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText18);
        }
        if (data19.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText19);
        }
        if (data20.length > 0) {
            doc.addPage();
            doc.text(5, 5, splitText20);
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
