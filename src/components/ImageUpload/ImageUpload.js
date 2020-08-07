import React, { Component } from 'react';
import  {connect} from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';


class ImageUpload extends Component {

    handleFinishedUpload = info => {
        console.log('File uploaded with filename', info.filename);
        console.log('Access it on s3 at', info.fileUrl);
        this.props.addNewImage(info.fileUrl);
      }


    render(){
        const uploadOptions = {
            server: 'https://glacial-retreat-32572.herokuapp.com',
            // signingUrlQueryParams: {uploadType: 'avatar'},
        }
        const s3Url = 'https://yoga4now.s3.amazonaws.com'      
        return(
            <>
                <DropzoneS3Uploader
                    onFinish={this.handleFinishedUpload}
                    s3Url={s3Url}
                    maxSize={1024 * 1024 * 5}
                    upload={uploadOptions}
                />
            </>
        )
    }
}

export default connect()(ImageUpload);