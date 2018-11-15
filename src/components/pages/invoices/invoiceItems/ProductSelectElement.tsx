import React from 'react';
import {WrappedFieldProps} from 'redux-form';

import {createStyles, StyleRules, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {ProductsState} from "../../../../redux/products/states";

interface OwnProps {
    products: ProductsState,
    id: string,
    label: string,
}

type Props = OwnProps & WrappedFieldProps & WithStyles<typeof styles>;

const ProductSelectElement: React.SFC<Props> = (props: Props) => {
    const {
        classes, input, id, label, products: {data}, meta: {touched, error}
    } = props;
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        input.onChange(+event.target.value)
    };
    const menuItems = data.map(product => (
        <MenuItem
            value={product.id}
            key={product.id}
        >
            id: {product.id}, {product.name} - price {product.price}
        </MenuItem>
    ));

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select
                {...input}
                value={input.value}
                onChange={handleChange}
                inputProps={{
                    name: input.name,
                    id,
                }}
            >
                <MenuItem value=''>None</MenuItem>
                {menuItems}
            </Select>
            {touched && (error && <span>{error}</span>)}
        </FormControl>
    );

};

const styles = (theme: Theme): StyleRules => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(ProductSelectElement);
