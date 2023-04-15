import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Product = ({ product }) => {
    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <img src={product?.img} className='h-[200px] w-full' alt="" />
                    <CardContent>
                        <Typography variant="h6">
                            {product?.name}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Product;