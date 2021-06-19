import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

export default function Achievement({data}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {data.Title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary">
         <Link href={data.Link}>Link</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
