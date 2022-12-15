// component
import Translator from '../../components/utils/translator';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


const navConfig = [
  {
    title: <Translator path="nav.uploadCSV"/> ,
    path: '/upload',
    icon: getIcon('eva:shopping-bag-fill'),
    onlyAdmin: false
  },
  {
    title: <Translator path="nav.users"/> ,
    path: '/user',
    icon: getIcon('eva:people-fill'),
    onlyAdmin: true
  },
  {
    title: <Translator path="nav.fileList"/> ,
    path: '/listArchives',
    icon: getIcon('eva:shopping-bag-fill'),
    onlyAdmin: false
  },
];

export default navConfig;
