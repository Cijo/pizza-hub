import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {buttonText} from '../../../constants';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  divider:{
      marginBottom: theme.spacing(4)
  },
  toppingsButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function ToppingsComponentl(props) {
  const classes = useStyles();
  const {handleClose, open, cutomizationDetails, addToBasketHandler} = props;
  const [selectedToppings, setSelectedToppings] = React.useState([]);
  const [selectedSize, setSelectedSize] = React.useState(null);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleToppingsChange = (event) => {
    setSelectedToppings({...selectedToppings, [event.target.name]: event.target.checked});
  };

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div className={classes.paper}>
                {
                    (cutomizationDetails.toppings && cutomizationDetails.toppings.length) && 
                    <div className={classes.divider}>
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={0}>
                                {
                                    cutomizationDetails.toppings.map((topping, index) => (
                                            <Grid item key={index} xs={6} sm={4} md={4}>
                                            <Typography>
                                                <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        checked={ selectedToppings[topping] ?? false }
                                                        onChange={handleToppingsChange}
                                                        name={topping}
                                                        color="primary"
                                                    />
                                                    }
                                                    label={topping}
                                                />
                                            </Typography>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Container>
                    </div>
                }
                {
                    (cutomizationDetails.sizes && cutomizationDetails.sizes.length) && 
                    <div className={classes.divider}>
                        <Container className={classes.cardGrid} maxWidth="md">
                            <Grid container spacing={0}>
                                {
                                    <Grid item xs={4} sm={4} md={4}>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="size" name="size" value={selectedSize} onChange={handleSizeChange}>
                                                {
                                                    cutomizationDetails.sizes.map((size, index)=>(
                                                        <FormControlLabel key={index} value={size} control={<Radio color="primary"/>} label={size} />
                                                    ))
                                                }
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                }
                            </Grid>
                        </Container>
                    </div>
                }
                 <div className={classes.toppinsButtons}>
                    <Grid container spacing={2} justifyContent="space-between">
                        <Grid item>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={()=> {
                                addToBasketHandler({
                                    bagAction:'add',
                                    data:{
                                        id: cutomizationDetails.id,
                                        name: cutomizationDetails.name, 
                                        price: cutomizationDetails.price,
                                        toppings: [...Object.keys(selectedToppings)],
                                        size: selectedSize,
                                        quantity: 1
                                    }
                                });
                                handleClose()
                            }}>
                            
                            {buttonText.addToBasket}
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary" onClick={()=>{ handleClose() }}>
                            {buttonText.cancel}
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fade>
      </Modal>
  );
}
