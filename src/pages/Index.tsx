import React from 'react';
import { Outlet } from 'react-router-dom';
import MasterLayout from '../components/layout/MasterLayout';

export default function Index() {
    return  <MasterLayout >
        <Outlet/>
    </MasterLayout > ;
};
