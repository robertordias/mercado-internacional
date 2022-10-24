import { useCallback, useMemo, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { useTranslation } from 'react-i18next';
// material
import { Card, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

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
  
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: {'text/csv': []}, maxFiles:2});


  const acceptedFileItems = acceptedFiles.map(file => (
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
        <aside>
          <h4>{t('uploadCSV.fileList')}</h4>
          <ul>{acceptedFileItems}</ul>
        </aside>

      </Container>
    </Page>
  );
}
