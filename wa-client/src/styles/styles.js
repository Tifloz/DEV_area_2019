import {makeStyles} from "@material-ui/core/styles";

const authStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorAlert: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const dashboardStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  title: {
    fontSize: '6.0em',
    fontWeight: 'bolder',
    fontFamily: 'helvetica',
  },

  appBar: {
    color: 'White',
    fontWeight: '900',
    fontFamily: 'helvetica',
    backgroundColor: 'black',
    fontStyle: 'bold'
  },

  button: {
    color: 'White',
    fontFamily: 'helvetica',
    backgroundColor: 'black',
    fontWeight: '900',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));

const createAreaStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  bodyContent: {
    marginRight: '50.00%',
    marginTop: '20.00%',
    //display: 'flex',
    //flexDirection: 'column',
    //justifyContent: 'flex-start',
    //backgroundColor: 'rgba(0,0,0,0.07)'
    // TODO icone = add_box

  },
  typo: {
    fontSize: '6.0em',
    fontWeight: 'bolder',
    fontFamily: 'helvetica',
  },
  typoSelected: {
    fontSize: '6.0em',
    fontWeight: 'bolder',
    fontFamily: 'helvetica',
    opacity: '0.5',
  },
  title: {
    fontSize: '4.0em',
    fontWeight: 'bolder',
    fontFamily: 'helvetica',
    marginTop: '20px'
  },
  appBar: {
    color: 'White',
    fontWeight: '900',
    fontFamily: 'helvetica',
    backgroundColor: 'black',
    fontStyle: 'bold'
  },
  button: {
    color: 'White',
    fontFamily: 'helvetica',
    backgroundColor: 'black',
    fontWeight: '900',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  grow: {
    flexGrow: 1,
  },
  // Modal
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  // Dialog
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export { authStyles, dashboardStyles, createAreaStyles};