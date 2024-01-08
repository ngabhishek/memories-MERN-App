import React, { useEffect, useState } from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div>
            <Container maxWidth='lg'>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                    <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                    <img className={classes.image} src={memories} alt='memories' height='60'>
                    </img>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}></Posts>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                            </Grid>                            
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;