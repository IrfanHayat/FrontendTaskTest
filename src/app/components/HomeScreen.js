'use client'
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import PoolStatus from './PoolStatus';

const HomeScreen = () => {
  const [lotteryData, setLotteryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLotteryInfo = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=COSMIC'),
          fetch('https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=CLASSIC'),
          fetch('https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=ATOMIC')
        ]);

        const jsonData = await Promise.all(responses.map(res => res.json()));

        const lotteryInfo = {
          cosmic: jsonData[0].data,
          classic: jsonData[1].data,
          atomic: jsonData[2].data
        };

        setLotteryData(lotteryInfo);
        setLoading(false);
      } catch (error) {
        setError('Error fetching lottery info');
        setLoading(false);
      }
    };

    fetchLotteryInfo();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{  textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        {lotteryData && Object.keys(lotteryData).map((type) => (
          <Box key={type} >
            <Typography variant="h6">{type}</Typography>
            <Typography>Round Number: {lotteryData[type].roundNumber}</Typography>
            <Typography>Winning Pot: {lotteryData[type].winningPot}</Typography>
            <PoolStatus poolAmount={lotteryData[type].poolAmount} />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
