import { Router } from 'express';
import { Sequelize, Op } from '../models/index';


// select Brand
const allCondition = async (req, res) => {
    const condition = await req.context.models.condition.findAll(
        // {
        //     include: [{
        //         model: req.context.models.add
        //     }]
        // }
    )
    return res.send(condition);
}

const findConditionMethod = async (req, res) => {
    const condition = await req.context.models.condition.findByPk(
        req.params.condId,
    );
    return res.send(condition);
};

// const addBrandMethod = async (req, res) => {
//     const { brand_name } = req.body;

//     const brand = await req.context.models.brand.create({

//         brand_name: brand_name
//     });
//     return res.send(brand);

// };

export default {
    allCondition,
    findConditionMethod,
    // addBrandMethod
}