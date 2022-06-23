import { Box } from '@mui/material';
import * as React from 'react';

export interface HeaderMobleProps {
}

export function HeaderMoble(props: HeaderMobleProps) {
    return (
        <Box display={{ xs: 'block', md: 'none' }} >
            Header Moble
        </Box>
    );
}
