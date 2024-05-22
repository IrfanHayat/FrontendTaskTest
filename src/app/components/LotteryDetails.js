import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const LotteryDetails = ({ lotteryType }) => {
  const [lotteryData, setLotteryData] = useState(null);

  useEffect(() => {
    const fetchLotteryData = async () => {
      try {
        const response = await fetch(`https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=${lotteryType}`);
        const data = await response.json();
        setLotteryData(data);
      } catch (error) {
        console.error('Error fetching lottery data:', error);
      }
    };

    fetchLotteryData();
  }, [lotteryType]);

  return (
    <div>
      {/* Display lottery data */}
      {lotteryData && (
        <div>
          {/* Display lottery details */}
          <Typography variant="h4">{lotteryData.data.lotteryName}</Typography>
          <Typography variant="body1">Round Number: {lotteryData.data.roundNumber}</Typography>
          {/* Add more lottery details as needed */}
        </div>
      )}
    </div>
  );
};

export default LotteryDetails;
