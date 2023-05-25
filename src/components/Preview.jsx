import React, { Component } from 'react';
import { PDFViewer, Document, Page, Text, Image, View } from '@react-pdf/renderer';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.headData = this.props.data[0];
    this.segmentData = this.props.data[1];
    this.paragraphData = this.props.data[2];
    this.topColor = this.props.color[0];
    this.topTextColor = this.props.color[1];
    this.bottomColor = this.props.color[2];
    this.bottomTextColor = this.props.color[3];
    this.placeholderImage = 'https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg'

    this.styles = {
      page: {
        flexDirection: 'column',
        backgroundColor: this.bottomColor,
        fontFamily: 'Roboto',
      },
      section: {
        padding: 20,
        flexGrow: 1,
        color: this.topTextColor,
      },
      seperator: {
        borderBottom: '1px solid black',
      },
      image: {
        width: 125,
        height: 125,
        objectFit: 'cover',
        border: '1px solid #000000',
        borderRadius: 5,
      }
    };
  }
  
  personalInfo() {
    const { headData } = this;
    const detailArray = ['address', 'email', 'phone', 'linkedin', 'github'];

    return (
        <>
        {detailArray.map((key) => (
          headData[key] && (
            <Text key={key} style={{ fontWeight: 'light' }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}: {headData[key]}
            </Text>
          )
        ))}
      </>
    )
  }

  renderImage() {
    const { headData } = this;
    const imageUrl = headData.selectedImage || this.placeholderImage;
    return (
        <Image style={this.styles.image} src={imageUrl} alt='display'></Image>
    )
  }

  renderDivs() {
    const { segmentData } = this;
    const renderKeys = (data, title) => {
      if (data === undefined) {return}

      const keys = Object.keys(data);
      return (
        <div>
          <Text style={this.styles.seperator}>{title}</Text>
            {keys.map((key) => (
              <View key={key} style={{ padding: 15, paddingTop: 10 }}>
                <View style={{ display:'flex', flexDirection: 'row', justifyContent:'space-between' }}>
                    <Text style={{ fontWeight: 'bold' }}>{data[key]['position']}</Text>
                    <Text style={{ fontWeight: 'thin' }}>{data[key]['startDate']} - {data[key]['endDate']}</Text>
                </View>
                <Text>{data[key]['company']}</Text>
                <Text style={{ padding:'1%' }}>{data[key]['desc']}</Text>
              </View>
            ))}
        </div>
      );
    };
    
    return (
      <div className='flex-row'>
        {renderKeys(segmentData['Education'],'Education')}
        {renderKeys(segmentData['Experience'],'Experience')}
      </div>
    );
  }

  render() {
    const { paragraphData, headData } = this;

    return (
      <PDFViewer className='preview flex-column'>
        <Document>
          <Page size="A4" style={this.styles.page}>
            <View>
              <View style={[this.styles.section, { flexDirection: 'row', justifyContent: 'space-between', gap: '0.2in', backgroundColor: this.topColor }]}>
                {this.renderImage()}
                <View style={{ flex: 1, display:'flex'}}>
                  <Text style={{ fontWeight: 'bold' }}>{headData.name}</Text>
                  {this.personalInfo()}
                </View>
              </View>
              <View style={[this.styles.section, { padding: 30, paddingTop: 15, color: this.bottomTextColor }]}>
                <Text>{headData.bio}</Text>
                <Text>{'\n'}</Text>
                {this.renderDivs()}
                <View>
                  {paragraphData.length > 0 && <Text style={[this.styles.seperator]}>Skills</Text>}
                  {paragraphData.length > 0 &&
                    <View style={{ padding: 15, paddingTop: 10 }}>
                      {paragraphData.map((item, index) => (
                        <Text key={index}>• {item}</Text>
                      ))}
                    </View>
                  }
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
}

export default Preview;