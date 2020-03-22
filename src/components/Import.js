import React from 'react'
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container,
    Menu,
    MenuItem,
    IconButton
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";


const Import = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleDelete = index => {
        props.deleteMake(index);
        handleClose()
    }
    return (
        <div>

            <p>Import Component</p>
            <h2 style={{ color: "green" }}>COUNT: {props.makes.length}</h2>
            <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
            <Container maxWidth="lg" className="car-container">
                <div className="flex-container">
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Make/Model</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((make, index) => (
                            <TableRow key={make.id}>

                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <IconButton onClick={handleClick}>
                                        <MoreVert />
                                    </IconButton>
                                    <Menu id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}>
                                        <MenuItem onClick={handleDelete}>delete</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Container>
        </div>
    )
}

export default Import