import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import styles from './app.module.css';
import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  CardActions,
} from '@mui/material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={styles.appbarColor}>
        <Toolbar>
          <PhotoCameraIcon className={styles.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={styles.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so
              we can see how does it look like on the screen
            </Typography>
            <div className={styles.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" className={styles.buttonColor}>
                    See my photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" className={styles.buttonBorder}>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={styles.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={styles.card}>
                  <CardMedia
                    className={styles.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={styles.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe your media content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" className={styles.CAbuttonColor}>
                      Share
                    </Button>
                    <Button size="small" className={styles.CAbuttonColor}>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={styles.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Album Application using React and MaterialUI
        </Typography>
      </footer>
    </>
  );
};

export default App;
