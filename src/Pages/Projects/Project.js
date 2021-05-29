import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Project({project}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary">
         <Link href={project.CodeLink}>CodeLink</Link>
        </Button>
        <Button size="small" color="primary">
          <Link href={project.LiveProject}> LiveProject</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
