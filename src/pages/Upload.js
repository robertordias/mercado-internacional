import { useCallback, useEffect, useMemo, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { useTranslation } from 'react-i18next';
// material
import { Card, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { uploadFiles } from 'src/services/files';

// ----------------------------------------------------------------------

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


export const UploadCSVPage = () => {

  const { t } = useTranslation();

  const [acceptedFileItems, setAcceptedFileItems] = useState([]);

  const [filesContent, setFilesContent] = useState([]);

  const onDrop = useCallback( async acceptedFiles => {

    if(acceptedFiles?.length < 2) {
      return;
    }
    
    const files = { file : acceptedFiles };

    let statusFile = '';

    let response = await uploadFiles(files);
    if( response?.status != 201 ){
      statusFile = 'falha';
    } else {
      statusFile = 'enviado';
    }
    
    filesContent.push(acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes ({statusFile})
      </li>
    )));

    setAcceptedFileItems(filesContent);
  })
  
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({onDrop, accept: {'.DAT, .dat, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel': []}, maxFiles: 2});


   acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);



  return (
    <Page title={t('title')}>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          {t('uploadCSV.title')}
        </Typography>

        <div className="container">
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <p>{t('uploadCSV.descriptionButton')}</p>
          </div>
        </div>
        { acceptedFileItems.length ? 
        <aside>
          <h4>{t('uploadCSV.fileList')}</h4>
          <ul>{acceptedFileItems}</ul>
        </aside> : 
        <div></div> }
      </Container>
    </Page>
  );
}
