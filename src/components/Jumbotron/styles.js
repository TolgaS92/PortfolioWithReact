import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  profile: {
    height: 'auto',
    width: '325px',
    borderRadius: '35px',
    objectFit: 'cover',
    objectPosition: '50% 50%'
  },
  button: {
    marginRight: '5px',
    color: 'white'
  },
  heading: {
    width: 'auto',
    backgroundColor: 'Grey',
    marginBottom: 'auto',
    borderRadius: '15px',
    textDecoration: 'none'
  },
}));