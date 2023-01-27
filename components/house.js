import { 
    typographyStyles,
    typographyStyles2
  } from './styles'
  import Container from '@mui/material/Container';
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import Typography from '@mui/material/Typography';
  import Grid from '@mui/material/Grid';
  import Avatar from '@mui/material/Avatar';
  import Button from '@mui/material/Button';
  
  
  
  
  
  
    const People = ({ data }) => {
              
      return (
        <Container maxWidth="xl" sx={{ marginTop: '10px' }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Card sx={{ display: 'flex', padding: '20px' }}>
                <Avatar 
                  alt="Remy Sharp"
                  src={`/images/clients/${data.images}`}
                  sx={{ width: 220, height: 220,  }}
                />
                <CardContent sx={{ marginLeft: '20px',marginTop: '20px', width: '800px', width: '800px' }}>
                    <Typography className={typographyStyles} gutterBottom variant="h5" component="h2">
                      {`${data.nom} ${data.prenom}`}
                    </Typography>
                    <Typography className={typographyStyles2} variant="body2" color="textSecondary" component="p">
                      {data.r_services}
                    </Typography>
                    <Typography className={typographyStyles2} variant="body2" color="textSecondary" component="p">
                    Age: {data.age}
                    </Typography>
                    <Typography className={typographyStyles2} variant="body2" color="textSecondary" component="p">
                    Type de travail: {data.r_services}
                    </Typography>
                </CardContent>
  
                <CardContent sx={{  position: 'relative', marginLeft: '20px', marginTop: '20px', borderLeft: '2px solid black', paddingLeft: '80px'}}>
                <Typography variant="h5" component="h2">
                    A propos de Moi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {data.detailes}
                </Typography>
                <Button sx={{position: 'absolute',bottom: '10px',right: '10px',
      }}variant="contained">Mettre en Contact</Button>
              </CardContent>
  
              </Card>
          </Grid>
  
          </Grid>
      </Container>
    );
  };
  
  export default People;