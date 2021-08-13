import React from 'react';
import HorizontalBarChart from '../../components/charts/HorizontalBarChart';
import LineChart from '../../components/charts/LineChart';
import PieChart from '../../components/charts/PieChart';

import { LabelG } from '../../styles/Gstyles';
import { Container } from './styles';

const Dashboard: React.FC = () => {
    return (
        <Container>
            <LabelG>Dashboard</LabelG>  
            <LineChart />
            <PieChart />
            <HorizontalBarChart />          
        </Container>
    );
}

export default Dashboard;