import { Router } from 'express';
import { Sequelize, Op } from '../models/index';


// select Brand
const allCategory = async (req, res) => {
    const category = await req.context.models.category.findAll(
        // {
        //     include: [{
        //         model: req.context.models.add
        //     }]
        // }
    )
    return res.send(category);
}

const findCategoryMethod = async (req, res) => {
    const category = await req.context.models.category.findByPk(
        req.params.cateId,
    );
    return res.send(category);
};

// const addBrandMethod = async (req, res) => {
//     const { brand_name } = req.body;

//     const brand = await req.context.models.brand.create({

//         brand_name: brand_name
//     });
//     return res.send(brand);

// };

export default {
    allCategory,
    findCategoryMethod,
    // addBrandMethod
}