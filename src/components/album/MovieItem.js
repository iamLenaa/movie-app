import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MovieItem(props) {
    return (
        <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="50%"
                    image={props.movie_img_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.movie_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.movie_desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={props.movie_video_url}>
                    Watch
                </Button>
            </CardActions>
        </Card>
    );
}
