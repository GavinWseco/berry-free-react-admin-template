import { Box, OutlinedInput, InputAdornment, Typography, Grid, IconButton, Modal, Button } from '@mui/material';
import { IconSearch } from '@tabler/icons-react';
import Info from '@mui/icons-material/Info'; // Importing Info icon
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useOrders } from 'Services/Orders';
import { set } from 'immutable';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '53%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OrderSearch = ({ setState, state }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const { getOrders } = useOrders();


    const HandleSearchOrders = async (value) => {
        setState(prevState => ({ ...prevState, loading: true, salesOrderId: value }));
        try {
            var order = await getOrders(value);
            setState(prevState => ({ ...prevState, order: order.data, loading: false }));
        }
        catch (error) {
            setState(prevState => ({ ...prevState, order: {}, loading: false }));
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="35vh">
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid item style={{ marginBottom: "3vh" }}>
                    <OutlinedInput
                        id="input-search-header"
                        value={state.salesOrderId}
                        onChange={(e) => HandleSearchOrders(e.target.value)}
                        placeholder="Search parts orders #"
                        startAdornment={
                            <InputAdornment position="start">
                                <IconSearch stroke={1.5} size="16px" />
                            </InputAdornment>
                        }
                        aria-describedby="search-helper-text"
                        inputProps={{ 'aria-label': 'weight', sx: { bgcolor: 'transparent', pl: 0.5 } }}
                        sx={{ width: { md: 300, lg: 600 }, ml: 2, px: 2 }}
                    />
                </Grid>
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography style={{ fontSize: 18 }} variant="subtitle2">Example of parts order number</Typography>
                    <IconButton
                        sx={{
                            marginLeft: '5px',
                            padding: '5px',
                            '& .MuiSvgIcon-root': {
                                fontSize: 18,
                                color: theme.palette.primary.main,
                            }
                        }}
                        aria-label="info"
                        onClick={handleOpen}
                    >
                        <Info />
                    </IconButton>
                </Grid>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src="src\assets\images\salesOrderNumber.png" style={{ height: '80vh', width: '35vw' }} alt="" />
                </Box>
            </Modal>
        </Box>
    );
};

export default OrderSearch;