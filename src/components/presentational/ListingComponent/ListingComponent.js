import React, { Fragment, useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ToppingsComponent from '../ToppingsComponent/ToppingsComponent';
import {buttonText} from '../../../constants';

import './ListingComponent.css';

export default function ListingComponent(props) {
    const { products, classes, addToBasketHandler } = props;
    const [open, setOpen] = React.useState(false);
    const [cutomizationDetails, setCustomizationDetails] = React.useState({});

    const handleOpen = (details) => {
        setOpen(true);
        setCustomizationDetails(details);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
             <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={2}>
                    {products.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image={`${card.image}`}
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name} - {`$${card.price}`}
                            </Typography>
                            <Typography>
                                {card.description}
                            </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item className={classes.cartGridItem}>
                                        <Button className={classes.cartButton} onClick={()=> handleOpen({...card})} variant="contained" color="primary">
                                            {buttonText.choose}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
            { open &&  <ToppingsComponent addToBasketHandler={addToBasketHandler} handleClose={handleClose} open={open} cutomizationDetails={cutomizationDetails}/>}

        </Fragment>
    );
}
