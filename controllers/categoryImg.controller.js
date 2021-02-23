import { Router } from 'express';
import { Sequelize, Op } from '../models/index';


// select Brand
const allCategoryImg = async (req, res) => {
    const categoryImg = await req.context.models.categoryImg.findAll(
        // {
        //     include: [{
        //         model: req.context.models.add
        //     }]
        // }
    )
    return res.send(categoryImg);
}

const findCategoryImgMethod = async (req, res) => {
    const categoryImg = await req.context.models.categoryImg.findByPk(
        req.params.cateImgId,
    );
    return res.send(categoryImg);
};

// const addBrandMethod = async (req, res) => {
//     const { brand_name } = req.body;

//     const brand = await req.context.models.brand.create({

//         brand_name: brand_name
//     });
//     return res.send(brand);

// };

export default {
    allCategoryImg,
    findCategoryImgMethod,
    // addBrandMethod
}