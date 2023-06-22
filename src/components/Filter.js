import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Filter(props) {
    const [filter_by, setFilter_by] = React.useState('');
    const [count, setCount] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [openCount, setOpenCount] = React.useState(false);

    const handleChange = (event) => {
        setFilter_by(event.target.value);
        props.orderBy(event.target.value);
    };

    const handleChangeCount = (event) => {
        setCount(event.target.value);
        props.count(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleCloseCount = () => {
        setOpenCount(false);
    };

    const handleOpenCount = () => {
        setOpenCount(true);
    };


    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Filter By</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={filter_by}
                    label="Filter By"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='rating'>Rating</MenuItem>
                    <MenuItem value={20}>...</MenuItem>
                    <MenuItem value={30}>...</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Count</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={openCount}
                    onClose={handleCloseCount}
                    onOpen={handleOpenCount}
                    value={count}
                    label="Count"
                    onChange={handleChangeCount}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='3'>1-3</MenuItem>
                    <MenuItem value='6'>4-6</MenuItem>
                    <MenuItem value='8'>7-10</MenuItem>
                </Select>
            </FormControl>

            <Button variant="outlined" onClick={props.saveFilter}>Filter</Button>
        </div>
    );
}
