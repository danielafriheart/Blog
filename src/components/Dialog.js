import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className='p-2 border' onClick={handleClickOpen}>
                Create Post
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title">
                    {"Update Library 🎈🎊"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description"
                        sx={{
                            width: ''
                        }}
                    >
                        <form action="" className='lg:w-[35vw] mt-10'>
                            <div className='flex flex-col gap-3 mb-5'>
                                <div className='flex flex-col gap-5'>
                                    <label htmlFor="" >
                                        <input type="file" className=''/>
                                    </label>
                                    <div>
                                        <em htmlFor="" className='text-sm text-[12px] '>Library header</em>
                                        <input type="text" placeholder='Header' className='p-2 w-full border border-slate-800  text-black focus:outline-[#999] placeholder-[#999]' />
                                    </div>
                                    <div>
                                        <em htmlFor="" className='text-sm text-[12px]'>Library Caption</em>
                                        <textarea type="text" placeholder='Caption' className='p-2 w-full border border-slate-800 text-black  focus:outline-[#999] h-[6em] placeholder-[#999]' />
                                    </div>
                                    <button className='bg-slate-800 text-white p-3'>Update Library</button>
                                </div>
                            </div>
                            <hr />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}