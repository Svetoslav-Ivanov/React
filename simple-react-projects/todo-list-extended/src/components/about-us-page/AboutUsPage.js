import React, { useEffect } from 'react';
import { useParams, redirect } from 'react-router-dom';
import styles from './AboutUsPage.module.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function AboutUsPage(props) {
    const aboutUri = "/about/pid=";
    
    const params = useParams();
    const navigate = useNavigate();
    
    let pid = params.pid.split("=")[1];

    const srcs = [
        "https://ctfassets.imgix.net/vh7r69kgcki3/4loHLz4ATsoKXI92LVLzml/a8adcbd1de700f7545875713176474ce/Web_150DPI-2023_04_15_ATL_Lifestyle_Hot_Desk_01855.jpg?auto=format%20compress&fit=crop&q=50&w=500px",
        "https://ctfassets.imgix.net/vh7r69kgcki3/1jUvhrkq5ZQQxqs0Ce7X8A/14727e9df844c460fe2446ef40b48ee0/Web_150DPI-2023_04_15_ATL_Lifestyle_Staged_Meeting_Room_05659_1.jpg?auto=format%20compress&fit=crop&q=50&w=1096&h=617",
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/14D67/production/_126315358_gettyimages-598261008.jpg",
        "https://images.inc.com/uploaded_files/image/1920x1080/getty_1084171152_400165.jpg",
        "https://www.jll.fi/images/people/people-photography/privacy-in-the-open-plan-office.jpg"
    ]

    const validatePid = () => {
        if(pid > srcs.length || pid < 1){
            navigate('not-found');
        }
    }

    useEffect (()=>{
        validatePid();
    })

    const updateUri = () => {
        navigate(aboutUri + pid);
    }

    const handlePrevClick = () => {
        if (pid <= 1) {
            pid = 5;
        } else {
            pid--;
        }
        updateUri();
    }

    const handleNextClick = () => {
        if (pid >= 5) {
            pid = 1;
        } else {
            pid++;
        }
        updateUri();
    }

    return (
        <>
            <img src={srcs[pid - 1]} alt="About Us" />
            <div className='navigator'>
                <Button onClick={handlePrevClick} variant="outlined">previous</Button>
                <Button onClick={handleNextClick} variant="outlined">next</Button>
            </div>
        </>
    );
}