import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const SkeletonComponent = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" height={100} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Box sx={{ display: "flex", gap: "20px", paddingX: "30px" }}>
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
            </Box>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Box sx={{ display: "flex", gap: "20px", paddingX: "30px" }}>
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
            </Box>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Box sx={{ display: "flex", gap: "20px", paddingX: "30px" }}>
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
                <Skeleton variant="rounded" width={200} height={100} />
            </Box>
            <Skeleton variant="rectangular" height={100} />
            <Box sx={{ display: "flex", gap: "20px", paddingX: "30px" }}>
                <Skeleton variant="rounded" width={200} height={200} />
                <Skeleton variant="rounded" width={200} height={200} />
                <Skeleton variant="rounded" width={200} height={200} />
                <Skeleton variant="rounded" width={200} height={200} />
                <Skeleton variant="rounded" width={200} height={200} />
                <Skeleton variant="rounded" width={200} height={200} />
            </Box>
        </Stack>
    )
}

export default SkeletonComponent