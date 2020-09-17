const styles = (theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flex: " 1 0 auto",
    backgroundSize : '100%',
    backgroundImage : `URL(${'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`,
  },
  card : {
    borderRadius : (10,10,10,10),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    background  : 'none',
  },
  typo: {
    textAlign: "center",
    fontSize: "20px",
  },
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop : '10px',
    display : 'block',
    marginLeft : 'auto',
    marginRight : 'auto',
    width: "250px",
  },
});
export default styles;
