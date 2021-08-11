import React, { Fragment } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import {buttonText, labelText} from '../../../constants';

import './BagComponent.css';

export default function BagComponent(props) {
  const { classes, cartItems, remoteItemHandler } = props;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.removeBorder);
  const itemText = clsx(classes.bagItemRow, classes.bagItemText);
  let total = 0;
  const calculateTotal = (price) => {
      total+=price
    };
  return (
    
        <Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Card className={classes.card, fixedHeightPaper}> 
                            <CardContent className={classes.cardContent}>
                                {
                                    (cartItems.length > 0) &&
                                    <Fragment>
                                        {
                                            cartItems.map( (item, index) => (
                                                <Fragment key={index} >
                                                    <Grid container spacing={0}>
                                                        <Grid item xs={1}>
                                                            <Typography component="span">
                                                                <IconButton aria-label="delete" className={classes.margin} size="small"
                                                                  onClick={()=> {
                                                                    remoteItemHandler(item)
                                                                }}>
                                                                    <ClearIcon fontSize="small" />
                                                                </IconButton>
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={9}>
                                                            <Typography display="inline" gutterBottom variant="h6" component="h4">
                                                                    {`${item.quantity} x ${item.name}`}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <Typography display="inline" gutterBottom variant="h6" component="h4">
                                                                    ${item.price} {calculateTotal(item.price)}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography >
                                                                {`${item.size} | ${item.toppings.join()}`}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Fragment>
                                            ) )
                                        }
                                    </Fragment>
                                    
                                }
                                {
                                    (cartItems.length == 0) && 
                                    <Typography className={classes.bagItemRow} display="inline" gutterBottom variant="h6" component="h4">
                                        {labelText.emptyCart}
                                    </Typography>
                                    
                                }
                                <Divider variant="middle" />
                                {
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <Typography className={classes.bagItemRow} display="inline" variant="h6" component="h4">
                                                        {labelText.totalLabel} 
                                            </Typography>
                                            <Typography display="inline" variant="h6" component="h4">
                                                        {
                                                            total
                                                        }
                                                </Typography>
                                        </Grid>
                                    </Grid>
                                }
                            </CardContent>

                            <CardActions>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item className={classes.cartGridItem}>
                                        <Button disabled={cartItems.length===0} className={classes.cartButton} variant="contained" color="primary">
                                            {buttonText.checkout}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
  );
}
