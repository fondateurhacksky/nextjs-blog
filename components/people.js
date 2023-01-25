import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


  const People = ({ data }) => {
  
    return (
      <div className={css`
      flexGrow: 1;
      `}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className={css`
                maxWidth: 345;
                margin: 'auto';
                marginTop: theme.spacing(5);
            `}>
              <CardMedia
                className={css`
                height: 300;
                `}
                // image={data.profile_picture}
                title={data.nom}
              />
              <CardContent>
                <Typography className={css`
                    fontWeight: 'bold';
                    marginBottom: theme.spacing(2);
                `} gutterBottom variant="h5" component="h2">
                  {data.nom}
                </Typography>
                <Typography className={css`
                        marginBottom: theme.spacing(2);
                `} variant="body2" color="textSecondary" component="p">
                  {data.r_services}
                </Typography>
                <Typography className={css`
                        marginBottom: theme.spacing(2);
                `} variant="body2" color="textSecondary" component="p">
                Age: {data.age}
              </Typography>
              <Typography className={css`
                        marginBottom: theme.spacing(2);
                `} variant="body2" color="textSecondary" component="p">
                Type de travail: {data.r_services}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            {/* {data.photos.map((photo, index) => (
              <Grid key={index} item xs={4}>
                <img src={photo} alt={`photo ${index + 1}`} style={{ width: '100%' }} />
              </Grid>
            ))} */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={css`
                        marginBottom: theme.spacing(2);
                `} variant="body1" component="p">
            {data.detailes}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default People;