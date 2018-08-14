import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  card1: {
    height: '60%',
    margin: '25%',
    transform: 'rotate(-15deg)',
    border: '2px #404040',
    boxShadow: '5px 10px #888888'
  },
  card2: {
    height: '60%',
    margin: '25%',
    transform: 'rotate(15deg)',
    border: '2px #404040',
    boxShadow: '5px 10px #888888'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 12
  },
  pos: {
    marginBottom: 12
  },
  media: {
    width: '100%',
    paddingTop: '55%',
    overflow: false // 16:9
  },
  head1: {
    marginTop: 20,
    marginLeft: 40,
    color: '#476587',
    fontStyle: 'oblique',
    fontSize: '2vw'
  },
  head3: {
    marginTop: 10,
    marginLeft: 60,
    color: '#468197',
    fontSize: '1.5vw'
  },
  head6: {
    marginTop: 10,
    marginLeft: 60,
    color: '#468197',
    fontSize: '1.5vw'
  }
}

export default class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <React.Fragment>
        <Grid >
          <Typography variant="headline" component="h1" style={styles.head1}>
            Disaster Tracker
          </Typography>
          <Typography gutterBottom variant="headline" component="h3" style={styles.head3}>
            Know when trouble is headed your way!
          </Typography>
          <Typography gutterBottom variant="headline" component="h6" style={styles.head6}>
            Now, also know for remote locations like family members or vacation homes.
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Card style={styles.card1}>
              <CardMedia
                style={styles.media}
                image="./assets/landing1.jpg"
                title="Tsunami"
              />
              <CardContent color='black'>
                <Typography gutterBottom variant="headline" component="h4" >
                Wish you knew sooner?
                </Typography>
                <Typography component="p">
                Storms happen quickly. Every possible method to notify you
                early gives you one more chance to decide how to prepare.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={styles.card2}>
              <CardMedia
                style={styles.media}
                image="./assets/safedog.jpeg"
                title="SafeDog"
              />
              <CardContent color='black'>
                <Typography gutterBottom variant="headline" component="h4" >
                My family got me to safety
                </Typography>
                <Typography component="p">
                I could sense that there was a storm coming and I am just a puppy.
                I sure am glad my family uses <b>DistasterTracker</b> so they were able to get me to safety.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
