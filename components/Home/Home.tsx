import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import './Home.scss';

export const Home = () => {
  return (
    <div className="card-root">
      <Card className="card">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Categories
          </Typography>
          <Typography variant="h5" component="h2">
            Consumer Electronics
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
