import { Grid } from '@mui/material';
import React from 'react';
import ChannelChart from '../../../ChannerlChart/ChannelChart';
import Chart from '../../../Chart/Chart';
import CountryChart from '../../../CountryChart/CountryChart';
import SalesReport from '../../SalesReport/SalesReport';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';

const Home = () => {
    return (
        <Grid spacing={2} container padding={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
        <FeaturedInfo/>
        </Grid>
        <Grid spacing={2} container  padding={3}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
        <ChannelChart/>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
        <CountryChart/>
        </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} marginTop={9} >
        <Chart/>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
        <SalesReport/>
        </Grid>
        </Grid>
        
    );
};

export default Home;