import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react';
import * as Yup from 'yup';


function FormikSample() {

    const addProductValidationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name alanı boş bırakılamaz!"),
        unitPrice: Yup.number()
            .required("Unit Price boş bırakılamaz")
            .min(0, "0 dan düşük olamaz")
            .max(1000, "1000 den yüksek olamaz")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            unitPrice: 0,
            unitsInStock: 0,
            quantityPerUnit: ''
        },
        validationSchema: addProductValidationSchema,
        onSubmit: values => {
            console.log(values);

            axios.post("https://northwind.vercel.app/api/products", values).then(response => {
                console.log(response);
            }
            )
        }
    })

    return (<>
        <form onSubmit={formik.handleSubmit}>
            <>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
                    <p style={{color:'red'}}>{formik.errors?.name}</p>
                </div>
                <div>
                    <label htmlFor="unitPrice">Unit Price</label>
                    <input id="unitPrice" name="unitPrice" type="text" onChange={formik.handleChange} value={formik.values.unitPrice} />
                    <p style={{color:'red'}}>{formik.errors?.unitPrice}</p>
                </div>
                <div>
                    <label htmlFor="unitsInStock">Units In Stock</label>
                    <input id="unitsInStock" name="unitsInStock" type="text" onChange={formik.handleChange} value={formik.values.unitsInStock} />
                </div>
                <div>
                    <label htmlFor="quantityPerUnit">Quantity Per Unit</label>
                    <input id="quantityPerUnit" name="quantityPerUnit" type="text" onChange={formik.handleChange} value={formik.values.quantityPerUnit} />
                </div>
                <div>
                    {/* <button type="submit">Submit</button> */}
                    <input type="submit" value="Submit" />
                </div>
            </>

        </form>



    </>)
}

export default FormikSample