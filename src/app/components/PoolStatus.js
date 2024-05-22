"use client";
import { Typography } from '@mui/material';

const PoolStatus = ({ poolAmount }) => {
  return (
    <div>
      {/* Display pool status */}
      <Typography variant="h6">Pool Status</Typography>
      {poolAmount?.map(pool => (
        <div key={pool.poolId}>
          {/* Display pool details */}
          <Typography variant="body1">Pool Amount: {pool.poolAmount}</Typography>
          {/* Display other pool details as needed */}
        </div>
      ))}
    </div>
  );
};

export default PoolStatus;
